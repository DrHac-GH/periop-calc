// 周術期計算（PWA）の画面。
//
// 計算はすべて engine.js（Dart のエンジンを変換したもの）の periopEngine.runCalc で行う。
// この画面のコードは、入力を集めてエンジンに渡し、結果を丸めて表示するだけ（丸めは表示だけ）。
'use strict';

(() => {
  // ---------- 小さな道具 ----------

  const $ = (sel, root = document) => root.querySelector(sel);

  /** 要素を作る。attrs の on* はイベント、それ以外は属性。 */
  function h(tag, attrs = {}, ...children) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      el.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return el;
  }

  /** 数値の入力を読む。全角数字・全角の小数点やマイナス・「，」を受け付ける（アプリの parseNumText と同じ）。空欄は null。 */
  function parseNum(text) {
    if (text == null) return null;
    let s = '';
    for (const ch of String(text)) {
      const c = ch.codePointAt(0);
      if (c >= 0xff10 && c <= 0xff19) s += String.fromCodePoint(c - 0xfee0);
      else if ('．。，,'.includes(ch)) s += '.';
      else if ('－−ー'.includes(ch)) s += '-';
      else if (ch !== ' ' && ch !== '　') s += ch;
    }
    if (s === '') return null;
    if (!/^-?(\d+\.?\d*|\.\d+)$/.test(s)) return NaN;
    return Number(s);
  }

  /** 数の並び（「40 50、60」「40,50」など）を読む。区切りは空白・「、」・「,」「，」・「;」。小数点は「.」「．」。 */
  function parseList(text) {
    return String(text || '')
      .split(/[\s　、,，;；]+/)
      .filter((p) => p !== '')
      .map(parseNum);
  }

  /** 表示の丸め（四捨五入）。末尾の 0 は残す（桁を揃える）。 */
  const fixed = (v, digits) => (v == null || !Number.isFinite(v) ? '—' : v.toFixed(digits));

  function run(id, input) {
    return JSON.parse(window.periopEngine.runCalc(id, JSON.stringify(input)));
  }

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* 保存できない環境では覚えない */ } },
  };

  // ---------- 言語（日英、R23） ----------

  const STRINGS = window.PERIOP_STRINGS;
  /** 端末の言語に日本語があれば日本語、なければ英語。画面の切り替えで上書きし、端末に覚える。 */
  let lang = store.get('lang') || ((navigator.languages || [navigator.language || '']).some((l) => String(l).toLowerCase().startsWith('ja')) ? 'ja' : 'en');

  /** 文言を引く。{name} を差し込む。配列の文言はそのまま返す。 */
  function t(key, params = {}) {
    const v = STRINGS[lang][key] ?? STRINGS.ja[key];
    if (Array.isArray(v)) return v;
    if (v == null) return key;
    return v.replace(/\{(\w+)\}/g, (m, k) => (k in params ? String(params[k]) : m));
  }

  // ---------- 単位と文面 ----------

  const DOSE_UNIT_DEFS = {
    ugPerKgMin: ['unitUgKgMin', 'mass'],
    ugPerKgH: ['unitUgKgH', 'mass'],
    mgPerKgH: ['unitMgKgH', 'mass'],
    mgPerH: ['unitMgH', 'mass'],
    ugPerH: ['unitUgH', 'mass'],
    ugPerMin: ['unitUgMin', 'mass'],
    mgPerMin: ['unitMgMin', 'mass'],
    unitPerH: ['unitUnitH', 'unit'],
    unitPerKgH: ['unitUnitKgH', 'unit'],
    unitPerMin: ['unitUnitMin', 'unit'],
  };
  const DOSE_UNITS = new Proxy({}, {
    get: (_, k) => (DOSE_UNIT_DEFS[k] ? { label: t(DOSE_UNIT_DEFS[k][0]), dim: DOSE_UNIT_DEFS[k][1] } : undefined),
    ownKeys: () => Object.keys(DOSE_UNIT_DEFS),
    getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
  });
  const AMOUNT_UNITS = new Proxy({}, {
    get: (_, k) => ({ mg: 'mg', ug: 'μg', unit: t('amountUnits') })[k],
    ownKeys: () => ['mg', 'ug', 'unit'],
    getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
  });
  const amountDim = (u) => (u === 'unit' ? 'unit' : 'mass');

  const CLASS_KEYS = {
    catecholamine: 'classCatecholamine',
    pde3: 'classPde3',
    vasodilator: 'classVasodilator',
    antiarrhythmic: 'classAntiarrhythmic',
    sedative: 'classSedative',
    analgesic: 'classAnalgesic',
    nmb: 'classNmb',
    other: 'classOther',
  };
  const CATEGORY_KEYS = {
    tpn_kit: 'catTpnKit',
    ppn: 'catPpn',
    tpn_base: 'catTpnBase',
    amino_acid: 'catAminoAcid',
    lipid: 'catLipid',
    maintenance: 'catMaintenance',
    extracellular: 'catExtracellular',
    glucose: 'catGlucose',
    saline: 'catSaline',
    electrolyte_additive: 'catElectrolyteAdditive',
    enteral_polymeric: 'catEnteralPolymeric',
    enteral_elemental: 'catEnteralElemental',
    enteral_disease: 'catEnteralDisease',
  };

  const FIELD_KEYS = {
    drug_amount: 'fieldDrugAmount',
    volume: 'fieldVolume',
    volume_ml: 'fieldVolume',
    dose: 'fieldDose',
    weight: 'fieldWeight',
    weight_kg: 'fieldWeight',
    rate: 'fieldRate',
    rate_ml_h: 'fieldRate',
    composition: 'fieldComposition',
    basis: 'fieldBasis',
    standard_volume: 'fieldStandardVolume',
  };

  /** 添付文書の改訂の表記（英語の画面では「revised Mar 2026 (version 4)」の形）。 */
  function revisionText(rev) {
    if (lang !== 'en') return rev;
    const m = /^(\d{4})\u5e74(\d{1,2})\u6708(\u6539\u8a02|\u4f5c\u6210)\uff08\u7b2c(\d+)\u7248\uff09$/.exec(rev || '');
    if (!m) return rev;
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(m[2]) - 1];
    return `${m[3] === '\u6539\u8a02' ? 'revised' : 'issued'} ${month} ${m[1]} (version ${m[4]})`;
  }

  /** 範囲の数値の表記（片側だけのときは ≤・≥）。 */
  function rangeValues(min, max) {
    if (min != null && min === max) return `${min}`;
    if (min == null) return lang === 'en' ? `≤ ${max}` : `〜${max}`;
    if (max == null) return lang === 'en' ? `≥ ${min}` : `${min}〜`;
    return lang === 'en' ? `${min}–${max}` : `${min}〜${max}`;
  }

  /** 製剤の成分名（英語の画面では英語の一般名）。 */
  const ingredientName = (p) => (lang === 'en' && p.ingredient_en ? p.ingredient_en : p.ingredient);
  /** 範囲の場面名（英語の画面では英語）。 */
  const rangeContext = (r) => (lang === 'en' && r.context_en ? r.context_en : r.context);

  /** エンジンのエラーコードを文面にする。 */
  function errorText(code) {
    const [kind, name = ''] = String(code).split(':');
    const field = FIELD_KEYS[name] ? t(FIELD_KEYS[name]) : name;
    switch (kind) {
      case 'missing': return t('errMissing', { field });
      case 'not_positive': return t('errNotPositive', { field });
      case 'out_of_range': return t('errOutOfRange', { field });
      case 'not_finite': return t('errNotFinite');
      case 'unit_mismatch': return t('errUnitMismatch');
      case 'cannot_compare':
        return name === 'weight' ? t('errCannotCompareWeight') : t('errCannotCompareDimension');
      case 'unsupported_unit': return t('errUnsupportedUnit', { field });
      default: return t('errGeneric', { code });
    }
  }

  // ---------- データ ----------

  const data = { gamma: [], parenteral: [], enteral: [], version: null, missing: [] };

  async function loadJson(path) {
    const r = await fetch(path, { cache: 'no-cache' });
    if (!r.ok) throw new Error(`${path}: ${r.status}`);
    return r.json();
  }

  async function loadData() {
    const files = [
      ['gamma', 'data/gamma.json'],
      ['parenteral', 'data/parenteral.json'],
      ['enteral', 'data/enteral_electrolyte.json'],
    ];
    await Promise.all(
      files.map(async ([key, path]) => {
        try {
          const d = await loadJson(path);
          data[key] = (d.items || []).filter((x) => x.status === 'active');
          data[`${key}Version`] = d.data_version || null;
        } catch {
          data.missing.push(path);
        }
      }),
    );
    try {
      data.version = await loadJson('version.json');
    } catch {
      data.version = null;
    }
  }

  function sourceLine(item) {
    const s = item.source || {};
    const parts = [item.brand, item.maker, s.revision ? t('sourceInsert', { revision: revisionText(s.revision) }) : null].filter(Boolean);
    return h(
      'p',
      { class: 'source' },
      t('sourcePrefix'),
      parts.join(' / '),
      s.url ? [' (', h('a', { href: s.url, target: '_blank', rel: 'noopener' }, 'PMDA'), ')'] : null,
    );
  }

  // ---------- 共通の部品 ----------

  let fieldSeq = 0;
  function numberField(label, unit, attrs = {}) {
    const id = `f${++fieldSeq}`;
    const input = h('input', {
      id,
      type: 'text',
      inputmode: 'decimal',
      autocomplete: 'off',
      enterkeyhint: 'done',
      ...attrs,
    });
    const wrap = h('label', { class: 'field', for: id }, h('span', {}, unit ? (lang === 'en' ? `${label} (${unit})` : `${label}（${unit}）`) : label), input);
    return { wrap, input, get value() { return parseNum(input.value); } };
  }

  function selectField(label, options, attrs = {}) {
    const id = `f${++fieldSeq}`;
    const select = h('select', { id, ...attrs });
    const fill = (opts) => {
      select.replaceChildren(
        ...opts.map((o) =>
          o.group
            ? h('optgroup', { label: o.group }, ...o.options.map((x) => h('option', { value: x.value }, x.label)))
            : h('option', { value: o.value }, o.label),
        ),
      );
    };
    fill(options);
    const wrap = h('label', { class: 'field', for: id }, h('span', {}, label), select);
    return { wrap, select, fill, get value() { return select.value; } };
  }

  function segmented(options, value, onChange) {
    const el = h('div', { class: 'segmented', role: 'group' });
    const buttons = options.map((o) =>
      h('button', {
        type: 'button',
        'aria-pressed': String(o.value === value),
        onclick: () => {
          buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btnOf(o.value))));
          onChange(o.value);
        },
      }, o.label),
    );
    const btnOf = (v) => buttons[options.findIndex((o) => o.value === v)];
    el.append(...buttons);
    return el;
  }

  const caution = () => h('div', { class: 'caution', role: 'note' }, t('caution'));

  function screenHead(title, basis) {
    return h(
      'div',
      { class: 'screen-head' },
      h('h2', {}, title),
      h('button', { type: 'button', class: 'btn small', onclick: () => openBasis(basis) }, t('basisButton')),
    );
  }

  function stepsList(steps) {
    if (!steps || steps.length === 0) return null;
    return h('div', {}, h('p', { class: 'group-label' }, t('stepsLabel')), h('ol', { class: 'steps' }, steps.map((s) => h('li', {}, s))));
  }

  // ---------- 溶液（薬剤量・総液量）の入力：γ計算と早見表で共通 ----------

  /**
   * 製剤を選ぶか、薬剤量と総液量を手で入れる。
   * get() は { solution, steps, product, errors } を返す。
   */
  function solutionPicker(onChange) {
    const groups = Object.entries(CLASS_KEYS)
      .map(([cls, key]) => ({
        group: t(key),
        options: data.gamma
          .filter((p) => (p.class || 'other') === cls)
          .map((p) => ({
            value: p.id,
            label: `${ingredientName(p)} — ${p.brand} (${p.amount} ${AMOUNT_UNITS[p.amount_unit]}${p.volume_ml ? ` / ${p.volume_ml} mL` : ''})`,
          })),
      }))
      .filter((g) => g.options.length > 0);
    const product = selectField(t('productField'), [{ value: '', label: t('manualProduct') }, ...groups]);

    const count = numberField(t('countField'), t('countUnit'), { value: '1' });
    const total = numberField(t('fieldVolume'), 'mL', { placeholder: t('totalPlaceholder') });
    const manualAmount = numberField(t('fieldDrugAmount'), '');
    const manualUnit = selectField(t('amountUnitField'), ['mg', 'ug', 'unit'].map((value) => ({ value, label: AMOUNT_UNITS[value] })));
    const productNote = h('div', { class: 'items' });
    const concentration = h('p', { class: 'concentration num' });

    const productBox = h('div', { class: 'row' }, count.wrap, total.wrap);
    const manualBox = h('div', { class: 'row' }, manualAmount.wrap, manualUnit.wrap, total.wrap);

    // 製剤の値が国内の添付文書によることは、製剤を選ぶ欄の直上に常に出す（R23b・司令室の条件）。
    const box = h('div', { class: 'card' }, h('p', { class: 'group-label' }, t('solutionGroup')), lang === 'en' ? h('p', { class: 'note', 'data-testid': 'japan-data' }, t('japanData')) : null, product.wrap, productBox, manualBox, concentration, productNote);

    function current() {
      return data.gamma.find((p) => p.id === product.value) || null;
    }

    function layout() {
      const p = current();
      productBox.hidden = !p;
      manualBox.hidden = !!p;
      // 総液量の欄は 1 つだけ。見えている箱へ移す。
      (p ? productBox : manualBox).append(total.wrap);
      total.wrap.hidden = !!(p && p.ready_to_infuse);
      productNote.replaceChildren();
      if (p) {
        if (p.ready_to_infuse) productNote.append(h('p', { class: 'note' }, t('readyToInfuse')));
        if (p.amount_basis && lang === 'ja') productNote.append(h('p', { class: 'note' }, t('amountBasis', { text: p.amount_basis })));
        productNote.append(sourceLine(p));
      }
    }

    function get() {
      const p = current();
      const errors = [];
      let amount;
      let unit;
      let volume;
      const steps = [];
      if (p) {
        const n = count.value;
        if (n == null || Number.isNaN(n) || !(n > 0) || !Number.isInteger(n)) {
          errors.push(t('errCount'));
        }
        unit = p.amount_unit;
        amount = p.amount * (n || 0);
        if (p.ready_to_infuse) {
          volume = p.volume_ml * (n || 0);
          steps.push(t('stepAmountReady', { amount: p.amount, unit: AMOUNT_UNITS[unit], n, total: amount, volume: p.volume_ml, totalVolume: volume }));
        } else {
          volume = total.value;
          steps.push(t('stepAmount', { amount: p.amount, unit: AMOUNT_UNITS[unit], n, total: amount }));
        }
      } else {
        amount = manualAmount.value;
        unit = manualUnit.value;
        volume = total.value;
      }
      if (Number.isNaN(amount) || Number.isNaN(volume)) errors.push(t('errNotNumber'));
      const solution = { amount_unit: unit };
      if (amount != null && !Number.isNaN(amount)) solution.drug_amount = amount;
      if (volume != null && !Number.isNaN(volume)) solution.volume_ml = volume;
      if (solution.drug_amount > 0 && solution.volume_ml > 0) {
        concentration.textContent = t('concentration', { value: +(solution.drug_amount / solution.volume_ml).toPrecision(4), unit: AMOUNT_UNITS[unit] });
      } else {
        concentration.textContent = '';
      }
      return { solution, steps, product: p, errors, unit };
    }

    product.select.addEventListener('change', () => { layout(); onChange('product'); });
    for (const el of [count.input, total.input, manualAmount.input]) el.addEventListener('input', () => onChange('value'));
    manualUnit.select.addEventListener('change', () => onChange('unit'));
    layout();
    return { el: box, get, current };
  }

  function doseUnitOptions(amountUnit) {
    const dim = amountDim(amountUnit);
    return Object.entries(DOSE_UNITS)
      .filter(([, u]) => u.dim === dim)
      .map(([value, u]) => ({ value, label: u.label }));
  }

  // ---------- γ計算（PWA-01・02・04） ----------

  function gammaScreen() {
    let direction = store.get('gamma.direction') || 'toRate';
    const result = h('div', { class: 'result empty', id: 'gamma-result', 'aria-live': 'polite' });
    const messages = h('div', { class: 'items' });
    const steps = h('div');

    const picker = solutionPicker(onChange);
    const weight = numberField(t('fieldWeight'), 'kg');
    const unit = selectField(t('doseUnitField'), doseUnitOptions('mg'));
    const dose = numberField(t('fieldDose'), '');
    const rate = numberField(t('fieldRate'), 'mL/h');
    const doseBox = h('div', { class: 'row' }, dose.wrap);
    const rateBox = h('div', { class: 'row' }, rate.wrap);

    const dirSwitch = segmented(
      [
        { value: 'toRate', label: t('toRate') },
        { value: 'toDose', label: t('toDose') },
      ],
      direction,
      (v) => { direction = v; store.set('gamma.direction', v); layout(); update(); },
    );

    function syncUnits(reason) {
      const { unit: amountUnit, product } = picker.get();
      const opts = doseUnitOptions(amountUnit);
      const prev = unit.value;
      unit.fill(opts);
      if (reason === 'product' && product && product.default_dose_unit && opts.some((o) => o.value === product.default_dose_unit)) {
        unit.select.value = product.default_dose_unit;
      } else if (opts.some((o) => o.value === prev)) {
        unit.select.value = prev;
      }
      dose.wrap.firstChild.textContent = t('doseWithUnit', { unit: DOSE_UNITS[unit.value].label });
    }

    function layout() {
      doseBox.hidden = direction !== 'toRate';
      rateBox.hidden = direction !== 'toDose';
    }

    function onChange(reason) {
      if (reason === 'product' || reason === 'unit') syncUnits(reason);
      update();
    }

    function showResult(label, value, unitLabel) {
      result.classList.toggle('empty', value == null);
      result.replaceChildren(
        h('span', { class: 'label' }, label),
        h('span', { class: 'value', 'data-testid': 'result-value' }, value == null ? t('waiting') : [value, h('small', {}, unitLabel)]),
      );
    }

    function update() {
      messages.replaceChildren();
      steps.replaceChildren();
      const s = picker.get();
      const doseUnit = unit.value;
      const w = weight.value;
      const input = { ...s.solution, dose_unit: doseUnit };
      if (w != null && !Number.isNaN(w)) input.weight_kg = w;
      const target = direction === 'toRate' ? dose.value : rate.value;
      const label = direction === 'toRate' ? t('fieldRate') : t('doseWithUnit', { unit: DOSE_UNITS[doseUnit].label });
      const numbersPresent = target != null && s.solution.drug_amount != null && s.solution.volume_ml != null;
      if (!numbersPresent) {
        showResult(label, null);
        return;
      }
      const errs = [...s.errors];
      if (Number.isNaN(w) || Number.isNaN(target)) errs.push(t('errNotNumber'));
      if (errs.length) {
        showResult(label, null);
        messages.append(...errs.map((e) => h('p', { class: 'error', role: 'alert' }, e)));
        return;
      }
      let doseValue;
      let out;
      if (direction === 'toRate') {
        out = run('PWA-01', { ...input, dose: target });
        doseValue = target;
      } else {
        out = run('PWA-02', { ...input, rate_ml_h: target });
        doseValue = out.value;
      }
      if (out.error) {
        showResult(label, null);
        messages.append(h('p', { class: 'error', role: 'alert' }, errorText(out.error)));
        return;
      }
      if (direction === 'toRate') showResult(t('fieldRate'), fixed(out.value, 2), 'mL/h');
      else showResult(t('fieldDose'), fixed(out.value, 3), DOSE_UNITS[doseUnit].label);
      steps.append(stepsList([...s.steps, ...out.steps]));

      // 添付文書の用量との照合（範囲外の事実だけを出す）。
      const ranges = (s.product && s.product.label_ranges) || [];
      if (ranges.length) {
        const lines = [];
        const ROUTES = { epidural: t('routeEpidural'), extracorporeal: t('routeExtracorporeal'), other: t('routeOther') };
        for (const r of ranges) {
          const valueText = rangeValues(r.min, r.max);
          const unitLabel = DOSE_UNITS[r.unit]?.label || r.unit;
          if (r.route && r.route !== 'iv') {
            lines.push(h('li', {}, t('rangeReferenceRoute', { route: ROUTES[r.route] || r.route, context: rangeContext(r), value: valueText, unit: unitLabel })));
            continue;
          }
          if (r.kind === 'reference') {
            lines.push(h('li', {}, t('rangeReference', { context: rangeContext(r), value: valueText, unit: unitLabel })));
            continue;
          }
          const cmp = run('PWA-04', {
            value: doseValue,
            value_unit: doseUnit,
            min: r.min,
            max: r.max,
            range_unit: r.unit,
            ...(input.weight_kg != null ? { weight_kg: input.weight_kg } : {}),
          });
          const rangeText = t('rangeText', { context: rangeContext(r), value: valueText, unit: unitLabel });
          if (cmp.error) lines.push(h('li', {}, t('rangeError', { range: rangeText, error: errorText(cmp.error) })));
          else if (cmp.outside) messages.append(h('p', { class: 'warn', role: 'status' }, t('rangeOutside', { range: rangeText })));
          else lines.push(h('li', {}, t('rangeListed', { range: rangeText })));
        }
        if (lines.length) messages.append(h('ul', { class: 'ranges' }, lines));
      }
    }

    for (const el of [weight.input, dose.input, rate.input]) el.addEventListener('input', update);
    unit.select.addEventListener('change', () => { syncUnits('unit'); update(); });

    syncUnits('init');
    layout();
    const screen = h(
      'section',
      { class: 'screen', 'aria-labelledby': 'gamma-title' },
      screenHead(t('gammaTitle'), 'gamma'),
      caution(),
      picker.el,
      h('div', { class: 'card' }, h('p', { class: 'group-label' }, t('doseGroup')), dirSwitch, h('div', { class: 'row' }, weight.wrap, unit.wrap), doseBox, rateBox),
      result,
      messages,
      steps,
    );
    screen.querySelector('h2').id = 'gamma-title';
    update();
    return screen;
  }

  // ---------- シリンジ希釈早見表（PWA-03） ----------

  function tableScreen() {
    const out = h('div', { class: 'items', 'aria-live': 'polite' });
    const picker = solutionPicker(onChange);
    const unit = selectField(t('doseUnitField'), doseUnitOptions('mg'));
    const weights = h('input', { type: 'text', inputmode: 'decimal', value: '40 50 60 70 80', autocomplete: 'off' });
    const doses = h('input', { type: 'text', inputmode: 'decimal', placeholder: t('dosesPlaceholder'), autocomplete: 'off' });
    const weightsWrap = h('label', { class: 'field' }, h('span', {}, t('weightsField')), weights);
    const dosesWrap = h('label', { class: 'field' }, h('span', {}, t('dosesField')), doses);

    function onChange(reason) {
      if (reason === 'product' || reason === 'unit') {
        const { unit: amountUnit, product } = picker.get();
        const opts = doseUnitOptions(amountUnit);
        const prev = unit.value;
        unit.fill(opts);
        if (reason === 'product' && product?.default_dose_unit && opts.some((o) => o.value === product.default_dose_unit)) unit.select.value = product.default_dose_unit;
        else if (opts.some((o) => o.value === prev)) unit.select.value = prev;
      }
      update();
    }

    function update() {
      out.replaceChildren();
      const s = picker.get();
      const perKg = unit.value.includes('PerKg');
      weightsWrap.hidden = !perKg;
      const ws = perKg ? parseList(weights.value) : [1];
      const ds = parseList(doses.value);
      if (s.solution.drug_amount == null || s.solution.volume_ml == null || ds.length === 0 || ws.length === 0) {
        out.append(h('p', { class: 'note' }, t('tableEmpty')));
        return;
      }
      const errs = [...s.errors];
      if ([...ws, ...ds].some((x) => x == null || Number.isNaN(x))) errs.push(t('tableBadList'));
      if (ws.length > 12 || ds.length > 12) errs.push(t('tableTooMany'));
      if (errs.length) {
        out.append(...errs.map((e) => h('p', { class: 'error', role: 'alert' }, e)));
        return;
      }
      const r = run('PWA-03', { ...s.solution, dose_unit: unit.value, weights_kg: ws, doses: ds });
      if (r.error) {
        out.append(h('p', { class: 'error', role: 'alert' }, errorText(r.error)));
        return;
      }
      const unitLabel = DOSE_UNITS[unit.value].label;
      const table = h(
        'table',
        { 'data-testid': 'syringe-table' },
        h('caption', { class: 'note', style: 'caption-side: bottom; text-align: left; padding: 6px 10px;' }, t('tableCaption', { unit: unitLabel })),
        h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, perKg ? t('tableCornerKg') : t('tableCornerDose')), ds.map((d) => h('th', { scope: 'col' }, String(d))))),
        h('tbody', {}, r.table.map((row, i) => h('tr', {}, h('th', { scope: 'row' }, perKg ? `${ws[i]} kg` : t('tableRowRate')), row.map((v) => h('td', {}, fixed(v, 2)))))),
      );
      out.append(h('div', { class: 'table-wrap' }, table));
      if (s.steps.length) out.append(stepsList(s.steps));
    }

    for (const el of [weights, doses]) el.addEventListener('input', update);
    unit.select.addEventListener('change', () => onChange('unit'));
    onChange('init');

    return h(
      'section',
      { class: 'screen' },
      screenHead(t('tableTitle'), 'table'),
      caution(),
      picker.el,
      h('div', { class: 'card' }, h('p', { class: 'group-label' }, t('tableAxes')), unit.wrap, weightsWrap, dosesWrap),
      out,
    );
  }

  // ---------- 組成合計（PWA-05・06） ----------

  const TOTAL_ROWS = [
    ['kcal', 'rowKcal', 'kcal', 0],
    ['glucose_g', 'rowCarb', 'g', 1],
    ['amino_acid_g', 'rowProtein', 'g', 1],
    ['lipid_g', 'rowLipid', 'g', 1],
    ['na_meq', 'Na', 'mEq', 1],
    ['k_meq', 'K', 'mEq', 1],
    ['cl_meq', 'Cl', 'mEq', 1],
    ['ca_meq', 'Ca', 'mEq', 1],
    ['mg_meq', 'Mg', 'mEq', 1],
    ['p_mmol', 'P', 'mmol', 1],
    ['water_ml', 'rowWaterListed', 'mL', 0],
  ];
  /** 行の名前（キーでなければ記号のまま：Na・K など）。 */
  const rowLabel = (k) => (STRINGS.ja[k] ? t(k) : k);

  const MANUAL_FIELDS = [
    ['kcal', 'rowKcal', 'kcal'],
    ['glucose_g', 'rowCarb', 'g'],
    ['amino_acid_g', 'rowProtein', 'g'],
    ['lipid_g', 'rowLipid', 'g'],
    ['na', 'Na', 'mEq'],
    ['k', 'K', 'mEq'],
    ['cl', 'Cl', 'mEq'],
    ['ca', 'Ca', 'mEq'],
    ['mg', 'Mg', 'mEq'],
    ['p', 'P', 'mmol'],
    ['water_ml', 'rowWater', 'mL'],
  ];

  function compositionScreen() {
    const rows = [];
    const list = h('div', { class: 'items' });
    const out = h('div', { class: 'items', 'aria-live': 'polite' });
    const all = [...data.parenteral, ...data.enteral];

    const groups = Object.entries(CATEGORY_KEYS)
      .map(([cat, key]) => ({
        group: t(key),
        options: all.filter((p) => p.category === cat).map((p) => ({ value: p.id, label: p.brand })),
      }))
      .filter((g) => g.options.length > 0);
    const adder = selectField(t('compAdd'), [{ value: '', label: t('compChoose') }, ...groups, { value: '__manual', label: t('compManualOption') }]);
    adder.select.addEventListener('change', () => {
      const v = adder.select.value;
      if (!v) return;
      addRow(v === '__manual' ? null : all.find((p) => p.id === v));
      adder.select.value = '';
    });

    function addRow(product) {
      const volume = numberField(product && product.basis?.unit === 'g' ? t('compVolumePrepared') : t('compVolume'), 'mL');
      const row = { product, volume, manual: {}, name: null };
      const remove = h('button', { type: 'button', class: 'btn small', onclick: () => { rows.splice(rows.indexOf(row), 1); el.remove(); update(); } }, t('compRemove'));
      let body;
      if (product) {
        const sizes = (product.sizes_ml || []).map((ml) =>
          h('button', { type: 'button', class: 'btn small num', onclick: () => { volume.input.value = String(ml); update(); } }, `${ml} mL`),
        );
        const basisNote = product.basis?.unit === 'g'
          ? (product.basis.standard_volume_ml
            ? t('compBasisPowder', { amount: product.basis.amount, volume: product.basis.standard_volume_ml })
            : t('compBasisPowderNoVolume', { amount: product.basis.amount }))
          : null;
        body = h('div', { class: 'items' }, volume.wrap, sizes.length ? h('div', { class: 'btn-row' }, sizes) : null, basisNote ? h('p', { class: 'note' }, basisNote) : null, sourceLine(product));
      } else {
        row.name = h('input', { type: 'text', placeholder: t('compNamePlaceholder'), autocomplete: 'off' });
        const fields = MANUAL_FIELDS.map(([key, label, unitLabel]) => {
          const f = numberField(rowLabel(label), `${unitLabel}/100 mL`);
          row.manual[key] = { field: f, unit: unitLabel };
          f.input.addEventListener('input', update);
          return f.wrap;
        });
        body = h('div', { class: 'items' }, h('label', { class: 'field' }, h('span', {}, t('compName')), row.name), volume.wrap, h('p', { class: 'note' }, t('compManualNote')), h('div', { class: 'row' }, fields));
      }
      const el = h('div', { class: 'item' }, h('div', { class: 'item-head' }, h('b', {}, product ? product.brand : t('compManualRow')), remove), body);
      volume.input.addEventListener('input', update);
      rows.push(row);
      list.append(el);
      volume.input.focus();
      update();
    }

    /** 1 行を「1 mL あたり」にそろえる（エンジン PWA-06）。 */
    function perMl(row) {
      if (row.product) {
        const p = row.product;
        return run('PWA-06', {
          basis_amount: p.basis?.amount,
          basis_unit: p.basis?.unit,
          standard_volume_ml: p.basis?.standard_volume_ml ?? null,
          entries: (p.composition || []).map((c) => ({ key: c.key, value: c.value, unit: c.unit })),
        });
      }
      const entries = [];
      for (const [key, { field, unit }] of Object.entries(row.manual)) {
        const v = field.value;
        if (v == null) continue;
        if (Number.isNaN(v)) return { error: 'not_number' };
        entries.push({ key, value: v, unit });
      }
      return run('PWA-06', { basis_amount: 100, basis_unit: 'mL', entries });
    }

    function update() {
      out.replaceChildren();
      if (rows.length === 0) {
        out.append(h('p', { class: 'note' }, t('compEmpty')));
        return;
      }
      const items = [];
      const notes = [];
      const errors = [];
      const stepLines = [];
      for (const row of rows) {
        const name = row.product ? row.product.brand : (row.name.value || t('compManualRow'));
        const v = row.volume.value;
        if (v == null) continue;
        if (Number.isNaN(v)) { errors.push(t('compVolumeNotNumber', { name })); continue; }
        if (row.product && row.product.basis?.unit === 'g' && !row.product.basis.standard_volume_ml) {
          errors.push(t('compNotSummable', { name }));
          continue;
        }
        const pm = perMl(row);
        if (pm.error) { errors.push(t('compRowError', { name, error: pm.error === 'not_number' ? t('errNotNumber') : errorText(pm.error) })); continue; }
        const SKIPPED_KEYS = { acetate: 'skipAcetate', lactate: 'skipLactate', citrate: 'skipCitrate', gluconate: 'skipGluconate', bicarbonate: 'skipBicarbonate', zn: 'skipZn', p: 'skipPMeq' };
        const skippedNames = (pm.skipped || []).filter((sk) => sk.key !== 'npc_n').map((sk) => (SKIPPED_KEYS[sk.key] ? t(SKIPPED_KEYS[sk.key]) : sk.key));
        if (skippedNames.length) notes.push(t('compSkipped', { name, items: skippedNames.join(t('listSep')) }));
        if (row.product?.contains_vitamins || row.product?.contains_trace_elements) notes.push(t('compVitamins', { name }));
        if (row.product) {
          // 添付文書に記載のない項目は 0 として足さず、足していないことを示す。
          const absent = TOTAL_ROWS.filter(([key]) => !(key in pm.per_ml)).map(([key, label]) => (key === 'water_ml' ? t('rowWater') : rowLabel(label)));
          if (absent.length) notes.push(t('compAbsent', { name, items: absent.join(t('listSep')) }));
        }
        items.push({ per_ml: pm.per_ml, volume_ml: v, name });
      }
      errors.forEach((e) => out.append(h('p', { class: 'error', role: 'alert' }, e)));
      if (items.length === 0) return;
      const r = run('PWA-05', { items: items.map(({ per_ml, volume_ml }) => ({ per_ml, volume_ml })) });
      if (r.error) {
        out.append(h('p', { class: 'error', role: 'alert' }, errorText(r.error)));
        return;
      }
      const tbody = h('tbody', {},
        h('tr', {}, h('th', { scope: 'row' }, t('rowVolume')), h('td', {}, fixed(r.volume_ml, 0)), h('td', { class: 'muted' }, 'mL')),
        TOTAL_ROWS.map(([key, label, unitLabel, digits]) => h('tr', {}, h('th', { scope: 'row' }, rowLabel(label)), h('td', {}, fixed(r.totals[key] ?? 0, digits)), h('td', { class: 'muted' }, unitLabel))),
        h('tr', {}, h('th', { scope: 'row' }, t('rowNpc')), h('td', {}, fixed(r.npc_kcal, 0)), h('td', { class: 'muted' }, 'kcal')),
        h('tr', {}, h('th', { scope: 'row' }, r.nitrogen_from_label ? t('rowNitrogenLabel') : t('rowNitrogenCalc')), h('td', {}, fixed(r.nitrogen_g, 2)), h('td', { class: 'muted' }, 'g')),
        h('tr', {}, h('th', { scope: 'row' }, t('rowNpcN')), h('td', { 'data-testid': 'npc-n' }, r.npc_n_ratio == null ? '—' : fixed(r.npc_n_ratio, 0)), h('td', { class: 'muted' }, '')),
      );
      out.append(
        h('div', { class: 'result' }, h('span', { class: 'label' }, t('compTotal')), h('span', { class: 'value' }, fixed(r.totals.kcal, 0), h('small', {}, 'kcal')), h('span', { class: 'label num' }, t('compTotalVolume', { volume: fixed(r.volume_ml, 0) }))),
        h('div', { class: 'table-wrap' }, h('table', { 'data-testid': 'composition-table' }, h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, t('colItem')), h('th', { scope: 'col' }, t('colTotal')), h('th', { scope: 'col' }, t('colUnit')))), tbody)),
      );
      r.contributions.forEach((c, i) => {
        const it = items[i];
        stepLines.push(t('compStep', { name: it.name, volume: it.volume_ml, kcal: fixed(c.kcal ?? 0, 0), protein: fixed(c.amino_acid_g ?? 0, 1), na: fixed(c.na_meq ?? 0, 1), k: fixed(c.k_meq ?? 0, 1) }));
      });
      if (r.npc_n_ratio != null) stepLines.push(t('compStepNpcN', { npc: fixed(r.npc_kcal, 0), n: fixed(r.nitrogen_g, 2), ratio: fixed(r.npc_n_ratio, 0) }));
      out.append(stepsList(stepLines));
      if (notes.length) out.append(h('ul', { class: 'ranges' }, [...new Set(notes)].map((n) => h('li', {}, n))));
    }

    update();
    return h(
      'section',
      { class: 'screen' },
      screenHead(t('compTitle'), 'composition'),
      caution(),
      h('div', { class: 'card' }, lang === 'en' ? h('p', { class: 'note', 'data-testid': 'japan-data' }, t('japanData')) : null, adder.wrap, list),
      out,
    );
  }

  // ---------- 情報 ----------

  function infoScreen() {
    const v = data.version;
    const sources = (items) =>
      h('ul', { class: 'info-list' }, items.map((p) => h('li', {}, t('infoSourceLine', { brand: p.brand, maker: p.maker || '', revision: revisionText(p.source?.revision || '') }), p.source?.url ? [' (', h('a', { href: p.source.url, target: '_blank', rel: 'noopener' }, 'PMDA'), ')'] : null)));
    const install = h('button', { type: 'button', class: 'btn primary', hidden: !deferredInstall, onclick: async () => { if (!deferredInstall) return; deferredInstall.prompt(); deferredInstall = null; install.hidden = true; } }, t('infoInstallButton'));
    installButton = install;
    return h(
      'section',
      { class: 'screen' },
      h('div', { class: 'screen-head' }, h('h2', {}, t('infoTitle'))),
      caution(),
      h('div', { class: 'card' },
        h('p', { class: 'group-label' }, t('infoVersionGroup')),
        h('p', { class: 'num', 'data-testid': 'info-version' }, v ? t('infoVersion', { version: v.version, updated: v.updated }) : t('infoVersionMissing')),
        v?.data ? h('ul', { class: 'ranges' }, Object.entries(v.data).map(([f, dv]) => h('li', {}, t('infoDataVersion', { file: f, version: dv || '—' })))) : null,
        data.missing.length ? h('p', { class: 'warn' }, t('infoDataMissing', { files: data.missing.join(', ') })) : null,
      ),
      h('div', { class: 'card' },
        h('p', { class: 'group-label' }, t('infoAboutGroup')),
        h('p', {}, t('infoAbout1')),
        h('p', {}, t('infoAbout2')),
        h('p', { class: 'note' }, t('infoAbout3')),
        h('p', { class: 'note' }, t('japanData')),
      ),
      h('div', { class: 'card' },
        h('p', { class: 'group-label' }, t('infoInstallGroup')),
        install,
        h('p', { class: 'note' }, t('infoInstallIos')),
        h('p', { class: 'note' }, t('infoInstallAndroid')),
      ),
      h('div', { class: 'card' },
        h('p', { class: 'group-label' }, t('infoSourcesGroup')),
        h('details', {}, h('summary', {}, t('infoSourcesGamma', { n: data.gamma.length })), sources(data.gamma)),
        h('details', {}, h('summary', {}, t('infoSourcesParenteral', { n: data.parenteral.length })), sources(data.parenteral)),
        h('details', {}, h('summary', {}, t('infoSourcesEnteral', { n: data.enteral.length })), sources(data.enteral)),
      ),
    );
  }

  // ---------- 式と根拠 ----------

  /** 式と根拠（文言は i18n.js の basis* キー）。 */
  const BASIS_KEYS = { gamma: 'basisGamma', table: 'basisTable', composition: 'basisComp' };

  function openBasis(which) {
    const dlg = $('#basis');
    const k = BASIS_KEYS[which];
    const section = (title, items) => (items && items.length ? h('div', {}, h('h4', {}, title), h('ul', {}, items.map((x) => h('li', {}, x)))) : null);
    $('#basis-body').replaceChildren(
      h('div', { class: 'screen-head' }, h('h3', { id: 'basis-title' }, t(`${k}Title`)), h('button', { type: 'button', class: 'btn small', onclick: () => dlg.close() }, t('close'))),
      section(t('basisFormula'), t(`${k}Formula`)),
      h('p', { class: 'note' }, t('basisStepsNote')),
      section(t('basisScope'), t(`${k}Scope`)),
      section(t('basisSources'), t(`${k}Sources`)),
      section(t('basisNotes'), t(`${k}Notes`)),
      h('p', { class: 'note' }, t('caution')),
    );
    dlg.showModal();
  }

  // ---------- タブ・版・更新 ----------

  let deferredInstall = null;
  let installButton = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstall = e;
    if (installButton) installButton.hidden = false;
  });

  const SCREENS = { gamma: gammaScreen, table: tableScreen, composition: compositionScreen, info: infoScreen };
  const built = {};

  function show(tab) {
    if (!SCREENS[tab]) tab = 'gamma';
    store.set('tab', tab);
    const main = $('#main');
    for (const [k, el] of Object.entries(built)) el.hidden = k !== tab;
    if (!built[tab]) {
      built[tab] = SCREENS[tab]();
      main.append(built[tab]);
    }
    document.querySelectorAll('.tabs button').forEach((b) => {
      if (b.dataset.tab === tab) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    if (location.hash !== `#${tab}`) history.replaceState(null, '', `#${tab}`);
  }

  /** 言語に合わせて、固定の文言（上端・タブ・更新の案内）とエンジンの途中の計算の言語を変える。 */
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t('appName');
    $('#app-name').textContent = t('appName');
    const toggle = $('#lang-toggle');
    toggle.textContent = t('langToggle');
    toggle.setAttribute('aria-label', t('langToggleLabel'));
    $('.tabs').setAttribute('aria-label', t('navLabel'));
    const TAB_KEYS = { gamma: 'tabGamma', table: 'tabTable', composition: 'tabComposition', info: 'tabInfo' };
    document.querySelectorAll('.tabs button').forEach((b) => { b.querySelector('.tab-label').textContent = t(TAB_KEYS[b.dataset.tab]); });
    $('#update-text').textContent = t('updateAvailable');
    $('#update-button').textContent = t('updateButton');
    window.periopEngine.setLanguage(lang);
  }

  function showVersion() {
    const v = data.version;
    $('#version').replaceChildren(
      `${t('versionLabel')} `, h('b', { class: 'num', 'data-testid': 'version' }, v?.version || '—'),
      lang === 'en' ? ` · ${t('updatedLabel')} ` : `・${t('updatedLabel')} `, h('b', { class: 'num', 'data-testid': 'updated' }, v?.updated || '—'),
    );
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
    navigator.serviceWorker.register('sw.js').then((reg) => {
      const offer = (worker) => {
        const bar = $('#update-bar');
        bar.hidden = false;
        $('#update-button').onclick = () => worker.postMessage('skipWaiting');
      };
      if (reg.waiting && navigator.serviceWorker.controller) offer(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        w?.addEventListener('statechange', () => {
          if (w.state === 'installed' && navigator.serviceWorker.controller) offer(w);
        });
      });
    }).catch(() => { /* 登録できない環境（プライベートモードなど）では、通信のあるときだけ使える */ });
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloaded) return;
      reloaded = true;
      location.reload();
    });
  }

  async function start() {
    if (!window.periopEngine) {
      $('#loading').textContent = t('engineMissing');
      return;
    }
    applyLanguage();
    await loadData();
    $('#loading').remove();
    showVersion();
    document.querySelectorAll('.tabs button').forEach((b) => b.addEventListener('click', () => show(b.dataset.tab)));
    $('#lang-toggle').addEventListener('click', () => {
      lang = lang === 'ja' ? 'en' : 'ja';
      store.set('lang', lang);
      applyLanguage();
      showVersion();
      // 画面を作り直す（入力はリセットされる）。
      for (const k of Object.keys(built)) { built[k].remove(); delete built[k]; }
      show(store.get('tab') || 'gamma');
    });
    show(location.hash.slice(1) || store.get('tab') || 'gamma');
    registerServiceWorker();
  }

  start();
})();
