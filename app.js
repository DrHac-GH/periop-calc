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

  // ---------- 単位と文面 ----------

  const DOSE_UNITS = {
    ugPerKgMin: { label: 'μg/kg/分（γ）', dim: 'mass' },
    ugPerKgH: { label: 'μg/kg/時', dim: 'mass' },
    mgPerKgH: { label: 'mg/kg/時', dim: 'mass' },
    mgPerH: { label: 'mg/時', dim: 'mass' },
    ugPerH: { label: 'μg/時', dim: 'mass' },
    ugPerMin: { label: 'μg/分', dim: 'mass' },
    mgPerMin: { label: 'mg/分', dim: 'mass' },
    unitPerH: { label: '単位/時', dim: 'unit' },
    unitPerKgH: { label: '単位/kg/時', dim: 'unit' },
    unitPerMin: { label: '単位/分', dim: 'unit' },
  };
  const AMOUNT_UNITS = { mg: 'mg', ug: 'μg', unit: '単位' };
  const amountDim = (u) => (u === 'unit' ? 'unit' : 'mass');

  const CLASS_LABELS = {
    catecholamine: 'カテコラミン',
    pde3: 'PDE3 阻害薬',
    vasodilator: '血管拡張薬・降圧薬',
    antiarrhythmic: '抗不整脈薬・心拍数調節',
    sedative: '鎮静薬',
    analgesic: '鎮痛薬',
    nmb: '筋弛緩薬',
    other: 'その他',
  };
  const CATEGORY_LABELS = {
    tpn_kit: '高カロリー輸液キット',
    ppn: '末梢静脈栄養',
    tpn_base: '糖・電解質の基本液',
    amino_acid: 'アミノ酸製剤',
    lipid: '脂肪乳剤',
    maintenance: '維持液',
    extracellular: '細胞外液',
    glucose: '糖液',
    saline: '生理食塩液',
    electrolyte_additive: '補正用電解質',
    enteral_polymeric: '経腸：半消化態',
    enteral_elemental: '経腸：消化態・成分栄養',
    enteral_disease: '経腸：病態別',
  };

  const FIELD_NAMES = {
    drug_amount: '薬剤量',
    volume: '総液量',
    volume_ml: '総液量',
    dose: '投与量',
    weight: '体重',
    weight_kg: '体重',
    rate: '流速',
    rate_ml_h: '流速',
    composition: '組成',
    basis: '組成の基準量',
    standard_volume: '調製量',
  };

  /** エンジンのエラーコードを文面にする。 */
  function errorText(code) {
    const [kind, name = ''] = String(code).split(':');
    const field = FIELD_NAMES[name] || name;
    switch (kind) {
      case 'missing': return `${field}を入れてください`;
      case 'not_positive': return `${field}は 0 より大きい値を入れてください`;
      case 'out_of_range': return `${field}が入力できる範囲の外です`;
      case 'not_finite': return '計算できない値になりました。入力を確かめてください';
      case 'unit_mismatch': return '薬剤量の単位（単位 と mg・μg）と、投与量の単位の種類が合いません';
      case 'cannot_compare':
        return name === 'weight'
          ? '体重がないため、添付文書の用量と照合できません'
          : '単位の種類が違うため、添付文書の用量と照合できません';
      case 'unsupported_unit': return `${field}の単位は換算できません`;
      default: return `入力を確かめてください（${code}）`;
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
    const parts = [item.brand, item.maker, s.revision ? `添付文書 ${s.revision}` : null].filter(Boolean);
    return h(
      'p',
      { class: 'source' },
      '出典：',
      parts.join('／'),
      s.url ? ['（', h('a', { href: s.url, target: '_blank', rel: 'noopener' }, 'PMDA'), '）'] : null,
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
    const wrap = h('label', { class: 'field', for: id }, h('span', {}, unit ? `${label}（${unit}）` : label), input);
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

  const caution = () => h('div', { class: 'caution', role: 'note' }, '計算結果は必ず指示簿と照合し、医師の確認を受けてください');

  function screenHead(title, basis) {
    return h(
      'div',
      { class: 'screen-head' },
      h('h2', {}, title),
      h('button', { type: 'button', class: 'btn small', onclick: () => openBasis(basis) }, '式と根拠'),
    );
  }

  function stepsList(steps) {
    if (!steps || steps.length === 0) return null;
    return h('div', {}, h('p', { class: 'group-label' }, 'この入力での計算'), h('ol', { class: 'steps' }, steps.map((s) => h('li', {}, s))));
  }

  // ---------- 溶液（薬剤量・総液量）の入力：γ計算と早見表で共通 ----------

  /**
   * 製剤を選ぶか、薬剤量と総液量を手で入れる。
   * get() は { solution, steps, product, errors } を返す。
   */
  function solutionPicker(onChange) {
    const groups = Object.entries(CLASS_LABELS)
      .map(([cls, label]) => ({
        group: label,
        options: data.gamma
          .filter((p) => (p.class || 'other') === cls)
          .map((p) => ({
            value: p.id,
            label: `${p.ingredient}　${p.brand}（${p.amount} ${AMOUNT_UNITS[p.amount_unit]}${p.volume_ml ? ` / ${p.volume_ml} mL` : ''}）`,
          })),
      }))
      .filter((g) => g.options.length > 0);
    const product = selectField('製剤', [{ value: '', label: '手入力（薬剤量と総液量を入れる）' }, ...groups]);

    const count = numberField('本数', '本', { value: '1' });
    const total = numberField('総液量', 'mL', { placeholder: '薬液を含めた全量' });
    const manualAmount = numberField('薬剤量', '');
    const manualUnit = selectField('薬剤量の単位', Object.entries(AMOUNT_UNITS).map(([value, label]) => ({ value, label })));
    const productNote = h('div', { class: 'items' });
    const concentration = h('p', { class: 'concentration num' });

    const productBox = h('div', { class: 'row' }, count.wrap, total.wrap);
    const manualBox = h('div', { class: 'row' }, manualAmount.wrap, manualUnit.wrap, total.wrap);

    const box = h('div', { class: 'card' }, h('p', { class: 'group-label' }, '薬液'), product.wrap, productBox, manualBox, concentration, productNote);

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
        if (p.ready_to_infuse) productNote.append(h('p', { class: 'note' }, '希釈せずにそのまま使う製剤です。総液量は 1 本の液量 × 本数です'));
        if (p.amount_basis) productNote.append(h('p', { class: 'note' }, `含量：${p.amount_basis}`));
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
          errors.push('本数は 1 以上の整数を入れてください');
        }
        unit = p.amount_unit;
        amount = p.amount * (n || 0);
        if (p.ready_to_infuse) {
          volume = p.volume_ml * (n || 0);
          steps.push(`薬剤量 ${p.amount} ${AMOUNT_UNITS[unit]} × ${n} 本 = ${amount} ${AMOUNT_UNITS[unit]}、総液量 ${p.volume_ml} mL × ${n} 本 = ${volume} mL`);
        } else {
          volume = total.value;
          steps.push(`薬剤量 ${p.amount} ${AMOUNT_UNITS[unit]} × ${n} 本 = ${amount} ${AMOUNT_UNITS[unit]}`);
        }
      } else {
        amount = manualAmount.value;
        unit = manualUnit.value;
        volume = total.value;
      }
      if (Number.isNaN(amount) || Number.isNaN(volume)) errors.push('数値として読めない入力があります');
      const solution = { amount_unit: unit };
      if (amount != null && !Number.isNaN(amount)) solution.drug_amount = amount;
      if (volume != null && !Number.isNaN(volume)) solution.volume_ml = volume;
      if (solution.drug_amount > 0 && solution.volume_ml > 0) {
        concentration.textContent = `濃度 ${+(solution.drug_amount / solution.volume_ml).toPrecision(4)} ${AMOUNT_UNITS[unit]}/mL`;
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
    const weight = numberField('体重', 'kg');
    const unit = selectField('投与量の単位', doseUnitOptions('mg'));
    const dose = numberField('投与量', '');
    const rate = numberField('流速', 'mL/h');
    const doseBox = h('div', { class: 'row' }, dose.wrap);
    const rateBox = h('div', { class: 'row' }, rate.wrap);

    const dirSwitch = segmented(
      [
        { value: 'toRate', label: '投与量 → 流速' },
        { value: 'toDose', label: '流速 → 投与量' },
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
      dose.wrap.firstChild.textContent = `投与量（${DOSE_UNITS[unit.value].label}）`;
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
        h('span', { class: 'value', 'data-testid': 'result-value' }, value == null ? '入力を待っています' : [value, h('small', {}, unitLabel)]),
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
      const label = direction === 'toRate' ? '流速' : `投与量（${DOSE_UNITS[doseUnit].label}）`;
      const numbersPresent = target != null && s.solution.drug_amount != null && s.solution.volume_ml != null;
      if (!numbersPresent) {
        showResult(label, null);
        return;
      }
      const errs = [...s.errors];
      if (Number.isNaN(w) || Number.isNaN(target)) errs.push('数値として読めない入力があります');
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
      if (direction === 'toRate') showResult('流速', fixed(out.value, 2), 'mL/h');
      else showResult('投与量', fixed(out.value, 3), DOSE_UNITS[doseUnit].label);
      steps.append(stepsList([...s.steps, ...out.steps]));

      // 添付文書の用量との照合（範囲外の事実だけを出す）。
      const ranges = (s.product && s.product.label_ranges) || [];
      if (ranges.length) {
        const lines = [];
        const ROUTES = { epidural: '硬膜外', extracorporeal: '体外循環の回路', other: 'その他の経路' };
        for (const r of ranges) {
          const valueText = r.min != null && r.min === r.max ? `${r.min}` : `${r.min ?? ''}〜${r.max ?? ''}`;
          if (r.route && r.route !== 'iv') {
            lines.push(h('li', {}, `参考（${ROUTES[r.route] || r.route}）：${r.context}：${valueText} ${DOSE_UNITS[r.unit]?.label || r.unit}`));
            continue;
          }
          if (r.kind === 'reference') {
            lines.push(h('li', {}, `添付文書の記載（${r.context}：${valueText} ${DOSE_UNITS[r.unit]?.label || r.unit}）`));
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
          const rangeText = `${r.context}：${r.min ?? ''}〜${r.max ?? ''} ${DOSE_UNITS[r.unit]?.label || r.unit}`;
          if (cmp.error) lines.push(h('li', {}, `添付文書の用量（${rangeText}）— ${errorText(cmp.error)}`));
          else if (cmp.outside) messages.append(h('p', { class: 'warn', role: 'status' }, `添付文書の用量（${rangeText}）の範囲外です`));
          else lines.push(h('li', {}, `添付文書の用量（${rangeText}）`));
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
      screenHead('γ計算', BASIS.gamma),
      caution(),
      picker.el,
      h('div', { class: 'card' }, h('p', { class: 'group-label' }, '投与'), dirSwitch, h('div', { class: 'row' }, weight.wrap, unit.wrap), doseBox, rateBox),
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
    const unit = selectField('投与量の単位', doseUnitOptions('mg'));
    const weights = h('input', { type: 'text', inputmode: 'decimal', value: '40 50 60 70 80', autocomplete: 'off' });
    const doses = h('input', { type: 'text', inputmode: 'decimal', placeholder: '例：0.05 0.1 0.2', autocomplete: 'off' });
    const weightsWrap = h('label', { class: 'field' }, h('span', {}, '体重の列（kg、空白か「、」で区切る）'), weights);
    const dosesWrap = h('label', { class: 'field' }, h('span', {}, '投与量の列（空白か「、」で区切る）'), doses);

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
        out.append(h('p', { class: 'note' }, '薬液と投与量の列を入れると、流速（mL/h）の表が出ます'));
        return;
      }
      const errs = [...s.errors];
      if ([...ws, ...ds].some((x) => x == null || Number.isNaN(x))) errs.push('列に数値として読めない値があります');
      if (ws.length > 12 || ds.length > 12) errs.push('列は 12 個までにしてください');
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
        h('caption', { class: 'note', style: 'caption-side: bottom; text-align: left; padding: 6px 10px;' }, `値は流速（mL/h）。列は投与量（${unitLabel}）`),
        h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, perKg ? '体重 kg ＼ 投与量' : '投与量'), ds.map((d) => h('th', { scope: 'col' }, String(d))))),
        h('tbody', {}, r.table.map((row, i) => h('tr', {}, h('th', { scope: 'row' }, perKg ? `${ws[i]} kg` : '流速 mL/h'), row.map((v) => h('td', {}, fixed(v, 2)))))),
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
      screenHead('シリンジ希釈早見表', BASIS.table),
      caution(),
      picker.el,
      h('div', { class: 'card' }, h('p', { class: 'group-label' }, '表の軸'), unit.wrap, weightsWrap, dosesWrap),
      out,
    );
  }

  // ---------- 組成合計（PWA-05・06） ----------

  const TOTAL_ROWS = [
    ['kcal', '熱量', 'kcal', 0],
    ['glucose_g', '糖質', 'g', 1],
    ['amino_acid_g', 'アミノ酸・たん白質', 'g', 1],
    ['lipid_g', '脂質', 'g', 1],
    ['na_meq', 'Na', 'mEq', 1],
    ['k_meq', 'K', 'mEq', 1],
    ['cl_meq', 'Cl', 'mEq', 1],
    ['ca_meq', 'Ca', 'mEq', 1],
    ['mg_meq', 'Mg', 'mEq', 1],
    ['p_mmol', 'P', 'mmol', 1],
    ['water_ml', '水分（記載のある製剤だけ）', 'mL', 0],
  ];

  const MANUAL_FIELDS = [
    ['kcal', '熱量', 'kcal'],
    ['glucose_g', '糖質', 'g'],
    ['amino_acid_g', 'アミノ酸・たん白質', 'g'],
    ['lipid_g', '脂質', 'g'],
    ['na', 'Na', 'mEq'],
    ['k', 'K', 'mEq'],
    ['cl', 'Cl', 'mEq'],
    ['ca', 'Ca', 'mEq'],
    ['mg', 'Mg', 'mEq'],
    ['p', 'P', 'mmol'],
    ['water_ml', '水分', 'mL'],
  ];

  function compositionScreen() {
    const rows = [];
    const list = h('div', { class: 'items' });
    const out = h('div', { class: 'items', 'aria-live': 'polite' });
    const all = [...data.parenteral, ...data.enteral];

    const groups = Object.entries(CATEGORY_LABELS)
      .map(([cat, label]) => ({
        group: label,
        options: all.filter((p) => p.category === cat).map((p) => ({ value: p.id, label: p.brand })),
      }))
      .filter((g) => g.options.length > 0);
    const adder = selectField('製剤を足す', [{ value: '', label: '選んでください' }, ...groups, { value: '__manual', label: '手入力の行（食品など）' }]);
    adder.select.addEventListener('change', () => {
      const v = adder.select.value;
      if (!v) return;
      addRow(v === '__manual' ? null : all.find((p) => p.id === v));
      adder.select.value = '';
    });

    function addRow(product) {
      const volume = numberField(product && product.basis?.unit === 'g' ? '調製後の量' : '使用量', 'mL');
      const row = { product, volume, manual: {}, name: null };
      const remove = h('button', { type: 'button', class: 'btn small', onclick: () => { rows.splice(rows.indexOf(row), 1); el.remove(); update(); } }, '外す');
      let body;
      if (product) {
        const sizes = (product.sizes_ml || []).map((ml) =>
          h('button', { type: 'button', class: 'btn small num', onclick: () => { volume.input.value = String(ml); update(); } }, `${ml} mL`),
        );
        const basisNote = product.basis?.unit === 'g'
          ? `表の値は ${product.basis.amount} g あたり${product.basis.standard_volume_ml ? `（添付文書の標準の調製量 ${product.basis.standard_volume_ml} mL）` : '。添付文書に調製量の記載がないため、mL で合計できません'}`
          : null;
        body = h('div', { class: 'items' }, volume.wrap, sizes.length ? h('div', { class: 'btn-row' }, sizes) : null, basisNote ? h('p', { class: 'note' }, basisNote) : null, sourceLine(product));
      } else {
        row.name = h('input', { type: 'text', placeholder: '名前（任意）', autocomplete: 'off' });
        const fields = MANUAL_FIELDS.map(([key, label, unitLabel]) => {
          const f = numberField(label, `${unitLabel}/100 mL`);
          row.manual[key] = { field: f, unit: unitLabel };
          f.input.addEventListener('input', update);
          return f.wrap;
        });
        body = h('div', { class: 'items' }, h('label', { class: 'field' }, h('span', {}, '名前'), row.name), volume.wrap, h('p', { class: 'note' }, '100 mL あたりの量を入れます。空欄は 0 として足します'), h('div', { class: 'row' }, fields));
      }
      const el = h('div', { class: 'item' }, h('div', { class: 'item-head' }, h('b', {}, product ? product.brand : '手入力の行'), remove), body);
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
        out.append(h('p', { class: 'note' }, '製剤を足して使用量を入れると、合計が出ます'));
        return;
      }
      const items = [];
      const notes = [];
      const errors = [];
      const stepLines = [];
      for (const row of rows) {
        const name = row.product ? row.product.brand : (row.name.value || '手入力の行');
        const v = row.volume.value;
        if (v == null) continue;
        if (Number.isNaN(v)) { errors.push(`${name}：使用量が数値として読めません`); continue; }
        if (row.product && row.product.basis?.unit === 'g' && !row.product.basis.standard_volume_ml) {
          errors.push(`${name}：添付文書に調製量（mL）の記載がないため、mL で合計できません`);
          continue;
        }
        const pm = perMl(row);
        if (pm.error) { errors.push(`${name}：${pm.error === 'not_number' ? '数値として読めない値があります' : errorText(pm.error)}`); continue; }
        const SKIPPED_LABELS = { acetate: '酢酸', lactate: '乳酸', citrate: 'クエン酸', gluconate: 'グルコン酸', bicarbonate: '重炭酸', zn: '亜鉛', p: 'P（mEq）' };
        const skippedNames = (pm.skipped || []).filter((sk) => sk.key !== 'npc_n').map((sk) => SKIPPED_LABELS[sk.key] || sk.key);
        if (skippedNames.length) notes.push(`${name}：${skippedNames.join('・')}は、この表の項目にないため合計に入れていません`);
        if (row.product?.contains_vitamins || row.product?.contains_trace_elements) notes.push(`${name}：ビタミン・微量元素は合計に入れていません`);
        if (row.product) {
          // 添付文書に記載のない項目は 0 として足さず、足していないことを示す。
          const absent = TOTAL_ROWS.filter(([key]) => !(key in pm.per_ml)).map(([, label]) => label.replace('（記載のある製剤だけ）', ''));
          if (absent.length) notes.push(`${name}：添付文書に記載のない項目（${absent.join('・')}）は、合計に入っていません`);
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
        h('tr', {}, h('th', { scope: 'row' }, '容量'), h('td', {}, fixed(r.volume_ml, 0)), h('td', { class: 'muted' }, 'mL')),
        TOTAL_ROWS.map(([key, label, unitLabel, digits]) => h('tr', {}, h('th', { scope: 'row' }, label), h('td', {}, fixed(r.totals[key] ?? 0, digits)), h('td', { class: 'muted' }, unitLabel))),
        h('tr', {}, h('th', { scope: 'row' }, 'NPC（非蛋白熱量）'), h('td', {}, fixed(r.npc_kcal, 0)), h('td', { class: 'muted' }, 'kcal')),
        h('tr', {}, h('th', { scope: 'row' }, r.nitrogen_from_label ? '窒素（添付文書の値）' : '窒素（アミノ酸 ÷ 6.25）'), h('td', {}, fixed(r.nitrogen_g, 2)), h('td', { class: 'muted' }, 'g')),
        h('tr', {}, h('th', { scope: 'row' }, 'NPC/N 比'), h('td', { 'data-testid': 'npc-n' }, r.npc_n_ratio == null ? '—' : fixed(r.npc_n_ratio, 0)), h('td', { class: 'muted' }, '')),
      );
      out.append(
        h('div', { class: 'result' }, h('span', { class: 'label' }, '合計'), h('span', { class: 'value' }, fixed(r.totals.kcal, 0), h('small', {}, 'kcal')), h('span', { class: 'label num' }, `容量 ${fixed(r.volume_ml, 0)} mL`)),
        h('div', { class: 'table-wrap' }, h('table', { 'data-testid': 'composition-table' }, h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, '項目'), h('th', { scope: 'col' }, '合計'), h('th', { scope: 'col' }, '単位'))), tbody)),
      );
      r.contributions.forEach((c, i) => {
        const it = items[i];
        stepLines.push(`${it.name} ${it.volume_ml} mL：熱量 ${fixed(c.kcal ?? 0, 0)} kcal、アミノ酸・たん白質 ${fixed(c.amino_acid_g ?? 0, 1)} g、Na ${fixed(c.na_meq ?? 0, 1)} mEq、K ${fixed(c.k_meq ?? 0, 1)} mEq`);
      });
      if (r.npc_n_ratio != null) stepLines.push(`NPC ${fixed(r.npc_kcal, 0)} ÷ 窒素 ${fixed(r.nitrogen_g, 2)} = ${fixed(r.npc_n_ratio, 0)}`);
      out.append(stepsList(stepLines));
      if (notes.length) out.append(h('ul', { class: 'ranges' }, [...new Set(notes)].map((n) => h('li', {}, n))));
    }

    update();
    return h(
      'section',
      { class: 'screen' },
      screenHead('組成合計', BASIS.composition),
      caution(),
      h('div', { class: 'card' }, adder.wrap, list),
      out,
    );
  }

  // ---------- 情報 ----------

  function infoScreen() {
    const v = data.version;
    const sources = (items) =>
      h('ul', { class: 'info-list' }, items.map((p) => h('li', {}, `${p.brand}／${p.maker || ''}／添付文書 ${p.source?.revision || ''}`, p.source?.url ? ['（', h('a', { href: p.source.url, target: '_blank', rel: 'noopener' }, 'PMDA'), '）'] : null)));
    const install = h('button', { type: 'button', class: 'btn primary', hidden: !deferredInstall, onclick: async () => { if (!deferredInstall) return; deferredInstall.prompt(); deferredInstall = null; install.hidden = true; } }, 'ホーム画面に追加');
    installButton = install;
    return h(
      'section',
      { class: 'screen' },
      h('div', { class: 'screen-head' }, h('h2', {}, '情報')),
      caution(),
      h('div', { class: 'card' },
        h('p', { class: 'group-label' }, '版'),
        h('p', { class: 'num', 'data-testid': 'info-version' }, v ? `版 ${v.version}・更新日 ${v.updated}` : '版の情報を読めませんでした'),
        v?.data ? h('ul', { class: 'ranges' }, Object.entries(v.data).map(([f, dv]) => h('li', {}, `製剤データ ${f}：${dv || '—'}`))) : null,
        data.missing.length ? h('p', { class: 'warn' }, `読めなかったデータ：${data.missing.join('、')}`) : null,
      ),
      h('div', { class: 'card' },
        h('p', { class: 'group-label' }, 'この計算ツールについて'),
        h('p', {}, '周術期・集中治療計算ツールのうち、投与量（γ計算・シリンジ希釈早見表）と組成合計を扱うウェブ版です。数値・出典・警告だけを出し、診断や治療の判断は示しません。'),
        h('p', {}, '計算は端末の中だけで行い、入力した値を送信しません。一度開けば通信のない場所でも使えます。広告はありません。'),
        h('p', { class: 'note' }, '製剤の値は PMDA の添付文書から取り、製剤ごとに販売名・製造販売元・改訂年月を表示しています。添付文書が改訂されると値が変わることがあります。'),
      ),
      h('div', { class: 'card' },
        h('p', { class: 'group-label' }, 'ホーム画面に追加'),
        install,
        h('p', { class: 'note' }, 'iPhone・iPad（Safari）：共有ボタン → 「ホーム画面に追加」'),
        h('p', { class: 'note' }, 'Android（Chrome）：メニュー → 「ホーム画面に追加」または「アプリをインストール」'),
      ),
      h('div', { class: 'card' },
        h('p', { class: 'group-label' }, '製剤データの出典'),
        h('details', {}, h('summary', {}, `γ計算（${data.gamma.length} 規格）`), sources(data.gamma)),
        h('details', {}, h('summary', {}, `輸液・静脈栄養（${data.parenteral.length} 製剤）`), sources(data.parenteral)),
        h('details', {}, h('summary', {}, `経腸栄養・補正用電解質（${data.enteral.length} 製剤）`), sources(data.enteral)),
      ),
    );
  }

  // ---------- 式と根拠 ----------

  const BASIS = {
    gamma: {
      title: 'γ計算の式と根拠',
      formula: [
        '濃度 C ＝ 薬剤量 ÷ 総液量（mg・μg・単位 /mL）',
        '1 時間あたりの薬剤量 D を投与量の単位から求める',
        'μg/kg/分：値 × 体重 × 60（μg/時）　μg/kg/時：値 × 体重（μg/時）　mg/kg/時：値 × 体重（mg/時）',
        'mg/時・μg/時・単位/時：値そのまま　μg/分・mg/分・単位/分：値 × 60　単位/kg/時：値 × 体重（単位/時）',
        '流速（mL/h）＝ D ÷ C（mg と μg は 1 mg ＝ 1000 μg で揃える）。流速 → 投与量は、この逆の計算',
        '製剤を選んだとき：薬剤量 ＝ 1 本の含量 × 本数。希釈せずに使う製剤は、総液量 ＝ 1 本の液量 × 本数',
        '添付文書の用量との照合：範囲は両端を含む。単位が違えば 1 時間あたりの量に揃えて比べる。体重あたりの単位とそうでない単位を比べるときは体重を使う',
      ],
      scope: [
        '薬剤量 > 0、総液量 > 0 mL、投与量・流速 ≥ 0。体重あたりの単位では体重 > 0 が必要です',
        '単位（U）と mg・μg はまたいで換算しません',
        '総液量は、薬剤を含めた溶解後の全量を入れます',
      ],
      sources: ['単位の換算（算数）。特定の原典の式ではありません', '製剤の含量と用量の範囲：各製剤の添付文書（PMDA）。販売名・製造販売元・改訂年月を製剤の欄に表示します'],
      notes: [
        '希釈の作り方は施設ごとに違うため、収載していません',
        '添付文書の用量との照合は、範囲の外にあるという事実だけを示します。範囲の中にあることは、その投与量でよいことを意味しません',
        '「範囲外」を出すのは、調節の範囲と上限だけです。開始量・初期負荷・使用例の値は、照合せずに並べます',
        '静脈内以外の経路（硬膜外、透析の回路など）の用量は、照合せずに参考として並べます',
        '添付文書の用量は、効能・患者の状態ごとに書き分けられています。表示している場面の名前を確かめてください',
        '表示の桁：流速は小数 2 桁、投与量は小数 3 桁（四捨五入）。計算そのものは丸めません',
      ],
    },
    table: {
      title: 'シリンジ希釈早見表の式と根拠',
      formula: [
        '行＝体重、列＝投与量の組み合わせごとに、γ計算（投与量 → 流速）と同じ式で流速（mL/h）を求める',
        '組み立ての例：体重 × 3 mg を総量 50 mL → 濃度は 体重 × 60 μg/mL → 1 mL/h ＝ 体重 × 60 μg/h ＝ 1 μg/kg/分（1 γ）',
      ],
      scope: ['条件はγ計算と同じです', '体重あたりでない単位（mg/時など）では体重を使わないので、行は 1 つになります', '列は 12 個までです'],
      sources: ['単位の換算（算数）。特定の原典の式ではありません'],
      notes: ['表示の桁：流速は小数 2 桁（四捨五入）'],
    },
    composition: {
      title: '組成合計の式と根拠',
      formula: [
        '添付文書の表の値を 1 mL あたりにそろえる：値 ÷ 表の基準量（mL）。粉末は、添付文書に書かれた標準の調製量（mL）で割る',
        '電解質を mEq・mmol にそろえる：mg で書かれた値は、Na ÷ 22.990、K ÷ 39.098、Cl ÷ 35.45（mEq）、Ca ÷ 40.078 × 2、Mg ÷ 24.305 × 2（mEq）、P ÷ 30.974（mmol）。mmol で書かれた Ca・Mg は × 2（mEq）',
        '項目ごとに、使用量（mL）× 1 mL あたりの量 を行ごとに足す',
        '熱量はアミノ酸の熱量を含む総熱量。NPC（非蛋白熱量）＝ 総熱量 − 4 × アミノ酸・たん白質（g）',
        '窒素：アミノ酸を含むすべての行に窒素があれば窒素の合計、1 行でもなければ全体を アミノ酸・たん白質 ÷ 6.25（混ぜない）',
        'NPC/N 比 ＝ NPC ÷ 窒素。アミノ酸・たん白質の合計が 0 なら出さない',
      ],
      scope: [
        '収載するのは医薬品（PMDA に添付文書があるもの）だけです。食品の栄養剤は手入力の行で足します',
        'ビタミン・微量元素は合計に入れません',
        '水分は、添付文書に記載のある製剤だけを足します',
      ],
      sources: [
        '各製剤の添付文書（PMDA）の組成の表。販売名・製造販売元・改訂年月を製剤の欄に表示します',
        '原子量：IUPAC 標準原子量（日本化学会 原子量専門委員会「原子量表」）',
        'NPC/N 比の式は、栄養の計算（NUT-07）と同じです',
      ],
      notes: [
        '経腸栄養剤の「糖質」には、ブドウ糖以外の糖も含まれます。この表では静脈栄養のブドウ糖と同じ行に足します',
        '添付文書の窒素の値は、アミノ酸 ÷ 6.25 と一致しないことがあります',
        '容量違いの製剤は、添付文書の 1 つの容量の値から比例で求めます。添付文書がほかの容量について書いている値とは、丸めの分だけ違うことがあります',
        '電解質を濃度（mEq/L）だけで書いている製剤は、濃度 × 使用量で求めます',
        '添付文書に記載のない項目は 0 として足さず、足していないことを製剤ごとに示します',
        'P を mEq で書いた値は、リン酸の価数が pH で変わるため換算しません',
        '表示の桁：熱量・NPC・容量・水分は整数、g・mEq・mmol は小数 1 桁、窒素は小数 2 桁、NPC/N 比は整数（四捨五入）',
      ],
    },
  };

  function openBasis(b) {
    const dlg = $('#basis');
    const section = (title, items) => (items && items.length ? h('div', {}, h('h4', {}, title), h('ul', {}, items.map((x) => h('li', {}, x)))) : null);
    $('#basis-body').replaceChildren(
      h('div', { class: 'screen-head' }, h('h3', { id: 'basis-title' }, b.title), h('button', { type: 'button', class: 'btn small', onclick: () => dlg.close() }, '閉じる')),
      section('式', b.formula),
      h('p', { class: 'note' }, 'この入力での計算は、計算画面の結果の下に出ます'),
      section('使える範囲', b.scope),
      section('出典', b.sources),
      section('注', b.notes),
      h('p', { class: 'note' }, '計算結果は必ず指示簿と照合し、医師の確認を受けてください'),
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

  function showVersion() {
    const v = data.version;
    $('#version').replaceChildren(
      '版 ', h('b', { class: 'num', 'data-testid': 'version' }, v?.version || '—'),
      '・更新日 ', h('b', { class: 'num', 'data-testid': 'updated' }, v?.updated || '—'),
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
      $('#loading').textContent = '計算エンジンを読み込めませんでした。再読み込みしてください';
      return;
    }
    await loadData();
    $('#loading').remove();
    showVersion();
    document.querySelectorAll('.tabs button').forEach((b) => b.addEventListener('click', () => show(b.dataset.tab)));
    show(location.hash.slice(1) || store.get('tab') || 'gamma');
    registerServiceWorker();
  }

  start();
})();
