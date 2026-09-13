(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.jp(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.d(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.f1(b)
return new t(c,this)}:function(){if(t===null)t=A.f1(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.f1(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
hs(a,b){var t=A.d(a,b.h("l<0>"))
t.$flags=1
return t},
aX(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b6.prototype
return J.bs.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.br.prototype
if(typeof a=="boolean")return J.c9.prototype
if(Array.isArray(a))return J.l.prototype
if(typeof a=="function")return J.bu.prototype
if(typeof a=="object"){if(a instanceof A.n){return a}else{return J.b9.prototype}}if(!(a instanceof A.n))return J.ax.prototype
return a},
iM(a){if(a==null)return a
if(Array.isArray(a))return J.l.prototype
if(!(a instanceof A.n))return J.ax.prototype
return a},
iN(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(Array.isArray(a))return J.l.prototype
if(!(a instanceof A.n))return J.ax.prototype
return a},
iO(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b6.prototype
return J.bs.prototype}if(a==null)return a
if(!(a instanceof A.n))return J.ax.prototype
return a},
a2(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aX(a).K(a,b)},
a3(a){return J.aX(a).gu(a)},
cw(a){return J.iM(a).gt(a)},
f8(a){return J.iN(a).gp(a)},
hi(a){return J.aX(a).gJ(a)},
f9(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.iO(a).ga7(a)},
bX(a){return J.aX(a).k(a)},
c7:function c7(){},
c9:function c9(){},
br:function br(){},
b9:function b9(){},
av:function av(){},
cW:function cW(){},
ax:function ax(){},
bu:function bu(){},
l:function l(a){this.$ti=a},
c8:function c8(){},
cH:function cH(a){this.$ti=a},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bt:function bt(){},
b6:function b6(){},
bs:function bs(){},
b8:function b8(){}},A={eI:function eI(){},
al(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
d0(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
f3(a){var t,s
for(t=$.Y.length,s=0;s<t;++s)if(a===$.Y[s])return!0
return!1},
cf:function cf(a){this.a=a},
cY:function cY(){},
bo:function bo(){},
aP:function aP(){},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ao:function ao(a,b,c){this.a=a
this.b=b
this.$ti=c},
bL:function bL(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH(a,b,c){var t,s,r,q,p,o,n,m=A.t(a),l=A.eM(new A.W(a,m.h("W<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){t=!0
break}s=l[j]
if(typeof s!="string"||"__proto__"===s){t=!1
break}++j}if(t){r={}
for(q=0,j=0;j<l.length;l.length===k||(0,A.v)(l),++j,q=p){s=l[j]
c.a(a.i(0,s))
p=q+1
r[s]=q}o=A.eM(new A.B(a,m.h("B<2>")),!0,c)
n=new A.aE(r,o,b.h("@<0>").C(c).h("aE<1,2>"))
n.$keys=l
return n}return new A.bm(A.ht(a,b,c),b.h("@<0>").C(c).h("bm<1,2>"))},
h3(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
r(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bX(a)
return t},
bC(a){var t,s=$.fq
if(s==null)s=$.fq=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
cg(a){var t,s,r,q
if(a instanceof A.n)return A.X(A.cu(a),null)
t=J.aX(a)
if(t===B.bW||t===B.c2||u.cr.b(a)){s=B.ax(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.X(A.cu(a),null)},
fr(a){var t,s,r
if(a==null||typeof a=="number"||A.eW(a))return J.bX(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ar)return a.k(0)
if(a instanceof A.ae)return a.ae(!0)
t=$.hh()
for(s=0;s<1;++s){r=t[s].aL(a)
if(r!=null)return r}return"Instance of '"+A.cg(a)+"'"},
P(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.o.ad(t,10)|55296)>>>0,t&1023|56320)}throw A.f(A.ch(a,0,1114111,null,null))},
f2(a){throw A.f(A.fV(a))},
A(a,b){if(a==null)J.f8(a)
throw A.f(A.fX(a,b))},
fX(a,b){var t,s="index"
if(!A.fQ(b))return new A.ah(!0,b,s,null)
t=J.f8(a)
if(b<0||b>=t)return A.fi(b,t,a,s)
return new A.bD(null,null,!0,b,s,"Value not in range")},
fV(a){return new A.ah(!0,a,null,null)},
f(a){return A.Q(a,new Error())},
Q(a,b){var t
if(a==null)a=new A.bI()
b.dartException=a
t=A.jr
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
jr(){return J.bX(this.dartException)},
p(a,b){throw A.Q(a,b==null?new Error():b)},
f5(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.p(A.i_(a,b,c),t)},
i_(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.bK("'"+t+"': Cannot "+p+" "+m+l+o)},
v(a){throw A.f(A.a5(a))},
an(a){var t,s,r,q,p,o
a=A.j8(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.d([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.d2(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
d3(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
fv(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
eJ(a,b){var t=b==null,s=t?null:b.method
return new A.cb(a,s,t?null:b.receiver)},
f6(a){if(a==null)return new A.cU(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.b_(a,a.dartException)
return A.iu(a)},
b_(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iu(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.o.ad(s,16)&8191)===10)switch(r){case 438:return A.b_(a,A.eJ(A.r(t)+" (Error "+r+")",null))
case 445:case 5007:A.r(t)
return A.b_(a,new A.bA())}}if(a instanceof TypeError){q=$.h5()
p=$.h6()
o=$.h7()
n=$.h8()
m=$.hb()
l=$.hc()
k=$.ha()
$.h9()
j=$.he()
i=$.hd()
h=q.F(t)
if(h!=null)return A.b_(a,A.eJ(A.w(t),h))
else{h=p.F(t)
if(h!=null){h.method="call"
return A.b_(a,A.eJ(A.w(t),h))}else if(o.F(t)!=null||n.F(t)!=null||m.F(t)!=null||l.F(t)!=null||k.F(t)!=null||n.F(t)!=null||j.F(t)!=null||i.F(t)!=null){A.w(t)
return A.b_(a,new A.bA())}}return A.b_(a,new A.cl(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.bH()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.b_(a,new A.ah(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.bH()
return a},
f4(a){if(a==null)return J.a3(a)
if(typeof a=="object")return A.bC(a)
return J.a3(a)},
iB(a){if(typeof a=="number")return B.d.gu(a)
if(a instanceof A.ct)return A.bC(a)
if(a instanceof A.ae)return a.gu(a)
return A.f4(a)},
fZ(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
iI(a,b){var t,s=a.length
for(t=0;t<s;++t)b.l(0,a[t])
return b},
hq(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.cj().constructor.prototype):Object.create(new A.b0(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.ff(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.hm(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.ff(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
hm(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hk)}throw A.f("Error in functionType of tearoff")},
hn(a,b,c,d){var t=A.fe
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ff(a,b,c,d){if(c)return A.hp(a,b,d)
return A.hn(b.length,d,a,b)},
ho(a,b,c,d){var t=A.fe,s=A.hl
switch(b?-1:a){case 0:throw A.f(new A.ci("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
hp(a,b,c){var t,s
if($.fc==null)$.fc=A.fb("interceptor")
if($.fd==null)$.fd=A.fb("receiver")
t=b.length
s=A.ho(t,c,a,b)
return s},
f1(a){return A.hq(a)},
hk(a,b){return A.bS(v.typeUniverse,A.cu(a.a),b)},
fe(a){return a.a},
hl(a){return a.b},
fb(a){var t,s,r,q=new A.b0("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.f(A.fa("Field name "+a+" not found."))},
h_(a){return v.getIsolateTag(a)},
hJ(a,b){var t,s
for(t=0;t<a.length;++t){s=a[t]
if(!(t<b.length))return A.A(b,t)
if(!J.a2(s,b[t]))return!1}return!0},
iE(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
fk(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,t+s+r+q+f)
if(p instanceof RegExp)return p
throw A.f(A.fg("Illegal RegExp pattern ("+String(p)+")",a))},
ji(a,b,c){var t=a.indexOf(b,c)
return t>=0},
iG(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jj(a,b,c,d){var t=b.aa(a,d)
if(t==null)return a
return A.jl(a,t.b.index,t.gaf(),c)},
j8(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jk(a,b,c,d){return d===0?a.replace(b.b,A.iG(c)):A.jj(a,b,c,d)},
jl(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
e:function e(a,b){this.a=a
this.b=b},
H:function H(a){this.a=a},
bm:function bm(a,b){this.a=a
this.$ti=b},
b2:function b2(){},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bp:function bp(a,b){this.a=a
this.$ti=b},
b3:function b3(){},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(a,b){this.a=a
this.$ti=b},
bE:function bE(){},
d2:function d2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bA:function bA(){},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.a=a},
cU:function cU(a){this.a=a},
ar:function ar(){},
c_:function c_(){},
ck:function ck(){},
cj:function cj(){},
b0:function b0(a,b){this.a=a
this.b=b},
ci:function ci(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cI:function cI(a){this.a=a},
cP:function cP(a,b){this.a=a
this.b=b
this.c=null},
W:function W(a,b){this.a=a
this.$ti=b},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
B:function B(a,b){this.a=a
this.$ti=b},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(a,b){this.a=a
this.$ti=b},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ae:function ae(){},
be:function be(){},
bf:function bf(){},
ca:function ca(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
cs:function cs(a){this.b=a},
d4:function d4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eO(a,b){var t=b.c
return t==null?b.c=A.bQ(a,"fh",[b.x]):t},
ft(a){var t=a.w
if(t===6||t===7)return A.ft(a.x)
return t===11||t===12},
hy(a){return a.as},
j3(a,b){var t,s=b.length
for(t=0;t<s;++t)if(!a[t].b(b[t]))return!1
return!0},
x(a){return A.d9(v.typeUniverse,a,!1)},
aV(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.aV(a0,t,a2,a3)
if(s===t)return a1
return A.fF(a0,s,!0)
case 7:t=a1.x
s=A.aV(a0,t,a2,a3)
if(s===t)return a1
return A.fE(a0,s,!0)
case 8:r=a1.y
q=A.bj(a0,r,a2,a3)
if(q===r)return a1
return A.bQ(a0,a1.x,q)
case 9:p=a1.x
o=A.aV(a0,p,a2,a3)
n=a1.y
m=A.bj(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.eQ(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.bj(a0,k,a2,a3)
if(j===k)return a1
return A.fG(a0,l,j)
case 11:i=a1.x
h=A.aV(a0,i,a2,a3)
g=a1.y
f=A.ir(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.fD(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.bj(a0,e,a2,a3)
p=a1.x
o=A.aV(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.eR(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.f(A.bZ("Attempted to substitute unexpected RTI kind "+a))}},
bj(a,b,c,d){var t,s,r,q,p=b.length,o=A.da(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.aV(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
is(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.da(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.aV(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
ir(a,b,c,d){var t,s=b.a,r=A.bj(a,s,c,d),q=b.b,p=A.bj(a,q,c,d),o=b.c,n=A.is(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.co()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
fW(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.iQ(t)
return a.$S()}return null},
iU(a,b){var t
if(A.ft(b))if(a instanceof A.ar){t=A.fW(a)
if(t!=null)return t}return A.cu(a)},
cu(a){if(a instanceof A.n)return A.t(a)
if(Array.isArray(a))return A.af(a)
return A.eV(J.aX(a))},
af(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
t(a){var t=a.$ti
return t!=null?t:A.eV(a)},
eV(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.i6(a,t)},
i6(a,b){var t=a instanceof A.ar?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.hR(v.typeUniverse,t.name)
b.$ccache=s
return s},
iQ(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.d9(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
iP(a){return A.aW(A.t(a))},
f_(a){var t
if(a instanceof A.ae)return A.iH(a.$r,a.a0())
t=a instanceof A.ar?A.fW(a):null
if(t!=null)return t
if(u.bW.b(a))return J.hi(a).a
if(Array.isArray(a))return A.af(a)
return A.cu(a)},
aW(a){var t=a.r
return t==null?a.r=new A.ct(a):t},
iH(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.A(r,0)
t=A.bS(v.typeUniverse,A.f_(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.A(r,s)
t=A.fH(v.typeUniverse,t,A.f_(r[s]))}return A.bS(v.typeUniverse,t,a)},
js(a){return A.aW(A.d9(v.typeUniverse,a,!1))},
i5(a){var t=this
t.b=A.iq(t)
return t.b(a)},
iq(a){var t,s,r,q,p
if(a===u.K)return A.ic
if(A.aY(a))return A.ih
t=a.w
if(t===6)return A.i3
if(t===1)return A.fS
if(t===7)return A.i7
s=A.ip(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.aY)){a.f="$i"+r
if(r==="a6")return A.ia
if(a===u.m)return A.i9
return A.ig}}else if(t===10){q=A.iE(a.x,a.y)
p=q==null?A.fS:q
return p==null?A.eT(p):p}return A.i1},
ip(a){if(a.w===8){if(a===u.S)return A.fQ
if(a===u.i||a===u.H)return A.ib
if(a===u.N)return A.ie
if(a===u.y)return A.eW}return null},
i4(a){var t=this,s=A.i0
if(A.aY(t))s=A.hX
else if(t===u.K)s=A.eT
else if(A.bk(t)){s=A.i2
if(t===u.ao)s=A.hU
else if(t===u.aD)s=A.eU
else if(t===u.cG)s=A.db
else if(t===u.ae)s=A.bV
else if(t===u.dd)s=A.hT
else if(t===u.z)s=A.hW}else if(t===u.S)s=A.D
else if(t===u.N)s=A.w
else if(t===u.y)s=A.eS
else if(t===u.H)s=A.aB
else if(t===u.i)s=A.bU
else if(t===u.m)s=A.hV
t.a=s
return t.a(a)},
i1(a){var t=this
if(a==null)return A.bk(t)
return A.iV(v.typeUniverse,A.iU(a,t),t)},
i3(a){if(a==null)return!0
return this.x.b(a)},
ig(a){var t,s=this
if(a==null)return A.bk(s)
t=s.f
if(a instanceof A.n)return!!a[t]
return!!J.aX(a)[t]},
ia(a){var t,s=this
if(a==null)return A.bk(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.n)return!!a[t]
return!!J.aX(a)[t]},
i9(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.n)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
fR(a){if(typeof a=="object"){if(a instanceof A.n)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
i0(a){var t=this
if(a==null){if(A.bk(t))return a}else if(t.b(a))return a
throw A.Q(A.fM(a,t),new Error())},
i2(a){var t=this
if(a==null||t.b(a))return a
throw A.Q(A.fM(a,t),new Error())},
fM(a,b){return new A.bO("TypeError: "+A.fx(a,A.X(b,null)))},
fx(a,b){return A.c5(a)+": type '"+A.X(A.f_(a),null)+"' is not a subtype of type '"+b+"'"},
a1(a,b){return new A.bO("TypeError: "+A.fx(a,b))},
i7(a){var t=this
return t.x.b(a)||A.eO(v.typeUniverse,t).b(a)},
ic(a){return a!=null},
eT(a){if(a!=null)return a
throw A.Q(A.a1(a,"Object"),new Error())},
ih(a){return!0},
hX(a){return a},
fS(a){return!1},
eW(a){return!0===a||!1===a},
eS(a){if(!0===a)return!0
if(!1===a)return!1
throw A.Q(A.a1(a,"bool"),new Error())},
db(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.Q(A.a1(a,"bool?"),new Error())},
bU(a){if(typeof a=="number")return a
throw A.Q(A.a1(a,"double"),new Error())},
hT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.Q(A.a1(a,"double?"),new Error())},
fQ(a){return typeof a=="number"&&Math.floor(a)===a},
D(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.Q(A.a1(a,"int"),new Error())},
hU(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.Q(A.a1(a,"int?"),new Error())},
ib(a){return typeof a=="number"},
aB(a){if(typeof a=="number")return a
throw A.Q(A.a1(a,"num"),new Error())},
bV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.Q(A.a1(a,"num?"),new Error())},
ie(a){return typeof a=="string"},
w(a){if(typeof a=="string")return a
throw A.Q(A.a1(a,"String"),new Error())},
eU(a){if(typeof a=="string")return a
if(a==null)return a
throw A.Q(A.a1(a,"String?"),new Error())},
hV(a){if(A.fR(a))return a
throw A.Q(A.a1(a,"JSObject"),new Error())},
hW(a){if(a==null)return a
if(A.fR(a))return a
throw A.Q(A.a1(a,"JSObject?"),new Error())},
fT(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.X(a[r],b)
return t},
io(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.fT(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.X(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
fO(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.d([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.a.l(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.A(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.X(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.X(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.X(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.X(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.X(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
X(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.X(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.X(a.x,b)+">"
if(m===8){q=A.it(a.x)
p=a.y
return p.length>0?q+("<"+A.fT(p,b)+">"):q}if(m===10)return A.io(a,b)
if(m===11)return A.fO(a,b,null)
if(m===12)return A.fO(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.A(b,o)
return b[o]}return"?"},
it(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
hS(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
hR(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.d9(a,b,!1)
else if(typeof n=="number"){t=n
s=A.bR(a,5,"#")
r=A.da(t)
for(q=0;q<t;++q)r[q]=s
p=A.bQ(a,b,r)
o[b]=p
return p}else return n},
hQ(a,b){return A.fI(a.tR,b)},
hP(a,b){return A.fI(a.eT,b)},
d9(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.fB(A.fz(a,null,b,!1))
s.set(b,t)
return t},
bS(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.fB(A.fz(a,b,c,!0))
r.set(c,s)
return s},
fH(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.eQ(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
aA(a,b){b.a=A.i4
b.b=A.i5
return b},
bR(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.a8(null,null)
t.w=b
t.as=c
s=A.aA(a,t)
a.eC.set(c,s)
return s},
fF(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.hN(a,b,s,c)
a.eC.set(s,t)
return t},
hN(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.aY(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.bk(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.a8(null,null)
r.w=6
r.x=b
r.as=c
return A.aA(a,r)},
fE(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.hL(a,b,s,c)
a.eC.set(s,t)
return t},
hL(a,b,c,d){var t,s
if(d){t=b.w
if(A.aY(b)||b===u.K)return b
else if(t===1)return A.bQ(a,"fh",[b])
else if(b===u.P||b===u.T)return u.bc}s=new A.a8(null,null)
s.w=7
s.x=b
s.as=c
return A.aA(a,s)},
hO(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.a8(null,null)
t.w=13
t.x=b
t.as=r
s=A.aA(a,t)
a.eC.set(r,s)
return s},
bP(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
hK(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
bQ(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.bP(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.a8(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.aA(a,s)
a.eC.set(q,r)
return r},
eQ(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.bP(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a8(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.aA(a,p)
a.eC.set(r,o)
return o},
fG(a,b,c){var t,s,r="+"+(b+"("+A.bP(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.a8(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.aA(a,t)
a.eC.set(r,s)
return s},
fD(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.bP(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.bP(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.hK(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.a8(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.aA(a,q)
a.eC.set(s,p)
return p},
eR(a,b,c,d){var t,s=b.as+("<"+A.bP(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.hM(a,b,c,s,d)
a.eC.set(s,t)
return t},
hM(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.da(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.aV(a,b,s,0)
n=A.bj(a,c,s,0)
return A.eR(a,o,n,c!==n)}}m=new A.a8(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.aA(a,m)},
fz(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fB(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.hE(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.fA(a,s,m,l,!1)
else if(r===46)s=A.fA(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.aU(a.u,a.e,l.pop()))
break
case 94:l.push(A.hO(a.u,l.pop()))
break
case 35:l.push(A.bR(a.u,5,"#"))
break
case 64:l.push(A.bR(a.u,2,"@"))
break
case 126:l.push(A.bR(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.hG(a,l)
break
case 38:A.hF(a,l)
break
case 63:q=a.u
l.push(A.fF(q,A.aU(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.fE(q,A.aU(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.hD(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.fC(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.hI(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.aU(a.u,a.e,n)},
hE(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
fA(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.hS(t,p.x)[q]
if(o==null)A.p('No "'+q+'" in "'+A.hy(p)+'"')
d.push(A.bS(t,p,o))}else d.push(q)
return n},
hG(a,b){var t,s=a.u,r=A.fy(a,b),q=b.pop()
if(typeof q=="string")b.push(A.bQ(s,q,r))
else{t=A.aU(s,a.e,q)
switch(t.w){case 11:b.push(A.eR(s,t,r,a.n))
break
default:b.push(A.eQ(s,t,r))
break}}},
hD(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.fy(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.aU(q,a.e,p)
r=new A.co()
r.a=t
r.b=o
r.c=n
b.push(A.fD(q,s,r))
return
case-4:b.push(A.fG(q,b.pop(),t))
return
default:throw A.f(A.bZ("Unexpected state under `()`: "+A.r(p)))}},
hF(a,b){var t=b.pop()
if(0===t){b.push(A.bR(a.u,1,"0&"))
return}if(1===t){b.push(A.bR(a.u,4,"1&"))
return}throw A.f(A.bZ("Unexpected extended operation "+A.r(t)))},
fy(a,b){var t=b.splice(a.p)
A.fC(a.u,a.e,t)
a.p=b.pop()
return t},
aU(a,b,c){if(typeof c=="string")return A.bQ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hH(a,b,c)}else return c},
fC(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.aU(a,b,c[t])},
hI(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.aU(a,b,c[t])},
hH(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.f(A.bZ("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.f(A.bZ("Bad index "+c+" for "+b.k(0)))},
iV(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.J(a,b,null,c,null)
s.set(c,t)}return t},
J(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.aY(d))return!0
t=b.w
if(t===4)return!0
if(A.aY(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.J(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.J(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.J(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.J(a,b.x,c,d,e))return!1
return A.J(a,A.eO(a,b),c,d,e)}if(t===6)return A.J(a,q,c,d,e)&&A.J(a,b.x,c,d,e)
if(r===7){if(A.J(a,b,c,d.x,e))return!0
return A.J(a,b,c,A.eO(a,d),e)}if(r===6)return A.J(a,b,c,q,e)||A.J(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.cY)return!0
if(r===12){if(b===u.L)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.J(a,k,c,j,e)||!A.J(a,j,e,k,c))return!1}return A.fP(a,b.x,c,d.x,e)}if(r===11){if(b===u.L)return!0
if(q)return!1
return A.fP(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.i8(a,b,c,d,e)}if(p&&r===10)return A.id(a,b,c,d,e)
return!1},
fP(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.J(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.J(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.J(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.J(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.J(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
i8(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bS(a,b,s[p])
return A.fJ(a,q,null,c,d.y,e)}return A.fJ(a,b.y,null,c,d.y,e)},
fJ(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.J(a,b[t],d,e[t],f))return!1
return!0},
id(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.J(a,s[t],c,r[t],e))return!1
return!0},
bk(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.aY(a))if(t!==6)s=t===7&&A.bk(a.x)
return s},
aY(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
fI(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
da(a){return a>0?new Array(a):v.typeUniverse.sEA},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
co:function co(){this.c=this.b=this.a=null},
ct:function ct(a){this.a=a},
cn:function cn(){},
bO:function bO(a){this.a=a},
fm(a,b){return new A.Z(a.h("@<0>").C(b).h("Z<1,2>"))},
m(a,b,c){return b.h("@<0>").C(c).h("eK<1,2>").a(A.fZ(a,new A.Z(b.h("@<0>").C(c).h("Z<1,2>"))))},
ac(a,b){return new A.Z(a.h("@<0>").C(b).h("Z<1,2>"))},
eL(a){return new A.ay(a.h("ay<0>"))},
j(a,b){return b.h("fn<0>").a(A.iI(a,new A.ay(b.h("ay<0>"))))},
eP(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
hC(a,b,c){var t=new A.aT(a,b,c.h("aT<0>"))
t.c=a.e
return t},
ht(a,b,c){var t=A.fm(b,c)
a.B(0,new A.cQ(t,b,c))
return t},
cS(a){var t,s
if(A.f3(a))return"{...}"
t=new A.bc("")
try{s={}
B.a.l($.Y,a)
t.a+="{"
s.a=!0
a.B(0,new A.cT(s,t))
t.a+="}"}finally{if(0>=$.Y.length)return A.A($.Y,-1)
$.Y.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cr:function cr(a){this.a=a
this.b=null},
aT:function aT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
L:function L(){},
cT:function cT(a,b){this.a=a
this.b=b},
bT:function bT(){},
ba:function ba(){},
bJ:function bJ(){},
ak:function ak(){},
bN:function bN(){},
bg:function bg(){},
im(a,b){var t,s,r,q=null
try{q=JSON.parse(a)}catch(s){t=A.f6(s)
r=A.fg(String(t),null)
throw A.f(r)}r=A.dc(q)
return r},
dc(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cp(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=A.dc(a[t])
return a},
fl(a,b,c){return new A.bv(a,b)},
hZ(a){return a.aQ()},
hA(a,b){return new A.d5(a,[],A.iC())},
hB(a,b,c){var t,s=new A.bc(""),r=A.hA(s,b)
r.W(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
cp:function cp(a,b){this.a=a
this.b=b
this.c=null},
cq:function cq(a){this.a=a},
c0:function c0(){},
c3:function c3(){},
bv:function bv(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
cL:function cL(a){this.b=a},
cK:function cK(a){this.a=a},
d6:function d6(){},
d7:function d7(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c){this.c=a
this.a=b
this.b=c},
fo(a,b,c){var t,s,r
if(a>4294967295)A.p(A.ch(a,0,4294967295,"length",null))
t=J.hs(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
eM(a,b,c){var t,s=A.d([],c.h("l<0>"))
for(t=J.cw(a);t.n();)B.a.l(s,c.a(t.gq()))
if(b)return s
s.$flags=1
return s},
cR(a,b){var t,s
if(Array.isArray(a))return A.d(a.slice(0),b.h("l<0>"))
t=A.d([],b.h("l<0>"))
for(s=J.cw(a);s.n();)B.a.l(t,s.gq())
return t},
fs(a){return new A.ca(a,A.fk(a,!1,!0,!1,!1,""))},
fu(a,b,c){var t=J.cw(b)
if(!t.n())return a
if(c.length===0){do a+=A.r(t.gq())
while(t.n())}else{a+=A.r(t.gq())
while(t.n())a=a+c+A.r(t.gq())}return a},
O(a,b,c){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(r.b===b)return r}throw A.f(A.hj(b,"name","No enum value with that name"))},
c5(a){if(typeof a=="number"||A.eW(a)||a==null)return J.bX(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fr(a)},
bZ(a){return new A.bY(a)},
fa(a){return new A.ah(!1,null,null,a)},
hj(a,b,c){return new A.ah(!0,a,b,c)},
ch(a,b,c,d,e){return new A.bD(b,c,!0,a,d,"Invalid value")},
hw(a,b,c){if(0>a||a>c)throw A.f(A.ch(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.ch(b,a,c,"end",null))
return b}return c},
hv(a,b){return a},
fi(a,b,c,d){return new A.c6(b,!0,a,d,"Index out of range")},
fw(a){return new A.bK(a)},
a5(a){return new A.c2(a)},
fg(a,b){return new A.cD(a,b)},
hr(a,b,c){var t,s
if(A.f3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.d([],u.s)
B.a.l($.Y,a)
try{A.ii(a,t)}finally{if(0>=$.Y.length)return A.A($.Y,-1)
$.Y.pop()}s=A.fu(b,u.h.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
fj(a,b,c){var t,s
if(A.f3(a))return b+"..."+c
t=new A.bc(b)
B.a.l($.Y,a)
try{s=t
s.a=A.fu(s.a,a,", ")}finally{if(0>=$.Y.length)return A.A($.Y,-1)
$.Y.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ii(a,b){var t,s,r,q,p,o,n,m=a.gt(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.n())return
t=A.r(m.gq())
B.a.l(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return A.A(b,-1)
s=b.pop()
if(0>=b.length)return A.A(b,-1)
r=b.pop()}else{q=m.gq();++k
if(!m.n()){if(k<=4){B.a.l(b,A.r(q))
return}s=A.r(q)
if(0>=b.length)return A.A(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gq();++k
for(;m.n();q=p,p=o){o=m.gq();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.A(b,-1)
l-=b.pop().length+2;--k}B.a.l(b,"...")
return}}r=A.r(q)
s=A.r(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.A(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.l(b,n)
B.a.l(b,r)
B.a.l(b,s)},
fp(a,b,c,d){var t
if(B.t===c){t=B.o.gu(a)
b=J.a3(b)
return A.d0(A.al(A.al($.cv(),t),b))}if(B.t===d){t=B.o.gu(a)
b=J.a3(b)
c=J.a3(c)
return A.d0(A.al(A.al(A.al($.cv(),t),b),c))}t=B.o.gu(a)
b=J.a3(b)
c=J.a3(c)
d=J.a3(d)
d=A.d0(A.al(A.al(A.al(A.al($.cv(),t),b),c),d))
return d},
hu(a){var t,s,r=$.cv()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.v)(a),++s)r=A.al(r,J.a3(a[s]))
return A.d0(r)},
cm:function cm(){},
F:function F(){},
bY:function bY(a){this.a=a},
bI:function bI(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
c6:function c6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bK:function bK(a){this.a=a},
c2:function c2(a){this.a=a},
bH:function bH(){},
cD:function cD(a,b){this.a=a
this.b=b},
q:function q(){},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
bz:function bz(){},
n:function n(){},
bc:function bc(a){this.a=a},
j5(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=null
if(!(a>0))throw A.f(B.b8)
if(!(c>0))throw A.f(B.bd)
A.b("bicarbonate",a,0,80)
A.b("paco2",c,0,200)
t=b===B.ag||b===B.P
s=b===B.ah||b===B.Q
if(!(t&&c<40))r=s&&c>40
else r=!0
if(r)throw A.f(B.aF)
switch(b.a){case 0:r=1.5*a
r=new A.H([r+6,r+10,"paco2","\u4e88\u6e2c PaCO2 = 1.5 \xd7 "+A.a(a,4)+" + 8 \xb1 2"])
break
case 1:r=0.7*(a-24)
r=new A.H([r+38,r+42,"paco2","\u4e88\u6e2c PaCO2 = 0.7 \xd7 ("+A.a(a,4)+" \u2212 24) + 40 \xb1 2"])
break
case 2:r=24+(c-40)/10
r=new A.H([r,r,"hco3","\u4e88\u6e2c HCO3 = 24 + 1 \xd7 ("+A.a(c,4)+" \u2212 40) \xf7 10"])
break
case 3:r=c-40
r=new A.H([24+4*r/10,24+5*r/10,"hco3","\u4e88\u6e2c HCO3 = 24 + 4\u301c5 \xd7 ("+A.a(c,4)+" \u2212 40) \xf7 10"])
break
case 4:r=24-2*(40-c)/10
r=new A.H([r,r,"hco3","\u4e88\u6e2c HCO3 = 24 \u2212 2 \xd7 (40 \u2212 "+A.a(c,4)+") \xf7 10"])
break
case 5:r=40-c
r=new A.H([24-5*r/10,24-4*r/10,"hco3","\u4e88\u6e2c HCO3 = 24 \u2212 4\u301c5 \xd7 (40 \u2212 "+A.a(c,4)+") \xf7 10"])
break
default:r=h}r=r.a
q=r[0]
p=h
o=h
n=r[1]
m=r[2]
r[3]
o=m
p=n
l=q
k=o==="paco2"?c:a
if(typeof l!=="number")return A.f2(l)
if(k<l)j=B.a2
else{if(typeof p!=="number")return A.f2(p)
j=k>p?B.a3:B.bB}if(j===B.a2)i=k-l
else if(j===B.a3){if(typeof p!=="number")return A.f2(p)
r=k-p
i=r}else i=0
A:{if(B.P===b){r=24+0.3*(c-40)
break A}if(B.Q===b){r=24-0.4*(40-c)
break A}r=h
break A}if(l===p)A.a(l,1)
else{A.a(l,1)
A.a(p,1)}return new A.cz(l,p,o,j,i,r)},
a7:function a7(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iT(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.ac(u.N,u.i),e=new A.dm(),d=a.c
e.$2("cardiac_output",d)
t=a.d
e.$2("bsa",t)
s=a.a
e.$2("heart_rate",s)
for(r=a.y,q=a.Q,p=[new A.e("sao2",r),new A.e("svo2",q)],o=0;o<2;++o){n=p[o]
m=n.b
if(m!=null)if(isNaN(m)||m<0||m>1)A.p(A.U("out_of_range:"+n.a,A.r(m)+" not in [0, 1]"))}p=a.at
A.b("hufner",p,1.2,1.5)
n=a.ax
A.b("dissolved",n,0,0.01)
if(d==null&&s!=null&&a.b!=null){l=a.b
l.toString
d=s*l/1000}l=d!=null
if(l){f.j(0,"co",d)
if(s!=null&&a.b==null)f.j(0,"sv",d*1000/s)}k=l&&t!=null?d/t:null
t=k!=null
if(t)f.j(0,"ci",k)
if(l&&a.e!=null&&a.f!=null){s=a.e
s.toString
j=a.f
j.toString
j=80*(s-j)
f.j(0,"svr",j/d)
if(t)f.j(0,"svri",j/k)}if(l&&a.r!=null&&a.w!=null){s=a.r
s.toString
j=a.w
j.toString
j=s-j
f.j(0,"pvr",80*j/d)
f.j(0,"pvr_wu",j/d)}s=a.x
j=s!=null
if(j&&r!=null&&a.z!=null){i=a.z
i.toString
h=p*s*r+n*i
f.j(0,"cao2",h)}else h=null
if(j&&q!=null&&a.as!=null){r=a.as
r.toString
g=p*s*q+n*r
f.j(0,"cvo2",g)}else g=null
s=h!=null
if(s){if(l)f.j(0,"do2",d*h*10)
if(t)f.j(0,"do2i",k*h*10)}if(s&&g!=null){if(l)f.j(0,"vo2",d*(h-g)*10)
if(t)f.j(0,"vo2i",k*(h-g)*10)
if(h>0)f.j(0,"o2er",(h-g)/h)}return f},
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o},
dm:function dm(){},
bW(a){var t
switch(a.a){case 0:t=B.e0
break
case 1:t=B.e2
break
case 2:t=B.e4
break
case 3:t=B.e9
break
case 4:t=B.e6
break
case 5:t=B.e8
break
case 6:t=B.e7
break
case 7:t=B.e5
break
case 8:t=B.e3
break
case 9:t=B.e1
break
default:t=null}return t},
fK(a){var t,s=a.a
if(!(s>0)||!isFinite(s))throw A.f(B.bj)
t=a.c
if(!(t>0)||!isFinite(t))throw A.f(B.a1)
A.b("drug_amount",s,0,1e7)
A.b("volume",t,0,5000)},
fU(a,b){if(!A.bW(a).a[2])return 1
if(b==null)throw A.f(B.a_)
if(!(b>0))throw A.f(B.u)
A.b("weight",b,0,400)
return b},
fN(a,b){var t=A.bW(a).a,s=t[0],r=t[1],q=t[3]
if(s!==(b===B.V?B.F:B.p))throw A.f(B.bb)
return r/(b===B.U?1000:1)*q},
fY(a,b,c,d){var t,s,r,q,p,o,n,m,l
A.fK(b)
A.b("dose",a,0,1e6)
t=A.fU(c,d)
s=A.fN(c,b.b)
r=b.a
q=b.c
p=r/q
o=a*t*s/p
if(!isFinite(o))A.p(B.a0)
r=A.a(r,4)
q=A.a(q,4)
n=A.a(p,4)
m=A.a(a,4)
l=A.bW(c).a[2]?" \xd7 "+A.a(t,4)+" kg":""
return new A.z(o,"mL/h",A.d(["\u6fc3\u5ea6 "+r+" \xf7 "+q+" mL = "+n+" /mL",m+l+" \xd7 "+A.a(s,4)+" \xf7 "+A.a(p,4)+" = "+A.a(o,2)+" mL/h"],u.s),B.b)},
jn(a,b,c,d){var t,s,r,q,p,o,n,m=A.d([],u.a2)
for(t=d.length,s=u.n,r=0;r<d.length;d.length===t||(0,A.v)(d),++r){q=d[r]
p=A.d([],s)
for(o=a.length,n=0;n<a.length;a.length===o||(0,A.v)(a),++n)p.push(A.fY(a[n],b,c,q).a)
m.push(p)}return m},
j2(a,b,c,d,e,f){var t,s,r,q,p,o,n,m=A.bW(e).a,l=m[0],k=m[1],j=m[2],i=m[3]
m=A.bW(c).a
t=m[0]
s=m[1]
r=m[2]
q=m[3]
if(l!==t)throw A.f(B.b6)
m=new A.dv(j===r,new A.dw(f))
p=m.$4(d,k,j,i)
o=b==null?null:m.$4(b,s,r,q)
n=a==null?null:m.$4(a,s,r,q)
if(!(o!=null&&p<o*0.999999999))m=n!=null&&p>n*1.000000001
else m=!0
return m},
jm(a){var t,s,r,q,p,o,n,m,l,k,j="amino_acid_g",i="nitrogen_g",h=A.ac(u.N,u.i)
for(t=0;t<11;++t)h.j(0,B.cy[t],0)
for(s=a.length,r=0,q=!0,t=0;t<a.length;a.length===s||(0,A.v)(a),++t){p={}
o=a[t]
p.a=null
n=p.a=o.b
if(isNaN(n)||n<0||n>1e4)A.p(A.U("out_of_range:volume",A.r(n)+" not in [0, 10000]"))
r+=n
o=o.a.a
o.B(0,new A.eF(p,h))
p=o.i(0,j)
if((p==null?0:p)>0&&!o.v(i))q=!1}m=h.i(0,j)
if(m==null)m=0
if(m<=0){s=h.i(0,"kcal")
return new A.bl(r,h,s==null?0:s,0,null,!1)}s=h.i(0,"kcal")
if(s==null)s=0
l=s-4*m
if(q){s=h.i(0,i)
k=s==null?0:s}else k=m/6.25
if(!(k>0))return new A.bl(r,h,l,k,null,q)
return new A.bl(r,h,l,k,l/k,q)},
ij(a,b){var t,s=null
if("kcal"===a)return b==="kcal"?B.dU:s
if("glucose_g"===a||"carbohydrate_g"===a)return A.dd("glucose_g",b)
if("amino_acid_g"===a||"protein_g"===a)return A.dd("amino_acid_g",b)
if("nitrogen_g"===a)return A.dd("nitrogen_g",b)
if("lipid_g"===a)return A.dd("lipid_g",b)
if("water_ml"===a)return b==="mL"?B.dZ:s
if("na"===a||"k"===a||"cl"===a){A:{if("mEq"===b||"mmol"===b){t=new A.e(a+"_meq",1)
break A}if("mg"===b){t=B.E.i(0,a)
t.toString
t=new A.e(a+"_meq",1/t)
break A}if("g"===b){t=B.E.i(0,a)
t.toString
t=new A.e(a+"_meq",1000/t)
break A}t=s
break A}return t}if("ca"===a||"mg"===a){B:{if("mEq"===b){t=new A.e(a+"_meq",1)
break B}if("mmol"===b){t=new A.e(a+"_meq",2)
break B}if("mg"===b){t=B.E.i(0,a)
t.toString
t=new A.e(a+"_meq",2/t)
break B}if("g"===b){t=B.E.i(0,a)
t.toString
t=new A.e(a+"_meq",2000/t)
break B}t=s
break B}return t}if("p"===a){C:{if("mmol"===b){t=B.dV
break C}if("mg"===b){t=new A.e("p_mmol",0.032285142377477885)
break C}if("g"===b){t=new A.e("p_mmol",32.28514237747788)
break C}t=s
break C}return t}return s},
dd(a,b){var t
A:{if("g"===b){t=new A.e(a,1)
break A}if("mg"===b){t=new A.e(a,0.001)
break A}t=null
break A}return t},
j_(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!(a>0)||!isFinite(a))throw A.f(B.be)
switch(b){case"mL":t=a
break
case"g":if(d==null)throw A.f(B.b5)
if(!(d>0)||!isFinite(d))throw A.f(B.b_)
t=d
break
default:throw A.f(B.aK)}s=A.ac(u.N,u.i)
r=A.d([],u.I)
for(q=c.length,p=0;p<c.length;c.length===q||(0,A.v)(c),++p){o=c[p]
n=o.b
if(n<0||!isFinite(n))throw A.f(A.U("out_of_range:composition",o.a))
m=o.a
if(!B.ee.A(0,m)){B.a.l(r,new A.bG(m,o.c,"not_summed"))
continue}l=o.c
k=B.m.aD(l,"/L")
j=k?B.m.I(l,0,l.length-2):l
if(m==="p"&&j==="mEq"){B.a.l(r,new A.bG(m,l,"p_meq_valence"))
continue}i=A.ij(m,j)
if(i==null)throw A.f(A.U("unsupported_unit:"+m,""))
h=i.a
g=i.b
if(s.v(h))throw A.f(A.U("duplicate:"+h,""))
m=k?1000:t
s.j(0,h,n*g/m)}return new A.cO(s,r)},
aq:function aq(a,b){this.a=a
this.b=b},
S:function S(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a){this.a=a},
dv:function dv(a,b){this.a=a
this.b=b},
c1:function c1(a){this.a=a},
bl:function bl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eF:function eF(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
iR(a,b,c){var t,s
A.b("sodium",c,90,200)
A.b("glucose",b,10,3000)
t=a===B.I?1.6:2.4
if(b<=100)return new A.z(c,"mEq/L",A.d(["Glu \u2264 100 \u306e\u305f\u3081\u88dc\u6b63\u306a\u3057"],u.s),B.b)
s=c+t*(b-100)/100
return new A.z(s,"mEq/L",A.d([A.a(c,4)+" + "+A.a(t,4)+" \xd7 ("+A.a(b,4)+" \u2212 100) \xf7 100 = "+A.a(s,1)],u.s),B.b)},
jo(a){var t=0.6
switch(a.a){case 0:break
case 1:t=0.5
break
case 2:t=0.5
break
case 3:t=0.45
break
case 4:break
default:t=null}return t},
iL(a,b){var t
A.b("tbw",b,0.1,250)
A.b("sodium",a,90,200)
if(a<=140)return new A.z(0,"L",A.d(["Na \u2264 140 \u306e\u305f\u3081 0"],u.s),B.cs)
t=b*(a/140-1)
return new A.z(t,"L",A.d([A.a(b,1)+" \xd7 ("+A.a(a,4)+" \xf7 140 \u2212 1) = "+A.a(t,2)],u.s),B.b)},
iD(a,b,c){var t,s
A.b("calcium",b,2,20)
A.b("albumin",a,0.5,7)
if(a>=4)return new A.z(b,"mg/dL",A.d(["Alb \u2265 4.0 \u306e\u305f\u3081\u88dc\u6b63\u306a\u3057"],u.s),B.b)
t=c===B.G?1:0.8
s=b+t*(4-a)
return new A.z(s,"mg/dL",A.d([A.a(b,4)+" + "+A.a(t,4)+" \xd7 (4.0 \u2212 "+A.a(a,4)+") = "+A.a(s,2)],u.s),B.b)},
aI:function aI(a,b){this.a=a
this.b=b},
ad:function ad(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.b=b},
iK(a,b,c,d){var t,s=u.S,r=A.m(["thrombocytopenia",b,"timing",d,"thrombosis",c,"other_causes",a],u.N,s)
r.B(0,new A.dk())
t=new A.B(r,A.t(r).h("B<2>")).D(0,0,new A.dl(),s)
if(t>=6)s="high"
else s=t>=4?"intermediate":"low"
return new A.cE(t,s)},
iZ(a){var t,s,r,q,p,o,n="platelets",m="fdp",l="fibrinogen",k="pt_ratio",j="antithrombin",i="tat_sf_f12",h=u.S,g=A.ac(u.N,h),f=A.d([],u.s),e=A.d([],u.r),d=a.a,c=0
if(d!==B.ab){t=a.b
if(t==null){B.a.l(f,n)
c=3}else{A.b(n,t,0,200)
if(t>12)s=0
else if(t>8)s=1
else{r=t>5?2:3
s=r}g.j(0,n,B.o.S(s+(a.c&&t>5?1:0),0,3))}}t=a.d
if(t!=null){A.b(m,t,0,1e4)
if(t>=40)t=3
else if(t>=20)t=2
else t=t>=10?1:0
g.j(0,m,t)}else{t=a.e
if(t!=null){A.b("d_dimer_ratio",t,0,1000)
g.j(0,m,t>=2?1:0)
B.a.l(e,B.bo)}else{B.a.l(f,m)
c+=3}}if(d!==B.ac){t=a.f
if(t==null){B.a.l(f,l)
c+=2}else{A.b(l,t,0,2000)
if(t>150)t=0
else t=t>100?1:2
g.j(0,l,t)}}t=a.r
if(t==null){B.a.l(f,k)
c+=2}else{A.b(k,t,0.3,20)
if(t>=1.67)t=2
else t=t>=1.25?1:0
g.j(0,k,t)}t=a.w
if(t==null){B.a.l(f,j);++c}else{A.b(j,t,0,200)
g.j(0,j,t>70?0:1)}t=a.x
if(t==null){B.a.l(f,i);++c}else{A.b("marker_ratio",t,0,1000)
g.j(0,i,t>=2?1:0)}g.j(0,"liver_failure",a.y?-3:0)
q=new A.B(g,g.$ti.h("B<2>")).D(0,0,new A.dp(),h)
switch(d.a){case 0:h=6
break
case 1:h=4
break
case 2:h=5
break
default:h=null}p=q+c
if(q>=h)o=!0
else o=p<h?!1:null
return new A.c4(q,g,h,o,f,p,e)},
iW(a,b,c,d,e){var t,s,r,q,p,o,n
if(!e)throw A.f(B.b2)
A.b("platelets",c,0,2000)
A.b("pt_prolongation",d,0,120)
A.b("fibrinogen",b,0,2000)
if(c>=100)t=0
else t=c>=50?1:2
switch(a.a){case 0:s=0
break
case 1:s=2
break
case 2:s=3
break
default:s=null}if(d>=6)r=2
else r=d>=3?1:0
q=b/100>=1?0:1
p=u.S
o=A.m(["platelets",t,"fibrin_marker",s,"pt_prolongation",r,"fibrinogen",q],u.N,p)
n=new A.B(o,A.t(o).h("B<2>")).D(0,0,new A.dn(),p)
return new A.c4(n,o,5,n>=5,B.cL,n,B.b)},
j6(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k
if(!(g>0))throw A.f(B.u)
A.b("weight",g,0,400)
t=b==null
if(!t)A.b("current_hb",b,0,25)
s=a!=null
if(s)A.b("age",a,0,120)
r=c!=null
q=e==null
p=!q||d!=null
o=f!=null
if(new A.ao(A.d([r,p,o],u.u),u.B.a(new A.dy()),u.aR).gp(0)!==1)throw A.f(B.b1)
n=A.d([],u.s)
if(r){A.b("hb_grams",c,0,1000)
m=c}else if(o){A.b("units",f,0,100)
m=f*26.5
B.a.l(n,"Hb \u91cf = "+A.a(f,4)+" \u5358\u4f4d \xd7 "+A.a(26.5,4)+" g = "+A.a(m,1)+" g")}else{if(q||d==null)throw A.f(B.aE)
A.b("product_volume",e,0,5000)
A.b("product_hb",d,0,40)
m=e*d/100
B.a.l(n,"Hb \u91cf = "+A.a(e,4)+" \xd7 "+A.a(d,4)+" \xf7 100 = "+A.a(m,1)+" g")}l=70*g/100
k=m/l
B.a.l(n,"\u5faa\u74b0\u8840\u6db2\u91cf = 70 \xd7 "+A.a(g,4)+" \xf7 100 = "+A.a(l,1)+" dL")
B.a.l(n,"\u4e88\u6e2c\u4e0a\u6607 Hb = "+A.a(m,1)+" \xf7 "+A.a(l,1)+" = "+A.a(k,2)+" g/dL")
t=t?null:b+k
r=A.d([],u.r)
if(s&&a<18)r.push(B.bp)
return new A.cF(l,m,k,t,r)},
cE:function cE(a,b){this.a=a
this.c=b},
dk:function dk(){},
dl:function dl(){},
au:function au(a,b){this.a=a
this.b=b},
cM:function cM(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dp:function dp(){},
as:function as(a,b){this.a=a
this.b=b},
dn:function dn(){},
cF:function cF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dy:function dy(){},
aQ:function aQ(a,b){this.a=a
this.b=b},
I(a,b,c,d,e){return new A.az(a,b,c,d,e)},
j0(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=c===B.D
if(l&&e)throw A.f(B.aG)
if(!(a>0))throw A.f(B.b0)
t=$.hf().i(0,b).i(0,a)
if(t==null)throw A.f(B.aQ)
if(!t.A(0,c))throw A.f(B.aY)
s=u.w
r=c===B.f?A.j([B.f,B.c],s):A.j([c],s)
s=$.hg().i(0,b)
s.toString
q=A.af(s)
p=q.h("ao<1>")
o=A.cR(new A.ao(s,q.h("E(1)").a(new A.dq(a,r)),p),p.h("q.E"))
if(o.length===0)throw A.f(B.aP)
n=a*10
s=A.d([],u.D)
for(q=o.length,m=0;m<o.length;o.length===q||(0,A.v)(o),++m)s.push(A.ik(o[m],b,a,n,d))
q=A.d([],u.U)
if(l)q.push(B.cg)
l=b===B.C
if(l&&a===0.25&&c===B.c)q.push(B.ch)
if(l&&c===B.c)q.push(B.ci)
if(B.a.R(o,new A.dr())&&b===B.v)q.push(B.cj)
if(B.a.R(o,new A.ds()))q.push(B.ck)
if(b===B.B&&a===0.125)q.push(B.cl)
return new A.cN(s,q)},
ik(a,b,c,d,e){var t,s,r,q,p=A.d([],u.s),o=a.d
switch(o.a){case 0:t=a.e
B.a.l(p,"\u4e0a\u9650 "+A.a(t,4)+" mg")
break
case 1:if(e==null)throw A.f(B.a_)
if(!(e>0))throw A.f(B.u)
A.b("weight",e,0,400)
s=a.e
t=s*e
B.a.l(p,A.a(s,4)+" mg/kg \xd7 "+A.a(e,4)+" kg = "+A.a(t,1)+" mg")
break
case 2:s=a.e
t=s*d
B.a.l(p,A.a(s,4)+" mL \xd7 "+A.a(c,4)+" \xd7 10 = "+A.a(t,1)+" mg")
break
default:t=null}if(o===B.h)r=a.e
else{if(typeof t!=="number")return t.aP()
r=t/d}B.a.l(p,A.a(t,1)+" mg \xf7 ("+A.a(c,4)+" \xd7 10) = "+A.a(r,1)+" mL")
if(b===B.v)q=r*(c===2?0.0125:0.01)
else q=null
if(q!=null){o=A.a(r,1)
B.a.l(p,"\u30a2\u30c9\u30ec\u30ca\u30ea\u30f3 "+o+" mL \xd7 "+A.a(c===2?0.0125:0.01,4)+" mg/mL = "+A.a(q,4)+" mg")}return new A.cd(a.c,t,r,q)},
a_:function a_(a,b){this.a=a
this.b=b},
V:function V(a,b){this.a=a
this.b=b},
aM:function aM(a,b){this.a=a
this.b=b},
ab:function ab(a,b){this.a=a
this.b=b},
bd:function bd(a,b){this.a=a
this.b=b},
az:function az(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cN:function cN(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dr:function dr(){},
ds:function ds(){},
f0(a){return new A.B(a,A.t(a).h("B<2>")).D(0,0,new A.df(),u.S)},
eY(a,b,c,d){var t,s,r,q,p,o=b.length
if(a.a!==o||!B.a.aE(b,a.gaz()))throw A.f(A.U("items_mismatch","expected "+A.r(b)))
for(t=c,s=d,r=0;r<o;++r){q=b[r]
p=a.i(0,q)
p.toString
if(isNaN(p)||p<c||p>d)A.p(A.U("out_of_range:"+q,""+p+" not in ["+t+", "+s+"]"))}},
iY(a){var t
switch(a.a){case 0:t=0
break
case 1:t=1
break
case 2:t=2
break
case 3:t=3
break
case 4:t=10
break
case 5:t=20
break
case 6:t=30
break
case 7:t=100
break
case 8:t=200
break
case 9:t=300
break
default:t=null}return t},
iJ(a,b,c,d){var t,s,r,q,p,o,n=u.i,m=A.cR(b,n)
B.a.P(m,d)
t=m.length
s=0
for(;s<t;++s){r=m[s]
if(isNaN(r)||r<0||r>5e4)A.p(A.U("out_of_range:fluid_item",A.r(r)+" not in [0, 50000]"))}m=a==null
if(!m)A.b("insensible",a,0,1e4)
t=c==null
if(!t)A.b("metabolic_water",c,0,5000)
q=B.a.D(b,0,new A.di(),n)
p=B.a.D(d,0,new A.dj(),n)
n=m?0:a
o=t?0:c
m=m?0:a
t=t?0:c
return new A.cC(q,p,q-p-n+o,m>0,t>0)},
df:function df(){},
aa:function aa(a,b){this.a=a
this.b=b},
T:function T(a,b){this.a=a
this.b=b},
at:function at(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
di:function di(){},
dj:function dj(){},
bi(a,b,c){if(c!=null)A.b("weight",c,0.3,400)
if(b!=null)A.b("height",b,20,250)
if(a!=null)A.b("age",a,0,120)},
iX(a){if(a<18.5)return B.bX
if(a<25)return B.bY
if(a<30)return B.bZ
if(a<35)return B.c_
if(a<40)return B.c0
return B.c1},
h0(a,b,c){var t,s,r,q,p
A.bi(null,b,null)
t=c===B.j?50:45.5
s=a===B.A?0.91:0.905511811023622
r=t+s*(b-152.4)
q=A.d([A.a(t,4)+" + "+A.a(s,4)+" \xd7 ("+A.a(b,4)+" \u2212 152.4) = "+A.a(r,1)],u.s)
p=A.d([],u.r)
if(b<152.4)p.push(B.bl)
return new A.z(r,"kg",q,p)},
iv(a,b,c){var t
A.bi(null,null,a)
A.b("factor",b,0,1)
if(a<=c)return new A.z(a,"kg",A.d(["\u5b9f\u6e2c "+A.a(a,4)+" \u2264 IBW "+A.a(c,1)+" \u306e\u305f\u3081\u5b9f\u6e2c\u4f53\u91cd"],u.s),B.b)
t=c+b*(a-c)
return new A.z(t,"kg",A.d([A.a(c,1)+" + "+A.a(b,4)+" \xd7 ("+A.a(a,4)+" \u2212 "+A.a(c,1)+") = "+A.a(t,1)],u.s),B.b)},
il(a,b){var t
if(b==null)return!1
A:{if(B.X===a){t=b<6
break A}if(B.Y===a){t=b<1||b>=6
break A}if(B.Z===a){t=b>=1
break A}t=!1
break A}return t},
iA(a,b,c,d){var t,s,r,q,p,o
A.bi(a,c,d)
switch(b.a){case 0:t=new A.e(0.007184*Math.pow(d,0.425)*Math.pow(c,0.725),"0.007184 \xd7 "+A.a(d,4)+"^0.425 \xd7 "+A.a(c,4)+"^0.725")
break
case 1:t=new A.e(0.008883*Math.pow(d,0.444)*Math.pow(c,0.663),"0.008883 \xd7 "+A.a(d,4)+"^0.444 \xd7 "+A.a(c,4)+"^0.663")
break
case 2:t=new A.e(Math.pow(d,0.423)*Math.pow(c,0.362)*381.89/1e4,A.a(d,4)+"^0.423 \xd7 "+A.a(c,4)+"^0.362 \xd7 381.89 \xf7 10000")
break
case 3:t=new A.e(Math.pow(d,0.473)*Math.pow(c,0.655)*95.68/1e4,A.a(d,4)+"^0.473 \xd7 "+A.a(c,4)+"^0.655 \xd7 95.68 \xf7 10000")
break
case 4:t=new A.e(0.007358*Math.pow(d,0.425)*Math.pow(c,0.725),"0.007358 \xd7 "+A.a(d,4)+"^0.425 \xd7 "+A.a(c,4)+"^0.725")
break
case 5:t=new A.e(Math.sqrt(c*d/3600),"\u221a("+A.a(c,4)+" \xd7 "+A.a(d,4)+" \xf7 3600)")
break
default:t=null}s=t.a
r=null
q=t.b
r=q
p=s
t=A.d([A.r(r)+" = "+A.a(p,3)],u.s)
o=A.d([],u.r)
if(A.il(b,a))o.push(B.bx)
return new A.z(p,"m\xb2",t,o)},
h2(a,b,c){var t
A.bi(null,null,c)
A.b("per_kg",a,0,100)
t=c*a
return new A.z(t,b,A.d([A.a(c,4)+" \xd7 "+A.a(a,4)+" = "+A.a(t,1)],u.s),B.b)},
iS(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
A.bi(a,b,e)
A:{t=B.J===d
s=t
r=f
if(s){r=B.j===c
s=r
q=c
p=!0
o=!0}else{q=f
p=!1
o=!1
s=!1}if(s){s=B.cO
break A}n=f
if(t){if(o)s=q
else{s=c
q=s
o=!0}n=B.l===s
s=n
m=!0}else{m=!1
s=!1}if(s){s=B.cp
break A}l=B.a4===d
s=l
if(s)if(p)s=r
else{if(o)s=q
else{s=c
q=s
o=!0}r=B.j===s
s=r}else s=!1
if(s){s=B.cI
break A}if(l)if(m)s=n
else{n=B.l===(o?q:c)
s=n}else s=!1
if(s){s=B.cR
break A}s=f}k=s.length
if(0>=k)return A.A(s,0)
j=s[0]
if(1>=k)return A.A(s,1)
i=s[1]
if(2>=k)return A.A(s,2)
h=s[2]
if(3>=k)return A.A(s,3)
g=j+i*e+h*b-s[3]*a
return new A.z(g,"kcal/\u65e5",A.d([A.a(j,4)+" + "+A.a(s[1],4)+" \xd7 "+A.a(e,4)+" + "+A.a(s[2],4)+" \xd7 "+A.a(b,4)+" \u2212 "+A.a(s[3],4)+" \xd7 "+A.a(a,4)+" = "+A.a(g,0)],u.s),B.b)},
bF:function bF(a,b){this.a=a
this.b=b},
aj:function aj(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
a4:function a4(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
j9(a){var t,s,r,q,p,o,n,m,l=a.f
if(l!=null){A.b("creatinine",l,0.1,30)
t=l>2}else{t=a.r
if(t==null)throw A.f(B.aR)}l=a.a?1:0
s=a.b?1:0
r=a.c?1:0
q=a.d?1:0
p=a.e?1:0
o=t?1:0
n=u.S
m=A.m(["high_risk_surgery",l,"ischemic_heart_disease",s,"heart_failure",r,"cerebrovascular_disease",q,"insulin_therapy",p,"creatinine_above_2",o],u.N,n)
return new A.a0(new A.B(m,A.t(m).h("B<2>")).D(0,0,new A.dA(),n),m,null,B.b)},
iF(a){var t,s,r,q,p=a.length
if(p!==12)throw A.f(B.aZ)
for(t=0,s=0;s<p;++s)if(a[s]){if(!(s<12))return A.A(B.ae,s)
t+=B.ae[s]}r=0.43*t+9.6
q=r/3.5
A.a(t,2)
A.a(t,2)
A.a(r,1)
A.a(r,1)
A.a(q,1)
return new A.cB(t,r,q,t<=34)},
iz(a,b,c,d,e){var t,s,r,q,p,o,n=a!=null
if(n)A.b("age",a,0,120)
t=b?1:0
s=d?1:0
r=c?1:0
q=e?1:0
p=u.S
o=A.m(["female",t,"non_smoker",s,"history",r,"postoperative_opioids",q],u.N,p)
p=new A.B(o,A.t(o).h("B<2>")).D(0,0,new A.dh(),p)
q=A.d([],u.r)
if(n&&a<18)q.push(B.bs)
return new A.a0(p,o,null,q)},
jq(a,b,c){var t,s,r,q,p,o,n=A.h0(B.A,a,c),m=n.a
if(!(m>0))throw A.f(B.aX)
for(t=b.length,s=0;s<t;++s){r=b[s]
if(!(r>0))throw A.f(B.aW)
if(isNaN(r)||r<0||r>20)A.p(A.U("out_of_range:ml_per_kg",A.r(r)+" not in [0, 20]"))}q=u.i
p=A.ac(q,q)
for(s=0;o=b.length,s<o;b.length===t||(0,A.v)(b),++s){r=b[s]
p.j(0,r,m*r)}t=A.ac(q,u.y)
for(s=0;s<b.length;b.length===o||(0,A.v)(b),++s){r=b[s]
t.j(0,r,r>=4&&r<=8)}return new A.d1(m,p,t,n.d)},
cX:function cX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dA:function dA(){},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c(a,b){var t=a.i(0,b)
if(typeof t=="number")return t
throw A.f(A.U("missing:"+b,""))},
h(a,b){var t=A.bV(a.i(0,b))
return t==null?null:t},
C(a,b){var t=A.db(a.i(0,b))
return t===!0},
bh(a,b,c,d,e){var t=A.eU(b.i(0,c))
return t==null?d:A.O(a,t,e)},
K(a){var t,s,r,q=A.d([],u.s)
for(t=a.d,s=t.length,r=0;r<t.length;t.length===s||(0,A.v)(t),++r)q.push(t[r].b)
return A.m(["value",a.a,"unit",a.b,"steps",a.c,"warnings",q],u.N,u.X)},
ag(a){var t,s,r,q=A.d([],u.s)
for(t=a.d,s=t.length,r=0;r<t.length;t.length===s||(0,A.v)(t),++r)q.push(t[r].b)
return A.m(["total",a.a,"breakdown",a.b,"meets_threshold",a.c,"warnings",q],u.N,u.X)},
eX(a){return u.f.a(a.i(0,"items")).M(0,new A.de(),u.N,u.S)},
eZ(a){return new A.d_(A.c(a,"drug_amount"),A.O(B.cN,A.w(a.i(0,"amount_unit")),u.A),A.c(a,"volume_ml"))},
ja(){var t=$.eG(),s=A.t(t).h("W<1>")
return new A.ao(new A.W(t,s),s.h("E(q.E)").a(new A.eD()),s.h("ao<q.E>"))},
fL(a){var t,s,r,q=A.d([],u.s)
for(t=a.r,s=t.length,r=0;r<t.length;t.length===s||(0,A.v)(t),++r)q.push(t[r].b)
return A.m(["total",a.a,"breakdown",a.b,"cutoff",a.c,"meets_cutoff",a.d,"missing",a.e,"max_possible",a.f,"warnings",q],u.N,u.X)},
jb(a,b){var t,s,r,q=$.eG().i(0,a)
if(q==null)return A.m(["error","unknown_id:"+a],u.N,u.X)
try{s=q.$1(b)
return s}catch(r){s=A.f6(r)
if(s instanceof A.i){t=s
return A.m(["error",t.a],u.N,u.X)}else throw r}},
de:function de(){},
eD:function eD(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dP:function dP(){},
e_:function e_(){},
ea:function ea(){},
el:function el(){},
ew:function ew(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
dB:function dB(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
aG:function aG(a,b){this.a=a
this.b=b},
j4(a,b,c,d,e,f){var t,s,r,q,p,o,n,m={}
A.b("pao2",e,10,700)
A.b("fio2",c,0.21,1)
A.b("peep",f,0,40)
t=b==null
s=!t
if(s)A.b("barometric_pressure",b,400,800)
r=e/c
q=A.d(["P/F = "+A.a(e,4)+" \xf7 "+A.a(c,4)+" = "+A.a(r,0)],u.s)
m.a=null
p=a===!0
if(p&&s){o=m.a=r*b/760
B.a.l(q,"\u6a19\u9ad8\u88dc\u6b63 = "+A.a(r,0)+" \xd7 "+A.a(b,4)+" \xf7 760 = "+A.a(o,0))
n=o}else n=null
if(n==null)n=r
m=new A.dx(m,r,q,p&&t)
if(n>300)return m.$1(B.au)
if(f<5)return m.$2(null,B.ap)
if(n>200)return m.$1(B.ar)
if(!d)return m.$2(null,B.aq)
if(n>100)return m.$1(B.as)
return m.$1(B.at)},
ai:function ai(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(a,b){this.a=a
this.b=b},
U(a,b){return new A.i(a,b)},
b(a,b,c,d){if(isNaN(b)||b<c||b>d)throw A.f(A.U("out_of_range:"+a,A.r(b)+" not in ["+A.r(c)+", "+A.r(d)+"]"))},
a(a,b){var t
if(a===B.d.aJ(a)&&Math.abs(a)<1e15)return B.o.k(B.d.N(a))
t=B.d.aK(a,b)
return B.m.A(t,".")?B.m.ag(B.m.ag(t,A.fs("0+$"),""),A.fs("\\.$"),""):t},
G:function G(a,b){this.a=a
this.b=b},
i:function i(a,b){this.a=a
this.b=b},
z:function z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh(a,b){A.b("pf_ratio",a,10,700)
if(a<100&&b)return 4
if(a<200&&b)return 3
if(a<300)return 2
if(a<400)return 1
return 0},
jf(a){A.b("platelets",a,0,2000)
if(a<20)return 4
if(a<50)return 3
if(a<100)return 2
if(a<150)return 1
return 0},
jg(a){A.b("bilirubin",a,0,80)
if(a>=12)return 4
if(a>=6)return 3
if(a>=2)return 2
if(a>=1.2)return 1
return 0},
jd(a,b,c,d,e){var t,s,r,q
for(t=[new A.e("dopamine",b),new A.e("dobutamine",a),new A.e("epinephrine",c),new A.e("norepinephrine",e)],s=0;s<4;++s){r=t[s]
q=r.b
if(isNaN(q)||q<0||q>100)A.p(A.U("out_of_range:"+r.a,A.r(q)+" not in [0, 100]"))}t=d!=null
if(t)A.b("map",d,10,250)
if(b>15||c>0.1||e>0.1)return 4
if(b>5||c>0||e>0)return 3
if(b>0||a>0)return 2
if(t&&d<70)return 1
return 0},
je(a){A.b("gcs",a,3,15)
if(a<6)return 4
if(a<=9)return 3
if(a<=12)return 2
if(a<=14)return 1
return 0},
jc(a,b,c){var t,s,r,q,p,o,n=u.S,m=A.ac(u.N,n),l=A.d([],u.r),k=a.a
if(k!=null){t=a.b
m.j(0,"respiration",A.jh(k,t))
if(!t&&k<200)B.a.l(l,B.bt)}k=a.c
if(k!=null)m.j(0,"coagulation",A.jf(k))
k=a.d
if(k!=null)m.j(0,"liver",A.jg(k))
m.j(0,"cardiovascular",A.jd(a.r,a.f,a.w,a.e,a.x))
k=a.y
if(k!=null)m.j(0,"cns",A.je(k))
k=a.z
t=k==null
if(!t||a.Q!=null){s=a.Q
if(!t){A.b("creatinine",k,0.1,30)
if(k>=5)r=4
else if(k>=3.5)r=3
else{if(k>=2)k=2
else k=k>=1.2?1:0
r=k}}else r=0
if(s!=null){A.b("urine_per_day",s,0,2e4)
if(s<200)q=4
else q=s<500?3:0}else q=0
m.j(0,"renal",r>q?r:q)}p=new A.B(m,m.$ti.h("B<2>")).D(0,0,new A.eE(),n)
n=b==null
if(n&&c)throw A.f(B.aD)
o=n?0:b
A.b("sofa_baseline",o,0,24)
return new A.a0(p,m,p-o>=2,l)},
j7(a,b,c){var t,s,r,q,p,o,n="respiratory_rate"
A.b(n,b,0,80)
A.b("sbp",c,20,300)
t=b>=22?1:0
s=a?1:0
r=c<=100?1:0
q=u.S
p=A.m([n,t,"mentation",s,"sbp",r],u.N,q)
o=new A.B(p,A.t(p).h("B<2>")).D(0,0,new A.dz(),q)
return new A.a0(o,p,o>=2,B.b)},
a9(a,b){var t,s,r,q
for(t=b.length,s=0;s<t;++s){r=b[s]
q=r.b
if(a>=r.a)return q}throw A.f(A.U("band_not_found",A.r(a)))},
iy(a,b,c){A.b("fio2",b,0.21,1)
if(b>=0.5){if(a==null)throw A.f(B.ba)
A.b("aado2",a,-50,700)
return A.a9(a,A.d([B.dC,B.dr,B.dh,B.dS],u.p))}if(c==null)throw A.f(B.b4)
A.b("pao2",c,10,700)
if(c>70)return 0
if(c>=61)return 1
if(c>=55)return 3
return 4},
iw(a){A.b("age",a,0,120)
if(a>=75)return 6
if(a>=65)return 5
if(a>=55)return 3
if(a>=45)return 2
return 0},
ix(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="respiratory_rate",c=a.ay
A.b("gcs",c,3,15)
t=a.w
if(t!=null){A.b("ph",t,6.5,8)
s=A.a9(t,A.d([B.dT,B.dY,B.dL,B.dK,B.dQ,B.dN,B.n],u.p))}else{t=a.x
if(t!=null){A.b("bicarbonate",t,1,80)
s=A.a9(t,A.d([B.dE,B.dz,B.dn,B.di,B.df,B.dc,B.n],u.p))}else throw A.f(B.bh)}t=a.a
A.b("temperature",t,20,45)
r=u.p
t=A.a9(t,A.d([B.dA,B.du,B.dX,B.dt,B.dq,B.dp,B.dm,B.n],r))
q=a.b
A.b("map",q,10,300)
q=A.a9(q,A.d([B.de,B.d7,B.ai,B.am,B.al,B.n],r))
p=a.c
A.b("heart_rate",p,0,300)
p=A.a9(p,A.d([B.aj,B.d8,B.ai,B.am,B.dF,B.dx,B.n],r))
o=a.d
A.b(d,o,0,80)
o=A.a9(o,A.d([B.dD,B.ds,B.dj,B.d5,B.d2,B.dH,B.n],r))
n=A.iy(a.f,a.e,a.r)
m=a.y
A.b("sodium",m,90,220)
m=A.a9(m,A.d([B.aj,B.dd,B.da,B.d9,B.d6,B.d4,B.d3,B.n],r))
l=a.z
A.b("potassium",l,1,12)
l=A.a9(l,A.d([B.dJ,B.dI,B.e_,B.dM,B.dw,B.dO,B.n],r))
k=a.Q
A.b("creatinine",k,0.1,30)
j=A.a9(k,A.d([B.dP,B.dk,B.d1,B.dR,B.dW],r))
k=a.as?j*2:j
i=a.at
A.b("hematocrit",i,5,80)
i=A.a9(i,A.d([B.dG,B.al,B.dB,B.dl,B.ak,B.n],r))
h=a.ax
A.b("wbc",h,0,500)
r=A.a9(h,A.d([B.dy,B.ak,B.db,B.dv,B.dg,B.n],r))
h=A.iw(a.ch)
g=a.CW
if(!(g.a||g.b||g.c||g.d||g.e))g=0
else g=a.cx===B.T?2:5
f=u.S
e=A.m(["temperature",t,"map",q,"heart_rate",p,d,o,"oxygenation",n,"acid_base",s,"sodium",m,"potassium",l,"creatinine",k,"hematocrit",i,"wbc",r,"gcs",15-c,"age",h,"chronic_health",g],u.N,f)
return new A.a0(new A.B(e,A.t(e).h("B<2>")).D(0,0,new A.dg(),f),e,null,B.b)},
h1(a,b,c,d,e,f){var t,s,r,q,p,o,n,m
A.b("age",a,18,120)
A.b("apache2",b,0,71)
A.b("sofa",f,0,24)
A.b("comorbidities",c,0,50)
A.b("days_to_icu",d,0,365)
if(a>=75)t=2
else t=a>=50?1:0
if(b>=28)s=3
else if(b>=20)s=2
else s=b>=15?1:0
if(f>=10)r=2
else r=f>=6?1:0
q=c>=2?1:0
p=d>=1?1:0
o=u.S
n=A.m(["age",t,"apache2",s,"sofa",r,"comorbidities",q,"days_to_icu",p],u.N,o)
t=e!=null
if(t){A.b("il6",e,0,1e5)
n.j(0,"il6",e>=400?1:0)}m=new A.B(n,A.t(n).h("B<2>")).D(0,0,new A.du(),o)
return new A.a0(m,n,m>=(t?6:5),B.b)},
cZ:function cZ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
eE:function eE(){},
dz:function dz(){},
ap:function ap(a,b){this.a=a
this.b=b},
cy:function cy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cx:function cx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s},
dg:function dg(){},
du:function du(){},
j1(){var t,s,r={},q=new A.dt()
if(typeof q=="function")A.p(A.fa("Attempting to rewrap a JS function."))
t=function(a,b){return function(c,d){return a(b,c,d,arguments.length)}}(A.hY,q)
t[$.f7()]=q
r.runCalc=t
q=A.ja()
q=A.cR(q,q.$ti.h("q.E"))
r.releaseIds=B.y.a5(q,null)
q=$.eG()
s=A.t(q).h("W<1>")
q=A.cR(new A.W(q,s),s.h("q.E"))
r.registryIds=B.y.a5(q,null)
v.G.periopEngine=r},
dt:function dt(){},
jp(a){throw A.Q(new A.cf("Field '"+a+"' has been assigned during initialization."),new Error())},
hY(a,b,c,d){u.Z.a(a)
A.D(d)
if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.eI.prototype={}
J.c7.prototype={
K(a,b){return a===b},
gu(a){return A.bC(a)},
k(a){return"Instance of '"+A.cg(a)+"'"},
gJ(a){return A.aW(A.eV(this))}}
J.c9.prototype={
k(a){return String(a)},
gu(a){return a?519018:218159},
gJ(a){return A.aW(u.y)},
$iam:1,
$iE:1}
J.br.prototype={
K(a,b){return null==b},
k(a){return"null"},
gu(a){return 0},
$iam:1}
J.b9.prototype={$ib7:1}
J.av.prototype={
gu(a){return 0},
k(a){return String(a)}}
J.cW.prototype={}
J.ax.prototype={}
J.bu.prototype={
k(a){var t=a[$.h4()]
if(t==null)t=a[$.f7()]
if(t==null)return this.ak(a)
return"JavaScript function for "+J.bX(t)},
$ib5:1}
J.l.prototype={
l(a,b){A.af(a).c.a(b)
a.$flags&1&&A.f5(a,29)
a.push(b)},
P(a,b){A.af(a).h("q<1>").a(b)
a.$flags&1&&A.f5(a,"addAll",2)
this.am(a,b)
return},
am(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.f(A.a5(a))
for(s=0;s<t;++s)a.push(b[s])},
aI(a){var t,s=A.fo(a.length,"",u.N)
for(t=0;t<a.length;++t)this.j(s,t,A.r(a[t]))
return s.join("")},
D(a,b,c,d){var t,s,r
d.a(b)
A.af(a).C(d).h("1(1,2)").a(c)
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw A.f(A.a5(a))}return s},
R(a,b){var t,s
A.af(a).h("E(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw A.f(A.a5(a))}return!1},
aE(a,b){var t,s
A.af(a).h("E(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(!b.$1(a[s]))return!1
if(a.length!==t)throw A.f(A.a5(a))}return!0},
k(a){return A.fj(a,"[","]")},
gt(a){return new J.aC(a,a.length,A.af(a).h("aC<1>"))},
gu(a){return A.bC(a)},
gp(a){return a.length},
j(a,b,c){A.af(a).c.a(c)
a.$flags&2&&A.f5(a)
if(!(b>=0&&b<a.length))throw A.f(A.fX(a,b))
a[b]=c},
$iq:1,
$ia6:1}
J.c8.prototype={
aL(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.cg(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.cH.prototype={}
J.aC.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.v(r)
throw A.f(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0},
$iR:1}
J.bt.prototype={
a3(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=B.o.gV(b)
if(this.gV(a)===t)return 0
if(this.gV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gV(a){return a===0?1/a<0:a<0},
ga7(a){var t
if(a>0)t=1
else t=a<0?-1:a
return t},
N(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.f(A.fw(""+a+".toInt()"))},
E(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.fw(""+a+".round()"))},
aJ(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
S(a,b,c){if(B.o.a3(b,c)>0)throw A.f(A.fV(b))
if(this.a3(a,b)<0)return b
if(this.a3(a,c)>0)return c
return a},
aK(a,b){var t
if(b>20)throw A.f(A.ch(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gV(a))return"-"+t
return t},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
ad(a,b){var t
if(a>0)t=this.av(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
av(a,b){return b>31?0:a>>>b},
gJ(a){return A.aW(u.H)},
$io:1,
$iaZ:1}
J.b6.prototype={
ga7(a){var t
if(a>0)t=1
else t=a<0?-1:a
return t},
gJ(a){return A.aW(u.S)},
$iam:1,
$iN:1}
J.bs.prototype={
gJ(a){return A.aW(u.i)},
$iam:1}
J.b8.prototype={
aD(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.aj(a,s-t)},
ag(a,b,c){return A.jk(a,b,c,0)},
I(a,b,c){return a.substring(b,A.hw(b,c,a.length))},
aj(a,b){return this.I(a,b,null)},
A(a,b){return A.ji(a,b,0)},
k(a){return a},
gu(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gJ(a){return A.aW(u.N)},
gp(a){return a.length},
$iam:1,
$icV:1,
$ik:1}
A.cf.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.cY.prototype={}
A.bo.prototype={}
A.aP.prototype={
gt(a){var t=this
return new A.by(t,t.gp(t),A.t(t).h("by<aP.E>"))},
gG(a){return this.gp(this)===0}}
A.by.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.gp(r)
if(s.b!==q)throw A.f(A.a5(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r.a4(0,t);++s.c
return!0},
$iR:1}
A.ao.prototype={
gt(a){return new A.bL(J.cw(this.a),this.b,this.$ti.h("bL<1>"))}}
A.bL.prototype={
n(){var t,s
for(t=this.a,s=this.b;t.n();)if(s.$1(t.gq()))return!0
return!1},
gq(){return this.a.gq()},
$iR:1}
A.e.prototype={$r:"+(1,2)",$s:1}
A.H.prototype={$r:"+(1,2,3,4)",$s:2}
A.bm.prototype={}
A.b2.prototype={
gG(a){return this.gp(this)===0},
k(a){return A.cS(this)},
M(a,b,c,d){var t=A.ac(c,d)
this.B(0,new A.cA(this,A.t(this).C(c).C(d).h("M<1,2>(3,4)").a(b),t))
return t},
$iy:1}
A.cA.prototype={
$2(a,b){var t=A.t(this.a),s=this.b.$2(t.c.a(a),t.y[1].a(b))
this.c.j(0,s.a,s.b)},
$S(){return A.t(this.a).h("~(1,2)")}}
A.aE.prototype={
gp(a){return this.b.length},
gaq(){var t=this.$keys
if(t==null){t=Object.keys(this.a)
this.$keys=t}return t},
v(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.v(b))return null
return this.b[this.a[b]]},
B(a,b){var t,s,r,q
this.$ti.h("~(1,2)").a(b)
t=this.gaq()
s=this.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.aS.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t=this,s=t.c
if(s>=t.b){t.d=null
return!1}t.d=t.a[s]
t.c=s+1
return!0},
$iR:1}
A.bp.prototype={
L(){var t=this,s=t.$map
if(s==null){s=new A.aL(t.$ti.h("aL<1,2>"))
A.fZ(t.a,s)
t.$map=s}return s},
v(a){return this.L().v(a)},
i(a,b){return this.L().i(0,b)},
B(a,b){this.$ti.h("~(1,2)").a(b)
this.L().B(0,b)},
gp(a){return this.L().a}}
A.b3.prototype={}
A.b4.prototype={
gp(a){return this.b},
gt(a){var t,s=this,r=s.$keys
if(r==null){r=Object.keys(s.a)
s.$keys=r}t=r
return new A.aS(t,t.length,s.$ti.h("aS<1>"))},
A(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.bq.prototype={
gp(a){return this.a.length},
gt(a){var t=this.a
return new A.aS(t,t.length,this.$ti.h("aS<1>"))},
L(){var t,s,r,q,p=this,o=p.$map
if(o==null){o=new A.aL(p.$ti.h("aL<1,1>"))
for(t=p.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.v)(t),++r){q=t[r]
o.j(0,q,q)}p.$map=o}return o},
A(a,b){return this.L().v(b)}}
A.bE.prototype={}
A.d2.prototype={
F(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
A.bA.prototype={
k(a){return"Null check operator used on a null value"}}
A.cb.prototype={
k(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.cl.prototype={
k(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.cU.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ar.prototype={
k(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.h3(s==null?"unknown":s)+"'"},
$ib5:1,
gaO(){return this},
$C:"$1",
$R:1,
$D:null}
A.c_.prototype={$C:"$2",$R:2}
A.ck.prototype={}
A.cj.prototype={
k(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.h3(t)+"'"}}
A.b0.prototype={
K(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b0))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.f4(this.a)^A.bC(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cg(this.a)+"'")}}
A.ci.prototype={
k(a){return"RuntimeError: "+this.a}}
A.Z.prototype={
gp(a){return this.a},
gG(a){return this.a===0},
gH(){return new A.W(this,A.t(this).h("W<1>"))},
v(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.aF(a)},
aF(a){var t=this.d
if(t==null)return!1
return this.U(t[this.T(a)],a)>=0},
P(a,b){A.t(this).h("y<1,2>").a(b).B(0,new A.cI(this))},
i(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.aG(b)},
aG(a){var t,s,r=this.d
if(r==null)return null
t=r[this.T(a)]
s=this.U(t,a)
if(s<0)return null
return t[s].b},
j(a,b,c){var t,s,r=this,q=A.t(r)
q.c.a(b)
q.y[1].a(c)
if(typeof b=="string"){t=r.b
r.a8(t==null?r.b=r.a1():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.a8(s==null?r.c=r.a1():s,b,c)}else r.aH(b,c)},
aH(a,b){var t,s,r,q,p=this,o=A.t(p)
o.c.a(a)
o.y[1].a(b)
t=p.d
if(t==null)t=p.d=p.a1()
s=p.T(a)
r=t[s]
if(r==null)t[s]=[p.a2(a,b)]
else{q=p.U(r,a)
if(q>=0)r[q].b=b
else r.push(p.a2(a,b))}},
B(a,b){var t,s,r=this
A.t(r).h("~(1,2)").a(b)
t=r.e
s=r.r
while(t!=null){b.$2(t.a,t.b)
if(s!==r.r)throw A.f(A.a5(r))
t=t.c}},
a8(a,b,c){var t,s=A.t(this)
s.c.a(b)
s.y[1].a(c)
t=a[b]
if(t==null)a[b]=this.a2(b,c)
else t.b=c},
a2(a,b){var t=this,s=A.t(t),r=new A.cP(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
T(a){return J.a3(a)&1073741823},
U(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a2(a[s].a,b))return s
return-1},
k(a){return A.cS(this)},
a1(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$ieK:1}
A.cI.prototype={
$2(a,b){var t=this.a,s=A.t(t)
t.j(0,s.c.a(a),s.y[1].a(b))},
$S(){return A.t(this.a).h("~(1,2)")}}
A.cP.prototype={}
A.W.prototype={
gp(a){return this.a.a},
gG(a){return this.a.a===0},
gt(a){var t=this.a
return new A.bw(t,t.r,t.e,this.$ti.h("bw<1>"))},
A(a,b){return this.a.v(b)}}
A.bw.prototype={
gq(){return this.d},
n(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.a5(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}},
$iR:1}
A.B.prototype={
gp(a){return this.a.a},
gt(a){var t=this.a
return new A.bx(t,t.r,t.e,this.$ti.h("bx<1>"))}}
A.bx.prototype={
gq(){return this.d},
n(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.a5(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.b
s.c=t.c
return!0}},
$iR:1}
A.aN.prototype={
gp(a){return this.a.a},
gt(a){var t=this.a
return new A.aO(t,t.r,t.e,this.$ti.h("aO<1,2>"))}}
A.aO.prototype={
gq(){var t=this.d
t.toString
return t},
n(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.a5(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=new A.M(t.a,t.b,s.$ti.h("M<1,2>"))
s.c=t.c
return!0}},
$iR:1}
A.aL.prototype={
T(a){return A.iB(a)&1073741823},
U(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a2(a[s].a,b))return s
return-1}}
A.ae.prototype={
k(a){return this.ae(!1)},
ae(a){var t,s,r,q,p,o=this.ap(),n=this.a0(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.A(n,r)
p=n[r]
m=a?m+A.fr(p):m+A.r(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
ap(){var t,s=this.$s
while($.d8.length<=s)B.a.l($.d8,null)
t=$.d8[s]
if(t==null){t=this.an()
B.a.j($.d8,s,t)}return t},
an(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.d(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.a.j(l,r,s[t])}}l=A.eM(l,!1,u.K)
l.$flags=3
return l}}
A.be.prototype={
a0(){return[this.a,this.b]},
K(a,b){if(b==null)return!1
return b instanceof A.be&&this.$s===b.$s&&J.a2(this.a,b.a)&&J.a2(this.b,b.b)},
gu(a){return A.fp(this.$s,this.a,this.b,B.t)}}
A.bf.prototype={
a0(){return this.a},
K(a,b){if(b==null)return!1
return b instanceof A.bf&&this.$s===b.$s&&A.hJ(this.a,b.a)},
gu(a){return A.fp(this.$s,A.hu(this.a),B.t,B.t)}}
A.ca.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gar(){var t=this,s=t.c
if(s!=null)return s
s=t.b
return t.c=A.fk(t.a,s.multiline,!s.ignoreCase,s.unicode,s.dotAll,"g")},
aa(a,b){var t,s=this.gar()
if(s==null)s=A.eT(s)
s.lastIndex=b
t=s.exec(a)
if(t==null)return null
return new A.cs(t)},
$icV:1,
$ihx:1}
A.cs.prototype={
gaf(){var t=this.b
return t.index+t[0].length},
$ieN:1}
A.d4.prototype={
gq(){var t=this.d
return t==null?u.a0.a(t):t},
n(){var t,s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
t=n.c
s=m.length
if(t<=s){r=n.a
q=r.aa(m,t)
if(q!=null){n.d=q
p=q.gaf()
if(q.b.index===p){t=!1
if(r.b.unicode){r=n.c
o=r+1
if(o<s){if(!(r>=0&&r<s))return A.A(m,r)
r=m.charCodeAt(r)
if(r>=55296&&r<=56319){if(!(o>=0))return A.A(m,o)
t=m.charCodeAt(o)
t=t>=56320&&t<=57343}}}p=(t?p+1:p)+1}n.c=p
return!0}}n.b=n.d=null
return!1},
$iR:1}
A.a8.prototype={
h(a){return A.bS(v.typeUniverse,this,a)},
C(a){return A.fH(v.typeUniverse,this,a)}}
A.co.prototype={}
A.ct.prototype={
k(a){return A.X(this.a,null)}}
A.cn.prototype={
k(a){return this.a}}
A.bO.prototype={}
A.ay.prototype={
gt(a){var t=this,s=new A.aT(t,t.r,t.$ti.h("aT<1>"))
s.c=t.e
return s},
gp(a){return this.a},
A(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.g.a(t[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return u.g.a(s[b])!=null}else return this.ao(b)},
ao(a){var t=this.d
if(t==null)return!1
return this.ab(t[J.a3(a)&1073741823],a)>=0},
l(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a9(t==null?r.b=A.eP():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a9(s==null?r.c=A.eP():s,b)}else return r.al(b)},
al(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.eP()
s=J.a3(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.Y(a)]
else{if(q.ab(r,a)>=0)return!1
r.push(q.Y(a))}return!0},
a9(a,b){this.$ti.c.a(b)
if(u.g.a(a[b])!=null)return!1
a[b]=this.Y(b)
return!0},
Y(a){var t=this,s=new A.cr(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
ab(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a2(a[s].a,b))return s
return-1},
$ifn:1}
A.cr.prototype={}
A.aT.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.f(A.a5(r))
else if(s==null){t.d=null
return!1}else{t.d=t.$ti.h("1?").a(s.a)
t.c=s.b
return!0}},
$iR:1}
A.cQ.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:7}
A.L.prototype={
B(a,b){var t,s,r,q=A.t(this)
q.h("~(L.K,L.V)").a(b)
for(t=this.gH(),t=t.gt(t),q=q.h("L.V");t.n();){s=t.gq()
r=this.i(0,s)
b.$2(s,r==null?q.a(r):r)}},
M(a,b,c,d){var t,s,r,q,p,o=A.t(this)
o.C(c).C(d).h("M<1,2>(L.K,L.V)").a(b)
t=A.ac(c,d)
for(s=this.gH(),s=s.gt(s),o=o.h("L.V");s.n();){r=s.gq()
q=this.i(0,r)
p=b.$2(r,q==null?o.a(q):q)
t.j(0,p.a,p.b)}return t},
v(a){return this.gH().A(0,a)},
gp(a){var t=this.gH()
return t.gp(t)},
gG(a){var t=this.gH()
return t.gG(t)},
k(a){return A.cS(this)},
$iy:1}
A.cT.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.r(a)
s.a=(s.a+=t)+": "
t=A.r(b)
s.a+=t},
$S:4}
A.bT.prototype={}
A.ba.prototype={
i(a,b){return this.a.i(0,b)},
v(a){return this.a.v(a)},
B(a,b){this.a.B(0,this.$ti.h("~(1,2)").a(b))},
gG(a){return this.a.a===0},
gp(a){return this.a.a},
k(a){return A.cS(this.a)},
M(a,b,c,d){return this.a.M(0,this.$ti.C(c).C(d).h("M<1,2>(3,4)").a(b),c,d)},
$iy:1}
A.bJ.prototype={}
A.ak.prototype={
k(a){return A.fj(this,"{","}")},
R(a,b){var t
A.t(this).h("E(1)").a(b)
for(t=this.gt(this);t.n();)if(b.$1(t.gq()))return!0
return!1},
$iq:1,
$iaw:1}
A.bN.prototype={}
A.bg.prototype={}
A.cp.prototype={
i(a,b){var t,s=this.b
if(s==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.au(b):t}},
gp(a){return this.b==null?this.c.a:this.O().length},
gG(a){return this.gp(0)===0},
gH(){if(this.b==null){var t=this.c
return new A.W(t,A.t(t).h("W<1>"))}return new A.cq(this)},
v(a){if(this.b==null)return this.c.v(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
B(a,b){var t,s,r,q,p=this
u.cQ.a(b)
if(p.b==null)return p.c.B(0,b)
t=p.O()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=A.dc(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw A.f(A.a5(p))}},
O(){var t=u.aL.a(this.c)
if(t==null)t=this.c=A.d(Object.keys(this.a),u.s)
return t},
au(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=A.dc(this.a[a])
return this.b[a]=t}}
A.cq.prototype={
gp(a){return this.a.gp(0)},
a4(a,b){var t=this.a
if(t.b==null)t=t.gH().a4(0,b)
else{t=t.O()
if(!(b<t.length))return A.A(t,b)
t=t[b]}return t},
gt(a){var t=this.a
if(t.b==null){t=t.gH()
t=t.gt(t)}else{t=t.O()
t=new J.aC(t,t.length,A.af(t).h("aC<1>"))}return t},
A(a,b){return this.a.v(b)}}
A.c0.prototype={}
A.c3.prototype={}
A.bv.prototype={
k(a){var t=A.c5(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
A.cc.prototype={
k(a){return"Cyclic error in JSON stringify"}}
A.cJ.prototype={
aA(a,b){var t=A.im(a,this.gaB().a)
return t},
a5(a,b){var t=A.hB(a,this.gaC().b,null)
return t},
gaC(){return B.ce},
gaB(){return B.cd}}
A.cL.prototype={}
A.cK.prototype={}
A.d6.prototype={
ai(a){var t,s,r,q,p,o,n=a.length
for(t=this.c,s=0,r=0;r<n;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<n&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)t.a+=B.m.I(a,s,r)
s=r+1
p=A.P(92)
t.a+=p
p=A.P(117)
t.a+=p
p=A.P(100)
t.a+=p
p=q>>>8&15
p=A.P(p<10?48+p:87+p)
t.a+=p
p=q>>>4&15
p=A.P(p<10?48+p:87+p)
t.a+=p
p=q&15
p=A.P(p<10?48+p:87+p)
t.a+=p}}continue}if(q<32){if(r>s)t.a+=B.m.I(a,s,r)
s=r+1
p=A.P(92)
t.a+=p
switch(q){case 8:p=A.P(98)
t.a+=p
break
case 9:p=A.P(116)
t.a+=p
break
case 10:p=A.P(110)
t.a+=p
break
case 12:p=A.P(102)
t.a+=p
break
case 13:p=A.P(114)
t.a+=p
break
default:p=A.P(117)
t.a+=p
p=A.P(48)
t.a=(t.a+=p)+p
p=q>>>4&15
p=A.P(p<10?48+p:87+p)
t.a+=p
p=q&15
p=A.P(p<10?48+p:87+p)
t.a+=p
break}}else if(q===34||q===92){if(r>s)t.a+=B.m.I(a,s,r)
s=r+1
p=A.P(92)
t.a+=p
p=A.P(q)
t.a+=p}}if(s===0)t.a+=a
else if(s<n)t.a+=B.m.I(a,s,n)},
X(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw A.f(new A.cc(a,null))}B.a.l(t,a)},
W(a){var t,s,r,q,p=this
if(p.ah(a))return
p.X(a)
try{t=p.b.$1(a)
if(!p.ah(t)){r=A.fl(a,null,p.gac())
throw A.f(r)}r=p.a
if(0>=r.length)return A.A(r,-1)
r.pop()}catch(q){s=A.f6(q)
r=A.fl(a,s,p.gac())
throw A.f(r)}},
ah(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=B.d.k(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.ai(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.X(a)
r.aM(a)
t=r.a
if(0>=t.length)return A.A(t,-1)
t.pop()
return!0}else if(u.bC.b(a)){r.X(a)
s=r.aN(a)
t=r.a
if(0>=t.length)return A.A(t,-1)
t.pop()
return s}else return!1},
aM(a){var t,s,r=this.c
r.a+="["
t=a.length
if(t!==0){if(0>=t)return A.A(a,0)
this.W(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.W(a[s])}}r.a+="]"},
aN(a){var t,s,r,q,p,o,n=this,m={}
if(a.gG(a)){n.c.a+="{}"
return!0}t=a.gp(a)*2
s=A.fo(t,null,u.X)
r=m.a=0
m.b=!0
a.B(0,new A.d7(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.ai(A.w(s[r]))
q.a+='":'
o=r+1
if(!(o<t))return A.A(s,o)
n.W(s[o])}q.a+="}"
return!0}}
A.d7.prototype={
$2(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
B.a.j(t,s.a++,a)
B.a.j(t,s.a++,b)},
$S:4}
A.d5.prototype={
gac(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
A.cm.prototype={
k(a){return this.m()},
$iu:1}
A.F.prototype={}
A.bY.prototype={
k(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.c5(t)
return"Assertion failed"}}
A.bI.prototype={}
A.ah.prototype={
ga_(){return"Invalid argument"+(!this.a?"(s)":"")},
gZ(){return""},
k(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.ga_()+r+p
if(!t.a)return o
return o+t.gZ()+": "+A.c5(t.ga6())},
ga6(){return this.b}}
A.bD.prototype={
ga6(){return A.bV(this.b)},
ga_(){return"RangeError"},
gZ(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.r(r):""
else if(r==null)t=": Not greater than or equal to "+A.r(s)
else if(r>s)t=": Not in inclusive range "+A.r(s)+".."+A.r(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.r(s)
return t}}
A.c6.prototype={
ga6(){return A.D(this.b)},
ga_(){return"RangeError"},
gZ(){if(A.D(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.bK.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.c2.prototype={
k(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c5(t)+"."}}
A.bH.prototype={
k(a){return"Stack Overflow"},
$iF:1}
A.cD.prototype={
k(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(typeof r=="string"){if(r.length>78)r=B.m.I(r,0,75)+"..."
return s+"\n"+r}else return s}}
A.q.prototype={
D(a,b,c,d){var t,s
d.a(b)
A.t(this).C(d).h("1(1,q.E)").a(c)
for(t=this.gt(this),s=b;t.n();)s=c.$2(s,t.gq())
return s},
gp(a){var t,s=this.gt(this)
for(t=0;s.n();)++t
return t},
a4(a,b){var t,s
A.hv(b,"index")
t=this.gt(this)
for(s=b;t.n();){if(s===0)return t.gq();--s}throw A.f(A.fi(b,b-s,this,"index"))},
k(a){return A.hr(this,"(",")")}}
A.M.prototype={
k(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.bz.prototype={
gu(a){return A.n.prototype.gu.call(this,0)},
k(a){return"null"}}
A.n.prototype={$in:1,
K(a,b){return this===b},
gu(a){return A.bC(this)},
k(a){return"Instance of '"+A.cg(this)+"'"},
gJ(a){return A.iP(this)},
toString(){return this.k(this)}}
A.bc.prototype={
gp(a){return this.a.length},
k(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$ihz:1}
A.a7.prototype={
m(){return"PrimaryDisorder."+this.b}}
A.b1.prototype={
m(){return"Compensation."+this.b}}
A.cz.prototype={}
A.cG.prototype={}
A.dm.prototype={
$2(a,b){if(b!=null&&!(b>0))throw A.f(A.U("not_positive:"+a,""))},
$S:8}
A.aq.prototype={
m(){return"AmountUnit."+this.b}}
A.S.prototype={
m(){return"DoseUnit."+this.b}}
A.bM.prototype={
m(){return"_Dim."+this.b}}
A.d_.prototype={}
A.dw.prototype={
$4(a,b,c,d){var t
if(!c)return a*b*d
t=this.a
if(t==null||!(t>0))throw A.f(B.aC)
return a*b*d*t},
$S:5}
A.dv.prototype={
$4(a,b,c,d){return this.a?a*b*d:this.b.$4(a,b,c,d)},
$S:5}
A.c1.prototype={}
A.bl.prototype={}
A.eF.prototype={
$2(a,b){var t,s
A.w(a)
A.bU(b)
if(b<0||!isFinite(b))throw A.f(A.U("out_of_range:composition",a))
t=this.b
s=t.i(0,a)
if(s==null)s=0
t.j(0,a,s+b*this.a.a)},
$S:9}
A.ce.prototype={}
A.bG.prototype={}
A.cO.prototype={}
A.aH.prototype={
m(){return"DropFactor."+this.b}}
A.bn.prototype={}
A.aI.prototype={
m(){return"GlucoseNaCoefficient."+this.b}}
A.ad.prototype={
m(){return"TbwGroup."+this.b}}
A.aF.prototype={
m(){return"CorrectedCaFormula."+this.b}}
A.aR.prototype={
m(){return"PotassiumLimitItem."+this.b}}
A.cE.prototype={}
A.dk.prototype={
$2(a,b){return A.b(A.w(a),A.D(b),0,2)},
$S:10}
A.dl.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.au.prototype={
m(){return"JsthDicType."+this.b}}
A.cM.prototype={}
A.c4.prototype={}
A.dp.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.as.prototype={
m(){return"FibrinMarkerRise."+this.b}}
A.dn.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.cF.prototype={}
A.dy.prototype={
$1(a){return A.eS(a)},
$S:11}
A.aQ.prototype={
m(){return"PlateletSamplingTime."+this.b}}
A.a_.prototype={
m(){return"LaGroup."+this.b}}
A.V.prototype={
m(){return"LaRoute."+this.b}}
A.aM.prototype={
m(){return"LaRuleKind."+this.b}}
A.ab.prototype={
m(){return"LaNote."+this.b}}
A.bd.prototype={
m(){return"_Form."+this.b}}
A.az.prototype={}
A.cd.prototype={}
A.cN.prototype={}
A.dq.prototype={
$1(a){var t
u.l.a(a)
if(a.a.A(0,this.a)){t=this.b
t=a.b.R(0,t.gaw(t))}else t=!1
return t},
$S:2}
A.dr.prototype={
$1(a){return u.l.a(a).d===B.h},
$S:2}
A.ds.prototype={
$1(a){return u.l.a(a).d===B.R},
$S:2}
A.df.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.aa.prototype={
m(){return"IcdscConsciousness."+this.b}}
A.T.prototype={
m(){return"JcsLevel."+this.b}}
A.at.prototype={
m(){return"JcsSuffix."+this.b}}
A.cC.prototype={}
A.di.prototype={
$2(a,b){return A.bU(a)+A.bU(b)},
$S:6}
A.dj.prototype={
$2(a,b){return A.bU(a)+A.bU(b)},
$S:6}
A.bF.prototype={
m(){return"Sex."+this.b}}
A.aj.prototype={
m(){return"JasoBmiClass."+this.b}}
A.aK.prototype={
m(){return"IdealWeightFormula."+this.b}}
A.a4.prototype={
m(){return"BsaFormula."+this.b}}
A.aJ.prototype={
m(){return"HarrisBenedictVersion."+this.b}}
A.cX.prototype={}
A.dA.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.cB.prototype={}
A.dh.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.d1.prototype={}
A.de.prototype={
$2(a,b){return new A.M(A.w(a),B.d.N(A.aB(b)),u.O)},
$S:12}
A.eD.prototype={
$1(a){return!B.ed.A(0,A.w(a))},
$S:13}
A.dC.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.c(a,"height_cm")
A.bi(null,s,t)
r=s/100
q=t/(r*r)
t=A.K(new A.z(q,"kg/m\xb2",A.d([A.a(t,4)+" \xf7 "+A.a(r,4)+"\xb2 = "+A.a(q,2)],u.s),B.b))
s=A.fm(u.N,u.X)
s.P(0,t)
s.j(0,"class",A.iX(q).b)
return s},
$S:0}
A.dD.prototype={
$1(a){var t,s,r=A.c(u.f.a(a),"height_cm")
A.bi(null,r,null)
t=r/100
s=22*t*t
return A.K(new A.z(s,"kg",A.d(["22 \xd7 "+A.a(t,4)+"\xb2 = "+A.a(s,1)],u.s),B.b))},
$S:0}
A.dE.prototype={
$1(a){var t,s
u.f.a(a)
t=J.a2(a.i(0,"sex"),"female")?B.l:B.j
s=A.c(a,"height_cm")
return A.K(A.h0(A.bh(B.cz,a,"formula",B.A,u.d),s,t))},
$S:0}
A.dP.prototype={
$1(a){var t,s
u.f.a(a)
t=A.c(a,"actual_kg")
s=A.c(a,"ideal_kg")
return A.K(A.iv(t,A.c(a,"factor"),s))},
$S:0}
A.e_.prototype={
$1(a){var t,s,r
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.c(a,"height_cm")
r=A.bh(B.cJ,a,"formula",B.W,u.Y)
return A.K(A.iA(A.h(a,"age"),r,s,t))},
$S:0}
A.ea.prototype={
$1(a){var t
u.f.a(a)
t=A.c(a,"weight_kg")
return A.K(A.h2(A.c(a,"per_kg"),"kcal/\u65e5",t))},
$S:0}
A.el.prototype={
$1(a){var t,s,r
u.f.a(a)
t=J.a2(a.i(0,"sex"),"female")?B.l:B.j
s=A.c(a,"weight_kg")
r=A.c(a,"height_cm")
return A.K(A.iS(A.c(a,"age"),r,t,A.bh(B.cw,a,"version",B.J,u.e),s))},
$S:0}
A.ew.prototype={
$1(a){var t,s,r,q,p="basal_kcal"
u.f.a(a)
t=A.c(a,p)
s=A.c(a,"activity")
r=A.c(a,"stress")
A.b(p,t,0,1e4)
A.b("activity_factor",s,0.5,3)
A.b("stress_factor",r,0.5,3)
q=t*s*r
return A.K(new A.z(q,"kcal/\u65e5",A.d([A.a(t,0)+" \xd7 "+A.a(s,4)+" \xd7 "+A.a(r,4)+" = "+A.a(q,0)],u.s),B.b))},
$S:0}
A.eA.prototype={
$1(a){var t
u.f.a(a)
t=A.c(a,"weight_kg")
return A.K(A.h2(A.c(a,"per_kg"),"g/\u65e5",t))},
$S:0}
A.eB.prototype={
$1(a){var t,s,r,q,p,o="total_kcal"
u.f.a(a)
t=A.c(a,o)
s=A.c(a,"amino_acid_g")
A.b(o,t,0,2e4)
A.b("amino_acid",s,0,1000)
if(s===0)A.p(B.aN)
r=t-4*s
q=s/6.25
p=r/q
A.a(t,4)
A.a(s,4)
A.a(r,0)
A.a(s,4)
A.a(q,2)
A.a(r,0)
A.a(q,2)
A.a(p,0)
return A.m(["npc",r,"nitrogen",q,"ratio",p],u.N,u.X)},
$S:0}
A.eC.prototype={
$1(a){var t,s
u.f.a(a)
t=A.c(a,"sodium")
s=A.c(a,"glucose")
return A.K(A.iR(A.bh(B.ct,a,"coefficient",B.I,u.c),s,t))},
$S:0}
A.dF.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.O(B.cD,A.w(a.i(0,"group")),u.am)
A.b("weight",t,0.3,400)
r=A.jo(s)
q=t*r
return A.K(new A.z(q,"L",A.d([A.a(t,4)+" \xd7 "+A.a(r,4)+" = "+A.a(q,1)],u.s),B.b))},
$S:0}
A.dG.prototype={
$1(a){var t,s,r,q,p,o="serum_sodium",n="infusate_sodium",m="infusate_potassium"
u.f.a(a)
t=A.c(a,o)
s=A.c(a,n)
r=A.h(a,m)
if(r==null)r=0
q=A.c(a,"tbw_l")
A.b(o,t,90,200)
A.b(n,s,0,1300)
A.b(m,r,0,300)
A.b("tbw",q,0.1,250)
p=(s+r-t)/(q+1)
return A.K(new A.z(p,"mEq/L",A.d(["("+A.a(s,4)+" + "+A.a(r,4)+" \u2212 "+A.a(t,4)+") \xf7 ("+A.a(q,1)+" + 1) = "+A.a(p,2)],u.s),B.b))},
$S:0}
A.dH.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="target_change"
u.f.a(a)
t=A.c(a,"change_per_liter")
s=A.c(a,j)
r=A.c(a,"hours")
A.b("hours",r,0.5,168)
A.b(j,s,-50,50)
if(t===0||s===0||J.f9(t)!==J.f9(s))A.p(B.aM)
q=s/t
p=q*1000/r
o=s/r
n=o*Math.min(24,r)
m=o*Math.min(48,r)
o=A.d([],u.r)
l=s>0
if(l&&Math.abs(n)>10)o.push(B.bu)
if(l&&Math.abs(m)>18)o.push(B.bv)
if(s<0)l=Math.abs(s)/r>0.5||Math.abs(n)>10
else l=!1
if(l)o.push(B.bw)
A.a(s,4)
A.a(t,2)
A.a(q,2)
A.a(q,2)
A.a(r,4)
A.a(p,0)
A.a(n,1)
A.a(m,1)
t=A.d([],u.s)
for(s=o.length,k=0;k<o.length;o.length===s||(0,A.v)(o),++k)t.push(o[k].b)
return A.m(["volume_l",q,"rate_ml_h",p,"change_first_24h",n,"change_first_48h",m,"warnings",t],u.N,u.X)},
$S:0}
A.dI.prototype={
$1(a){var t
u.f.a(a)
t=A.c(a,"tbw_l")
return A.K(A.iL(A.c(a,"sodium"),t))},
$S:0}
A.dJ.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g="chloride",f="bicarbonate",e="reference_albumin"
u.f.a(a)
t=A.c(a,"sodium")
s=A.c(a,g)
r=A.c(a,f)
q=A.h(a,"albumin")
p=A.h(a,e)
if(p==null)p=4.4
o=A.h(a,"normal_ag")
if(o==null)o=12
n=A.h(a,"normal_bicarbonate")
if(n==null)n=24
A.b("sodium",t,90,200)
A.b(g,s,50,160)
A.b(f,r,1,60)
m=q!=null
if(m)A.b("albumin",q,0.5,7)
l=t-(s+r)
k=A.d(["AG = "+A.a(t,4)+" \u2212 ("+A.a(s,4)+" + "+A.a(r,4)+") = "+A.a(l,1)],u.s)
if(m){A.b(e,p,3,5.5)
j=l+2.5*(p-q)
B.a.l(k,"\u88dc\u6b63 AG = "+A.a(l,1)+" + 2.5 \xd7 ("+A.a(p,4)+" \u2212 "+A.a(q,4)+") = "+A.a(j,1))}else j=null
if(r!==n){i=j==null?l:j
h=(i-o)/(n-r)
B.a.l(k,"\u0394AG/\u0394HCO3 = ("+A.a(i,1)+" \u2212 "+A.a(o,4)+") \xf7 ("+A.a(n,4)+" \u2212 "+A.a(r,4)+") = "+A.a(h,2))}else h=null
return A.m(["ag",l,"albumin_corrected",j,"delta_ratio",h],u.N,u.X)},
$S:0}
A.dK.prototype={
$1(a){var t,s,r,q,p,o,n
u.f.a(a)
t=A.c(a,"sodium")
s=A.c(a,"glucose")
r=A.c(a,"bun")
q=A.h(a,"measured")
A.b("sodium",t,90,200)
A.b("glucose",s,10,3000)
A.b("bun",r,1,300)
p=2*t+s/18+r/2.8
o=A.d(["2 \xd7 "+A.a(t,4)+" + "+A.a(s,4)+" \xf7 18 + "+A.a(r,4)+" \xf7 2.8 = "+A.a(p,1)],u.s)
if(q!=null){A.b("measured_osm",q,150,500)
n=q-p
B.a.l(o,"\u30ae\u30e3\u30c3\u30d7 = "+A.a(q,4)+" \u2212 "+A.a(p,1)+" = "+A.a(n,1))}else n=null
return A.m(["calculated",p,"gap",n],u.N,u.X)},
$S:0}
A.dL.prototype={
$1(a){var t
u.f.a(a)
t=A.c(a,"calcium")
return A.K(A.iD(A.c(a,"albumin"),t,A.bh(B.cA,a,"formula",B.G,u.J)))},
$S:0}
A.dM.prototype={
$1(a){var t,s,r,q,p,o,n,m
u.f.a(a)
t=A.d([],u.s)
s=A.c(a,"concentration")
r=A.c(a,"rate")
q=A.c(a,"daily")
p=A.c(a,"max_concentration")
o=A.c(a,"max_rate")
n=A.c(a,"max_daily")
A.b("k_concentration",s,0,2000)
A.b("k_rate",r,0,1000)
A.b("k_daily",q,0,5000)
m=A.eL(u.Q)
if(s>p)m.l(0,B.cX)
if(r>o)m.l(0,B.cY)
if(q>n)m.l(0,B.cZ)
s=A.hC(m,m.r,m.$ti.c)
r=s.$ti.c
while(s.n()){q=s.d
t.push((q==null?r.a(q):q).b)}return A.m(["exceeded",t],u.N,u.X)},
$S:0}
A.dN.prototype={
$1(a){var t,s,r,q,p,o,n,m,l
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.h(a,"age")
A.b("weight",t,0.3,400)
r=s!=null
if(r)A.b("age",s,0,120)
q=B.d.S(t,0,10)
p=B.d.S(t-10,0,10)
o=B.d.S(t-20,0,1/0)
n=4*q+2*p+o
m=n*24
l=r&&s>=16
s=A.d(["4 \xd7 "+A.a(q,4)+" + 2 \xd7 "+A.a(p,4)+" + 1 \xd7 "+A.a(o,4)+" = "+A.a(n,1)+" mL/h\uff081\u65e5 "+A.a(m,0)+" mL\uff09"],u.s)
r=A.d([],u.r)
if(l&&m/t>30)r.push(B.by)
if(l&&m>2500)r.push(B.bz)
return A.K(new A.z(n,"mL/h",s,r))},
$S:0}
A.dO.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="creatinine",i=" \xd7 0.739"
u.f.a(a)
t=J.a2(a.i(0,"sex"),"female")?B.l:B.j
s=A.c(a,j)
r=A.c(a,"age")
A.b("age_adult",r,18,120)
A.b(j,s,0.1,30)
q=Math.pow(s,-1.094)
p=Math.pow(r,-0.287)
o=194*q*p
n=t===B.j?o:o*0.739
s=A.a(s,4)
r=A.a(r,4)
t=t===B.l
m=t?i:""
l=A.a(q,4)
k=A.a(p,4)
t=t?i:""
return A.K(new A.z(n,"mL/min/1.73m\xb2",A.d(["194 \xd7 "+s+"^\u22121.094 \xd7 "+r+"^\u22120.287"+m,"= 194 \xd7 "+l+" \xd7 "+k+t+" = "+A.a(n,1)],u.s),B.b))},
$S:0}
A.dQ.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="cystatin",i=" \xd7 0.929"
u.f.a(a)
t=J.a2(a.i(0,"sex"),"female")?B.l:B.j
s=A.c(a,j)
r=A.c(a,"age")
A.b("age_adult",r,18,120)
A.b(j,s,0.1,15)
q=Math.pow(s,-1.019)
p=Math.pow(0.996,r)
o=t===B.j?1:0.929
n=104*q*p*o-8
s=A.a(s,4)
r=A.a(r,4)
t=t===B.l
m=t?i:""
l=A.a(q,4)
k=A.a(p,4)
t=t?i:""
return A.K(new A.z(n,"mL/min/1.73m\xb2",A.d(["104 \xd7 "+s+"^\u22121.019 \xd7 0.996^"+r+m+" \u2212 8","= 104 \xd7 "+l+" \xd7 "+k+t+" \u2212 8 = "+A.a(n,1)],u.s),B.b))},
$S:0}
A.dR.prototype={
$1(a){var t,s,r
u.f.a(a)
t=A.c(a,"egfr")
s=A.c(a,"bsa")
A.b("egfr",t,0,300)
A.b("bsa",s,0.1,4)
r=t*s/1.73
return A.K(new A.z(r,"mL/min",A.d([A.a(t,1)+" \xd7 "+A.a(s,3)+" \xf7 1.73 = "+A.a(r,1)],u.s),B.b))},
$S:0}
A.dS.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k="creatinine"
u.f.a(a)
t=J.a2(a.i(0,"sex"),"female")?B.l:B.j
s=A.c(a,"age")
r=A.c(a,"weight_kg")
q=A.c(a,k)
p=A.bh(B.cu,a,"creatinine_method",B.H,u._)
A.b("age_adult",s,18,120)
A.b("weight",r,20,400)
A.b(k,q,0.1,30)
p=p===B.H
o=p?q+0.2:q
n=(140-s)*r/(72*o)
m=t===B.j?n:n*0.85
l=A.d([],u.s)
if(p)l.push("\u9175\u7d20\u6cd5 Cr "+A.a(q,4)+" + 0.2 = "+A.a(o,4))
s=A.a(s,4)
r=A.a(r,4)
p=A.a(o,4)
t=t===B.l?" \xd7 0.85":""
l.push("(140 \u2212 "+s+") \xd7 "+r+" \xf7 (72 \xd7 "+p+")"+t+" = "+A.a(m,1))
return A.K(new A.z(m,"mL/min",l,B.b))},
$S:0}
A.dT.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
u.f.a(a)
t=A.h(a,"pf_ratio")
s=A.C(a,"respiratory_support")
r=A.h(a,"platelets")
q=A.h(a,"bilirubin")
p=A.h(a,"map")
o=A.h(a,"dopamine")
if(o==null)o=0
n=A.h(a,"dobutamine")
if(n==null)n=0
m=A.h(a,"epinephrine")
if(m==null)m=0
l=A.h(a,"norepinephrine")
if(l==null)l=0
k=A.bV(a.i(0,"gcs"))
k=k==null?null:B.d.N(k)
j=A.h(a,"creatinine")
i=A.h(a,"urine_ml_day")
h=A.bV(a.i(0,"baseline"))
h=h==null?null:B.d.N(h)
return A.ag(A.jc(new A.cZ(t,s,r,q,p,o,n,m,l,k,j,i),h,A.C(a,"preexisting_organ_dysfunction")))},
$S:0}
A.dU.prototype={
$1(a){var t
u.f.a(a)
t=A.c(a,"respiratory_rate")
return A.ag(A.j7(A.C(a,"altered_mentation"),t,A.c(a,"sbp")))},
$S:0}
A.dV.prototype={
$1(a){u.f.a(a)
return A.ag(A.ix(new A.cx(A.c(a,"temperature"),A.c(a,"map"),A.c(a,"heart_rate"),A.c(a,"respiratory_rate"),A.c(a,"fio2"),A.h(a,"aado2"),A.h(a,"pao2"),A.h(a,"ph"),A.h(a,"bicarbonate"),A.c(a,"sodium"),A.c(a,"potassium"),A.c(a,"creatinine"),A.C(a,"acute_renal_failure"),A.c(a,"hematocrit"),A.c(a,"wbc"),B.d.E(A.c(a,"gcs")),A.c(a,"age"),new A.cy(A.C(a,"ch_liver"),A.C(a,"ch_cardiovascular"),A.C(a,"ch_respiratory"),A.C(a,"ch_renal"),A.C(a,"ch_immunocompromised")),A.bh(B.cC,a,"admission_type",B.S,u.v))))},
$S:0}
A.dW.prototype={
$1(a){var t,s,r
u.f.a(a)
t=A.c(a,"age")
s=B.d.E(A.c(a,"apache2"))
r=B.d.E(A.c(a,"sofa"))
return A.ag(A.h1(t,s,B.d.E(A.c(a,"comorbidities")),A.c(a,"days_to_icu"),A.h(a,"il6"),r))},
$S:0}
A.dX.prototype={
$1(a){var t,s,r
u.f.a(a)
t=A.c(a,"age")
s=B.d.E(A.c(a,"apache2"))
r=B.d.E(A.c(a,"sofa"))
return A.ag(A.h1(t,s,B.d.E(A.c(a,"comorbidities")),A.c(a,"days_to_icu"),null,r))},
$S:0}
A.dY.prototype={
$1(a){var t,s,r,q,p,o
u.f.a(a)
t=A.O(B.cE,A.w(a.i(0,"consciousness")),u.o)
s=A.eX(a)
if(t===B.a5||t===B.a6)A.p(B.bc)
A.eY(s,B.cG,0,1)
r=u.N
q=u.S
p=A.ac(r,q)
p.j(0,"altered_consciousness",t===B.a7?0:1)
p.P(0,s)
o=A.f0(p)
return A.ag(new A.a0(o,A.eH(p,r,q),o>=4,B.b))},
$S:0}
A.dZ.prototype={
$1(a){var t=B.d.E(A.c(u.f.a(a),"nrs"))
A.b("nrs",t,0,10)
return A.ag(new A.a0(t,A.m(["nrs",t],u.N,u.S),t>3,B.b))},
$S:0}
A.e0.prototype={
$1(a){var t,s=A.eX(u.f.a(a))
A.eY(s,B.cF,0,2)
t=A.f0(s)
return A.ag(new A.a0(t,A.eH(s,u.N,u.S),t>2,B.b))},
$S:0}
A.e1.prototype={
$1(a){var t,s
u.f.a(a)
t=A.eX(a)
if(!A.C(a,"mechanically_ventilated"))A.p(B.aT)
A.eY(t,B.cn,1,4)
s=A.f0(t)
return A.ag(new A.a0(s,A.eH(t,u.N,u.S),s>5,B.b))},
$S:0}
A.e2.prototype={
$1(a){var t,s,r,q,p,o,n
u.f.a(a)
t=A.O(B.cr,A.w(a.i(0,"level")),u.aM)
s=u.ad
r=A.eL(s)
q=u.bQ.a(a.i(0,"suffixes"))
if(q==null)q=B.cM
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.v)(q),++o)r.l(0,A.O(B.cH,A.w(q[o]),s))
s=A.d([],u.s)
if(r.A(0,B.a8))s.push("R")
if(r.A(0,B.a9))s.push("I")
if(r.A(0,B.aa))s.push("A")
n=B.a.aI(s)
return A.m(["label",""+A.iY(t)+n],u.N,u.X)},
$S:0}
A.e3.prototype={
$1(a){var t
u.f.a(a)
t=A.eZ(a)
return A.K(A.fY(A.c(a,"dose"),t,A.O(B.w,A.w(a.i(0,"dose_unit")),u.R),A.h(a,"weight_kg")))},
$S:0}
A.e4.prototype={
$1(a){var t,s,r,q,p,o,n
u.f.a(a)
t=A.eZ(a)
s=A.c(a,"rate_ml_h")
r=A.O(B.w,A.w(a.i(0,"dose_unit")),u.R)
q=A.h(a,"weight_kg")
A.fK(t)
A.b("rate",s,0,1e4)
p=A.fU(r,q)
o=A.fN(r,t.b)
t=t.a/t.c
n=s*t/(p*o)
if(!isFinite(n))A.p(B.a0)
s=A.a(s,4)
t=A.a(t,4)
q=A.bW(r).a[2]?A.a(p,4)+" kg \xd7 ":""
return A.K(new A.z(n,r.b,A.d([s+" \xd7 "+t+" \xf7 ("+q+A.a(o,4)+") = "+A.a(n,3)],u.s),B.b))},
$S:0}
A.e5.prototype={
$1(a){var t,s,r,q,p,o,n,m
u.f.a(a)
t=A.eZ(a)
s=A.O(B.w,A.w(a.i(0,"dose_unit")),u.R)
r=u.n
q=A.d([],r)
for(p=u.W,o=p.a(a.i(0,"weights_kg")),n=o.length,m=0;m<o.length;o.length===n||(0,A.v)(o),++m)q.push(A.aB(o[m]))
r=A.d([],r)
for(p=p.a(a.i(0,"doses")),o=p.length,m=0;m<p.length;p.length===o||(0,A.v)(p),++m)r.push(A.aB(p[m]))
return A.m(["table",A.jn(r,t,s,q)],u.N,u.X)},
$S:0}
A.e6.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.c(a,"value")
s=u.R
r=A.O(B.w,A.w(a.i(0,"value_unit")),s)
q=A.h(a,"min")
return A.m(["outside",A.j2(A.h(a,"max"),q,A.O(B.w,A.w(a.i(0,"range_unit")),s),t,r,A.h(a,"weight_kg"))],u.N,u.X)},
$S:0}
A.e7.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j=u.f
j.a(a)
t=A.d([],u.a3)
for(s=u.W.a(a.i(0,"items")),r=s.length,q=u.N,p=u.i,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=j.a(s[o])
t.push(new A.e(new A.c1(j.a(n.i(0,"per_ml")).M(0,new A.dB(),q,p)),A.aB(n.i(0,"volume_ml"))))}m=A.jm(t)
j=A.d([],u.aj)
for(s=t.length,o=0;o<t.length;t.length===s||(0,A.v)(t),++o){r=t[o]
l=r.b
n=A.ac(q,p)
for(r=r.a.a,r=new A.aO(r,r.r,r.e,A.t(r).h("aO<1,2>"));r.n();){k=r.d
n.j(0,k.a,k.b*l)}j.push(n)}return A.m(["contributions",j,"volume_ml",m.a,"totals",m.b,"npc_kcal",m.c,"nitrogen_g",m.d,"npc_n_ratio",m.e,"nitrogen_from_label",m.f],q,u.X)},
$S:0}
A.dB.prototype={
$2(a,b){return new A.M(A.w(a),A.aB(b),u.d8)},
$S:14}
A.e8.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j=u.f
j.a(a)
t=A.c(a,"basis_amount")
s=A.eU(a.i(0,"basis_unit"))
if(s==null)s=""
r=A.h(a,"standard_volume_ml")
q=A.d([],u.V)
for(p=u.W.a(a.i(0,"entries")),o=p.length,n=0;n<p.length;p.length===o||(0,A.v)(p),++n){m=j.a(p[n])
q.push(new A.ce(A.w(m.i(0,"key")),A.c(m,"value"),A.w(m.i(0,"unit"))))}l=A.j_(t,s,q,r)
j=A.d([],u.as)
for(t=l.b,s=t.length,r=u.N,n=0;n<t.length;t.length===s||(0,A.v)(t),++n){k=t[n]
j.push(A.m(["key",k.a,"unit",k.b,"reason",k.c],r,r))}return A.m(["per_ml",l.a,"skipped",j],r,u.X)},
$S:0}
A.e9.prototype={
$1(a){u.f.a(a)
return A.ag(A.j9(new A.cX(A.C(a,"high_risk_surgery"),A.C(a,"ischemic_heart_disease"),A.C(a,"heart_failure"),A.C(a,"cerebrovascular_disease"),A.C(a,"insulin_therapy"),A.h(a,"creatinine"),A.db(a.i(0,"creatinine_above_2")))))},
$S:0}
A.eb.prototype={
$1(a){var t,s,r,q,p
u.f.a(a)
t=A.d([],u.u)
for(s=u.W.a(a.i(0,"can_do")),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)t.push(A.eS(s[q]))
p=A.iF(t)
return A.m(["dasi",p.a,"vo2peak",p.b,"mets",p.c,"at_or_below_34",p.d],u.N,u.X)},
$S:0}
A.ec.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.C(a,"female")
s=A.C(a,"non_smoker")
r=A.C(a,"history")
q=A.C(a,"postoperative_opioids")
return A.ag(A.iz(A.h(a,"age"),t,r,s,q))},
$S:0}
A.ed.prototype={
$1(a){var t,s,r,q,p,o,n,m="ebv_ml_per_kg"
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.c(a,m)
r=A.c(a,"initial_hct")
q=A.c(a,"lowest_hct")
if(!(t>0))A.p(B.u)
A.b("weight",t,0,400)
A.b(m,s,40,120)
if(!(q>0)||!(q<r)||!(r<100))A.p(B.aH)
p=t*s
o=(r+q)/2
n=p*(r-q)/o
A.a(t,4)
A.a(s,4)
A.a(p,0)
A.a(r,4)
A.a(q,4)
A.a(o,1)
A.a(p,0)
A.a(r,4)
A.a(q,4)
A.a(o,1)
A.a(n,0)
return A.m(["ebv_ml",p,"average_hct",o,"mabl_ml",n],u.N,u.X)},
$S:0}
A.ee.prototype={
$1(a){var t,s,r,q,p,o,n,m="ml_per_kg"
u.f.a(a)
t=J.a2(a.i(0,"sex"),"female")?B.l:B.j
s=A.c(a,"height_cm")
if(a.i(0,m)==null)r=B.cq
else{r=A.d([],u.n)
for(q=u.W.a(a.i(0,m)),p=q.length,o=0;o<q.length;q.length===p||(0,A.v)(q),++o)r.push(A.aB(q[o]))}n=A.jq(s,r,t)
t=A.d([],u.n)
for(s=n.b,s=new A.aN(s,A.t(s).h("aN<1,2>")).gt(0);s.n();)t.push(s.d.b)
s=A.d([],u.u)
for(r=n.c,r=new A.aN(r,A.t(r).h("aN<1,2>")).gt(0);r.n();)s.push(r.d.b)
r=A.d([],u.s)
for(q=n.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.v)(q),++o)r.push(q[o].b)
return A.m(["pbw_kg",n.a,"volumes_ml",t,"within_cq19_range",s,"warnings",r],u.N,u.X)},
$S:0}
A.ef.prototype={
$1(a){var t,s,r,q,p,o,n,m,l
u.f.a(a)
t=A.O(B.cB,A.w(a.i(0,"group")),u.E)
s=A.O(B.cQ,A.w(a.i(0,"route")),u.w)
r=A.j0(A.c(a,"concentration_percent"),t,s,A.h(a,"weight_kg"),A.C(a,"with_epinephrine"))
s=A.d([],u.bM)
for(t=r.a,q=t.length,p=u.N,o=u.X,n=0;n<t.length;t.length===q||(0,A.v)(t),++n){m=t[n]
s.push(A.m(["kind",m.a.b,"max_mg",m.b,"volume_ml",m.c,"epinephrine_mg",m.d],p,o))}t=A.d([],u.s)
for(q=r.b,l=q.length,n=0;n<q.length;q.length===l||(0,A.v)(q),++n)t.push(q[n].b)
return A.m(["limits",s,"notes",t],p,o)},
$S:0}
A.eg.prototype={
$1(a){var t,s,r,q,p
u.f.a(a)
t=A.c(a,"pao2")
s=A.c(a,"fio2")
r=A.c(a,"peep")
q=A.C(a,"invasive")
p=A.j4(A.db(a.i(0,"above_1000m")),A.h(a,"barometric_pressure"),s,q,t,r)
r=p.d
t=r==null?null:r.b
s=p.e
s=s==null?null:s.b
return A.m(["pf",p.b,"corrected_pf",p.c,"severity",t,"not_graded",s,"altitude_correction_missing",p.a],u.N,u.X)},
$S:0}
A.eh.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="plateau_pressure"
u.f.a(a)
t=A.c(a,j)
s=A.c(a,"peep")
r=A.c(a,"tidal_volume_ml")
q=A.h(a,"pbw_kg")
p=A.C(a,"spontaneous_effort")
A.b(j,t,0,80)
A.b("peep",s,0,40)
A.b("tidal_volume",r,1,3000)
o=q==null
if(!o)A.b("pbw",q,10,150)
if(t<s)A.p(B.aA)
n=t-s
if(n===0)A.p(B.aS)
m=r/n
l=o?null:r/q
o=A.d([],u.r)
if(p)o.push(B.bA)
p=u.s
s=A.d(["\u0394P = "+A.a(t,4)+" \u2212 "+A.a(s,4)+" = "+A.a(n,1)+" cmH2O","Crs = "+A.a(r,4)+" \xf7 "+A.a(n,1)+" = "+A.a(m,1)+" mL/cmH2O"],p)
if(l!=null){t=A.a(r,4)
q.toString
s.push("VT = "+t+" \xf7 "+A.a(q,1)+" = "+A.a(l,1)+" mL/kg PBW")}t=A.d([],p)
for(s=o.length,k=0;k<o.length;o.length===s||(0,A.v)(o),++k)t.push(o[k].b)
return A.m(["driving_pressure",n,"compliance",m,"vt_per_kg_pbw",l,"at_or_below_15",n<=15,"warnings",t],u.N,u.X)},
$S:0}
A.ei.prototype={
$1(a){var t,s,r,q,p,o,n,m="respiratory_rate"
u.f.a(a)
t=A.c(a,"spo2")
s=A.c(a,"fio2")
r=A.c(a,m)
q=A.bV(a.i(0,"hours"))
q=q==null?null:B.d.N(q)
if(!(t>0)||t>100)A.p(B.aV)
A.b("fio2",s,0.21,1)
if(!(r>0))A.p(B.aU)
A.b(m,r,0,80)
p=t/s/r
if(q!=null){o=B.cS.i(0,q)
if(o==null)A.p(B.b9)
if(p>=4.88)n=B.ea
else n=p<o?B.eb:B.ec}else n=null
A.a(t,4)
A.a(s,4)
A.a(r,4)
A.a(p,2)
return A.m(["rox",p,"comparison",n==null?null:n.b],u.N,u.X)},
$S:0}
A.ej.prototype={
$1(a){var t,s,r,q,p="respiratory_rate"
u.f.a(a)
t=A.c(a,p)
s=A.c(a,"tidal_volume_ml")
A.b(p,t,0,80)
if(!(s>0))A.p(B.aB)
A.b("tidal_volume",s,0,3000)
r=s/1000
q=t/r
A.a(t,4)
A.a(r,3)
A.a(q,0)
return A.m(["rsbi",q,"below_105",q<105],u.N,u.X)},
$S:0}
A.ek.prototype={
$1(a){var t,s,r,q,p,o,n="systolic",m="diastolic",l="heart_rate"
u.f.a(a)
t=A.c(a,n)
s=A.c(a,m)
r=A.h(a,l)
A.b(n,t,1,300)
A.b(m,s,0,250)
q=r==null
if(!q)A.b(l,r,0,300)
if(t<s)A.p(B.bi)
p=(t+2*s)/3
o=q?null:r/t
s=A.d(["MAP = ("+A.a(t,4)+" + 2 \xd7 "+A.a(s,4)+") \xf7 3 = "+A.a(p,1)],u.s)
if(o!=null){r.toString
s.push("SI = "+A.a(r,4)+" \xf7 "+A.a(t,4)+" = "+A.a(o,2))}return A.m(["map",p,"shock_index",o,"map_at_least_65",p>=65],u.N,u.X)},
$S:0}
A.em.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.f.a(a)
t=A.h(a,"heart_rate")
s=A.h(a,"stroke_volume_ml")
r=A.h(a,"cardiac_output")
q=A.h(a,"bsa")
p=A.h(a,"map")
o=A.h(a,"cvp")
n=A.h(a,"mpap")
m=A.h(a,"pawp")
l=A.h(a,"hb")
k=A.h(a,"sao2")
j=A.h(a,"pao2")
i=A.h(a,"svo2")
h=A.h(a,"pvo2")
g=A.h(a,"hufner")
if(g==null)g=1.34
f=A.h(a,"dissolved")
return A.iT(new A.cG(t,s,r,q,p,o,n,m,l,k,j,i,h,g,f==null?0.003:f))},
$S:15}
A.en.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h="serum_creatinine",g="urine_creatinine",f="serum_sodium",e="urine_sodium",d="urine_urea",c=null
u.f.a(a)
t=A.c(a,h)
s=A.c(a,g)
r=A.h(a,f)
q=A.h(a,e)
p=A.h(a,"bun")
o=A.h(a,d)
n=A.C(a,"diuretic")
if(!(t>0))A.p(B.b7)
if(!(s>0))A.p(B.aO)
A.b(h,t,0,30)
A.b(g,s,0,1000)
m=u.s
l=A.d([],m)
if(r!=null&&q!=null){A.b(f,r,90,200)
A.b(e,q,0,400)
k=q*t/(r*s)*100
B.a.l(l,"FENa = ("+A.a(q,4)+" \xd7 "+A.a(t,4)+") \xf7 ("+A.a(r,4)+" \xd7 "+A.a(s,4)+") \xd7 100 = "+A.a(k,2)+"%")}else k=c
if(p!=null&&o!=null){if(!(p>0))A.p(B.bk)
A.b(d,o,0,3000)
j=o*t/(p*s)*100
B.a.l(l,"FEUN = ("+A.a(o,4)+" \xd7 "+A.a(t,4)+") \xf7 ("+A.a(p,4)+" \xd7 "+A.a(s,4)+") \xd7 100 = "+A.a(j,1)+"%")}else j=c
t=k==null
if(t&&j==null)A.p(B.bg)
s=A.d([],u.r)
if(n&&!t)s.push(B.bn)
r=t?c:k<1
t=t?c:k>3
q=j==null?c:j<35
m=A.d([],m)
for(p=s.length,i=0;i<s.length;s.length===p||(0,A.v)(s),++i)m.push(s[i].b)
return A.m(["fena",k,"feun",j,"fena_below_1",r,"fena_above_3",t,"feun_below_35",q,"warnings",m],u.N,u.X)},
$S:0}
A.eo.prototype={
$1(a){var t,s
u.f.a(a)
t=A.O(B.cK,A.w(a.i(0,"disorder")),u.an)
s=A.j5(A.c(a,"bicarbonate"),t,A.c(a,"paco2"))
return A.m(["predicted_low",s.a,"predicted_high",s.b,"predicted_variable",s.c,"comparison",s.d.b,"difference",s.e,"adrogue_2009_value",s.f],u.N,u.X)},
$S:0}
A.ep.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.c(a,"urine_ml")
s=A.c(a,"weight_kg")
r=A.c(a,"hours")
A.b("urine",t,0,5e4)
if(!(s>0))A.p(B.u)
if(!(r>0))A.p(B.az)
A.b("weight",s,0,400)
A.b("hours",r,0,720)
q=t/s/r
A.a(t,4)
A.a(s,4)
A.a(r,4)
A.a(q,2)
return A.m(["ml_per_kg_per_h",q,"below_0_5",q<0.5,"below_0_3",q<0.3],u.N,u.X)},
$S:0}
A.eq.prototype={
$1(a){var t,s,r,q,p,o,n
u.f.a(a)
t=u.n
s=A.d([],t)
for(r=u.W,q=r.a(a.i(0,"intakes_ml")),p=q.length,o=0;o<q.length;q.length===p||(0,A.v)(q),++o)s.push(A.aB(q[o]))
t=A.d([],t)
for(r=r.a(a.i(0,"outputs_ml")),q=r.length,o=0;o<r.length;r.length===q||(0,A.v)(r),++o)t.push(A.aB(r[o]))
n=A.iJ(A.h(a,"insensible_ml"),s,A.h(a,"metabolic_water_ml"),t)
return A.m(["intake",n.a,"output",n.b,"balance",n.c,"insensible_included",n.d,"metabolic_included",n.e],u.N,u.X)},
$S:0}
A.er.prototype={
$1(a){var t,s,r,q,p,o,n="safety_factor"
u.f.a(a)
t=A.c(a,"internal_volume_l")
s=A.c(a,"pressure_mpa")
r=A.c(a,"flow_l_per_min")
q=A.c(a,n)
if(!(t>0))A.p(B.aL)
if(!(r>0))A.p(B.aJ)
A.b("internal_volume",t,0,100)
A.b("pressure",s,0,25)
A.b("flow",r,0,60)
A.b(n,q,0,1)
p=t*s*10
o=p*q/r
A.a(t,4)
A.a(s,4)
A.a(p,0)
A.a(p,0)
A.a(q,4)
A.a(r,4)
A.a(o,1)
return A.m(["remaining_l",p,"minutes",o],u.N,u.X)},
$S:0}
A.es.prototype={
$1(a){var t,s,r,q,p,o,n,m="rate_ml_h",l="drops_per_min"
u.f.a(a)
t=A.O(B.cv,A.w(a.i(0,"factor")),u.a)
if(a.v(m)){s=A.c(a,m)
A.b("rate",s,0,1e4)
r=t===B.z?20:60
q=s*r/60
p=q>0?60/q:null
A.a(s,4)
A.a(r,4)
A.a(q,1)
o=new A.bn(q,s,p)}else if(a.v(l)){s=A.c(a,l)
A.b(l,s,0,1000)
r=t===B.z?20:60
n=s*60/r
p=s>0?60/s:null
A.a(s,4)
A.a(r,4)
A.a(n,1)
o=new A.bn(s,n,p)}else{s=A.c(a,"volume_ml")
p=A.c(a,"minutes")
if(!(s>0))A.p(B.a1)
if(!(p>0))A.p(B.bf)
A.b("volume",s,0,1e4)
A.b("minutes",p,0,1e5)
r=t===B.z?20:60
q=s*r/p
A.a(s,4)
A.a(r,4)
A.a(p,4)
A.a(q,1)
o=new A.bn(q,s/p*60,60/q)}return A.m(["drops_per_min",o.a,"rate_ml_h",o.b,"seconds_per_drop",o.c],u.N,u.X)},
$S:0}
A.et.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=B.d.E(A.c(a,"thrombocytopenia"))
s=B.d.E(A.c(a,"timing"))
r=B.d.E(A.c(a,"thrombosis"))
q=A.iK(B.d.E(A.c(a,"other_causes")),t,r,s)
return A.m(["total",q.a,"category",q.c],u.N,u.X)},
$S:0}
A.eu.prototype={
$1(a){var t,s,r,q,p="fall_percent"
u.f.a(a)
t=A.c(a,p)
s=A.c(a,"nadir")
A.b(p,t,0,100)
A.b("nadir",s,0,2000)
r=A.d([],u.t)
if(t>50&&s>=20)r.push(2)
if(!(t>=30&&t<=50))q=s>=10&&s<20
else q=!0
if(q)r.push(1)
if(t<30||s<10)r.push(0)
return A.m(["candidates",r],u.N,u.X)},
$S:0}
A.ev.prototype={
$1(a){u.f.a(a)
return A.fL(A.iZ(new A.cM(A.O(B.cx,A.w(a.i(0,"type")),u.k),A.h(a,"platelets_e4"),A.C(a,"platelet_fall_30"),A.h(a,"fdp"),A.h(a,"d_dimer_ratio"),A.h(a,"fibrinogen"),A.h(a,"pt_ratio"),A.h(a,"antithrombin"),A.h(a,"marker_ratio"),A.C(a,"liver_failure"))))},
$S:0}
A.ex.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.C(a,"underlying_disorder")
s=A.c(a,"platelets_e9")
r=A.O(B.cP,A.w(a.i(0,"fibrin_marker")),u.x)
q=A.c(a,"pt_prolongation_sec")
return A.fL(A.iW(r,A.c(a,"fibrinogen"),s,q,t))},
$S:0}
A.ey.prototype={
$1(a){var t,s,r,q,p,o,n,m
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.h(a,"hb_grams")
r=A.h(a,"product_volume_ml")
q=A.h(a,"product_hb")
p=A.h(a,"units")
o=A.h(a,"current_hb")
n=A.j6(A.h(a,"age"),o,s,q,r,p,t)
t=A.d([],u.s)
for(s=n.e,r=s.length,m=0;m<s.length;s.length===r||(0,A.v)(s),++m)t.push(s[m].b)
return A.m(["blood_volume_dl",n.a,"hb_grams",n.b,"rise",n.c,"predicted_hb",n.d,"warnings",t],u.N,u.X)},
$S:0}
A.ez.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.f.a(a)
t=A.c(a,"pre_per_ul")
s=A.c(a,"post_per_ul")
r=A.c(a,"bsa")
q=A.h(a,"transfused_e11")
p=A.h(a,"units")
o=A.O(B.co,A.w(a.i(0,"sampling")),u.q)
A.b("pre_platelets",t,0,2e6)
A.b("post_platelets",s,0,2e6)
if(!(r>0))A.p(B.aI)
A.b("bsa",r,0,4)
n=q==null
m=p==null
if(n===m)A.p(B.ay)
if(n){p.toString
q=p*0.2}if(!(q>0))A.p(B.b3)
l=s-t
k=l*r/q
j=o===B.af
o=j?l<1e4:null
n=j?k<5000:null
i=A.d([],u.r)
if(!j)i.push(B.bq)
if(l<0)i.push(B.br)
h=u.s
g=A.d([],h)
if(!m)g.push("\u8f38\u8840\u8840\u5c0f\u677f\u7dcf\u6570 = "+A.a(p,4)+" \u5358\u4f4d \xd7 0.2 = "+A.a(q,2)+" \xd710\xb9\xb9")
g.push("\u5897\u52a0\u6570 = "+A.a(s,4)+" \u2212 "+A.a(t,4)+" = "+A.a(l,4)+" /\u03bcL")
g.push("\u88dc\u6b63\u8840\u5c0f\u677f\u5897\u52a0\u6570 = "+A.a(l,4)+" \xd7 "+A.a(r,3)+" \xf7 "+A.a(q,2)+" = "+A.a(k,0)+" /\u03bcL")
t=A.d([],h)
for(s=i.length,f=0;f<i.length;i.length===s||(0,A.v)(i),++f)t.push(i[f].b)
return A.m(["increment",l,"transfused_e11",q,"corrected_increment",k,"increment_below_10000",o,"corrected_below_5000",n,"warnings",t],u.N,u.X)},
$S:0}
A.aG.prototype={
m(){return"CreatinineMethod."+this.b}}
A.ai.prototype={
m(){return"BerlinSeverity."+this.b}}
A.aD.prototype={
m(){return"BerlinNotGraded."+this.b}}
A.bB.prototype={}
A.dx.prototype={
$2(a,b){return new A.bB(this.d,this.b,this.a.a,a,b)},
$1(a){return this.$2(a,null)},
$S:16}
A.bb.prototype={
m(){return"RoxComparison."+this.b}}
A.G.prototype={
m(){return"CalcWarning."+this.b}}
A.i.prototype={
k(a){var t=this.b
t=t.length===0?"":": "+t
return"CalcInputError("+this.a+t+")"}}
A.z.prototype={
k(a){return"CalcValue("+A.r(this.a)+" "+this.b+")"}}
A.a0.prototype={}
A.cZ.prototype={}
A.eE.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.dz.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.ap.prototype={
m(){return"AdmissionType."+this.b}}
A.cy.prototype={}
A.cx.prototype={}
A.dg.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.du.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.dt.prototype={
$2(a,b){return B.y.a5(A.jb(A.w(a),u.f.a(B.y.aA(A.w(b),null))),null)},
$S:17};(function aliases(){var t=J.av.prototype
t.ak=t.k})();(function installTearOffs(){var t=hunkHelpers._instance_1u,s=hunkHelpers._instance_1i,r=hunkHelpers._static_1
t(A.Z.prototype,"gaz","v",3)
s(A.ay.prototype,"gaw","A",3)
r(A,"iC","hZ",18)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.n,null)
r(A.n,[A.eI,J.c7,A.bE,J.aC,A.F,A.cY,A.q,A.by,A.bL,A.ae,A.ba,A.b2,A.ar,A.aS,A.ak,A.d2,A.cU,A.L,A.cP,A.bw,A.bx,A.aO,A.ca,A.cs,A.d4,A.a8,A.co,A.ct,A.cr,A.aT,A.bT,A.c0,A.c3,A.d6,A.cm,A.bH,A.cD,A.M,A.bz,A.bc,A.cz,A.cG,A.d_,A.c1,A.bl,A.ce,A.bG,A.cO,A.bn,A.cE,A.cM,A.c4,A.cF,A.az,A.cd,A.cN,A.cC,A.cX,A.cB,A.d1,A.bB,A.i,A.z,A.a0,A.cZ,A.cy,A.cx])
r(J.c7,[J.c9,J.br,J.b9,J.bt,J.b8])
r(J.b9,[J.av,J.l])
r(J.av,[J.cW,J.ax,J.bu])
s(J.c8,A.bE)
s(J.cH,J.l)
r(J.bt,[J.b6,J.bs])
r(A.F,[A.cf,A.bI,A.cb,A.cl,A.ci,A.cn,A.bv,A.bY,A.ah,A.bK,A.c2])
r(A.q,[A.bo,A.ao])
r(A.bo,[A.aP,A.W,A.B,A.aN])
r(A.ae,[A.be,A.bf])
s(A.e,A.be)
s(A.H,A.bf)
s(A.bg,A.ba)
s(A.bJ,A.bg)
s(A.bm,A.bJ)
r(A.ar,[A.c_,A.ck,A.dw,A.dv,A.dy,A.dq,A.dr,A.ds,A.eD,A.dC,A.dD,A.dE,A.dP,A.e_,A.ea,A.el,A.ew,A.eA,A.eB,A.eC,A.dF,A.dG,A.dH,A.dI,A.dJ,A.dK,A.dL,A.dM,A.dN,A.dO,A.dQ,A.dR,A.dS,A.dT,A.dU,A.dV,A.dW,A.dX,A.dY,A.dZ,A.e0,A.e1,A.e2,A.e3,A.e4,A.e5,A.e6,A.e7,A.e8,A.e9,A.eb,A.ec,A.ed,A.ee,A.ef,A.eg,A.eh,A.ei,A.ej,A.ek,A.em,A.en,A.eo,A.ep,A.eq,A.er,A.es,A.et,A.eu,A.ev,A.ex,A.ey,A.ez,A.dx])
r(A.c_,[A.cA,A.cI,A.cQ,A.cT,A.d7,A.dm,A.eF,A.dk,A.dl,A.dp,A.dn,A.df,A.di,A.dj,A.dA,A.dh,A.de,A.dB,A.eE,A.dz,A.dg,A.du,A.dt])
r(A.b2,[A.aE,A.bp])
r(A.ak,[A.b3,A.bN])
r(A.b3,[A.b4,A.bq])
s(A.bA,A.bI)
r(A.ck,[A.cj,A.b0])
r(A.L,[A.Z,A.cp])
s(A.aL,A.Z)
s(A.bO,A.cn)
s(A.ay,A.bN)
s(A.cq,A.aP)
s(A.cc,A.bv)
s(A.cJ,A.c0)
r(A.c3,[A.cL,A.cK])
s(A.d5,A.d6)
r(A.ah,[A.bD,A.c6])
r(A.cm,[A.a7,A.b1,A.aq,A.S,A.bM,A.aH,A.aI,A.ad,A.aF,A.aR,A.au,A.as,A.aQ,A.a_,A.V,A.aM,A.ab,A.bd,A.aa,A.T,A.at,A.bF,A.aj,A.aK,A.a4,A.aJ,A.aG,A.ai,A.aD,A.bb,A.G,A.ap])
t(A.bg,A.bT)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{N:"int",o:"double",aZ:"num",k:"String",E:"bool",bz:"Null",a6:"List",n:"Object",y:"Map",b7:"JSObject"},mangledNames:{},types:["y<k,n?>(y<k,n?>)","N(N,N)","E(az)","E(n?)","~(n?,n?)","o(o,o,E,o)","o(o,o)","~(@,@)","~(k,o?)","~(k,o)","~(k,N)","E(E)","M<k,N>(k,n?)","E(k)","M<k,o>(k,n?)","y<k,o>(y<k,n?>)","bB(ai?[aD?])","k(k,k)","@(@)"],arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.e&&a.b(c.a)&&b.b(c.b),"4;":a=>b=>b instanceof A.H&&A.j3(a,b.a)}}
A.hQ(v.typeUniverse,JSON.parse('{"cW":"av","ax":"av","bu":"av","c9":{"E":[],"am":[]},"br":{"am":[]},"b9":{"b7":[]},"av":{"b7":[]},"l":{"a6":["1"],"b7":[],"q":["1"]},"c8":{"bE":[]},"cH":{"l":["1"],"a6":["1"],"b7":[],"q":["1"]},"aC":{"R":["1"]},"bt":{"o":[],"aZ":[]},"b6":{"o":[],"N":[],"aZ":[],"am":[]},"bs":{"o":[],"aZ":[],"am":[]},"b8":{"k":[],"cV":[],"am":[]},"cf":{"F":[]},"bo":{"q":["1"]},"aP":{"q":["1"]},"by":{"R":["1"]},"ao":{"q":["1"],"q.E":"1"},"bL":{"R":["1"]},"e":{"be":[],"ae":[]},"H":{"bf":[],"ae":[]},"bm":{"bJ":["1","2"],"bg":["1","2"],"ba":["1","2"],"bT":["1","2"],"y":["1","2"]},"b2":{"y":["1","2"]},"aE":{"b2":["1","2"],"y":["1","2"]},"aS":{"R":["1"]},"bp":{"b2":["1","2"],"y":["1","2"]},"b3":{"ak":["1"],"aw":["1"],"q":["1"]},"b4":{"b3":["1"],"ak":["1"],"aw":["1"],"q":["1"]},"bq":{"b3":["1"],"ak":["1"],"aw":["1"],"q":["1"]},"bA":{"F":[]},"cb":{"F":[]},"cl":{"F":[]},"ar":{"b5":[]},"c_":{"b5":[]},"ck":{"b5":[]},"cj":{"b5":[]},"b0":{"b5":[]},"ci":{"F":[]},"Z":{"L":["1","2"],"eK":["1","2"],"y":["1","2"],"L.K":"1","L.V":"2"},"W":{"q":["1"],"q.E":"1"},"bw":{"R":["1"]},"B":{"q":["1"],"q.E":"1"},"bx":{"R":["1"]},"aN":{"q":["M<1,2>"],"q.E":"M<1,2>"},"aO":{"R":["M<1,2>"]},"aL":{"Z":["1","2"],"L":["1","2"],"eK":["1","2"],"y":["1","2"],"L.K":"1","L.V":"2"},"be":{"ae":[]},"bf":{"ae":[]},"ca":{"hx":[],"cV":[]},"cs":{"eN":[]},"d4":{"R":["eN"]},"cn":{"F":[]},"bO":{"F":[]},"ay":{"ak":["1"],"fn":["1"],"aw":["1"],"q":["1"]},"aT":{"R":["1"]},"L":{"y":["1","2"]},"ba":{"y":["1","2"]},"bJ":{"bg":["1","2"],"ba":["1","2"],"bT":["1","2"],"y":["1","2"]},"ak":{"aw":["1"],"q":["1"]},"bN":{"ak":["1"],"aw":["1"],"q":["1"]},"cp":{"L":["k","@"],"y":["k","@"],"L.K":"k","L.V":"@"},"cq":{"aP":["k"],"q":["k"],"q.E":"k","aP.E":"k"},"bv":{"F":[]},"cc":{"F":[]},"o":{"aZ":[]},"N":{"aZ":[]},"a6":{"q":["1"]},"aw":{"q":["1"]},"k":{"cV":[]},"cm":{"u":[]},"bY":{"F":[]},"bI":{"F":[]},"ah":{"F":[]},"bD":{"F":[]},"c6":{"F":[]},"bK":{"F":[]},"c2":{"F":[]},"bH":{"F":[]},"bc":{"hz":[]},"a7":{"u":[]},"b1":{"u":[]},"aq":{"u":[]},"S":{"u":[]},"aH":{"u":[]},"bM":{"u":[]},"aI":{"u":[]},"ad":{"u":[]},"aF":{"u":[]},"aR":{"u":[]},"au":{"u":[]},"as":{"u":[]},"aQ":{"u":[]},"a_":{"u":[]},"V":{"u":[]},"ab":{"u":[]},"aM":{"u":[]},"bd":{"u":[]},"aa":{"u":[]},"T":{"u":[]},"at":{"u":[]},"aK":{"u":[]},"a4":{"u":[]},"aJ":{"u":[]},"bF":{"u":[]},"aj":{"u":[]},"aG":{"u":[]},"ai":{"u":[]},"aD":{"u":[]},"bb":{"u":[]},"G":{"u":[]},"ap":{"u":[]}}'))
A.hP(v.typeUniverse,JSON.parse('{"bo":1,"bN":1,"c0":2,"c3":2}'))
var u=(function rtii(){var t=A.x
return{v:t("ap"),A:t("aq"),Y:t("a4"),M:t("b4<k>"),J:t("aF"),_:t("aG"),R:t("S"),a:t("aH"),C:t("F"),x:t("as"),Z:t("b5"),c:t("aI"),e:t("aJ"),o:t("aa"),d:t("aK"),h:t("q<@>"),r:t("l<G>"),D:t("l<cd>"),U:t("l<ab>"),V:t("l<ce>"),a2:t("l<a6<o>>"),as:t("l<y<k,k>>"),aj:t("l<y<k,o>>"),bM:t("l<y<k,n?>>"),G:t("l<n>"),a3:t("l<+(c1,o)>"),p:t("l<+(o,N)>"),I:t("l<bG>"),s:t("l<k>"),u:t("l<E>"),n:t("l<o>"),b:t("l<@>"),t:t("l<N>"),T:t("br"),m:t("b7"),L:t("bu"),aM:t("T"),ad:t("at"),k:t("au"),E:t("a_"),w:t("V"),j:t("a6<@>"),W:t("a6<n?>"),d8:t("M<k,o>"),O:t("M<k,N>"),bC:t("y<@,@>"),f:t("y<k,n?>"),P:t("bz"),K:t("n"),q:t("aQ"),Q:t("aR"),an:t("a7"),cY:t("jv"),F:t("+()"),a0:t("eN"),N:t("k"),am:t("ad"),bW:t("am"),cr:t("ax"),aR:t("ao<E>"),l:t("az"),y:t("E"),B:t("E(E)"),i:t("o"),S:t("N"),bc:t("fh<bz>?"),z:t("b7?"),aL:t("a6<@>?"),bQ:t("a6<n?>?"),X:t("n?"),aD:t("k?"),g:t("cr?"),cG:t("E?"),dd:t("o?"),ao:t("N?"),ae:t("aZ?"),H:t("aZ"),cQ:t("~(k,@)")}})();(function constants(){var t=hunkHelpers.makeConstList
B.bW=J.c7.prototype
B.a=J.l.prototype
B.o=J.b6.prototype
B.d=J.bt.prototype
B.m=J.b8.prototype
B.c2=J.b9.prototype
B.S=new A.ap(0,"nonoperative")
B.T=new A.ap(2,"electivePostop")
B.U=new A.aq(0,"mg")
B.V=new A.aq(2,"unit")
B.ap=new A.aD(0,"peepBelow5")
B.aq=new A.aD(1,"nonInvasiveModerateOrSevere")
B.ar=new A.ai(0,"mild")
B.as=new A.ai(1,"moderate")
B.at=new A.ai(2,"severe")
B.au=new A.ai(3,"none")
B.W=new A.a4(0,"duBois")
B.X=new A.a4(1,"fujimotoGeneral")
B.Y=new A.a4(2,"fujimotoToddler")
B.Z=new A.a4(3,"fujimotoInfant")
B.ax=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.y=new A.cJ()
B.t=new A.cY()
B.ay=new A.i("choose_one:platelet_count","")
B.az=new A.i("not_positive:hours","")
B.aA=new A.i("plateau_below_peep","")
B.aB=new A.i("not_positive:tidal_volume","")
B.aC=new A.i("cannot_compare:weight","")
B.aD=new A.i("missing:sofa_baseline","")
B.aE=new A.i("missing:product_volume_or_hb","")
B.aF=new A.i("direction_mismatch:paco2","")
B.aG=new A.i("label_no_vasoconstrictor:ivra","")
B.aH=new A.i("invalid:hct_order","")
B.aI=new A.i("not_positive:bsa","")
B.aJ=new A.i("not_positive:flow","")
B.aK=new A.i("unsupported_unit:basis","")
B.aL=new A.i("not_positive:internal_volume","")
B.aM=new A.i("sign_mismatch:sodium_plan","")
B.aN=new A.i("zero:amino_acid","")
B.aO=new A.i("not_positive:urine_creatinine","")
B.aP=new A.i("no_limit_stated","")
B.a_=new A.i("missing:weight","")
B.aQ=new A.i("no_product:concentration","")
B.aR=new A.i("missing:creatinine","")
B.aS=new A.i("zero:driving_pressure","")
B.aT=new A.i("not_applicable:bps_non_ventilated","")
B.aU=new A.i("not_positive:respiratory_rate","")
B.aV=new A.i("out_of_range:spo2","")
B.aW=new A.i("not_positive:ml_per_kg","")
B.aX=new A.i("not_positive:pbw","")
B.aY=new A.i("no_indication:route","")
B.aZ=new A.i("items_mismatch","")
B.b_=new A.i("not_positive:standard_volume","")
B.b0=new A.i("not_positive:concentration","")
B.b1=new A.i("choose_one:hb_amount","")
B.b2=new A.i("not_applicable:no_underlying_disorder","")
B.b3=new A.i("not_positive:transfused_platelets","")
B.b4=new A.i("missing:pao2","")
B.b5=new A.i("missing:standard_volume","")
B.b6=new A.i("cannot_compare:dimension","")
B.b7=new A.i("not_positive:serum_creatinine","")
B.a0=new A.i("not_finite","")
B.u=new A.i("not_positive:weight","")
B.b8=new A.i("not_positive:bicarbonate","")
B.a1=new A.i("not_positive:volume","")
B.b9=new A.i("unsupported:rox_timepoint","")
B.ba=new A.i("missing:aado2","")
B.bb=new A.i("unit_mismatch:dose_vs_amount","")
B.bc=new A.i("not_assessable:icdsc_consciousness","")
B.be=new A.i("not_positive:basis","")
B.bd=new A.i("not_positive:paco2","")
B.bf=new A.i("not_positive:minutes","")
B.bg=new A.i("missing:sodium_or_urea","")
B.bh=new A.i("missing:ph_or_bicarbonate","")
B.bi=new A.i("systolic_below_diastolic","")
B.bj=new A.i("not_positive:drug_amount","")
B.bk=new A.i("not_positive:bun","")
B.bl=new A.G(0,"heightBelowFormulaBase")
B.bn=new A.G(10,"diureticRaisesFena")
B.bo=new A.G(12,"dicDDimerProvisional")
B.bp=new A.G(13,"bloodVolumeCoefficientAdult")
B.bq=new A.G(14,"plateletSamplingNotNextDay")
B.br=new A.G(15,"plateletPostBelowPre")
B.bs=new A.G(16,"apfelSourceIsAdult")
B.bt=new A.G(17,"sofaRespiratoryCappedWithoutSupport")
B.bu=new A.G(2,"sodiumRiseAbove24hLimit")
B.bv=new A.G(3,"sodiumRiseAbove48hLimit")
B.bw=new A.G(4,"sodiumFallAboveLimit")
B.bx=new A.G(5,"bsaOutsideFormulaAge")
B.by=new A.G(6,"maintenanceAboveNicePerKg")
B.bz=new A.G(7,"maintenanceAbove2500mL")
B.bA=new A.G(9,"spontaneousEffortApparentValue")
B.a2=new A.b1(0,"below")
B.bB=new A.b1(1,"within")
B.a3=new A.b1(2,"above")
B.G=new A.aF(0,"payne")
B.H=new A.aG(0,"enzymatic")
B.z=new A.aH(0,"twenty")
B.I=new A.aI(0,"katz")
B.J=new A.aJ(0,"original1919")
B.a4=new A.aJ(1,"rozaShizgal1984")
B.a5=new A.aa(0,"a")
B.a6=new A.aa(1,"b")
B.a7=new A.aa(3,"d")
B.A=new A.aK(0,"ardsnet")
B.bX=new A.aj(0,"underweight")
B.bY=new A.aj(1,"normal")
B.bZ=new A.aj(2,"obese1")
B.c_=new A.aj(3,"obese2")
B.c0=new A.aj(4,"obese3")
B.c1=new A.aj(5,"obese4")
B.a8=new A.at(0,"restlessness")
B.a9=new A.at(1,"incontinence")
B.aa=new A.at(2,"apallicOrAkineticMutism")
B.cd=new A.cK(null)
B.ce=new A.cL(null)
B.ab=new A.au(1,"hematopoieticDisorder")
B.ac=new A.au(2,"infection")
B.K=new A.a_(0,"lidocaine")
B.v=new A.a_(1,"lidocaineEpinephrine")
B.B=new A.a_(2,"bupivacaine")
B.L=new A.a_(3,"bupivacaineSpinal")
B.C=new A.a_(4,"levobupivacaine")
B.M=new A.a_(5,"ropivacaine")
B.N=new A.a_(6,"mepivacaine")
B.cg=new A.ab(0,"ivraOnlySomeProducts")
B.ch=new A.ab(1,"levobupivacaineBagNoNerveBlock")
B.ci=new A.ab(2,"levobupivacaineNoParacervical")
B.cj=new A.ab(3,"mgComputedFromVolume")
B.ck=new A.ab(4,"noMgCapStated")
B.cl=new A.ab(5,"bupivacaine0125Label10mL")
B.e=new A.V(0,"epidural")
B.c=new A.V(1,"nerveBlock")
B.f=new A.V(2,"intercostal")
B.k=new A.V(3,"infiltration")
B.O=new A.V(4,"spinal")
B.D=new A.V(5,"intravenousRegional")
B.q=new A.aM(0,"maxRecommended")
B.i=new A.aM(1,"singleDose")
B.cm=new A.aM(2,"perNerve")
B.ad=new A.aM(3,"totalMultipleBlocks")
B.cn=t(["facial","upper_limbs","ventilator_compliance"],u.s)
B.af=new A.aQ(0,"nextDay")
B.cW=new A.aQ(1,"other")
B.co=t([B.af,B.cW],A.x("l<aQ>"))
B.cp=t([655.0955,9.5634,1.8496,4.6756],u.n)
B.cq=t([6,8],u.n)
B.c3=new A.T(0,"zero")
B.c4=new A.T(1,"i1")
B.c5=new A.T(2,"i2")
B.c6=new A.T(3,"i3")
B.c7=new A.T(4,"ii10")
B.c8=new A.T(5,"ii20")
B.c9=new A.T(6,"ii30")
B.ca=new A.T(7,"iii100")
B.cb=new A.T(8,"iii200")
B.cc=new A.T(9,"iii300")
B.cr=t([B.c3,B.c4,B.c5,B.c6,B.c7,B.c8,B.c9,B.ca,B.cb,B.cc],A.x("l<T>"))
B.ae=t([2.75,1.75,2.75,5.5,8,2.7,3.5,8,4.5,5.25,6,7.5],u.n)
B.bm=new A.G(1,"sodiumNotAbove140")
B.cs=t([B.bm],u.r)
B.bS=new A.aI(1,"hillier")
B.ct=t([B.I,B.bS],A.x("l<aI>"))
B.bD=new A.aG(1,"jaffe")
B.cu=t([B.H,B.bD],A.x("l<aG>"))
B.bO=new A.aH(1,"sixty")
B.cv=t([B.z,B.bO],A.x("l<aH>"))
B.cw=t([B.J,B.a4],A.x("l<aJ>"))
B.cf=new A.au(0,"basic")
B.cx=t([B.cf,B.ab,B.ac],A.x("l<au>"))
B.cy=t(["kcal","glucose_g","amino_acid_g","lipid_g","na_meq","k_meq","cl_meq","ca_meq","mg_meq","p_mmol","water_ml"],u.s)
B.bV=new A.aK(1,"devine")
B.cz=t([B.A,B.bV],A.x("l<aK>"))
B.bC=new A.aF(1,"variant08")
B.cA=t([B.G,B.bC],A.x("l<aF>"))
B.cB=t([B.K,B.v,B.B,B.L,B.C,B.M,B.N],A.x("l<a_>"))
B.an=new A.ap(1,"emergencyPostop")
B.cC=t([B.S,B.an,B.T],A.x("l<ap>"))
B.ef=new A.ad(0,"youngMale")
B.eg=new A.ad(1,"youngFemale")
B.eh=new A.ad(2,"elderlyMale")
B.ei=new A.ad(3,"elderlyFemale")
B.ej=new A.ad(4,"child")
B.cD=t([B.ef,B.eg,B.eh,B.ei,B.ej],A.x("l<ad>"))
B.bT=new A.aa(2,"c")
B.bU=new A.aa(4,"e")
B.cE=t([B.a5,B.a6,B.bT,B.a7,B.bU],A.x("l<aa>"))
B.cF=t(["facial","body_movement","ventilator_or_vocalization","muscle_tension"],u.s)
B.cG=t(["inattention","disorientation","hallucination_delusion","psychomotor","speech_mood","sleep_wake","fluctuation"],u.s)
B.cH=t([B.a8,B.a9,B.aa],A.x("l<at>"))
B.cI=t([88.362,13.397,4.799,5.677],u.n)
B.av=new A.a4(4,"shintani")
B.aw=new A.a4(5,"mosteller")
B.cJ=t([B.W,B.X,B.Y,B.Z,B.av,B.aw],A.x("l<a4>"))
B.d_=new A.a7(0,"metabolicAcidosis")
B.d0=new A.a7(1,"metabolicAlkalosis")
B.ag=new A.a7(2,"acuteRespiratoryAcidosis")
B.P=new A.a7(3,"chronicRespiratoryAcidosis")
B.ah=new A.a7(4,"acuteRespiratoryAlkalosis")
B.Q=new A.a7(5,"chronicRespiratoryAlkalosis")
B.cK=t([B.d_,B.d0,B.ag,B.P,B.ah,B.Q],A.x("l<a7>"))
B.b=t([],u.r)
B.cL=t([],u.s)
B.cM=t([],u.b)
B.ao=new A.aq(1,"ug")
B.cN=t([B.U,B.ao,B.V],A.x("l<aq>"))
B.cO=t([66.473,13.7516,5.0033,6.755],u.n)
B.bP=new A.as(0,"none")
B.bQ=new A.as(1,"moderate")
B.bR=new A.as(2,"strong")
B.cP=t([B.bP,B.bQ,B.bR],A.x("l<as>"))
B.cQ=t([B.e,B.c,B.f,B.k,B.O,B.D],A.x("l<V>"))
B.cR=t([447.593,9.247,3.098,4.33],u.n)
B.bE=new A.S(0,"ugPerKgMin")
B.bF=new A.S(1,"ugPerKgH")
B.bG=new A.S(2,"mgPerKgH")
B.bH=new A.S(3,"mgPerH")
B.bI=new A.S(4,"ugPerH")
B.bJ=new A.S(5,"ugPerMin")
B.bK=new A.S(6,"mgPerMin")
B.bL=new A.S(7,"unitPerH")
B.bM=new A.S(8,"unitPerKgH")
B.bN=new A.S(9,"unitPerMin")
B.w=t([B.bE,B.bF,B.bG,B.bH,B.bI,B.bJ,B.bK,B.bL,B.bM,B.bN],A.x("l<S>"))
B.cS=new A.bp([2,2.85,6,3.47,12,3.85],A.x("bp<N,o>"))
B.cU={na:0,k:1,cl:2,ca:3,mg:4,p:5}
B.E=new A.aE(B.cU,[22.99,39.098,35.45,40.078,24.305,30.974],A.x("aE<k,o>"))
B.cX=new A.aR(0,"concentration")
B.cY=new A.aR(1,"rate")
B.cZ=new A.aR(2,"daily")
B.d1=new A.e(1.5,2)
B.d2=new A.e(10,1)
B.ai=new A.e(110,2)
B.d3=new A.e(111,3)
B.d4=new A.e(120,2)
B.d5=new A.e(12,0)
B.d6=new A.e(130,0)
B.d7=new A.e(130,3)
B.d8=new A.e(140,3)
B.d9=new A.e(150,1)
B.da=new A.e(155,2)
B.db=new A.e(15,1)
B.dc=new A.e(15,3)
B.dd=new A.e(160,3)
B.de=new A.e(160,4)
B.aj=new A.e(180,4)
B.df=new A.e(18,2)
B.dg=new A.e(1,2)
B.dh=new A.e(200,2)
B.ak=new A.e(20,2)
B.di=new A.e(22,0)
B.dj=new A.e(25,1)
B.dk=new A.e(2,3)
B.dl=new A.e(30,0)
B.dm=new A.e(30,3)
B.dn=new A.e(32,1)
B.dp=new A.e(32,2)
B.dq=new A.e(34,1)
B.dr=new A.e(350,3)
B.ds=new A.e(35,3)
B.dt=new A.e(36,0)
B.du=new A.e(39,3)
B.dv=new A.e(3,0)
B.dw=new A.e(3,1)
B.dx=new A.e(40,3)
B.dy=new A.e(40,4)
B.dz=new A.e(41,3)
B.dA=new A.e(41,4)
B.dB=new A.e(46,1)
B.dC=new A.e(500,4)
B.al=new A.e(50,2)
B.dD=new A.e(50,4)
B.dE=new A.e(52,4)
B.dF=new A.e(55,2)
B.dG=new A.e(60,4)
B.dH=new A.e(6,2)
B.dI=new A.e(6,3)
B.am=new A.e(70,0)
B.dJ=new A.e(7,4)
B.dK=new A.e(7.33,0)
B.n=new A.e(-1/0,4)
B.dL=new A.e(7.5,1)
B.dM=new A.e(3.5,0)
B.dN=new A.e(7.15,3)
B.dO=new A.e(2.5,2)
B.dP=new A.e(3.5,4)
B.dQ=new A.e(7.25,2)
B.dR=new A.e(0.6,0)
B.dS=new A.e(-1/0,0)
B.dT=new A.e(7.7,4)
B.dU=new A.e("kcal",1)
B.dV=new A.e("p_mmol",1)
B.dW=new A.e(-1/0,2)
B.dX=new A.e(38.5,1)
B.dY=new A.e(7.6,3)
B.dZ=new A.e("water_ml",1)
B.e_=new A.e(5.5,1)
B.p=new A.bM(0,"mass")
B.e0=new A.H([B.p,1,!0,60])
B.F=new A.bM(1,"unit")
B.e1=new A.H([B.F,1,!1,60])
B.e2=new A.H([B.p,1,!0,1])
B.e3=new A.H([B.F,1,!0,1])
B.e4=new A.H([B.p,1000,!0,1])
B.e5=new A.H([B.F,1,!1,1])
B.e6=new A.H([B.p,1,!1,1])
B.e7=new A.H([B.p,1000,!1,60])
B.e8=new A.H([B.p,1,!1,60])
B.e9=new A.H([B.p,1000,!1,1])
B.ea=new A.bb(0,"atOrAbove488")
B.eb=new A.bb(1,"belowLowerCutoff")
B.ec=new A.bb(2,"between")
B.x=new A.bq([B.e,B.c,B.k],A.x("bq<V>"))
B.cT={"NUR-06":0}
B.ed=new A.b4(B.cT,1,u.M)
B.cV={kcal:0,glucose_g:1,carbohydrate_g:2,amino_acid_g:3,protein_g:4,nitrogen_g:5,lipid_g:6,water_ml:7,na:8,k:9,cl:10,ca:11,mg:12,p:13}
B.ee=new A.b4(B.cV,14,u.M)
B.j=new A.bF(0,"male")
B.l=new A.bF(1,"female")
B.ek=A.js("n")
B.r=new A.bd(0,"mg")
B.R=new A.bd(1,"mgPerKg")
B.h=new A.bd(2,"ml")})();(function staticFields(){$.Y=A.d([],u.G)
$.fq=null
$.fd=null
$.fc=null
$.d8=A.d([],A.x("l<a6<n>?>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"ju","h4",()=>A.h_("_$dart_dartClosure"))
t($,"jt","f7",()=>A.h_("_$dart_dartClosure_dartJSInterop"))
t($,"jJ","hh",()=>A.d([new J.c8()],A.x("l<bE>")))
t($,"jw","h5",()=>A.an(A.d3({
toString:function(){return"$receiver$"}})))
t($,"jx","h6",()=>A.an(A.d3({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"jy","h7",()=>A.an(A.d3(null)))
t($,"jz","h8",()=>A.an(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"jC","hb",()=>A.an(A.d3(void 0)))
t($,"jD","hc",()=>A.an(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"jB","ha",()=>A.an(A.fv(null)))
t($,"jA","h9",()=>A.an(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"jF","he",()=>A.an(A.fv(void 0)))
t($,"jE","hd",()=>A.an(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"jG","cv",()=>A.f4(B.ek))
t($,"jH","hf",()=>{var s=u.w,r=u.i,q=A.x("aw<V>")
return A.m([B.K,A.m([0.5,A.j([B.e,B.c,B.f,B.k,B.D],s),1,A.j([B.e,B.c,B.f,B.k],s),2,A.j([B.e,B.c,B.f,B.k],s)],r,q),B.v,A.m([0.5,A.j([B.e,B.c,B.f,B.k],s),1,A.j([B.e,B.c,B.f,B.k],s),2,A.j([B.e,B.c,B.f,B.k],s)],r,q),B.B,A.m([0.125,A.j([B.e],s),0.25,A.j([B.e,B.c,B.f],s),0.5,A.j([B.e,B.c,B.f],s)],r,q),B.L,A.m([0.5,A.j([B.O],s)],r,q),B.C,A.m([0.25,A.j([B.c],s),0.5,A.j([B.c],s),0.75,A.j([B.e],s)],r,q),B.M,A.m([0.2,A.eL(s),0.75,A.j([B.e,B.c],s),1,A.j([B.e],s)],r,q),B.N,A.m([0.5,A.j([B.e,B.c,B.k],s),1,A.j([B.e,B.c,B.k],s),2,A.j([B.e,B.c,B.k],s)],r,q)],u.E,A.x("y<o,aw<V>>"))})
t($,"jI","hg",()=>{var s=u.i,r=u.w,q=A.x("l<az>")
return A.m([B.K,A.d([A.I(A.j([0.5,1,2],s),B.x,B.q,B.r,200),A.I(A.j([0.5],s),A.j([B.f],r),B.i,B.r,25),A.I(A.j([1],s),A.j([B.f],r),B.i,B.r,50),A.I(A.j([0.5],s),A.j([B.D],r),B.q,B.r,200)],q),B.v,A.d([A.I(A.j([0.5],s),B.x,B.q,B.h,100),A.I(A.j([1],s),B.x,B.q,B.h,50),A.I(A.j([2],s),B.x,B.q,B.h,25),A.I(A.j([0.5,1],s),A.j([B.f],r),B.i,B.h,5)],q),B.B,A.d([A.I(A.j([0.125,0.25,0.5],s),A.j([B.e],r),B.i,B.R,2),A.I(A.j([0.25,0.5],s),A.j([B.c],r),B.i,B.R,2),A.I(A.j([0.25,0.5],s),A.j([B.f],r),B.cm,B.h,5)],q),B.L,A.d([A.I(A.j([0.5],s),A.j([B.O],r),B.i,B.r,20)],q),B.C,A.d([A.I(A.j([0.75],s),A.j([B.e],r),B.i,B.h,20),A.I(A.j([0.5],s),A.j([B.c],r),B.i,B.h,30),A.I(A.j([0.5],s),A.j([B.c],r),B.ad,B.h,30),A.I(A.j([0.25],s),A.j([B.c],r),B.i,B.h,40),A.I(A.j([0.25],s),A.j([B.c],r),B.ad,B.h,60)],q),B.M,A.d([A.I(A.j([0.75],s),A.j([B.e],r),B.i,B.h,20),A.I(A.j([1],s),A.j([B.e],r),B.i,B.h,20),A.I(A.j([0.75],s),A.j([B.c],r),B.i,B.h,40)],q),B.N,A.d([A.I(A.j([0.5,1,2],s),B.x,B.q,B.r,500)],q)],u.E,A.x("a6<az>"))})
t($,"jK","eG",()=>A.m(["NUT-01.bmi",new A.dC(),"NUT-01.standard_weight",new A.dD(),"NUT-01.ibw",new A.dE(),"NUT-01.adjusted_weight",new A.dP(),"NUT-02",new A.e_(),"NUT-03",new A.ea(),"NUT-04",new A.el(),"NUT-05",new A.ew(),"NUT-06",new A.eA(),"NUT-07",new A.eB(),"FE-01",new A.eC(),"FE-02",new A.dF(),"FE-03",new A.dG(),"FE-05",new A.dH(),"FE-06",new A.dI(),"FE-07",new A.dJ(),"FE-08",new A.dK(),"FE-09",new A.dL(),"FE-10",new A.dM(),"FE-11",new A.dN(),"RF-01",new A.dO(),"RF-02",new A.dQ(),"RF-03",new A.dR(),"RF-04",new A.dS(),"SEV-01",new A.dT(),"SEV-02",new A.dU(),"SEV-03",new A.dV(),"SEV-04",new A.dW(),"SEV-05",new A.dX(),"NUR-04",new A.dY(),"NUR-05",new A.dZ(),"NUR-06",new A.e0(),"NUR-07",new A.e1(),"NUR-10",new A.e2(),"PWA-01",new A.e3(),"PWA-02",new A.e4(),"PWA-03",new A.e5(),"PWA-04",new A.e6(),"PWA-05",new A.e7(),"PWA-06",new A.e8(),"PRE-02",new A.e9(),"PRE-03",new A.eb(),"PRE-05",new A.ec(),"IOP-01",new A.ed(),"IOP-02",new A.ee(),"IOP-03",new A.ef(),"RESP-01",new A.eg(),"RESP-02",new A.eh(),"RESP-03",new A.ei(),"RESP-04",new A.ej(),"CV-01",new A.ek(),"CV-02",new A.em(),"KD-02",new A.en(),"AB-01",new A.eo(),"NS-01.urine",new A.ep(),"NS-01.balance",new A.eq(),"NS-02",new A.er(),"NS-03",new A.es(),"HEM-01",new A.et(),"HEM-01.candidates",new A.eu(),"HEM-02a",new A.ev(),"HEM-02c",new A.ex(),"HEM-03",new A.ey(),"HEM-04",new A.ez()],u.N,A.x("y<k,n?>(y<k,n?>)")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}}()
hunkHelpers.setOrUpdateInterceptorsByTag({})
hunkHelpers.setOrUpdateLeafTags({})})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.j1
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()