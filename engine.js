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
if(a[b]!==t){A.jt(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.d(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.f5(b)
return new t(c,this)}:function(){if(t===null)t=A.f5(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.f5(a).prototype
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
hv(a,b){var t=A.d(a,b.h("l<0>"))
t.$flags=1
return t},
aZ(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b8.prototype
return J.bv.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.bu.prototype
if(typeof a=="boolean")return J.cb.prototype
if(Array.isArray(a))return J.l.prototype
if(typeof a=="function")return J.bx.prototype
if(typeof a=="object"){if(a instanceof A.n){return a}else{return J.bb.prototype}}if(!(a instanceof A.n))return J.ay.prototype
return a},
iQ(a){if(a==null)return a
if(Array.isArray(a))return J.l.prototype
if(!(a instanceof A.n))return J.ay.prototype
return a},
iR(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(Array.isArray(a))return J.l.prototype
if(!(a instanceof A.n))return J.ay.prototype
return a},
iS(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b8.prototype
return J.bv.prototype}if(a==null)return a
if(!(a instanceof A.n))return J.ay.prototype
return a},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aZ(a).K(a,b)},
a4(a){return J.aZ(a).gu(a)},
cy(a){return J.iQ(a).gt(a)},
fc(a){return J.iR(a).gp(a)},
hl(a){return J.aZ(a).gJ(a)},
fd(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.iS(a).ga7(a)},
bZ(a){return J.aZ(a).k(a)},
c9:function c9(){},
cb:function cb(){},
bu:function bu(){},
bb:function bb(){},
aw:function aw(){},
cY:function cY(){},
ay:function ay(){},
bx:function bx(){},
l:function l(a){this.$ti=a},
ca:function ca(){},
cJ:function cJ(a){this.$ti=a},
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bw:function bw(){},
b8:function b8(){},
bv:function bv(){},
ba:function ba(){}},A={eM:function eM(){},
am(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
d2(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
f7(a){var t,s
for(t=$.Z.length,s=0;s<t;++s)if(a===$.Z[s])return!0
return!1},
ch:function ch(a){this.a=a},
d_:function d_(){},
bq:function bq(){},
aQ:function aQ(){},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eL(a,b,c){var t,s,r,q,p,o,n,m=A.u(a),l=A.eQ(new A.X(a,m.h("X<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){t=!0
break}s=l[j]
if(typeof s!="string"||"__proto__"===s){t=!1
break}++j}if(t){r={}
for(q=0,j=0;j<l.length;l.length===k||(0,A.v)(l),++j,q=p){s=l[j]
c.a(a.i(0,s))
p=q+1
r[s]=q}o=A.eQ(new A.C(a,m.h("C<2>")),!0,c)
n=new A.aF(r,o,b.h("@<0>").C(c).h("aF<1,2>"))
n.$keys=l
return n}return new A.bo(A.hw(a,b,c),b.h("@<0>").C(c).h("bo<1,2>"))},
h6(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
r(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bZ(a)
return t},
bE(a){var t,s=$.ft
if(s==null)s=$.ft=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
ci(a){var t,s,r,q
if(a instanceof A.n)return A.Y(A.cw(a),null)
t=J.aZ(a)
if(t===B.bY||t===B.c4||u.cr.b(a)){s=B.az(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.Y(A.cw(a),null)},
fu(a){var t,s,r
if(a==null||typeof a=="number"||A.f_(a))return J.bZ(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.as)return a.k(0)
if(a instanceof A.af)return a.ae(!0)
t=$.hk()
for(s=0;s<1;++s){r=t[s].aL(a)
if(r!=null)return r}return"Instance of '"+A.ci(a)+"'"},
Q(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.p.ad(t,10)|55296)>>>0,t&1023|56320)}throw A.f(A.cj(a,0,1114111,null,null))},
f6(a){throw A.f(A.fY(a))},
B(a,b){if(a==null)J.fc(a)
throw A.f(A.h_(a,b))},
h_(a,b){var t,s="index"
if(!A.fT(b))return new A.ai(!0,b,s,null)
t=J.fc(a)
if(b<0||b>=t)return A.fl(b,t,a,s)
return new A.bF(null,null,!0,b,s,"Value not in range")},
fY(a){return new A.ai(!0,a,null,null)},
f(a){return A.R(a,new Error())},
R(a,b){var t
if(a==null)a=new A.bK()
b.dartException=a
t=A.jv
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
jv(){return J.bZ(this.dartException)},
o(a,b){throw A.R(a,b==null?new Error():b)},
f9(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.o(A.i3(a,b,c),t)},
i3(a,b,c){var t,s,r,q,p,o,n,m,l
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
return new A.bM("'"+t+"': Cannot "+p+" "+m+l+o)},
v(a){throw A.f(A.a6(a))},
ao(a){var t,s,r,q,p,o
a=A.jc(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.d([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.d4(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
d5(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
fy(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
eN(a,b){var t=b==null,s=t?null:b.method
return new A.cd(a,s,t?null:b.receiver)},
fa(a){if(a==null)return new A.cW(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.b1(a,a.dartException)
return A.iy(a)},
b1(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iy(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.p.ad(s,16)&8191)===10)switch(r){case 438:return A.b1(a,A.eN(A.r(t)+" (Error "+r+")",null))
case 445:case 5007:A.r(t)
return A.b1(a,new A.bC())}}if(a instanceof TypeError){q=$.h8()
p=$.h9()
o=$.ha()
n=$.hb()
m=$.he()
l=$.hf()
k=$.hd()
$.hc()
j=$.hh()
i=$.hg()
h=q.F(t)
if(h!=null)return A.b1(a,A.eN(A.w(t),h))
else{h=p.F(t)
if(h!=null){h.method="call"
return A.b1(a,A.eN(A.w(t),h))}else if(o.F(t)!=null||n.F(t)!=null||m.F(t)!=null||l.F(t)!=null||k.F(t)!=null||n.F(t)!=null||j.F(t)!=null||i.F(t)!=null){A.w(t)
return A.b1(a,new A.bC())}}return A.b1(a,new A.cn(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.bJ()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.b1(a,new A.ai(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.bJ()
return a},
f8(a){if(a==null)return J.a4(a)
if(typeof a=="object")return A.bE(a)
return J.a4(a)},
iF(a){if(typeof a=="number")return B.e.gu(a)
if(a instanceof A.cv)return A.bE(a)
if(a instanceof A.af)return a.gu(a)
return A.f8(a)},
h1(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
iM(a,b){var t,s=a.length
for(t=0;t<s;++t)b.l(0,a[t])
return b},
ht(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.cl().constructor.prototype):Object.create(new A.b2(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.fi(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.hp(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.fi(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
hp(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hn)}throw A.f("Error in functionType of tearoff")},
hq(a,b,c,d){var t=A.fh
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
fi(a,b,c,d){if(c)return A.hs(a,b,d)
return A.hq(b.length,d,a,b)},
hr(a,b,c,d){var t=A.fh,s=A.ho
switch(b?-1:a){case 0:throw A.f(new A.ck("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
hs(a,b,c){var t,s
if($.ff==null)$.ff=A.fe("interceptor")
if($.fg==null)$.fg=A.fe("receiver")
t=b.length
s=A.hr(t,c,a,b)
return s},
f5(a){return A.ht(a)},
hn(a,b){return A.bU(v.typeUniverse,A.cw(a.a),b)},
fh(a){return a.a},
ho(a){return a.b},
fe(a){var t,s,r,q=new A.b2("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.f(A.eK("Field name "+a+" not found."))},
h2(a){return v.getIsolateTag(a)},
hM(a,b){var t,s
for(t=0;t<a.length;++t){s=a[t]
if(!(t<b.length))return A.B(b,t)
if(!J.a3(s,b[t]))return!1}return!0},
iI(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
fn(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,t+s+r+q+f)
if(p instanceof RegExp)return p
throw A.f(A.fj("Illegal RegExp pattern ("+String(p)+")",a))},
jm(a,b,c){var t=a.indexOf(b,c)
return t>=0},
iK(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jn(a,b,c,d){var t=b.aa(a,d)
if(t==null)return a
return A.jp(a,t.b.index,t.gaf(),c)},
jc(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jo(a,b,c,d){return d===0?a.replace(b.b,A.iK(c)):A.jn(a,b,c,d)},
jp(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
e:function e(a,b){this.a=a
this.b=b},
I:function I(a){this.a=a},
bo:function bo(a,b){this.a=a
this.$ti=b},
b4:function b4(){},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c){this.a=a
this.b=b
this.$ti=c},
aU:function aU(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bs:function bs(a,b){this.a=a
this.$ti=b},
b5:function b5(){},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt:function bt(a,b){this.a=a
this.$ti=b},
bG:function bG(){},
d4:function d4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bC:function bC(){},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a){this.a=a},
cW:function cW(a){this.a=a},
as:function as(){},
c1:function c1(){},
cm:function cm(){},
cl:function cl(){},
b2:function b2(a,b){this.a=a
this.b=b},
ck:function ck(a){this.a=a},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cK:function cK(a){this.a=a},
cR:function cR(a,b){this.a=a
this.b=b
this.c=null},
X:function X(a,b){this.a=a
this.$ti=b},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
C:function C(a,b){this.a=a
this.$ti=b},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aO:function aO(a,b){this.a=a
this.$ti=b},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
af:function af(){},
bg:function bg(){},
bh:function bh(){},
cc:function cc(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
cu:function cu(a){this.b=a},
d6:function d6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eS(a,b){var t=b.c
return t==null?b.c=A.bS(a,"fk",[b.x]):t},
fw(a){var t=a.w
if(t===6||t===7)return A.fw(a.x)
return t===11||t===12},
hB(a){return a.as},
j7(a,b){var t,s=b.length
for(t=0;t<s;++t)if(!a[t].b(b[t]))return!1
return!0},
x(a){return A.db(v.typeUniverse,a,!1)},
aX(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.aX(a0,t,a2,a3)
if(s===t)return a1
return A.fI(a0,s,!0)
case 7:t=a1.x
s=A.aX(a0,t,a2,a3)
if(s===t)return a1
return A.fH(a0,s,!0)
case 8:r=a1.y
q=A.bl(a0,r,a2,a3)
if(q===r)return a1
return A.bS(a0,a1.x,q)
case 9:p=a1.x
o=A.aX(a0,p,a2,a3)
n=a1.y
m=A.bl(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.eU(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.bl(a0,k,a2,a3)
if(j===k)return a1
return A.fJ(a0,l,j)
case 11:i=a1.x
h=A.aX(a0,i,a2,a3)
g=a1.y
f=A.iv(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.fG(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.bl(a0,e,a2,a3)
p=a1.x
o=A.aX(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.eV(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.f(A.c0("Attempted to substitute unexpected RTI kind "+a))}},
bl(a,b,c,d){var t,s,r,q,p=b.length,o=A.dc(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.aX(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
iw(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.dc(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.aX(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
iv(a,b,c,d){var t,s=b.a,r=A.bl(a,s,c,d),q=b.b,p=A.bl(a,q,c,d),o=b.c,n=A.iw(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.cq()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
fZ(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.iU(t)
return a.$S()}return null},
iY(a,b){var t
if(A.fw(b))if(a instanceof A.as){t=A.fZ(a)
if(t!=null)return t}return A.cw(a)},
cw(a){if(a instanceof A.n)return A.u(a)
if(Array.isArray(a))return A.ag(a)
return A.eZ(J.aZ(a))},
ag(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
u(a){var t=a.$ti
return t!=null?t:A.eZ(a)},
eZ(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.ia(a,t)},
ia(a,b){var t=a instanceof A.as?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.hU(v.typeUniverse,t.name)
b.$ccache=s
return s},
iU(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.db(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
iT(a){return A.aY(A.u(a))},
f3(a){var t
if(a instanceof A.af)return A.iL(a.$r,a.a0())
t=a instanceof A.as?A.fZ(a):null
if(t!=null)return t
if(u.bW.b(a))return J.hl(a).a
if(Array.isArray(a))return A.ag(a)
return A.cw(a)},
aY(a){var t=a.r
return t==null?a.r=new A.cv(a):t},
iL(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.B(r,0)
t=A.bU(v.typeUniverse,A.f3(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.B(r,s)
t=A.fK(v.typeUniverse,t,A.f3(r[s]))}return A.bU(v.typeUniverse,t,a)},
jw(a){return A.aY(A.db(v.typeUniverse,a,!1))},
i9(a){var t=this
t.b=A.iu(t)
return t.b(a)},
iu(a){var t,s,r,q,p
if(a===u.K)return A.ih
if(A.b_(a))return A.il
t=a.w
if(t===6)return A.i7
if(t===1)return A.fV
if(t===7)return A.ib
s=A.it(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.b_)){a.f="$i"+r
if(r==="a7")return A.ie
if(a===u.m)return A.id
return A.ik}}else if(t===10){q=A.iI(a.x,a.y)
p=q==null?A.fV:q
return p==null?A.eX(p):p}return A.i5},
it(a){if(a.w===8){if(a===u.S)return A.fT
if(a===u.i||a===u.H)return A.ig
if(a===u.N)return A.ij
if(a===u.y)return A.f_}return null},
i8(a){var t=this,s=A.i4
if(A.b_(t))s=A.i_
else if(t===u.K)s=A.eX
else if(A.bm(t)){s=A.i6
if(t===u.ao)s=A.hX
else if(t===u.aD)s=A.eY
else if(t===u.cG)s=A.dd
else if(t===u.ae)s=A.bX
else if(t===u.dd)s=A.hW
else if(t===u.z)s=A.hZ}else if(t===u.S)s=A.D
else if(t===u.N)s=A.w
else if(t===u.y)s=A.eW
else if(t===u.H)s=A.aC
else if(t===u.i)s=A.bW
else if(t===u.m)s=A.hY
t.a=s
return t.a(a)},
i5(a){var t=this
if(a==null)return A.bm(t)
return A.iZ(v.typeUniverse,A.iY(a,t),t)},
i7(a){if(a==null)return!0
return this.x.b(a)},
ik(a){var t,s=this
if(a==null)return A.bm(s)
t=s.f
if(a instanceof A.n)return!!a[t]
return!!J.aZ(a)[t]},
ie(a){var t,s=this
if(a==null)return A.bm(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.n)return!!a[t]
return!!J.aZ(a)[t]},
id(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.n)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
fU(a){if(typeof a=="object"){if(a instanceof A.n)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
i4(a){var t=this
if(a==null){if(A.bm(t))return a}else if(t.b(a))return a
throw A.R(A.fP(a,t),new Error())},
i6(a){var t=this
if(a==null||t.b(a))return a
throw A.R(A.fP(a,t),new Error())},
fP(a,b){return new A.bQ("TypeError: "+A.fA(a,A.Y(b,null)))},
fA(a,b){return A.c7(a)+": type '"+A.Y(A.f3(a),null)+"' is not a subtype of type '"+b+"'"},
a2(a,b){return new A.bQ("TypeError: "+A.fA(a,b))},
ib(a){var t=this
return t.x.b(a)||A.eS(v.typeUniverse,t).b(a)},
ih(a){return a!=null},
eX(a){if(a!=null)return a
throw A.R(A.a2(a,"Object"),new Error())},
il(a){return!0},
i_(a){return a},
fV(a){return!1},
f_(a){return!0===a||!1===a},
eW(a){if(!0===a)return!0
if(!1===a)return!1
throw A.R(A.a2(a,"bool"),new Error())},
dd(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.R(A.a2(a,"bool?"),new Error())},
bW(a){if(typeof a=="number")return a
throw A.R(A.a2(a,"double"),new Error())},
hW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.R(A.a2(a,"double?"),new Error())},
fT(a){return typeof a=="number"&&Math.floor(a)===a},
D(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.R(A.a2(a,"int"),new Error())},
hX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.R(A.a2(a,"int?"),new Error())},
ig(a){return typeof a=="number"},
aC(a){if(typeof a=="number")return a
throw A.R(A.a2(a,"num"),new Error())},
bX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.R(A.a2(a,"num?"),new Error())},
ij(a){return typeof a=="string"},
w(a){if(typeof a=="string")return a
throw A.R(A.a2(a,"String"),new Error())},
eY(a){if(typeof a=="string")return a
if(a==null)return a
throw A.R(A.a2(a,"String?"),new Error())},
hY(a){if(A.fU(a))return a
throw A.R(A.a2(a,"JSObject"),new Error())},
hZ(a){if(a==null)return a
if(A.fU(a))return a
throw A.R(A.a2(a,"JSObject?"),new Error())},
fW(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.Y(a[r],b)
return t},
is(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.fW(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.Y(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
fR(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.d([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.a.l(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.B(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.Y(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.Y(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.Y(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.Y(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.Y(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
Y(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.Y(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.Y(a.x,b)+">"
if(m===8){q=A.ix(a.x)
p=a.y
return p.length>0?q+("<"+A.fW(p,b)+">"):q}if(m===10)return A.is(a,b)
if(m===11)return A.fR(a,b,null)
if(m===12)return A.fR(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.B(b,o)
return b[o]}return"?"},
ix(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
hV(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
hU(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.db(a,b,!1)
else if(typeof n=="number"){t=n
s=A.bT(a,5,"#")
r=A.dc(t)
for(q=0;q<t;++q)r[q]=s
p=A.bS(a,b,r)
o[b]=p
return p}else return n},
hT(a,b){return A.fL(a.tR,b)},
hS(a,b){return A.fL(a.eT,b)},
db(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.fE(A.fC(a,null,b,!1))
s.set(b,t)
return t},
bU(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.fE(A.fC(a,b,c,!0))
r.set(c,s)
return s},
fK(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.eU(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
aB(a,b){b.a=A.i8
b.b=A.i9
return b},
bT(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.a9(null,null)
t.w=b
t.as=c
s=A.aB(a,t)
a.eC.set(c,s)
return s},
fI(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.hQ(a,b,s,c)
a.eC.set(s,t)
return t},
hQ(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.b_(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.bm(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.a9(null,null)
r.w=6
r.x=b
r.as=c
return A.aB(a,r)},
fH(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.hO(a,b,s,c)
a.eC.set(s,t)
return t},
hO(a,b,c,d){var t,s
if(d){t=b.w
if(A.b_(b)||b===u.K)return b
else if(t===1)return A.bS(a,"fk",[b])
else if(b===u.P||b===u.T)return u.bc}s=new A.a9(null,null)
s.w=7
s.x=b
s.as=c
return A.aB(a,s)},
hR(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.a9(null,null)
t.w=13
t.x=b
t.as=r
s=A.aB(a,t)
a.eC.set(r,s)
return s},
bR(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
hN(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
bS(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.bR(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.a9(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.aB(a,s)
a.eC.set(q,r)
return r},
eU(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.bR(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a9(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.aB(a,p)
a.eC.set(r,o)
return o},
fJ(a,b,c){var t,s,r="+"+(b+"("+A.bR(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.a9(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.aB(a,t)
a.eC.set(r,s)
return s},
fG(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.bR(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.bR(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.hN(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.a9(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.aB(a,q)
a.eC.set(s,p)
return p},
eV(a,b,c,d){var t,s=b.as+("<"+A.bR(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.hP(a,b,c,s,d)
a.eC.set(s,t)
return t},
hP(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.dc(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.aX(a,b,s,0)
n=A.bl(a,c,s,0)
return A.eV(a,o,n,c!==n)}}m=new A.a9(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.aB(a,m)},
fC(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fE(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.hH(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.fD(a,s,m,l,!1)
else if(r===46)s=A.fD(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.aW(a.u,a.e,l.pop()))
break
case 94:l.push(A.hR(a.u,l.pop()))
break
case 35:l.push(A.bT(a.u,5,"#"))
break
case 64:l.push(A.bT(a.u,2,"@"))
break
case 126:l.push(A.bT(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.hJ(a,l)
break
case 38:A.hI(a,l)
break
case 63:q=a.u
l.push(A.fI(q,A.aW(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.fH(q,A.aW(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.hG(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.fF(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.hL(a.u,a.e,p)
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
return A.aW(a.u,a.e,n)},
hH(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
fD(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.hV(t,p.x)[q]
if(o==null)A.o('No "'+q+'" in "'+A.hB(p)+'"')
d.push(A.bU(t,p,o))}else d.push(q)
return n},
hJ(a,b){var t,s=a.u,r=A.fB(a,b),q=b.pop()
if(typeof q=="string")b.push(A.bS(s,q,r))
else{t=A.aW(s,a.e,q)
switch(t.w){case 11:b.push(A.eV(s,t,r,a.n))
break
default:b.push(A.eU(s,t,r))
break}}},
hG(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.fB(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.aW(q,a.e,p)
r=new A.cq()
r.a=t
r.b=o
r.c=n
b.push(A.fG(q,s,r))
return
case-4:b.push(A.fJ(q,b.pop(),t))
return
default:throw A.f(A.c0("Unexpected state under `()`: "+A.r(p)))}},
hI(a,b){var t=b.pop()
if(0===t){b.push(A.bT(a.u,1,"0&"))
return}if(1===t){b.push(A.bT(a.u,4,"1&"))
return}throw A.f(A.c0("Unexpected extended operation "+A.r(t)))},
fB(a,b){var t=b.splice(a.p)
A.fF(a.u,a.e,t)
a.p=b.pop()
return t},
aW(a,b,c){if(typeof c=="string")return A.bS(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hK(a,b,c)}else return c},
fF(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.aW(a,b,c[t])},
hL(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.aW(a,b,c[t])},
hK(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.f(A.c0("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.f(A.c0("Bad index "+c+" for "+b.k(0)))},
iZ(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.K(a,b,null,c,null)
s.set(c,t)}return t},
K(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.b_(d))return!0
t=b.w
if(t===4)return!0
if(A.b_(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.K(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.K(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.K(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.K(a,b.x,c,d,e))return!1
return A.K(a,A.eS(a,b),c,d,e)}if(t===6)return A.K(a,q,c,d,e)&&A.K(a,b.x,c,d,e)
if(r===7){if(A.K(a,b,c,d.x,e))return!0
return A.K(a,b,c,A.eS(a,d),e)}if(r===6)return A.K(a,b,c,q,e)||A.K(a,b,c,d.x,e)
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
if(!A.K(a,k,c,j,e)||!A.K(a,j,e,k,c))return!1}return A.fS(a,b.x,c,d.x,e)}if(r===11){if(b===u.L)return!0
if(q)return!1
return A.fS(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.ic(a,b,c,d,e)}if(p&&r===10)return A.ii(a,b,c,d,e)
return!1},
fS(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.K(a2,a3.x,a4,a5.x,a6))return!1
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
if(!A.K(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.K(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.K(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.K(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
ic(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bU(a,b,s[p])
return A.fM(a,q,null,c,d.y,e)}return A.fM(a,b.y,null,c,d.y,e)},
fM(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.K(a,b[t],d,e[t],f))return!1
return!0},
ii(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.K(a,s[t],c,r[t],e))return!1
return!0},
bm(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.b_(a))if(t!==6)s=t===7&&A.bm(a.x)
return s},
b_(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
fL(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
dc(a){return a>0?new Array(a):v.typeUniverse.sEA},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cq:function cq(){this.c=this.b=this.a=null},
cv:function cv(a){this.a=a},
cp:function cp(){},
bQ:function bQ(a){this.a=a},
fp(a,b){return new A.a_(a.h("@<0>").C(b).h("a_<1,2>"))},
m(a,b,c){return b.h("@<0>").C(c).h("eO<1,2>").a(A.h1(a,new A.a_(b.h("@<0>").C(c).h("a_<1,2>"))))},
ad(a,b){return new A.a_(a.h("@<0>").C(b).h("a_<1,2>"))},
eP(a){return new A.az(a.h("az<0>"))},
j(a,b){return b.h("fq<0>").a(A.iM(a,new A.az(b.h("az<0>"))))},
eT(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
hF(a,b,c){var t=new A.aV(a,b,c.h("aV<0>"))
t.c=a.e
return t},
hw(a,b,c){var t=A.fp(b,c)
a.B(0,new A.cS(t,b,c))
return t},
cU(a){var t,s
if(A.f7(a))return"{...}"
t=new A.be("")
try{s={}
B.a.l($.Z,a)
t.a+="{"
s.a=!0
a.B(0,new A.cV(s,t))
t.a+="}"}finally{if(0>=$.Z.length)return A.B($.Z,-1)
$.Z.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ct:function ct(a){this.a=a
this.b=null},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
M:function M(){},
cV:function cV(a,b){this.a=a
this.b=b},
bV:function bV(){},
bc:function bc(){},
bL:function bL(){},
al:function al(){},
bP:function bP(){},
bi:function bi(){},
ir(a,b){var t,s,r,q=null
try{q=JSON.parse(a)}catch(s){t=A.fa(s)
r=A.fj(String(t),null)
throw A.f(r)}r=A.de(q)
return r},
de(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cr(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=A.de(a[t])
return a},
fo(a,b,c){return new A.by(a,b)},
i2(a){return a.aQ()},
hD(a,b){return new A.d7(a,[],A.iG())},
hE(a,b,c){var t,s=new A.be(""),r=A.hD(s,b)
r.W(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
cr:function cr(a,b){this.a=a
this.b=b
this.c=null},
cs:function cs(a){this.a=a},
c2:function c2(){},
c5:function c5(){},
by:function by(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
cL:function cL(){},
cN:function cN(a){this.b=a},
cM:function cM(a){this.a=a},
d8:function d8(){},
d9:function d9(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c){this.c=a
this.a=b
this.b=c},
fr(a,b,c){var t,s,r
if(a>4294967295)A.o(A.cj(a,0,4294967295,"length",null))
t=J.hv(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
eQ(a,b,c){var t,s=A.d([],c.h("l<0>"))
for(t=J.cy(a);t.n();)B.a.l(s,c.a(t.gq()))
if(b)return s
s.$flags=1
return s},
cT(a,b){var t,s
if(Array.isArray(a))return A.d(a.slice(0),b.h("l<0>"))
t=A.d([],b.h("l<0>"))
for(s=J.cy(a);s.n();)B.a.l(t,s.gq())
return t},
fv(a){return new A.cc(a,A.fn(a,!1,!0,!1,!1,""))},
fx(a,b,c){var t=J.cy(b)
if(!t.n())return a
if(c.length===0){do a+=A.r(t.gq())
while(t.n())}else{a+=A.r(t.gq())
while(t.n())a=a+c+A.r(t.gq())}return a},
P(a,b,c){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(r.b===b)return r}throw A.f(A.hm(b,"name","No enum value with that name"))},
c7(a){if(typeof a=="number"||A.f_(a)||a==null)return J.bZ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fu(a)},
c0(a){return new A.c_(a)},
eK(a){return new A.ai(!1,null,null,a)},
hm(a,b,c){return new A.ai(!0,a,b,c)},
cj(a,b,c,d,e){return new A.bF(b,c,!0,a,d,"Invalid value")},
hz(a,b,c){if(0>a||a>c)throw A.f(A.cj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.cj(b,a,c,"end",null))
return b}return c},
hy(a,b){return a},
fl(a,b,c,d){return new A.c8(b,!0,a,d,"Index out of range")},
fz(a){return new A.bM(a)},
a6(a){return new A.c4(a)},
fj(a,b){return new A.cF(a,b)},
hu(a,b,c){var t,s
if(A.f7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.d([],u.s)
B.a.l($.Z,a)
try{A.im(a,t)}finally{if(0>=$.Z.length)return A.B($.Z,-1)
$.Z.pop()}s=A.fx(b,u.h.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
fm(a,b,c){var t,s
if(A.f7(a))return b+"..."+c
t=new A.be(b)
B.a.l($.Z,a)
try{s=t
s.a=A.fx(s.a,a,", ")}finally{if(0>=$.Z.length)return A.B($.Z,-1)
$.Z.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
im(a,b){var t,s,r,q,p,o,n,m=a.gt(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.n())return
t=A.r(m.gq())
B.a.l(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return A.B(b,-1)
s=b.pop()
if(0>=b.length)return A.B(b,-1)
r=b.pop()}else{q=m.gq();++k
if(!m.n()){if(k<=4){B.a.l(b,A.r(q))
return}s=A.r(q)
if(0>=b.length)return A.B(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gq();++k
for(;m.n();q=p,p=o){o=m.gq();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.B(b,-1)
l-=b.pop().length+2;--k}B.a.l(b,"...")
return}}r=A.r(q)
s=A.r(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.B(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.l(b,n)
B.a.l(b,r)
B.a.l(b,s)},
fs(a,b,c,d){var t
if(B.u===c){t=B.p.gu(a)
b=J.a4(b)
return A.d2(A.am(A.am($.cx(),t),b))}if(B.u===d){t=B.p.gu(a)
b=J.a4(b)
c=J.a4(c)
return A.d2(A.am(A.am(A.am($.cx(),t),b),c))}t=B.p.gu(a)
b=J.a4(b)
c=J.a4(c)
d=J.a4(d)
d=A.d2(A.am(A.am(A.am(A.am($.cx(),t),b),c),d))
return d},
hx(a){var t,s,r=$.cx()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.v)(a),++s)r=A.am(r,J.a4(a[s]))
return A.d2(r)},
co:function co(){},
G:function G(){},
c_:function c_(a){this.a=a},
bK:function bK(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
c8:function c8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bM:function bM(a){this.a=a},
c4:function c4(a){this.a=a},
bJ:function bJ(){},
cF:function cF(a,b){this.a=a
this.b=b},
q:function q(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
aR:function aR(){},
n:function n(){},
be:function be(a){this.a=a},
j9(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!(a>0))throw A.f(B.ba)
if(!(c>0))throw A.f(B.bf)
A.b("bicarbonate",a,0,80)
A.b("paco2",c,0,200)
t=b===B.ai||b===B.Q
s=b===B.aj||b===B.R
if(!(t&&c<40))r=s&&c>40
else r=!0
if(r)throw A.f(B.aH)
switch(b.a){case 0:r=1.5*a
q="\u4e88\u6e2c PaCO2 = 1.5 \xd7 "+A.a(a,4)+" + 8 \xb1 2"
p="Expected PaCO2 = 1.5 \xd7 "+A.a(a,4)+" + 8 \xb1 2"
if($.z===B.b)q=p
q=new A.I([r+6,r+10,"paco2",q])
r=q
break
case 1:r=0.7*(a-24)
q="\u4e88\u6e2c PaCO2 = 0.7 \xd7 ("+A.a(a,4)+" \u2212 24) + 40 \xb1 2"
p="Expected PaCO2 = 0.7 \xd7 ("+A.a(a,4)+" \u2212 24) + 40 \xb1 2"
if($.z===B.b)q=p
q=new A.I([r+38,r+42,"paco2",q])
r=q
break
case 2:r=24+(c-40)/10
q="\u4e88\u6e2c HCO3 = 24 + 1 \xd7 ("+A.a(c,4)+" \u2212 40) \xf7 10"
p="Expected HCO3 = 24 + 1 \xd7 ("+A.a(c,4)+" \u2212 40) \xf7 10"
r=new A.I([r,r,"hco3",$.z===B.b?p:q])
break
case 3:r=c-40
q="\u4e88\u6e2c HCO3 = 24 + 4\u301c5 \xd7 ("+A.a(c,4)+" \u2212 40) \xf7 10"
p="Expected HCO3 = 24 + 4\u20135 \xd7 ("+A.a(c,4)+" \u2212 40) \xf7 10"
if($.z===B.b)q=p
q=new A.I([24+4*r/10,24+5*r/10,"hco3",q])
r=q
break
case 4:r=24-2*(40-c)/10
q="\u4e88\u6e2c HCO3 = 24 \u2212 2 \xd7 (40 \u2212 "+A.a(c,4)+") \xf7 10"
p="Expected HCO3 = 24 \u2212 2 \xd7 (40 \u2212 "+A.a(c,4)+") \xf7 10"
r=new A.I([r,r,"hco3",$.z===B.b?p:q])
break
case 5:r=40-c
q="\u4e88\u6e2c HCO3 = 24 \u2212 4\u301c5 \xd7 (40 \u2212 "+A.a(c,4)+") \xf7 10"
p="Expected HCO3 = 24 \u2212 4\u20135 \xd7 (40 \u2212 "+A.a(c,4)+") \xf7 10"
if($.z===B.b)q=p
q=new A.I([24-5*r/10,24-4*r/10,"hco3",q])
r=q
break
default:r=f}r=r.a
o=r[0]
n=f
m=f
l=r[1]
k=r[2]
r[3]
m=k
n=l
j=o
i=m==="paco2"?c:a
if(typeof j!=="number")return A.f6(j)
if(i<j)h=B.a3
else{if(typeof n!=="number")return A.f6(n)
h=i>n?B.a4:B.bD}if(h===B.a3)g=i-j
else if(h===B.a4){if(typeof n!=="number")return A.f6(n)
r=i-n
g=r}else g=0
A:{if(B.Q===b){r=24+0.3*(c-40)
break A}if(B.R===b){r=24-0.4*(40-c)
break A}r=f
break A}if(j===n)A.a(j,1)
else{A.a(j,1)
A.a(n,1)}return new A.cB(j,n,m,h,g,r)},
a8:function a8(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iX(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.ad(u.N,u.i),e=new A.dp(),d=a.c
e.$2("cardiac_output",d)
t=a.d
e.$2("bsa",t)
s=a.a
e.$2("heart_rate",s)
for(r=a.y,q=a.Q,p=[new A.e("sao2",r),new A.e("svo2",q)],o=0;o<2;++o){n=p[o]
m=n.b
if(m!=null)if(isNaN(m)||m<0||m>1)A.o(A.V("out_of_range:"+n.a,A.r(m)+" not in [0, 1]"))}p=a.at
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
cI:function cI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dp:function dp(){},
bY(a){var t
switch(a.a){case 0:t=B.e2
break
case 1:t=B.e4
break
case 2:t=B.e6
break
case 3:t=B.eb
break
case 4:t=B.e8
break
case 5:t=B.ea
break
case 6:t=B.e9
break
case 7:t=B.e7
break
case 8:t=B.e5
break
case 9:t=B.e3
break
default:t=null}return t},
fN(a){var t,s=a.a
if(!(s>0)||!isFinite(s))throw A.f(B.bl)
t=a.c
if(!(t>0)||!isFinite(t))throw A.f(B.a2)
A.b("drug_amount",s,0,1e7)
A.b("volume",t,0,5000)},
fX(a,b){if(!A.bY(a).a[2])return 1
if(b==null)throw A.f(B.a0)
if(!(b>0))throw A.f(B.v)
A.b("weight",b,0,400)
return b},
fQ(a,b){var t=A.bY(a).a,s=t[0],r=t[1],q=t[3]
if(s!==(b===B.W?B.G:B.q))throw A.f(B.bd)
return r/(b===B.V?1000:1)*q},
h0(a,b,c,d){var t,s,r,q,p,o,n
A.fN(b)
A.b("dose",a,0,1e6)
t=A.fX(c,d)
s=A.fQ(c,b.b)
r=b.a
q=b.c
p=r/q
o=a*t*s/p
if(!isFinite(o))A.o(B.a1)
n="\u6fc3\u5ea6 "+A.a(r,4)+" \xf7 "+A.a(q,4)+" mL = "+A.a(p,4)+" /mL"
q="Concentration "+A.a(r,4)+" \xf7 "+A.a(q,4)+" mL = "+A.a(p,4)+" /mL"
r=$.z===B.b?q:n
q=A.a(a,4)
n=A.bY(c).a[2]?" \xd7 "+A.a(t,4)+" kg":""
return new A.A(o,"mL/h",A.d([r,q+n+" \xd7 "+A.a(s,4)+" \xf7 "+A.a(p,4)+" = "+A.a(o,2)+" mL/h"],u.s),B.c)},
jr(a,b,c,d){var t,s,r,q,p,o,n,m=A.d([],u.a2)
for(t=d.length,s=u.n,r=0;r<d.length;d.length===t||(0,A.v)(d),++r){q=d[r]
p=A.d([],s)
for(o=a.length,n=0;n<a.length;a.length===o||(0,A.v)(a),++n)p.push(A.h0(a[n],b,c,q).a)
m.push(p)}return m},
j6(a,b,c,d,e,f){var t,s,r,q,p,o,n,m=A.bY(e).a,l=m[0],k=m[1],j=m[2],i=m[3]
m=A.bY(c).a
t=m[0]
s=m[1]
r=m[2]
q=m[3]
if(l!==t)throw A.f(B.b8)
m=new A.dy(j===r,new A.dz(f))
p=m.$4(d,k,j,i)
o=b==null?null:m.$4(b,s,r,q)
n=a==null?null:m.$4(a,s,r,q)
if(!(o!=null&&p<o*0.999999999))m=n!=null&&p>n*1.000000001
else m=!0
return m},
jq(a){var t,s,r,q,p,o,n,m,l,k,j="amino_acid_g",i="nitrogen_g",h=A.ad(u.N,u.i)
for(t=0;t<11;++t)h.j(0,B.cA[t],0)
for(s=a.length,r=0,q=!0,t=0;t<a.length;a.length===s||(0,A.v)(a),++t){p={}
o=a[t]
p.a=null
n=p.a=o.b
if(isNaN(n)||n<0||n>1e4)A.o(A.V("out_of_range:volume",A.r(n)+" not in [0, 10000]"))
r+=n
o=o.a.a
o.B(0,new A.eI(p,h))
p=o.i(0,j)
if((p==null?0:p)>0&&!o.v(i))q=!1}m=h.i(0,j)
if(m==null)m=0
if(m<=0){s=h.i(0,"kcal")
return new A.bn(r,h,s==null?0:s,0,null,!1)}s=h.i(0,"kcal")
if(s==null)s=0
l=s-4*m
if(q){s=h.i(0,i)
k=s==null?0:s}else k=m/6.25
if(!(k>0))return new A.bn(r,h,l,k,null,q)
return new A.bn(r,h,l,k,l/k,q)},
io(a,b){var t,s=null
if("kcal"===a)return b==="kcal"?B.dW:s
if("glucose_g"===a||"carbohydrate_g"===a)return A.df("glucose_g",b)
if("amino_acid_g"===a||"protein_g"===a)return A.df("amino_acid_g",b)
if("nitrogen_g"===a)return A.df("nitrogen_g",b)
if("lipid_g"===a)return A.df("lipid_g",b)
if("water_ml"===a)return b==="mL"?B.e0:s
if("na"===a||"k"===a||"cl"===a){A:{if("mEq"===b||"mmol"===b){t=new A.e(a+"_meq",1)
break A}if("mg"===b){t=B.F.i(0,a)
t.toString
t=new A.e(a+"_meq",1/t)
break A}if("g"===b){t=B.F.i(0,a)
t.toString
t=new A.e(a+"_meq",1000/t)
break A}t=s
break A}return t}if("ca"===a||"mg"===a){B:{if("mEq"===b){t=new A.e(a+"_meq",1)
break B}if("mmol"===b){t=new A.e(a+"_meq",2)
break B}if("mg"===b){t=B.F.i(0,a)
t.toString
t=new A.e(a+"_meq",2/t)
break B}if("g"===b){t=B.F.i(0,a)
t.toString
t=new A.e(a+"_meq",2000/t)
break B}t=s
break B}return t}if("p"===a){C:{if("mmol"===b){t=B.dX
break C}if("mg"===b){t=new A.e("p_mmol",0.032285142377477885)
break C}if("g"===b){t=new A.e("p_mmol",32.28514237747788)
break C}t=s
break C}return t}return s},
df(a,b){var t
A:{if("g"===b){t=new A.e(a,1)
break A}if("mg"===b){t=new A.e(a,0.001)
break A}t=null
break A}return t},
j3(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!(a>0)||!isFinite(a))throw A.f(B.bg)
switch(b){case"mL":t=a
break
case"g":if(d==null)throw A.f(B.b7)
if(!(d>0)||!isFinite(d))throw A.f(B.b1)
t=d
break
default:throw A.f(B.aM)}s=A.ad(u.N,u.i)
r=A.d([],u.I)
for(q=c.length,p=0;p<c.length;c.length===q||(0,A.v)(c),++p){o=c[p]
n=o.b
if(n<0||!isFinite(n))throw A.f(A.V("out_of_range:composition",o.a))
m=o.a
if(!B.eg.A(0,m)){B.a.l(r,new A.bI(m,o.c,"not_summed"))
continue}l=o.c
k=B.n.aD(l,"/L")
j=k?B.n.I(l,0,l.length-2):l
if(m==="p"&&j==="mEq"){B.a.l(r,new A.bI(m,l,"p_meq_valence"))
continue}i=A.io(m,j)
if(i==null)throw A.f(A.V("unsupported_unit:"+m,""))
h=i.a
g=i.b
if(s.v(h))throw A.f(A.V("duplicate:"+h,""))
m=k?1000:t
s.j(0,h,n*g/m)}return new A.cQ(s,r)},
ar:function ar(a,b){this.a=a
this.b=b},
T:function T(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
c3:function c3(a){this.a=a},
bn:function bn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eI:function eI(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
iV(a,b,c){var t,s
A.b("sodium",c,90,200)
A.b("glucose",b,10,3000)
t=a===B.J?1.6:2.4
if(b<=100)return new A.A(c,"mEq/L",A.d([$.z===B.b?"No correction (Glu \u2264 100)":"Glu \u2264 100 \u306e\u305f\u3081\u88dc\u6b63\u306a\u3057"],u.s),B.c)
s=c+t*(b-100)/100
return new A.A(s,"mEq/L",A.d([A.a(c,4)+" + "+A.a(t,4)+" \xd7 ("+A.a(b,4)+" \u2212 100) \xf7 100 = "+A.a(s,1)],u.s),B.c)},
js(a){var t=0.6
switch(a.a){case 0:break
case 1:t=0.5
break
case 2:t=0.5
break
case 3:t=0.45
break
case 4:break
default:t=null}return t},
iP(a,b){var t
A.b("tbw",b,0.1,250)
A.b("sodium",a,90,200)
if(a<=140)return new A.A(0,"L",A.d([$.z===B.b?"0 (Na \u2264 140)":"Na \u2264 140 \u306e\u305f\u3081 0"],u.s),B.cu)
t=b*(a/140-1)
return new A.A(t,"L",A.d([A.a(b,1)+" \xd7 ("+A.a(a,4)+" \xf7 140 \u2212 1) = "+A.a(t,2)],u.s),B.c)},
iH(a,b,c){var t,s
A.b("calcium",b,2,20)
A.b("albumin",a,0.5,7)
if(a>=4)return new A.A(b,"mg/dL",A.d([$.z===B.b?"No correction (Alb \u2265 4.0)":"Alb \u2265 4.0 \u306e\u305f\u3081\u88dc\u6b63\u306a\u3057"],u.s),B.c)
t=c===B.H?1:0.8
s=b+t*(4-a)
return new A.A(s,"mg/dL",A.d([A.a(b,4)+" + "+A.a(t,4)+" \xd7 (4.0 \u2212 "+A.a(a,4)+") = "+A.a(s,2)],u.s),B.c)},
aJ:function aJ(a,b){this.a=a
this.b=b},
ae:function ae(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
iO(a,b,c,d){var t,s=u.S,r=A.m(["thrombocytopenia",b,"timing",d,"thrombosis",c,"other_causes",a],u.N,s)
r.B(0,new A.dm())
t=new A.C(r,A.u(r).h("C<2>")).D(0,0,new A.dn(),s)
if(t>=6)s="high"
else s=t>=4?"intermediate":"low"
return new A.cG(t,s)},
j2(a){var t,s,r,q,p,o,n="platelets",m="fdp",l="fibrinogen",k="pt_ratio",j="antithrombin",i="tat_sf_f12",h=u.S,g=A.ad(u.N,h),f=A.d([],u.s),e=A.d([],u.r),d=a.a,c=0
if(d!==B.ad){t=a.b
if(t==null){B.a.l(f,n)
c=3}else{A.b(n,t,0,200)
if(t>12)s=0
else if(t>8)s=1
else{r=t>5?2:3
s=r}g.j(0,n,B.p.S(s+(a.c&&t>5?1:0),0,3))}}t=a.d
if(t!=null){A.b(m,t,0,1e4)
if(t>=40)t=3
else if(t>=20)t=2
else t=t>=10?1:0
g.j(0,m,t)}else{t=a.e
if(t!=null){A.b("d_dimer_ratio",t,0,1000)
g.j(0,m,t>=2?1:0)
B.a.l(e,B.bq)}else{B.a.l(f,m)
c+=3}}if(d!==B.ae){t=a.f
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
q=new A.C(g,g.$ti.h("C<2>")).D(0,0,new A.dr(),h)
switch(d.a){case 0:h=6
break
case 1:h=4
break
case 2:h=5
break
default:h=null}p=q+c
if(q>=h)o=!0
else o=p<h?!1:null
return new A.c6(q,g,h,o,f,p,e)},
j_(a,b,c,d,e){var t,s,r,q,p,o,n
if(!e)throw A.f(B.b4)
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
n=new A.C(o,A.u(o).h("C<2>")).D(0,0,new A.dq(),p)
return new A.c6(n,o,5,n>=5,B.cN,n,B.c)},
ja(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k
if(!(g>0))throw A.f(B.v)
A.b("weight",g,0,400)
t=b==null
if(!t)A.b("current_hb",b,0,25)
s=a!=null
if(s)A.b("age",a,0,120)
r=c!=null
q=e==null
p=!q||d!=null
o=f!=null
if(new A.ap(A.d([r,p,o],u.u),u.B.a(new A.dB()),u.aR).gp(0)!==1)throw A.f(B.b3)
n=A.d([],u.s)
if(r){A.b("hb_grams",c,0,1000)
m=c}else if(o){A.b("units",f,0,100)
m=f*26.5
r="Hb \u91cf = "+A.a(f,4)+" \u5358\u4f4d \xd7 "+A.a(26.5,4)+" g = "+A.a(m,1)+" g"
q="Hb = "+A.a(f,4)+" units \xd7 "+A.a(26.5,4)+" g = "+A.a(m,1)+" g"
B.a.l(n,$.z===B.b?q:r)}else{if(q||d==null)throw A.f(B.aG)
A.b("product_volume",e,0,5000)
A.b("product_hb",d,0,40)
m=e*d/100
r="Hb \u91cf = "+A.a(e,4)+" \xd7 "+A.a(d,4)+" \xf7 100 = "+A.a(m,1)+" g"
q="Hb = "+A.a(e,4)+" \xd7 "+A.a(d,4)+" \xf7 100 = "+A.a(m,1)+" g"
B.a.l(n,$.z===B.b?q:r)}l=70*g/100
k=m/l
r="\u5faa\u74b0\u8840\u6db2\u91cf = 70 \xd7 "+A.a(g,4)+" \xf7 100 = "+A.a(l,1)+" dL"
q="Blood volume = 70 \xd7 "+A.a(g,4)+" \xf7 100 = "+A.a(l,1)+" dL"
B.a.l(n,$.z===B.b?q:r)
r="\u4e88\u6e2c\u4e0a\u6607 Hb = "+A.a(m,1)+" \xf7 "+A.a(l,1)+" = "+A.a(k,2)+" g/dL"
q="Expected Hb rise = "+A.a(m,1)+" \xf7 "+A.a(l,1)+" = "+A.a(k,2)+" g/dL"
B.a.l(n,$.z===B.b?q:r)
t=t?null:b+k
r=A.d([],u.r)
if(s&&a<18)r.push(B.br)
return new A.cH(l,m,k,t,r)},
cG:function cG(a,b){this.a=a
this.c=b},
dm:function dm(){},
dn:function dn(){},
av:function av(a,b){this.a=a
this.b=b},
cO:function cO(a,b,c,d,e,f,g,h,i,j){var _=this
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
c6:function c6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dr:function dr(){},
at:function at(a,b){this.a=a
this.b=b},
dq:function dq(){},
cH:function cH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dB:function dB(){},
aS:function aS(a,b){this.a=a
this.b=b},
J(a,b,c,d,e){return new A.aA(a,b,c,d,e)},
j4(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=c===B.E
if(l&&e)throw A.f(B.aI)
if(!(a>0))throw A.f(B.b2)
t=$.hi().i(0,b).i(0,a)
if(t==null)throw A.f(B.aS)
if(!t.A(0,c))throw A.f(B.b_)
s=u.w
r=c===B.h?A.j([B.h,B.d],s):A.j([c],s)
s=$.hj().i(0,b)
s.toString
q=A.ag(s)
p=q.h("ap<1>")
o=A.cT(new A.ap(s,q.h("F(1)").a(new A.ds(a,r)),p),p.h("q.E"))
if(o.length===0)throw A.f(B.aR)
n=a*10
s=A.d([],u.D)
for(q=o.length,m=0;m<o.length;o.length===q||(0,A.v)(o),++m)s.push(A.ip(o[m],b,a,n,d))
q=A.d([],u.U)
if(l)q.push(B.ci)
l=b===B.D
if(l&&a===0.25&&c===B.d)q.push(B.cj)
if(l&&c===B.d)q.push(B.ck)
if(B.a.R(o,new A.dt())&&b===B.w)q.push(B.cl)
if(B.a.R(o,new A.du()))q.push(B.cm)
if(b===B.C&&a===0.125)q.push(B.cn)
return new A.cP(s,q)},
ip(a,b,c,d,e){var t,s,r,q,p,o=A.d([],u.s),n=a.d
switch(n.a){case 0:t=a.e
s="\u4e0a\u9650 "+A.a(t,4)+" mg"
r="Maximum "+A.a(t,4)+" mg"
B.a.l(o,$.z===B.b?r:s)
break
case 1:if(e==null)throw A.f(B.a0)
if(!(e>0))throw A.f(B.v)
A.b("weight",e,0,400)
s=a.e
t=s*e
B.a.l(o,A.a(s,4)+" mg/kg \xd7 "+A.a(e,4)+" kg = "+A.a(t,1)+" mg")
break
case 2:s=a.e
t=s*d
B.a.l(o,A.a(s,4)+" mL \xd7 "+A.a(c,4)+" \xd7 10 = "+A.a(t,1)+" mg")
break
default:t=null}if(n===B.i)q=a.e
else{if(typeof t!=="number")return t.aP()
q=t/d}B.a.l(o,A.a(t,1)+" mg \xf7 ("+A.a(c,4)+" \xd7 10) = "+A.a(q,1)+" mL")
if(b===B.w)p=q*(c===2?0.0125:0.01)
else p=null
if(p!=null){n=A.a(q,1)
s=c===2
n="\u30a2\u30c9\u30ec\u30ca\u30ea\u30f3 "+n+" mL \xd7 "+A.a(s?0.0125:0.01,4)+" mg/mL = "+A.a(p,4)+" mg"
r=A.a(q,1)
r="Epinephrine "+r+" mL \xd7 "+A.a(s?0.0125:0.01,4)+" mg/mL = "+A.a(p,4)+" mg"
B.a.l(o,$.z===B.b?r:n)}return new A.cf(a.c,t,q,p)},
a0:function a0(a,b){this.a=a
this.b=b},
W:function W(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.b=b},
ac:function ac(a,b){this.a=a
this.b=b},
bf:function bf(a,b){this.a=a
this.b=b},
aA:function aA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cP:function cP(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dt:function dt(){},
du:function du(){},
f4(a){return new A.C(a,A.u(a).h("C<2>")).D(0,0,new A.dh(),u.S)},
f1(a,b,c,d){var t,s,r,q,p,o=b.length
if(a.a!==o||!B.a.aE(b,a.gaz()))throw A.f(A.V("items_mismatch","expected "+A.r(b)))
for(t=c,s=d,r=0;r<o;++r){q=b[r]
p=a.i(0,q)
p.toString
if(isNaN(p)||p<c||p>d)A.o(A.V("out_of_range:"+q,""+p+" not in ["+t+", "+s+"]"))}},
j1(a){var t
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
iN(a,b,c,d){var t,s,r,q,p,o,n=u.i,m=A.cT(b,n)
B.a.P(m,d)
t=m.length
s=0
for(;s<t;++s){r=m[s]
if(isNaN(r)||r<0||r>5e4)A.o(A.V("out_of_range:fluid_item",A.r(r)+" not in [0, 50000]"))}m=a==null
if(!m)A.b("insensible",a,0,1e4)
t=c==null
if(!t)A.b("metabolic_water",c,0,5000)
q=B.a.D(b,0,new A.dk(),n)
p=B.a.D(d,0,new A.dl(),n)
n=m?0:a
o=t?0:c
m=m?0:a
t=t?0:c
return new A.cE(q,p,q-p-n+o,m>0,t>0)},
dh:function dh(){},
ab:function ab(a,b){this.a=a
this.b=b},
U:function U(a,b){this.a=a
this.b=b},
au:function au(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dk:function dk(){},
dl:function dl(){},
bk(a,b,c){if(c!=null)A.b("weight",c,0.3,400)
if(b!=null)A.b("height",b,20,250)
if(a!=null)A.b("age",a,0,120)},
j0(a){if(a<18.5)return B.bZ
if(a<25)return B.c_
if(a<30)return B.c0
if(a<35)return B.c1
if(a<40)return B.c2
return B.c3},
h3(a,b,c){var t,s,r,q,p
A.bk(null,b,null)
t=c===B.k?50:45.5
s=a===B.B?0.91:0.905511811023622
r=t+s*(b-152.4)
q=A.d([A.a(t,4)+" + "+A.a(s,4)+" \xd7 ("+A.a(b,4)+" \u2212 152.4) = "+A.a(r,1)],u.s)
p=A.d([],u.r)
if(b<152.4)p.push(B.bn)
return new A.A(r,"kg",q,p)},
iz(a,b,c){var t,s,r
A.bk(null,null,a)
A.b("factor",b,0,1)
if(a<=c){t="\u5b9f\u6e2c "+A.a(a,4)+" \u2264 IBW "+A.a(c,1)+" \u306e\u305f\u3081\u5b9f\u6e2c\u4f53\u91cd"
s="Actual weight used (actual "+A.a(a,4)+" \u2264 IBW "+A.a(c,1)+")"
return new A.A(a,"kg",A.d([$.z===B.b?s:t],u.s),B.c)}r=c+b*(a-c)
return new A.A(r,"kg",A.d([A.a(c,1)+" + "+A.a(b,4)+" \xd7 ("+A.a(a,4)+" \u2212 "+A.a(c,1)+") = "+A.a(r,1)],u.s),B.c)},
iq(a,b){var t
if(b==null)return!1
A:{if(B.Y===a){t=b<6
break A}if(B.Z===a){t=b<1||b>=6
break A}if(B.a_===a){t=b>=1
break A}t=!1
break A}return t},
iE(a,b,c,d){var t,s,r,q,p,o
A.bk(a,c,d)
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
if(A.iq(b,a))o.push(B.bz)
return new A.A(p,"m\xb2",t,o)},
h5(a,b,c){var t
A.bk(null,null,c)
A.b("per_kg",a,0,100)
t=c*a
return new A.A(t,b,A.d([A.a(c,4)+" \xd7 "+A.a(a,4)+" = "+A.a(t,1)],u.s),B.c)},
iW(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
A.bk(a,b,e)
A:{t=B.K===d
s=t
r=f
if(s){r=B.k===c
s=r
q=c
p=!0
o=!0}else{q=f
p=!1
o=!1
s=!1}if(s){s=B.cQ
break A}n=f
if(t){if(o)s=q
else{s=c
q=s
o=!0}n=B.m===s
s=n
m=!0}else{m=!1
s=!1}if(s){s=B.cr
break A}l=B.a6===d
s=l
if(s)if(p)s=r
else{if(o)s=q
else{s=c
q=s
o=!0}r=B.k===s
s=r}else s=!1
if(s){s=B.cK
break A}if(l)if(m)s=n
else{n=B.m===(o?q:c)
s=n}else s=!1
if(s){s=B.cT
break A}s=f}k=s.length
if(0>=k)return A.B(s,0)
j=s[0]
if(1>=k)return A.B(s,1)
i=s[1]
if(2>=k)return A.B(s,2)
h=s[2]
if(3>=k)return A.B(s,3)
g=j+i*e+h*b-s[3]*a
k=$.z===B.b?"kcal/day":"kcal/\u65e5"
return new A.A(g,k,A.d([A.a(j,4)+" + "+A.a(s[1],4)+" \xd7 "+A.a(e,4)+" + "+A.a(s[2],4)+" \xd7 "+A.a(b,4)+" \u2212 "+A.a(s[3],4)+" \xd7 "+A.a(a,4)+" = "+A.a(g,0)],u.s),B.c)},
bH:function bH(a,b){this.a=a
this.b=b},
ak:function ak(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
a5:function a5(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
jd(a){var t,s,r,q,p,o,n,m,l=a.f
if(l!=null){A.b("creatinine",l,0.1,30)
t=l>2}else{t=a.r
if(t==null)throw A.f(B.aT)}l=a.a?1:0
s=a.b?1:0
r=a.c?1:0
q=a.d?1:0
p=a.e?1:0
o=t?1:0
n=u.S
m=A.m(["high_risk_surgery",l,"ischemic_heart_disease",s,"heart_failure",r,"cerebrovascular_disease",q,"insulin_therapy",p,"creatinine_above_2",o],u.N,n)
return new A.a1(new A.C(m,A.u(m).h("C<2>")).D(0,0,new A.dD(),n),m,null,B.c)},
iJ(a){var t,s,r,q,p=a.length
if(p!==12)throw A.f(B.b0)
for(t=0,s=0;s<p;++s)if(a[s]){if(!(s<12))return A.B(B.ag,s)
t+=B.ag[s]}r=0.43*t+9.6
q=r/3.5
A.a(t,2)
A.a(t,2)
A.a(r,1)
A.a(r,1)
A.a(q,1)
return new A.cD(t,r,q,t<=34)},
iD(a,b,c,d,e){var t,s,r,q,p,o,n=a!=null
if(n)A.b("age",a,0,120)
t=b?1:0
s=d?1:0
r=c?1:0
q=e?1:0
p=u.S
o=A.m(["female",t,"non_smoker",s,"history",r,"postoperative_opioids",q],u.N,p)
p=new A.C(o,A.u(o).h("C<2>")).D(0,0,new A.dj(),p)
q=A.d([],u.r)
if(n&&a<18)q.push(B.bu)
return new A.a1(p,o,null,q)},
ju(a,b,c){var t,s,r,q,p,o,n=A.h3(B.B,a,c),m=n.a
if(!(m>0))throw A.f(B.aZ)
for(t=b.length,s=0;s<t;++s){r=b[s]
if(!(r>0))throw A.f(B.aY)
if(isNaN(r)||r<0||r>20)A.o(A.V("out_of_range:ml_per_kg",A.r(r)+" not in [0, 20]"))}q=u.i
p=A.ad(q,q)
for(s=0;o=b.length,s<o;b.length===t||(0,A.v)(b),++s){r=b[s]
p.j(0,r,m*r)}t=A.ad(q,u.y)
for(s=0;s<b.length;b.length===o||(0,A.v)(b),++s){r=b[s]
t.j(0,r,r>=4&&r<=8)}return new A.d3(m,p,t,n.d)},
cZ:function cZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dD:function dD(){},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(){},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c(a,b){var t=a.i(0,b)
if(typeof t=="number")return t
throw A.f(A.V("missing:"+b,""))},
h(a,b){var t=A.bX(a.i(0,b))
return t==null?null:t},
E(a,b){var t=A.dd(a.i(0,b))
return t===!0},
bj(a,b,c,d,e){var t=A.eY(b.i(0,c))
return t==null?d:A.P(a,t,e)},
L(a){var t,s,r,q=A.d([],u.s)
for(t=a.d,s=t.length,r=0;r<t.length;t.length===s||(0,A.v)(t),++r)q.push(t[r].b)
return A.m(["value",a.a,"unit",a.b,"steps",a.c,"warnings",q],u.N,u.X)},
ah(a){var t,s,r,q=A.d([],u.s)
for(t=a.d,s=t.length,r=0;r<t.length;t.length===s||(0,A.v)(t),++r)q.push(t[r].b)
return A.m(["total",a.a,"breakdown",a.b,"meets_threshold",a.c,"warnings",q],u.N,u.X)},
f0(a){return u.f.a(a.i(0,"items")).M(0,new A.dg(),u.N,u.S)},
f2(a){return new A.d1(A.c(a,"drug_amount"),A.P(B.cP,A.w(a.i(0,"amount_unit")),u.A),A.c(a,"volume_ml"))},
je(){var t=$.eJ(),s=A.u(t).h("X<1>")
return new A.ap(new A.X(t,s),s.h("F(q.E)").a(new A.eG()),s.h("ap<q.E>"))},
fO(a){var t,s,r,q=A.d([],u.s)
for(t=a.r,s=t.length,r=0;r<t.length;t.length===s||(0,A.v)(t),++r)q.push(t[r].b)
return A.m(["total",a.a,"breakdown",a.b,"cutoff",a.c,"meets_cutoff",a.d,"missing",a.e,"max_possible",a.f,"warnings",q],u.N,u.X)},
jf(a,b){var t,s,r,q=$.eJ().i(0,a)
if(q==null)return A.m(["error","unknown_id:"+a],u.N,u.X)
try{s=q.$1(b)
return s}catch(r){s=A.fa(r)
if(s instanceof A.i){t=s
return A.m(["error",t.a],u.N,u.X)}else throw r}},
dg:function dg(){},
eG:function eG(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dS:function dS(){},
e2:function e2(){},
ed:function ed(){},
eo:function eo(){},
ez:function ez(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
dE:function dE(){},
eb:function eb(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
aH:function aH(a,b){this.a=a
this.b=b},
j8(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l={}
A.b("pao2",e,10,700)
A.b("fio2",c,0.21,1)
A.b("peep",f,0,40)
t=b==null
s=!t
if(s)A.b("barometric_pressure",b,400,800)
r=e/c
q=A.d(["P/F = "+A.a(e,4)+" \xf7 "+A.a(c,4)+" = "+A.a(r,0)],u.s)
l.a=null
p=a===!0
if(p&&s){o=l.a=r*b/760
s="\u6a19\u9ad8\u88dc\u6b63 = "+A.a(r,0)+" \xd7 "+A.a(b,4)+" \xf7 760 = "+A.a(o,0)
n="Altitude-corrected = "+A.a(r,0)+" \xd7 "+A.a(b,4)+" \xf7 760 = "+A.a(o,0)
B.a.l(q,$.z===B.b?n:s)
m=o}else m=null
if(m==null)m=r
l=new A.dA(l,r,q,p&&t)
if(m>300)return l.$1(B.aw)
if(f<5)return l.$2(null,B.ar)
if(m>200)return l.$1(B.at)
if(!d)return l.$2(null,B.as)
if(m>100)return l.$1(B.au)
return l.$1(B.av)},
aj:function aj(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b){this.a=a
this.b=b},
V(a,b){return new A.i(a,b)},
b(a,b,c,d){if(isNaN(b)||b<c||b>d)throw A.f(A.V("out_of_range:"+a,A.r(b)+" not in ["+A.r(c)+", "+A.r(d)+"]"))},
a(a,b){var t
if(a===B.e.aJ(a)&&Math.abs(a)<1e15)return B.p.k(B.e.N(a))
t=B.e.aK(a,b)
return B.n.A(t,".")?B.n.ag(B.n.ag(t,A.fv("0+$"),""),A.fv("\\.$"),""):t},
br:function br(a,b){this.a=a
this.b=b},
H:function H(a,b){this.a=a
this.b=b},
i:function i(a,b){this.a=a
this.b=b},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl(a,b){A.b("pf_ratio",a,10,700)
if(a<100&&b)return 4
if(a<200&&b)return 3
if(a<300)return 2
if(a<400)return 1
return 0},
jj(a){A.b("platelets",a,0,2000)
if(a<20)return 4
if(a<50)return 3
if(a<100)return 2
if(a<150)return 1
return 0},
jk(a){A.b("bilirubin",a,0,80)
if(a>=12)return 4
if(a>=6)return 3
if(a>=2)return 2
if(a>=1.2)return 1
return 0},
jh(a,b,c,d,e){var t,s,r,q
for(t=[new A.e("dopamine",b),new A.e("dobutamine",a),new A.e("epinephrine",c),new A.e("norepinephrine",e)],s=0;s<4;++s){r=t[s]
q=r.b
if(isNaN(q)||q<0||q>100)A.o(A.V("out_of_range:"+r.a,A.r(q)+" not in [0, 100]"))}t=d!=null
if(t)A.b("map",d,10,250)
if(b>15||c>0.1||e>0.1)return 4
if(b>5||c>0||e>0)return 3
if(b>0||a>0)return 2
if(t&&d<70)return 1
return 0},
ji(a){A.b("gcs",a,3,15)
if(a<6)return 4
if(a<=9)return 3
if(a<=12)return 2
if(a<=14)return 1
return 0},
jg(a,b,c){var t,s,r,q,p,o,n=u.S,m=A.ad(u.N,n),l=A.d([],u.r),k=a.a
if(k!=null){t=a.b
m.j(0,"respiration",A.jl(k,t))
if(!t&&k<200)B.a.l(l,B.bv)}k=a.c
if(k!=null)m.j(0,"coagulation",A.jj(k))
k=a.d
if(k!=null)m.j(0,"liver",A.jk(k))
m.j(0,"cardiovascular",A.jh(a.r,a.f,a.w,a.e,a.x))
k=a.y
if(k!=null)m.j(0,"cns",A.ji(k))
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
m.j(0,"renal",r>q?r:q)}p=new A.C(m,m.$ti.h("C<2>")).D(0,0,new A.eH(),n)
n=b==null
if(n&&c)throw A.f(B.aF)
o=n?0:b
A.b("sofa_baseline",o,0,24)
return new A.a1(p,m,p-o>=2,l)},
jb(a,b,c){var t,s,r,q,p,o,n="respiratory_rate"
A.b(n,b,0,80)
A.b("sbp",c,20,300)
t=b>=22?1:0
s=a?1:0
r=c<=100?1:0
q=u.S
p=A.m([n,t,"mentation",s,"sbp",r],u.N,q)
o=new A.C(p,A.u(p).h("C<2>")).D(0,0,new A.dC(),q)
return new A.a1(o,p,o>=2,B.c)},
aa(a,b){var t,s,r,q
for(t=b.length,s=0;s<t;++s){r=b[s]
q=r.b
if(a>=r.a)return q}throw A.f(A.V("band_not_found",A.r(a)))},
iC(a,b,c){A.b("fio2",b,0.21,1)
if(b>=0.5){if(a==null)throw A.f(B.bc)
A.b("aado2",a,-50,700)
return A.aa(a,A.d([B.dE,B.dt,B.dj,B.dU],u.p))}if(c==null)throw A.f(B.b6)
A.b("pao2",c,10,700)
if(c>70)return 0
if(c>=61)return 1
if(c>=55)return 3
return 4},
iA(a){A.b("age",a,0,120)
if(a>=75)return 6
if(a>=65)return 5
if(a>=55)return 3
if(a>=45)return 2
return 0},
iB(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="respiratory_rate",c=a.ay
A.b("gcs",c,3,15)
t=a.w
if(t!=null){A.b("ph",t,6.5,8)
s=A.aa(t,A.d([B.dV,B.e_,B.dN,B.dM,B.dS,B.dP,B.o],u.p))}else{t=a.x
if(t!=null){A.b("bicarbonate",t,1,80)
s=A.aa(t,A.d([B.dG,B.dB,B.dq,B.dk,B.dh,B.de,B.o],u.p))}else throw A.f(B.bj)}t=a.a
A.b("temperature",t,20,45)
r=u.p
t=A.aa(t,A.d([B.dC,B.dw,B.dZ,B.dv,B.ds,B.dr,B.dp,B.o],r))
q=a.b
A.b("map",q,10,300)
q=A.aa(q,A.d([B.dg,B.d9,B.ak,B.ao,B.an,B.o],r))
p=a.c
A.b("heart_rate",p,0,300)
p=A.aa(p,A.d([B.al,B.da,B.ak,B.ao,B.dH,B.dz,B.o],r))
o=a.d
A.b(d,o,0,80)
o=A.aa(o,A.d([B.dF,B.du,B.dl,B.d7,B.d4,B.dJ,B.o],r))
n=A.iC(a.f,a.e,a.r)
m=a.y
A.b("sodium",m,90,220)
m=A.aa(m,A.d([B.al,B.df,B.dc,B.db,B.d8,B.d6,B.d5,B.o],r))
l=a.z
A.b("potassium",l,1,12)
l=A.aa(l,A.d([B.dL,B.dK,B.e1,B.dO,B.dy,B.dQ,B.o],r))
k=a.Q
A.b("creatinine",k,0.1,30)
j=A.aa(k,A.d([B.dR,B.dm,B.d3,B.dT,B.dY],r))
k=a.as?j*2:j
i=a.at
A.b("hematocrit",i,5,80)
i=A.aa(i,A.d([B.dI,B.an,B.dD,B.dn,B.am,B.o],r))
h=a.ax
A.b("wbc",h,0,500)
r=A.aa(h,A.d([B.dA,B.am,B.dd,B.dx,B.di,B.o],r))
h=A.iA(a.ch)
g=a.CW
if(!(g.a||g.b||g.c||g.d||g.e))g=0
else g=a.cx===B.U?2:5
f=u.S
e=A.m(["temperature",t,"map",q,"heart_rate",p,d,o,"oxygenation",n,"acid_base",s,"sodium",m,"potassium",l,"creatinine",k,"hematocrit",i,"wbc",r,"gcs",15-c,"age",h,"chronic_health",g],u.N,f)
return new A.a1(new A.C(e,A.u(e).h("C<2>")).D(0,0,new A.di(),f),e,null,B.c)},
h4(a,b,c,d,e,f){var t,s,r,q,p,o,n,m
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
n.j(0,"il6",e>=400?1:0)}m=new A.C(n,A.u(n).h("C<2>")).D(0,0,new A.dx(),o)
return new A.a1(m,n,m>=(t?6:5),B.c)},
d0:function d0(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
eH:function eH(){},
dC:function dC(){},
aq:function aq(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cz:function cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
di:function di(){},
dx:function dx(){},
j5(){var t,s,r="Attempting to rewrap a JS function.",q={},p=new A.dv()
if(typeof p=="function")A.o(A.eK(r))
t=function(a,b){return function(c,d){return a(b,c,d,arguments.length)}}(A.i1,p)
s=$.fb()
t[s]=p
q.runCalc=t
p=new A.dw()
if(typeof p=="function")A.o(A.eK(r))
t=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.i0,p)
t[s]=p
q.setLanguage=t
p=A.je()
p=A.cT(p,p.$ti.h("q.E"))
q.releaseIds=B.z.a5(p,null)
p=$.eJ()
s=A.u(p).h("X<1>")
p=A.cT(new A.X(p,s),s.h("q.E"))
q.registryIds=B.z.a5(p,null)
v.G.periopEngine=q},
dv:function dv(){},
dw:function dw(){},
jt(a){throw A.R(new A.ch("Field '"+a+"' has been assigned during initialization."),new Error())},
i0(a,b,c){u.Z.a(a)
if(A.D(c)>=1)return a.$1(b)
return a.$0()},
i1(a,b,c,d){u.Z.a(a)
A.D(d)
if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.eM.prototype={}
J.c9.prototype={
K(a,b){return a===b},
gu(a){return A.bE(a)},
k(a){return"Instance of '"+A.ci(a)+"'"},
gJ(a){return A.aY(A.eZ(this))}}
J.cb.prototype={
k(a){return String(a)},
gu(a){return a?519018:218159},
gJ(a){return A.aY(u.y)},
$ian:1,
$iF:1}
J.bu.prototype={
K(a,b){return null==b},
k(a){return"null"},
gu(a){return 0},
$ian:1}
J.bb.prototype={$ib9:1}
J.aw.prototype={
gu(a){return 0},
k(a){return String(a)}}
J.cY.prototype={}
J.ay.prototype={}
J.bx.prototype={
k(a){var t=a[$.h7()]
if(t==null)t=a[$.fb()]
if(t==null)return this.ak(a)
return"JavaScript function for "+J.bZ(t)},
$ib7:1}
J.l.prototype={
l(a,b){A.ag(a).c.a(b)
a.$flags&1&&A.f9(a,29)
a.push(b)},
P(a,b){A.ag(a).h("q<1>").a(b)
a.$flags&1&&A.f9(a,"addAll",2)
this.am(a,b)
return},
am(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.f(A.a6(a))
for(s=0;s<t;++s)a.push(b[s])},
aI(a){var t,s=A.fr(a.length,"",u.N)
for(t=0;t<a.length;++t)this.j(s,t,A.r(a[t]))
return s.join("")},
D(a,b,c,d){var t,s,r
d.a(b)
A.ag(a).C(d).h("1(1,2)").a(c)
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw A.f(A.a6(a))}return s},
R(a,b){var t,s
A.ag(a).h("F(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw A.f(A.a6(a))}return!1},
aE(a,b){var t,s
A.ag(a).h("F(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(!b.$1(a[s]))return!1
if(a.length!==t)throw A.f(A.a6(a))}return!0},
k(a){return A.fm(a,"[","]")},
gt(a){return new J.aD(a,a.length,A.ag(a).h("aD<1>"))},
gu(a){return A.bE(a)},
gp(a){return a.length},
j(a,b,c){A.ag(a).c.a(c)
a.$flags&2&&A.f9(a)
if(!(b>=0&&b<a.length))throw A.f(A.h_(a,b))
a[b]=c},
$iq:1,
$ia7:1}
J.ca.prototype={
aL(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.ci(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.cJ.prototype={}
J.aD.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.v(r)
throw A.f(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0},
$iS:1}
J.bw.prototype={
a3(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=B.p.gV(b)
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
return t+0}throw A.f(A.fz(""+a+".toInt()"))},
E(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.fz(""+a+".round()"))},
aJ(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
S(a,b,c){if(B.p.a3(b,c)>0)throw A.f(A.fY(b))
if(this.a3(a,b)<0)return b
if(this.a3(a,c)>0)return c
return a},
aK(a,b){var t
if(b>20)throw A.f(A.cj(b,0,20,"fractionDigits",null))
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
gJ(a){return A.aY(u.H)},
$ip:1,
$ib0:1}
J.b8.prototype={
ga7(a){var t
if(a>0)t=1
else t=a<0?-1:a
return t},
gJ(a){return A.aY(u.S)},
$ian:1,
$iO:1}
J.bv.prototype={
gJ(a){return A.aY(u.i)},
$ian:1}
J.ba.prototype={
aD(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.aj(a,s-t)},
ag(a,b,c){return A.jo(a,b,c,0)},
I(a,b,c){return a.substring(b,A.hz(b,c,a.length))},
aj(a,b){return this.I(a,b,null)},
A(a,b){return A.jm(a,b,0)},
k(a){return a},
gu(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gJ(a){return A.aY(u.N)},
gp(a){return a.length},
$ian:1,
$icX:1,
$ik:1}
A.ch.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.d_.prototype={}
A.bq.prototype={}
A.aQ.prototype={
gt(a){var t=this
return new A.bB(t,t.gp(t),A.u(t).h("bB<aQ.E>"))},
gG(a){return this.gp(this)===0}}
A.bB.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.gp(r)
if(s.b!==q)throw A.f(A.a6(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r.a4(0,t);++s.c
return!0},
$iS:1}
A.ap.prototype={
gt(a){return new A.bN(J.cy(this.a),this.b,this.$ti.h("bN<1>"))}}
A.bN.prototype={
n(){var t,s
for(t=this.a,s=this.b;t.n();)if(s.$1(t.gq()))return!0
return!1},
gq(){return this.a.gq()},
$iS:1}
A.e.prototype={$r:"+(1,2)",$s:1}
A.I.prototype={$r:"+(1,2,3,4)",$s:2}
A.bo.prototype={}
A.b4.prototype={
gG(a){return this.gp(this)===0},
k(a){return A.cU(this)},
M(a,b,c,d){var t=A.ad(c,d)
this.B(0,new A.cC(this,A.u(this).C(c).C(d).h("N<1,2>(3,4)").a(b),t))
return t},
$iy:1}
A.cC.prototype={
$2(a,b){var t=A.u(this.a),s=this.b.$2(t.c.a(a),t.y[1].a(b))
this.c.j(0,s.a,s.b)},
$S(){return A.u(this.a).h("~(1,2)")}}
A.aF.prototype={
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
A.aU.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t=this,s=t.c
if(s>=t.b){t.d=null
return!1}t.d=t.a[s]
t.c=s+1
return!0},
$iS:1}
A.bs.prototype={
L(){var t=this,s=t.$map
if(s==null){s=new A.aM(t.$ti.h("aM<1,2>"))
A.h1(t.a,s)
t.$map=s}return s},
v(a){return this.L().v(a)},
i(a,b){return this.L().i(0,b)},
B(a,b){this.$ti.h("~(1,2)").a(b)
this.L().B(0,b)},
gp(a){return this.L().a}}
A.b5.prototype={}
A.b6.prototype={
gp(a){return this.b},
gt(a){var t,s=this,r=s.$keys
if(r==null){r=Object.keys(s.a)
s.$keys=r}t=r
return new A.aU(t,t.length,s.$ti.h("aU<1>"))},
A(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.bt.prototype={
gp(a){return this.a.length},
gt(a){var t=this.a
return new A.aU(t,t.length,this.$ti.h("aU<1>"))},
L(){var t,s,r,q,p=this,o=p.$map
if(o==null){o=new A.aM(p.$ti.h("aM<1,1>"))
for(t=p.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.v)(t),++r){q=t[r]
o.j(0,q,q)}p.$map=o}return o},
A(a,b){return this.L().v(b)}}
A.bG.prototype={}
A.d4.prototype={
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
A.bC.prototype={
k(a){return"Null check operator used on a null value"}}
A.cd.prototype={
k(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.cn.prototype={
k(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.cW.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.as.prototype={
k(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.h6(s==null?"unknown":s)+"'"},
$ib7:1,
gaO(){return this},
$C:"$1",
$R:1,
$D:null}
A.c1.prototype={$C:"$2",$R:2}
A.cm.prototype={}
A.cl.prototype={
k(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.h6(t)+"'"}}
A.b2.prototype={
K(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b2))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.f8(this.a)^A.bE(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ci(this.a)+"'")}}
A.ck.prototype={
k(a){return"RuntimeError: "+this.a}}
A.a_.prototype={
gp(a){return this.a},
gG(a){return this.a===0},
gH(){return new A.X(this,A.u(this).h("X<1>"))},
v(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.aF(a)},
aF(a){var t=this.d
if(t==null)return!1
return this.U(t[this.T(a)],a)>=0},
P(a,b){A.u(this).h("y<1,2>").a(b).B(0,new A.cK(this))},
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
j(a,b,c){var t,s,r=this,q=A.u(r)
q.c.a(b)
q.y[1].a(c)
if(typeof b=="string"){t=r.b
r.a8(t==null?r.b=r.a1():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.a8(s==null?r.c=r.a1():s,b,c)}else r.aH(b,c)},
aH(a,b){var t,s,r,q,p=this,o=A.u(p)
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
A.u(r).h("~(1,2)").a(b)
t=r.e
s=r.r
while(t!=null){b.$2(t.a,t.b)
if(s!==r.r)throw A.f(A.a6(r))
t=t.c}},
a8(a,b,c){var t,s=A.u(this)
s.c.a(b)
s.y[1].a(c)
t=a[b]
if(t==null)a[b]=this.a2(b,c)
else t.b=c},
a2(a,b){var t=this,s=A.u(t),r=new A.cR(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
T(a){return J.a4(a)&1073741823},
U(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a3(a[s].a,b))return s
return-1},
k(a){return A.cU(this)},
a1(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$ieO:1}
A.cK.prototype={
$2(a,b){var t=this.a,s=A.u(t)
t.j(0,s.c.a(a),s.y[1].a(b))},
$S(){return A.u(this.a).h("~(1,2)")}}
A.cR.prototype={}
A.X.prototype={
gp(a){return this.a.a},
gG(a){return this.a.a===0},
gt(a){var t=this.a
return new A.bz(t,t.r,t.e,this.$ti.h("bz<1>"))},
A(a,b){return this.a.v(b)}}
A.bz.prototype={
gq(){return this.d},
n(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.a6(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}},
$iS:1}
A.C.prototype={
gp(a){return this.a.a},
gt(a){var t=this.a
return new A.bA(t,t.r,t.e,this.$ti.h("bA<1>"))}}
A.bA.prototype={
gq(){return this.d},
n(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.a6(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.b
s.c=t.c
return!0}},
$iS:1}
A.aO.prototype={
gp(a){return this.a.a},
gt(a){var t=this.a
return new A.aP(t,t.r,t.e,this.$ti.h("aP<1,2>"))}}
A.aP.prototype={
gq(){var t=this.d
t.toString
return t},
n(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.a6(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=new A.N(t.a,t.b,s.$ti.h("N<1,2>"))
s.c=t.c
return!0}},
$iS:1}
A.aM.prototype={
T(a){return A.iF(a)&1073741823},
U(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a3(a[s].a,b))return s
return-1}}
A.af.prototype={
k(a){return this.ae(!1)},
ae(a){var t,s,r,q,p,o=this.ap(),n=this.a0(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.B(n,r)
p=n[r]
m=a?m+A.fu(p):m+A.r(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
ap(){var t,s=this.$s
while($.da.length<=s)B.a.l($.da,null)
t=$.da[s]
if(t==null){t=this.an()
B.a.j($.da,s,t)}return t},
an(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.d(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.a.j(l,r,s[t])}}l=A.eQ(l,!1,u.K)
l.$flags=3
return l}}
A.bg.prototype={
a0(){return[this.a,this.b]},
K(a,b){if(b==null)return!1
return b instanceof A.bg&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gu(a){return A.fs(this.$s,this.a,this.b,B.u)}}
A.bh.prototype={
a0(){return this.a},
K(a,b){if(b==null)return!1
return b instanceof A.bh&&this.$s===b.$s&&A.hM(this.a,b.a)},
gu(a){return A.fs(this.$s,A.hx(this.a),B.u,B.u)}}
A.cc.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gar(){var t=this,s=t.c
if(s!=null)return s
s=t.b
return t.c=A.fn(t.a,s.multiline,!s.ignoreCase,s.unicode,s.dotAll,"g")},
aa(a,b){var t,s=this.gar()
if(s==null)s=A.eX(s)
s.lastIndex=b
t=s.exec(a)
if(t==null)return null
return new A.cu(t)},
$icX:1,
$ihA:1}
A.cu.prototype={
gaf(){var t=this.b
return t.index+t[0].length},
$ieR:1}
A.d6.prototype={
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
if(o<s){if(!(r>=0&&r<s))return A.B(m,r)
r=m.charCodeAt(r)
if(r>=55296&&r<=56319){if(!(o>=0))return A.B(m,o)
t=m.charCodeAt(o)
t=t>=56320&&t<=57343}}}p=(t?p+1:p)+1}n.c=p
return!0}}n.b=n.d=null
return!1},
$iS:1}
A.a9.prototype={
h(a){return A.bU(v.typeUniverse,this,a)},
C(a){return A.fK(v.typeUniverse,this,a)}}
A.cq.prototype={}
A.cv.prototype={
k(a){return A.Y(this.a,null)}}
A.cp.prototype={
k(a){return this.a}}
A.bQ.prototype={}
A.az.prototype={
gt(a){var t=this,s=new A.aV(t,t.r,t.$ti.h("aV<1>"))
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
return this.ab(t[J.a4(a)&1073741823],a)>=0},
l(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a9(t==null?r.b=A.eT():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a9(s==null?r.c=A.eT():s,b)}else return r.al(b)},
al(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.eT()
s=J.a4(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.Y(a)]
else{if(q.ab(r,a)>=0)return!1
r.push(q.Y(a))}return!0},
a9(a,b){this.$ti.c.a(b)
if(u.g.a(a[b])!=null)return!1
a[b]=this.Y(b)
return!0},
Y(a){var t=this,s=new A.ct(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
ab(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a3(a[s].a,b))return s
return-1},
$ifq:1}
A.ct.prototype={}
A.aV.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.f(A.a6(r))
else if(s==null){t.d=null
return!1}else{t.d=t.$ti.h("1?").a(s.a)
t.c=s.b
return!0}},
$iS:1}
A.cS.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:7}
A.M.prototype={
B(a,b){var t,s,r,q=A.u(this)
q.h("~(M.K,M.V)").a(b)
for(t=this.gH(),t=t.gt(t),q=q.h("M.V");t.n();){s=t.gq()
r=this.i(0,s)
b.$2(s,r==null?q.a(r):r)}},
M(a,b,c,d){var t,s,r,q,p,o=A.u(this)
o.C(c).C(d).h("N<1,2>(M.K,M.V)").a(b)
t=A.ad(c,d)
for(s=this.gH(),s=s.gt(s),o=o.h("M.V");s.n();){r=s.gq()
q=this.i(0,r)
p=b.$2(r,q==null?o.a(q):q)
t.j(0,p.a,p.b)}return t},
v(a){return this.gH().A(0,a)},
gp(a){var t=this.gH()
return t.gp(t)},
gG(a){var t=this.gH()
return t.gG(t)},
k(a){return A.cU(this)},
$iy:1}
A.cV.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.r(a)
s.a=(s.a+=t)+": "
t=A.r(b)
s.a+=t},
$S:4}
A.bV.prototype={}
A.bc.prototype={
i(a,b){return this.a.i(0,b)},
v(a){return this.a.v(a)},
B(a,b){this.a.B(0,this.$ti.h("~(1,2)").a(b))},
gG(a){return this.a.a===0},
gp(a){return this.a.a},
k(a){return A.cU(this.a)},
M(a,b,c,d){return this.a.M(0,this.$ti.C(c).C(d).h("N<1,2>(3,4)").a(b),c,d)},
$iy:1}
A.bL.prototype={}
A.al.prototype={
k(a){return A.fm(this,"{","}")},
R(a,b){var t
A.u(this).h("F(1)").a(b)
for(t=this.gt(this);t.n();)if(b.$1(t.gq()))return!0
return!1},
$iq:1,
$iax:1}
A.bP.prototype={}
A.bi.prototype={}
A.cr.prototype={
i(a,b){var t,s=this.b
if(s==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.au(b):t}},
gp(a){return this.b==null?this.c.a:this.O().length},
gG(a){return this.gp(0)===0},
gH(){if(this.b==null){var t=this.c
return new A.X(t,A.u(t).h("X<1>"))}return new A.cs(this)},
v(a){if(this.b==null)return this.c.v(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
B(a,b){var t,s,r,q,p=this
u.cQ.a(b)
if(p.b==null)return p.c.B(0,b)
t=p.O()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=A.de(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw A.f(A.a6(p))}},
O(){var t=u.aL.a(this.c)
if(t==null)t=this.c=A.d(Object.keys(this.a),u.s)
return t},
au(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=A.de(this.a[a])
return this.b[a]=t}}
A.cs.prototype={
gp(a){return this.a.gp(0)},
a4(a,b){var t=this.a
if(t.b==null)t=t.gH().a4(0,b)
else{t=t.O()
if(!(b<t.length))return A.B(t,b)
t=t[b]}return t},
gt(a){var t=this.a
if(t.b==null){t=t.gH()
t=t.gt(t)}else{t=t.O()
t=new J.aD(t,t.length,A.ag(t).h("aD<1>"))}return t},
A(a,b){return this.a.v(b)}}
A.c2.prototype={}
A.c5.prototype={}
A.by.prototype={
k(a){var t=A.c7(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
A.ce.prototype={
k(a){return"Cyclic error in JSON stringify"}}
A.cL.prototype={
aA(a,b){var t=A.ir(a,this.gaB().a)
return t},
a5(a,b){var t=A.hE(a,this.gaC().b,null)
return t},
gaC(){return B.cg},
gaB(){return B.cf}}
A.cN.prototype={}
A.cM.prototype={}
A.d8.prototype={
ai(a){var t,s,r,q,p,o,n=a.length
for(t=this.c,s=0,r=0;r<n;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<n&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)t.a+=B.n.I(a,s,r)
s=r+1
p=A.Q(92)
t.a+=p
p=A.Q(117)
t.a+=p
p=A.Q(100)
t.a+=p
p=q>>>8&15
p=A.Q(p<10?48+p:87+p)
t.a+=p
p=q>>>4&15
p=A.Q(p<10?48+p:87+p)
t.a+=p
p=q&15
p=A.Q(p<10?48+p:87+p)
t.a+=p}}continue}if(q<32){if(r>s)t.a+=B.n.I(a,s,r)
s=r+1
p=A.Q(92)
t.a+=p
switch(q){case 8:p=A.Q(98)
t.a+=p
break
case 9:p=A.Q(116)
t.a+=p
break
case 10:p=A.Q(110)
t.a+=p
break
case 12:p=A.Q(102)
t.a+=p
break
case 13:p=A.Q(114)
t.a+=p
break
default:p=A.Q(117)
t.a+=p
p=A.Q(48)
t.a=(t.a+=p)+p
p=q>>>4&15
p=A.Q(p<10?48+p:87+p)
t.a+=p
p=q&15
p=A.Q(p<10?48+p:87+p)
t.a+=p
break}}else if(q===34||q===92){if(r>s)t.a+=B.n.I(a,s,r)
s=r+1
p=A.Q(92)
t.a+=p
p=A.Q(q)
t.a+=p}}if(s===0)t.a+=a
else if(s<n)t.a+=B.n.I(a,s,n)},
X(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw A.f(new A.ce(a,null))}B.a.l(t,a)},
W(a){var t,s,r,q,p=this
if(p.ah(a))return
p.X(a)
try{t=p.b.$1(a)
if(!p.ah(t)){r=A.fo(a,null,p.gac())
throw A.f(r)}r=p.a
if(0>=r.length)return A.B(r,-1)
r.pop()}catch(q){s=A.fa(q)
r=A.fo(a,s,p.gac())
throw A.f(r)}},
ah(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=B.e.k(a)
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
if(0>=t.length)return A.B(t,-1)
t.pop()
return!0}else if(u.bC.b(a)){r.X(a)
s=r.aN(a)
t=r.a
if(0>=t.length)return A.B(t,-1)
t.pop()
return s}else return!1},
aM(a){var t,s,r=this.c
r.a+="["
t=a.length
if(t!==0){if(0>=t)return A.B(a,0)
this.W(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.W(a[s])}}r.a+="]"},
aN(a){var t,s,r,q,p,o,n=this,m={}
if(a.gG(a)){n.c.a+="{}"
return!0}t=a.gp(a)*2
s=A.fr(t,null,u.X)
r=m.a=0
m.b=!0
a.B(0,new A.d9(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.ai(A.w(s[r]))
q.a+='":'
o=r+1
if(!(o<t))return A.B(s,o)
n.W(s[o])}q.a+="}"
return!0}}
A.d9.prototype={
$2(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
B.a.j(t,s.a++,a)
B.a.j(t,s.a++,b)},
$S:4}
A.d7.prototype={
gac(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
A.co.prototype={
k(a){return this.m()},
$it:1}
A.G.prototype={}
A.c_.prototype={
k(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.c7(t)
return"Assertion failed"}}
A.bK.prototype={}
A.ai.prototype={
ga_(){return"Invalid argument"+(!this.a?"(s)":"")},
gZ(){return""},
k(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.ga_()+r+p
if(!t.a)return o
return o+t.gZ()+": "+A.c7(t.ga6())},
ga6(){return this.b}}
A.bF.prototype={
ga6(){return A.bX(this.b)},
ga_(){return"RangeError"},
gZ(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.r(r):""
else if(r==null)t=": Not greater than or equal to "+A.r(s)
else if(r>s)t=": Not in inclusive range "+A.r(s)+".."+A.r(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.r(s)
return t}}
A.c8.prototype={
ga6(){return A.D(this.b)},
ga_(){return"RangeError"},
gZ(){if(A.D(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.bM.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.c4.prototype={
k(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c7(t)+"."}}
A.bJ.prototype={
k(a){return"Stack Overflow"},
$iG:1}
A.cF.prototype={
k(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(typeof r=="string"){if(r.length>78)r=B.n.I(r,0,75)+"..."
return s+"\n"+r}else return s}}
A.q.prototype={
D(a,b,c,d){var t,s
d.a(b)
A.u(this).C(d).h("1(1,q.E)").a(c)
for(t=this.gt(this),s=b;t.n();)s=c.$2(s,t.gq())
return s},
gp(a){var t,s=this.gt(this)
for(t=0;s.n();)++t
return t},
a4(a,b){var t,s
A.hy(b,"index")
t=this.gt(this)
for(s=b;t.n();){if(s===0)return t.gq();--s}throw A.f(A.fl(b,b-s,this,"index"))},
k(a){return A.hu(this,"(",")")}}
A.N.prototype={
k(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.aR.prototype={
gu(a){return A.n.prototype.gu.call(this,0)},
k(a){return"null"}}
A.n.prototype={$in:1,
K(a,b){return this===b},
gu(a){return A.bE(this)},
k(a){return"Instance of '"+A.ci(this)+"'"},
gJ(a){return A.iT(this)},
toString(){return this.k(this)}}
A.be.prototype={
gp(a){return this.a.length},
k(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$ihC:1}
A.a8.prototype={
m(){return"PrimaryDisorder."+this.b}}
A.b3.prototype={
m(){return"Compensation."+this.b}}
A.cB.prototype={}
A.cI.prototype={}
A.dp.prototype={
$2(a,b){if(b!=null&&!(b>0))throw A.f(A.V("not_positive:"+a,""))},
$S:8}
A.ar.prototype={
m(){return"AmountUnit."+this.b}}
A.T.prototype={
m(){return"DoseUnit."+this.b}}
A.bO.prototype={
m(){return"_Dim."+this.b}}
A.d1.prototype={}
A.dz.prototype={
$4(a,b,c,d){var t
if(!c)return a*b*d
t=this.a
if(t==null||!(t>0))throw A.f(B.aE)
return a*b*d*t},
$S:5}
A.dy.prototype={
$4(a,b,c,d){return this.a?a*b*d:this.b.$4(a,b,c,d)},
$S:5}
A.c3.prototype={}
A.bn.prototype={}
A.eI.prototype={
$2(a,b){var t,s
A.w(a)
A.bW(b)
if(b<0||!isFinite(b))throw A.f(A.V("out_of_range:composition",a))
t=this.b
s=t.i(0,a)
if(s==null)s=0
t.j(0,a,s+b*this.a.a)},
$S:9}
A.cg.prototype={}
A.bI.prototype={}
A.cQ.prototype={}
A.aI.prototype={
m(){return"DropFactor."+this.b}}
A.bp.prototype={}
A.aJ.prototype={
m(){return"GlucoseNaCoefficient."+this.b}}
A.ae.prototype={
m(){return"TbwGroup."+this.b}}
A.aG.prototype={
m(){return"CorrectedCaFormula."+this.b}}
A.aT.prototype={
m(){return"PotassiumLimitItem."+this.b}}
A.cG.prototype={}
A.dm.prototype={
$2(a,b){return A.b(A.w(a),A.D(b),0,2)},
$S:10}
A.dn.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.av.prototype={
m(){return"JsthDicType."+this.b}}
A.cO.prototype={}
A.c6.prototype={}
A.dr.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.at.prototype={
m(){return"FibrinMarkerRise."+this.b}}
A.dq.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.cH.prototype={}
A.dB.prototype={
$1(a){return A.eW(a)},
$S:11}
A.aS.prototype={
m(){return"PlateletSamplingTime."+this.b}}
A.a0.prototype={
m(){return"LaGroup."+this.b}}
A.W.prototype={
m(){return"LaRoute."+this.b}}
A.aN.prototype={
m(){return"LaRuleKind."+this.b}}
A.ac.prototype={
m(){return"LaNote."+this.b}}
A.bf.prototype={
m(){return"_Form."+this.b}}
A.aA.prototype={}
A.cf.prototype={}
A.cP.prototype={}
A.ds.prototype={
$1(a){var t
u.l.a(a)
if(a.a.A(0,this.a)){t=this.b
t=a.b.R(0,t.gaw(t))}else t=!1
return t},
$S:2}
A.dt.prototype={
$1(a){return u.l.a(a).d===B.i},
$S:2}
A.du.prototype={
$1(a){return u.l.a(a).d===B.S},
$S:2}
A.dh.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.ab.prototype={
m(){return"IcdscConsciousness."+this.b}}
A.U.prototype={
m(){return"JcsLevel."+this.b}}
A.au.prototype={
m(){return"JcsSuffix."+this.b}}
A.cE.prototype={}
A.dk.prototype={
$2(a,b){return A.bW(a)+A.bW(b)},
$S:6}
A.dl.prototype={
$2(a,b){return A.bW(a)+A.bW(b)},
$S:6}
A.bH.prototype={
m(){return"Sex."+this.b}}
A.ak.prototype={
m(){return"JasoBmiClass."+this.b}}
A.aL.prototype={
m(){return"IdealWeightFormula."+this.b}}
A.a5.prototype={
m(){return"BsaFormula."+this.b}}
A.aK.prototype={
m(){return"HarrisBenedictVersion."+this.b}}
A.cZ.prototype={}
A.dD.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.cD.prototype={}
A.dj.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.d3.prototype={}
A.dg.prototype={
$2(a,b){return new A.N(A.w(a),B.e.N(A.aC(b)),u.O)},
$S:12}
A.eG.prototype={
$1(a){return!B.ef.A(0,A.w(a))},
$S:13}
A.dF.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.c(a,"height_cm")
A.bk(null,s,t)
r=s/100
q=t/(r*r)
t=A.L(new A.A(q,"kg/m\xb2",A.d([A.a(t,4)+" \xf7 "+A.a(r,4)+"\xb2 = "+A.a(q,2)],u.s),B.c))
s=A.fp(u.N,u.X)
s.P(0,t)
s.j(0,"class",A.j0(q).b)
return s},
$S:0}
A.dG.prototype={
$1(a){var t,s,r=A.c(u.f.a(a),"height_cm")
A.bk(null,r,null)
t=r/100
s=22*t*t
return A.L(new A.A(s,"kg",A.d(["22 \xd7 "+A.a(t,4)+"\xb2 = "+A.a(s,1)],u.s),B.c))},
$S:0}
A.dH.prototype={
$1(a){var t,s
u.f.a(a)
t=J.a3(a.i(0,"sex"),"female")?B.m:B.k
s=A.c(a,"height_cm")
return A.L(A.h3(A.bj(B.cB,a,"formula",B.B,u.d),s,t))},
$S:0}
A.dS.prototype={
$1(a){var t,s
u.f.a(a)
t=A.c(a,"actual_kg")
s=A.c(a,"ideal_kg")
return A.L(A.iz(t,A.c(a,"factor"),s))},
$S:0}
A.e2.prototype={
$1(a){var t,s,r
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.c(a,"height_cm")
r=A.bj(B.cL,a,"formula",B.X,u.Y)
return A.L(A.iE(A.h(a,"age"),r,s,t))},
$S:0}
A.ed.prototype={
$1(a){var t,s
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.c(a,"per_kg")
return A.L(A.h5(s,$.z===B.b?"kcal/day":"kcal/\u65e5",t))},
$S:0}
A.eo.prototype={
$1(a){var t,s,r
u.f.a(a)
t=J.a3(a.i(0,"sex"),"female")?B.m:B.k
s=A.c(a,"weight_kg")
r=A.c(a,"height_cm")
return A.L(A.iW(A.c(a,"age"),r,t,A.bj(B.cy,a,"version",B.K,u.e),s))},
$S:0}
A.ez.prototype={
$1(a){var t,s,r,q,p,o="basal_kcal"
u.f.a(a)
t=A.c(a,o)
s=A.c(a,"activity")
r=A.c(a,"stress")
A.b(o,t,0,1e4)
A.b("activity_factor",s,0.5,3)
A.b("stress_factor",r,0.5,3)
q=t*s*r
p=$.z===B.b?"kcal/day":"kcal/\u65e5"
return A.L(new A.A(q,p,A.d([A.a(t,0)+" \xd7 "+A.a(s,4)+" \xd7 "+A.a(r,4)+" = "+A.a(q,0)],u.s),B.c))},
$S:0}
A.eD.prototype={
$1(a){var t,s
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.c(a,"per_kg")
return A.L(A.h5(s,$.z===B.b?"g/day":"g/\u65e5",t))},
$S:0}
A.eE.prototype={
$1(a){var t,s,r,q,p,o="total_kcal"
u.f.a(a)
t=A.c(a,o)
s=A.c(a,"amino_acid_g")
A.b(o,t,0,2e4)
A.b("amino_acid",s,0,1000)
if(s===0)A.o(B.aP)
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
A.eF.prototype={
$1(a){var t,s
u.f.a(a)
t=A.c(a,"sodium")
s=A.c(a,"glucose")
return A.L(A.iV(A.bj(B.cv,a,"coefficient",B.J,u.c),s,t))},
$S:0}
A.dI.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.P(B.cF,A.w(a.i(0,"group")),u.am)
A.b("weight",t,0.3,400)
r=A.js(s)
q=t*r
return A.L(new A.A(q,"L",A.d([A.a(t,4)+" \xd7 "+A.a(r,4)+" = "+A.a(q,1)],u.s),B.c))},
$S:0}
A.dJ.prototype={
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
return A.L(new A.A(p,"mEq/L",A.d(["("+A.a(s,4)+" + "+A.a(r,4)+" \u2212 "+A.a(t,4)+") \xf7 ("+A.a(q,1)+" + 1) = "+A.a(p,2)],u.s),B.c))},
$S:0}
A.dK.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="target_change"
u.f.a(a)
t=A.c(a,"change_per_liter")
s=A.c(a,j)
r=A.c(a,"hours")
A.b("hours",r,0.5,168)
A.b(j,s,-50,50)
if(t===0||s===0||J.fd(t)!==J.fd(s))A.o(B.aO)
q=s/t
p=q*1000/r
o=s/r
n=o*Math.min(24,r)
m=o*Math.min(48,r)
o=A.d([],u.r)
l=s>0
if(l&&Math.abs(n)>10)o.push(B.bw)
if(l&&Math.abs(m)>18)o.push(B.bx)
if(s<0)l=Math.abs(s)/r>0.5||Math.abs(n)>10
else l=!1
if(l)o.push(B.by)
A.a(s,4)
A.a(t,2)
A.a(q,2)
A.a(q,2)
A.a(r,4)
A.a(p,0)
A.a(n,1)
A.a(m,1)
A.a(n,1)
A.a(m,1)
t=A.d([],u.s)
for(s=o.length,k=0;k<o.length;o.length===s||(0,A.v)(o),++k)t.push(o[k].b)
return A.m(["volume_l",q,"rate_ml_h",p,"change_first_24h",n,"change_first_48h",m,"warnings",t],u.N,u.X)},
$S:0}
A.dL.prototype={
$1(a){var t
u.f.a(a)
t=A.c(a,"tbw_l")
return A.L(A.iP(A.c(a,"sodium"),t))},
$S:0}
A.dM.prototype={
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
t="\u88dc\u6b63 AG = "+A.a(l,1)+" + 2.5 \xd7 ("+A.a(p,4)+" \u2212 "+A.a(q,4)+") = "+A.a(j,1)
q="Corrected AG = "+A.a(l,1)+" + 2.5 \xd7 ("+A.a(p,4)+" \u2212 "+A.a(q,4)+") = "+A.a(j,1)
B.a.l(k,$.z===B.b?q:t)}else j=null
if(r!==n){i=j==null?l:j
h=(i-o)/(n-r)
B.a.l(k,"\u0394AG/\u0394HCO3 = ("+A.a(i,1)+" \u2212 "+A.a(o,4)+") \xf7 ("+A.a(n,4)+" \u2212 "+A.a(r,4)+") = "+A.a(h,2))}else h=null
return A.m(["ag",l,"albumin_corrected",j,"delta_ratio",h],u.N,u.X)},
$S:0}
A.dN.prototype={
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
t="\u30ae\u30e3\u30c3\u30d7 = "+A.a(q,4)+" \u2212 "+A.a(p,1)+" = "+A.a(n,1)
q="Gap = "+A.a(q,4)+" \u2212 "+A.a(p,1)+" = "+A.a(n,1)
B.a.l(o,$.z===B.b?q:t)}else n=null
return A.m(["calculated",p,"gap",n],u.N,u.X)},
$S:0}
A.dO.prototype={
$1(a){var t
u.f.a(a)
t=A.c(a,"calcium")
return A.L(A.iH(A.c(a,"albumin"),t,A.bj(B.cC,a,"formula",B.H,u.J)))},
$S:0}
A.dP.prototype={
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
m=A.eP(u.Q)
if(s>p)m.l(0,B.cZ)
if(r>o)m.l(0,B.d_)
if(q>n)m.l(0,B.d0)
s=A.hF(m,m.r,m.$ti.c)
r=s.$ti.c
while(s.n()){q=s.d
t.push((q==null?r.a(q):q).b)}return A.m(["exceeded",t],u.N,u.X)},
$S:0}
A.dQ.prototype={
$1(a){var t,s,r,q,p,o,n,m,l
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.h(a,"age")
A.b("weight",t,0.3,400)
r=s!=null
if(r)A.b("age",s,0,120)
q=B.e.S(t,0,10)
p=B.e.S(t-10,0,10)
o=B.e.S(t-20,0,1/0)
n=4*q+2*p+o
m=n*24
l=r&&s>=16
s="4 \xd7 "+A.a(q,4)+" + 2 \xd7 "+A.a(p,4)+" + 1 \xd7 "+A.a(o,4)+" = "+A.a(n,1)+" mL/h\uff081\u65e5 "+A.a(m,0)+" mL\uff09"
r="4 \xd7 "+A.a(q,4)+" + 2 \xd7 "+A.a(p,4)+" + 1 \xd7 "+A.a(o,4)+" = "+A.a(n,1)+" mL/h ("+A.a(m,0)+" mL/day)"
s=A.d([$.z===B.b?r:s],u.s)
r=A.d([],u.r)
if(l&&m/t>30)r.push(B.bA)
if(l&&m>2500)r.push(B.bB)
return A.L(new A.A(n,"mL/h",s,r))},
$S:0}
A.dR.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="creatinine",i=" \xd7 0.739"
u.f.a(a)
t=J.a3(a.i(0,"sex"),"female")?B.m:B.k
s=A.c(a,j)
r=A.c(a,"age")
A.b("age_adult",r,18,120)
A.b(j,s,0.1,30)
q=Math.pow(s,-1.094)
p=Math.pow(r,-0.287)
o=194*q*p
n=t===B.k?o:o*0.739
s=A.a(s,4)
r=A.a(r,4)
t=t===B.m
m=t?i:""
l=A.a(q,4)
k=A.a(p,4)
t=t?i:""
return A.L(new A.A(n,"mL/min/1.73m\xb2",A.d(["194 \xd7 "+s+"^\u22121.094 \xd7 "+r+"^\u22120.287"+m,"= 194 \xd7 "+l+" \xd7 "+k+t+" = "+A.a(n,1)],u.s),B.c))},
$S:0}
A.dT.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="cystatin",i=" \xd7 0.929"
u.f.a(a)
t=J.a3(a.i(0,"sex"),"female")?B.m:B.k
s=A.c(a,j)
r=A.c(a,"age")
A.b("age_adult",r,18,120)
A.b(j,s,0.1,15)
q=Math.pow(s,-1.019)
p=Math.pow(0.996,r)
o=t===B.k?1:0.929
n=104*q*p*o-8
s=A.a(s,4)
r=A.a(r,4)
t=t===B.m
m=t?i:""
l=A.a(q,4)
k=A.a(p,4)
t=t?i:""
return A.L(new A.A(n,"mL/min/1.73m\xb2",A.d(["104 \xd7 "+s+"^\u22121.019 \xd7 0.996^"+r+m+" \u2212 8","= 104 \xd7 "+l+" \xd7 "+k+t+" \u2212 8 = "+A.a(n,1)],u.s),B.c))},
$S:0}
A.dU.prototype={
$1(a){var t,s,r
u.f.a(a)
t=A.c(a,"egfr")
s=A.c(a,"bsa")
A.b("egfr",t,0,300)
A.b("bsa",s,0.1,4)
r=t*s/1.73
return A.L(new A.A(r,"mL/min",A.d([A.a(t,1)+" \xd7 "+A.a(s,3)+" \xf7 1.73 = "+A.a(r,1)],u.s),B.c))},
$S:0}
A.dV.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="creatinine"
u.f.a(a)
t=J.a3(a.i(0,"sex"),"female")?B.m:B.k
s=A.c(a,"age")
r=A.c(a,"weight_kg")
q=A.c(a,j)
p=A.bj(B.cw,a,"creatinine_method",B.I,u._)
A.b("age_adult",s,18,120)
A.b("weight",r,20,400)
A.b(j,q,0.1,30)
p=p===B.I
o=p?q+0.2:q
n=(140-s)*r/(72*o)
m=t===B.k?n:n*0.85
l=A.d([],u.s)
if(p){p="\u9175\u7d20\u6cd5 Cr "+A.a(q,4)+" + 0.2 = "+A.a(o,4)
k="Enzymatic Cr "+A.a(q,4)+" + 0.2 = "+A.a(o,4)
l.push($.z===B.b?k:p)}s=A.a(s,4)
r=A.a(r,4)
p=A.a(o,4)
t=t===B.m?" \xd7 0.85":""
l.push("(140 \u2212 "+s+") \xd7 "+r+" \xf7 (72 \xd7 "+p+")"+t+" = "+A.a(m,1))
return A.L(new A.A(m,"mL/min",l,B.c))},
$S:0}
A.dW.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
u.f.a(a)
t=A.h(a,"pf_ratio")
s=A.E(a,"respiratory_support")
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
k=A.bX(a.i(0,"gcs"))
k=k==null?null:B.e.N(k)
j=A.h(a,"creatinine")
i=A.h(a,"urine_ml_day")
h=A.bX(a.i(0,"baseline"))
h=h==null?null:B.e.N(h)
return A.ah(A.jg(new A.d0(t,s,r,q,p,o,n,m,l,k,j,i),h,A.E(a,"preexisting_organ_dysfunction")))},
$S:0}
A.dX.prototype={
$1(a){var t
u.f.a(a)
t=A.c(a,"respiratory_rate")
return A.ah(A.jb(A.E(a,"altered_mentation"),t,A.c(a,"sbp")))},
$S:0}
A.dY.prototype={
$1(a){u.f.a(a)
return A.ah(A.iB(new A.cz(A.c(a,"temperature"),A.c(a,"map"),A.c(a,"heart_rate"),A.c(a,"respiratory_rate"),A.c(a,"fio2"),A.h(a,"aado2"),A.h(a,"pao2"),A.h(a,"ph"),A.h(a,"bicarbonate"),A.c(a,"sodium"),A.c(a,"potassium"),A.c(a,"creatinine"),A.E(a,"acute_renal_failure"),A.c(a,"hematocrit"),A.c(a,"wbc"),B.e.E(A.c(a,"gcs")),A.c(a,"age"),new A.cA(A.E(a,"ch_liver"),A.E(a,"ch_cardiovascular"),A.E(a,"ch_respiratory"),A.E(a,"ch_renal"),A.E(a,"ch_immunocompromised")),A.bj(B.cE,a,"admission_type",B.T,u.v))))},
$S:0}
A.dZ.prototype={
$1(a){var t,s,r
u.f.a(a)
t=A.c(a,"age")
s=B.e.E(A.c(a,"apache2"))
r=B.e.E(A.c(a,"sofa"))
return A.ah(A.h4(t,s,B.e.E(A.c(a,"comorbidities")),A.c(a,"days_to_icu"),A.h(a,"il6"),r))},
$S:0}
A.e_.prototype={
$1(a){var t,s,r
u.f.a(a)
t=A.c(a,"age")
s=B.e.E(A.c(a,"apache2"))
r=B.e.E(A.c(a,"sofa"))
return A.ah(A.h4(t,s,B.e.E(A.c(a,"comorbidities")),A.c(a,"days_to_icu"),null,r))},
$S:0}
A.e0.prototype={
$1(a){var t,s,r,q,p,o
u.f.a(a)
t=A.P(B.cG,A.w(a.i(0,"consciousness")),u.o)
s=A.f0(a)
if(t===B.a7||t===B.a8)A.o(B.be)
A.f1(s,B.cI,0,1)
r=u.N
q=u.S
p=A.ad(r,q)
p.j(0,"altered_consciousness",t===B.a9?0:1)
p.P(0,s)
o=A.f4(p)
return A.ah(new A.a1(o,A.eL(p,r,q),o>=4,B.c))},
$S:0}
A.e1.prototype={
$1(a){var t=B.e.E(A.c(u.f.a(a),"nrs"))
A.b("nrs",t,0,10)
return A.ah(new A.a1(t,A.m(["nrs",t],u.N,u.S),t>3,B.c))},
$S:0}
A.e3.prototype={
$1(a){var t,s=A.f0(u.f.a(a))
A.f1(s,B.cH,0,2)
t=A.f4(s)
return A.ah(new A.a1(t,A.eL(s,u.N,u.S),t>2,B.c))},
$S:0}
A.e4.prototype={
$1(a){var t,s
u.f.a(a)
t=A.f0(a)
if(!A.E(a,"mechanically_ventilated"))A.o(B.aV)
A.f1(t,B.cp,1,4)
s=A.f4(t)
return A.ah(new A.a1(s,A.eL(t,u.N,u.S),s>5,B.c))},
$S:0}
A.e5.prototype={
$1(a){var t,s,r,q,p,o,n
u.f.a(a)
t=A.P(B.ct,A.w(a.i(0,"level")),u.aM)
s=u.ad
r=A.eP(s)
q=u.bQ.a(a.i(0,"suffixes"))
if(q==null)q=B.cO
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.v)(q),++o)r.l(0,A.P(B.cJ,A.w(q[o]),s))
s=A.d([],u.s)
if(r.A(0,B.aa))s.push("R")
if(r.A(0,B.ab))s.push("I")
if(r.A(0,B.ac))s.push("A")
n=B.a.aI(s)
return A.m(["label",""+A.j1(t)+n],u.N,u.X)},
$S:0}
A.e6.prototype={
$1(a){var t
u.f.a(a)
t=A.f2(a)
return A.L(A.h0(A.c(a,"dose"),t,A.P(B.x,A.w(a.i(0,"dose_unit")),u.R),A.h(a,"weight_kg")))},
$S:0}
A.e7.prototype={
$1(a){var t,s,r,q,p,o,n
u.f.a(a)
t=A.f2(a)
s=A.c(a,"rate_ml_h")
r=A.P(B.x,A.w(a.i(0,"dose_unit")),u.R)
q=A.h(a,"weight_kg")
A.fN(t)
A.b("rate",s,0,1e4)
p=A.fX(r,q)
o=A.fQ(r,t.b)
t=t.a/t.c
n=s*t/(p*o)
if(!isFinite(n))A.o(B.a1)
s=A.a(s,4)
t=A.a(t,4)
q=A.bY(r).a[2]?A.a(p,4)+" kg \xd7 ":""
return A.L(new A.A(n,r.b,A.d([s+" \xd7 "+t+" \xf7 ("+q+A.a(o,4)+") = "+A.a(n,3)],u.s),B.c))},
$S:0}
A.e8.prototype={
$1(a){var t,s,r,q,p,o,n,m
u.f.a(a)
t=A.f2(a)
s=A.P(B.x,A.w(a.i(0,"dose_unit")),u.R)
r=u.n
q=A.d([],r)
for(p=u.W,o=p.a(a.i(0,"weights_kg")),n=o.length,m=0;m<o.length;o.length===n||(0,A.v)(o),++m)q.push(A.aC(o[m]))
r=A.d([],r)
for(p=p.a(a.i(0,"doses")),o=p.length,m=0;m<p.length;p.length===o||(0,A.v)(p),++m)r.push(A.aC(p[m]))
return A.m(["table",A.jr(r,t,s,q)],u.N,u.X)},
$S:0}
A.e9.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.c(a,"value")
s=u.R
r=A.P(B.x,A.w(a.i(0,"value_unit")),s)
q=A.h(a,"min")
return A.m(["outside",A.j6(A.h(a,"max"),q,A.P(B.x,A.w(a.i(0,"range_unit")),s),t,r,A.h(a,"weight_kg"))],u.N,u.X)},
$S:0}
A.ea.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j=u.f
j.a(a)
t=A.d([],u.a3)
for(s=u.W.a(a.i(0,"items")),r=s.length,q=u.N,p=u.i,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=j.a(s[o])
t.push(new A.e(new A.c3(j.a(n.i(0,"per_ml")).M(0,new A.dE(),q,p)),A.aC(n.i(0,"volume_ml"))))}m=A.jq(t)
j=A.d([],u.aj)
for(s=t.length,o=0;o<t.length;t.length===s||(0,A.v)(t),++o){r=t[o]
l=r.b
n=A.ad(q,p)
for(r=r.a.a,r=new A.aP(r,r.r,r.e,A.u(r).h("aP<1,2>"));r.n();){k=r.d
n.j(0,k.a,k.b*l)}j.push(n)}return A.m(["contributions",j,"volume_ml",m.a,"totals",m.b,"npc_kcal",m.c,"nitrogen_g",m.d,"npc_n_ratio",m.e,"nitrogen_from_label",m.f],q,u.X)},
$S:0}
A.dE.prototype={
$2(a,b){return new A.N(A.w(a),A.aC(b),u.d8)},
$S:14}
A.eb.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j=u.f
j.a(a)
t=A.c(a,"basis_amount")
s=A.eY(a.i(0,"basis_unit"))
if(s==null)s=""
r=A.h(a,"standard_volume_ml")
q=A.d([],u.V)
for(p=u.W.a(a.i(0,"entries")),o=p.length,n=0;n<p.length;p.length===o||(0,A.v)(p),++n){m=j.a(p[n])
q.push(new A.cg(A.w(m.i(0,"key")),A.c(m,"value"),A.w(m.i(0,"unit"))))}l=A.j3(t,s,q,r)
j=A.d([],u.as)
for(t=l.b,s=t.length,r=u.N,n=0;n<t.length;t.length===s||(0,A.v)(t),++n){k=t[n]
j.push(A.m(["key",k.a,"unit",k.b,"reason",k.c],r,r))}return A.m(["per_ml",l.a,"skipped",j],r,u.X)},
$S:0}
A.ec.prototype={
$1(a){u.f.a(a)
return A.ah(A.jd(new A.cZ(A.E(a,"high_risk_surgery"),A.E(a,"ischemic_heart_disease"),A.E(a,"heart_failure"),A.E(a,"cerebrovascular_disease"),A.E(a,"insulin_therapy"),A.h(a,"creatinine"),A.dd(a.i(0,"creatinine_above_2")))))},
$S:0}
A.ee.prototype={
$1(a){var t,s,r,q,p
u.f.a(a)
t=A.d([],u.u)
for(s=u.W.a(a.i(0,"can_do")),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)t.push(A.eW(s[q]))
p=A.iJ(t)
return A.m(["dasi",p.a,"vo2peak",p.b,"mets",p.c,"at_or_below_34",p.d],u.N,u.X)},
$S:0}
A.ef.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.E(a,"female")
s=A.E(a,"non_smoker")
r=A.E(a,"history")
q=A.E(a,"postoperative_opioids")
return A.ah(A.iD(A.h(a,"age"),t,r,s,q))},
$S:0}
A.eg.prototype={
$1(a){var t,s,r,q,p,o,n,m="ebv_ml_per_kg"
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.c(a,m)
r=A.c(a,"initial_hct")
q=A.c(a,"lowest_hct")
if(!(t>0))A.o(B.v)
A.b("weight",t,0,400)
A.b(m,s,40,120)
if(!(q>0)||!(q<r)||!(r<100))A.o(B.aJ)
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
A.eh.prototype={
$1(a){var t,s,r,q,p,o,n,m="ml_per_kg"
u.f.a(a)
t=J.a3(a.i(0,"sex"),"female")?B.m:B.k
s=A.c(a,"height_cm")
if(a.i(0,m)==null)r=B.cs
else{r=A.d([],u.n)
for(q=u.W.a(a.i(0,m)),p=q.length,o=0;o<q.length;q.length===p||(0,A.v)(q),++o)r.push(A.aC(q[o]))}n=A.ju(s,r,t)
t=A.d([],u.n)
for(s=n.b,s=new A.aO(s,A.u(s).h("aO<1,2>")).gt(0);s.n();)t.push(s.d.b)
s=A.d([],u.u)
for(r=n.c,r=new A.aO(r,A.u(r).h("aO<1,2>")).gt(0);r.n();)s.push(r.d.b)
r=A.d([],u.s)
for(q=n.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.v)(q),++o)r.push(q[o].b)
return A.m(["pbw_kg",n.a,"volumes_ml",t,"within_cq19_range",s,"warnings",r],u.N,u.X)},
$S:0}
A.ei.prototype={
$1(a){var t,s,r,q,p,o,n,m,l
u.f.a(a)
t=A.P(B.cD,A.w(a.i(0,"group")),u.E)
s=A.P(B.cS,A.w(a.i(0,"route")),u.w)
r=A.j4(A.c(a,"concentration_percent"),t,s,A.h(a,"weight_kg"),A.E(a,"with_epinephrine"))
s=A.d([],u.bM)
for(t=r.a,q=t.length,p=u.N,o=u.X,n=0;n<t.length;t.length===q||(0,A.v)(t),++n){m=t[n]
s.push(A.m(["kind",m.a.b,"max_mg",m.b,"volume_ml",m.c,"epinephrine_mg",m.d],p,o))}t=A.d([],u.s)
for(q=r.b,l=q.length,n=0;n<q.length;q.length===l||(0,A.v)(q),++n)t.push(q[n].b)
return A.m(["limits",s,"notes",t],p,o)},
$S:0}
A.ej.prototype={
$1(a){var t,s,r,q,p
u.f.a(a)
t=A.c(a,"pao2")
s=A.c(a,"fio2")
r=A.c(a,"peep")
q=A.E(a,"invasive")
p=A.j8(A.dd(a.i(0,"above_1000m")),A.h(a,"barometric_pressure"),s,q,t,r)
r=p.d
t=r==null?null:r.b
s=p.e
s=s==null?null:s.b
return A.m(["pf",p.b,"corrected_pf",p.c,"severity",t,"not_graded",s,"altitude_correction_missing",p.a],u.N,u.X)},
$S:0}
A.ek.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j="plateau_pressure"
u.f.a(a)
t=A.c(a,j)
s=A.c(a,"peep")
r=A.c(a,"tidal_volume_ml")
q=A.h(a,"pbw_kg")
p=A.E(a,"spontaneous_effort")
A.b(j,t,0,80)
A.b("peep",s,0,40)
A.b("tidal_volume",r,1,3000)
o=q==null
if(!o)A.b("pbw",q,10,150)
if(t<s)A.o(B.aC)
n=t-s
if(n===0)A.o(B.aU)
m=r/n
l=o?null:r/q
o=A.d([],u.r)
if(p)o.push(B.bC)
p=u.s
s=A.d(["\u0394P = "+A.a(t,4)+" \u2212 "+A.a(s,4)+" = "+A.a(n,1)+" cmH2O","Crs = "+A.a(r,4)+" \xf7 "+A.a(n,1)+" = "+A.a(m,1)+" mL/cmH2O"],p)
if(l!=null){t=A.a(r,4)
q.toString
s.push("VT = "+t+" \xf7 "+A.a(q,1)+" = "+A.a(l,1)+" mL/kg PBW")}t=A.d([],p)
for(s=o.length,k=0;k<o.length;o.length===s||(0,A.v)(o),++k)t.push(o[k].b)
return A.m(["driving_pressure",n,"compliance",m,"vt_per_kg_pbw",l,"at_or_below_15",n<=15,"warnings",t],u.N,u.X)},
$S:0}
A.el.prototype={
$1(a){var t,s,r,q,p,o,n,m="respiratory_rate"
u.f.a(a)
t=A.c(a,"spo2")
s=A.c(a,"fio2")
r=A.c(a,m)
q=A.bX(a.i(0,"hours"))
q=q==null?null:B.e.N(q)
if(!(t>0)||t>100)A.o(B.aX)
A.b("fio2",s,0.21,1)
if(!(r>0))A.o(B.aW)
A.b(m,r,0,80)
p=t/s/r
if(q!=null){o=B.cU.i(0,q)
if(o==null)A.o(B.bb)
if(p>=4.88)n=B.ec
else n=p<o?B.ed:B.ee}else n=null
A.a(t,4)
A.a(s,4)
A.a(r,4)
A.a(p,2)
return A.m(["rox",p,"comparison",n==null?null:n.b],u.N,u.X)},
$S:0}
A.em.prototype={
$1(a){var t,s,r,q,p="respiratory_rate"
u.f.a(a)
t=A.c(a,p)
s=A.c(a,"tidal_volume_ml")
A.b(p,t,0,80)
if(!(s>0))A.o(B.aD)
A.b("tidal_volume",s,0,3000)
r=s/1000
q=t/r
A.a(t,4)
A.a(r,3)
A.a(q,0)
A.a(t,4)
A.a(r,3)
A.a(q,0)
return A.m(["rsbi",q,"below_105",q<105],u.N,u.X)},
$S:0}
A.en.prototype={
$1(a){var t,s,r,q,p,o,n="systolic",m="diastolic",l="heart_rate"
u.f.a(a)
t=A.c(a,n)
s=A.c(a,m)
r=A.h(a,l)
A.b(n,t,1,300)
A.b(m,s,0,250)
q=r==null
if(!q)A.b(l,r,0,300)
if(t<s)A.o(B.bk)
p=(t+2*s)/3
o=q?null:r/t
s=A.d(["MAP = ("+A.a(t,4)+" + 2 \xd7 "+A.a(s,4)+") \xf7 3 = "+A.a(p,1)],u.s)
if(o!=null){r.toString
s.push("SI = "+A.a(r,4)+" \xf7 "+A.a(t,4)+" = "+A.a(o,2))}return A.m(["map",p,"shock_index",o,"map_at_least_65",p>=65],u.N,u.X)},
$S:0}
A.ep.prototype={
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
return A.iX(new A.cI(t,s,r,q,p,o,n,m,l,k,j,i,h,g,f==null?0.003:f))},
$S:15}
A.eq.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h="serum_creatinine",g="urine_creatinine",f="serum_sodium",e="urine_sodium",d="urine_urea",c=null
u.f.a(a)
t=A.c(a,h)
s=A.c(a,g)
r=A.h(a,f)
q=A.h(a,e)
p=A.h(a,"bun")
o=A.h(a,d)
n=A.E(a,"diuretic")
if(!(t>0))A.o(B.b9)
if(!(s>0))A.o(B.aQ)
A.b(h,t,0,30)
A.b(g,s,0,1000)
m=u.s
l=A.d([],m)
if(r!=null&&q!=null){A.b(f,r,90,200)
A.b(e,q,0,400)
k=q*t/(r*s)*100
B.a.l(l,"FENa = ("+A.a(q,4)+" \xd7 "+A.a(t,4)+") \xf7 ("+A.a(r,4)+" \xd7 "+A.a(s,4)+") \xd7 100 = "+A.a(k,2)+"%")}else k=c
if(p!=null&&o!=null){if(!(p>0))A.o(B.bm)
A.b(d,o,0,3000)
j=o*t/(p*s)*100
B.a.l(l,"FEUN = ("+A.a(o,4)+" \xd7 "+A.a(t,4)+") \xf7 ("+A.a(p,4)+" \xd7 "+A.a(s,4)+") \xd7 100 = "+A.a(j,1)+"%")}else j=c
t=k==null
if(t&&j==null)A.o(B.bi)
s=A.d([],u.r)
if(n&&!t)s.push(B.bp)
r=t?c:k<1
t=t?c:k>3
q=j==null?c:j<35
m=A.d([],m)
for(p=s.length,i=0;i<s.length;s.length===p||(0,A.v)(s),++i)m.push(s[i].b)
return A.m(["fena",k,"feun",j,"fena_below_1",r,"fena_above_3",t,"feun_below_35",q,"warnings",m],u.N,u.X)},
$S:0}
A.er.prototype={
$1(a){var t,s
u.f.a(a)
t=A.P(B.cM,A.w(a.i(0,"disorder")),u.an)
s=A.j9(A.c(a,"bicarbonate"),t,A.c(a,"paco2"))
return A.m(["predicted_low",s.a,"predicted_high",s.b,"predicted_variable",s.c,"comparison",s.d.b,"difference",s.e,"adrogue_2009_value",s.f],u.N,u.X)},
$S:0}
A.es.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.c(a,"urine_ml")
s=A.c(a,"weight_kg")
r=A.c(a,"hours")
A.b("urine",t,0,5e4)
if(!(s>0))A.o(B.v)
if(!(r>0))A.o(B.aB)
A.b("weight",s,0,400)
A.b("hours",r,0,720)
q=t/s/r
A.a(t,4)
A.a(s,4)
A.a(r,4)
A.a(q,2)
return A.m(["ml_per_kg_per_h",q,"below_0_5",q<0.5,"below_0_3",q<0.3],u.N,u.X)},
$S:0}
A.et.prototype={
$1(a){var t,s,r,q,p,o,n
u.f.a(a)
t=u.n
s=A.d([],t)
for(r=u.W,q=r.a(a.i(0,"intakes_ml")),p=q.length,o=0;o<q.length;q.length===p||(0,A.v)(q),++o)s.push(A.aC(q[o]))
t=A.d([],t)
for(r=r.a(a.i(0,"outputs_ml")),q=r.length,o=0;o<r.length;r.length===q||(0,A.v)(r),++o)t.push(A.aC(r[o]))
n=A.iN(A.h(a,"insensible_ml"),s,A.h(a,"metabolic_water_ml"),t)
return A.m(["intake",n.a,"output",n.b,"balance",n.c,"insensible_included",n.d,"metabolic_included",n.e],u.N,u.X)},
$S:0}
A.eu.prototype={
$1(a){var t,s,r,q,p,o,n="safety_factor"
u.f.a(a)
t=A.c(a,"internal_volume_l")
s=A.c(a,"pressure_mpa")
r=A.c(a,"flow_l_per_min")
q=A.c(a,n)
if(!(t>0))A.o(B.aN)
if(!(r>0))A.o(B.aL)
A.b("internal_volume",t,0,100)
A.b("pressure",s,0,25)
A.b("flow",r,0,60)
A.b(n,q,0,1)
p=t*s*10
o=p*q/r
A.a(t,4)
A.a(s,4)
A.a(p,0)
A.a(t,4)
A.a(s,4)
A.a(p,0)
A.a(p,0)
A.a(q,4)
A.a(r,4)
A.a(o,1)
A.a(p,0)
A.a(q,4)
A.a(r,4)
A.a(o,1)
return A.m(["remaining_l",p,"minutes",o],u.N,u.X)},
$S:0}
A.ev.prototype={
$1(a){var t,s,r,q,p,o,n,m="rate_ml_h",l="drops_per_min"
u.f.a(a)
t=A.P(B.cx,A.w(a.i(0,"factor")),u.a)
if(a.v(m)){s=A.c(a,m)
A.b("rate",s,0,1e4)
r=t===B.A?20:60
q=s*r/60
p=q>0?60/q:null
A.a(s,4)
A.a(r,4)
A.a(q,1)
A.a(s,4)
A.a(r,4)
A.a(q,1)
o=new A.bp(q,s,p)}else if(a.v(l)){s=A.c(a,l)
A.b(l,s,0,1000)
r=t===B.A?20:60
n=s*60/r
p=s>0?60/s:null
A.a(s,4)
A.a(r,4)
A.a(n,1)
o=new A.bp(s,n,p)}else{s=A.c(a,"volume_ml")
p=A.c(a,"minutes")
if(!(s>0))A.o(B.a2)
if(!(p>0))A.o(B.bh)
A.b("volume",s,0,1e4)
A.b("minutes",p,0,1e5)
r=t===B.A?20:60
q=s*r/p
A.a(s,4)
A.a(r,4)
A.a(p,4)
A.a(q,1)
A.a(s,4)
A.a(r,4)
A.a(p,4)
A.a(q,1)
o=new A.bp(q,s/p*60,60/q)}return A.m(["drops_per_min",o.a,"rate_ml_h",o.b,"seconds_per_drop",o.c],u.N,u.X)},
$S:0}
A.ew.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=B.e.E(A.c(a,"thrombocytopenia"))
s=B.e.E(A.c(a,"timing"))
r=B.e.E(A.c(a,"thrombosis"))
q=A.iO(B.e.E(A.c(a,"other_causes")),t,r,s)
return A.m(["total",q.a,"category",q.c],u.N,u.X)},
$S:0}
A.ex.prototype={
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
A.ey.prototype={
$1(a){u.f.a(a)
return A.fO(A.j2(new A.cO(A.P(B.cz,A.w(a.i(0,"type")),u.k),A.h(a,"platelets_e4"),A.E(a,"platelet_fall_30"),A.h(a,"fdp"),A.h(a,"d_dimer_ratio"),A.h(a,"fibrinogen"),A.h(a,"pt_ratio"),A.h(a,"antithrombin"),A.h(a,"marker_ratio"),A.E(a,"liver_failure"))))},
$S:0}
A.eA.prototype={
$1(a){var t,s,r,q
u.f.a(a)
t=A.E(a,"underlying_disorder")
s=A.c(a,"platelets_e9")
r=A.P(B.cR,A.w(a.i(0,"fibrin_marker")),u.x)
q=A.c(a,"pt_prolongation_sec")
return A.fO(A.j_(r,A.c(a,"fibrinogen"),s,q,t))},
$S:0}
A.eB.prototype={
$1(a){var t,s,r,q,p,o,n,m
u.f.a(a)
t=A.c(a,"weight_kg")
s=A.h(a,"hb_grams")
r=A.h(a,"product_volume_ml")
q=A.h(a,"product_hb")
p=A.h(a,"units")
o=A.h(a,"current_hb")
n=A.ja(A.h(a,"age"),o,s,q,r,p,t)
t=A.d([],u.s)
for(s=n.e,r=s.length,m=0;m<s.length;s.length===r||(0,A.v)(s),++m)t.push(s[m].b)
return A.m(["blood_volume_dl",n.a,"hb_grams",n.b,"rise",n.c,"predicted_hb",n.d,"warnings",t],u.N,u.X)},
$S:0}
A.eC.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.f.a(a)
t=A.c(a,"pre_per_ul")
s=A.c(a,"post_per_ul")
r=A.c(a,"bsa")
q=A.h(a,"transfused_e11")
p=A.h(a,"units")
o=A.P(B.cq,A.w(a.i(0,"sampling")),u.q)
A.b("pre_platelets",t,0,2e6)
A.b("post_platelets",s,0,2e6)
if(!(r>0))A.o(B.aK)
A.b("bsa",r,0,4)
n=q==null
m=p==null
if(n===m)A.o(B.aA)
if(n){p.toString
q=p*0.2}if(!(q>0))A.o(B.b5)
l=s-t
k=l*r/q
j=o===B.ah
o=j?l<1e4:null
n=j?k<5000:null
i=A.d([],u.r)
if(!j)i.push(B.bs)
if(l<0)i.push(B.bt)
h=u.s
g=A.d([],h)
if(!m){m="\u8f38\u8840\u8840\u5c0f\u677f\u7dcf\u6570 = "+A.a(p,4)+" \u5358\u4f4d \xd7 0.2 = "+A.a(q,2)+" \xd710\xb9\xb9"
p="Platelets transfused = "+A.a(p,4)+" units \xd7 0.2 = "+A.a(q,2)+" \xd710\xb9\xb9"
g.push($.z===B.b?p:m)}p="\u5897\u52a0\u6570 = "+A.a(s,4)+" \u2212 "+A.a(t,4)+" = "+A.a(l,4)+" /\u03bcL"
t="Increment = "+A.a(s,4)+" \u2212 "+A.a(t,4)+" = "+A.a(l,4)+" /\u03bcL"
g.push($.z===B.b?t:p)
t="\u88dc\u6b63\u8840\u5c0f\u677f\u5897\u52a0\u6570 = "+A.a(l,4)+" \xd7 "+A.a(r,3)+" \xf7 "+A.a(q,2)+" = "+A.a(k,0)+" /\u03bcL"
r="Corrected count increment = "+A.a(l,4)+" \xd7 "+A.a(r,3)+" \xf7 "+A.a(q,2)+" = "+A.a(k,0)+" /\u03bcL"
g.push($.z===B.b?r:t)
t=A.d([],h)
for(s=i.length,f=0;f<i.length;i.length===s||(0,A.v)(i),++f)t.push(i[f].b)
return A.m(["increment",l,"transfused_e11",q,"corrected_increment",k,"increment_below_10000",o,"corrected_below_5000",n,"warnings",t],u.N,u.X)},
$S:0}
A.aH.prototype={
m(){return"CreatinineMethod."+this.b}}
A.aj.prototype={
m(){return"BerlinSeverity."+this.b}}
A.aE.prototype={
m(){return"BerlinNotGraded."+this.b}}
A.bD.prototype={}
A.dA.prototype={
$2(a,b){return new A.bD(this.d,this.b,this.a.a,a,b)},
$1(a){return this.$2(a,null)},
$S:16}
A.bd.prototype={
m(){return"RoxComparison."+this.b}}
A.br.prototype={
m(){return"EngineLanguage."+this.b}}
A.H.prototype={
m(){return"CalcWarning."+this.b}}
A.i.prototype={
k(a){var t=this.b
t=t.length===0?"":": "+t
return"CalcInputError("+this.a+t+")"}}
A.A.prototype={
k(a){return"CalcValue("+A.r(this.a)+" "+this.b+")"}}
A.a1.prototype={}
A.d0.prototype={}
A.eH.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.dC.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.aq.prototype={
m(){return"AdmissionType."+this.b}}
A.cA.prototype={}
A.cz.prototype={}
A.di.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.dx.prototype={
$2(a,b){return A.D(a)+A.D(b)},
$S:1}
A.dv.prototype={
$2(a,b){return B.z.a5(A.jf(A.w(a),u.f.a(B.z.aA(A.w(b),null))),null)},
$S:17}
A.dw.prototype={
$1(a){$.z=A.w(a)==="en"?B.b:B.a5},
$S:18};(function aliases(){var t=J.aw.prototype
t.ak=t.k})();(function installTearOffs(){var t=hunkHelpers._instance_1u,s=hunkHelpers._instance_1i,r=hunkHelpers._static_1
t(A.a_.prototype,"gaz","v",3)
s(A.az.prototype,"gaw","A",3)
r(A,"iG","i2",19)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.n,null)
r(A.n,[A.eM,J.c9,A.bG,J.aD,A.G,A.d_,A.q,A.bB,A.bN,A.af,A.bc,A.b4,A.as,A.aU,A.al,A.d4,A.cW,A.M,A.cR,A.bz,A.bA,A.aP,A.cc,A.cu,A.d6,A.a9,A.cq,A.cv,A.ct,A.aV,A.bV,A.c2,A.c5,A.d8,A.co,A.bJ,A.cF,A.N,A.aR,A.be,A.cB,A.cI,A.d1,A.c3,A.bn,A.cg,A.bI,A.cQ,A.bp,A.cG,A.cO,A.c6,A.cH,A.aA,A.cf,A.cP,A.cE,A.cZ,A.cD,A.d3,A.bD,A.i,A.A,A.a1,A.d0,A.cA,A.cz])
r(J.c9,[J.cb,J.bu,J.bb,J.bw,J.ba])
r(J.bb,[J.aw,J.l])
r(J.aw,[J.cY,J.ay,J.bx])
s(J.ca,A.bG)
s(J.cJ,J.l)
r(J.bw,[J.b8,J.bv])
r(A.G,[A.ch,A.bK,A.cd,A.cn,A.ck,A.cp,A.by,A.c_,A.ai,A.bM,A.c4])
r(A.q,[A.bq,A.ap])
r(A.bq,[A.aQ,A.X,A.C,A.aO])
r(A.af,[A.bg,A.bh])
s(A.e,A.bg)
s(A.I,A.bh)
s(A.bi,A.bc)
s(A.bL,A.bi)
s(A.bo,A.bL)
r(A.as,[A.c1,A.cm,A.dz,A.dy,A.dB,A.ds,A.dt,A.du,A.eG,A.dF,A.dG,A.dH,A.dS,A.e2,A.ed,A.eo,A.ez,A.eD,A.eE,A.eF,A.dI,A.dJ,A.dK,A.dL,A.dM,A.dN,A.dO,A.dP,A.dQ,A.dR,A.dT,A.dU,A.dV,A.dW,A.dX,A.dY,A.dZ,A.e_,A.e0,A.e1,A.e3,A.e4,A.e5,A.e6,A.e7,A.e8,A.e9,A.ea,A.eb,A.ec,A.ee,A.ef,A.eg,A.eh,A.ei,A.ej,A.ek,A.el,A.em,A.en,A.ep,A.eq,A.er,A.es,A.et,A.eu,A.ev,A.ew,A.ex,A.ey,A.eA,A.eB,A.eC,A.dA,A.dw])
r(A.c1,[A.cC,A.cK,A.cS,A.cV,A.d9,A.dp,A.eI,A.dm,A.dn,A.dr,A.dq,A.dh,A.dk,A.dl,A.dD,A.dj,A.dg,A.dE,A.eH,A.dC,A.di,A.dx,A.dv])
r(A.b4,[A.aF,A.bs])
r(A.al,[A.b5,A.bP])
r(A.b5,[A.b6,A.bt])
s(A.bC,A.bK)
r(A.cm,[A.cl,A.b2])
r(A.M,[A.a_,A.cr])
s(A.aM,A.a_)
s(A.bQ,A.cp)
s(A.az,A.bP)
s(A.cs,A.aQ)
s(A.ce,A.by)
s(A.cL,A.c2)
r(A.c5,[A.cN,A.cM])
s(A.d7,A.d8)
r(A.ai,[A.bF,A.c8])
r(A.co,[A.a8,A.b3,A.ar,A.T,A.bO,A.aI,A.aJ,A.ae,A.aG,A.aT,A.av,A.at,A.aS,A.a0,A.W,A.aN,A.ac,A.bf,A.ab,A.U,A.au,A.bH,A.ak,A.aL,A.a5,A.aK,A.aH,A.aj,A.aE,A.bd,A.br,A.H,A.aq])
t(A.bi,A.bV)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{O:"int",p:"double",b0:"num",k:"String",F:"bool",aR:"Null",a7:"List",n:"Object",y:"Map",b9:"JSObject"},mangledNames:{},types:["y<k,n?>(y<k,n?>)","O(O,O)","F(aA)","F(n?)","~(n?,n?)","p(p,p,F,p)","p(p,p)","~(@,@)","~(k,p?)","~(k,p)","~(k,O)","F(F)","N<k,O>(k,n?)","F(k)","N<k,p>(k,n?)","y<k,p>(y<k,n?>)","bD(aj?[aE?])","k(k,k)","aR(k)","@(@)"],arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.e&&a.b(c.a)&&b.b(c.b),"4;":a=>b=>b instanceof A.I&&A.j7(a,b.a)}}
A.hT(v.typeUniverse,JSON.parse('{"cY":"aw","ay":"aw","bx":"aw","cb":{"F":[],"an":[]},"bu":{"an":[]},"bb":{"b9":[]},"aw":{"b9":[]},"l":{"a7":["1"],"b9":[],"q":["1"]},"ca":{"bG":[]},"cJ":{"l":["1"],"a7":["1"],"b9":[],"q":["1"]},"aD":{"S":["1"]},"bw":{"p":[],"b0":[]},"b8":{"p":[],"O":[],"b0":[],"an":[]},"bv":{"p":[],"b0":[],"an":[]},"ba":{"k":[],"cX":[],"an":[]},"ch":{"G":[]},"bq":{"q":["1"]},"aQ":{"q":["1"]},"bB":{"S":["1"]},"ap":{"q":["1"],"q.E":"1"},"bN":{"S":["1"]},"e":{"bg":[],"af":[]},"I":{"bh":[],"af":[]},"bo":{"bL":["1","2"],"bi":["1","2"],"bc":["1","2"],"bV":["1","2"],"y":["1","2"]},"b4":{"y":["1","2"]},"aF":{"b4":["1","2"],"y":["1","2"]},"aU":{"S":["1"]},"bs":{"b4":["1","2"],"y":["1","2"]},"b5":{"al":["1"],"ax":["1"],"q":["1"]},"b6":{"b5":["1"],"al":["1"],"ax":["1"],"q":["1"]},"bt":{"b5":["1"],"al":["1"],"ax":["1"],"q":["1"]},"bC":{"G":[]},"cd":{"G":[]},"cn":{"G":[]},"as":{"b7":[]},"c1":{"b7":[]},"cm":{"b7":[]},"cl":{"b7":[]},"b2":{"b7":[]},"ck":{"G":[]},"a_":{"M":["1","2"],"eO":["1","2"],"y":["1","2"],"M.K":"1","M.V":"2"},"X":{"q":["1"],"q.E":"1"},"bz":{"S":["1"]},"C":{"q":["1"],"q.E":"1"},"bA":{"S":["1"]},"aO":{"q":["N<1,2>"],"q.E":"N<1,2>"},"aP":{"S":["N<1,2>"]},"aM":{"a_":["1","2"],"M":["1","2"],"eO":["1","2"],"y":["1","2"],"M.K":"1","M.V":"2"},"bg":{"af":[]},"bh":{"af":[]},"cc":{"hA":[],"cX":[]},"cu":{"eR":[]},"d6":{"S":["eR"]},"cp":{"G":[]},"bQ":{"G":[]},"az":{"al":["1"],"fq":["1"],"ax":["1"],"q":["1"]},"aV":{"S":["1"]},"M":{"y":["1","2"]},"bc":{"y":["1","2"]},"bL":{"bi":["1","2"],"bc":["1","2"],"bV":["1","2"],"y":["1","2"]},"al":{"ax":["1"],"q":["1"]},"bP":{"al":["1"],"ax":["1"],"q":["1"]},"cr":{"M":["k","@"],"y":["k","@"],"M.K":"k","M.V":"@"},"cs":{"aQ":["k"],"q":["k"],"q.E":"k","aQ.E":"k"},"by":{"G":[]},"ce":{"G":[]},"p":{"b0":[]},"O":{"b0":[]},"a7":{"q":["1"]},"ax":{"q":["1"]},"k":{"cX":[]},"co":{"t":[]},"c_":{"G":[]},"bK":{"G":[]},"ai":{"G":[]},"bF":{"G":[]},"c8":{"G":[]},"bM":{"G":[]},"c4":{"G":[]},"bJ":{"G":[]},"be":{"hC":[]},"a8":{"t":[]},"b3":{"t":[]},"ar":{"t":[]},"T":{"t":[]},"aI":{"t":[]},"bO":{"t":[]},"aJ":{"t":[]},"ae":{"t":[]},"aG":{"t":[]},"aT":{"t":[]},"av":{"t":[]},"at":{"t":[]},"aS":{"t":[]},"a0":{"t":[]},"W":{"t":[]},"ac":{"t":[]},"aN":{"t":[]},"bf":{"t":[]},"ab":{"t":[]},"U":{"t":[]},"au":{"t":[]},"aL":{"t":[]},"a5":{"t":[]},"aK":{"t":[]},"bH":{"t":[]},"ak":{"t":[]},"aH":{"t":[]},"aj":{"t":[]},"aE":{"t":[]},"bd":{"t":[]},"H":{"t":[]},"br":{"t":[]},"aq":{"t":[]}}'))
A.hS(v.typeUniverse,JSON.parse('{"bq":1,"bP":1,"c2":2,"c5":2}'))
var u=(function rtii(){var t=A.x
return{v:t("aq"),A:t("ar"),Y:t("a5"),M:t("b6<k>"),J:t("aG"),_:t("aH"),R:t("T"),a:t("aI"),C:t("G"),x:t("at"),Z:t("b7"),c:t("aJ"),e:t("aK"),o:t("ab"),d:t("aL"),h:t("q<@>"),r:t("l<H>"),D:t("l<cf>"),U:t("l<ac>"),V:t("l<cg>"),a2:t("l<a7<p>>"),as:t("l<y<k,k>>"),aj:t("l<y<k,p>>"),bM:t("l<y<k,n?>>"),G:t("l<n>"),a3:t("l<+(c3,p)>"),p:t("l<+(p,O)>"),I:t("l<bI>"),s:t("l<k>"),u:t("l<F>"),n:t("l<p>"),b:t("l<@>"),t:t("l<O>"),T:t("bu"),m:t("b9"),L:t("bx"),aM:t("U"),ad:t("au"),k:t("av"),E:t("a0"),w:t("W"),j:t("a7<@>"),W:t("a7<n?>"),d8:t("N<k,p>"),O:t("N<k,O>"),bC:t("y<@,@>"),f:t("y<k,n?>"),P:t("aR"),K:t("n"),q:t("aS"),Q:t("aT"),an:t("a8"),cY:t("jz"),F:t("+()"),a0:t("eR"),N:t("k"),am:t("ae"),bW:t("an"),cr:t("ay"),aR:t("ap<F>"),l:t("aA"),y:t("F"),B:t("F(F)"),i:t("p"),S:t("O"),bc:t("fk<aR>?"),z:t("b9?"),aL:t("a7<@>?"),bQ:t("a7<n?>?"),X:t("n?"),aD:t("k?"),g:t("ct?"),cG:t("F?"),dd:t("p?"),ao:t("O?"),ae:t("b0?"),H:t("b0"),cQ:t("~(k,@)")}})();(function constants(){var t=hunkHelpers.makeConstList
B.bY=J.c9.prototype
B.a=J.l.prototype
B.p=J.b8.prototype
B.e=J.bw.prototype
B.n=J.ba.prototype
B.c4=J.bb.prototype
B.T=new A.aq(0,"nonoperative")
B.U=new A.aq(2,"electivePostop")
B.V=new A.ar(0,"mg")
B.W=new A.ar(2,"unit")
B.ar=new A.aE(0,"peepBelow5")
B.as=new A.aE(1,"nonInvasiveModerateOrSevere")
B.at=new A.aj(0,"mild")
B.au=new A.aj(1,"moderate")
B.av=new A.aj(2,"severe")
B.aw=new A.aj(3,"none")
B.X=new A.a5(0,"duBois")
B.Y=new A.a5(1,"fujimotoGeneral")
B.Z=new A.a5(2,"fujimotoToddler")
B.a_=new A.a5(3,"fujimotoInfant")
B.az=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.z=new A.cL()
B.u=new A.d_()
B.aA=new A.i("choose_one:platelet_count","")
B.aB=new A.i("not_positive:hours","")
B.aC=new A.i("plateau_below_peep","")
B.aD=new A.i("not_positive:tidal_volume","")
B.aE=new A.i("cannot_compare:weight","")
B.aF=new A.i("missing:sofa_baseline","")
B.aG=new A.i("missing:product_volume_or_hb","")
B.aH=new A.i("direction_mismatch:paco2","")
B.aI=new A.i("label_no_vasoconstrictor:ivra","")
B.aJ=new A.i("invalid:hct_order","")
B.aK=new A.i("not_positive:bsa","")
B.aL=new A.i("not_positive:flow","")
B.aM=new A.i("unsupported_unit:basis","")
B.aN=new A.i("not_positive:internal_volume","")
B.aO=new A.i("sign_mismatch:sodium_plan","")
B.aP=new A.i("zero:amino_acid","")
B.aQ=new A.i("not_positive:urine_creatinine","")
B.aR=new A.i("no_limit_stated","")
B.a0=new A.i("missing:weight","")
B.aS=new A.i("no_product:concentration","")
B.aT=new A.i("missing:creatinine","")
B.aU=new A.i("zero:driving_pressure","")
B.aV=new A.i("not_applicable:bps_non_ventilated","")
B.aW=new A.i("not_positive:respiratory_rate","")
B.aX=new A.i("out_of_range:spo2","")
B.aY=new A.i("not_positive:ml_per_kg","")
B.aZ=new A.i("not_positive:pbw","")
B.b_=new A.i("no_indication:route","")
B.b0=new A.i("items_mismatch","")
B.b1=new A.i("not_positive:standard_volume","")
B.b2=new A.i("not_positive:concentration","")
B.b3=new A.i("choose_one:hb_amount","")
B.b4=new A.i("not_applicable:no_underlying_disorder","")
B.b5=new A.i("not_positive:transfused_platelets","")
B.b6=new A.i("missing:pao2","")
B.b7=new A.i("missing:standard_volume","")
B.b8=new A.i("cannot_compare:dimension","")
B.b9=new A.i("not_positive:serum_creatinine","")
B.a1=new A.i("not_finite","")
B.v=new A.i("not_positive:weight","")
B.ba=new A.i("not_positive:bicarbonate","")
B.a2=new A.i("not_positive:volume","")
B.bb=new A.i("unsupported:rox_timepoint","")
B.bc=new A.i("missing:aado2","")
B.bd=new A.i("unit_mismatch:dose_vs_amount","")
B.be=new A.i("not_assessable:icdsc_consciousness","")
B.bg=new A.i("not_positive:basis","")
B.bf=new A.i("not_positive:paco2","")
B.bh=new A.i("not_positive:minutes","")
B.bi=new A.i("missing:sodium_or_urea","")
B.bj=new A.i("missing:ph_or_bicarbonate","")
B.bk=new A.i("systolic_below_diastolic","")
B.bl=new A.i("not_positive:drug_amount","")
B.bm=new A.i("not_positive:bun","")
B.bn=new A.H(0,"heightBelowFormulaBase")
B.bp=new A.H(10,"diureticRaisesFena")
B.bq=new A.H(12,"dicDDimerProvisional")
B.br=new A.H(13,"bloodVolumeCoefficientAdult")
B.bs=new A.H(14,"plateletSamplingNotNextDay")
B.bt=new A.H(15,"plateletPostBelowPre")
B.bu=new A.H(16,"apfelSourceIsAdult")
B.bv=new A.H(17,"sofaRespiratoryCappedWithoutSupport")
B.bw=new A.H(2,"sodiumRiseAbove24hLimit")
B.bx=new A.H(3,"sodiumRiseAbove48hLimit")
B.by=new A.H(4,"sodiumFallAboveLimit")
B.bz=new A.H(5,"bsaOutsideFormulaAge")
B.bA=new A.H(6,"maintenanceAboveNicePerKg")
B.bB=new A.H(7,"maintenanceAbove2500mL")
B.bC=new A.H(9,"spontaneousEffortApparentValue")
B.a3=new A.b3(0,"below")
B.bD=new A.b3(1,"within")
B.a4=new A.b3(2,"above")
B.H=new A.aG(0,"payne")
B.I=new A.aH(0,"enzymatic")
B.A=new A.aI(0,"twenty")
B.a5=new A.br(0,"ja")
B.b=new A.br(1,"en")
B.J=new A.aJ(0,"katz")
B.K=new A.aK(0,"original1919")
B.a6=new A.aK(1,"rozaShizgal1984")
B.a7=new A.ab(0,"a")
B.a8=new A.ab(1,"b")
B.a9=new A.ab(3,"d")
B.B=new A.aL(0,"ardsnet")
B.bZ=new A.ak(0,"underweight")
B.c_=new A.ak(1,"normal")
B.c0=new A.ak(2,"obese1")
B.c1=new A.ak(3,"obese2")
B.c2=new A.ak(4,"obese3")
B.c3=new A.ak(5,"obese4")
B.aa=new A.au(0,"restlessness")
B.ab=new A.au(1,"incontinence")
B.ac=new A.au(2,"apallicOrAkineticMutism")
B.cf=new A.cM(null)
B.cg=new A.cN(null)
B.ad=new A.av(1,"hematopoieticDisorder")
B.ae=new A.av(2,"infection")
B.L=new A.a0(0,"lidocaine")
B.w=new A.a0(1,"lidocaineEpinephrine")
B.C=new A.a0(2,"bupivacaine")
B.M=new A.a0(3,"bupivacaineSpinal")
B.D=new A.a0(4,"levobupivacaine")
B.N=new A.a0(5,"ropivacaine")
B.O=new A.a0(6,"mepivacaine")
B.ci=new A.ac(0,"ivraOnlySomeProducts")
B.cj=new A.ac(1,"levobupivacaineBagNoNerveBlock")
B.ck=new A.ac(2,"levobupivacaineNoParacervical")
B.cl=new A.ac(3,"mgComputedFromVolume")
B.cm=new A.ac(4,"noMgCapStated")
B.cn=new A.ac(5,"bupivacaine0125Label10mL")
B.f=new A.W(0,"epidural")
B.d=new A.W(1,"nerveBlock")
B.h=new A.W(2,"intercostal")
B.l=new A.W(3,"infiltration")
B.P=new A.W(4,"spinal")
B.E=new A.W(5,"intravenousRegional")
B.r=new A.aN(0,"maxRecommended")
B.j=new A.aN(1,"singleDose")
B.co=new A.aN(2,"perNerve")
B.af=new A.aN(3,"totalMultipleBlocks")
B.cp=t(["facial","upper_limbs","ventilator_compliance"],u.s)
B.ah=new A.aS(0,"nextDay")
B.cY=new A.aS(1,"other")
B.cq=t([B.ah,B.cY],A.x("l<aS>"))
B.cr=t([655.0955,9.5634,1.8496,4.6756],u.n)
B.cs=t([6,8],u.n)
B.c5=new A.U(0,"zero")
B.c6=new A.U(1,"i1")
B.c7=new A.U(2,"i2")
B.c8=new A.U(3,"i3")
B.c9=new A.U(4,"ii10")
B.ca=new A.U(5,"ii20")
B.cb=new A.U(6,"ii30")
B.cc=new A.U(7,"iii100")
B.cd=new A.U(8,"iii200")
B.ce=new A.U(9,"iii300")
B.ct=t([B.c5,B.c6,B.c7,B.c8,B.c9,B.ca,B.cb,B.cc,B.cd,B.ce],A.x("l<U>"))
B.ag=t([2.75,1.75,2.75,5.5,8,2.7,3.5,8,4.5,5.25,6,7.5],u.n)
B.bo=new A.H(1,"sodiumNotAbove140")
B.cu=t([B.bo],u.r)
B.bU=new A.aJ(1,"hillier")
B.cv=t([B.J,B.bU],A.x("l<aJ>"))
B.bF=new A.aH(1,"jaffe")
B.cw=t([B.I,B.bF],A.x("l<aH>"))
B.bQ=new A.aI(1,"sixty")
B.cx=t([B.A,B.bQ],A.x("l<aI>"))
B.cy=t([B.K,B.a6],A.x("l<aK>"))
B.ch=new A.av(0,"basic")
B.cz=t([B.ch,B.ad,B.ae],A.x("l<av>"))
B.cA=t(["kcal","glucose_g","amino_acid_g","lipid_g","na_meq","k_meq","cl_meq","ca_meq","mg_meq","p_mmol","water_ml"],u.s)
B.bX=new A.aL(1,"devine")
B.cB=t([B.B,B.bX],A.x("l<aL>"))
B.bE=new A.aG(1,"variant08")
B.cC=t([B.H,B.bE],A.x("l<aG>"))
B.cD=t([B.L,B.w,B.C,B.M,B.D,B.N,B.O],A.x("l<a0>"))
B.ap=new A.aq(1,"emergencyPostop")
B.cE=t([B.T,B.ap,B.U],A.x("l<aq>"))
B.eh=new A.ae(0,"youngMale")
B.ei=new A.ae(1,"youngFemale")
B.ej=new A.ae(2,"elderlyMale")
B.ek=new A.ae(3,"elderlyFemale")
B.el=new A.ae(4,"child")
B.cF=t([B.eh,B.ei,B.ej,B.ek,B.el],A.x("l<ae>"))
B.bV=new A.ab(2,"c")
B.bW=new A.ab(4,"e")
B.cG=t([B.a7,B.a8,B.bV,B.a9,B.bW],A.x("l<ab>"))
B.cH=t(["facial","body_movement","ventilator_or_vocalization","muscle_tension"],u.s)
B.cI=t(["inattention","disorientation","hallucination_delusion","psychomotor","speech_mood","sleep_wake","fluctuation"],u.s)
B.cJ=t([B.aa,B.ab,B.ac],A.x("l<au>"))
B.cK=t([88.362,13.397,4.799,5.677],u.n)
B.ax=new A.a5(4,"shintani")
B.ay=new A.a5(5,"mosteller")
B.cL=t([B.X,B.Y,B.Z,B.a_,B.ax,B.ay],A.x("l<a5>"))
B.d1=new A.a8(0,"metabolicAcidosis")
B.d2=new A.a8(1,"metabolicAlkalosis")
B.ai=new A.a8(2,"acuteRespiratoryAcidosis")
B.Q=new A.a8(3,"chronicRespiratoryAcidosis")
B.aj=new A.a8(4,"acuteRespiratoryAlkalosis")
B.R=new A.a8(5,"chronicRespiratoryAlkalosis")
B.cM=t([B.d1,B.d2,B.ai,B.Q,B.aj,B.R],A.x("l<a8>"))
B.c=t([],u.r)
B.cN=t([],u.s)
B.cO=t([],u.b)
B.aq=new A.ar(1,"ug")
B.cP=t([B.V,B.aq,B.W],A.x("l<ar>"))
B.cQ=t([66.473,13.7516,5.0033,6.755],u.n)
B.bR=new A.at(0,"none")
B.bS=new A.at(1,"moderate")
B.bT=new A.at(2,"strong")
B.cR=t([B.bR,B.bS,B.bT],A.x("l<at>"))
B.cS=t([B.f,B.d,B.h,B.l,B.P,B.E],A.x("l<W>"))
B.cT=t([447.593,9.247,3.098,4.33],u.n)
B.bG=new A.T(0,"ugPerKgMin")
B.bH=new A.T(1,"ugPerKgH")
B.bI=new A.T(2,"mgPerKgH")
B.bJ=new A.T(3,"mgPerH")
B.bK=new A.T(4,"ugPerH")
B.bL=new A.T(5,"ugPerMin")
B.bM=new A.T(6,"mgPerMin")
B.bN=new A.T(7,"unitPerH")
B.bO=new A.T(8,"unitPerKgH")
B.bP=new A.T(9,"unitPerMin")
B.x=t([B.bG,B.bH,B.bI,B.bJ,B.bK,B.bL,B.bM,B.bN,B.bO,B.bP],A.x("l<T>"))
B.cU=new A.bs([2,2.85,6,3.47,12,3.85],A.x("bs<O,p>"))
B.cW={na:0,k:1,cl:2,ca:3,mg:4,p:5}
B.F=new A.aF(B.cW,[22.99,39.098,35.45,40.078,24.305,30.974],A.x("aF<k,p>"))
B.cZ=new A.aT(0,"concentration")
B.d_=new A.aT(1,"rate")
B.d0=new A.aT(2,"daily")
B.d3=new A.e(1.5,2)
B.d4=new A.e(10,1)
B.ak=new A.e(110,2)
B.d5=new A.e(111,3)
B.d6=new A.e(120,2)
B.d7=new A.e(12,0)
B.d8=new A.e(130,0)
B.d9=new A.e(130,3)
B.da=new A.e(140,3)
B.db=new A.e(150,1)
B.dc=new A.e(155,2)
B.dd=new A.e(15,1)
B.de=new A.e(15,3)
B.df=new A.e(160,3)
B.dg=new A.e(160,4)
B.al=new A.e(180,4)
B.dh=new A.e(18,2)
B.di=new A.e(1,2)
B.dj=new A.e(200,2)
B.am=new A.e(20,2)
B.dk=new A.e(22,0)
B.dl=new A.e(25,1)
B.dm=new A.e(2,3)
B.dn=new A.e(30,0)
B.dp=new A.e(30,3)
B.dq=new A.e(32,1)
B.dr=new A.e(32,2)
B.ds=new A.e(34,1)
B.dt=new A.e(350,3)
B.du=new A.e(35,3)
B.dv=new A.e(36,0)
B.dw=new A.e(39,3)
B.dx=new A.e(3,0)
B.dy=new A.e(3,1)
B.dz=new A.e(40,3)
B.dA=new A.e(40,4)
B.dB=new A.e(41,3)
B.dC=new A.e(41,4)
B.dD=new A.e(46,1)
B.dE=new A.e(500,4)
B.an=new A.e(50,2)
B.dF=new A.e(50,4)
B.dG=new A.e(52,4)
B.dH=new A.e(55,2)
B.dI=new A.e(60,4)
B.dJ=new A.e(6,2)
B.dK=new A.e(6,3)
B.ao=new A.e(70,0)
B.dL=new A.e(7,4)
B.dM=new A.e(7.33,0)
B.o=new A.e(-1/0,4)
B.dN=new A.e(7.5,1)
B.dO=new A.e(3.5,0)
B.dP=new A.e(7.15,3)
B.dQ=new A.e(2.5,2)
B.dR=new A.e(3.5,4)
B.dS=new A.e(7.25,2)
B.dT=new A.e(0.6,0)
B.dU=new A.e(-1/0,0)
B.dV=new A.e(7.7,4)
B.dW=new A.e("kcal",1)
B.dX=new A.e("p_mmol",1)
B.dY=new A.e(-1/0,2)
B.dZ=new A.e(38.5,1)
B.e_=new A.e(7.6,3)
B.e0=new A.e("water_ml",1)
B.e1=new A.e(5.5,1)
B.q=new A.bO(0,"mass")
B.e2=new A.I([B.q,1,!0,60])
B.G=new A.bO(1,"unit")
B.e3=new A.I([B.G,1,!1,60])
B.e4=new A.I([B.q,1,!0,1])
B.e5=new A.I([B.G,1,!0,1])
B.e6=new A.I([B.q,1000,!0,1])
B.e7=new A.I([B.G,1,!1,1])
B.e8=new A.I([B.q,1,!1,1])
B.e9=new A.I([B.q,1000,!1,60])
B.ea=new A.I([B.q,1,!1,60])
B.eb=new A.I([B.q,1000,!1,1])
B.ec=new A.bd(0,"atOrAbove488")
B.ed=new A.bd(1,"belowLowerCutoff")
B.ee=new A.bd(2,"between")
B.y=new A.bt([B.f,B.d,B.l],A.x("bt<W>"))
B.cV={"NUR-06":0}
B.ef=new A.b6(B.cV,1,u.M)
B.cX={kcal:0,glucose_g:1,carbohydrate_g:2,amino_acid_g:3,protein_g:4,nitrogen_g:5,lipid_g:6,water_ml:7,na:8,k:9,cl:10,ca:11,mg:12,p:13}
B.eg=new A.b6(B.cX,14,u.M)
B.k=new A.bH(0,"male")
B.m=new A.bH(1,"female")
B.em=A.jw("n")
B.t=new A.bf(0,"mg")
B.S=new A.bf(1,"mgPerKg")
B.i=new A.bf(2,"ml")})();(function staticFields(){$.Z=A.d([],u.G)
$.ft=null
$.fg=null
$.ff=null
$.da=A.d([],A.x("l<a7<n>?>"))
$.z=B.a5})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"jy","h7",()=>A.h2("_$dart_dartClosure"))
t($,"jx","fb",()=>A.h2("_$dart_dartClosure_dartJSInterop"))
t($,"jN","hk",()=>A.d([new J.ca()],A.x("l<bG>")))
t($,"jA","h8",()=>A.ao(A.d5({
toString:function(){return"$receiver$"}})))
t($,"jB","h9",()=>A.ao(A.d5({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"jC","ha",()=>A.ao(A.d5(null)))
t($,"jD","hb",()=>A.ao(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"jG","he",()=>A.ao(A.d5(void 0)))
t($,"jH","hf",()=>A.ao(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"jF","hd",()=>A.ao(A.fy(null)))
t($,"jE","hc",()=>A.ao(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"jJ","hh",()=>A.ao(A.fy(void 0)))
t($,"jI","hg",()=>A.ao(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"jK","cx",()=>A.f8(B.em))
t($,"jL","hi",()=>{var s=u.w,r=u.i,q=A.x("ax<W>")
return A.m([B.L,A.m([0.5,A.j([B.f,B.d,B.h,B.l,B.E],s),1,A.j([B.f,B.d,B.h,B.l],s),2,A.j([B.f,B.d,B.h,B.l],s)],r,q),B.w,A.m([0.5,A.j([B.f,B.d,B.h,B.l],s),1,A.j([B.f,B.d,B.h,B.l],s),2,A.j([B.f,B.d,B.h,B.l],s)],r,q),B.C,A.m([0.125,A.j([B.f],s),0.25,A.j([B.f,B.d,B.h],s),0.5,A.j([B.f,B.d,B.h],s)],r,q),B.M,A.m([0.5,A.j([B.P],s)],r,q),B.D,A.m([0.25,A.j([B.d],s),0.5,A.j([B.d],s),0.75,A.j([B.f],s)],r,q),B.N,A.m([0.2,A.eP(s),0.75,A.j([B.f,B.d],s),1,A.j([B.f],s)],r,q),B.O,A.m([0.5,A.j([B.f,B.d,B.l],s),1,A.j([B.f,B.d,B.l],s),2,A.j([B.f,B.d,B.l],s)],r,q)],u.E,A.x("y<p,ax<W>>"))})
t($,"jM","hj",()=>{var s=u.i,r=u.w,q=A.x("l<aA>")
return A.m([B.L,A.d([A.J(A.j([0.5,1,2],s),B.y,B.r,B.t,200),A.J(A.j([0.5],s),A.j([B.h],r),B.j,B.t,25),A.J(A.j([1],s),A.j([B.h],r),B.j,B.t,50),A.J(A.j([0.5],s),A.j([B.E],r),B.r,B.t,200)],q),B.w,A.d([A.J(A.j([0.5],s),B.y,B.r,B.i,100),A.J(A.j([1],s),B.y,B.r,B.i,50),A.J(A.j([2],s),B.y,B.r,B.i,25),A.J(A.j([0.5,1],s),A.j([B.h],r),B.j,B.i,5)],q),B.C,A.d([A.J(A.j([0.125,0.25,0.5],s),A.j([B.f],r),B.j,B.S,2),A.J(A.j([0.25,0.5],s),A.j([B.d],r),B.j,B.S,2),A.J(A.j([0.25,0.5],s),A.j([B.h],r),B.co,B.i,5)],q),B.M,A.d([A.J(A.j([0.5],s),A.j([B.P],r),B.j,B.t,20)],q),B.D,A.d([A.J(A.j([0.75],s),A.j([B.f],r),B.j,B.i,20),A.J(A.j([0.5],s),A.j([B.d],r),B.j,B.i,30),A.J(A.j([0.5],s),A.j([B.d],r),B.af,B.i,30),A.J(A.j([0.25],s),A.j([B.d],r),B.j,B.i,40),A.J(A.j([0.25],s),A.j([B.d],r),B.af,B.i,60)],q),B.N,A.d([A.J(A.j([0.75],s),A.j([B.f],r),B.j,B.i,20),A.J(A.j([1],s),A.j([B.f],r),B.j,B.i,20),A.J(A.j([0.75],s),A.j([B.d],r),B.j,B.i,40)],q),B.O,A.d([A.J(A.j([0.5,1,2],s),B.y,B.r,B.t,500)],q)],u.E,A.x("a7<aA>"))})
t($,"jO","eJ",()=>A.m(["NUT-01.bmi",new A.dF(),"NUT-01.standard_weight",new A.dG(),"NUT-01.ibw",new A.dH(),"NUT-01.adjusted_weight",new A.dS(),"NUT-02",new A.e2(),"NUT-03",new A.ed(),"NUT-04",new A.eo(),"NUT-05",new A.ez(),"NUT-06",new A.eD(),"NUT-07",new A.eE(),"FE-01",new A.eF(),"FE-02",new A.dI(),"FE-03",new A.dJ(),"FE-05",new A.dK(),"FE-06",new A.dL(),"FE-07",new A.dM(),"FE-08",new A.dN(),"FE-09",new A.dO(),"FE-10",new A.dP(),"FE-11",new A.dQ(),"RF-01",new A.dR(),"RF-02",new A.dT(),"RF-03",new A.dU(),"RF-04",new A.dV(),"SEV-01",new A.dW(),"SEV-02",new A.dX(),"SEV-03",new A.dY(),"SEV-04",new A.dZ(),"SEV-05",new A.e_(),"NUR-04",new A.e0(),"NUR-05",new A.e1(),"NUR-06",new A.e3(),"NUR-07",new A.e4(),"NUR-10",new A.e5(),"PWA-01",new A.e6(),"PWA-02",new A.e7(),"PWA-03",new A.e8(),"PWA-04",new A.e9(),"PWA-05",new A.ea(),"PWA-06",new A.eb(),"PRE-02",new A.ec(),"PRE-03",new A.ee(),"PRE-05",new A.ef(),"IOP-01",new A.eg(),"IOP-02",new A.eh(),"IOP-03",new A.ei(),"RESP-01",new A.ej(),"RESP-02",new A.ek(),"RESP-03",new A.el(),"RESP-04",new A.em(),"CV-01",new A.en(),"CV-02",new A.ep(),"KD-02",new A.eq(),"AB-01",new A.er(),"NS-01.urine",new A.es(),"NS-01.balance",new A.et(),"NS-02",new A.eu(),"NS-03",new A.ev(),"HEM-01",new A.ew(),"HEM-01.candidates",new A.ex(),"HEM-02a",new A.ey(),"HEM-02c",new A.eA(),"HEM-03",new A.eB(),"HEM-04",new A.eC()],u.N,A.x("y<k,n?>(y<k,n?>)")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
var t=A.j5
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()