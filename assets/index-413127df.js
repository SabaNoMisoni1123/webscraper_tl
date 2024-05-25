(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function qc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Fe={},Nr=[],Ut=()=>{},Ym=()=>!1,Jm=/^on[^a-z]/,Bo=t=>Jm.test(t),zc=t=>t.startsWith("onUpdate:"),lt=Object.assign,Hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xm=Object.prototype.hasOwnProperty,Te=(t,e)=>Xm.call(t,e),re=Array.isArray,Or=t=>li(t)==="[object Map]",rs=t=>li(t)==="[object Set]",Hu=t=>li(t)==="[object Date]",fe=t=>typeof t=="function",Je=t=>typeof t=="string",$r=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",of=t=>(Ve(t)||fe(t))&&fe(t.then)&&fe(t.catch),af=Object.prototype.toString,li=t=>af.call(t),Zm=t=>li(t).slice(8,-1),cf=t=>li(t)==="[object Object]",Kc=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,eo=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},e_=/-(\w)/g,jr=$o(t=>t.replace(e_,(e,n)=>n?n.toUpperCase():"")),t_=/\B([A-Z])/g,wr=$o(t=>t.replace(t_,"-$1").toLowerCase()),lf=$o(t=>t.charAt(0).toUpperCase()+t.slice(1)),Da=$o(t=>t?`on${lf(t)}`:""),dr=(t,e)=>!Object.is(t,e),to=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ku;const Ja=()=>Ku||(Ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wt(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?i_(r):wt(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Ve(t))return t}const n_=/;(?![^(]*\))/g,r_=/:([^]+)/,s_=/\/\*[^]*?\*\//g;function i_(t){const e={};return t.replace(s_,"").split(n_).forEach(n=>{if(n){const r=n.split(r_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ss(t){let e="";if(Je(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=ss(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const o_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a_=qc(o_);function uf(t){return!!t||t===""}function c_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ui(t[r],e[r]);return n}function ui(t,e){if(t===e)return!0;let n=Hu(t),r=Hu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=$r(t),r=$r(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?c_(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!ui(t[a],e[a]))return!1}}return String(t)===String(e)}function Wc(t,e){return t.findIndex(n=>ui(n,e))}const at=t=>Je(t)?t:t==null?"":re(t)||Ve(t)&&(t.toString===af||!fe(t.toString))?JSON.stringify(t,hf,2):String(t),hf=(t,e)=>e&&e.__v_isRef?hf(t,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:rs(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!re(e)&&!cf(e)?String(e):e;let Dt;class df{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ff(t){return new df(t)}function l_(t,e=Dt){e&&e.active&&e.effects.push(t)}function pf(){return Dt}function u_(t){Dt&&Dt.cleanups.push(t)}const Gc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gf=t=>(t.w&zn)>0,mf=t=>(t.n&zn)>0,h_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=zn},d_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];gf(s)&&!mf(s)?s.delete(t):e[n++]=s,s.w&=~zn,s.n&=~zn}e.length=n}},Eo=new WeakMap;let Ns=0,zn=1;const Xa=30;let Lt;const ar=Symbol(""),Za=Symbol("");class Qc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,l_(this,r)}run(){if(!this.active)return this.fn();let e=Lt,n=Ln;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Lt,Lt=this,Ln=!0,zn=1<<++Ns,Ns<=Xa?h_(this):Wu(this),this.fn()}finally{Ns<=Xa&&d_(this),zn=1<<--Ns,Lt=this.parent,Ln=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Lt===this?this.deferStop=!0:this.active&&(Wu(this),this.onStop&&this.onStop(),this.active=!1)}}function Wu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ln=!0;const _f=[];function is(){_f.push(Ln),Ln=!1}function os(){const t=_f.pop();Ln=t===void 0?!0:t}function Rt(t,e,n){if(Ln&&Lt){let r=Eo.get(t);r||Eo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Gc()),yf(s)}}function yf(t,e){let n=!1;Ns<=Xa?mf(t)||(t.n|=zn,n=!gf(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function hn(t,e,n,r,s,i){const a=Eo.get(t);if(!a)return;let c=[];if(e==="clear")c=[...a.values()];else if(n==="length"&&re(t)){const l=Number(r);a.forEach((h,d)=>{(d==="length"||!$r(d)&&d>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(a.get(n)),e){case"add":re(t)?Kc(n)&&c.push(a.get("length")):(c.push(a.get(ar)),Or(t)&&c.push(a.get(Za)));break;case"delete":re(t)||(c.push(a.get(ar)),Or(t)&&c.push(a.get(Za)));break;case"set":Or(t)&&c.push(a.get(ar));break}if(c.length===1)c[0]&&ec(c[0]);else{const l=[];for(const h of c)h&&l.push(...h);ec(Gc(l))}}function ec(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&Gu(r);for(const r of n)r.computed||Gu(r)}function Gu(t,e){(t!==Lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function f_(t,e){var n;return(n=Eo.get(t))==null?void 0:n.get(e)}const p_=qc("__proto__,__v_isRef,__isVue"),vf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($r)),Qu=g_();function g_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let i=0,a=this.length;i<a;i++)Rt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){is();const r=be(this)[e].apply(this,n);return os(),r}}),t}function m_(t){const e=be(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class wf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?P_:Af:i?Tf:If).get(e))return e;const a=re(e);if(!s){if(a&&Te(Qu,n))return Reflect.get(Qu,n,r);if(n==="hasOwnProperty")return m_}const c=Reflect.get(e,n,r);return($r(n)?vf.has(n):p_(n))||(s||Rt(e,"get",n),i)?c:qe(c)?a&&Kc(n)?c:c.value:Ve(c)?s?Sf(c):hi(c):c}}class Ef extends wf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(qr(i)&&qe(i)&&!qe(r))return!1;if(!this._shallow&&(!Io(r)&&!qr(r)&&(i=be(i),r=be(r)),!re(e)&&qe(i)&&!qe(r)))return i.value=r,!0;const a=re(e)&&Kc(n)?Number(n)<e.length:Te(e,n),c=Reflect.set(e,n,r,s);return e===be(s)&&(a?dr(r,i)&&hn(e,"set",n,r):hn(e,"add",n,r)),c}deleteProperty(e,n){const r=Te(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!$r(n)||!vf.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",re(e)?"length":ar),Reflect.ownKeys(e)}}class __ extends wf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const y_=new Ef,v_=new __,w_=new Ef(!0),Yc=t=>t,jo=t=>Reflect.getPrototypeOf(t);function ji(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(dr(e,i)&&Rt(s,"get",e),Rt(s,"get",i));const{has:a}=jo(s),c=r?Yc:n?Zc:Gs;if(a.call(s,e))return c(t.get(e));if(a.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function qi(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(dr(t,s)&&Rt(r,"has",t),Rt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function zi(t,e=!1){return t=t.__v_raw,!e&&Rt(be(t),"iterate",ar),Reflect.get(t,"size",t)}function Yu(t){t=be(t);const e=be(this);return jo(e).has.call(e,t)||(e.add(t),hn(e,"add",t,t)),this}function Ju(t,e){e=be(e);const n=be(this),{has:r,get:s}=jo(n);let i=r.call(n,t);i||(t=be(t),i=r.call(n,t));const a=s.call(n,t);return n.set(t,e),i?dr(e,a)&&hn(n,"set",t,e):hn(n,"add",t,e),this}function Xu(t){const e=be(this),{has:n,get:r}=jo(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&hn(e,"delete",t,void 0),i}function Zu(){const t=be(this),e=t.size!==0,n=t.clear();return e&&hn(t,"clear",void 0,void 0),n}function Hi(t,e){return function(r,s){const i=this,a=i.__v_raw,c=be(a),l=e?Yc:t?Zc:Gs;return!t&&Rt(c,"iterate",ar),a.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function Ki(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),a=Or(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),d=n?Yc:e?Zc:Gs;return!e&&Rt(i,"iterate",l?Za:ar),{next(){const{value:g,done:m}=h.next();return m?{value:g,done:m}:{value:c?[d(g[0]),d(g[1])]:d(g),done:m}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function E_(){const t={get(i){return ji(this,i)},get size(){return zi(this)},has:qi,add:Yu,set:Ju,delete:Xu,clear:Zu,forEach:Hi(!1,!1)},e={get(i){return ji(this,i,!1,!0)},get size(){return zi(this)},has:qi,add:Yu,set:Ju,delete:Xu,clear:Zu,forEach:Hi(!1,!0)},n={get(i){return ji(this,i,!0)},get size(){return zi(this,!0)},has(i){return qi.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Hi(!0,!1)},r={get(i){return ji(this,i,!0,!0)},get size(){return zi(this,!0)},has(i){return qi.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ki(i,!1,!1),n[i]=Ki(i,!0,!1),e[i]=Ki(i,!1,!0),r[i]=Ki(i,!0,!0)}),[t,n,e,r]}const[I_,T_,A_,b_]=E_();function Jc(t,e){const n=e?t?b_:A_:t?T_:I_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const S_={get:Jc(!1,!1)},R_={get:Jc(!1,!0)},C_={get:Jc(!0,!1)},If=new WeakMap,Tf=new WeakMap,Af=new WeakMap,P_=new WeakMap;function k_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function D_(t){return t.__v_skip||!Object.isExtensible(t)?0:k_(Zm(t))}function hi(t){return qr(t)?t:Xc(t,!1,y_,S_,If)}function bf(t){return Xc(t,!1,w_,R_,Tf)}function Sf(t){return Xc(t,!0,v_,C_,Af)}function Xc(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=D_(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Fn(t){return qr(t)?Fn(t.__v_raw):!!(t&&t.__v_isReactive)}function qr(t){return!!(t&&t.__v_isReadonly)}function Io(t){return!!(t&&t.__v_isShallow)}function Rf(t){return Fn(t)||qr(t)}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function qo(t){return vo(t,"__v_skip",!0),t}const Gs=t=>Ve(t)?hi(t):t,Zc=t=>Ve(t)?Sf(t):t;function Cf(t){Ln&&Lt&&(t=be(t),yf(t.dep||(t.dep=Gc())))}function Pf(t,e){t=be(t);const n=t.dep;n&&ec(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function vt(t){return kf(t,!1)}function N_(t){return kf(t,!0)}function kf(t,e){return qe(t)?t:new O_(t,e)}class O_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:Gs(e)}get value(){return Cf(this),this._value}set value(e){const n=this.__v_isShallow||Io(e)||qr(e);e=n?e:be(e),dr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Gs(e),Pf(this))}}function Oe(t){return qe(t)?t.value:t}const x_={get:(t,e,n)=>Oe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Df(t){return Fn(t)?t:new Proxy(t,x_)}function V_(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=L_(t,n);return e}class M_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return f_(be(this._object),this._key)}}function L_(t,e,n){const r=t[e];return qe(r)?r:new M_(t,e,n)}class F_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Qc(e,()=>{this._dirty||(this._dirty=!0,Pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=be(this);return Cf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function U_(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=Ut):(r=t.get,s=t.set),new F_(r,s,i||!s,n)}function Un(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){zo(i,e,n)}return s}function Bt(t,e,n,r){if(fe(t)){const i=Un(t,e,n,r);return i&&of(i)&&i.catch(a=>{zo(a,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}function zo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,c=n;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,a,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Un(l,null,10,[t,a,c]);return}}B_(t,n,s,r)}function B_(t,e,n,r=!0){console.error(t)}let Qs=!1,tc=!1;const _t=[];let Kt=0;const xr=[];let on=null,rr=0;const Nf=Promise.resolve();let el=null;function tl(t){const e=el||Nf;return t?e.then(this?t.bind(this):t):e}function $_(t){let e=Kt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Ys(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function nl(t){(!_t.length||!_t.includes(t,Qs&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?_t.push(t):_t.splice($_(t.id),0,t),Of())}function Of(){!Qs&&!tc&&(tc=!0,el=Nf.then(Vf))}function j_(t){const e=_t.indexOf(t);e>Kt&&_t.splice(e,1)}function q_(t){re(t)?xr.push(...t):(!on||!on.includes(t,t.allowRecurse?rr+1:rr))&&xr.push(t),Of()}function eh(t,e=Qs?Kt+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function xf(t){if(xr.length){const e=[...new Set(xr)];if(xr.length=0,on){on.push(...e);return}for(on=e,on.sort((n,r)=>Ys(n)-Ys(r)),rr=0;rr<on.length;rr++)on[rr]();on=null,rr=0}}const Ys=t=>t.id==null?1/0:t.id,z_=(t,e)=>{const n=Ys(t)-Ys(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Vf(t){tc=!1,Qs=!0,_t.sort(z_);const e=Ut;try{for(Kt=0;Kt<_t.length;Kt++){const n=_t[Kt];n&&n.active!==!1&&Un(n,null,14)}}finally{Kt=0,_t.length=0,xf(),Qs=!1,el=null,(_t.length||xr.length)&&Vf()}}function H_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),a=i&&e.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:g,trim:m}=r[d]||Fe;m&&(s=n.map(b=>Je(b)?b.trim():b)),g&&(s=n.map(wo))}let c,l=r[c=Da(e)]||r[c=Da(jr(e))];!l&&i&&(l=r[c=Da(wr(e))]),l&&Bt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Bt(h,t,6,s)}}function Mf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!fe(t)){const l=h=>{const d=Mf(h,e,!0);d&&(c=!0,lt(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):lt(a,i),Ve(t)&&r.set(t,a),a)}function Ho(t,e){return!t||!Bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,wr(e))||Te(t,e))}let Ot=null,Ko=null;function To(t){const e=Ot;return Ot=t,Ko=t&&t.type.__scopeId||null,e}function di(t){Ko=t}function fi(){Ko=null}function no(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uh(-1);const i=To(e);let a;try{a=t(...s)}finally{To(i),r._d&&uh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Na(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[a],slots:c,attrs:l,emit:h,render:d,renderCache:g,data:m,setupState:b,ctx:P,inheritAttrs:k}=t;let N,U;const M=To(t);try{if(n.shapeFlag&4){const K=s||r,he=K;N=Ht(d.call(he,K,g,i,b,m,P)),U=l}else{const K=e;N=Ht(K.length>1?K(i,{attrs:l,slots:c,emit:h}):K(i,null)),U=e.props?l:K_(l)}}catch(K){Us.length=0,zo(K,t,1),N=Pe(fr)}let Q=N;if(U&&k!==!1){const K=Object.keys(U),{shapeFlag:he}=Q;K.length&&he&7&&(a&&K.some(zc)&&(U=W_(U,a)),Q=zr(Q,U))}return n.dirs&&(Q=zr(Q),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&(Q.transition=n.transition),N=Q,To(M),N}const K_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bo(n))&&((e||(e={}))[n]=t[n]);return e},W_=(t,e)=>{const n={};for(const r in t)(!zc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function G_(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?th(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const m=d[g];if(a[m]!==r[m]&&!Ho(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?th(r,a,h):!0:!!a;return!1}function th(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ho(n,i))return!0}return!1}function Q_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Y_=Symbol.for("v-ndc"),J_=t=>t.__isSuspense;function X_(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):q_(t)}const Wi={};function Ls(t,e,n){return Lf(t,e,n)}function Lf(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:a}=Fe){var c;const l=pf()===((c=ot)==null?void 0:c.scope)?ot:null;let h,d=!1,g=!1;if(qe(t)?(h=()=>t.value,d=Io(t)):Fn(t)?(h=()=>t,r=!0):re(t)?(g=!0,d=t.some(K=>Fn(K)||Io(K)),h=()=>t.map(K=>{if(qe(K))return K.value;if(Fn(K))return ir(K);if(fe(K))return Un(K,l,2)})):fe(t)?e?h=()=>Un(t,l,2):h=()=>{if(!(l&&l.isUnmounted))return m&&m(),Bt(t,l,3,[b])}:h=Ut,e&&r){const K=h;h=()=>ir(K())}let m,b=K=>{m=M.onStop=()=>{Un(K,l,4),m=M.onStop=void 0}},P;if(Zs)if(b=Ut,e?n&&Bt(e,l,3,[h(),g?[]:void 0,b]):h(),s==="sync"){const K=qy();P=K.__watcherHandles||(K.__watcherHandles=[])}else return Ut;let k=g?new Array(t.length).fill(Wi):Wi;const N=()=>{if(M.active)if(e){const K=M.run();(r||d||(g?K.some((he,ge)=>dr(he,k[ge])):dr(K,k)))&&(m&&m(),Bt(e,l,3,[K,k===Wi?void 0:g&&k[0]===Wi?[]:k,b]),k=K)}else M.run()};N.allowRecurse=!!e;let U;s==="sync"?U=N:s==="post"?U=()=>St(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),U=()=>nl(N));const M=new Qc(h,U);e?n?N():k=M.run():s==="post"?St(M.run.bind(M),l&&l.suspense):M.run();const Q=()=>{M.stop(),l&&l.scope&&Hc(l.scope.effects,M)};return P&&P.push(Q),Q}function Z_(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Ff(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const a=ot;Hr(this);const c=Lf(s,i.bind(r),n);return a?Hr(a):cr(),c}function Ff(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ir(t,e){if(!Ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))ir(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(rs(t)||Or(t))t.forEach(n=>{ir(n,e)});else if(cf(t))for(const n in t)ir(t[n],e);return t}function Gt(t,e){const n=Ot;if(n===null)return t;const r=Yo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[a,c,l,h=Fe]=e[i];a&&(fe(a)&&(a={mounted:a,updated:a}),a.deep&&ir(c),s.push({dir:a,instance:r,value:c,oldValue:void 0,arg:l,modifiers:h}))}return t}function er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(is(),Bt(l,n,8,[t.el,c,t,e]),os())}}/*! #__NO_SIDE_EFFECTS__ */function He(t,e){return fe(t)?(()=>lt({name:t.name},e,{setup:t}))():t}const ro=t=>!!t.type.__asyncLoader,Uf=t=>t.type.__isKeepAlive;function ey(t,e){Bf(t,"a",e)}function ty(t,e){Bf(t,"da",e)}function Bf(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Uf(s.parent.vnode)&&ny(r,e,n,s),s=s.parent}}function ny(t,e,n,r){const s=Wo(e,t,r,!0);qf(()=>{Hc(r[e],s)},n)}function Wo(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;is(),Hr(n);const c=Bt(e,n,t,a);return cr(),os(),c});return r?s.unshift(i):s.push(i),i}}const _n=t=>(e,n=ot)=>(!Zs||t==="sp")&&Wo(t,(...r)=>e(...r),n),$f=_n("bm"),jf=_n("m"),ry=_n("bu"),sy=_n("u"),iy=_n("bum"),qf=_n("um"),oy=_n("sp"),ay=_n("rtg"),cy=_n("rtc");function ly(t,e=ot){Wo("ec",t,e)}function dn(t,e,n,r){let s;const i=n&&n[r];if(re(t)||Je(t)){s=new Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=e(t[a],a,void 0,i&&i[a])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i&&i[a])}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i&&i[c]));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const h=a[c];s[c]=e(t[h],h,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const nc=t=>t?tp(t)?Yo(t)||t.proxy:nc(t.parent):null,Fs=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$emit:t=>t.emit,$options:t=>rl(t),$forceUpdate:t=>t.f||(t.f=()=>nl(t.update)),$nextTick:t=>t.n||(t.n=tl.bind(t.proxy)),$watch:t=>Z_.bind(t)}),Oa=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Te(t,e),uy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Oa(r,e))return a[e]=1,r[e];if(s!==Fe&&Te(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Te(h,e))return a[e]=3,i[e];if(n!==Fe&&Te(n,e))return a[e]=4,n[e];rc&&(a[e]=0)}}const d=Fs[e];let g,m;if(d)return e==="$attrs"&&Rt(t,"get",e),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Fe&&Te(n,e))return a[e]=4,n[e];if(m=l.config.globalProperties,Te(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Oa(s,e)?(s[e]=n,!0):r!==Fe&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==Fe&&Te(t,a)||Oa(e,a)||(c=i[0])&&Te(c,a)||Te(r,a)||Te(Fs,a)||Te(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nh(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rc=!0;function hy(t){const e=rl(t),n=t.proxy,r=t.ctx;rc=!1,e.beforeCreate&&rh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:g,mounted:m,beforeUpdate:b,updated:P,activated:k,deactivated:N,beforeDestroy:U,beforeUnmount:M,destroyed:Q,unmounted:K,render:he,renderTracked:ge,renderTriggered:T,errorCaptured:_,serverPrefetch:y,expose:I,inheritAttrs:A,components:S,directives:w,filters:rt}=e;if(h&&dy(h,r,null),a)for(const Ie in a){const _e=a[Ie];fe(_e)&&(r[Ie]=_e.bind(n))}if(s){const Ie=s.call(n,n);Ve(Ie)&&(t.data=hi(Ie))}if(rc=!0,i)for(const Ie in i){const _e=i[Ie],Pt=fe(_e)?_e.bind(n,n):fe(_e.get)?_e.get.bind(n,n):Ut,xt=!fe(_e)&&fe(_e.set)?_e.set.bind(n):Ut,Nt=me({get:Pt,set:xt});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Ue=>Nt.value=Ue})}if(c)for(const Ie in c)zf(c[Ie],r,n,Ie);if(l){const Ie=fe(l)?l.call(n):l;Reflect.ownKeys(Ie).forEach(_e=>{so(_e,Ie[_e])})}d&&rh(d,t,"c");function Ee(Ie,_e){re(_e)?_e.forEach(Pt=>Ie(Pt.bind(n))):_e&&Ie(_e.bind(n))}if(Ee($f,g),Ee(jf,m),Ee(ry,b),Ee(sy,P),Ee(ey,k),Ee(ty,N),Ee(ly,_),Ee(cy,ge),Ee(ay,T),Ee(iy,M),Ee(qf,K),Ee(oy,y),re(I))if(I.length){const Ie=t.exposed||(t.exposed={});I.forEach(_e=>{Object.defineProperty(Ie,_e,{get:()=>n[_e],set:Pt=>n[_e]=Pt})})}else t.exposed||(t.exposed={});he&&t.render===Ut&&(t.render=he),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),w&&(t.directives=w)}function dy(t,e,n=Ut){re(t)&&(t=sc(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Qt(s.from||r,s.default,!0):i=Qt(s.from||r):i=Qt(s),qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function rh(t,e,n){Bt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zf(t,e,n,r){const s=r.includes(".")?Ff(n,r):()=>n[r];if(Je(t)){const i=e[t];fe(i)&&Ls(s,i)}else if(fe(t))Ls(s,t.bind(n));else if(Ve(t))if(re(t))t.forEach(i=>zf(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Ls(s,i,t)}}function rl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ao(l,h,a,!0)),Ao(l,e,a)),Ve(e)&&i.set(e,l),l}function Ao(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ao(t,i,n,!0),s&&s.forEach(a=>Ao(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=fy[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const fy={data:sh,props:ih,emits:ih,methods:Os,computed:Os,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Os,directives:Os,watch:gy,provide:sh,inject:py};function sh(t,e){return e?t?function(){return lt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function py(t,e){return Os(sc(t),sc(e))}function sc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?lt(Object.create(null),t,e):e}function ih(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:lt(Object.create(null),nh(t),nh(e??{})):e}function gy(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function Hf(){return{app:null,config:{isNativeTag:Ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let my=0;function _y(t,e){return function(r,s=null){fe(r)||(r=lt({},r)),s!=null&&!Ve(s)&&(s=null);const i=Hf(),a=new WeakSet;let c=!1;const l=i.app={_uid:my++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zy,get config(){return i.config},set config(h){},use(h,...d){return a.has(h)||(h&&fe(h.install)?(a.add(h),h.install(l,...d)):fe(h)&&(a.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,g){if(!c){const m=Pe(r,s);return m.appContext=i,d&&e?e(m,h):t(m,h,g),c=!0,l._container=h,h.__vue_app__=l,Yo(m.component)||m.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){Js=l;try{return h()}finally{Js=null}}};return l}}let Js=null;function so(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Qt(t,e,n=!1){const r=ot||Ot;if(r||Js){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Js._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function yy(){return!!(ot||Ot||Js)}function vy(t,e,n,r=!1){const s={},i={};vo(i,Qo,1),t.propsDefaults=Object.create(null),Kf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:bf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function wy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=be(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let m=d[g];if(Ho(t.emitsOptions,m))continue;const b=e[m];if(l)if(Te(i,m))b!==i[m]&&(i[m]=b,h=!0);else{const P=jr(m);s[P]=ic(l,c,P,b,t,!1)}else b!==i[m]&&(i[m]=b,h=!0)}}}else{Kf(t,e,s,i)&&(h=!0);let d;for(const g in c)(!e||!Te(e,g)&&((d=wr(g))===g||!Te(e,d)))&&(l?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=ic(l,c,g,void 0,t,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!Te(e,g))&&(delete i[g],h=!0)}h&&hn(t,"set","$attrs")}function Kf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(eo(l))continue;const h=e[l];let d;s&&Te(s,d=jr(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:Ho(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=be(n),h=c||Fe;for(let d=0;d<i.length;d++){const g=i[d];n[g]=ic(s,l,g,h[g],t,!Te(h,g))}}return a}function ic(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&fe(l)){const{propsDefaults:h}=s;n in h?r=h[n]:(Hr(s),r=h[n]=l.call(null,e),cr())}else r=l}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===wr(n))&&(r=!0))}return r}function Wf(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!fe(t)){const d=g=>{l=!0;const[m,b]=Wf(g,e,!0);lt(a,m),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ve(t)&&r.set(t,Nr),Nr;if(re(i))for(let d=0;d<i.length;d++){const g=jr(i[d]);oh(g)&&(a[g]=Fe)}else if(i)for(const d in i){const g=jr(d);if(oh(g)){const m=i[d],b=a[g]=re(m)||fe(m)?{type:m}:lt({},m);if(b){const P=lh(Boolean,b.type),k=lh(String,b.type);b[0]=P>-1,b[1]=k<0||P<k,(P>-1||Te(b,"default"))&&c.push(g)}}}const h=[a,c];return Ve(t)&&r.set(t,h),h}function oh(t){return t[0]!=="$"}function ah(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ch(t,e){return ah(t)===ah(e)}function lh(t,e){return re(e)?e.findIndex(n=>ch(n,t)):fe(e)&&ch(e,t)?0:-1}const Gf=t=>t[0]==="_"||t==="$stable",sl=t=>re(t)?t.map(Ht):[Ht(t)],Ey=(t,e,n)=>{if(e._n)return e;const r=no((...s)=>sl(e(...s)),n);return r._c=!1,r},Qf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gf(s))continue;const i=t[s];if(fe(i))e[s]=Ey(s,i,r);else if(i!=null){const a=sl(i);e[s]=()=>a}}},Yf=(t,e)=>{const n=sl(e);t.slots.default=()=>n},Iy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=be(e),vo(e,"_",n)):Qf(e,t.slots={})}else t.slots={},e&&Yf(t,e);vo(t.slots,Qo,1)},Ty=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Fe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(lt(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Qf(e,s)),a=e}else e&&(Yf(t,e),a={default:1});if(i)for(const c in s)!Gf(c)&&a[c]==null&&delete s[c]};function oc(t,e,n,r,s=!1){if(re(t)){t.forEach((m,b)=>oc(m,e&&(re(e)?e[b]:e),n,r,s));return}if(ro(r)&&!s)return;const i=r.shapeFlag&4?Yo(r.component)||r.component.proxy:r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Fe?c.refs={}:c.refs,g=c.setupState;if(h!=null&&h!==l&&(Je(h)?(d[h]=null,Te(g,h)&&(g[h]=null)):qe(h)&&(h.value=null)),fe(l))Un(l,c,12,[a,d]);else{const m=Je(l),b=qe(l);if(m||b){const P=()=>{if(t.f){const k=m?Te(g,l)?g[l]:d[l]:l.value;s?re(k)&&Hc(k,i):re(k)?k.includes(i)||k.push(i):m?(d[l]=[i],Te(g,l)&&(g[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else m?(d[l]=a,Te(g,l)&&(g[l]=a)):b&&(l.value=a,t.k&&(d[t.k]=a))};a?(P.id=-1,St(P,n)):P()}}}const St=X_;function Ay(t){return by(t)}function by(t,e){const n=Ja();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:g,nextSibling:m,setScopeId:b=Ut,insertStaticContent:P}=t,k=(v,E,C,O=null,V=null,L=null,W=!1,j=null,z=!!E.dynamicChildren)=>{if(v===E)return;v&&!Cs(v,E)&&(O=x(v),Ue(v,V,L,!0),v=null),E.patchFlag===-2&&(z=!1,E.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:J}=E;switch(F){case Go:N(v,E,C,O);break;case fr:U(v,E,C,O);break;case io:v==null&&M(E,C,O,W);break;case Ye:S(v,E,C,O,V,L,W,j,z);break;default:J&1?he(v,E,C,O,V,L,W,j,z):J&6?w(v,E,C,O,V,L,W,j,z):(J&64||J&128)&&F.process(v,E,C,O,V,L,W,j,z,H)}ne!=null&&V&&oc(ne,v&&v.ref,L,E||v,!E)},N=(v,E,C,O)=>{if(v==null)r(E.el=c(E.children),C,O);else{const V=E.el=v.el;E.children!==v.children&&h(V,E.children)}},U=(v,E,C,O)=>{v==null?r(E.el=l(E.children||""),C,O):E.el=v.el},M=(v,E,C,O)=>{[v.el,v.anchor]=P(v.children,E,C,O,v.el,v.anchor)},Q=({el:v,anchor:E},C,O)=>{let V;for(;v&&v!==E;)V=m(v),r(v,C,O),v=V;r(E,C,O)},K=({el:v,anchor:E})=>{let C;for(;v&&v!==E;)C=m(v),s(v),v=C;s(E)},he=(v,E,C,O,V,L,W,j,z)=>{W=W||E.type==="svg",v==null?ge(E,C,O,V,L,W,j,z):y(v,E,V,L,W,j,z)},ge=(v,E,C,O,V,L,W,j)=>{let z,F;const{type:ne,props:J,shapeFlag:te,transition:ie,dirs:pe}=v;if(z=v.el=a(v.type,L,J&&J.is,J),te&8?d(z,v.children):te&16&&_(v.children,z,null,O,V,L&&ne!=="foreignObject",W,j),pe&&er(v,null,O,"created"),T(z,v,v.scopeId,W,O),J){for(const ae in J)ae!=="value"&&!eo(ae)&&i(z,ae,null,J[ae],L,v.children,O,V,et);"value"in J&&i(z,"value",null,J.value),(F=J.onVnodeBeforeMount)&&zt(F,O,v)}pe&&er(v,null,O,"beforeMount");const le=Sy(V,ie);le&&ie.beforeEnter(z),r(z,E,C),((F=J&&J.onVnodeMounted)||le||pe)&&St(()=>{F&&zt(F,O,v),le&&ie.enter(z),pe&&er(v,null,O,"mounted")},V)},T=(v,E,C,O,V)=>{if(C&&b(v,C),O)for(let L=0;L<O.length;L++)b(v,O[L]);if(V){let L=V.subTree;if(E===L){const W=V.vnode;T(v,W,W.scopeId,W.slotScopeIds,V.parent)}}},_=(v,E,C,O,V,L,W,j,z=0)=>{for(let F=z;F<v.length;F++){const ne=v[F]=j?Cn(v[F]):Ht(v[F]);k(null,ne,E,C,O,V,L,W,j)}},y=(v,E,C,O,V,L,W)=>{const j=E.el=v.el;let{patchFlag:z,dynamicChildren:F,dirs:ne}=E;z|=v.patchFlag&16;const J=v.props||Fe,te=E.props||Fe;let ie;C&&tr(C,!1),(ie=te.onVnodeBeforeUpdate)&&zt(ie,C,E,v),ne&&er(E,v,C,"beforeUpdate"),C&&tr(C,!0);const pe=V&&E.type!=="foreignObject";if(F?I(v.dynamicChildren,F,j,C,O,pe,L):W||_e(v,E,j,null,C,O,pe,L,!1),z>0){if(z&16)A(j,E,J,te,C,O,V);else if(z&2&&J.class!==te.class&&i(j,"class",null,te.class,V),z&4&&i(j,"style",J.style,te.style,V),z&8){const le=E.dynamicProps;for(let ae=0;ae<le.length;ae++){const Me=le[ae],At=J[Me],tn=te[Me];(tn!==At||Me==="value")&&i(j,Me,At,tn,V,v.children,C,O,et)}}z&1&&v.children!==E.children&&d(j,E.children)}else!W&&F==null&&A(j,E,J,te,C,O,V);((ie=te.onVnodeUpdated)||ne)&&St(()=>{ie&&zt(ie,C,E,v),ne&&er(E,v,C,"updated")},O)},I=(v,E,C,O,V,L,W)=>{for(let j=0;j<E.length;j++){const z=v[j],F=E[j],ne=z.el&&(z.type===Ye||!Cs(z,F)||z.shapeFlag&70)?g(z.el):C;k(z,F,ne,null,O,V,L,W,!0)}},A=(v,E,C,O,V,L,W)=>{if(C!==O){if(C!==Fe)for(const j in C)!eo(j)&&!(j in O)&&i(v,j,C[j],null,W,E.children,V,L,et);for(const j in O){if(eo(j))continue;const z=O[j],F=C[j];z!==F&&j!=="value"&&i(v,j,F,z,W,E.children,V,L,et)}"value"in O&&i(v,"value",C.value,O.value)}},S=(v,E,C,O,V,L,W,j,z)=>{const F=E.el=v?v.el:c(""),ne=E.anchor=v?v.anchor:c("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:ie}=E;ie&&(j=j?j.concat(ie):ie),v==null?(r(F,C,O),r(ne,C,O),_(E.children,C,ne,V,L,W,j,z)):J>0&&J&64&&te&&v.dynamicChildren?(I(v.dynamicChildren,te,C,V,L,W,j),(E.key!=null||V&&E===V.subTree)&&Jf(v,E,!0)):_e(v,E,C,ne,V,L,W,j,z)},w=(v,E,C,O,V,L,W,j,z)=>{E.slotScopeIds=j,v==null?E.shapeFlag&512?V.ctx.activate(E,C,O,W,z):rt(E,C,O,V,L,W,z):Ze(v,E,z)},rt=(v,E,C,O,V,L,W)=>{const j=v.component=My(v,O,V);if(Uf(v)&&(j.ctx.renderer=H),Ly(j),j.asyncDep){if(V&&V.registerDep(j,Ee),!v.el){const z=j.subTree=Pe(fr);U(null,z,E,C)}return}Ee(j,v,E,C,V,L,W)},Ze=(v,E,C)=>{const O=E.component=v.component;if(G_(v,E,C))if(O.asyncDep&&!O.asyncResolved){Ie(O,E,C);return}else O.next=E,j_(O.update),O.update();else E.el=v.el,O.vnode=E},Ee=(v,E,C,O,V,L,W)=>{const j=()=>{if(v.isMounted){let{next:ne,bu:J,u:te,parent:ie,vnode:pe}=v,le=ne,ae;tr(v,!1),ne?(ne.el=pe.el,Ie(v,ne,W)):ne=pe,J&&to(J),(ae=ne.props&&ne.props.onVnodeBeforeUpdate)&&zt(ae,ie,ne,pe),tr(v,!0);const Me=Na(v),At=v.subTree;v.subTree=Me,k(At,Me,g(At.el),x(At),v,V,L),ne.el=Me.el,le===null&&Q_(v,Me.el),te&&St(te,V),(ae=ne.props&&ne.props.onVnodeUpdated)&&St(()=>zt(ae,ie,ne,pe),V)}else{let ne;const{el:J,props:te}=E,{bm:ie,m:pe,parent:le}=v,ae=ro(E);if(tr(v,!1),ie&&to(ie),!ae&&(ne=te&&te.onVnodeBeforeMount)&&zt(ne,le,E),tr(v,!0),J&&ye){const Me=()=>{v.subTree=Na(v),ye(J,v.subTree,v,V,null)};ae?E.type.__asyncLoader().then(()=>!v.isUnmounted&&Me()):Me()}else{const Me=v.subTree=Na(v);k(null,Me,C,O,v,V,L),E.el=Me.el}if(pe&&St(pe,V),!ae&&(ne=te&&te.onVnodeMounted)){const Me=E;St(()=>zt(ne,le,Me),V)}(E.shapeFlag&256||le&&ro(le.vnode)&&le.vnode.shapeFlag&256)&&v.a&&St(v.a,V),v.isMounted=!0,E=C=O=null}},z=v.effect=new Qc(j,()=>nl(F),v.scope),F=v.update=()=>z.run();F.id=v.uid,tr(v,!0),F()},Ie=(v,E,C)=>{E.component=v;const O=v.vnode.props;v.vnode=E,v.next=null,wy(v,E.props,O,C),Ty(v,E.children,C),is(),eh(),os()},_e=(v,E,C,O,V,L,W,j,z=!1)=>{const F=v&&v.children,ne=v?v.shapeFlag:0,J=E.children,{patchFlag:te,shapeFlag:ie}=E;if(te>0){if(te&128){xt(F,J,C,O,V,L,W,j,z);return}else if(te&256){Pt(F,J,C,O,V,L,W,j,z);return}}ie&8?(ne&16&&et(F,V,L),J!==F&&d(C,J)):ne&16?ie&16?xt(F,J,C,O,V,L,W,j,z):et(F,V,L,!0):(ne&8&&d(C,""),ie&16&&_(J,C,O,V,L,W,j,z))},Pt=(v,E,C,O,V,L,W,j,z)=>{v=v||Nr,E=E||Nr;const F=v.length,ne=E.length,J=Math.min(F,ne);let te;for(te=0;te<J;te++){const ie=E[te]=z?Cn(E[te]):Ht(E[te]);k(v[te],ie,C,null,V,L,W,j,z)}F>ne?et(v,V,L,!0,!1,J):_(E,C,O,V,L,W,j,z,J)},xt=(v,E,C,O,V,L,W,j,z)=>{let F=0;const ne=E.length;let J=v.length-1,te=ne-1;for(;F<=J&&F<=te;){const ie=v[F],pe=E[F]=z?Cn(E[F]):Ht(E[F]);if(Cs(ie,pe))k(ie,pe,C,null,V,L,W,j,z);else break;F++}for(;F<=J&&F<=te;){const ie=v[J],pe=E[te]=z?Cn(E[te]):Ht(E[te]);if(Cs(ie,pe))k(ie,pe,C,null,V,L,W,j,z);else break;J--,te--}if(F>J){if(F<=te){const ie=te+1,pe=ie<ne?E[ie].el:O;for(;F<=te;)k(null,E[F]=z?Cn(E[F]):Ht(E[F]),C,pe,V,L,W,j,z),F++}}else if(F>te)for(;F<=J;)Ue(v[F],V,L,!0),F++;else{const ie=F,pe=F,le=new Map;for(F=pe;F<=te;F++){const ht=E[F]=z?Cn(E[F]):Ht(E[F]);ht.key!=null&&le.set(ht.key,F)}let ae,Me=0;const At=te-pe+1;let tn=!1,Si=0;const Vt=new Array(At);for(F=0;F<At;F++)Vt[F]=0;for(F=ie;F<=J;F++){const ht=v[F];if(Me>=At){Ue(ht,V,L,!0);continue}let bt;if(ht.key!=null)bt=le.get(ht.key);else for(ae=pe;ae<=te;ae++)if(Vt[ae-pe]===0&&Cs(ht,E[ae])){bt=ae;break}bt===void 0?Ue(ht,V,L,!0):(Vt[bt-pe]=F+1,bt>=Si?Si=bt:tn=!0,k(ht,E[bt],C,null,V,L,W,j,z),Me++)}const ps=tn?Ry(Vt):Nr;for(ae=ps.length-1,F=At-1;F>=0;F--){const ht=pe+F,bt=E[ht],Ri=ht+1<ne?E[ht+1].el:O;Vt[F]===0?k(null,bt,C,Ri,V,L,W,j,z):tn&&(ae<0||F!==ps[ae]?Nt(bt,C,Ri,2):ae--)}}},Nt=(v,E,C,O,V=null)=>{const{el:L,type:W,transition:j,children:z,shapeFlag:F}=v;if(F&6){Nt(v.component.subTree,E,C,O);return}if(F&128){v.suspense.move(E,C,O);return}if(F&64){W.move(v,E,C,H);return}if(W===Ye){r(L,E,C);for(let J=0;J<z.length;J++)Nt(z[J],E,C,O);r(v.anchor,E,C);return}if(W===io){Q(v,E,C);return}if(O!==2&&F&1&&j)if(O===0)j.beforeEnter(L),r(L,E,C),St(()=>j.enter(L),V);else{const{leave:J,delayLeave:te,afterLeave:ie}=j,pe=()=>r(L,E,C),le=()=>{J(L,()=>{pe(),ie&&ie()})};te?te(L,pe,le):le()}else r(L,E,C)},Ue=(v,E,C,O=!1,V=!1)=>{const{type:L,props:W,ref:j,children:z,dynamicChildren:F,shapeFlag:ne,patchFlag:J,dirs:te}=v;if(j!=null&&oc(j,null,C,v,!0),ne&256){E.ctx.deactivate(v);return}const ie=ne&1&&te,pe=!ro(v);let le;if(pe&&(le=W&&W.onVnodeBeforeUnmount)&&zt(le,E,v),ne&6)qt(v.component,C,O);else{if(ne&128){v.suspense.unmount(C,O);return}ie&&er(v,null,E,"beforeUnmount"),ne&64?v.type.remove(v,E,C,V,H,O):F&&(L!==Ye||J>0&&J&64)?et(F,E,C,!1,!0):(L===Ye&&J&384||!V&&ne&16)&&et(z,E,C),O&&Be(v)}(pe&&(le=W&&W.onVnodeUnmounted)||ie)&&St(()=>{le&&zt(le,E,v),ie&&er(v,null,E,"unmounted")},C)},Be=v=>{const{type:E,el:C,anchor:O,transition:V}=v;if(E===Ye){wn(C,O);return}if(E===io){K(v);return}const L=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(v.shapeFlag&1&&V&&!V.persisted){const{leave:W,delayLeave:j}=V,z=()=>W(C,L);j?j(v.el,L,z):z()}else L()},wn=(v,E)=>{let C;for(;v!==E;)C=m(v),s(v),v=C;s(E)},qt=(v,E,C)=>{const{bum:O,scope:V,update:L,subTree:W,um:j}=v;O&&to(O),V.stop(),L&&(L.active=!1,Ue(W,v,E,C)),j&&St(j,E),St(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},et=(v,E,C,O=!1,V=!1,L=0)=>{for(let W=L;W<v.length;W++)Ue(v[W],E,C,O,V)},x=v=>v.shapeFlag&6?x(v.component.subTree):v.shapeFlag&128?v.suspense.next():m(v.anchor||v.el),Y=(v,E,C)=>{v==null?E._vnode&&Ue(E._vnode,null,null,!0):k(E._vnode||null,v,E,null,null,null,C),eh(),xf(),E._vnode=v},H={p:k,um:Ue,m:Nt,r:Be,mt:rt,mc:_,pc:_e,pbc:I,n:x,o:t};let ee,ye;return e&&([ee,ye]=e(H)),{render:Y,hydrate:ee,createApp:_y(Y,ee)}}function tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jf(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Cn(s[i]),c.el=a.el),n||Jf(a,c)),c.type===Go&&(c.el=a.el)}}function Ry(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}const Cy=t=>t.__isTeleport,Ye=Symbol.for("v-fgt"),Go=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),io=Symbol.for("v-stc"),Us=[];let Ft=null;function ce(t=!1){Us.push(Ft=t?null:[])}function Py(){Us.pop(),Ft=Us[Us.length-1]||null}let Xs=1;function uh(t){Xs+=t}function Xf(t){return t.dynamicChildren=Xs>0?Ft||Nr:null,Py(),Xs>0&&Ft&&Ft.push(t),t}function De(t,e,n,r,s,i){return Xf(G(t,e,n,r,s,i,!0))}function Ct(t,e,n,r,s){return Xf(Pe(t,e,n,r,s,!0))}function ac(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Qo="__vInternal",Zf=({key:t})=>t??null,oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||qe(t)||fe(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function G(t,e=null,n=null,r=0,s=null,i=t===Ye?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zf(e),ref:e&&oo(e),scopeId:Ko,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return c?(il(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),Xs>0&&!a&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const Pe=ky;function ky(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Y_)&&(t=fr),ac(t)){const c=zr(t,e,!0);return n&&il(c,n),Xs>0&&!i&&Ft&&(c.shapeFlag&6?Ft[Ft.indexOf(t)]=c:Ft.push(c)),c.patchFlag|=-2,c}if($y(t)&&(t=t.__vccOpts),e){e=Dy(e);let{class:c,style:l}=e;c&&!Je(c)&&(e.class=ss(c)),Ve(l)&&(Rf(l)&&!re(l)&&(l=lt({},l)),e.style=wt(l))}const a=Je(t)?1:J_(t)?128:Cy(t)?64:Ve(t)?4:fe(t)?2:0;return G(t,e,n,r,s,a,i,!0)}function Dy(t){return t?Rf(t)||Qo in t?lt({},t):t:null}function zr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:a}=t,c=e?Oy(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zf(c),ref:e&&e.ref?n&&s?re(s)?s.concat(oo(e)):[s,oo(e)]:oo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ao(t=" ",e=0){return Pe(Go,null,t,e)}function Ny(t,e){const n=Pe(io,null,t);return n.staticCount=e,n}function ep(t="",e=!1){return e?(ce(),Ct(fr,null,t)):Pe(fr,null,t)}function Ht(t){return t==null||typeof t=="boolean"?Pe(fr):re(t)?Pe(Ye,null,t.slice()):typeof t=="object"?Cn(t):Pe(Go,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function il(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),il(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Qo in e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[ao(e)]):n=8);t.children=e,t.shapeFlag|=n}function Oy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ss([e.class,r.class]));else if(s==="style")e.style=wt([e.style,r.style]);else if(Bo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){Bt(t,e,7,[n,r])}const xy=Hf();let Vy=0;function My(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||xy,i={uid:Vy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(r,s),emitsOptions:Mf(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=H_.bind(null,i),t.ce&&t.ce(i),i}let ot=null,ol,br,hh="__VUE_INSTANCE_SETTERS__";(br=Ja()[hh])||(br=Ja()[hh]=[]),br.push(t=>ot=t),ol=t=>{br.length>1?br.forEach(e=>e(t)):br[0](t)};const Hr=t=>{ol(t),t.scope.on()},cr=()=>{ot&&ot.scope.off(),ol(null)};function tp(t){return t.vnode.shapeFlag&4}let Zs=!1;function Ly(t,e=!1){Zs=e;const{props:n,children:r}=t.vnode,s=tp(t);vy(t,n,s,e),Iy(t,r);const i=s?Fy(t,e):void 0;return Zs=!1,i}function Fy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qo(new Proxy(t.ctx,uy));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?By(t):null;Hr(t),is();const i=Un(r,t,0,[t.props,s]);if(os(),cr(),of(i)){if(i.then(cr,cr),e)return i.then(a=>{dh(t,a,e)}).catch(a=>{zo(a,t,0)});t.asyncDep=i}else dh(t,i,e)}else np(t,e)}function dh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Df(e)),np(t,n)}let fh;function np(t,e,n){const r=t.type;if(!t.render){if(!e&&fh&&!r.render){const s=r.template||rl(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=lt(lt({isCustomElement:i,delimiters:c},a),l);r.render=fh(s,h)}}t.render=r.render||Ut}{Hr(t),is();try{hy(t)}finally{os(),cr()}}}function Uy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}}))}function By(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Uy(t)},slots:t.slots,emit:t.emit,expose:e}}function Yo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Df(qo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}}))}function $y(t){return fe(t)&&"__vccOpts"in t}const me=(t,e)=>U_(t,e,Zs);function rp(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!re(e)?ac(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ac(n)&&(n=[n]),Pe(t,e,n))}const jy=Symbol.for("v-scx"),qy=()=>Qt(jy),zy="3.3.9",Hy="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,ph=sr&&sr.createElement("template"),Ky={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(Hy,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ph.innerHTML=r?`<svg>${t}</svg>`:t;const c=ph.content;if(r){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wy=Symbol("_vtc");function Gy(t,e,n){const r=t[Wy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const al=Symbol("_vod"),bo={beforeMount(t,{value:e},{transition:n}){t[al]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ps(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ps(t,!0),r.enter(t)):r.leave(t,()=>{Ps(t,!1)}):Ps(t,e))},beforeUnmount(t,{value:e}){Ps(t,e)}};function Ps(t,e){t.style.display=e?t[al]:"none"}function Qy(t,e,n){const r=t.style,s=Je(n);if(n&&!s){if(e&&!Je(e))for(const i in e)n[i]==null&&cc(r,i,"");for(const i in n)cc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),al in t&&(r.display=i)}}const gh=/\s*!important$/;function cc(t,e,n){if(re(n))n.forEach(r=>cc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Yy(t,e);gh.test(n)?t.setProperty(wr(r),n.replace(gh,""),"important"):t[r]=n}}const mh=["Webkit","Moz","ms"],xa={};function Yy(t,e){const n=xa[e];if(n)return n;let r=jr(e);if(r!=="filter"&&r in t)return xa[e]=r;r=lf(r);for(let s=0;s<mh.length;s++){const i=mh[s]+r;if(i in t)return xa[e]=i}return e}const _h="http://www.w3.org/1999/xlink";function Jy(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_h,e.slice(6,e.length)):t.setAttributeNS(_h,e,n);else{const i=a_(e);n==null||i&&!uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Xy(t,e,n,r,s,i,a){if(e==="innerHTML"||e==="textContent"){r&&a(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const h=c==="OPTION"?t.getAttribute("value"):t.value,d=n??"";h!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=uf(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function kn(t,e,n,r){t.addEventListener(e,n,r)}function Zy(t,e,n,r){t.removeEventListener(e,n,r)}const yh=Symbol("_vei");function ev(t,e,n,r,s=null){const i=t[yh]||(t[yh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=tv(e);if(r){const h=i[e]=sv(r,s);kn(t,c,h,l)}else a&&(Zy(t,c,a,l),i[e]=void 0)}}const vh=/(?:Once|Passive|Capture)$/;function tv(t){let e;if(vh.test(t)){e={};let r;for(;r=t.match(vh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let Va=0;const nv=Promise.resolve(),rv=()=>Va||(nv.then(()=>Va=0),Va=Date.now());function sv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(iv(r,n.value),e,5,[r])};return n.value=t,n.attached=rv(),n}function iv(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wh=/^on[a-z]/,ov=(t,e,n,r,s=!1,i,a,c,l)=>{e==="class"?Gy(t,r,s):e==="style"?Qy(t,n,r):Bo(e)?zc(e)||ev(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):av(t,e,r,s))?Xy(t,e,r,i,a,c,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jy(t,e,r,s))};function av(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wh.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wh.test(e)&&Je(n)?!1:e in t}const Kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>to(e,n):e};function cv(t){t.target.composing=!0}function Eh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fn=Symbol("_assign"),lv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fn]=Kr(s);const i=r||s.props&&s.props.type==="number";kn(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=wo(c)),t[fn](c)}),n&&kn(t,"change",()=>{t.value=t.value.trim()}),e||(kn(t,"compositionstart",cv),kn(t,"compositionend",Eh),kn(t,"change",Eh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[fn]=Kr(i),t.composing)return;const a=s||t.type==="number"?wo(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},uv={deep:!0,created(t,e,n){t[fn]=Kr(n),kn(t,"change",()=>{const r=t._modelValue,s=ei(t),i=t.checked,a=t[fn];if(re(r)){const c=Wc(r,s),l=c!==-1;if(i&&!l)a(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),a(h)}}else if(rs(r)){const c=new Set(r);i?c.add(s):c.delete(s),a(c)}else a(sp(t,i))})},mounted:Ih,beforeUpdate(t,e,n){t[fn]=Kr(n),Ih(t,e,n)}};function Ih(t,{value:e,oldValue:n},r){t._modelValue=e,re(e)?t.checked=Wc(e,r.props.value)>-1:rs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=ui(e,sp(t,!0)))}const co={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=rs(e);kn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?wo(ei(a)):ei(a));t[fn](t.multiple?s?new Set(i):i:i[0])}),t[fn]=Kr(r)},mounted(t,{value:e}){Th(t,e)},beforeUpdate(t,e,n){t[fn]=Kr(n)},updated(t,{value:e}){Th(t,e)}};function Th(t,e){const n=t.multiple;if(!(n&&!re(e)&&!rs(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],a=ei(i);if(n)re(e)?i.selected=Wc(e,a)>-1:i.selected=e.has(a);else if(ui(ei(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ei(t){return"_value"in t?t._value:t.value}function sp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const hv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dv=(t,e)=>n=>{if(!("key"in n))return;const r=wr(n.key);if(e.some(s=>s===r||hv[s]===r))return t(n)},fv=lt({patchProp:ov},Ky);let Ah;function pv(){return Ah||(Ah=Ay(fv))}const gv=(...t)=>{const e=pv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mv(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mv(t){return Je(t)?document.querySelector(t):t}var _v=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ip;const Jo=t=>ip=t,op=Symbol();function lc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Bs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bs||(Bs={}));function yv(){const t=ff(!0),e=t.run(()=>vt({}));let n=[],r=[];const s=qo({install(i){Jo(s),s._a=i,i.provide(op,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!_v?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ap=()=>{};function bh(t,e,n,r=ap){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&pf()&&u_(s),s}function Sr(t,...e){t.slice().forEach(n=>{n(...e)})}const vv=t=>t();function uc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];lc(s)&&lc(r)&&t.hasOwnProperty(n)&&!qe(r)&&!Fn(r)?t[n]=uc(s,r):t[n]=r}return t}const wv=Symbol();function Ev(t){return!lc(t)||!t.hasOwnProperty(wv)}const{assign:Rn}=Object;function Iv(t){return!!(qe(t)&&t.effect)}function Tv(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=V_(n.state.value[t]);return Rn(d,i,Object.keys(a||{}).reduce((g,m)=>(g[m]=qo(me(()=>{Jo(n);const b=n._s.get(t);return a[m].call(b,b)})),g),{}))}return l=cp(t,h,e,n,r,!0),l}function cp(t,e,n={},r,s,i){let a;const c=Rn({actions:{}},n),l={deep:!0};let h,d,g=[],m=[],b;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),vt({});let k;function N(_){let y;h=d=!1,typeof _=="function"?(_(r.state.value[t]),y={type:Bs.patchFunction,storeId:t,events:b}):(uc(r.state.value[t],_),y={type:Bs.patchObject,payload:_,storeId:t,events:b});const I=k=Symbol();tl().then(()=>{k===I&&(h=!0)}),d=!0,Sr(g,y,r.state.value[t])}const U=i?function(){const{state:y}=n,I=y?y():{};this.$patch(A=>{Rn(A,I)})}:ap;function M(){a.stop(),g=[],m=[],r._s.delete(t)}function Q(_,y){return function(){Jo(r);const I=Array.from(arguments),A=[],S=[];function w(Ee){A.push(Ee)}function rt(Ee){S.push(Ee)}Sr(m,{args:I,name:_,store:he,after:w,onError:rt});let Ze;try{Ze=y.apply(this&&this.$id===t?this:he,I)}catch(Ee){throw Sr(S,Ee),Ee}return Ze instanceof Promise?Ze.then(Ee=>(Sr(A,Ee),Ee)).catch(Ee=>(Sr(S,Ee),Promise.reject(Ee))):(Sr(A,Ze),Ze)}}const K={_p:r,$id:t,$onAction:bh.bind(null,m),$patch:N,$reset:U,$subscribe(_,y={}){const I=bh(g,_,y.detached,()=>A()),A=a.run(()=>Ls(()=>r.state.value[t],S=>{(y.flush==="sync"?d:h)&&_({storeId:t,type:Bs.direct,events:b},S)},Rn({},l,y)));return I},$dispose:M},he=hi(K);r._s.set(t,he);const T=(r._a&&r._a.runWithContext||vv)(()=>r._e.run(()=>(a=ff()).run(e)));for(const _ in T){const y=T[_];if(qe(y)&&!Iv(y)||Fn(y))i||(P&&Ev(y)&&(qe(y)?y.value=P[_]:uc(y,P[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const I=Q(_,y);T[_]=I,c.actions[_]=y}}return Rn(he,T),Rn(be(he),T),Object.defineProperty(he,"$state",{get:()=>r.state.value[t],set:_=>{N(y=>{Rn(y,_)})}}),r._p.forEach(_=>{Rn(he,a.run(()=>_({store:he,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(he.$state,P),h=!0,d=!0,he}function Xo(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function a(c,l){const h=yy();return c=c||(h?Qt(op,null):null),c&&Jo(c),c=ip,c._s.has(r)||(i?cp(r,e,s,c):Tv(r,s,c)),c._s.get(r)}return a.$id=r,a}function Av(t){return typeof t=="object"&&t!==null}function Sh(t,e){return t=Av(t)?t:Object.create(null),new Proxy(t,{get(n,r,s){return r==="key"?Reflect.get(n,r,s):Reflect.get(n,r,s)||Reflect.get(e,r,s)}})}function bv(t,e){return e.reduce((n,r)=>n==null?void 0:n[r],t)}function Sv(t,e,n){return e.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},t)[e[e.length-1]]=n,t}function Rv(t,e){return e.reduce((n,r)=>{const s=r.split(".");return Sv(n,s,bv(t,s))},{})}function Cv(t,e){return n=>{var r;try{const{storage:s=localStorage,beforeRestore:i=void 0,afterRestore:a=void 0,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:l=e.$id,paths:h=null,debug:d=!1}=n;return{storage:s,beforeRestore:i,afterRestore:a,serializer:c,key:((r=t.key)!=null?r:g=>g)(typeof l=="string"?l:l(e.$id)),paths:h,debug:d}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function Rh(t,{storage:e,serializer:n,key:r,debug:s}){try{const i=e==null?void 0:e.getItem(r);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){s&&console.error("[pinia-plugin-persistedstate]",i)}}function Ch(t,{storage:e,serializer:n,key:r,paths:s,debug:i}){try{const a=Array.isArray(s)?Rv(t,s):t;e.setItem(r,n.serialize(a))}catch(a){i&&console.error("[pinia-plugin-persistedstate]",a)}}function Pv(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:r=n},store:s,pinia:i}=e;if(!r)return;if(!(s.$id in i.state.value)){const c=i._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(r)?r.map(c=>Sh(c,t)):[Sh(r,t)]).map(Cv(t,s)).filter(Boolean);s.$persist=()=>{a.forEach(c=>{Ch(s.$state,c)})},s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{const{beforeRestore:h,afterRestore:d}=l;c&&(h==null||h(e)),Rh(s,l),c&&(d==null||d(e))})},a.forEach(c=>{const{beforeRestore:l,afterRestore:h}=c;l==null||l(e),Rh(s,c),h==null||h(e),s.$subscribe((d,g)=>{Ch(g,c)},{detached:!0})})}}const kv="/webscraper_tl/icon.svg",Dv="MiniCrawler",Nv="0.3",Ph={appName:Dv,version:Nv};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Rr=typeof window<"u";function Ov(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function Ma(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const $s=()=>{},$t=Array.isArray,xv=/\/$/,Vv=t=>t.replace(xv,"");function La(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=Uv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:a}}function Mv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Wr(e.matched[r],n.matched[s])&&lp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fv(t[n],e[n]))return!1;return!0}function Fv(t,e){return $t(t)?Dh(t,e):$t(e)?Dh(e,t):t===e}function Dh(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Uv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function Bv(t){if(!t)if(Rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vv(t)}const $v=/^[^#]+#/;function jv(t,e){return t.replace($v,"#")+e}function qv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zo=()=>({left:window.pageXOffset,top:window.pageYOffset});function zv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=qv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nh(t,e){return(history.state?history.state.position-e:-1)+t}const hc=new Map;function Hv(t,e){hc.set(t,e)}function Kv(t){const e=hc.get(t);return hc.delete(t),e}let Wv=()=>location.protocol+"//"+location.host;function up(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),kh(l,"")}return kh(n,t)+r+s}function Gv(t,e,n,r){let s=[],i=[],a=null;const c=({state:m})=>{const b=up(t,location),P=n.value,k=e.value;let N=0;if(m){if(n.value=b,e.value=m,a&&a===P){a=null;return}N=k?m.position-k.position:0}else r(b);s.forEach(U=>{U(n.value,P,{delta:N,type:ti.pop,direction:N?N>0?js.forward:js.back:js.unknown})})};function l(){a=n.value}function h(m){s.push(m);const b=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(b),b}function d(){const{history:m}=window;m.state&&m.replaceState(Ne({},m.state,{scroll:Zo()}),"")}function g(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:g}}function Oh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zo():null}}function Qv(t){const{history:e,location:n}=window,r={value:up(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const g=t.indexOf("#"),m=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+l:Wv()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(b){console.error(b),n[d?"replace":"assign"](m)}}function a(l,h){const d=Ne({},e.state,Oh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Ne({},s.value,e.state,{forward:l,scroll:Zo()});i(d.current,d,!0);const g=Ne({},Oh(r.value,l,null),{position:d.position+1},h);i(l,g,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function Yv(t){t=Bv(t);const e=Qv(t),n=Gv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:jv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Jv(t){return typeof t=="string"||t&&typeof t=="object"}function hp(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dp=Symbol("");var xh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xh||(xh={}));function Gr(t,e){return Ne(new Error,{type:t,[dp]:!0},e)}function sn(t,e){return t instanceof Error&&dp in t&&(e==null||!!(t.type&e))}const Vh="[^/]+?",Xv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function e0(t,e){const n=Ne({},Xv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let g=0;g<h.length;g++){const m=h[g];let b=40+(n.sensitive?.25:0);if(m.type===0)g||(s+="/"),s+=m.value.replace(Zv,"\\$&"),b+=40;else if(m.type===1){const{value:P,repeatable:k,optional:N,regexp:U}=m;i.push({name:P,repeatable:k,optional:N});const M=U||Vh;if(M!==Vh){b+=10;try{new RegExp(`(${M})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${P}" (${M}): `+K.message)}}let Q=k?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;g||(Q=N&&h.length<2?`(?:/${Q})`:"/"+Q),N&&(Q+="?"),s+=Q,b+=20,N&&(b+=-8),k&&(b+=-20),M===".*"&&(b+=-50)}d.push(b)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(a),g={};if(!d)return null;for(let m=1;m<d.length;m++){const b=d[m]||"",P=i[m-1];g[P.name]=b&&P.repeatable?b.split("/"):b}return g}function l(h){let d="",g=!1;for(const m of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const b of m)if(b.type===0)d+=b.value;else if(b.type===1){const{value:P,repeatable:k,optional:N}=b,U=P in h?h[P]:"";if($t(U)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const M=$t(U)?U.join("/"):U;if(!M)if(N)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${P}"`);d+=M}}return d||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function t0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function n0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=t0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Mh(r))return 1;if(Mh(s))return-1}return s.length-r.length}function Mh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const r0={type:0,value:""},s0=/[a-zA-Z0-9_]/;function i0(t){if(!t)return[[]];if(t==="/")return[[r0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${h}": ${b}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function g(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&g(),a()):l===":"?(g(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:s0.test(l)?m():(g(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:g(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),g(),a(),s}function o0(t,e,n){const r=e0(i0(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function a0(t,e){const n=[],r=new Map;e=Uh({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,g,m){const b=!m,P=c0(d);P.aliasOf=m&&m.record;const k=Uh(e,d),N=[P];if("alias"in d){const Q=typeof d.alias=="string"?[d.alias]:d.alias;for(const K of Q)N.push(Ne({},P,{components:m?m.record.components:P.components,path:K,aliasOf:m?m.record:P}))}let U,M;for(const Q of N){const{path:K}=Q;if(g&&K[0]!=="/"){const he=g.record.path,ge=he[he.length-1]==="/"?"":"/";Q.path=g.record.path+(K&&ge+K)}if(U=o0(Q,g,k),m?m.alias.push(U):(M=M||U,M!==U&&M.alias.push(U),b&&d.name&&!Fh(U)&&a(d.name)),P.children){const he=P.children;for(let ge=0;ge<he.length;ge++)i(he[ge],U,m&&m.children[ge])}m=m||U,(U.record.components&&Object.keys(U.record.components).length||U.record.name||U.record.redirect)&&l(U)}return M?()=>{a(M)}:$s}function a(d){if(hp(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function c(){return n}function l(d){let g=0;for(;g<n.length&&n0(d,n[g])>=0&&(d.record.path!==n[g].record.path||!fp(d,n[g]));)g++;n.splice(g,0,d),d.record.name&&!Fh(d)&&r.set(d.record.name,d)}function h(d,g){let m,b={},P,k;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Gr(1,{location:d});k=m.record.name,b=Ne(Lh(g.params,m.keys.filter(M=>!M.optional).map(M=>M.name)),d.params&&Lh(d.params,m.keys.map(M=>M.name))),P=m.stringify(b)}else if("path"in d)P=d.path,m=n.find(M=>M.re.test(P)),m&&(b=m.parse(P),k=m.record.name);else{if(m=g.name?r.get(g.name):n.find(M=>M.re.test(g.path)),!m)throw Gr(1,{location:d,currentLocation:g});k=m.record.name,b=Ne({},g.params,d.params),P=m.stringify(b)}const N=[];let U=m;for(;U;)N.unshift(U.record),U=U.parent;return{name:k,path:P,params:b,matched:N,meta:u0(N)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:h,removeRoute:a,getRoutes:c,getRecordMatcher:s}}function Lh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function c0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:l0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function l0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Fh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function u0(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function Uh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fp(t,e){return e.children.some(n=>n===t||fp(t,n))}const pp=/#/g,h0=/&/g,d0=/\//g,f0=/=/g,p0=/\?/g,gp=/\+/g,g0=/%5B/g,m0=/%5D/g,mp=/%5E/g,_0=/%60/g,_p=/%7B/g,y0=/%7C/g,yp=/%7D/g,v0=/%20/g;function cl(t){return encodeURI(""+t).replace(y0,"|").replace(g0,"[").replace(m0,"]")}function w0(t){return cl(t).replace(_p,"{").replace(yp,"}").replace(mp,"^")}function dc(t){return cl(t).replace(gp,"%2B").replace(v0,"+").replace(pp,"%23").replace(h0,"%26").replace(_0,"`").replace(_p,"{").replace(yp,"}").replace(mp,"^")}function E0(t){return dc(t).replace(f0,"%3D")}function I0(t){return cl(t).replace(pp,"%23").replace(p0,"%3F")}function T0(t){return t==null?"":I0(t).replace(d0,"%2F")}function So(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function A0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(gp," "),a=i.indexOf("="),c=So(a<0?i:i.slice(0,a)),l=a<0?null:So(i.slice(a+1));if(c in e){let h=e[c];$t(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Bh(t){let e="";for(let n in t){const r=t[n];if(n=E0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&dc(i)):[r&&dc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function b0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const S0=Symbol(""),$h=Symbol(""),ll=Symbol(""),vp=Symbol(""),fc=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=g=>{g===!1?c(Gr(4,{from:n,to:e})):g instanceof Error?c(g):Jv(g)?c(Gr(2,{from:e,to:g})):(i&&r.enterCallbacks[s]===i&&typeof g=="function"&&i.push(g),a())},h=t.call(r&&r.instances[s],e,n,l);let d=Promise.resolve(h);t.length<3&&(d=d.then(l)),d.catch(g=>c(g))})}function Fa(t,e,n,r){const s=[];for(const i of t)for(const a in i.components){let c=i.components[a];if(!(e!=="beforeRouteEnter"&&!i.instances[a]))if(R0(c)){const h=(c.__vccOpts||c)[e];h&&s.push(Pn(h,n,r,i,a))}else{let l=c();s.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=Ov(h)?h.default:h;i.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Pn(m,n,r,i,a)()}))}}return s}function R0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jh(t){const e=Qt(ll),n=Qt(vp),r=me(()=>e.resolve(Oe(t.to))),s=me(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],g=n.matched;if(!d||!g.length)return-1;const m=g.findIndex(Wr.bind(null,d));if(m>-1)return m;const b=qh(l[h-2]);return h>1&&qh(d)===b&&g[g.length-1].path!==b?g.findIndex(Wr.bind(null,l[h-2])):m}),i=me(()=>s.value>-1&&k0(n.params,r.value.params)),a=me(()=>s.value>-1&&s.value===n.matched.length-1&&lp(n.params,r.value.params));function c(l={}){return P0(l)?e[Oe(t.replace)?"replace":"push"](Oe(t.to)).catch($s):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}const C0=He({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jh,setup(t,{slots:e}){const n=hi(jh(t)),{options:r}=Qt(ll),s=me(()=>({[zh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:rp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),lo=C0;function P0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function k0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function qh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zh=(t,e,n)=>t??e??n,D0=He({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Qt(fc),s=me(()=>t.route||r.value),i=Qt($h,0),a=me(()=>{let h=Oe(i);const{matched:d}=s.value;let g;for(;(g=d[h])&&!g.components;)h++;return h}),c=me(()=>s.value.matched[a.value]);so($h,me(()=>a.value+1)),so(S0,c),so(fc,s);const l=vt();return Ls(()=>[l.value,c.value,t.name],([h,d,g],[m,b,P])=>{d&&(d.instances[g]=h,b&&b!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),h&&d&&(!b||!Wr(d,b)||!m)&&(d.enterCallbacks[g]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,g=c.value,m=g&&g.components[d];if(!m)return Hh(n.default,{Component:m,route:h});const b=g.props[d],P=b?b===!0?h.params:typeof b=="function"?b(h):b:null,N=rp(m,Ne({},P,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(g.instances[d]=null)},ref:l}));return Hh(n.default,{Component:N,route:h})||N}}});function Hh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wp=D0;function N0(t){const e=a0(t.routes,t),n=t.parseQuery||A0,r=t.stringifyQuery||Bh,s=t.history,i=ks(),a=ks(),c=ks(),l=N_(bn);let h=bn;Rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ma.bind(null,x=>""+x),g=Ma.bind(null,T0),m=Ma.bind(null,So);function b(x,Y){let H,ee;return hp(x)?(H=e.getRecordMatcher(x),ee=Y):ee=x,e.addRoute(ee,H)}function P(x){const Y=e.getRecordMatcher(x);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(x=>x.record)}function N(x){return!!e.getRecordMatcher(x)}function U(x,Y){if(Y=Ne({},Y||l.value),typeof x=="string"){const C=La(n,x,Y.path),O=e.resolve({path:C.path},Y),V=s.createHref(C.fullPath);return Ne(C,O,{params:m(O.params),hash:So(C.hash),redirectedFrom:void 0,href:V})}let H;if("path"in x)H=Ne({},x,{path:La(n,x.path,Y.path).path});else{const C=Ne({},x.params);for(const O in C)C[O]==null&&delete C[O];H=Ne({},x,{params:g(C)}),Y.params=g(Y.params)}const ee=e.resolve(H,Y),ye=x.hash||"";ee.params=d(m(ee.params));const v=Mv(r,Ne({},x,{hash:w0(ye),path:ee.path})),E=s.createHref(v);return Ne({fullPath:v,hash:ye,query:r===Bh?b0(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:E})}function M(x){return typeof x=="string"?La(n,x,l.value.path):Ne({},x)}function Q(x,Y){if(h!==x)return Gr(8,{from:Y,to:x})}function K(x){return T(x)}function he(x){return K(Ne(M(x),{replace:!0}))}function ge(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:H}=Y;let ee=typeof H=="function"?H(x):H;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=M(ee):{path:ee},ee.params={}),Ne({query:x.query,hash:x.hash,params:"path"in ee?{}:x.params},ee)}}function T(x,Y){const H=h=U(x),ee=l.value,ye=x.state,v=x.force,E=x.replace===!0,C=ge(H);if(C)return T(Ne(M(C),{state:typeof C=="object"?Ne({},ye,C.state):ye,force:v,replace:E}),Y||H);const O=H;O.redirectedFrom=Y;let V;return!v&&Lv(r,ee,H)&&(V=Gr(16,{to:O,from:ee}),Nt(ee,ee,!0,!1)),(V?Promise.resolve(V):I(O,ee)).catch(L=>sn(L)?sn(L,2)?L:xt(L):_e(L,O,ee)).then(L=>{if(L){if(sn(L,2))return T(Ne({replace:E},M(L.to),{state:typeof L.to=="object"?Ne({},ye,L.to.state):ye,force:v}),Y||O)}else L=S(O,ee,!0,E,ye);return A(O,ee,L),L})}function _(x,Y){const H=Q(x,Y);return H?Promise.reject(H):Promise.resolve()}function y(x){const Y=wn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function I(x,Y){let H;const[ee,ye,v]=O0(x,Y);H=Fa(ee.reverse(),"beforeRouteLeave",x,Y);for(const C of ee)C.leaveGuards.forEach(O=>{H.push(Pn(O,x,Y))});const E=_.bind(null,x,Y);return H.push(E),et(H).then(()=>{H=[];for(const C of i.list())H.push(Pn(C,x,Y));return H.push(E),et(H)}).then(()=>{H=Fa(ye,"beforeRouteUpdate",x,Y);for(const C of ye)C.updateGuards.forEach(O=>{H.push(Pn(O,x,Y))});return H.push(E),et(H)}).then(()=>{H=[];for(const C of v)if(C.beforeEnter)if($t(C.beforeEnter))for(const O of C.beforeEnter)H.push(Pn(O,x,Y));else H.push(Pn(C.beforeEnter,x,Y));return H.push(E),et(H)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),H=Fa(v,"beforeRouteEnter",x,Y),H.push(E),et(H))).then(()=>{H=[];for(const C of a.list())H.push(Pn(C,x,Y));return H.push(E),et(H)}).catch(C=>sn(C,8)?C:Promise.reject(C))}function A(x,Y,H){c.list().forEach(ee=>y(()=>ee(x,Y,H)))}function S(x,Y,H,ee,ye){const v=Q(x,Y);if(v)return v;const E=Y===bn,C=Rr?history.state:{};H&&(ee||E?s.replace(x.fullPath,Ne({scroll:E&&C&&C.scroll},ye)):s.push(x.fullPath,ye)),l.value=x,Nt(x,Y,H,E),xt()}let w;function rt(){w||(w=s.listen((x,Y,H)=>{if(!qt.listening)return;const ee=U(x),ye=ge(ee);if(ye){T(Ne(ye,{replace:!0}),ee).catch($s);return}h=ee;const v=l.value;Rr&&Hv(Nh(v.fullPath,H.delta),Zo()),I(ee,v).catch(E=>sn(E,12)?E:sn(E,2)?(T(E.to,ee).then(C=>{sn(C,20)&&!H.delta&&H.type===ti.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(H.delta&&s.go(-H.delta,!1),_e(E,ee,v))).then(E=>{E=E||S(ee,v,!1),E&&(H.delta&&!sn(E,8)?s.go(-H.delta,!1):H.type===ti.pop&&sn(E,20)&&s.go(-1,!1)),A(ee,v,E)}).catch($s)}))}let Ze=ks(),Ee=ks(),Ie;function _e(x,Y,H){xt(x);const ee=Ee.list();return ee.length?ee.forEach(ye=>ye(x,Y,H)):console.error(x),Promise.reject(x)}function Pt(){return Ie&&l.value!==bn?Promise.resolve():new Promise((x,Y)=>{Ze.add([x,Y])})}function xt(x){return Ie||(Ie=!x,rt(),Ze.list().forEach(([Y,H])=>x?H(x):Y()),Ze.reset()),x}function Nt(x,Y,H,ee){const{scrollBehavior:ye}=t;if(!Rr||!ye)return Promise.resolve();const v=!H&&Kv(Nh(x.fullPath,0))||(ee||!H)&&history.state&&history.state.scroll||null;return tl().then(()=>ye(x,Y,v)).then(E=>E&&zv(E)).catch(E=>_e(E,x,Y))}const Ue=x=>s.go(x);let Be;const wn=new Set,qt={currentRoute:l,listening:!0,addRoute:b,removeRoute:P,hasRoute:N,getRoutes:k,resolve:U,options:t,push:K,replace:he,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:Ee.add,isReady:Pt,install(x){const Y=this;x.component("RouterLink",lo),x.component("RouterView",wp),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Oe(l)}),Rr&&!Be&&l.value===bn&&(Be=!0,K(s.location).catch(ye=>{}));const H={};for(const ye in bn)Object.defineProperty(H,ye,{get:()=>l.value[ye],enumerable:!0});x.provide(ll,Y),x.provide(vp,bf(H)),x.provide(fc,l);const ee=x.unmount;wn.add(x),x.unmount=function(){wn.delete(x),wn.size<1&&(h=bn,w&&w(),w=null,l.value=bn,Be=!1,Ie=!1),ee()}}};function et(x){return x.reduce((Y,H)=>Y.then(()=>y(H)),Promise.resolve())}return qt}function O0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>Wr(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>Wr(h,l))||s.push(l))}return[n,r,s]}const x0=t=>(di("data-v-2bb0cbed"),t=t(),fi(),t),V0={class:"headerClass"},M0={class:"headerNav"},L0={class:"headerIconTitle"},F0=x0(()=>G("img",{src:kv,type:"image/svg+xml",alt:"icon"},null,-1)),U0={class:"appView"},B0=He({__name:"App",setup(t){return(e,n)=>(ce(),De(Ye,null,[G("header",V0,[G("nav",M0,[Pe(Oe(lo),{to:"/"},{default:no(()=>[ao("HOME")]),_:1}),Pe(Oe(lo),{to:"/about"},{default:no(()=>[ao("ABOUT")]),_:1}),Pe(Oe(lo),{to:"/contact"},{default:no(()=>[ao("CONTACT")]),_:1})]),G("div",L0,[F0,G("p",null,at(Oe(Ph).appName)+" v"+at(Oe(Ph).version),1)])]),G("div",U0,[Pe(Oe(wp))])],64))}});const Xe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$0=Xe(B0,[["__scopeId","data-v-2bb0cbed"]]),j0="modulepreload",q0=function(t){return"/webscraper_tl/"+t},Kh={},Wh=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=q0(i),i in Kh)return;Kh[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const g=s[d];if(g.href===i&&(!a||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":j0,a||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),a)return new Promise((d,g)=>{h.addEventListener("load",d),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},z0={},H0={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},K0=G("g",null,[G("path",{d:`M449.803,62.197C408.443,20.807,353.85-0.037,299.646-0.006C245.428-0.037,190.85,20.807,149.49,62.197
		C108.1,103.557,87.24,158.15,87.303,212.338c-0.047,37.859,10.359,75.766,30.547,109.359L15.021,424.525
		c-20.016,20.016-20.016,52.453,0,72.469c20,20.016,52.453,20.016,72.453,0L190.318,394.15
		c33.578,20.203,71.5,30.594,109.328,30.547c54.203,0.047,108.797-20.797,150.156-62.188
		c41.375-41.359,62.234-95.938,62.188-150.172C512.053,158.15,491.178,103.557,449.803,62.197z M391.818,304.541
		c-25.547,25.531-58.672,38.125-92.172,38.188c-33.5-0.063-66.609-12.656-92.188-38.188c-25.531-25.578-38.125-58.688-38.188-92.203
		c0.063-33.484,12.656-66.609,38.188-92.172c25.578-25.531,58.688-38.125,92.188-38.188c33.5,0.063,66.625,12.656,92.188,38.188
		c25.531,25.563,38.125,58.688,38.188,92.172C429.959,245.854,417.365,278.963,391.818,304.541z`})],-1),W0=[K0];function G0(t,e){return ce(),De("svg",H0,W0)}const Q0=Xe(z0,[["render",G0]]),Y0="#003B83",J0="#420011",X0="#DC003C",Z0="#EC7394",ew="#FAD9E2",tw="#001942",nw="#0054DC",rw="#80AEF8",sw="#E2ECFD",iw="#212121",ow="#595757",aw="#939292",cw="#E6E6E6",lw="#004229",uw="#329B73",hw="#7ABEA4",dw="#E0F0EA",fw="#423100",pw="#DCA000",gw="#E8C159",mw="#E8FCCC",Ce={mriblue:Y0,red0:J0,red1:X0,red2:Z0,red3:ew,blue0:tw,blue1:nw,blue2:rw,blue3:sw,gray0:iw,gray1:ow,gray2:aw,gray3:cw,green0:lw,green1:uw,green2:hw,green3:dw,yellow0:fw,yellow1:pw,yellow2:gw,yellow3:mw},Ep=He({__name:"SearchButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ce(),Ct(Q0,{class:"searchButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}}),_w={},yw={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},vw=Ny(`<g><path class="st0" d="M40.252,14.489C18.019,14.489,0,32.507,0,54.741c0,22.233,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,32.507,62.477,14.489,40.252,14.489z"></path><rect x="148.122" y="14.489" class="st0" width="363.878" height="80.504"></rect><path class="st0" d="M40.252,215.748C18.019,215.748,0,233.767,0,256c0,22.233,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,233.767,62.477,215.748,40.252,215.748z"></path><rect x="148.122" y="215.748" class="st0" width="363.878" height="80.504"></rect><path class="st0" d="M40.252,417.007C18.019,417.007,0,435.026,0,457.259c0,22.232,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,435.026,62.477,417.007,40.252,417.007z"></path><rect x="148.122" y="417.007" class="st0" width="363.878" height="80.504"></rect></g>`,1),ww=[vw];function Ew(t,e){return ce(),De("svg",yw,ww)}const Iw=Xe(_w,[["render",Ew]]),Tw=He({__name:"MenuButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ce(),Ct(Iw,{class:"menuButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),Aw={},bw={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},Sw=G("g",null,[G("path",{class:"st0",d:`M512,255.996l-63.305-51.631l29.002-76.362l-80.633-13.07L383.993,34.3l-76.361,29.002L256,0.004
    l-51.646,63.298L128.008,34.3l-13.07,80.634l-80.633,13.07l28.988,76.362L0,255.996l63.292,51.632l-28.988,76.368l80.633,13.07
    l13.07,80.633l76.347-29.002L256,511.996l51.632-63.299l76.361,29.002l13.07-80.633l80.633-13.07l-29.002-76.368L512,255.996z
     M212.829,313.648l-14.382,2.834c-0.973,0.183-1.649-0.056-2.298-0.811l-39.266-45.872l-0.606,0.12l10.151,51.596
    c0.142,0.726-0.253,1.304-0.972,1.452l-13.662,2.686c-0.719,0.141-1.297-0.254-1.438-0.98l-15.678-79.746
    c-0.155-0.734,0.24-1.304,0.959-1.445l14.508-2.855c0.846-0.169,1.635,0.056,2.284,0.811l39.181,46.013l0.592-0.12l-10.166-51.716
    c-0.14-0.733,0.254-1.304,0.973-1.452l13.662-2.686c0.719-0.141,1.297,0.24,1.438,0.973l15.678,79.745
    C213.942,312.929,213.548,313.507,212.829,313.648z M283.663,299.718l-52.689,10.364c-0.733,0.14-1.296-0.247-1.452-0.973
    l-15.678-79.745c-0.141-0.734,0.24-1.312,0.973-1.452l52.688-10.364c0.719-0.14,1.298,0.247,1.438,0.98l2.538,12.922
    c0.155,0.726-0.24,1.305-0.959,1.445l-35.418,6.966c-0.479,0.092-0.676,0.38-0.578,0.867l3.201,16.312
    c0.099,0.48,0.395,0.677,0.874,0.586l29.495-5.802c0.719-0.141,1.297,0.253,1.438,0.972l2.524,12.81
    c0.141,0.726-0.254,1.297-0.972,1.438l-29.496,5.802c-0.479,0.099-0.676,0.388-0.577,0.867l3.355,17.039
    c0.084,0.486,0.38,0.676,0.86,0.578l35.417-6.965c0.719-0.141,1.298,0.254,1.438,0.98l2.538,12.93
    C284.777,298.999,284.382,299.577,283.663,299.718z M371.896,281.107c0.014,0.754-0.493,1.361-1.339,1.523l-12.083,2.376
    c-0.846,0.169-1.424-0.226-1.805-0.902L332.362,235.8l-0.24,0.049l-4.328,53.937c-0.099,0.768-0.494,1.354-1.34,1.515
    l-12.083,2.383c-0.719,0.141-1.297-0.254-1.692-0.931l-36.94-75.565c-0.268-0.705-0.127-1.234,0.719-1.403l15.594-3.059
    c0.846-0.17,1.423,0.212,1.678,0.923l21.995,49.263l0.24-0.049l3.877-54.346c0.099-0.782,0.493-1.353,1.326-1.523l10.518-2.066
    c0.719-0.141,1.297,0.24,1.692,0.931l24.631,48.734l0.254-0.05l1.212-53.816c-0.042-0.874,0.367-1.34,1.213-1.502l15.467-3.038
    c0.846-0.17,1.17,0.261,1.198,1.015L371.896,281.107z`})],-1),Rw=[Sw];function Cw(t,e){return ce(),De("svg",bw,Rw)}const Pw=Xe(Aw,[["render",Cw]]),kw=He({__name:"NewsButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ce(),Ct(Pw,{class:"newsButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}}),Dw={},Nw={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},Ow=G("g",null,[G("path",{class:"st0",d:`M268.149,12.153c-7.179,0-14.309,0.309-21.374,0.926l4.905,56.561h0.016
		c5.392-0.462,10.882-0.698,16.453-0.698c51.745,0.016,98.326,20.886,132.272,54.782c33.896,33.954,54.783,80.534,54.783,132.28
		c0,51.745-20.887,98.326-54.783,132.271c-33.945,33.896-80.526,54.767-132.272,54.783c-51.746-0.016-98.326-20.886-132.272-54.783
		c-18.239-18.264-32.532-40.279-42.017-64.699l31.102-4.376L44.729,201.952l-17.93,54.052h-2.485c0,2.192,0.26,4.32,0.325,6.505
		L0,336.765l36.414-5.116c31.85,97.611,123.485,168.189,231.735,168.197C402.84,499.839,511.984,390.688,512,256.004
		C511.984,121.313,402.84,12.161,268.149,12.153z`}),G("path",{class:"st0",d:`M113.041,151.425c3.054-4.532,6.335-8.941,9.794-13.237l-44.144-35.707
		c-4.466,5.522-8.722,11.23-12.717,17.167l47.052,31.777H113.041z`}),G("path",{class:"st0",d:`M193.762,84.314c9.079-3.938,18.532-7.17,28.292-9.648L208.12,19.607c-12.766,3.232-25.11,7.472-36.966,12.62
		l22.609,52.078V84.314z`}),G("path",{class:"st0",d:`M167.353,98.412l-30.664-47.807c-10.996,7.041-21.374,14.95-31.054,23.615l37.86,42.318
		C150.933,109.887,158.908,103.812,167.353,98.412z`})],-1),xw=[Ow];function Vw(t,e){return ce(),De("svg",Nw,xw)}const Mw=Xe(Dw,[["render",Vw]]),Lw=He({__name:"ReloadButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ce(),Ct(Mw,{class:"searchButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,g=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(m=64)),r.push(n[d],n[g],n[m],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ip(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new Uw;const m=i<<2|c>>4;if(r.push(m),h!==64){const b=c<<4&240|h>>2;if(r.push(b),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Uw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bw=function(t){const e=Ip(t);return Tp.encodeByteArray(e,!0)},Ro=function(t){return Bw(t).replace(/\./g,"")},Ap=function(t){try{return Tp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=()=>$w().__FIREBASE_DEFAULTS__,qw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ap(t[1]);return e&&JSON.parse(e)},ea=()=>{try{return jw()||qw()||zw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=ea())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hw=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sp=()=>{var t;return(t=ea())===null||t===void 0?void 0:t.config},Rp=t=>{var e;return(e=ea())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Ro(JSON.stringify(n)),Ro(JSON.stringify(a)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Qw(){var t;const e=(t=ea())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xw(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zw(){return!Qw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eE(){try{return typeof indexedDB=="object"}catch{return!1}}function tE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nE,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?rE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new yn(s,c,r)}}function rE(t,e){return t.replace(sE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sE=/\{\$([^}]+)}/g;function iE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Gh(i)&&Gh(a)){if(!Co(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oE(t,e){const n=new aE(t,e);return n.subscribe.bind(n)}class aE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ua(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t){return t&&t._delegate?t._delegate:t}class pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Kw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hE(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uE(t){return t===nr?void 0:t}function hE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const fE={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},pE=ve.INFO,gE={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},mE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ul{constructor(e){this.name=e,this._logLevel=pE,this._logHandler=mE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const _E=(t,e)=>e.some(n=>t instanceof n);let Qh,Yh;function yE(){return Qh||(Qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vE(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cp=new WeakMap,pc=new WeakMap,Pp=new WeakMap,Ba=new WeakMap,hl=new WeakMap;function wE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Bn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Cp.set(n,t)}).catch(()=>{}),hl.set(e,t),e}function EE(t){if(pc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});pc.set(t,e)}let gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IE(t){gc=t(gc)}function TE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($a(this),e,...n);return Pp.set(r,e.sort?e.sort():[e]),Bn(r)}:vE().includes(t)?function(...e){return t.apply($a(this),e),Bn(Cp.get(this))}:function(...e){return Bn(t.apply($a(this),e))}}function AE(t){return typeof t=="function"?TE(t):(t instanceof IDBTransaction&&EE(t),_E(t,yE())?new Proxy(t,gc):t)}function Bn(t){if(t instanceof IDBRequest)return wE(t);if(Ba.has(t))return Ba.get(t);const e=AE(t);return e!==t&&(Ba.set(t,e),hl.set(e,t)),e}const $a=t=>hl.get(t);function bE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Bn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Bn(a.result),l.oldVersion,l.newVersion,Bn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const SE=["get","getKey","getAll","getAllKeys","count"],RE=["put","add","delete","clear"],ja=new Map;function Jh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||SE.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return ja.set(e,i),i}IE(t=>({...t,get:(e,n,r)=>Jh(e,n)||t.get(e,n,r),has:(e,n)=>!!Jh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mc="@firebase/app",Xh="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new ul("@firebase/app"),kE="@firebase/app-compat",DE="@firebase/analytics-compat",NE="@firebase/analytics",OE="@firebase/app-check-compat",xE="@firebase/app-check",VE="@firebase/auth",ME="@firebase/auth-compat",LE="@firebase/database",FE="@firebase/database-compat",UE="@firebase/functions",BE="@firebase/functions-compat",$E="@firebase/installations",jE="@firebase/installations-compat",qE="@firebase/messaging",zE="@firebase/messaging-compat",HE="@firebase/performance",KE="@firebase/performance-compat",WE="@firebase/remote-config",GE="@firebase/remote-config-compat",QE="@firebase/storage",YE="@firebase/storage-compat",JE="@firebase/firestore",XE="@firebase/vertexai-preview",ZE="@firebase/firestore-compat",eI="firebase",tI="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="[DEFAULT]",nI={[mc]:"fire-core",[kE]:"fire-core-compat",[NE]:"fire-analytics",[DE]:"fire-analytics-compat",[xE]:"fire-app-check",[OE]:"fire-app-check-compat",[VE]:"fire-auth",[ME]:"fire-auth-compat",[LE]:"fire-rtdb",[FE]:"fire-rtdb-compat",[UE]:"fire-fn",[BE]:"fire-fn-compat",[$E]:"fire-iid",[jE]:"fire-iid-compat",[qE]:"fire-fcm",[zE]:"fire-fcm-compat",[HE]:"fire-perf",[KE]:"fire-perf-compat",[WE]:"fire-rc",[GE]:"fire-rc-compat",[QE]:"fire-gcs",[YE]:"fire-gcs-compat",[JE]:"fire-fst",[ZE]:"fire-fst-compat",[XE]:"fire-vertex","fire-js":"fire-js",[eI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,rI=new Map,yc=new Map;function Zh(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(yc.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;yc.set(e,t);for(const n of Po.values())Zh(n,t);for(const n of rI.values())Zh(n,t);return!0}function dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new pi("app","Firebase",sI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=tI;function kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_c,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(n||(n=Sp()),!n)throw $n.create("no-options");const i=Po.get(s);if(i){if(Co(n,i.options)&&Co(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const a=new dE(s);for(const l of yc.values())a.addComponent(l);const c=new iI(n,r,a);return Po.set(s,c),c}function Dp(t=_c){const e=Po.get(t);if(!e&&t===_c&&Sp())return kp();if(!e)throw $n.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let s=(r=nI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(c.join(" "));return}Qr(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebase-heartbeat-database",aI=1,ni="firebase-heartbeat-store";let qa=null;function Np(){return qa||(qa=bE(oI,aI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),qa}async function cI(t){try{const n=(await Np()).transaction(ni),r=await n.objectStore(ni).get(Op(t));return await n.done,r}catch(e){if(e instanceof yn)gr.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function ed(t,e){try{const r=(await Np()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,Op(t)),await r.done}catch(n){if(n instanceof yn)gr.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function Op(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=1024,uI=30*24*60*60*1e3;class hI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=td();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=uI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=td(),{heartbeatsToSend:r,unsentEntries:s}=dI(this._heartbeatsCache.heartbeats),i=Ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function td(){return new Date().toISOString().substring(0,10)}function dI(t,e=lI){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),nd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eE()?tE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nd(t){return Ro(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){Qr(new pr("platform-logger",e=>new CE(e),"PRIVATE")),Qr(new pr("heartbeat",e=>new hI(e),"PRIVATE")),jn(mc,Xh,t),jn(mc,Xh,"esm2017"),jn("fire-js","")}pI("");var gI="firebase",mI="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(gI,mI,"app");var rd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,xp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function y(){}y.prototype=_.prototype,T.D=_.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(I,A,S){for(var w=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)w[rt-2]=arguments[rt];return _.prototype[A].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,y){y||(y=0);var I=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)I[A]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(A=0;16>A;++A)I[A]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=T.g[0],y=T.g[1],A=T.g[2];var S=T.g[3],w=_+(S^y&(A^S))+I[0]+3614090360&4294967295;_=y+(w<<7&4294967295|w>>>25),w=S+(A^_&(y^A))+I[1]+3905402710&4294967295,S=_+(w<<12&4294967295|w>>>20),w=A+(y^S&(_^y))+I[2]+606105819&4294967295,A=S+(w<<17&4294967295|w>>>15),w=y+(_^A&(S^_))+I[3]+3250441966&4294967295,y=A+(w<<22&4294967295|w>>>10),w=_+(S^y&(A^S))+I[4]+4118548399&4294967295,_=y+(w<<7&4294967295|w>>>25),w=S+(A^_&(y^A))+I[5]+1200080426&4294967295,S=_+(w<<12&4294967295|w>>>20),w=A+(y^S&(_^y))+I[6]+2821735955&4294967295,A=S+(w<<17&4294967295|w>>>15),w=y+(_^A&(S^_))+I[7]+4249261313&4294967295,y=A+(w<<22&4294967295|w>>>10),w=_+(S^y&(A^S))+I[8]+1770035416&4294967295,_=y+(w<<7&4294967295|w>>>25),w=S+(A^_&(y^A))+I[9]+2336552879&4294967295,S=_+(w<<12&4294967295|w>>>20),w=A+(y^S&(_^y))+I[10]+4294925233&4294967295,A=S+(w<<17&4294967295|w>>>15),w=y+(_^A&(S^_))+I[11]+2304563134&4294967295,y=A+(w<<22&4294967295|w>>>10),w=_+(S^y&(A^S))+I[12]+1804603682&4294967295,_=y+(w<<7&4294967295|w>>>25),w=S+(A^_&(y^A))+I[13]+4254626195&4294967295,S=_+(w<<12&4294967295|w>>>20),w=A+(y^S&(_^y))+I[14]+2792965006&4294967295,A=S+(w<<17&4294967295|w>>>15),w=y+(_^A&(S^_))+I[15]+1236535329&4294967295,y=A+(w<<22&4294967295|w>>>10),w=_+(A^S&(y^A))+I[1]+4129170786&4294967295,_=y+(w<<5&4294967295|w>>>27),w=S+(y^A&(_^y))+I[6]+3225465664&4294967295,S=_+(w<<9&4294967295|w>>>23),w=A+(_^y&(S^_))+I[11]+643717713&4294967295,A=S+(w<<14&4294967295|w>>>18),w=y+(S^_&(A^S))+I[0]+3921069994&4294967295,y=A+(w<<20&4294967295|w>>>12),w=_+(A^S&(y^A))+I[5]+3593408605&4294967295,_=y+(w<<5&4294967295|w>>>27),w=S+(y^A&(_^y))+I[10]+38016083&4294967295,S=_+(w<<9&4294967295|w>>>23),w=A+(_^y&(S^_))+I[15]+3634488961&4294967295,A=S+(w<<14&4294967295|w>>>18),w=y+(S^_&(A^S))+I[4]+3889429448&4294967295,y=A+(w<<20&4294967295|w>>>12),w=_+(A^S&(y^A))+I[9]+568446438&4294967295,_=y+(w<<5&4294967295|w>>>27),w=S+(y^A&(_^y))+I[14]+3275163606&4294967295,S=_+(w<<9&4294967295|w>>>23),w=A+(_^y&(S^_))+I[3]+4107603335&4294967295,A=S+(w<<14&4294967295|w>>>18),w=y+(S^_&(A^S))+I[8]+1163531501&4294967295,y=A+(w<<20&4294967295|w>>>12),w=_+(A^S&(y^A))+I[13]+2850285829&4294967295,_=y+(w<<5&4294967295|w>>>27),w=S+(y^A&(_^y))+I[2]+4243563512&4294967295,S=_+(w<<9&4294967295|w>>>23),w=A+(_^y&(S^_))+I[7]+1735328473&4294967295,A=S+(w<<14&4294967295|w>>>18),w=y+(S^_&(A^S))+I[12]+2368359562&4294967295,y=A+(w<<20&4294967295|w>>>12),w=_+(y^A^S)+I[5]+4294588738&4294967295,_=y+(w<<4&4294967295|w>>>28),w=S+(_^y^A)+I[8]+2272392833&4294967295,S=_+(w<<11&4294967295|w>>>21),w=A+(S^_^y)+I[11]+1839030562&4294967295,A=S+(w<<16&4294967295|w>>>16),w=y+(A^S^_)+I[14]+4259657740&4294967295,y=A+(w<<23&4294967295|w>>>9),w=_+(y^A^S)+I[1]+2763975236&4294967295,_=y+(w<<4&4294967295|w>>>28),w=S+(_^y^A)+I[4]+1272893353&4294967295,S=_+(w<<11&4294967295|w>>>21),w=A+(S^_^y)+I[7]+4139469664&4294967295,A=S+(w<<16&4294967295|w>>>16),w=y+(A^S^_)+I[10]+3200236656&4294967295,y=A+(w<<23&4294967295|w>>>9),w=_+(y^A^S)+I[13]+681279174&4294967295,_=y+(w<<4&4294967295|w>>>28),w=S+(_^y^A)+I[0]+3936430074&4294967295,S=_+(w<<11&4294967295|w>>>21),w=A+(S^_^y)+I[3]+3572445317&4294967295,A=S+(w<<16&4294967295|w>>>16),w=y+(A^S^_)+I[6]+76029189&4294967295,y=A+(w<<23&4294967295|w>>>9),w=_+(y^A^S)+I[9]+3654602809&4294967295,_=y+(w<<4&4294967295|w>>>28),w=S+(_^y^A)+I[12]+3873151461&4294967295,S=_+(w<<11&4294967295|w>>>21),w=A+(S^_^y)+I[15]+530742520&4294967295,A=S+(w<<16&4294967295|w>>>16),w=y+(A^S^_)+I[2]+3299628645&4294967295,y=A+(w<<23&4294967295|w>>>9),w=_+(A^(y|~S))+I[0]+4096336452&4294967295,_=y+(w<<6&4294967295|w>>>26),w=S+(y^(_|~A))+I[7]+1126891415&4294967295,S=_+(w<<10&4294967295|w>>>22),w=A+(_^(S|~y))+I[14]+2878612391&4294967295,A=S+(w<<15&4294967295|w>>>17),w=y+(S^(A|~_))+I[5]+4237533241&4294967295,y=A+(w<<21&4294967295|w>>>11),w=_+(A^(y|~S))+I[12]+1700485571&4294967295,_=y+(w<<6&4294967295|w>>>26),w=S+(y^(_|~A))+I[3]+2399980690&4294967295,S=_+(w<<10&4294967295|w>>>22),w=A+(_^(S|~y))+I[10]+4293915773&4294967295,A=S+(w<<15&4294967295|w>>>17),w=y+(S^(A|~_))+I[1]+2240044497&4294967295,y=A+(w<<21&4294967295|w>>>11),w=_+(A^(y|~S))+I[8]+1873313359&4294967295,_=y+(w<<6&4294967295|w>>>26),w=S+(y^(_|~A))+I[15]+4264355552&4294967295,S=_+(w<<10&4294967295|w>>>22),w=A+(_^(S|~y))+I[6]+2734768916&4294967295,A=S+(w<<15&4294967295|w>>>17),w=y+(S^(A|~_))+I[13]+1309151649&4294967295,y=A+(w<<21&4294967295|w>>>11),w=_+(A^(y|~S))+I[4]+4149444226&4294967295,_=y+(w<<6&4294967295|w>>>26),w=S+(y^(_|~A))+I[11]+3174756917&4294967295,S=_+(w<<10&4294967295|w>>>22),w=A+(_^(S|~y))+I[2]+718787259&4294967295,A=S+(w<<15&4294967295|w>>>17),w=y+(S^(A|~_))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var y=_-this.blockSize,I=this.B,A=this.h,S=0;S<_;){if(A==0)for(;S<=y;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(I[A++]=T.charCodeAt(S++),A==this.blockSize){s(this,I),A=0;break}}else for(;S<_;)if(I[A++]=T[S++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var y=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=y&255,y/=256;for(this.u(T),T=Array(16),_=y=0;4>_;++_)for(var I=0;32>I;I+=8)T[y++]=this.g[_]>>>I&255;return T};function i(T,_){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=_(T)}function a(T,_){this.h=_;for(var y=[],I=!0,A=T.length-1;0<=A;A--){var S=T[A]|0;I&&S==_||(y[A]=S,I=!1)}this.g=y}var c={};function l(T){return-128<=T&&128>T?i(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return N(h(-T));for(var _=[],y=1,I=0;T>=y;I++)_[I]=T/y|0,y*=4294967296;return new a(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return N(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),I=g,A=0;A<T.length;A+=8){var S=Math.min(8,T.length-A),w=parseInt(T.substring(A,A+S),_);8>S?(S=h(Math.pow(_,S)),I=I.j(S).add(h(w))):(I=I.j(y),I=I.add(h(w)))}return I}var g=l(0),m=l(1),b=l(16777216);t=a.prototype,t.m=function(){if(k(this))return-N(this).m();for(var T=0,_=1,y=0;y<this.g.length;y++){var I=this.i(y);T+=(0<=I?I:4294967296+I)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(k(this))return"-"+N(this).toString(T);for(var _=h(Math.pow(T,6)),y=this,I="";;){var A=K(y,_).g;y=U(y,A.j(_));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=A,P(y))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=U(this,T),k(T)?-1:P(T)?0:1};function N(T){for(var _=T.g.length,y=[],I=0;I<_;I++)y[I]=~T.g[I];return new a(y,~T.h).add(m)}t.abs=function(){return k(this)?N(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],I=0,A=0;A<=_;A++){var S=I+(this.i(A)&65535)+(T.i(A)&65535),w=(S>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);I=w>>>16,S&=65535,w&=65535,y[A]=w<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function U(T,_){return T.add(N(_))}t.j=function(T){if(P(this)||P(T))return g;if(k(this))return k(T)?N(this).j(N(T)):N(N(this).j(T));if(k(T))return N(this.j(N(T)));if(0>this.l(b)&&0>T.l(b))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,y=[],I=0;I<2*_;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<T.g.length;A++){var S=this.i(I)>>>16,w=this.i(I)&65535,rt=T.i(A)>>>16,Ze=T.i(A)&65535;y[2*I+2*A]+=w*Ze,M(y,2*I+2*A),y[2*I+2*A+1]+=S*Ze,M(y,2*I+2*A+1),y[2*I+2*A+1]+=w*rt,M(y,2*I+2*A+1),y[2*I+2*A+2]+=S*rt,M(y,2*I+2*A+2)}for(I=0;I<_;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=_;I<2*_;I++)y[I]=0;return new a(y,0)};function M(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function Q(T,_){this.g=T,this.h=_}function K(T,_){if(P(_))throw Error("division by zero");if(P(T))return new Q(g,g);if(k(T))return _=K(N(T),_),new Q(N(_.g),N(_.h));if(k(_))return _=K(T,N(_)),new Q(N(_.g),_.h);if(30<T.g.length){if(k(T)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=_;0>=I.l(T);)y=he(y),I=he(I);var A=ge(y,1),S=ge(I,1);for(I=ge(I,2),y=ge(y,2);!P(I);){var w=S.add(I);0>=w.l(T)&&(A=A.add(y),S=w),I=ge(I,1),y=ge(y,1)}return _=U(T,A.j(_)),new Q(A,_)}for(A=g;0<=T.l(_);){for(y=Math.max(1,Math.floor(T.m()/_.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=h(y),w=S.j(_);k(w)||0<w.l(T);)y-=I,S=h(y),w=S.j(_);P(S)&&(S=m),A=A.add(S),T=U(T,w)}return new Q(A,T)}t.A=function(T){return K(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],I=0;I<_;I++)y[I]=this.i(I)&T.i(I);return new a(y,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],I=0;I<_;I++)y[I]=this.i(I)|T.i(I);return new a(y,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],I=0;I<_;I++)y[I]=this.i(I)^T.i(I);return new a(y,this.h^T.h)};function he(T){for(var _=T.g.length+1,y=[],I=0;I<_;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(y,T.h)}function ge(T,_){var y=_>>5;_%=32;for(var I=T.g.length-y,A=[],S=0;S<I;S++)A[S]=0<_?T.i(S+y)>>>_|T.i(S+y+1)<<32-_:T.i(S+y);return new a(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,lr=a}).apply(typeof rd<"u"?rd:typeof self<"u"?self:typeof window<"u"?window:{});var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vp,Mp,xs,Lp,uo,vc,Fp,Up,Bp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gi=="object"&&Gi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var D=f++;return{value:u(D,o[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,m.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,D){for(var q=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)q[xe-2]=arguments[xe];return u.prototype[R].apply(p,q)}}function k(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function N(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(l(p)){const R=o.length||0,D=p.length||0;o.length=R+D;for(let q=0;q<D;q++)o[R+q]=p[q]}else o.push(p)}}class U{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var he=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ge(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function T(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let D=0;D<y.length;D++)f=y[D],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function w(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class rt{constructor(){this.h=this.g=null}add(u,f){const p=Ze.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Ze=new U(()=>new Ee,o=>o.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,_e=!1,Pt=new rt,xt=()=>{const o=c.Promise.resolve(void 0);Ie=()=>{o.then(Nt)}};var Nt=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(f){S(f)}var u=Ze;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}_e=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var wn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o}();function qt(o,u){if(Be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(he){e:{try{K(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:et[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qt.aa.h.call(this)}}P(qt,Be);var et={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),Y=0;function H(o,u,f,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++Y,this.da=this.fa=!1}function ee(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ye(o){this.src=o,this.g={},this.h=0}ye.prototype.add=function(o,u,f,p,R){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var q=E(o,u,p,R);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new H(u,this.src,D,!!p,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,u,void 0),D;(D=0<=R)&&Array.prototype.splice.call(p,R,1),D&&(ee(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function E(o,u,f,p){for(var R=0;R<o.length;++R){var D=o[R];if(!D.da&&D.listener==u&&D.capture==!!f&&D.ha==p)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),O={};function V(o,u,f,p,R){if(p&&p.once)return j(o,u,f,p,R);if(Array.isArray(u)){for(var D=0;D<u.length;D++)V(o,u[D],f,p,R);return null}return f=pe(f),o&&o[x]?o.K(u,f,h(p)?!!p.capture:!!p,R):L(o,u,f,!1,p,R)}function L(o,u,f,p,R,D){if(!u)throw Error("Invalid event type");var q=h(R)?!!R.capture:!!R,xe=te(o);if(xe||(o[C]=xe=new ye(o)),f=xe.add(u,f,p,q,D),f.proxy)return f;if(p=W(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)wn||(R=q),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(ne(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function o(f){return u.call(o.src,o.listener,f)}const u=J;return o}function j(o,u,f,p,R){if(Array.isArray(u)){for(var D=0;D<u.length;D++)j(o,u[D],f,p,R);return null}return f=pe(f),o&&o[x]?o.L(u,f,h(p)?!!p.capture:!!p,R):L(o,u,f,!0,p,R)}function z(o,u,f,p,R){if(Array.isArray(u))for(var D=0;D<u.length;D++)z(o,u[D],f,p,R);else p=h(p)?!!p.capture:!!p,f=pe(f),o&&o[x]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],f=E(D,f,p,R),-1<f&&(ee(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=te(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,f,p,R)),(f=-1<o?u[o]:null)&&F(f))}function F(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[x])v(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(ne(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=te(u))?(v(f,o),f.h==0&&(f.src=null,u[C]=null)):ee(o)}}}function ne(o){return o in O?O[o]:O[o]="on"+o}function J(o,u){if(o.da)o=!0;else{u=new qt(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&F(o),o=f.call(p,u)}return o}function te(o){return o=o[C],o instanceof ye?o:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(o){return typeof o=="function"?o:(o[ie]||(o[ie]=function(u){return o.handleEvent(u)}),o[ie])}function le(){Ue.call(this),this.i=new ye(this),this.M=this,this.F=null}P(le,Ue),le.prototype[x]=!0,le.prototype.removeEventListener=function(o,u,f,p){z(this,o,u,f,p)};function ae(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Be(u,o);else if(u instanceof Be)u.target=u.target||o;else{var R=u;u=new Be(p,o),I(u,R)}if(R=!0,f)for(var D=f.length-1;0<=D;D--){var q=u.g=f[D];R=Me(q,p,!0,u)&&R}if(q=u.g=o,R=Me(q,p,!0,u)&&R,R=Me(q,p,!1,u)&&R,f)for(D=0;D<f.length;D++)q=u.g=f[D],R=Me(q,p,!1,u)&&R}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)ee(f[p]);delete o.g[u],o.h--}}this.F=null},le.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},le.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function Me(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,D=0;D<u.length;++D){var q=u[D];if(q&&!q.da&&q.capture==f){var xe=q.listener,st=q.ha||q.src;q.fa&&v(o.i,q),R=xe.call(st,p)!==!1&&R}}return R&&!p.defaultPrevented}function At(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function tn(o){o.g=At(()=>{o.g=null,o.i&&(o.i=!1,tn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Si extends Ue{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:tn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vt(o){Ue.call(this),this.h=o,this.g={}}P(Vt,Ue);var ps=[];function ht(o){ge(o.g,function(u,f){this.g.hasOwnProperty(f)&&F(u)},o),o.g={}}Vt.prototype.N=function(){Vt.aa.N.call(this),ht(this)},Vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bt=c.JSON.stringify,Ri=c.JSON.parse,Sm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ma(){}ma.prototype.h=null;function eu(o){return o.h||(o.h=o.i())}function tu(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _a(){Be.call(this,"d")}P(_a,Be);function ya(){Be.call(this,"c")}P(ya,Be);var Yn={},nu=null;function Ci(){return nu=nu||new le}Yn.La="serverreachability";function ru(o){Be.call(this,Yn.La,o)}P(ru,Be);function ms(o){const u=Ci();ae(u,new ru(u))}Yn.STAT_EVENT="statevent";function su(o,u){Be.call(this,Yn.STAT_EVENT,o),this.stat=u}P(su,Be);function It(o){const u=Ci();ae(u,new su(u,o))}Yn.Ma="timingevent";function iu(o,u){Be.call(this,Yn.Ma,o),this.size=u}P(iu,Be);function _s(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function Rm(o,u,f,p,R,D){o.info(function(){if(o.g)if(D)for(var q="",xe=D.split("&"),st=0;st<xe.length;st++){var Re=xe[st].split("=");if(1<Re.length){var dt=Re[0];Re=Re[1];var ft=dt.split("_");q=2<=ft.length&&ft[1]=="type"?q+(dt+"="+Re+"&"):q+(dt+"=redacted&")}}else q=null;else q=D;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+q})}function Cm(o,u,f,p,R,D,q){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+D+" "+q})}function Er(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+km(o,f)+(p?" "+p:"")})}function Pm(o,u){o.info(function(){return"TIMEOUT: "+u})}ys.prototype.info=function(){};function km(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var D=R[0];if(D!="noop"&&D!="stop"&&D!="close")for(var q=1;q<R.length;q++)R[q]=""}}}}return bt(f)}catch{return u}}var Pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ou={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},va;function ki(){}P(ki,ma),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},va=new ki;function En(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new Vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var cu={},wa={};function Ea(o,u,f){o.L=1,o.v=xi(nn(u)),o.m=f,o.P=!0,lu(o,null)}function lu(o,u){o.F=Date.now(),Di(o),o.A=nn(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Tu(f.i,"t",p),o.C=0,f=o.j.J,o.h=new au,o.g=$u(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Si(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(ps[0]=R.toString()),R=ps);for(var D=0;D<R.length;D++){var q=V(f,R[D],p||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ms(),Rm(o.i,o.u,o.A,o.l,o.R,o.m)}En.prototype.ca=function(o){o=o.target;const u=this.M;u&&rn(o)==3?u.j():this.Y(o)},En.prototype.Y=function(o){try{if(o==this.g)e:{const ft=rn(this.g);var u=this.g.Ba();const Ar=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||ku(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Ar?ms(3):ms(2)),Ia(this);var f=this.g.Z();this.X=f;t:if(uu(this)){var p=ku(this.g);o="";var R=p.length,D=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),vs(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(D&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,Cm(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,st=this.g;if((xe=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(xe)){var Re=xe;break t}}Re=null}if(f=Re)Er(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ta(this,f);else{this.o=!1,this.s=3,It(12),Jn(this),vs(this);break e}}if(this.P){f=!0;let Mt;for(;!this.J&&this.C<q.length;)if(Mt=Dm(this,q),Mt==wa){ft==4&&(this.s=4,It(14),f=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==cu){this.s=4,It(15),Er(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else Er(this.i,this.l,Mt,null),Ta(this,Mt);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||q.length!=0||this.h.h||(this.s=1,It(16),f=!1),this.o=this.o&&f,!f)Er(this.i,this.l,q,"[Invalid Chunked Response]"),Jn(this),vs(this);else if(0<q.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Pa(dt),dt.M=!0,It(11))}}else Er(this.i,this.l,q,null),Ta(this,q);ft==4&&Jn(this),this.o&&!this.J&&(ft==4?Lu(this.j,this):(this.o=!1,Di(this)))}else Gm(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Jn(this),vs(this)}}}catch{}finally{}};function uu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Dm(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?wa:(f=Number(u.substring(f,p)),isNaN(f)?cu:(p+=1,p+f>u.length?wa:(u=u.slice(p,p+f),o.C=p+f,u)))}En.prototype.cancel=function(){this.J=!0,Jn(this)};function Di(o){o.S=Date.now()+o.I,hu(o,o.I)}function hu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=_s(m(o.ba,o),u)}function Ia(o){o.B&&(c.clearTimeout(o.B),o.B=null)}En.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Pm(this.i,this.A),this.L!=2&&(ms(),It(17)),Jn(this),this.s=2,vs(this)):hu(this,this.S-o)};function vs(o){o.j.G==0||o.J||Lu(o.j,o)}function Jn(o){Ia(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ht(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ta(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Aa(f.h,o))){if(!o.K&&Aa(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ui(f),Li(f);else break e;Ca(f),It(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=_s(m(f.Za,f),6e3));if(1>=pu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Zn(f,11)}else if((o.K||f.g==o)&&Ui(f),!M(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let Re=R[u];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const dt=Re[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=Re[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Ar=Re[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(p=1.5*Ar,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Mt=o.g;if(Mt){const $i=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var D=p.h;D.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(ba(D,D.h),D.h=null))}if(p.D){const ka=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;ka&&(p.ya=ka,Le(p.I,p.D,ka))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var q=o;if(p.qa=Bu(p,p.J?p.ia:null,p.W),q.K){gu(p.h,q);var xe=q,st=p.L;st&&(xe.I=st),xe.B&&(Ia(xe),Di(xe)),p.g=q}else Vu(p);0<f.i.length&&Fi(f)}else Re[0]!="stop"&&Re[0]!="close"||Zn(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Zn(f,7):Ra(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}ms(4)}catch{}}var Nm=class{constructor(o,u){this.g=o,this.map=u}};function du(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pu(o){return o.h?1:o.g?o.g.size:0}function Aa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ba(o,u){o.g?o.g.add(u):o.h=u}function gu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}du.prototype.cancel=function(){if(this.i=mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function mu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return k(o.i)}function Om(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function xm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function _u(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=xm(o),p=Om(o),R=p.length,D=0;D<R;D++)u.call(void 0,p[D],f&&f[D],o)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var D=o[f].substring(0,p);R=o[f].substring(p+1)}else D=o[f];u(D,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Xn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Xn){this.h=o.h,Ni(this,o.j),this.o=o.o,this.g=o.g,Oi(this,o.s),this.l=o.l;var u=o.i,f=new Is;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),vu(this,f),this.m=o.m}else o&&(u=String(o).match(yu))?(this.h=!1,Ni(this,u[1]||"",!0),this.o=ws(u[2]||""),this.g=ws(u[3]||"",!0),Oi(this,u[4]),this.l=ws(u[5]||"",!0),vu(this,u[6]||"",!0),this.m=ws(u[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}Xn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Es(u,wu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Es(u,wu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Es(f,f.charAt(0)=="/"?Fm:Lm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Es(f,Bm)),o.join("")};function nn(o){return new Xn(o)}function Ni(o,u,f){o.j=f?ws(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Oi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function vu(o,u,f){u instanceof Is?(o.i=u,$m(o.i,o.h)):(f||(u=Es(u,Um)),o.i=new Is(u,o.h))}function Le(o,u,f){o.i.set(u,f)}function xi(o){return Le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ws(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Es(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Mm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Mm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var wu=/[#\/\?@]/g,Lm=/[#\?:]/g,Fm=/[#\?]/g,Um=/[#\?@]/g,Bm=/#/g;function Is(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function In(o){o.g||(o.g=new Map,o.h=0,o.i&&Vm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Is.prototype,t.add=function(o,u){In(this),this.i=null,o=Ir(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Eu(o,u){In(o),u=Ir(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Iu(o,u){return In(o),u=Ir(o,u),o.g.has(u)}t.forEach=function(o,u){In(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(u,R,p,this)},this)},this)},t.na=function(){In(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const R=o[p];for(let D=0;D<R.length;D++)f.push(u[p])}return f},t.V=function(o){In(this);let u=[];if(typeof o=="string")Iu(this,o)&&(u=u.concat(this.g.get(Ir(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return In(this),this.i=null,o=Ir(this,o),Iu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Tu(o,u,f){Eu(o,u),0<f.length&&(o.i=null,o.g.set(Ir(o,u),k(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const D=encodeURIComponent(String(p)),q=this.V(p);for(p=0;p<q.length;p++){var R=D;q[p]!==""&&(R+="="+encodeURIComponent(String(q[p]))),o.push(R)}}return this.i=o.join("&")};function Ir(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function $m(o,u){u&&!o.j&&(In(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(Eu(this,p),Tu(this,R,f))},o)),o.j=u}function jm(o,u){const f=new ys;if(c.Image){const p=new Image;p.onload=b(Tn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=b(Tn,f,"TestLoadImage: error",!1,u,p),p.onabort=b(Tn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(Tn,f,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function qm(o,u){const f=new ys,p=new AbortController,R=setTimeout(()=>{p.abort(),Tn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(D=>{clearTimeout(R),D.ok?Tn(f,"TestPingServer: ok",!0,u):Tn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Tn(f,"TestPingServer: error",!1,u)})}function Tn(o,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function zm(){this.g=new Sm}function Hm(o,u,f){const p=f||"";try{_u(o,function(R,D){let q=R;h(R)&&(q=bt(R)),u.push(p+D+"="+encodeURIComponent(q))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Ts(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Ts,ma),Ts.prototype.g=function(){return new Vi(this.l,this.j)},Ts.prototype.i=function(o){return function(){return o}}({});function Vi(o,u){le.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Vi,le),t=Vi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,bs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Au(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Au(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?As(this):bs(this),this.readyState==3&&Au(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,As(this))},t.Qa=function(o){this.g&&(this.response=o,As(this))},t.ga=function(){this.g&&As(this)};function As(o){o.readyState=4,o.l=null,o.j=null,o.v=null,bs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function bs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function bu(o){let u="";return ge(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Sa(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=bu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Le(o,u,f))}function je(o){le.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(je,le);var Km=/^https?$/i,Wm=["POST","PUT"];t=je.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():va.g(),this.v=this.o?eu(this.o):eu(va),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){Su(this,D);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())f.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Wm,u,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,q]of f)this.g.setRequestHeader(D,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pu(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){Su(this,D)}};function Su(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Ru(o),Mi(o)}function Ru(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),Mi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cu(this):this.bb())},t.bb=function(){Cu(this)};function Cu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||rn(o)!=4||o.Z()!=2)){if(o.u&&rn(o)==4)At(o.Ea,0,o);else if(ae(o,"readystatechange"),rn(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=q===0){var R=String(o.D).match(yu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!Km.test(R?R.toLowerCase():"")}f=p}if(f)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var D=2<rn(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Ru(o)}}finally{Mi(o)}}}}function Mi(o,u){if(o.g){Pu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{f.onreadystatechange=p}catch{}}}function Pu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function rn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ri(u)}};function ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Gm(o){const u={};o=(o.g&&2<=rn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var f=A(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=u[R]||[];u[R]=D,D.push(f)}T(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Du(o){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,o),this.cb=Ss("retryDelaySeedMs",1e4,o),this.Wa=Ss("forwardChannelMaxRetries",2,o),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new du(o&&o.concurrentRequestLimit),this.Da=new zm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Du.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,p){It(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Bu(this,null,this.W),Fi(this)};function Ra(o){if(Nu(o),o.G==3){var u=o.U++,f=nn(o.I);if(Le(f,"SID",o.K),Le(f,"RID",u),Le(f,"TYPE","terminate"),Rs(o,f),u=new En(o,o.j,u),u.L=2,u.v=xi(nn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=$u(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Di(u)}Uu(o)}function Li(o){o.g&&(Pa(o),o.g.cancel(),o.g=null)}function Nu(o){Li(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ui(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Fi(o){if(!fu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ie||xt(),_e||(Ie(),_e=!0),Pt.add(u,o),o.B=0}}function Qm(o,u){return pu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=_s(m(o.Ga,o,u),Fu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new En(this,this.j,o);let D=this.o;if(this.S&&(D?(D=_(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(R.H=D,D=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=xu(this,R,u),f=nn(this.I),Le(f,"RID",o),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),Rs(this,f),D&&(this.O?u="headers="+encodeURIComponent(String(bu(D)))+"&"+u:this.m&&Sa(f,this.m,D)),ba(this.h,R),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",u),Le(f,"SID","null"),R.T=!0,Ea(R,f,null)):Ea(R,f,u),this.G=2}}else this.G==3&&(o?Ou(this,o):this.i.length==0||fu(this.h)||Ou(this))};function Ou(o,u){var f;u?f=u.l:f=o.U++;const p=nn(o.I);Le(p,"SID",o.K),Le(p,"RID",f),Le(p,"AID",o.T),Rs(o,p),o.m&&o.o&&Sa(p,o.m,o.o),f=new En(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=xu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ba(o.h,f),Ea(f,p,u)}function Rs(o,u){o.H&&ge(o.H,function(f,p){Le(u,p,f)}),o.l&&_u({},function(f,p){Le(u,p,f)})}function xu(o,u,f){f=Math.min(o.i.length,f);var p=o.l?m(o.l.Na,o.l,o):null;e:{var R=o.i;let D=-1;for(;;){const q=["count="+f];D==-1?0<f?(D=R[0].g,q.push("ofs="+D)):D=0:q.push("ofs="+D);let xe=!0;for(let st=0;st<f;st++){let Re=R[st].g;const dt=R[st].map;if(Re-=D,0>Re)D=Math.max(0,R[st].g-100),xe=!1;else try{Hm(dt,q,"req"+Re+"_")}catch{p&&p(dt)}}if(xe){p=q.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function Vu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ie||xt(),_e||(Ie(),_e=!0),Pt.add(u,o),o.v=0}}function Ca(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=_s(m(o.Fa,o),Fu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=_s(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Li(this),Mu(this))};function Pa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Mu(o){o.g=new En(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=nn(o.qa);Le(u,"RID","rpc"),Le(u,"SID",o.K),Le(u,"AID",o.T),Le(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Le(u,"TO",o.ja),Le(u,"TYPE","xmlhttp"),Rs(o,u),o.m&&o.o&&Sa(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=xi(nn(u)),f.m=null,f.P=!0,lu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Li(this),Ca(this),It(19))};function Ui(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Lu(o,u){var f=null;if(o.g==u){Ui(o),Pa(o),o.g=null;var p=2}else if(Aa(o.h,u))f=u.D,gu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Ci(),ae(p,new iu(p,f)),Fi(o)}else Vu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&Qm(o,u)||p==2&&Ca(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:Zn(o,5);break;case 4:Zn(o,10);break;case 3:Zn(o,6);break;default:Zn(o,2)}}}function Fu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Zn(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),p=o.Xa;const R=!p;p=new Xn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ni(p,"https"),xi(p),R?jm(p.toString(),f):qm(p.toString(),f)}else It(2);o.G=0,o.l&&o.l.sa(u),Uu(o),Nu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Uu(o){if(o.G=0,o.ka=[],o.l){const u=mu(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Bu(o,u,f){var p=f instanceof Xn?nn(f):new Xn(f);if(p.g!="")u&&(p.g=u+"."+p.g),Oi(p,p.s);else{var R=c.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var D=new Xn(null);p&&Ni(D,p),u&&(D.g=u),R&&Oi(D,R),f&&(D.l=f),p=D}return f=o.D,u=o.ya,f&&u&&Le(p,f,u),Le(p,"VER",o.la),Rs(o,p),p}function $u(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new je(new Ts({eb:f})):new je(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ju(){}t=ju.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bi(){}Bi.prototype.g=function(o,u){return new kt(o,u)};function kt(o,u){le.call(this),this.g=new Du(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!M(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Tr(this)}P(kt,le),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Ra(this.g)},kt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=bt(o),o=f);u.i.push(new Nm(u.Ya++,o)),u.G==3&&Fi(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,kt.aa.N.call(this)};function qu(o){_a.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(qu,_a);function zu(){ya.call(this),this.status=1}P(zu,ya);function Tr(o){this.g=o}P(Tr,ju),Tr.prototype.ua=function(){ae(this.g,"a")},Tr.prototype.ta=function(o){ae(this.g,new qu(o))},Tr.prototype.sa=function(o){ae(this.g,new zu)},Tr.prototype.ra=function(){ae(this.g,"b")},Bi.prototype.createWebChannel=Bi.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Bp=function(){return new Bi},Up=function(){return Ci()},Fp=Yn,vc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pi.NO_ERROR=0,Pi.TIMEOUT=8,Pi.HTTP_ERROR=6,uo=Pi,ou.COMPLETE="complete",Lp=ou,tu.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",le.prototype.listen=le.prototype.K,xs=tu,Mp=Ts,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,Vp=je}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});const sd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new ul("@firebase/firestore");function Ds(){return mr.logLevel}function Z(t,...e){if(mr.logLevel<=ve.DEBUG){const n=e.map(fl);mr.debug(`Firestore (${cs}): ${t}`,...n)}}function pn(t,...e){if(mr.logLevel<=ve.ERROR){const n=e.map(fl);mr.error(`Firestore (${cs}): ${t}`,...n)}}function Yr(t,...e){if(mr.logLevel<=ve.WARN){const n=e.map(fl);mr.warn(`Firestore (${cs}): ${t}`,...n)}}function fl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function Qe(t,e){t||de()}function Se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class yI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vI{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ur,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ur)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string"),new $p(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new gt(e)}}class wI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class EI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class II{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string"),this.R=n.token,new II(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=AI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function Jr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new nt(0,0))}static max(){return new ue(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ri?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends ri{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const SI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends ri{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return SI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new X($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se($e.fromString(e))}static fromName(e){return new se($e.fromString(e).popFirst(5))}static empty(){return new se($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new $e(e.slice()))}}function RI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Hn(s,se.empty(),e)}function CI(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(ue.min(),se.empty(),-1)}static max(){return new Hn(ue.max(),se.empty(),-1)}}function PI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==kI)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function NI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gl.oe=-1;function ta(t){return t==null}function ko(t){return t===0&&1/t==-1/0}function OI(t){return typeof t=="number"&&Number.isInteger(t)&&!ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new od(this.data.getIterator())}getIteratorFrom(e){return new od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Vn([])}unionWith(e){let n=new ct(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qp("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const xI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Qe(!!t),typeof t=="string"){let e=0;const n=xI.exec(t);if(Qe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _l(t){const e=t.mapValue.fields.__previous_value__;return ml(e)?_l(e):e}function si(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ml(t)?4:MI(t)?9007199254740991:10:de()}function en(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Kn(s.timestampValue),c=Kn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=We(s.doubleValue),c=We(i.doubleValue);return a===c?ko(a)===ko(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Jr(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(id(a)!==id(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!en(a[l],c[l])))return!1;return!0}(t,e);default:return de()}}function oi(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Xr(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=We(i.integerValue||i.doubleValue),l=We(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return ad(t.timestampValue,e.timestampValue);case 4:return ad(si(t),si(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(i,a){const c=_r(i),l=_r(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ke(c[h],l[h]);if(d!==0)return d}return ke(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ke(We(i.latitude),We(a.latitude));return c!==0?c:ke(We(i.longitude),We(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,a){const c=i.values||[],l=a.values||[];for(let h=0;h<c.length&&h<l.length;++h){const d=Xr(c[h],l[h]);if(d)return d}return ke(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===Yi.mapValue&&a===Yi.mapValue)return 0;if(i===Yi.mapValue)return 1;if(a===Yi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let g=0;g<l.length&&g<d.length;++g){const m=ke(l[g],d[g]);if(m!==0)return m;const b=Xr(c[l[g]],h[d[g]]);if(b!==0)return b}return ke(l.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Kn(t),r=Kn(e),s=ke(n.seconds,r.seconds);return s!==0?s:ke(n.nanos,r.nanos)}function Zr(t){return wc(t)}function wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wc(n.fields[a])}`;return s+"}"}(t.mapValue):de()}function cd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ec(t){return!!t&&"integerValue"in t}function yl(t){return!!t&&"arrayValue"in t}function ld(t){return!!t&&"nullValue"in t}function ud(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function za(t){return!!t&&"mapValue"in t}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=qs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];za(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_i(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(qs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new mt(e,0,ue.min(),ue.min(),ue.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ue.min(),ue.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ue.min(),ue.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.position=e,this.inclusive=n}}function hd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(a.referenceValue),n.key):r=Xr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n="asc"){this.field=e,this.dir=n}}function LI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{}class Ge extends zp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UI(e,n,r):n==="array-contains"?new jI(e,r):n==="in"?new qI(e,r):n==="not-in"?new zI(e,r):n==="array-contains-any"?new HI(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BI(e,r):new $I(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xr(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends zp{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jt(e,n)}matches(e){return Hp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hp(t){return t.op==="and"}function Kp(t){return FI(t)&&Hp(t)}function FI(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function Ic(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Zr(t.value);if(Kp(t))return t.filters.map(e=>Ic(e)).join(",");{const e=t.filters.map(n=>Ic(n)).join(",");return`${t.op}(${e})`}}function Wp(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Wp(a,s.filters[c]),!0):!1}(t,e):void de()}function Gp(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Zr(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(Gp).join(" ,")+"}"}(t):"Filter"}class UI extends Ge{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class BI extends Ge{constructor(e,n){super(e,"in",n),this.keys=Qp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $I extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Qp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class jI extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yl(n)&&oi(n.arrayValue,this.value)}}class qI extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oi(this.value.arrayValue,n)}}class zI extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oi(this.value.arrayValue,n)}}class HI extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function fd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new KI(t,e,n,r,s,i,a)}function vl(t){const e=Se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ic(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ta(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zr(r)).join(",")),e.ue=n}return e.ue}function wl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dd(t.startAt,e.startAt)&&dd(t.endAt,e.endAt)}function Tc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function WI(t,e,n,r,s,i,a,c){return new ls(t,e,n,r,s,i,a,c)}function Yp(t){return new ls(t)}function pd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Jp(t){return t.collectionGroup!==null}function zs(t){const e=Se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ct(yt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ai(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new ai(yt.keyField(),r))}return e.ce}function Yt(t){const e=Se(t);return e.le||(e.le=GI(e,zs(t))),e.le}function GI(t,e){if(t.limitType==="F")return fd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ai(s.field,i)});const n=t.endAt?new Do(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Do(t.startAt.position,t.startAt.inclusive):null;return fd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ac(t,e){const n=t.filters.concat([e]);return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function No(t,e,n){return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function na(t,e){return wl(Yt(t),Yt(e))&&t.limitType===e.limitType}function Xp(t){return`${vl(Yt(t))}|lt:${t.limitType}`}function Cr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Gp(s)).join(", ")}]`),ta(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Zr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Zr(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function ra(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=hd(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,zs(r),s)||r.endAt&&!function(a,c,l){const h=hd(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,zs(r),s))}(t,e)}function QI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zp(t){return(e,n)=>{let r=!1;for(const s of zs(t)){const i=YI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YI(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Xr(l,h):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new ze(se.comparator);function Wn(){return JI}const eg=new ze(se.comparator);function Vs(...t){let e=eg;for(const n of t)e=e.insert(n.key,n);return e}function XI(t){let e=eg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return Hs()}function tg(){return Hs()}function Hs(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZI=new ct(se.comparator);function Ae(...t){let e=ZI;for(const n of t)e=e.add(n);return e}const eT=new ct(ke);function tT(){return eT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ko(e)?"-0":e}}function rg(t){return{integerValue:""+t}}function nT(t,e){return OI(e)?rg(e):ng(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this._=void 0}}function rT(t,e,n){return t instanceof bc?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ml(i)&&(i=_l(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof Oo?sg(t,e):t instanceof xo?ig(t,e):function(s,i){const a=iT(s,i),c=gd(a)+gd(s.Pe);return Ec(a)&&Ec(s.Pe)?rg(c):ng(s.serializer,c)}(t,e)}function sT(t,e,n){return t instanceof Oo?sg(t,e):t instanceof xo?ig(t,e):n}function iT(t,e){return t instanceof Sc?function(r){return Ec(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class bc extends sa{}class Oo extends sa{constructor(e){super(),this.elements=e}}function sg(t,e){const n=og(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class xo extends sa{constructor(e){super(),this.elements=e}}function ig(t,e){let n=og(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class Sc extends sa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gd(t){return We(t.integerValue||t.doubleValue)}function og(t){return yl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Oo&&s instanceof Oo||r instanceof xo&&s instanceof xo?Jr(r.elements,s.elements,en):r instanceof Sc&&s instanceof Sc?en(r.Pe,s.Pe):r instanceof bc&&s instanceof bc}(t.transform,e.transform)}class hr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class El{}function ag(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cT(t.key,hr.none()):new Il(t.key,t.data,hr.none());{const n=t.data,r=Wt.empty();let s=new ct(yt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new ia(t.key,r,new Vn(s.toArray()),hr.none())}}function aT(t,e,n){t instanceof Il?function(s,i,a){const c=s.value.clone(),l=_d(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ia?function(s,i,a){if(!ho(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=_d(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(cg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof Il?function(i,a,c,l){if(!ho(i.precondition,a))return c;const h=i.value.clone(),d=yd(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ia?function(i,a,c,l){if(!ho(i.precondition,a))return c;const h=yd(i.fieldTransforms,l,a),d=a.data;return d.setAll(cg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,a,c){return ho(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jr(r,s,(i,a)=>oT(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Il extends El{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ia extends El{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _d(t,e,n){const r=new Map;Qe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,sT(a,c,n[s]))}return r}function yd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,rT(i,a,e))}return r}class cT extends El{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=ag(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(n,r)=>md(n,r))&&Jr(this.baseMutations,e.baseMutations,(n,r)=>md(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,we;function lg(t){if(t===void 0)return pn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Ke.OK:return $.OK;case Ke.CANCELLED:return $.CANCELLED;case Ke.UNKNOWN:return $.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return $.INTERNAL;case Ke.UNAVAILABLE:return $.UNAVAILABLE;case Ke.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ke.NOT_FOUND:return $.NOT_FOUND;case Ke.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ke.ABORTED:return $.ABORTED;case Ke.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ke.DATA_LOSS:return $.DATA_LOSS;default:return de()}}(we=Ke||(Ke={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=new lr([4294967295,4294967295],0);function vd(t){const e=dT().encode(t),n=new xp;return n.update(e),new Uint8Array(n.digest())}function wd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new lr([n,r],0),new lr([s,i],0)]}class Tl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=lr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(lr.fromNumber(r)));return s.compare(fT)===1&&(s=new lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vd(e),[r,s]=wd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Tl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=vd(e),[r,s]=wd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,yi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oa(ue.min(),s,new ze(ke),Wn(),Ae())}}class yi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yi(r,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ug{constructor(e,n){this.targetId=e,this.me=n}}class hg{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ed{constructor(){this.fe=0,this.ge=Td(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new yi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Td()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wn(),this.qe=Id(),this.Qe=new ze(ke)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Tc(i))if(r===0){const a=new se(i.path);this.Ue(n,a,mt.newNoDocument(a,ue.min()))}else Qe(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=_r(r).toUint8Array()}catch(l){if(l instanceof qp)return Yr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Tl(a,s,i)}catch(l){return Yr(l instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Tc(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,mt.newNoDocument(l,e))}i.be&&(n.set(a,i.Ce()),i.ve())}});let r=Ae();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new oa(e,n,this.Qe,this.ke,r);return this.ke=Wn(),this.qe=Id(),this.Qe=new ze(ke),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ed,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(ke),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ed),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Id(){return new ze(se.comparator)}function Td(){return new ze(se.comparator)}const gT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_T=(()=>({and:"AND",or:"OR"}))();class yT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rc(t,e){return t.useProto3Json||ta(e)?e:{value:e}}function Cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Vr(t){return Qe(!!t),ue.fromTimestamp(function(n){const r=Kn(n);return new nt(r.seconds,r.nanos)}(t))}function fg(t,e){return Pc(t,e).canonicalString()}function Pc(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pg(t){const e=$e.fromString(t);return Qe(vg(e)),e}function Ha(t,e){const n=pg(e);if(n.get(1)!==t.databaseId.projectId)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(mg(n))}function gg(t,e){return fg(t.databaseId,e)}function vT(t){const e=pg(t);return e.length===4?$e.emptyPath():mg(e)}function Ad(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mg(t){return Qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Qe(d===void 0||typeof d=="string"),Et.fromBase64String(d||"")):(Qe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?$.UNKNOWN:lg(h.code);return new X(d,h.message||"")}(a);n=new hg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ha(t,r.document.name),i=Vr(r.document.updateTime),a=r.document.createTime?Vr(r.document.createTime):ue.min(),c=new Wt({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new fo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ha(t,r.document),i=r.readTime?Vr(r.readTime):ue.min(),a=mt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new fo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ha(t,r.document),i=r.removedTargetIds||[];n=new fo([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new hT(s,i),c=r.targetId;n=new ug(c,a)}}return n}function ET(t,e){return{documents:[gg(t,e.path)]}}function IT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gg(t,s);const i=function(h){if(h.length!==0)return yg(jt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Pr(m.field),direction:bT(m.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Rc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function TT(t){let e=vT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Qe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(g){const m=_g(g);return m instanceof jt&&Kp(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(m=>function(P){return new ai(kr(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(g){let m;return m=typeof g=="object"?g.value:g,ta(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(g){const m=!!g.before,b=g.values||[];return new Do(b,m)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const m=!g.before,b=g.values||[];return new Do(b,m)}(n.endAt)),WI(e,s,a,i,c,"F",l,h)}function AT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _g(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=kr(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=kr(n.unaryFilter.field);return Ge.create(a,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>_g(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function bT(t){return gT[t]}function ST(t){return mT[t]}function RT(t){return _T[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function kr(t){return yt.fromServerFormat(t.fieldPath)}function yg(t){return t instanceof Ge?function(n){if(n.op==="=="){if(ud(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NAN"}};if(ld(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ud(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NAN"}};if(ld(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(n.field),op:ST(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(s=>yg(s));return r.length===1?r[0]:{compositeFilter:{op:RT(n.op),filters:r}}}(t):de()}function vg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,s,i=ue.min(),a=ue.min(),c=Et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.ct=e}}function PT(t){const e=TT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?No(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(){this._n=new DT}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Hn.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class DT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new es(0)}static Ln(){return new es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ks(r.mutation,s,Vn.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Vs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=Wn();const a=Hs(),c=function(){return Hs()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof ia)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ks(d.mutation,h,d.mutation.getFieldMask(),nt.now())):a.set(h.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var g;return c.set(h,new OT(d,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Hs();let s=new ze((a,c)=>a-c),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Vn.empty();d=c.applyToLocalView(h,d),r.set(l,d);const g=(s.get(c.batchId)||Ae()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,g=tg();d.forEach(m=>{if(!i.has(m)){const b=ag(n.get(m),r.get(m));b!==null&&g.set(m,b),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return B.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(or());let c=-1,l=i;return a.next(h=>B.forEach(h,(d,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ae())).next(d=>({batchId:c,changes:XI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Vs();return this.indexManager.getCollectionParents(e,i).next(c=>B.forEach(c,l=>{const h=function(g,m){return new ls(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((g,m)=>{a=a.insert(g,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,mt.newInvalidDocument(d)))});let c=Vs();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&Ks(d.mutation,h,Vn.empty(),nt.now()),ra(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Vr(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:PT(s.bundledQuery),readTime:Vr(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.overlays=new ze(se.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=or(),i=n.length+1,a=new se(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=or(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=or(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return B.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new uT(n,r));let i=this.hr.get(n);i===void 0&&(i=Ae(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.Pr=new ct(tt.Ir),this.Tr=new ct(tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new tt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new se(new $e([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new se(new $e([])),r=new tt(n,e),s=new tt(n,e+1);let i=Ae();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return se.comparator(e.key,n.key)||ke(e.pr,n.pr)}static Er(e,n){return ke(e.pr,n.pr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ct(tt.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lT(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.wr=this.wr.add(new tt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(a)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const c=this.Sr(a.pr);i.push(c)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(ke);return n.forEach(s=>{const i=new tt(s,0),a=new tt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],c=>{r=r.add(c.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const a=new tt(new se(i),0);let c=new ct(ke);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.pr)),!0)},a),B.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Qe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new tt(n,0),s=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.vr=e,this.docs=function(){return new ze(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Wn();const a=n.path,c=new se(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||PI(CI(d),r)<=0||(s.has(d.key)||ra(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UT(this)}getSize(e){return B.resolve(this.size)}}class UT extends NT{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.persistence=e,this.Mr=new us(n=>vl(n),wl),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Al,this.targetCount=0,this.Lr=es.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new es(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n){this.Br={},this.overlays={},this.kr=new gl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new BT(this),this.indexManager=new kT,this.remoteDocumentCache=function(s){return new FT(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new CT(n),this.$r=new VT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new LT(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new jT(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return B.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class jT extends DI{constructor(e){super(),this.currentSequenceNumber=e}}class bl{constructor(e){this.persistence=e,this.zr=new Al,this.jr=null}static Hr(e){return new bl(e)}get Jr(){if(this.jr)return this.jr;throw de()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const s=se.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Sl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Zw()?8:NI(ut())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new qT;return this.Ji(e,n,a).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,a,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ds()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),B.resolve()):(Ds()<=ve.DEBUG&&Z("QueryEngine","Query:",Cr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ds()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):B.resolve())}ji(e,n){if(pd(n))return B.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=No(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ae(...i);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Zi(n,c);return this.Xi(n,h,a,l.readTime)?this.ji(e,No(n,null,"F")):this.es(e,h,n,l)}))})))}Hi(e,n,r,s){return pd(n)||s.isEqual(ue.min())?B.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(n,i);return this.Xi(n,a,r,s)?B.resolve(null):(Ds()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(n)),this.es(e,a,n,RI(s,-1)).next(c=>c))})}Zi(e,n){let r=new ct(Zp(e));return n.forEach((s,i)=>{ra(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ds()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.zi.getDocumentsMatchingQuery(e,n,Hn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new ze(ke),this.rs=new us(i=>vl(i),wl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xT(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function KT(t,e,n,r){return new HT(t,e,n,r)}async function wg(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Ae();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({us:h,removedBatchIds:a,addedBatchIds:c}))})})}function Eg(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function WT(t,e){const n=Se(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,g)=>{const m=s.get(g);if(!m)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,g)));let b=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(Et.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),function(k,N,U){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(m,b,d)&&c.push(n.Qr.updateTargetData(i,b))});let l=Wn(),h=Ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(GT(i,a,e.documentUpdates).next(d=>{l=d.cs,h=d.ls})),!r.isEqual(ue.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(g=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return B.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ns=s,i))}function GT(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Wn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{cs:a,ls:s}})}function QT(t,e){const n=Se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Qr.allocateTargetId(r).next(a=>(s=new Mn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function kc(t,e,n){const r=Se(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!mi(a))throw a;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function bd(t,e,n){const r=Se(t);let s=ue.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const g=Se(l),m=g.rs.get(d);return m!==void 0?B.resolve(g.ns.get(m)):g.Qr.getTargetData(h,d)}(r,a,Yt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,n?s:ue.min(),n?i:Ae())).next(c=>(YT(r,QI(e),c),{documents:c,hs:i})))}function YT(t,e,n){let r=t.ss.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Sd{constructor(){this.activeTargetIds=tT()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JT{constructor(){this.no=new Sd,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Sd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji=null;function Ka(){return Ji===null?Ji=function(){return 268435456+Math.round(2147483648*Math.random())}():Ji++,"0x"+Ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class tA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,a){const c=Ka(),l=this.vo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,a),this.Mo(n,l,h,s).then(d=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Yr("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,a,c){return this.Co(n,r,s,i,a)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}vo(n,r){const s=ZT[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=Ka();return new Promise((a,c)=>{const l=new Vp;l.setWithCredentials(!0),l.listenOnce(Lp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case uo.NO_ERROR:const d=l.getResponseJson();Z(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case uo.TIMEOUT:Z(pt,`RPC '${e}' ${i} timed out`),c(new X($.DEADLINE_EXCEEDED,"Request time out"));break;case uo.HTTP_ERROR:const g=l.getStatus();if(Z(pt,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const b=m==null?void 0:m.error;if(b&&b.status&&b.message){const P=function(N){const U=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(U)>=0?U:$.UNKNOWN}(b.status);c(new X(P,b.message))}else c(new X($.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new X($.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Z(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Oo(e,n,r){const s=Ka(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bp(),c=Up(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Mp({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Z(pt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const g=a.createWebChannel(d,l);let m=!1,b=!1;const P=new eA({lo:N=>{b?Z(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(Z(pt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),Z(pt,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},ho:()=>g.close()}),k=(N,U,M)=>{N.listen(U,Q=>{try{M(Q)}catch(K){setTimeout(()=>{throw K},0)}})};return k(g,xs.EventType.OPEN,()=>{b||(Z(pt,`RPC '${e}' stream ${s} transport opened.`),P.mo())}),k(g,xs.EventType.CLOSE,()=>{b||(b=!0,Z(pt,`RPC '${e}' stream ${s} transport closed`),P.po())}),k(g,xs.EventType.ERROR,N=>{b||(b=!0,Yr(pt,`RPC '${e}' stream ${s} transport errored:`,N),P.po(new X($.UNAVAILABLE,"The operation could not be completed")))}),k(g,xs.EventType.MESSAGE,N=>{var U;if(!b){const M=N.data[0];Qe(!!M);const Q=M,K=Q.error||((U=Q[0])===null||U===void 0?void 0:U.error);if(K){Z(pt,`RPC '${e}' stream ${s} received error:`,K);const he=K.status;let ge=function(y){const I=Ke[y];if(I!==void 0)return lg(I)}(he),T=K.message;ge===void 0&&(ge=$.INTERNAL,T="Unknown error status: "+he+" with message "+K.message),b=!0,P.po(new X(ge,T)),g.close()}else Z(pt,`RPC '${e}' stream ${s} received:`,M),P.yo(M)}}),k(c,Fp.STAT_EVENT,N=>{N.stat===vc.PROXY?Z(pt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===vc.NOPROXY&&Z(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function Wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){return new yT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r,s,i,a,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ig(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new X($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rA extends nA{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=wT(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?Vr(a.readTime):ue.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Ad(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=Tc(l)?{documents:ET(i,l)}:{query:IT(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=dg(i,a.resumeToken);const h=Rc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){c.readTime=Cc(i,a.snapshotVersion.toTimestamp());const h=Rc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=AT(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Ad(this.serializer),n.removeTarget=e,this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,Pc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X($.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,Pc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X($.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class iA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(pn(n),this.y_=!1):Z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{wi(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=Se(l);h.M_.add(4),await vi(h),h.N_.set("Unknown"),h.M_.delete(4),await ca(h)}(this))})}),this.N_=new iA(r,s)}}async function ca(t){if(wi(t))for(const e of t.x_)await e(!0)}async function vi(t){for(const e of t.x_)await e(!1)}function Tg(t,e){const n=Se(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),kl(n)?Pl(n):hs(n).Xo()&&Cl(n,e))}function Rl(t,e){const n=Se(t),r=hs(n);n.F_.delete(e),r.Xo()&&Ag(n,e),n.F_.size===0&&(r.Xo()?r.n_():wi(n)&&n.N_.set("Unknown"))}function Cl(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hs(t).P_(e)}function Ag(t,e){t.L_.xe(e),hs(t).I_(e)}function Pl(t){t.L_=new pT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),hs(t).start(),t.N_.w_()}function kl(t){return wi(t)&&!hs(t).Zo()&&t.F_.size>0}function wi(t){return Se(t).M_.size===0}function bg(t){t.L_=void 0}async function aA(t){t.N_.set("Online")}async function cA(t){t.F_.forEach((e,n)=>{Cl(t,e)})}async function lA(t,e){bg(t),kl(t)?(t.N_.D_(e),Pl(t)):t.N_.set("Unknown")}async function uA(t,e,n){if(t.N_.set("Online"),e instanceof hg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cd(t,r)}else if(e instanceof fo?t.L_.Ke(e):e instanceof ug?t.L_.He(e):t.L_.We(e),!n.isEqual(ue.min()))try{const r=await Eg(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.L_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(h);d&&i.F_.set(h,d.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(Et.EMPTY_BYTE_STRING,d.snapshotVersion)),Ag(i,l);const g=new Mn(d.target,l,h,d.sequenceNumber);Cl(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Cd(t,r)}}async function Cd(t,e,n){if(!mi(e))throw e;t.M_.add(1),await vi(t),t.N_.set("Offline"),n||(n=()=>Eg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ca(t)})}async function Pd(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.M_.add(3),await vi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ca(n)}async function hA(t,e){const n=Se(t);e?(n.M_.delete(2),await ca(n)):e||(n.M_.add(2),await vi(n),n.N_.set("Unknown"))}function hs(t){return t.B_||(t.B_=function(n,r,s){const i=Se(n);return i.f_(),new rA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:aA.bind(null,t),To:cA.bind(null,t),Ao:lA.bind(null,t),h_:uA.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),kl(t)?Pl(t):t.N_.set("Unknown")):(await t.B_.stop(),bg(t))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Dl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sg(t,e){if(pn("AsyncQueue",`${e}: ${t}`),mi(t))return new X($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.q_=new ze(se.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):de():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ts{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new ts(e,n,Mr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class fA{constructor(){this.queries=new us(e=>Xp(e),na),this.onlineState="Unknown",this.z_=new Set}}async function pA(t,e){const n=Se(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new dA,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Sg(a,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Nl(n)}async function gA(t,e){const n=Se(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mA(t,e){const n=Se(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.U_)c.H_(s)&&(r=!0);a.K_=s}}r&&Nl(n)}function _A(t,e,n){const r=Se(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function Nl(t){t.z_.forEach(e=>{e.next()})}var Dc,Dd;(Dd=Dc||(Dc={})).J_="default",Dd.Cache="cache";class yA{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Dc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.key=e}}class Cg{constructor(e){this.key=e}}class vA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ae(),this.mutatedKeys=Ae(),this.Ia=Zp(e),this.Ta=new Mr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new kd,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,g)=>{const m=s.get(d),b=ra(this.query,g)?g:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;m&&b?m.data.isEqual(b.data)?P!==k&&(r.track({type:3,doc:b}),N=!0):this.Ra(m,b)||(r.track({type:2,doc:b}),N=!0,(l&&this.Ia(b,l)>0||h&&this.Ia(b,h)<0)&&(c=!0)):!m&&b?(r.track({type:0,doc:b}),N=!0):m&&!b&&(r.track({type:1,doc:m}),N=!0,(l||h)&&(c=!0)),N&&(b?(a=a.add(b),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((d,g)=>function(b,P){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return k(b)-k(P)}(d.type,g.type)||this.Ia(d.doc,g.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,h=l!==this.ha;return this.ha=l,a.length!==0||h?{snapshot:new ts(this.query,e.Ta,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new kd,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ae(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Cg(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Rg(r))}),n}pa(e){this.la=e.hs,this.Pa=Ae();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ts.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class wA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EA{constructor(e){this.key=e,this.wa=!1}}class IA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new us(c=>Xp(c),na),this.Da=new Map,this.Ca=new Set,this.va=new ze(se.comparator),this.Fa=new Map,this.Ma=new Al,this.xa={},this.Oa=new Map,this.Na=es.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function TA(t,e,n=!0){const r=Og(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Pg(r,e,n,!0),s}async function AA(t,e){const n=Og(t);await Pg(n,e,!0,!1)}async function Pg(t,e,n,r){const s=await QT(t.localStore,Yt(e)),i=s.targetId,a=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await bA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Tg(t.remoteStore,s),c}async function bA(t,e,n,r,s){t.Ba=(g,m,b)=>async function(k,N,U,M){let Q=N.view.da(U);Q.Xi&&(Q=await bd(k.localStore,N.query,!1).then(({documents:T})=>N.view.da(T,Q)));const K=M&&M.targetChanges.get(N.targetId),he=M&&M.targetMismatches.get(N.targetId)!=null,ge=N.view.applyChanges(Q,k.isPrimaryClient,K,he);return Od(k,N.targetId,ge.fa),ge.snapshot}(t,g,m,b);const i=await bd(t.localStore,e,!0),a=new vA(e,i.hs),c=a.da(i.documents),l=yi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Od(t,n,h.fa);const d=new wA(e,n,a);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),h.snapshot}async function SA(t,e,n){const r=Se(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!na(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Rl(r.remoteStore,s.targetId),Nc(r,s.targetId)}).catch(pl)):(Nc(r,s.targetId),await kc(r.localStore,s.targetId,!0))}async function RA(t,e){const n=Se(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rl(n.remoteStore,r.targetId))}async function kg(t,e){const n=Se(t);try{const r=await WT(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Fa.get(i);a&&(Qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?Qe(a.wa):s.removedDocuments.size>0&&(Qe(a.wa),a.wa=!1))}),await Ng(n,r,e)}catch(r){await pl(r)}}function Nd(t,e,n){const r=Se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,a)=>{const c=a.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=Se(a);l.onlineState=c;let h=!1;l.queries.forEach((d,g)=>{for(const m of g.U_)m.j_(c)&&(h=!0)}),h&&Nl(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CA(t,e,n){const r=Se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new ze(se.comparator);a=a.insert(i,mt.newNoDocument(i,ue.min()));const c=Ae().add(i),l=new oa(ue.min(),new Map,new ze(ke),a,c);await kg(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Ol(r)}else await kc(r.localStore,e,!1).then(()=>Nc(r,e,n)).catch(pl)}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Dg(t,r)})}function Dg(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Rl(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Ol(t))}function Od(t,e,n){for(const r of n)r instanceof Rg?(t.Ma.addReference(r.key,e),PA(t,r)):r instanceof Cg?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Dg(t,r.key)):de()}function PA(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Ol(t))}function Ol(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new se($e.fromString(e)),r=t.Na.next();t.Fa.set(r,new EA(n)),t.va=t.va.insert(n,r),Tg(t.remoteStore,new Mn(Yt(Yp(n.path)),r,"TargetPurposeLimboResolution",gl.oe))}}async function Ng(t,e,n){const r=Se(t),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{a.push(r.Ba(l,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Sl.Ki(l.targetId,h);i.push(d)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(l,h){const d=Se(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>B.forEach(h,m=>B.forEach(m.qi,b=>d.persistence.referenceDelegate.addReference(g,m.targetId,b)).next(()=>B.forEach(m.Qi,b=>d.persistence.referenceDelegate.removeReference(g,m.targetId,b)))))}catch(g){if(!mi(g))throw g;Z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const b=d.ns.get(m),P=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(P);d.ns=d.ns.insert(m,k)}}}(r.localStore,i))}async function kA(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await wg(n.localStore,e);n.currentUser=e,function(i,a){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new X($.CANCELLED,a))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ng(n,r.us)}}function DA(t,e){const n=Se(t),r=n.Fa.get(e);if(r&&r.wa)return Ae().add(r.key);{let s=Ae();const i=n.Da.get(e);if(!i)return s;for(const a of i){const c=n.ba.get(a);s=s.unionWith(c.view.Ea)}return s}}function Og(t){const e=Se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CA.bind(null,e),e.Sa.h_=mA.bind(null,e.eventManager),e.Sa.ka=_A.bind(null,e.eventManager),e}class xd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=aa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return KT(this.persistence,new zT,e.initialUser,this.serializer)}createPersistence(e){return new $T(bl.Hr,this.serializer)}createSharedClientState(e){return new JT}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kA.bind(null,this.syncEngine),await hA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fA}()}createDatastore(e){const n=aa(e.databaseInfo.databaseId),r=function(i){return new tA(i)}(e.databaseInfo);return function(i,a,c,l){return new sA(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new oA(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Nd(this.syncEngine,n,0),function(){return Rd.D()?new Rd:new XT}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,d){const g=new IA(s,i,a,c,l,h);return d&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=Se(r);Z("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await vi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=bI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ga(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MA(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Pd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Pd(e.remoteStore,s)),t._onlineComponents=e}function VA(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function MA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ga(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VA(n))throw n;Yr("Error using user provided cache. Falling back to memory cache: "+n),await Ga(t,new xd)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Ga(t,new xd);return t._offlineComponents}async function LA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Vd(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Vd(t,new NA))),t._onlineComponents}async function FA(t){const e=await LA(t),n=e.eventManager;return n.onListen=TA.bind(null,e.syncEngine),n.onUnlisten=SA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=AA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RA.bind(null,e.syncEngine),n}function UA(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const d=new OA({next:m=>{a.enqueueAndForget(()=>gA(i,g)),m.fromCache&&l.source==="server"?h.reject(new X($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new yA(c,d,{includeMetadataChanges:!0,ra:!0});return pA(i,g)}(await FA(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t,e,n){if(!n)throw new X($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $A(t,e,n,r){if(e===!0&&r===!0)throw new X($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ld(t){if(se.isDocumentKey(t))throw new X($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function la(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Oc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=la(t);throw new X($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function jA(t,e){if(e<=0)throw new X($.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$A("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _I;switch(r.type){case"firstParty":return new EI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Md.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Md.delete(n),r.terminate())}(this),Promise.resolve()}}function qA(t,e,n,r={}){var s;const i=(t=Oc(t,xl))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=gt.MOCK_USER;else{c=Ww(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(h)}t._authCredentials=new yI(new $p(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qn(this.firestore,e,this._query)}}class vn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class Lr extends Qn{constructor(e,n,r){super(e,n,Yp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new se(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function xc(t,e,...n){if(t=Zt(t),BA("collection","path",e),t instanceof xl){const r=$e.fromString(e,...n);return Ld(r),new Lr(t,null,r)}{if(!(t instanceof vn||t instanceof Lr))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Ld(r),new Lr(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ig(this,"async_queue_retry"),this.hu=()=>{const n=Wa();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new ur;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!mi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Dl.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&de()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Vg extends xl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new zA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mg(this),this._firestoreClient.terminate()}}function HA(t,e){const n=typeof t=="object"?t:Dp(),r=typeof t=="string"?t:e||"(default)",s=dl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Hw("firestore");i&&qA(s,...i)}return s}function KA(t){return t._firestoreClient||Mg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mg(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new VI(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,xg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new xA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(Et.fromBase64String(e))}catch(n){throw new X($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=/^__.*__$/;function Ug(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Ml{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ml(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Vc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Ug(this.fu)&&WA.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class GA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||aa(e)}Fu(e,n,r,s=!1){return new Ml({fu:e,methodName:n,vu:r,path:yt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function QA(t){const e=t._freezeSettings(),n=aa(t._databaseId);return new GA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YA(t,e,n,r=!1){return Ll(n,t.Fu(r?4:3,e))}function Ll(t,e){if(Bg(t=Zt(t)))return XA("Unsupported field value:",e,t),JA(t,e);if(t instanceof Fg)return function(r,s){if(!Ug(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Ll(c,s.bu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Cc(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cc(s.serializer,i)}}if(r instanceof Vl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:dg(s.serializer,r._byteString)};if(r instanceof vn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fg(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${la(r)}`)}(t,e)}function JA(t,e){const n={};return jp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(t,(r,s)=>{const i=Ll(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Bg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Vl||t instanceof ns||t instanceof vn||t instanceof Fg)}function XA(t,e,n){if(!Bg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=la(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}const ZA=new RegExp("[~\\*/\\[\\]]");function e1(t,e,n){if(e.search(ZA)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lg(...e.split("."))._internalPath}catch{throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vc(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new X($.INVALID_ARGUMENT,c+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class t1 extends $g{data(){return super.data()}}function Fl(t,e){return typeof e=="string"?e1(t,e):e instanceof Lg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ul{}class Bl extends Ul{}function Mc(t,e,...n){let r=[];e instanceof Ul&&r.push(e),r=r.concat(n),function(i){const a=i.filter(l=>l instanceof jl).length,c=i.filter(l=>l instanceof $l).length;if(a>1||a>0&&c>0)throw new X($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class $l extends Bl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $l(e,n,r)}_apply(e){const n=this._parse(e);return jg(e._query,n),new Qn(e.firestore,e.converter,Ac(e._query,n))}_parse(e){const n=QA(e.firestore);return function(i,a,c,l,h,d,g){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Bd(g,d);const b=[];for(const P of g)b.push(Ud(l,i,P));m={arrayValue:{values:b}}}else m=Ud(l,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Bd(g,d),m=YA(c,a,g,d==="in"||d==="not-in");return Ge.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class jl extends Ul{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jl(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)jg(a,l),a=Ac(a,l)}(e._query,n),new Qn(e.firestore,e.converter,Ac(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ql extends Bl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ql(e,n)}_apply(e){const n=function(s,i,a){if(s.startAt!==null)throw new X($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ai(i,a)}(e._query,this._field,this._direction);return new Qn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ls(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Lc(t,e="asc"){const n=e,r=Fl("orderBy",t);return ql._create(r,n)}class zl extends Bl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new zl(e,n,r)}_apply(e){return new Qn(e.firestore,e.converter,No(e._query,this._limit,this._limitType))}}function r1(t){return jA("limit",t),zl._create("limit",t,"F")}function Ud(t,e,n){if(typeof(n=Zt(n))=="string"){if(n==="")throw new X($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jp(e)&&n.indexOf("/")!==-1)throw new X($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!se.isDocumentKey(r))throw new X($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cd(t,new se(r))}if(n instanceof vn)return cd(t,n._key);throw new X($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${la(n)}.`)}function Bd(t,e){if(!Array.isArray(t)||t.length===0)throw new X($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jg(t,e){const n=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class s1{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _i(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Vl(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_l(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Qe(vg(r));const s=new ii(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class i1 extends $g{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class po extends i1{data(e={}){return super.data(e)}}class o1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new po(this._firestore,this._userDataWriter,r.key,r,new Xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:a1(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function a1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}class c1 extends s1{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,n)}}function Fc(t){t=Oc(t,Qn);const e=Oc(t.firestore,Vg),n=KA(e),r=new c1(e);return n1(t._query),UA(n,t._query).then(s=>new o1(e,r,t,s))}(function(e,n=!0){(function(s){cs=s})(as),Qr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Vg(new vI(r.getProvider("auth-internal")),new TI(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),jn(sd,"4.6.3",e),jn(sd,"4.6.3","esm2017")})();function Hl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function qg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l1=qg,zg=new pi("auth","Firebase",qg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new ul("@firebase/auth");function u1(t,...e){Vo.logLevel<=ve.WARN&&Vo.warn(`Auth (${as}): ${t}`,...e)}function go(t,...e){Vo.logLevel<=ve.ERROR&&Vo.error(`Auth (${as}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Kl(t,...e)}function Jt(t,...e){return Kl(t,...e)}function Hg(t,e,n){const r=Object.assign(Object.assign({},l1()),{[e]:n});return new pi("auth","Firebase",r).create(e,{appName:t.name})}function qn(t){return Hg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zg.create(t,...e)}function oe(t,e,...n){if(!t)throw Kl(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function mn(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h1(){return $d()==="http:"||$d()==="https:"}function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h1()||Yw()||"connection"in navigator)?navigator.onLine:!0}function f1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Gw()||Jw()}get(){return d1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new Ei(3e4,6e4);function ua(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ds(t,e,n,r,s={}){return Wg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=gi(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Kg.fetch()(Qg(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Wg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},p1),e);try{const s=new m1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Hg(t,d,h);gn(t,d)}}catch(s){if(s instanceof yn)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function Gg(t,e,n,r,s={}){const i=await ds(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Wl(t.config,s):`${t.config.apiScheme}://${s}`}class m1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),g1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function Yg(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y1(t,e=!1){const n=Zt(t),r=await n.getIdToken(e),s=Gl(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ws(Qa(s.auth_time)),issuedAtTime:Ws(Qa(s.iat)),expirationTime:Ws(Qa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qa(t){return Number(t)*1e3}function Gl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ap(n);return s?JSON.parse(s):(go("Failed to decode base64 JWT payload"),null)}catch(s){return go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jd(t){const e=Gl(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&v1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function v1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ci(t,Yg(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Jg(i.providerUserInfo):[],c=I1(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Bc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function E1(t){const e=Zt(t);await Mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jg(t){return t.map(e=>{var{providerId:n}=e,r=Hl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(t,e){const n=await Wg(t,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Qg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Kg.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function A1(t,e){return ds(t,"POST","/v2/accounts:revokeToken",ua(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=jd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await T1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Fr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return y1(this,e)}reload(){return E1(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await ci(this,_1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,d;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:K,isAnonymous:he,providerData:ge,stsTokenManager:T}=n;oe(Q&&T,e,"internal-error");const _=Fr.fromJSON(this.name,T);oe(typeof Q=="string",e,"internal-error"),Sn(g,e.name),Sn(m,e.name),oe(typeof K=="boolean",e,"internal-error"),oe(typeof he=="boolean",e,"internal-error"),Sn(b,e.name),Sn(P,e.name),Sn(k,e.name),Sn(N,e.name),Sn(U,e.name),Sn(M,e.name);const y=new ln({uid:Q,auth:e,email:m,emailVerified:K,displayName:g,isAnonymous:he,photoURL:P,phoneNumber:b,tenantId:k,stsTokenManager:_,createdAt:U,lastLoginAt:M});return ge&&Array.isArray(ge)&&(y.providerData=ge.map(I=>Object.assign({},I))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fr;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Fr;c.updateFromIdToken(r);const l=new ln({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Map;function un(t){mn(t instanceof Function,"Expected a class definition");let e=qd.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xg.type="NONE";const zd=Xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ur(un(zd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||un(zd);const a=mo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){const g=ln._fromJSON(e,d);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ur(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Ur(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rm(e))return"Blackberry";if(sm(e))return"Webos";if(Ql(e))return"Safari";if((e.includes("chrome/")||em(e))&&!e.includes("edge/"))return"Chrome";if(nm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zg(t=ut()){return/firefox\//i.test(t)}function Ql(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function em(t=ut()){return/crios\//i.test(t)}function tm(t=ut()){return/iemobile/i.test(t)}function nm(t=ut()){return/android/i.test(t)}function rm(t=ut()){return/blackberry/i.test(t)}function sm(t=ut()){return/webos/i.test(t)}function ha(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function b1(t=ut()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function S1(){return Xw()&&document.documentMode===10}function im(t=ut()){return ha(t)||nm(t)||sm(t)||rm(t)||/windows phone/i.test(t)||tm(t)}function R1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t,e=[]){let n;switch(t){case"Browser":n=Hd(ut());break;case"Worker":n=`${Hd(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e={}){return ds(t,"GET","/v2/passwordPolicy",ua(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=6;class D1{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:k1,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kd(this),this.idTokenSubscription=new Kd(this),this.beforeStateQueue=new C1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yg(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(qn(this));const n=e?Zt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await P1(this),n=new D1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await A1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=om(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function da(t){return Zt(t)}class Kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=oE(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O1(t){Yl=t}function x1(t){return Yl.loadJS(t)}function V1(){return Yl.gapiScript}function M1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e){const n=dl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Co(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function F1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function U1(t,e,n){const r=da(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=am(e),{host:a,port:c}=B1(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$1()}function am(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function B1(t){const e=am(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Wd(a)}}}function Wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e){return Gg(t,"POST","/v1/accounts:signInWithIdp",ua(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="http://localhost";class vr extends cm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Br(e,n)}buildRequest(){const e={requestUri:j1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ii{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ii{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ii{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(t,e){return Gg(t,"POST","/v1/accounts:signUp",ua(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),a=Gd(r);return new Gn({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gd(r);return new Gn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t){var e;if(an(t.app))return Promise.reject(qn(t));const n=da(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Gn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await q1(n,{returnSecureToken:!0}),s=await Gn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Lo(e,n,r,s)}}function um(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(t,i,e,r):i})}async function H1(t,e,n=!1){const r=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(qn(r));const s="reauthenticate";try{const i=await ci(t,um(r,s,e,t),n);oe(i.idToken,r,"internal-error");const a=Gl(i.idToken);oe(a,r,"internal-error");const{sub:c}=a;return oe(t.uid===c,r,"user-mismatch"),Gn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e,n=!1){if(an(t.app))return Promise.reject(qn(t));const r="signIn",s=await um(t,r,e),i=await Gn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function G1(t,e,n,r){return Zt(t).onIdTokenChanged(e,n,r)}function Q1(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}const Fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(){const t=ut();return Ql(t)||ha(t)}const J1=1e3,X1=10;class dm extends hm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Y1()&&R1(),this.fallbackToPolling=im(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);S1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,X1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dm.type="LOCAL";const Z1=dm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends hm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fm.type="SESSION";const pm=fm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await eb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Jl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function nb(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ib(){return gm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="firebaseLocalStorageDb",ob=1,Uo="firebaseLocalStorage",_m="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pa(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function ab(){const t=indexedDB.deleteDatabase(mm);return new Ti(t).toPromise()}function $c(){const t=indexedDB.open(mm,ob);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:_m})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await ab(),e(await $c()))})})}async function Qd(t,e,n){const r=pa(t,!0).put({[_m]:e,value:n});return new Ti(r).toPromise()}async function cb(t,e){const n=pa(t,!1).get(e),r=await new Ti(n).toPromise();return r===void 0?null:r.value}function Yd(t,e){const n=pa(t,!0).delete(e);return new Ti(n).toPromise()}const lb=800,ub=3;class ym{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ub)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(ib()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rb(),!this.activeServiceWorker)return;this.sender=new tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await Qd(e,Fo,"1"),await Yd(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pa(s,!1).getAll();return new Ti(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ym.type="LOCAL";const hb=ym;new Ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t,e){return e?un(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends cm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fb(t){return W1(t.auth,new Xl(t),t.bypassAuthState)}function pb(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),K1(n,new Xl(t),t.bypassAuthState)}async function gb(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),H1(n,new Xl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fb;case"linkViaPopup":case"linkViaRedirect":return gb;case"reauthViaPopup":case"reauthViaRedirect":return pb;default:gn(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=new Ei(2e3,1e4);class Dr extends vm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Jl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mb.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="pendingRedirect",_o=new Map;class yb extends vm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await vb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vb(t,e){const n=Ib(e),r=Eb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wb(t,e){_o.set(t._key(),e)}function Eb(t){return un(t._redirectPersistence)}function Ib(t){return mo(_b,t.config.apiKey,t.name)}async function Tb(t,e,n=!1){if(an(t.app))return Promise.reject(qn(t));const r=da(t),s=db(r,e),a=await new yb(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=10*60*1e3;class bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ab&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jd(e))}saveEventToCache(e){this.cachedEventUids.add(Jd(e)),this.lastProcessedEventTime=Date.now()}}function Jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pb=/^https?/;async function kb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Rb(t);for(const n of e)try{if(Db(n))return}catch{}gn(t,"unauthorized-domain")}function Db(t){const e=Uc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Pb.test(n))return!1;if(Cb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new Ei(3e4,6e4);function Xd(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ob(t){return new Promise((e,n)=>{var r,s,i;function a(){Xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xd(),n(Jt(t,"network-request-failed"))},timeout:Nb.get()})}if(!((s=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xt().gapi)===null||i===void 0)&&i.load)a();else{const c=M1("iframefcb");return Xt()[c]=()=>{gapi.load?a():n(Jt(t,"network-request-failed"))},x1(`${V1()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw yo=null,e})}let yo=null;function xb(t){return yo=yo||Ob(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new Ei(5e3,15e3),Mb="__/auth/iframe",Lb="emulator/auth/iframe",Fb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bb(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wl(e,Lb):`https://${t.config.authDomain}/${Mb}`,r={apiKey:e.apiKey,appName:t.name,v:as},s=Ub.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${gi(r).slice(1)}`}async function $b(t){const e=await xb(t),n=Xt().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:Bb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Jt(t,"network-request-failed"),c=Xt().setTimeout(()=>{i(a)},Vb.get());function l(){Xt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qb=500,zb=600,Hb="_blank",Kb="http://localhost";class Zd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wb(t,e,n,r=qb,s=zb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},jb),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();n&&(c=em(h)?Hb:n),Zg(h)&&(e=e||Kb,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[b,P])=>`${m}${b}=${P},`,"");if(b1(h)&&c!=="_self")return Gb(e||"",c),new Zd(null);const g=window.open(e||"",c,d);oe(g,t,"popup-blocked");try{g.focus()}catch{}return new Zd(g)}function Gb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="__/auth/handler",Yb="emulator/auth/handler",Jb=encodeURIComponent("fac");async function ef(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:s};if(e instanceof lm){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",iE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries(i||{}))a[d]=g}if(e instanceof Ii){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${Jb}=${encodeURIComponent(l)}`:"";return`${Xb(t)}?${gi(c).slice(1)}${h}`}function Xb({config:t}){return t.emulator?Wl(t,Yb):`https://${t.authDomain}/${Qb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="webStorageSupport";class Zb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pm,this._completeRedirectFn=Tb,this._overrideRedirectResult=wb}async _openPopup(e,n,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ef(e,n,r,Uc(),s);return Wb(e,a,Jl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ef(e,n,r,Uc(),s);return nb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $b(e),r=new bb(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ya];a!==void 0&&n(!!a),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return im()||Ql()||ha()}}const eS=Zb;var tf="@firebase/auth",nf="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rS(t){Qr(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:om(t)},h=new N1(r,s,i,l);return F1(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new pr("auth-internal",e=>{const n=da(e.getProvider("auth").getImmediate());return(r=>new tS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(tf,nf,nS(t)),jn(tf,nf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=5*60,iS=Rp("authIdTokenMaxAge")||sS;let rf=null;const oS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iS)return;const s=n==null?void 0:n.token;rf!==s&&(rf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aS(t=Dp()){const e=dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=L1(t,{popupRedirectResolver:eS,persistence:[hb,Z1,pm]}),r=Rp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=oS(i.toString());Q1(n,a,()=>a(n.currentUser)),G1(n,c=>a(c))}}const s=bp("auth");return s&&U1(n,`http://${s}`),n}function cS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}O1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rS("Browser");const lS={apiKey:"AIzaSyBMX5fhRGBNhKpf11lnHhVi018b5Zavkv8",authDomain:"ws-db-11235813.firebaseapp.com",projectId:"ws-db-11235813",storageBucket:"ws-db-11235813.appspot.com",messagingSenderId:"318238552225",appId:"1:318238552225:web:a5eae1ca149d3137dbc0e0"},Em=kp(lS),jc=HA(Em),uS=aS(Em);z1(uS).then(()=>{console.log("Signed in anonymously")}).catch(t=>{console.error("Error signing in anonymously:",t)});const Ai=Xo("tlData",()=>{const t=vt({}),e=vt({name:"default",url:"noUrl",weight:-1,color:3,isShow:!1,valid:!0}),n=vt(0),r=async()=>{if(!(Math.floor(Date.now()/1e3)<n.value+3600*24)){m();try{const k=Mc(xc(jc,"siteData"),Lc("no"));(await Fc(k)).forEach(U=>{const M=U.data();M.id in t.value?(t.value[M.id].valid=!0,t.value[M.id].name=M.name,t.value[M.id].url=M.url):t.value[M.id]={name:M.name,url:M.url,weight:Object.keys(t.value).length,color:0,isShow:!0,valid:!0}}),b()}catch(k){console.error("Error fetching documents: ",k)}}},s=async()=>{t.value={};try{const P=Mc(xc(jc,"siteData"),Lc("no"));(await Fc(P)).forEach(N=>{const U=N.data();t.value[U.id]={name:U.name,url:U.url,weight:Object.keys(t.value).length,color:0,isShow:!0,valid:!0}})}catch(P){console.error("Error fetching documents: ",P)}},i=me(()=>{let P=[];for(const N of Object.values(t.value))P.push(N.weight);return new Set(P).size!=P.length}),a=me(()=>{let P=[];for(const[k,N]of Object.entries(t.value))P.push({id:k,weight:N.weight});return P.sort((k,N)=>k.weight-N.weight),P.map(k=>k.id)}),c=me(()=>{let P=[];for(const[k,N]of Object.entries(t.value))N.isShow!=!1&&P.push({id:k,weight:N.weight});return P.sort((k,N)=>k.weight-N.weight),P.map(k=>k.id)});function l(P,k){t.value[P].color=k}function h(P,k){t.value[P].weight=k}function d(P){const k=t.value[P].weight;if(k>0){const N=k-1,U=Object.keys(t.value).find(M=>t.value[M].weight==N);console.log("upWeight"),console.log(k,P),console.log(N,U),t.value[P].weight=N,t.value[U].weight=k}}function g(P){const k=t.value[P].weight;if(k<Object.keys(t.value).length-1){const N=k+1,U=Object.keys(t.value).find(M=>t.value[M].weight==N);t.value[P].weight=N,t.value[U].weight=k}}function m(){for(const P of Object.values(t.value))P.valid=!1}function b(){for(const[k,N]of Object.entries(t.value))N.valid||delete t.value[k];let P=[];for(const[k,N]of Object.entries(t.value))P.push({id:k,weight:N.weight});P.sort((k,N)=>k.weight-N.weight);for(const[k,N]of P.entries())t.value[N.id].weight=k}return{tlData:t,defaultTlData:e,sortedIds:a,sortedIdsFiltered:c,loadSiteList:r,setColor:l,setWeight:h,upWeight:d,downWeight:g,resetSiteList:s,invalidSiteList:i}},{persist:!0}),hS={},dS={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},fS=G("g",null,[G("path",{class:"st0",d:`M487.932,243.768L255.999,0L24.076,243.768c-21.787,22.886-20.874,59.088,2.013,80.865
		c22.887,21.787,59.099,20.896,80.886-2.013l91.818-96.506v228.691c0,31.59,25.617,57.195,57.205,57.195
		c31.6,0,57.217-25.606,57.217-57.195V226.114l91.829,96.506c21.777,22.909,57.978,23.8,80.875,2.013
		C508.806,302.855,509.698,266.654,487.932,243.768z`})],-1),pS=[fS];function gS(t,e){return ce(),De("svg",dS,pS)}const mS=Xe(hS,[["render",gS]]),_S=He({__name:"UpArrowButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ce(),Ct(mS,{class:"upArrowButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),yS={},vS={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},wS=G("g",null,[G("path",{class:"st0",d:`M485.919,187.372c-22.905-21.787-59.106-20.893-80.883,2.011l-91.82,96.511V57.202
		C313.217,25.606,287.6,0,255.993,0c-31.585,0-57.202,25.606-57.202,57.202v228.692l-91.819-96.511
		c-21.776-22.904-58-23.798-80.883-2.011c-22.883,21.756-23.797,57.979-2.01,80.862L255.993,512l231.936-243.765
		C509.696,245.352,508.801,209.128,485.919,187.372z`})],-1),ES=[wS];function IS(t,e){return ce(),De("svg",vS,ES)}const TS=Xe(yS,[["render",IS]]),AS=He({__name:"DownArrowButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ce(),Ct(TS,{class:"downArrowButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),bS={class:"buttons"},SS=He({__name:"TlTitleBlock",props:{tlSiteId:{type:String,required:!0}},setup(t){const e=t,n=Ai();function r(){n.upWeight(e.tlSiteId)}function s(){n.downWeight(e.tlSiteId)}const i=me(()=>({"--ttb-bg-color":Ce.green1}));return(a,c)=>(ce(),De("div",{class:"tlTitleBlock",style:wt(i.value)},[G("p",null,at(Oe(n).tlData[e.tlSiteId].weight+1)+" "+at(Oe(n).tlData[e.tlSiteId].name),1),G("div",bS,[Gt(G("input",{type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=l=>Oe(n).tlData[e.tlSiteId].isShow=l)},null,512),[[uv,Oe(n).tlData[e.tlSiteId].isShow]]),Pe(_S,{onClick:r,fill:"white",height:15}),Pe(AS,{onClick:s,fill:"white",height:15})])],4))}});const RS=Xe(SS,[["__scopeId","data-v-c2859ba2"]]),Im=Xo("appState",()=>{const t=vt("0.2"),e=vt(!1),n=vt(!1),r=vt(!1);return{appVersion:t,useSearch:e,useMenu:n,useNews:r}},{persist:!0}),CS=new Date,ga=Xo("searchConditionStore",()=>{const t=vt([]);function e(c,l,h,d){t.value.push({word:c,year:l,month:h,day:d,color:0})}t.value.length==0&&s();function n(c,l){c>=0&&c<t.value.length&&(t.value[c]=l)}function r(c){c>=0&&c<t.value.length&&t.value.splice(c)}function s(){t.value.push({word:"",year:CS.getFullYear(),month:"-",day:"-",color:0})}function i(){t.value.length>1&&t.value.pop()}const a=me(()=>t.value.length);return{searchCondition:t,newCondition:e,setCondition:n,rmCondition:r,pushCondition:s,popCondition:i,size:a}},{persist:!0}),bi=Xo("wsScrapedData",()=>{const t=vt({}),e=vt({}),n=vt({}),r=async(c,l=!1)=>{c in n.value||(n.value[c]=0);const h=Math.floor(Date.now()/1e3);if(!(!l&&h<n.value[c]+60*30)){e.value[c]=!0;try{const d=Mc(xc(jc,c),Lc("epoch","desc"),r1(30)),g=await Fc(d);let m=[];g.forEach(b=>{m.push(b.data())}),t.value[c]=m,e.value[c]=!1,n.value[c]=Math.floor(Date.now()/1e3),console.log("Load DB: ",c)}catch(d){console.error("Error fetching documents: ",d)}}},s=me(()=>{let c=[];for(const l of Object.values(t.value))c=[...c,...l];return c.sort((l,h)=>h.epoch-l.epoch)}),i=me(()=>{let c=!1;for(const l of Object.values(e.value))c=c||l;return c});function a(c){for(const l of Object.keys(t.value))l in c||(delete t.value[l],delete e.value[l],delete n.value[l])}return{scrapedData:t,loadingStatus:e,allLoadingStatus:i,lastLoadTime:n,loadDatabase:r,allArticles:s,rmNoId:a}},{persist:!0}),PS=t=>(di("data-v-be8c4dd6"),t=t(),fi(),t),kS={class:"searchArea"},DS={class:"serchCfgArea"},NS=PS(()=>G("label",{for:"noWindow"},"窓数",-1)),OS=["value"],xS={class:"newsArea"},VS={class:"menuArea"},MS={class:"tlList"},LS={class:"reloadArea"},FS=He({__name:"CfgTabBar",setup(t){const e=Im(),n=Ai(),r=ga(),s=bi(),i=me(()=>e.useSearch?Ce.green1:Ce.gray2),a=me(()=>e.useMenu?Ce.green1:Ce.gray2),c=me(()=>e.useNews?Ce.green1:Ce.gray2),l=me(()=>s.allLoadingStatus?Ce.green1:Ce.gray2),h=vt(0);h.value=r.size;function d(){e.useSearch=!e.useSearch}function g(){if(h.value>r.size){const U=h.value-r.size;for(let M=0;M<U;M++)r.pushCondition()}else if(h.value<r.size){const U=r.size-h.value;for(let M=0;M<U;M++)r.popCondition()}}function m(){e.useNews=!e.useNews}function b(){e.useMenu=!e.useMenu,n.invalidSiteList&&n.resetSiteList()}function P(){window.confirm("データをリセットしますか？")&&n.resetSiteList()}function k(){for(const[U,M]of Object.entries(n.tlData))M.isShow&&(console.log("reload: ",U),s.loadDatabase(U,!0))}const N=me(()=>({"--width":e.useMenu?"280px":"60px"}));return(U,M)=>(ce(),De("div",{class:"cfgTabBar",style:wt(N.value)},[G("div",kS,[Pe(Ep,{width:50,height:50,fill:i.value,onClick:d},null,8,["fill"]),Gt(G("div",DS,[NS,Gt(G("select",{name:"noWindow","onUpdate:modelValue":M[0]||(M[0]=Q=>h.value=Q),onChange:g},[(ce(),De(Ye,null,dn(3,Q=>G("option",{value:Q},at(Q),9,OS)),64))],544),[[co,h.value]])],512),[[bo,Oe(e).useSearch]])]),G("div",xS,[Pe(kw,{width:50,height:50,fill:c.value,onClick:m},null,8,["fill"])]),G("div",VS,[Pe(Tw,{width:50,height:50,fill:a.value,onClick:b},null,8,["fill"]),Gt(G("div",MS,[(ce(!0),De(Ye,null,dn(Oe(n).sortedIds,Q=>(ce(),Ct(RS,{"tl-site-id":Q},null,8,["tl-site-id"]))),256)),G("input",{type:"button",value:"reset",onClick:P})],512),[[bo,Oe(e).useMenu]])]),G("div",LS,[Pe(Lw,{width:50,height:50,fill:l.value,onClick:k},null,8,["fill"])])],4))}});const US=Xe(FS,[["__scopeId","data-v-be8c4dd6"]]),BS=He({__name:"TLTitleBar",props:{tlTitle:{type:String,required:!0},isLoading:{type:Boolean,default:!1},style:{type:Object,default:{"--tl-background-color":Ce.blue1}}},setup(t){const e=t;return(n,r)=>(ce(),De("div",{class:"tlTitleBar",style:wt(t.style)},[G("p",null,at(e.tlTitle),1)],4))}});const Tm=Xe(BS,[["__scopeId","data-v-a547faeb"]]),$S=He({__name:"ItemTitleBar",props:{itemTitle:{type:String,required:!0}},setup(t){const e=me(()=>({"--it-background-color":Ce.gray3}));return(n,r)=>(ce(),De("div",{class:"itemTitleBar",style:wt(e.value)},[G("p",null,at(t.itemTitle),1)],4))}});const jS=Xe($S,[["__scopeId","data-v-393697e8"]]),qS={class:"iStr"},zS=He({__name:"ItemBox",props:{itemString:{type:String,required:!0},isNewer:{type:Boolean,default:!1}},setup(t){const e=t;return me(()=>({"--bg-color":Ce.yellow3})),(n,r)=>(ce(),De("div",{class:ss(t.isNewer?"itemBoxNew":"itemBox")},[G("p",qS,at(e.itemString),1)],2))}});const HS=Xe(zS,[["__scopeId","data-v-69639804"]]),KS={class:"articleItem"},WS=["href"],GS=He({__name:"ArticleItemNoButton",props:{articleDescription:{type:String,required:!0},articleSource:{type:String,required:!0},articleUrl:{type:String,required:!0},articleEpoch:{type:Number,required:!0},tlTitle:{type:String,default:""},showBar:{type:Boolean,default:!1}},setup(t){const e=t,n=me(()=>{const i=new Date(0);return i.setSeconds(e.articleEpoch.valueOf()),i}),r=me(()=>{const i=new Date,a=new Date(0);return a.setSeconds(e.articleEpoch.valueOf()),i.getDate()==a.getDate()&&i.getMonth()==a.getMonth()&&i.getFullYear()==a.getFullYear()}),s=me(()=>({"--bg-color":Ce.yellow3}));return(i,a)=>(ce(),De("div",KS,[e.showBar?(ce(),Ct(jS,{key:0,"item-title":e.articleSource},null,8,["item-title"])):ep("",!0),Pe(HS,{"item-string":e.articleDescription,"is-newer":r.value,style:wt(s.value)},null,8,["item-string","is-newer","style"]),G("div",{class:ss(r.value?"itemFooterNew":"itemFooter"),style:wt(s.value)},[G("a",{href:e.articleUrl},"ページリンク",8,WS),G("p",null,at(n.value.getFullYear())+"年"+at(n.value.getMonth()+1)+"月"+at(n.value.getDate())+"日",1)],6)]))}});const Am=Xe(GS,[["__scopeId","data-v-d494b502"]]),QS=t=>(di("data-v-f6f18b56"),t=t(),fi(),t),YS={class:"tlItemList"},JS={key:0,class:"loadingMsg"},XS=QS(()=>G("div",{class:"tlFooter"},null,-1)),ZS=He({__name:"Timeline",props:{tlSiteId:{type:String,required:!0},tlTitle:{type:String,default:""},showBar:{type:Boolean,default:!1}},setup(t){const e=t,n=Ai(),r=bi(),s=me(()=>e.tlSiteId in n.tlData?n.tlData[e.tlSiteId]:n.defaultTlData),i=me(()=>e.tlTitle==""?s.value.name:e.tlTitle),a=[Ce.blue1,Ce.red1,Ce.yellow1,Ce.green1,Ce.gray1],c=me(()=>e.tlSiteId=="all"?r.allArticles:r.scrapedData[e.tlSiteId]);jf(()=>{e.tlSiteId!="all"&&s.value.isShow?r.loadDatabase(e.tlSiteId):console.log("Not load DB: ",e.tlSiteId)});const l=me(()=>({"--tl-background-color":a[s.value.color%a.length]}));return(h,d)=>(ce(),De("div",{class:"timeline",style:wt(l.value)},[Pe(Tm,{"tl-title":i.value,style:wt(l.value)},null,8,["tl-title","style"]),G("div",YS,[Oe(r).loadingStatus[e.tlSiteId]?(ce(),De("p",JS,"--読み込み中--")):ep("",!0),(ce(!0),De(Ye,null,dn(c.value,g=>(ce(),Ct(Am,{"article-source":g.org,"article-description":g.title,"article-url":g.url,"article-epoch":g.epoch,"tl-title":s.value.name,"show-bar":e.showBar},null,8,["article-source","article-description","article-url","article-epoch","tl-title","show-bar"]))),256))]),XS],4))}});const sf=Xe(ZS,[["__scopeId","data-v-f6f18b56"]]),eR={},tR={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},nR=G("g",null,[G("polygon",{points:"511.998,70.682 441.315,0 256.002,185.313 70.685,0 0.002,70.692 185.316,256.006 0.002,441.318 70.69,512 256.002,326.688 441.315,512 511.998,441.318 326.684,256.006"})],-1),rR=[nR];function sR(t,e){return ce(),De("svg",tR,rR)}const iR=Xe(eR,[["render",sR]]),oR=He({__name:"XButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ce(),Ct(iR,{class:"xButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}}),fs=t=>(di("data-v-013d163b"),t=t(),fi(),t),aR={class:"textArea"},cR=["onKeydown"],lR={class:"dateArea"},uR=fs(()=>G("option",{key:"noSelct"},"-",-1)),hR=fs(()=>G("p",null,"年",-1)),dR=fs(()=>G("option",{key:"noSelct"},"-",-1)),fR=fs(()=>G("p",null,"月",-1)),pR=fs(()=>G("option",{key:"noSelct"},"-",-1)),gR=fs(()=>G("p",null,"日",-1)),mR=He({__name:"SearchForm",props:{styles:{type:Object,default:{"--tl-background-color":Ce.blue1}},scIdx:{type:Number,require:!0}},setup(t){const e=t,n=ga(),r=vt(n.searchCondition[e.scIdx]),s=[2023,2024],i=me(()=>r.value.month=="-"||r.value.year=="-"?0:new Date(r.value.year,r.value.month,0).getDate());function a(){n.setCondition(e.scIdx,r.value)}function c(){r.value.day="-",r.value.month="-"}return(l,h)=>(ce(),De("div",{class:"searchForm",style:wt(e.styles)},[G("div",aR,[Gt(G("input",{ty:"",pe:"search","onUpdate:modelValue":h[0]||(h[0]=d=>r.value.word=d),placeholder:"Enter text",size:"25",onKeydown:dv(a,["enter"])},null,40,cR),[[lv,r.value.word]]),Pe(Ep,{onClick:a,height:12,width:12,"icon-color":"white"})]),G("div",lR,[Gt(G("select",{name:"year",id:"selctMonth","onUpdate:modelValue":h[1]||(h[1]=d=>r.value.year=d)},[uR,(ce(),De(Ye,null,dn(s,d=>G("option",{key:d},at(d),1)),64))],512),[[co,r.value.year]]),hR,Gt(G("select",{name:"month",id:"selctMonth","onUpdate:modelValue":h[2]||(h[2]=d=>r.value.month=d)},[dR,(ce(),De(Ye,null,dn(12,d=>G("option",{key:d},at(d),1)),64))],512),[[co,r.value.month]]),fR,Gt(G("select",{name:"day",id:"selectDay","onUpdate:modelValue":h[3]||(h[3]=d=>r.value.day=d)},[pR,(ce(!0),De(Ye,null,dn(i.value,d=>(ce(),De("option",{key:d},at(d),1))),128))],512),[[co,r.value.day]]),gR,Pe(oR,{onClick:c,height:12,width:12,"icon-color":"white"})])],4))}});const _R=Xe(mR,[["__scopeId","data-v-013d163b"]]),yR=t=>(di("data-v-144026ff"),t=t(),fi(),t),vR={class:"tlItemList"},wR=yR(()=>G("div",{class:"tlFooter"},null,-1)),ER=He({__name:"SearchedTimeline",props:{searchCondIdx:{type:Number,default:0}},setup(t){const e=t,n=ga(),r=bi(),s=me(()=>"検索: "+n.searchCondition[e.searchCondIdx].word),i=me(()=>{let l=r.allArticles;const h=n.searchCondition[e.searchCondIdx];if(l=l.filter(d=>d.title.indexOf(h.word)>=0),h.day!="-"&&h.month!="-"&&h.year!="-"){const d=new Date(h.year,h.month-1,h.day).getTime()/1e3,g=d+60*60*24;l=l.filter(m=>d<=m.epoch&&m.epoch<g)}return l.sort((d,g)=>g.epoch-d.epoch),l}),a=[Ce.blue1,Ce.red1,Ce.yellow1,Ce.green1,Ce.gray1],c=me(()=>({"--tl-background-color":a[3]}));return(l,h)=>(ce(),De("div",{class:"timeline",style:wt(c.value)},[Pe(Tm,{"tl-title":s.value,style:wt(c.value),"is-loading":!1},null,8,["tl-title","style"]),Pe(_R,{style:wt(c.value),"sc-idx":e.searchCondIdx},null,8,["style","sc-idx"]),G("div",vR,[(ce(!0),De(Ye,null,dn(i.value,d=>(ce(),Ct(Am,{"article-source":d.org,"article-description":d.title,"article-url":d.url,"article-epoch":d.epoch,"tl-title":d.org,"show-bar":!0},null,8,["article-source","article-description","article-url","article-epoch","tl-title"]))),256))]),wR],4))}});const IR=Xe(ER,[["__scopeId","data-v-144026ff"]]),TR={class:"sideArea"},AR={class:"newsArea"},bR={class:"searchArea"},SR={class:"tlArea"},RR=He({__name:"WSAppView",setup(t){const e=Im(),n=Ai(),r=bi(),s=ga();let i=new Date;i=new Date(i.getFullYear(),i.getMonth(),i.getDate());const a=me(()=>!e.useSearch);$f(()=>{n.loadSiteList(),r.rmNoId(n.sortedIds)});const c=me(()=>({"--bg-color":Ce.gray2}));return(l,h)=>(ce(),De("div",{class:"wsapp",style:wt(c.value)},[G("div",TR,[G("div",{class:ss({cfgArea:!0,borderClass:a.value})},[Pe(US)],2),Gt(G("div",AR,[Pe(sf,{"tl-site-id":"all","tl-title":"新着情報","last-epoch":Oe(i).getTime()/1e3,"show-bar":!0},null,8,["last-epoch"])],512),[[bo,Oe(e).useNews]]),Gt(G("div",bR,[(ce(!0),De(Ye,null,dn(Oe(s).size,d=>(ce(),Ct(IR,{"search-cond-idx":d.valueOf()-1},null,8,["search-cond-idx"]))),256))],512),[[bo,Oe(e).useSearch]])]),G("div",SR,[(ce(!0),De(Ye,null,dn(Oe(n).sortedIdsFiltered,d=>(ce(),Ct(sf,{"tl-site-id":d},null,8,["tl-site-id"]))),256))])],4))}});const CR=Xe(RR,[["__scopeId","data-v-e55e29a1"]]),PR={class:"sample"},kR=He({__name:"SampleView",setup(t){const e=Ai(),n=bi();return(r,s)=>(ce(),De("div",PR,[G("p",null,at(Oe(e).tlData.micJoho),1),G("p",null,at(Oe(n).allLoadingStatus),1),G("p",null,at(Oe(n).loadingStatus),1)]))}});const DR=Xe(kR,[["__scopeId","data-v-cba2d506"]]),NR=N0({history:Yv("/webscraper_tl/"),routes:[{path:"/",name:"app",component:CR},{path:"/sample",name:"sample",component:DR},{path:"/about",name:"about",component:()=>Wh(()=>import("./AboutView-4715c4dc.js"),["assets/AboutView-4715c4dc.js","assets/AboutView-08887120.css"])},{path:"/contact",name:"contact",component:()=>Wh(()=>import("./ContactView-2182914a.js"),["assets/ContactView-2182914a.js","assets/ContactView-65b7ef47.css"])}]}),Zl=gv($0),bm=yv();bm.use(Pv());Zl.use(bm);Zl.use(NR);Zl.mount("#app");export{Ph as A,Ye as F,G as a,Oe as b,De as c,He as d,ao as e,Ny as f,ce as o,dn as r,at as t,Ai as u};
