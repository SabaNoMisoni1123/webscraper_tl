(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function qc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ue={},kr=[],Ft=()=>{},Jg=()=>!1,Zg=/^on[^a-z]/,Fo=t=>Zg.test(t),Gc=t=>t.startsWith("onUpdate:"),lt=Object.assign,zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},e_=Object.prototype.hasOwnProperty,we=(t,e)=>e_.call(t,e),re=Array.isArray,Dr=t=>di(t)==="[object Map]",ss=t=>di(t)==="[object Set]",Ku=t=>di(t)==="[object Date]",fe=t=>typeof t=="function",Ye=t=>typeof t=="string",$r=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",af=t=>(Ve(t)||fe(t))&&fe(t.then)&&fe(t.catch),cf=Object.prototype.toString,di=t=>cf.call(t),t_=t=>di(t).slice(8,-1),lf=t=>di(t)==="[object Object]",Kc=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,eo=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},n_=/-(\w)/g,Hr=Bo(t=>t.replace(n_,(e,n)=>n?n.toUpperCase():"")),r_=/\B([A-Z])/g,Er=Bo(t=>t.replace(r_,"-$1").toLowerCase()),uf=Bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Na=Bo(t=>t?`on${uf(t)}`:""),dr=(t,e)=>!Object.is(t,e),to=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wu;const Ya=()=>Wu||(Wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Et(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?a_(r):Et(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||Ve(t))return t}const s_=/;(?![^(]*\))/g,i_=/:([^]+)/,o_=/\/\*[^]*?\*\//g;function a_(t){const e={};return t.replace(o_,"").split(s_).forEach(n=>{if(n){const r=n.split(i_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function is(t){let e="";if(Ye(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=is(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const c_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l_=qc(c_);function hf(t){return!!t||t===""}function u_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=fi(t[r],e[r]);return n}function fi(t,e){if(t===e)return!0;let n=Ku(t),r=Ku(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=$r(t),r=$r(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?u_(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!fi(t[a],e[a]))return!1}}return String(t)===String(e)}function Wc(t,e){return t.findIndex(n=>fi(n,e))}const at=t=>Ye(t)?t:t==null?"":re(t)||Ve(t)&&(t.toString===cf||!fe(t.toString))?JSON.stringify(t,df,2):String(t),df=(t,e)=>e&&e.__v_isRef?df(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ss(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!re(e)&&!lf(e)?String(e):e;let Ot;class ff{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pf(t){return new ff(t)}function h_(t,e=Ot){e&&e.active&&e.effects.push(t)}function mf(){return Ot}function d_(t){Ot&&Ot.cleanups.push(t)}const Qc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gf=t=>(t.w&qn)>0,_f=t=>(t.n&qn)>0,f_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qn},p_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];gf(s)&&!_f(s)?s.delete(t):e[n++]=s,s.w&=~qn,s.n&=~qn}e.length=n}},Eo=new WeakMap;let Vs=0,qn=1;const Ja=30;let Lt;const ar=Symbol(""),Za=Symbol("");class Xc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,h_(this,r)}run(){if(!this.active)return this.fn();let e=Lt,n=Ln;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Lt,Lt=this,Ln=!0,qn=1<<++Vs,Vs<=Ja?f_(this):Qu(this),this.fn()}finally{Vs<=Ja&&p_(this),qn=1<<--Vs,Lt=this.parent,Ln=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Lt===this?this.deferStop=!0:this.active&&(Qu(this),this.onStop&&this.onStop(),this.active=!1)}}function Qu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ln=!0;const yf=[];function os(){yf.push(Ln),Ln=!1}function as(){const t=yf.pop();Ln=t===void 0?!0:t}function St(t,e,n){if(Ln&&Lt){let r=Eo.get(t);r||Eo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qc()),vf(s)}}function vf(t,e){let n=!1;Vs<=Ja?_f(t)||(t.n|=qn,n=!gf(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function hn(t,e,n,r,s,i){const a=Eo.get(t);if(!a)return;let c=[];if(e==="clear")c=[...a.values()];else if(n==="length"&&re(t)){const l=Number(r);a.forEach((h,d)=>{(d==="length"||!$r(d)&&d>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(a.get(n)),e){case"add":re(t)?Kc(n)&&c.push(a.get("length")):(c.push(a.get(ar)),Dr(t)&&c.push(a.get(Za)));break;case"delete":re(t)||(c.push(a.get(ar)),Dr(t)&&c.push(a.get(Za)));break;case"set":Dr(t)&&c.push(a.get(ar));break}if(c.length===1)c[0]&&ec(c[0]);else{const l=[];for(const h of c)h&&l.push(...h);ec(Qc(l))}}function ec(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&Xu(r);for(const r of n)r.computed||Xu(r)}function Xu(t,e){(t!==Lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function m_(t,e){var n;return(n=Eo.get(t))==null?void 0:n.get(e)}const g_=qc("__proto__,__v_isRef,__isVue"),Ef=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($r)),Yu=__();function __(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let i=0,a=this.length;i<a;i++)St(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){os();const r=be(this)[e].apply(this,n);return as(),r}}),t}function y_(t){const e=be(this);return St(e,"has",t),e.hasOwnProperty(t)}class If{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?N_:bf:i?Af:wf).get(e))return e;const a=re(e);if(!s){if(a&&we(Yu,n))return Reflect.get(Yu,n,r);if(n==="hasOwnProperty")return y_}const c=Reflect.get(e,n,r);return($r(n)?Ef.has(n):g_(n))||(s||St(e,"get",n),i)?c:He(c)?a&&Kc(n)?c:c.value:Ve(c)?s?Sf(c):pi(c):c}}class Tf extends If{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(qr(i)&&He(i)&&!He(r))return!1;if(!this._shallow&&(!Io(r)&&!qr(r)&&(i=be(i),r=be(r)),!re(e)&&He(i)&&!He(r)))return i.value=r,!0;const a=re(e)&&Kc(n)?Number(n)<e.length:we(e,n),c=Reflect.set(e,n,r,s);return e===be(s)&&(a?dr(r,i)&&hn(e,"set",n,r):hn(e,"add",n,r)),c}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!$r(n)||!Ef.has(n))&&St(e,"has",n),r}ownKeys(e){return St(e,"iterate",re(e)?"length":ar),Reflect.ownKeys(e)}}class v_ extends If{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const E_=new Tf,I_=new v_,T_=new Tf(!0),Yc=t=>t,jo=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(dr(e,i)&&St(s,"get",e),St(s,"get",i));const{has:a}=jo(s),c=r?Yc:n?el:Ys;if(a.call(s,e))return c(t.get(e));if(a.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Hi(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(dr(t,s)&&St(r,"has",t),St(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qi(t,e=!1){return t=t.__v_raw,!e&&St(be(t),"iterate",ar),Reflect.get(t,"size",t)}function Ju(t){t=be(t);const e=be(this);return jo(e).has.call(e,t)||(e.add(t),hn(e,"add",t,t)),this}function Zu(t,e){e=be(e);const n=be(this),{has:r,get:s}=jo(n);let i=r.call(n,t);i||(t=be(t),i=r.call(n,t));const a=s.call(n,t);return n.set(t,e),i?dr(e,a)&&hn(n,"set",t,e):hn(n,"add",t,e),this}function eh(t){const e=be(this),{has:n,get:r}=jo(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&hn(e,"delete",t,void 0),i}function th(){const t=be(this),e=t.size!==0,n=t.clear();return e&&hn(t,"clear",void 0,void 0),n}function Gi(t,e){return function(r,s){const i=this,a=i.__v_raw,c=be(a),l=e?Yc:t?el:Ys;return!t&&St(c,"iterate",ar),a.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function zi(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),a=Dr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),d=n?Yc:e?el:Ys;return!e&&St(i,"iterate",l?Za:ar),{next(){const{value:m,done:g}=h.next();return g?{value:m,done:g}:{value:c?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function w_(){const t={get(i){return $i(this,i)},get size(){return qi(this)},has:Hi,add:Ju,set:Zu,delete:eh,clear:th,forEach:Gi(!1,!1)},e={get(i){return $i(this,i,!1,!0)},get size(){return qi(this)},has:Hi,add:Ju,set:Zu,delete:eh,clear:th,forEach:Gi(!1,!0)},n={get(i){return $i(this,i,!0)},get size(){return qi(this,!0)},has(i){return Hi.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Gi(!0,!1)},r={get(i){return $i(this,i,!0,!0)},get size(){return qi(this,!0)},has(i){return Hi.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zi(i,!1,!1),n[i]=zi(i,!0,!1),e[i]=zi(i,!1,!0),r[i]=zi(i,!0,!0)}),[t,n,e,r]}const[A_,b_,R_,S_]=w_();function Jc(t,e){const n=e?t?S_:R_:t?b_:A_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,i)}const C_={get:Jc(!1,!1)},P_={get:Jc(!1,!0)},O_={get:Jc(!0,!1)},wf=new WeakMap,Af=new WeakMap,bf=new WeakMap,N_=new WeakMap;function k_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function D_(t){return t.__v_skip||!Object.isExtensible(t)?0:k_(t_(t))}function pi(t){return qr(t)?t:Zc(t,!1,E_,C_,wf)}function Rf(t){return Zc(t,!1,T_,P_,Af)}function Sf(t){return Zc(t,!0,I_,O_,bf)}function Zc(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=D_(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Un(t){return qr(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function qr(t){return!!(t&&t.__v_isReadonly)}function Io(t){return!!(t&&t.__v_isShallow)}function Cf(t){return Un(t)||qr(t)}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function $o(t){return yo(t,"__v_skip",!0),t}const Ys=t=>Ve(t)?pi(t):t,el=t=>Ve(t)?Sf(t):t;function Pf(t){Ln&&Lt&&(t=be(t),vf(t.dep||(t.dep=Qc())))}function Of(t,e){t=be(t);const n=t.dep;n&&ec(n)}function He(t){return!!(t&&t.__v_isRef===!0)}function vt(t){return Nf(t,!1)}function x_(t){return Nf(t,!0)}function Nf(t,e){return He(t)?t:new V_(t,e)}class V_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:Ys(e)}get value(){return Pf(this),this._value}set value(e){const n=this.__v_isShallow||Io(e)||qr(e);e=n?e:be(e),dr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ys(e),Of(this))}}function De(t){return He(t)?t.value:t}const M_={get:(t,e,n)=>De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kf(t){return Un(t)?t:new Proxy(t,M_)}function L_(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=F_(t,n);return e}class U_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return m_(be(this._object),this._key)}}function F_(t,e,n){const r=t[e];return He(r)?r:new U_(t,e,n)}class B_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xc(e,()=>{this._dirty||(this._dirty=!0,Of(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=be(this);return Pf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function j_(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=Ft):(r=t.get,s=t.set),new B_(r,s,i||!s,n)}function Fn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ho(i,e,n)}return s}function Bt(t,e,n,r){if(fe(t)){const i=Fn(t,e,n,r);return i&&af(i)&&i.catch(a=>{Ho(a,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}function Ho(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,c=n;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,a,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Fn(l,null,10,[t,a,c]);return}}$_(t,n,s,r)}function $_(t,e,n,r=!0){console.error(t)}let Js=!1,tc=!1;const _t=[];let zt=0;const xr=[];let on=null,rr=0;const Df=Promise.resolve();let tl=null;function nl(t){const e=tl||Df;return t?e.then(this?t.bind(this):t):e}function H_(t){let e=zt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Zs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function rl(t){(!_t.length||!_t.includes(t,Js&&t.allowRecurse?zt+1:zt))&&(t.id==null?_t.push(t):_t.splice(H_(t.id),0,t),xf())}function xf(){!Js&&!tc&&(tc=!0,tl=Df.then(Mf))}function q_(t){const e=_t.indexOf(t);e>zt&&_t.splice(e,1)}function G_(t){re(t)?xr.push(...t):(!on||!on.includes(t,t.allowRecurse?rr+1:rr))&&xr.push(t),xf()}function nh(t,e=Js?zt+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function Vf(t){if(xr.length){const e=[...new Set(xr)];if(xr.length=0,on){on.push(...e);return}for(on=e,on.sort((n,r)=>Zs(n)-Zs(r)),rr=0;rr<on.length;rr++)on[rr]();on=null,rr=0}}const Zs=t=>t.id==null?1/0:t.id,z_=(t,e)=>{const n=Zs(t)-Zs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Mf(t){tc=!1,Js=!0,_t.sort(z_);const e=Ft;try{for(zt=0;zt<_t.length;zt++){const n=_t[zt];n&&n.active!==!1&&Fn(n,null,14)}}finally{zt=0,_t.length=0,Vf(),Js=!1,tl=null,(_t.length||xr.length)&&Mf()}}function K_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),a=i&&e.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:g}=r[d]||Ue;g&&(s=n.map(I=>Ye(I)?I.trim():I)),m&&(s=n.map(vo))}let c,l=r[c=Na(e)]||r[c=Na(Hr(e))];!l&&i&&(l=r[c=Na(Er(e))]),l&&Bt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Bt(h,t,6,s)}}function Lf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!fe(t)){const l=h=>{const d=Lf(h,e,!0);d&&(c=!0,lt(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):lt(a,i),Ve(t)&&r.set(t,a),a)}function qo(t,e){return!t||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Er(e))||we(t,e))}let Dt=null,Go=null;function To(t){const e=Dt;return Dt=t,Go=t&&t.type.__scopeId||null,e}function cs(t){Go=t}function ls(){Go=null}function no(t,e=Dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&dh(-1);const i=To(e);let a;try{a=t(...s)}finally{To(i),r._d&&dh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ka(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[a],slots:c,attrs:l,emit:h,render:d,renderCache:m,data:g,setupState:I,ctx:P,inheritAttrs:N}=t;let k,F;const q=To(t);try{if(n.shapeFlag&4){const z=s||r,he=z;k=Gt(d.call(he,z,m,i,I,g,P)),F=l}else{const z=e;k=Gt(z.length>1?z(i,{attrs:l,slots:c,emit:h}):z(i,null)),F=e.props?l:W_(l)}}catch(z){$s.length=0,Ho(z,t,1),k=Pe(fr)}let Z=k;if(F&&N!==!1){const z=Object.keys(F),{shapeFlag:he}=Z;z.length&&he&7&&(a&&z.some(Gc)&&(F=Q_(F,a)),Z=Gr(Z,F))}return n.dirs&&(Z=Gr(Z),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&(Z.transition=n.transition),k=Z,To(q),k}const W_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fo(n))&&((e||(e={}))[n]=t[n]);return e},Q_=(t,e)=>{const n={};for(const r in t)(!Gc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function X_(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?rh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(a[g]!==r[g]&&!qo(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?rh(r,a,h):!0:!!a;return!1}function rh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!qo(n,i))return!0}return!1}function Y_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const J_=Symbol.for("v-ndc"),Z_=t=>t.__isSuspense;function ey(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):G_(t)}const Ki={};function Bs(t,e,n){return Uf(t,e,n)}function Uf(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:a}=Ue){var c;const l=mf()===((c=ot)==null?void 0:c.scope)?ot:null;let h,d=!1,m=!1;if(He(t)?(h=()=>t.value,d=Io(t)):Un(t)?(h=()=>t,r=!0):re(t)?(m=!0,d=t.some(z=>Un(z)||Io(z)),h=()=>t.map(z=>{if(He(z))return z.value;if(Un(z))return ir(z);if(fe(z))return Fn(z,l,2)})):fe(t)?e?h=()=>Fn(t,l,2):h=()=>{if(!(l&&l.isUnmounted))return g&&g(),Bt(t,l,3,[I])}:h=Ft,e&&r){const z=h;h=()=>ir(z())}let g,I=z=>{g=q.onStop=()=>{Fn(z,l,4),g=q.onStop=void 0}},P;if(ni)if(I=Ft,e?n&&Bt(e,l,3,[h(),m?[]:void 0,I]):h(),s==="sync"){const z=Gy();P=z.__watcherHandles||(z.__watcherHandles=[])}else return Ft;let N=m?new Array(t.length).fill(Ki):Ki;const k=()=>{if(q.active)if(e){const z=q.run();(r||d||(m?z.some((he,ge)=>dr(he,N[ge])):dr(z,N)))&&(g&&g(),Bt(e,l,3,[z,N===Ki?void 0:m&&N[0]===Ki?[]:N,I]),N=z)}else q.run()};k.allowRecurse=!!e;let F;s==="sync"?F=k:s==="post"?F=()=>Rt(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),F=()=>rl(k));const q=new Xc(h,F);e?n?k():N=q.run():s==="post"?Rt(q.run.bind(q),l&&l.suspense):q.run();const Z=()=>{q.stop(),l&&l.scope&&zc(l.scope.effects,q)};return P&&P.push(Z),Z}function ty(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?Ff(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const a=ot;zr(this);const c=Uf(s,i.bind(r),n);return a?zr(a):cr(),c}function Ff(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ir(t,e){if(!Ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))ir(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(ss(t)||Dr(t))t.forEach(n=>{ir(n,e)});else if(lf(t))for(const n in t)ir(t[n],e);return t}function Wt(t,e){const n=Dt;if(n===null)return t;const r=Qo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[a,c,l,h=Ue]=e[i];a&&(fe(a)&&(a={mounted:a,updated:a}),a.deep&&ir(c),s.push({dir:a,instance:r,value:c,oldValue:void 0,arg:l,modifiers:h}))}return t}function er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(os(),Bt(l,n,8,[t.el,c,t,e]),as())}}/*! #__NO_SIDE_EFFECTS__ */function Qe(t,e){return fe(t)?(()=>lt({name:t.name},e,{setup:t}))():t}const ro=t=>!!t.type.__asyncLoader,Bf=t=>t.type.__isKeepAlive;function ny(t,e){jf(t,"a",e)}function ry(t,e){jf(t,"da",e)}function jf(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bf(s.parent.vnode)&&sy(r,e,n,s),s=s.parent}}function sy(t,e,n,r){const s=zo(e,t,r,!0);qf(()=>{zc(r[e],s)},n)}function zo(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;os(),zr(n);const c=Bt(e,n,t,a);return cr(),as(),c});return r?s.unshift(i):s.push(i),i}}const _n=t=>(e,n=ot)=>(!ni||t==="sp")&&zo(t,(...r)=>e(...r),n),$f=_n("bm"),Hf=_n("m"),iy=_n("bu"),oy=_n("u"),ay=_n("bum"),qf=_n("um"),cy=_n("sp"),ly=_n("rtg"),uy=_n("rtc");function hy(t,e=ot){zo("ec",t,e)}function dn(t,e,n,r){let s;const i=n&&n[r];if(re(t)||Ye(t)){s=new Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=e(t[a],a,void 0,i&&i[a])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i&&i[a])}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i&&i[c]));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const h=a[c];s[c]=e(t[h],h,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const nc=t=>t?tp(t)?Qo(t)||t.proxy:nc(t.parent):null,js=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$emit:t=>t.emit,$options:t=>sl(t),$forceUpdate:t=>t.f||(t.f=()=>rl(t.update)),$nextTick:t=>t.n||(t.n=nl.bind(t.proxy)),$watch:t=>ty.bind(t)}),Da=(t,e)=>t!==Ue&&!t.__isScriptSetup&&we(t,e),dy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const I=a[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Da(r,e))return a[e]=1,r[e];if(s!==Ue&&we(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&we(h,e))return a[e]=3,i[e];if(n!==Ue&&we(n,e))return a[e]=4,n[e];rc&&(a[e]=0)}}const d=js[e];let m,g;if(d)return e==="$attrs"&&St(t,"get",e),d(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==Ue&&we(n,e))return a[e]=4,n[e];if(g=l.config.globalProperties,we(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Da(s,e)?(s[e]=n,!0):r!==Ue&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==Ue&&we(t,a)||Da(e,a)||(c=i[0])&&we(c,a)||we(r,a)||we(js,a)||we(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sh(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rc=!0;function fy(t){const e=sl(t),n=t.proxy,r=t.ctx;rc=!1,e.beforeCreate&&ih(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:m,mounted:g,beforeUpdate:I,updated:P,activated:N,deactivated:k,beforeDestroy:F,beforeUnmount:q,destroyed:Z,unmounted:z,render:he,renderTracked:ge,renderTriggered:A,errorCaptured:_,serverPrefetch:y,expose:w,inheritAttrs:b,components:R,directives:E,filters:rt}=e;if(h&&py(h,r,null),a)for(const Te in a){const _e=a[Te];fe(_e)&&(r[Te]=_e.bind(n))}if(s){const Te=s.call(n,n);Ve(Te)&&(t.data=pi(Te))}if(rc=!0,i)for(const Te in i){const _e=i[Te],Ct=fe(_e)?_e.bind(n,n):fe(_e.get)?_e.get.bind(n,n):Ft,xt=!fe(_e)&&fe(_e.set)?_e.set.bind(n):Ft,kt=me({get:Ct,set:xt});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Fe=>kt.value=Fe})}if(c)for(const Te in c)Gf(c[Te],r,n,Te);if(l){const Te=fe(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(_e=>{so(_e,Te[_e])})}d&&ih(d,t,"c");function Ie(Te,_e){re(_e)?_e.forEach(Ct=>Te(Ct.bind(n))):_e&&Te(_e.bind(n))}if(Ie($f,m),Ie(Hf,g),Ie(iy,I),Ie(oy,P),Ie(ny,N),Ie(ry,k),Ie(hy,_),Ie(uy,ge),Ie(ly,A),Ie(ay,q),Ie(qf,z),Ie(cy,y),re(w))if(w.length){const Te=t.exposed||(t.exposed={});w.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>n[_e],set:Ct=>n[_e]=Ct})})}else t.exposed||(t.exposed={});he&&t.render===Ft&&(t.render=he),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),E&&(t.directives=E)}function py(t,e,n=Ft){re(t)&&(t=sc(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Qt(s.from||r,s.default,!0):i=Qt(s.from||r):i=Qt(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ih(t,e,n){Bt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gf(t,e,n,r){const s=r.includes(".")?Ff(n,r):()=>n[r];if(Ye(t)){const i=e[t];fe(i)&&Bs(s,i)}else if(fe(t))Bs(s,t.bind(n));else if(Ve(t))if(re(t))t.forEach(i=>Gf(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Bs(s,i,t)}}function sl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>wo(l,h,a,!0)),wo(l,e,a)),Ve(e)&&i.set(e,l),l}function wo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wo(t,i,n,!0),s&&s.forEach(a=>wo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=my[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const my={data:oh,props:ah,emits:ah,methods:Ms,computed:Ms,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Ms,directives:Ms,watch:_y,provide:oh,inject:gy};function oh(t,e){return e?t?function(){return lt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function gy(t,e){return Ms(sc(t),sc(e))}function sc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ms(t,e){return t?lt(Object.create(null),t,e):e}function ah(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:lt(Object.create(null),sh(t),sh(e??{})):e}function _y(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function zf(){return{app:null,config:{isNativeTag:Jg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yy=0;function vy(t,e){return function(r,s=null){fe(r)||(r=lt({},r)),s!=null&&!Ve(s)&&(s=null);const i=zf(),a=new WeakSet;let c=!1;const l=i.app={_uid:yy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zy,get config(){return i.config},set config(h){},use(h,...d){return a.has(h)||(h&&fe(h.install)?(a.add(h),h.install(l,...d)):fe(h)&&(a.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,m){if(!c){const g=Pe(r,s);return g.appContext=i,d&&e?e(g,h):t(g,h,m),c=!0,l._container=h,h.__vue_app__=l,Qo(g.component)||g.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){ei=l;try{return h()}finally{ei=null}}};return l}}let ei=null;function so(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Qt(t,e,n=!1){const r=ot||Dt;if(r||ei){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ei._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function Ey(){return!!(ot||Dt||ei)}function Iy(t,e,n,r=!1){const s={},i={};yo(i,Wo,1),t.propsDefaults=Object.create(null),Kf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Rf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ty(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=be(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(qo(t.emitsOptions,g))continue;const I=e[g];if(l)if(we(i,g))I!==i[g]&&(i[g]=I,h=!0);else{const P=Hr(g);s[P]=ic(l,c,P,I,t,!1)}else I!==i[g]&&(i[g]=I,h=!0)}}}else{Kf(t,e,s,i)&&(h=!0);let d;for(const m in c)(!e||!we(e,m)&&((d=Er(m))===m||!we(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=ic(l,c,m,void 0,t,!0)):delete s[m]);if(i!==c)for(const m in i)(!e||!we(e,m))&&(delete i[m],h=!0)}h&&hn(t,"set","$attrs")}function Kf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(eo(l))continue;const h=e[l];let d;s&&we(s,d=Hr(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:qo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=be(n),h=c||Ue;for(let d=0;d<i.length;d++){const m=i[d];n[m]=ic(s,l,m,h[m],t,!we(h,m))}}return a}function ic(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=we(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&fe(l)){const{propsDefaults:h}=s;n in h?r=h[n]:(zr(s),r=h[n]=l.call(null,e),cr())}else r=l}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Er(n))&&(r=!0))}return r}function Wf(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!fe(t)){const d=m=>{l=!0;const[g,I]=Wf(m,e,!0);lt(a,g),I&&c.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ve(t)&&r.set(t,kr),kr;if(re(i))for(let d=0;d<i.length;d++){const m=Hr(i[d]);ch(m)&&(a[m]=Ue)}else if(i)for(const d in i){const m=Hr(d);if(ch(m)){const g=i[d],I=a[m]=re(g)||fe(g)?{type:g}:lt({},g);if(I){const P=hh(Boolean,I.type),N=hh(String,I.type);I[0]=P>-1,I[1]=N<0||P<N,(P>-1||we(I,"default"))&&c.push(m)}}}const h=[a,c];return Ve(t)&&r.set(t,h),h}function ch(t){return t[0]!=="$"}function lh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uh(t,e){return lh(t)===lh(e)}function hh(t,e){return re(e)?e.findIndex(n=>uh(n,t)):fe(e)&&uh(e,t)?0:-1}const Qf=t=>t[0]==="_"||t==="$stable",il=t=>re(t)?t.map(Gt):[Gt(t)],wy=(t,e,n)=>{if(e._n)return e;const r=no((...s)=>il(e(...s)),n);return r._c=!1,r},Xf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Qf(s))continue;const i=t[s];if(fe(i))e[s]=wy(s,i,r);else if(i!=null){const a=il(i);e[s]=()=>a}}},Yf=(t,e)=>{const n=il(e);t.slots.default=()=>n},Ay=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=be(e),yo(e,"_",n)):Xf(e,t.slots={})}else t.slots={},e&&Yf(t,e);yo(t.slots,Wo,1)},by=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ue;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(lt(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Xf(e,s)),a=e}else e&&(Yf(t,e),a={default:1});if(i)for(const c in s)!Qf(c)&&a[c]==null&&delete s[c]};function oc(t,e,n,r,s=!1){if(re(t)){t.forEach((g,I)=>oc(g,e&&(re(e)?e[I]:e),n,r,s));return}if(ro(r)&&!s)return;const i=r.shapeFlag&4?Qo(r.component)||r.component.proxy:r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ue?c.refs={}:c.refs,m=c.setupState;if(h!=null&&h!==l&&(Ye(h)?(d[h]=null,we(m,h)&&(m[h]=null)):He(h)&&(h.value=null)),fe(l))Fn(l,c,12,[a,d]);else{const g=Ye(l),I=He(l);if(g||I){const P=()=>{if(t.f){const N=g?we(m,l)?m[l]:d[l]:l.value;s?re(N)&&zc(N,i):re(N)?N.includes(i)||N.push(i):g?(d[l]=[i],we(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=a,we(m,l)&&(m[l]=a)):I&&(l.value=a,t.k&&(d[t.k]=a))};a?(P.id=-1,Rt(P,n)):P()}}}const Rt=ey;function Ry(t){return Sy(t)}function Sy(t,e){const n=Ya();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:m,nextSibling:g,setScopeId:I=Ft,insertStaticContent:P}=t,N=(v,T,C,D=null,V=null,M=null,K=!1,j=null,H=!!T.dynamicChildren)=>{if(v===T)return;v&&!Ns(v,T)&&(D=x(v),Fe(v,V,M,!0),v=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:L,ref:ne,shapeFlag:X}=T;switch(L){case Ko:k(v,T,C,D);break;case fr:F(v,T,C,D);break;case io:v==null&&q(T,C,D,K);break;case Xe:R(v,T,C,D,V,M,K,j,H);break;default:X&1?he(v,T,C,D,V,M,K,j,H):X&6?E(v,T,C,D,V,M,K,j,H):(X&64||X&128)&&L.process(v,T,C,D,V,M,K,j,H,G)}ne!=null&&V&&oc(ne,v&&v.ref,M,T||v,!T)},k=(v,T,C,D)=>{if(v==null)r(T.el=c(T.children),C,D);else{const V=T.el=v.el;T.children!==v.children&&h(V,T.children)}},F=(v,T,C,D)=>{v==null?r(T.el=l(T.children||""),C,D):T.el=v.el},q=(v,T,C,D)=>{[v.el,v.anchor]=P(v.children,T,C,D,v.el,v.anchor)},Z=({el:v,anchor:T},C,D)=>{let V;for(;v&&v!==T;)V=g(v),r(v,C,D),v=V;r(T,C,D)},z=({el:v,anchor:T})=>{let C;for(;v&&v!==T;)C=g(v),s(v),v=C;s(T)},he=(v,T,C,D,V,M,K,j,H)=>{K=K||T.type==="svg",v==null?ge(T,C,D,V,M,K,j,H):y(v,T,V,M,K,j,H)},ge=(v,T,C,D,V,M,K,j)=>{let H,L;const{type:ne,props:X,shapeFlag:te,transition:ie,dirs:pe}=v;if(H=v.el=a(v.type,M,X&&X.is,X),te&8?d(H,v.children):te&16&&_(v.children,H,null,D,V,M&&ne!=="foreignObject",K,j),pe&&er(v,null,D,"created"),A(H,v,v.scopeId,K,D),X){for(const ae in X)ae!=="value"&&!eo(ae)&&i(H,ae,null,X[ae],M,v.children,D,V,Ze);"value"in X&&i(H,"value",null,X.value),(L=X.onVnodeBeforeMount)&&qt(L,D,v)}pe&&er(v,null,D,"beforeMount");const ce=Cy(V,ie);ce&&ie.beforeEnter(H),r(H,T,C),((L=X&&X.onVnodeMounted)||ce||pe)&&Rt(()=>{L&&qt(L,D,v),ce&&ie.enter(H),pe&&er(v,null,D,"mounted")},V)},A=(v,T,C,D,V)=>{if(C&&I(v,C),D)for(let M=0;M<D.length;M++)I(v,D[M]);if(V){let M=V.subTree;if(T===M){const K=V.vnode;A(v,K,K.scopeId,K.slotScopeIds,V.parent)}}},_=(v,T,C,D,V,M,K,j,H=0)=>{for(let L=H;L<v.length;L++){const ne=v[L]=j?Cn(v[L]):Gt(v[L]);N(null,ne,T,C,D,V,M,K,j)}},y=(v,T,C,D,V,M,K)=>{const j=T.el=v.el;let{patchFlag:H,dynamicChildren:L,dirs:ne}=T;H|=v.patchFlag&16;const X=v.props||Ue,te=T.props||Ue;let ie;C&&tr(C,!1),(ie=te.onVnodeBeforeUpdate)&&qt(ie,C,T,v),ne&&er(T,v,C,"beforeUpdate"),C&&tr(C,!0);const pe=V&&T.type!=="foreignObject";if(L?w(v.dynamicChildren,L,j,C,D,pe,M):K||_e(v,T,j,null,C,D,pe,M,!1),H>0){if(H&16)b(j,T,X,te,C,D,V);else if(H&2&&X.class!==te.class&&i(j,"class",null,te.class,V),H&4&&i(j,"style",X.style,te.style,V),H&8){const ce=T.dynamicProps;for(let ae=0;ae<ce.length;ae++){const Me=ce[ae],At=X[Me],tn=te[Me];(tn!==At||Me==="value")&&i(j,Me,At,tn,V,v.children,C,D,Ze)}}H&1&&v.children!==T.children&&d(j,T.children)}else!K&&L==null&&b(j,T,X,te,C,D,V);((ie=te.onVnodeUpdated)||ne)&&Rt(()=>{ie&&qt(ie,C,T,v),ne&&er(T,v,C,"updated")},D)},w=(v,T,C,D,V,M,K)=>{for(let j=0;j<T.length;j++){const H=v[j],L=T[j],ne=H.el&&(H.type===Xe||!Ns(H,L)||H.shapeFlag&70)?m(H.el):C;N(H,L,ne,null,D,V,M,K,!0)}},b=(v,T,C,D,V,M,K)=>{if(C!==D){if(C!==Ue)for(const j in C)!eo(j)&&!(j in D)&&i(v,j,C[j],null,K,T.children,V,M,Ze);for(const j in D){if(eo(j))continue;const H=D[j],L=C[j];H!==L&&j!=="value"&&i(v,j,L,H,K,T.children,V,M,Ze)}"value"in D&&i(v,"value",C.value,D.value)}},R=(v,T,C,D,V,M,K,j,H)=>{const L=T.el=v?v.el:c(""),ne=T.anchor=v?v.anchor:c("");let{patchFlag:X,dynamicChildren:te,slotScopeIds:ie}=T;ie&&(j=j?j.concat(ie):ie),v==null?(r(L,C,D),r(ne,C,D),_(T.children,C,ne,V,M,K,j,H)):X>0&&X&64&&te&&v.dynamicChildren?(w(v.dynamicChildren,te,C,V,M,K,j),(T.key!=null||V&&T===V.subTree)&&Jf(v,T,!0)):_e(v,T,C,ne,V,M,K,j,H)},E=(v,T,C,D,V,M,K,j,H)=>{T.slotScopeIds=j,v==null?T.shapeFlag&512?V.ctx.activate(T,C,D,K,H):rt(T,C,D,V,M,K,H):Je(v,T,H)},rt=(v,T,C,D,V,M,K)=>{const j=v.component=Uy(v,D,V);if(Bf(v)&&(j.ctx.renderer=G),Fy(j),j.asyncDep){if(V&&V.registerDep(j,Ie),!v.el){const H=j.subTree=Pe(fr);F(null,H,T,C)}return}Ie(j,v,T,C,V,M,K)},Je=(v,T,C)=>{const D=T.component=v.component;if(X_(v,T,C))if(D.asyncDep&&!D.asyncResolved){Te(D,T,C);return}else D.next=T,q_(D.update),D.update();else T.el=v.el,D.vnode=T},Ie=(v,T,C,D,V,M,K)=>{const j=()=>{if(v.isMounted){let{next:ne,bu:X,u:te,parent:ie,vnode:pe}=v,ce=ne,ae;tr(v,!1),ne?(ne.el=pe.el,Te(v,ne,K)):ne=pe,X&&to(X),(ae=ne.props&&ne.props.onVnodeBeforeUpdate)&&qt(ae,ie,ne,pe),tr(v,!0);const Me=ka(v),At=v.subTree;v.subTree=Me,N(At,Me,m(At.el),x(At),v,V,M),ne.el=Me.el,ce===null&&Y_(v,Me.el),te&&Rt(te,V),(ae=ne.props&&ne.props.onVnodeUpdated)&&Rt(()=>qt(ae,ie,ne,pe),V)}else{let ne;const{el:X,props:te}=T,{bm:ie,m:pe,parent:ce}=v,ae=ro(T);if(tr(v,!1),ie&&to(ie),!ae&&(ne=te&&te.onVnodeBeforeMount)&&qt(ne,ce,T),tr(v,!0),X&&ye){const Me=()=>{v.subTree=ka(v),ye(X,v.subTree,v,V,null)};ae?T.type.__asyncLoader().then(()=>!v.isUnmounted&&Me()):Me()}else{const Me=v.subTree=ka(v);N(null,Me,C,D,v,V,M),T.el=Me.el}if(pe&&Rt(pe,V),!ae&&(ne=te&&te.onVnodeMounted)){const Me=T;Rt(()=>qt(ne,ce,Me),V)}(T.shapeFlag&256||ce&&ro(ce.vnode)&&ce.vnode.shapeFlag&256)&&v.a&&Rt(v.a,V),v.isMounted=!0,T=C=D=null}},H=v.effect=new Xc(j,()=>rl(L),v.scope),L=v.update=()=>H.run();L.id=v.uid,tr(v,!0),L()},Te=(v,T,C)=>{T.component=v;const D=v.vnode.props;v.vnode=T,v.next=null,Ty(v,T.props,D,C),by(v,T.children,C),os(),nh(),as()},_e=(v,T,C,D,V,M,K,j,H=!1)=>{const L=v&&v.children,ne=v?v.shapeFlag:0,X=T.children,{patchFlag:te,shapeFlag:ie}=T;if(te>0){if(te&128){xt(L,X,C,D,V,M,K,j,H);return}else if(te&256){Ct(L,X,C,D,V,M,K,j,H);return}}ie&8?(ne&16&&Ze(L,V,M),X!==L&&d(C,X)):ne&16?ie&16?xt(L,X,C,D,V,M,K,j,H):Ze(L,V,M,!0):(ne&8&&d(C,""),ie&16&&_(X,C,D,V,M,K,j,H))},Ct=(v,T,C,D,V,M,K,j,H)=>{v=v||kr,T=T||kr;const L=v.length,ne=T.length,X=Math.min(L,ne);let te;for(te=0;te<X;te++){const ie=T[te]=H?Cn(T[te]):Gt(T[te]);N(v[te],ie,C,null,V,M,K,j,H)}L>ne?Ze(v,V,M,!0,!1,X):_(T,C,D,V,M,K,j,H,X)},xt=(v,T,C,D,V,M,K,j,H)=>{let L=0;const ne=T.length;let X=v.length-1,te=ne-1;for(;L<=X&&L<=te;){const ie=v[L],pe=T[L]=H?Cn(T[L]):Gt(T[L]);if(Ns(ie,pe))N(ie,pe,C,null,V,M,K,j,H);else break;L++}for(;L<=X&&L<=te;){const ie=v[X],pe=T[te]=H?Cn(T[te]):Gt(T[te]);if(Ns(ie,pe))N(ie,pe,C,null,V,M,K,j,H);else break;X--,te--}if(L>X){if(L<=te){const ie=te+1,pe=ie<ne?T[ie].el:D;for(;L<=te;)N(null,T[L]=H?Cn(T[L]):Gt(T[L]),C,pe,V,M,K,j,H),L++}}else if(L>te)for(;L<=X;)Fe(v[L],V,M,!0),L++;else{const ie=L,pe=L,ce=new Map;for(L=pe;L<=te;L++){const ht=T[L]=H?Cn(T[L]):Gt(T[L]);ht.key!=null&&ce.set(ht.key,L)}let ae,Me=0;const At=te-pe+1;let tn=!1,Ri=0;const Vt=new Array(At);for(L=0;L<At;L++)Vt[L]=0;for(L=ie;L<=X;L++){const ht=v[L];if(Me>=At){Fe(ht,V,M,!0);continue}let bt;if(ht.key!=null)bt=ce.get(ht.key);else for(ae=pe;ae<=te;ae++)if(Vt[ae-pe]===0&&Ns(ht,T[ae])){bt=ae;break}bt===void 0?Fe(ht,V,M,!0):(Vt[bt-pe]=L+1,bt>=Ri?Ri=bt:tn=!0,N(ht,T[bt],C,null,V,M,K,j,H),Me++)}const _s=tn?Py(Vt):kr;for(ae=_s.length-1,L=At-1;L>=0;L--){const ht=pe+L,bt=T[ht],Si=ht+1<ne?T[ht+1].el:D;Vt[L]===0?N(null,bt,C,Si,V,M,K,j,H):tn&&(ae<0||L!==_s[ae]?kt(bt,C,Si,2):ae--)}}},kt=(v,T,C,D,V=null)=>{const{el:M,type:K,transition:j,children:H,shapeFlag:L}=v;if(L&6){kt(v.component.subTree,T,C,D);return}if(L&128){v.suspense.move(T,C,D);return}if(L&64){K.move(v,T,C,G);return}if(K===Xe){r(M,T,C);for(let X=0;X<H.length;X++)kt(H[X],T,C,D);r(v.anchor,T,C);return}if(K===io){Z(v,T,C);return}if(D!==2&&L&1&&j)if(D===0)j.beforeEnter(M),r(M,T,C),Rt(()=>j.enter(M),V);else{const{leave:X,delayLeave:te,afterLeave:ie}=j,pe=()=>r(M,T,C),ce=()=>{X(M,()=>{pe(),ie&&ie()})};te?te(M,pe,ce):ce()}else r(M,T,C)},Fe=(v,T,C,D=!1,V=!1)=>{const{type:M,props:K,ref:j,children:H,dynamicChildren:L,shapeFlag:ne,patchFlag:X,dirs:te}=v;if(j!=null&&oc(j,null,C,v,!0),ne&256){T.ctx.deactivate(v);return}const ie=ne&1&&te,pe=!ro(v);let ce;if(pe&&(ce=K&&K.onVnodeBeforeUnmount)&&qt(ce,T,v),ne&6)Ht(v.component,C,D);else{if(ne&128){v.suspense.unmount(C,D);return}ie&&er(v,null,T,"beforeUnmount"),ne&64?v.type.remove(v,T,C,V,G,D):L&&(M!==Xe||X>0&&X&64)?Ze(L,T,C,!1,!0):(M===Xe&&X&384||!V&&ne&16)&&Ze(H,T,C),D&&Be(v)}(pe&&(ce=K&&K.onVnodeUnmounted)||ie)&&Rt(()=>{ce&&qt(ce,T,v),ie&&er(v,null,T,"unmounted")},C)},Be=v=>{const{type:T,el:C,anchor:D,transition:V}=v;if(T===Xe){En(C,D);return}if(T===io){z(v);return}const M=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(v.shapeFlag&1&&V&&!V.persisted){const{leave:K,delayLeave:j}=V,H=()=>K(C,M);j?j(v.el,M,H):H()}else M()},En=(v,T)=>{let C;for(;v!==T;)C=g(v),s(v),v=C;s(T)},Ht=(v,T,C)=>{const{bum:D,scope:V,update:M,subTree:K,um:j}=v;D&&to(D),V.stop(),M&&(M.active=!1,Fe(K,v,T,C)),j&&Rt(j,T),Rt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Ze=(v,T,C,D=!1,V=!1,M=0)=>{for(let K=M;K<v.length;K++)Fe(v[K],T,C,D,V)},x=v=>v.shapeFlag&6?x(v.component.subTree):v.shapeFlag&128?v.suspense.next():g(v.anchor||v.el),W=(v,T,C)=>{v==null?T._vnode&&Fe(T._vnode,null,null,!0):N(T._vnode||null,v,T,null,null,null,C),nh(),Vf(),T._vnode=v},G={p:N,um:Fe,m:kt,r:Be,mt:rt,mc:_,pc:_e,pbc:w,n:x,o:t};let ee,ye;return e&&([ee,ye]=e(G)),{render:W,hydrate:ee,createApp:vy(W,ee)}}function tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jf(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Cn(s[i]),c.el=a.el),n||Jf(a,c)),c.type===Ko&&(c.el=a.el)}}function Py(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}const Oy=t=>t.__isTeleport,Xe=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),io=Symbol.for("v-stc"),$s=[];let Ut=null;function ue(t=!1){$s.push(Ut=t?null:[])}function Ny(){$s.pop(),Ut=$s[$s.length-1]||null}let ti=1;function dh(t){ti+=t}function Zf(t){return t.dynamicChildren=ti>0?Ut||kr:null,Ny(),ti>0&&Ut&&Ut.push(t),t}function Ne(t,e,n,r,s,i){return Zf(Q(t,e,n,r,s,i,!0))}function Nt(t,e,n,r,s){return Zf(Pe(t,e,n,r,s,!0))}function ac(t){return t?t.__v_isVNode===!0:!1}function Ns(t,e){return t.type===e.type&&t.key===e.key}const Wo="__vInternal",ep=({key:t})=>t??null,oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||He(t)||fe(t)?{i:Dt,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ep(e),ref:e&&oo(e),scopeId:Go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return c?(al(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ye(n)?8:16),ti>0&&!a&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const Pe=ky;function ky(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===J_)&&(t=fr),ac(t)){const c=Gr(t,e,!0);return n&&al(c,n),ti>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag|=-2,c}if(Hy(t)&&(t=t.__vccOpts),e){e=Dy(e);let{class:c,style:l}=e;c&&!Ye(c)&&(e.class=is(c)),Ve(l)&&(Cf(l)&&!re(l)&&(l=lt({},l)),e.style=Et(l))}const a=Ye(t)?1:Z_(t)?128:Oy(t)?64:Ve(t)?4:fe(t)?2:0;return Q(t,e,n,r,s,a,i,!0)}function Dy(t){return t?Cf(t)||Wo in t?lt({},t):t:null}function Gr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:a}=t,c=e?Vy(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ep(c),ref:e&&e.ref?n&&s?re(s)?s.concat(oo(e)):[s,oo(e)]:oo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gr(t.ssContent),ssFallback:t.ssFallback&&Gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Vr(t=" ",e=0){return Pe(Ko,null,t,e)}function xy(t,e){const n=Pe(io,null,t);return n.staticCount=e,n}function ol(t="",e=!1){return e?(ue(),Nt(fr,null,t)):Pe(fr,null,t)}function Gt(t){return t==null||typeof t=="boolean"?Pe(fr):re(t)?Pe(Xe,null,t.slice()):typeof t=="object"?Cn(t):Pe(Ko,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gr(t)}function al(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),al(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Wo in e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),r&64?(n=16,e=[Vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=is([e.class,r.class]));else if(s==="style")e.style=Et([e.style,r.style]);else if(Fo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){Bt(t,e,7,[n,r])}const My=zf();let Ly=0;function Uy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||My,i={uid:Ly++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ff(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(r,s),emitsOptions:Lf(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=K_.bind(null,i),t.ce&&t.ce(i),i}let ot=null,cl,br,fh="__VUE_INSTANCE_SETTERS__";(br=Ya()[fh])||(br=Ya()[fh]=[]),br.push(t=>ot=t),cl=t=>{br.length>1?br.forEach(e=>e(t)):br[0](t)};const zr=t=>{cl(t),t.scope.on()},cr=()=>{ot&&ot.scope.off(),cl(null)};function tp(t){return t.vnode.shapeFlag&4}let ni=!1;function Fy(t,e=!1){ni=e;const{props:n,children:r}=t.vnode,s=tp(t);Iy(t,n,s,e),Ay(t,r);const i=s?By(t,e):void 0;return ni=!1,i}function By(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$o(new Proxy(t.ctx,dy));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?$y(t):null;zr(t),os();const i=Fn(r,t,0,[t.props,s]);if(as(),cr(),af(i)){if(i.then(cr,cr),e)return i.then(a=>{ph(t,a,e)}).catch(a=>{Ho(a,t,0)});t.asyncDep=i}else ph(t,i,e)}else np(t,e)}function ph(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=kf(e)),np(t,n)}let mh;function np(t,e,n){const r=t.type;if(!t.render){if(!e&&mh&&!r.render){const s=r.template||sl(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=lt(lt({isCustomElement:i,delimiters:c},a),l);r.render=mh(s,h)}}t.render=r.render||Ft}{zr(t),os();try{fy(t)}finally{as(),cr()}}}function jy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function $y(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return jy(t)},slots:t.slots,emit:t.emit,expose:e}}function Qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kf($o(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}}))}function Hy(t){return fe(t)&&"__vccOpts"in t}const me=(t,e)=>j_(t,e,ni);function rp(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!re(e)?ac(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ac(n)&&(n=[n]),Pe(t,e,n))}const qy=Symbol.for("v-scx"),Gy=()=>Qt(qy),zy="3.3.9",Ky="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,gh=sr&&sr.createElement("template"),Wy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(Ky,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gh.innerHTML=r?`<svg>${t}</svg>`:t;const c=gh.content;if(r){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qy=Symbol("_vtc");function Xy(t,e,n){const r=t[Qy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ll=Symbol("_vod"),Ao={beforeMount(t,{value:e},{transition:n}){t[ll]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ks(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ks(t,!0),r.enter(t)):r.leave(t,()=>{ks(t,!1)}):ks(t,e))},beforeUnmount(t,{value:e}){ks(t,e)}};function ks(t,e){t.style.display=e?t[ll]:"none"}function Yy(t,e,n){const r=t.style,s=Ye(n);if(n&&!s){if(e&&!Ye(e))for(const i in e)n[i]==null&&cc(r,i,"");for(const i in n)cc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),ll in t&&(r.display=i)}}const _h=/\s*!important$/;function cc(t,e,n){if(re(n))n.forEach(r=>cc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Jy(t,e);_h.test(n)?t.setProperty(Er(r),n.replace(_h,""),"important"):t[r]=n}}const yh=["Webkit","Moz","ms"],xa={};function Jy(t,e){const n=xa[e];if(n)return n;let r=Hr(e);if(r!=="filter"&&r in t)return xa[e]=r;r=uf(r);for(let s=0;s<yh.length;s++){const i=yh[s]+r;if(i in t)return xa[e]=i}return e}const vh="http://www.w3.org/1999/xlink";function Zy(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vh,e.slice(6,e.length)):t.setAttributeNS(vh,e,n);else{const i=l_(e);n==null||i&&!hf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ev(t,e,n,r,s,i,a){if(e==="innerHTML"||e==="textContent"){r&&a(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const h=c==="OPTION"?t.getAttribute("value"):t.value,d=n??"";h!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=hf(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function On(t,e,n,r){t.addEventListener(e,n,r)}function tv(t,e,n,r){t.removeEventListener(e,n,r)}const Eh=Symbol("_vei");function nv(t,e,n,r,s=null){const i=t[Eh]||(t[Eh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=rv(e);if(r){const h=i[e]=ov(r,s);On(t,c,h,l)}else a&&(tv(t,c,a,l),i[e]=void 0)}}const Ih=/(?:Once|Passive|Capture)$/;function rv(t){let e;if(Ih.test(t)){e={};let r;for(;r=t.match(Ih);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Er(t.slice(2)),e]}let Va=0;const sv=Promise.resolve(),iv=()=>Va||(sv.then(()=>Va=0),Va=Date.now());function ov(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(av(r,n.value),e,5,[r])};return n.value=t,n.attached=iv(),n}function av(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Th=/^on[a-z]/,cv=(t,e,n,r,s=!1,i,a,c,l)=>{e==="class"?Xy(t,r,s):e==="style"?Yy(t,n,r):Fo(e)?Gc(e)||nv(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lv(t,e,r,s))?ev(t,e,r,i,a,c,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zy(t,e,r,s))};function lv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Th.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Th.test(e)&&Ye(n)?!1:e in t}const Kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>to(e,n):e};function uv(t){t.target.composing=!0}function wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fn=Symbol("_assign"),hv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fn]=Kr(s);const i=r||s.props&&s.props.type==="number";On(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=vo(c)),t[fn](c)}),n&&On(t,"change",()=>{t.value=t.value.trim()}),e||(On(t,"compositionstart",uv),On(t,"compositionend",wh),On(t,"change",wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[fn]=Kr(i),t.composing)return;const a=s||t.type==="number"?vo(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},dv={deep:!0,created(t,e,n){t[fn]=Kr(n),On(t,"change",()=>{const r=t._modelValue,s=ri(t),i=t.checked,a=t[fn];if(re(r)){const c=Wc(r,s),l=c!==-1;if(i&&!l)a(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),a(h)}}else if(ss(r)){const c=new Set(r);i?c.add(s):c.delete(s),a(c)}else a(sp(t,i))})},mounted:Ah,beforeUpdate(t,e,n){t[fn]=Kr(n),Ah(t,e,n)}};function Ah(t,{value:e,oldValue:n},r){t._modelValue=e,re(e)?t.checked=Wc(e,r.props.value)>-1:ss(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=fi(e,sp(t,!0)))}const ao={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ss(e);On(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?vo(ri(a)):ri(a));t[fn](t.multiple?s?new Set(i):i:i[0])}),t[fn]=Kr(r)},mounted(t,{value:e}){bh(t,e)},beforeUpdate(t,e,n){t[fn]=Kr(n)},updated(t,{value:e}){bh(t,e)}};function bh(t,e){const n=t.multiple;if(!(n&&!re(e)&&!ss(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],a=ri(i);if(n)re(e)?i.selected=Wc(e,a)>-1:i.selected=e.has(a);else if(fi(ri(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ri(t){return"_value"in t?t._value:t.value}function sp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const fv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pv=(t,e)=>n=>{if(!("key"in n))return;const r=Er(n.key);if(e.some(s=>s===r||fv[s]===r))return t(n)},mv=lt({patchProp:cv},Wy);let Rh;function gv(){return Rh||(Rh=Ry(mv))}const _v=(...t)=>{const e=gv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yv(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function yv(t){return Ye(t)?document.querySelector(t):t}var vv=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ip;const Xo=t=>ip=t,op=Symbol();function lc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function Ev(){const t=pf(!0),e=t.run(()=>vt({}));let n=[],r=[];const s=$o({install(i){Xo(s),s._a=i,i.provide(op,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!vv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ap=()=>{};function Sh(t,e,n,r=ap){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&mf()&&d_(s),s}function Rr(t,...e){t.slice().forEach(n=>{n(...e)})}const Iv=t=>t();function uc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];lc(s)&&lc(r)&&t.hasOwnProperty(n)&&!He(r)&&!Un(r)?t[n]=uc(s,r):t[n]=r}return t}const Tv=Symbol();function wv(t){return!lc(t)||!t.hasOwnProperty(Tv)}const{assign:Sn}=Object;function Av(t){return!!(He(t)&&t.effect)}function bv(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=L_(n.state.value[t]);return Sn(d,i,Object.keys(a||{}).reduce((m,g)=>(m[g]=$o(me(()=>{Xo(n);const I=n._s.get(t);return a[g].call(I,I)})),m),{}))}return l=cp(t,h,e,n,r,!0),l}function cp(t,e,n={},r,s,i){let a;const c=Sn({actions:{}},n),l={deep:!0};let h,d,m=[],g=[],I;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),vt({});let N;function k(_){let y;h=d=!1,typeof _=="function"?(_(r.state.value[t]),y={type:Hs.patchFunction,storeId:t,events:I}):(uc(r.state.value[t],_),y={type:Hs.patchObject,payload:_,storeId:t,events:I});const w=N=Symbol();nl().then(()=>{N===w&&(h=!0)}),d=!0,Rr(m,y,r.state.value[t])}const F=i?function(){const{state:y}=n,w=y?y():{};this.$patch(b=>{Sn(b,w)})}:ap;function q(){a.stop(),m=[],g=[],r._s.delete(t)}function Z(_,y){return function(){Xo(r);const w=Array.from(arguments),b=[],R=[];function E(Ie){b.push(Ie)}function rt(Ie){R.push(Ie)}Rr(g,{args:w,name:_,store:he,after:E,onError:rt});let Je;try{Je=y.apply(this&&this.$id===t?this:he,w)}catch(Ie){throw Rr(R,Ie),Ie}return Je instanceof Promise?Je.then(Ie=>(Rr(b,Ie),Ie)).catch(Ie=>(Rr(R,Ie),Promise.reject(Ie))):(Rr(b,Je),Je)}}const z={_p:r,$id:t,$onAction:Sh.bind(null,g),$patch:k,$reset:F,$subscribe(_,y={}){const w=Sh(m,_,y.detached,()=>b()),b=a.run(()=>Bs(()=>r.state.value[t],R=>{(y.flush==="sync"?d:h)&&_({storeId:t,type:Hs.direct,events:I},R)},Sn({},l,y)));return w},$dispose:q},he=pi(z);r._s.set(t,he);const A=(r._a&&r._a.runWithContext||Iv)(()=>r._e.run(()=>(a=pf()).run(e)));for(const _ in A){const y=A[_];if(He(y)&&!Av(y)||Un(y))i||(P&&wv(y)&&(He(y)?y.value=P[_]:uc(y,P[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const w=Z(_,y);A[_]=w,c.actions[_]=y}}return Sn(he,A),Sn(be(he),A),Object.defineProperty(he,"$state",{get:()=>r.state.value[t],set:_=>{k(y=>{Sn(y,_)})}}),r._p.forEach(_=>{Sn(he,a.run(()=>_({store:he,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(he.$state,P),h=!0,d=!0,he}function Yo(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function a(c,l){const h=Ey();return c=c||(h?Qt(op,null):null),c&&Xo(c),c=ip,c._s.has(r)||(i?cp(r,e,s,c):bv(r,s,c)),c._s.get(r)}return a.$id=r,a}function Rv(t){return typeof t=="object"&&t!==null}function Ch(t,e){return t=Rv(t)?t:Object.create(null),new Proxy(t,{get(n,r,s){return r==="key"?Reflect.get(n,r,s):Reflect.get(n,r,s)||Reflect.get(e,r,s)}})}function Sv(t,e){return e.reduce((n,r)=>n==null?void 0:n[r],t)}function Cv(t,e,n){return e.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},t)[e[e.length-1]]=n,t}function Pv(t,e){return e.reduce((n,r)=>{const s=r.split(".");return Cv(n,s,Sv(t,s))},{})}function Ov(t,e){return n=>{var r;try{const{storage:s=localStorage,beforeRestore:i=void 0,afterRestore:a=void 0,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:l=e.$id,paths:h=null,debug:d=!1}=n;return{storage:s,beforeRestore:i,afterRestore:a,serializer:c,key:((r=t.key)!=null?r:m=>m)(typeof l=="string"?l:l(e.$id)),paths:h,debug:d}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function Ph(t,{storage:e,serializer:n,key:r,debug:s}){try{const i=e==null?void 0:e.getItem(r);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){s&&console.error("[pinia-plugin-persistedstate]",i)}}function Oh(t,{storage:e,serializer:n,key:r,paths:s,debug:i}){try{const a=Array.isArray(s)?Pv(t,s):t;e.setItem(r,n.serialize(a))}catch(a){i&&console.error("[pinia-plugin-persistedstate]",a)}}function Nv(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:r=n},store:s,pinia:i}=e;if(!r)return;if(!(s.$id in i.state.value)){const c=i._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(r)?r.map(c=>Ch(c,t)):[Ch(r,t)]).map(Ov(t,s)).filter(Boolean);s.$persist=()=>{a.forEach(c=>{Oh(s.$state,c)})},s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{const{beforeRestore:h,afterRestore:d}=l;c&&(h==null||h(e)),Ph(s,l),c&&(d==null||d(e))})},a.forEach(c=>{const{beforeRestore:l,afterRestore:h}=c;l==null||l(e),Ph(s,c),h==null||h(e),s.$subscribe((d,m)=>{Oh(m,c)},{detached:!0})})}}const kv="/webscraper_tl/icon.svg",Dv="MiniCrawler",xv="0.4",hc={appName:Dv,version:xv};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Sr=typeof window<"u";function Vv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function Ma(t,e){const n={};for(const r in e){const s=e[r];n[r]=jt(s)?s.map(t):t(s)}return n}const qs=()=>{},jt=Array.isArray,Mv=/\/$/,Lv=t=>t.replace(Mv,"");function La(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=jv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:a}}function Uv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Fv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Wr(e.matched[r],n.matched[s])&&lp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bv(t[n],e[n]))return!1;return!0}function Bv(t,e){return jt(t)?kh(t,e):jt(e)?kh(e,t):t===e}function kh(t,e){return jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var si;(function(t){t.pop="pop",t.push="push"})(si||(si={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function $v(t){if(!t)if(Sr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Lv(t)}const Hv=/^[^#]+#/;function qv(t,e){return t.replace(Hv,"#")+e}function Gv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Jo=()=>({left:window.pageXOffset,top:window.pageYOffset});function zv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Gv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Dh(t,e){return(history.state?history.state.position-e:-1)+t}const dc=new Map;function Kv(t,e){dc.set(t,e)}function Wv(t){const e=dc.get(t);return dc.delete(t),e}let Qv=()=>location.protocol+"//"+location.host;function up(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Nh(l,"")}return Nh(n,t)+r+s}function Xv(t,e,n,r){let s=[],i=[],a=null;const c=({state:g})=>{const I=up(t,location),P=n.value,N=e.value;let k=0;if(g){if(n.value=I,e.value=g,a&&a===P){a=null;return}k=N?g.position-N.position:0}else r(I);s.forEach(F=>{F(n.value,P,{delta:k,type:si.pop,direction:k?k>0?Gs.forward:Gs.back:Gs.unknown})})};function l(){a=n.value}function h(g){s.push(g);const I=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(I),I}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:Jo()}),"")}function m(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:m}}function xh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Jo():null}}function Yv(t){const{history:e,location:n}=window,r={value:up(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const m=t.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+l:Qv()+t+l;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(I){console.error(I),n[d?"replace":"assign"](g)}}function a(l,h){const d=ke({},e.state,xh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=ke({},s.value,e.state,{forward:l,scroll:Jo()});i(d.current,d,!0);const m=ke({},xh(r.value,l,null),{position:d.position+1},h);i(l,m,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function Jv(t){t=$v(t);const e=Yv(t),n=Xv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:qv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Zv(t){return typeof t=="string"||t&&typeof t=="object"}function hp(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dp=Symbol("");var Vh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vh||(Vh={}));function Qr(t,e){return ke(new Error,{type:t,[dp]:!0},e)}function sn(t,e){return t instanceof Error&&dp in t&&(e==null||!!(t.type&e))}const Mh="[^/]+?",eE={sensitive:!1,strict:!1,start:!0,end:!0},tE=/[.+*?^${}()[\]/\\]/g;function nE(t,e){const n=ke({},eE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let m=0;m<h.length;m++){const g=h[m];let I=40+(n.sensitive?.25:0);if(g.type===0)m||(s+="/"),s+=g.value.replace(tE,"\\$&"),I+=40;else if(g.type===1){const{value:P,repeatable:N,optional:k,regexp:F}=g;i.push({name:P,repeatable:N,optional:k});const q=F||Mh;if(q!==Mh){I+=10;try{new RegExp(`(${q})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${P}" (${q}): `+z.message)}}let Z=N?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;m||(Z=k&&h.length<2?`(?:/${Z})`:"/"+Z),k&&(Z+="?"),s+=Z,I+=20,k&&(I+=-8),N&&(I+=-20),q===".*"&&(I+=-50)}d.push(I)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(a),m={};if(!d)return null;for(let g=1;g<d.length;g++){const I=d[g]||"",P=i[g-1];m[P.name]=I&&P.repeatable?I.split("/"):I}return m}function l(h){let d="",m=!1;for(const g of t){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const I of g)if(I.type===0)d+=I.value;else if(I.type===1){const{value:P,repeatable:N,optional:k}=I,F=P in h?h[P]:"";if(jt(F)&&!N)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const q=jt(F)?F.join("/"):F;if(!q)if(k)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${P}"`);d+=q}}return d||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function rE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Lh(r))return 1;if(Lh(s))return-1}return s.length-r.length}function Lh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iE={type:0,value:""},oE=/[a-zA-Z0-9_]/;function aE(t){if(!t)return[[]];if(t==="/")return[[iE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${h}": ${I}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function m(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&m(),a()):l===":"?(m(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:oE.test(l)?g():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),m(),a(),s}function cE(t,e,n){const r=nE(aE(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lE(t,e){const n=[],r=new Map;e=Bh({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const I=!g,P=uE(d);P.aliasOf=g&&g.record;const N=Bh(e,d),k=[P];if("alias"in d){const Z=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of Z)k.push(ke({},P,{components:g?g.record.components:P.components,path:z,aliasOf:g?g.record:P}))}let F,q;for(const Z of k){const{path:z}=Z;if(m&&z[0]!=="/"){const he=m.record.path,ge=he[he.length-1]==="/"?"":"/";Z.path=m.record.path+(z&&ge+z)}if(F=cE(Z,m,N),g?g.alias.push(F):(q=q||F,q!==F&&q.alias.push(F),I&&d.name&&!Fh(F)&&a(d.name)),P.children){const he=P.children;for(let ge=0;ge<he.length;ge++)i(he[ge],F,g&&g.children[ge])}g=g||F,(F.record.components&&Object.keys(F.record.components).length||F.record.name||F.record.redirect)&&l(F)}return q?()=>{a(q)}:qs}function a(d){if(hp(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function c(){return n}function l(d){let m=0;for(;m<n.length&&sE(d,n[m])>=0&&(d.record.path!==n[m].record.path||!fp(d,n[m]));)m++;n.splice(m,0,d),d.record.name&&!Fh(d)&&r.set(d.record.name,d)}function h(d,m){let g,I={},P,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Qr(1,{location:d});N=g.record.name,I=ke(Uh(m.params,g.keys.filter(q=>!q.optional).map(q=>q.name)),d.params&&Uh(d.params,g.keys.map(q=>q.name))),P=g.stringify(I)}else if("path"in d)P=d.path,g=n.find(q=>q.re.test(P)),g&&(I=g.parse(P),N=g.record.name);else{if(g=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!g)throw Qr(1,{location:d,currentLocation:m});N=g.record.name,I=ke({},m.params,d.params),P=g.stringify(I)}const k=[];let F=g;for(;F;)k.unshift(F.record),F=F.parent;return{name:N,path:P,params:I,matched:k,meta:dE(k)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:h,removeRoute:a,getRoutes:c,getRecordMatcher:s}}function Uh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Fh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dE(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Bh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fp(t,e){return e.children.some(n=>n===t||fp(t,n))}const pp=/#/g,fE=/&/g,pE=/\//g,mE=/=/g,gE=/\?/g,mp=/\+/g,_E=/%5B/g,yE=/%5D/g,gp=/%5E/g,vE=/%60/g,_p=/%7B/g,EE=/%7C/g,yp=/%7D/g,IE=/%20/g;function ul(t){return encodeURI(""+t).replace(EE,"|").replace(_E,"[").replace(yE,"]")}function TE(t){return ul(t).replace(_p,"{").replace(yp,"}").replace(gp,"^")}function fc(t){return ul(t).replace(mp,"%2B").replace(IE,"+").replace(pp,"%23").replace(fE,"%26").replace(vE,"`").replace(_p,"{").replace(yp,"}").replace(gp,"^")}function wE(t){return fc(t).replace(mE,"%3D")}function AE(t){return ul(t).replace(pp,"%23").replace(gE,"%3F")}function bE(t){return t==null?"":AE(t).replace(pE,"%2F")}function bo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function RE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mp," "),a=i.indexOf("="),c=bo(a<0?i:i.slice(0,a)),l=a<0?null:bo(i.slice(a+1));if(c in e){let h=e[c];jt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function jh(t){let e="";for(let n in t){const r=t[n];if(n=wE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(r)?r.map(i=>i&&fc(i)):[r&&fc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function SE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const CE=Symbol(""),$h=Symbol(""),hl=Symbol(""),vp=Symbol(""),pc=Symbol("");function Ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=m=>{m===!1?c(Qr(4,{from:n,to:e})):m instanceof Error?c(m):Zv(m)?c(Qr(2,{from:e,to:m})):(i&&r.enterCallbacks[s]===i&&typeof m=="function"&&i.push(m),a())},h=t.call(r&&r.instances[s],e,n,l);let d=Promise.resolve(h);t.length<3&&(d=d.then(l)),d.catch(m=>c(m))})}function Ua(t,e,n,r){const s=[];for(const i of t)for(const a in i.components){let c=i.components[a];if(!(e!=="beforeRouteEnter"&&!i.instances[a]))if(PE(c)){const h=(c.__vccOpts||c)[e];h&&s.push(Pn(h,n,r,i,a))}else{let l=c();s.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=Vv(h)?h.default:h;i.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Pn(g,n,r,i,a)()}))}}return s}function PE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hh(t){const e=Qt(hl),n=Qt(vp),r=me(()=>e.resolve(De(t.to))),s=me(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],m=n.matched;if(!d||!m.length)return-1;const g=m.findIndex(Wr.bind(null,d));if(g>-1)return g;const I=qh(l[h-2]);return h>1&&qh(d)===I&&m[m.length-1].path!==I?m.findIndex(Wr.bind(null,l[h-2])):g}),i=me(()=>s.value>-1&&kE(n.params,r.value.params)),a=me(()=>s.value>-1&&s.value===n.matched.length-1&&lp(n.params,r.value.params));function c(l={}){return NE(l)?e[De(t.replace)?"replace":"push"](De(t.to)).catch(qs):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}const OE=Qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hh,setup(t,{slots:e}){const n=pi(Hh(t)),{options:r}=Qt(hl),s=me(()=>({[Gh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:rp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),co=OE;function NE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!jt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function qh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gh=(t,e,n)=>t??e??n,DE=Qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Qt(pc),s=me(()=>t.route||r.value),i=Qt($h,0),a=me(()=>{let h=De(i);const{matched:d}=s.value;let m;for(;(m=d[h])&&!m.components;)h++;return h}),c=me(()=>s.value.matched[a.value]);so($h,me(()=>a.value+1)),so(CE,c),so(pc,s);const l=vt();return Bs(()=>[l.value,c.value,t.name],([h,d,m],[g,I,P])=>{d&&(d.instances[m]=h,I&&I!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),h&&d&&(!I||!Wr(d,I)||!g)&&(d.enterCallbacks[m]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,m=c.value,g=m&&m.components[d];if(!g)return zh(n.default,{Component:g,route:h});const I=m.props[d],P=I?I===!0?h.params:typeof I=="function"?I(h):I:null,k=rp(g,ke({},P,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(m.instances[d]=null)},ref:l}));return zh(n.default,{Component:k,route:h})||k}}});function zh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ep=DE;function xE(t){const e=lE(t.routes,t),n=t.parseQuery||RE,r=t.stringifyQuery||jh,s=t.history,i=Ds(),a=Ds(),c=Ds(),l=x_(bn);let h=bn;Sr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ma.bind(null,x=>""+x),m=Ma.bind(null,bE),g=Ma.bind(null,bo);function I(x,W){let G,ee;return hp(x)?(G=e.getRecordMatcher(x),ee=W):ee=x,e.addRoute(ee,G)}function P(x){const W=e.getRecordMatcher(x);W&&e.removeRoute(W)}function N(){return e.getRoutes().map(x=>x.record)}function k(x){return!!e.getRecordMatcher(x)}function F(x,W){if(W=ke({},W||l.value),typeof x=="string"){const C=La(n,x,W.path),D=e.resolve({path:C.path},W),V=s.createHref(C.fullPath);return ke(C,D,{params:g(D.params),hash:bo(C.hash),redirectedFrom:void 0,href:V})}let G;if("path"in x)G=ke({},x,{path:La(n,x.path,W.path).path});else{const C=ke({},x.params);for(const D in C)C[D]==null&&delete C[D];G=ke({},x,{params:m(C)}),W.params=m(W.params)}const ee=e.resolve(G,W),ye=x.hash||"";ee.params=d(g(ee.params));const v=Uv(r,ke({},x,{hash:TE(ye),path:ee.path})),T=s.createHref(v);return ke({fullPath:v,hash:ye,query:r===jh?SE(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:T})}function q(x){return typeof x=="string"?La(n,x,l.value.path):ke({},x)}function Z(x,W){if(h!==x)return Qr(8,{from:W,to:x})}function z(x){return A(x)}function he(x){return z(ke(q(x),{replace:!0}))}function ge(x){const W=x.matched[x.matched.length-1];if(W&&W.redirect){const{redirect:G}=W;let ee=typeof G=="function"?G(x):G;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=q(ee):{path:ee},ee.params={}),ke({query:x.query,hash:x.hash,params:"path"in ee?{}:x.params},ee)}}function A(x,W){const G=h=F(x),ee=l.value,ye=x.state,v=x.force,T=x.replace===!0,C=ge(G);if(C)return A(ke(q(C),{state:typeof C=="object"?ke({},ye,C.state):ye,force:v,replace:T}),W||G);const D=G;D.redirectedFrom=W;let V;return!v&&Fv(r,ee,G)&&(V=Qr(16,{to:D,from:ee}),kt(ee,ee,!0,!1)),(V?Promise.resolve(V):w(D,ee)).catch(M=>sn(M)?sn(M,2)?M:xt(M):_e(M,D,ee)).then(M=>{if(M){if(sn(M,2))return A(ke({replace:T},q(M.to),{state:typeof M.to=="object"?ke({},ye,M.to.state):ye,force:v}),W||D)}else M=R(D,ee,!0,T,ye);return b(D,ee,M),M})}function _(x,W){const G=Z(x,W);return G?Promise.reject(G):Promise.resolve()}function y(x){const W=En.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(x):x()}function w(x,W){let G;const[ee,ye,v]=VE(x,W);G=Ua(ee.reverse(),"beforeRouteLeave",x,W);for(const C of ee)C.leaveGuards.forEach(D=>{G.push(Pn(D,x,W))});const T=_.bind(null,x,W);return G.push(T),Ze(G).then(()=>{G=[];for(const C of i.list())G.push(Pn(C,x,W));return G.push(T),Ze(G)}).then(()=>{G=Ua(ye,"beforeRouteUpdate",x,W);for(const C of ye)C.updateGuards.forEach(D=>{G.push(Pn(D,x,W))});return G.push(T),Ze(G)}).then(()=>{G=[];for(const C of v)if(C.beforeEnter)if(jt(C.beforeEnter))for(const D of C.beforeEnter)G.push(Pn(D,x,W));else G.push(Pn(C.beforeEnter,x,W));return G.push(T),Ze(G)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),G=Ua(v,"beforeRouteEnter",x,W),G.push(T),Ze(G))).then(()=>{G=[];for(const C of a.list())G.push(Pn(C,x,W));return G.push(T),Ze(G)}).catch(C=>sn(C,8)?C:Promise.reject(C))}function b(x,W,G){c.list().forEach(ee=>y(()=>ee(x,W,G)))}function R(x,W,G,ee,ye){const v=Z(x,W);if(v)return v;const T=W===bn,C=Sr?history.state:{};G&&(ee||T?s.replace(x.fullPath,ke({scroll:T&&C&&C.scroll},ye)):s.push(x.fullPath,ye)),l.value=x,kt(x,W,G,T),xt()}let E;function rt(){E||(E=s.listen((x,W,G)=>{if(!Ht.listening)return;const ee=F(x),ye=ge(ee);if(ye){A(ke(ye,{replace:!0}),ee).catch(qs);return}h=ee;const v=l.value;Sr&&Kv(Dh(v.fullPath,G.delta),Jo()),w(ee,v).catch(T=>sn(T,12)?T:sn(T,2)?(A(T.to,ee).then(C=>{sn(C,20)&&!G.delta&&G.type===si.pop&&s.go(-1,!1)}).catch(qs),Promise.reject()):(G.delta&&s.go(-G.delta,!1),_e(T,ee,v))).then(T=>{T=T||R(ee,v,!1),T&&(G.delta&&!sn(T,8)?s.go(-G.delta,!1):G.type===si.pop&&sn(T,20)&&s.go(-1,!1)),b(ee,v,T)}).catch(qs)}))}let Je=Ds(),Ie=Ds(),Te;function _e(x,W,G){xt(x);const ee=Ie.list();return ee.length?ee.forEach(ye=>ye(x,W,G)):console.error(x),Promise.reject(x)}function Ct(){return Te&&l.value!==bn?Promise.resolve():new Promise((x,W)=>{Je.add([x,W])})}function xt(x){return Te||(Te=!x,rt(),Je.list().forEach(([W,G])=>x?G(x):W()),Je.reset()),x}function kt(x,W,G,ee){const{scrollBehavior:ye}=t;if(!Sr||!ye)return Promise.resolve();const v=!G&&Wv(Dh(x.fullPath,0))||(ee||!G)&&history.state&&history.state.scroll||null;return nl().then(()=>ye(x,W,v)).then(T=>T&&zv(T)).catch(T=>_e(T,x,W))}const Fe=x=>s.go(x);let Be;const En=new Set,Ht={currentRoute:l,listening:!0,addRoute:I,removeRoute:P,hasRoute:k,getRoutes:N,resolve:F,options:t,push:z,replace:he,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:Ie.add,isReady:Ct,install(x){const W=this;x.component("RouterLink",co),x.component("RouterView",Ep),x.config.globalProperties.$router=W,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>De(l)}),Sr&&!Be&&l.value===bn&&(Be=!0,z(s.location).catch(ye=>{}));const G={};for(const ye in bn)Object.defineProperty(G,ye,{get:()=>l.value[ye],enumerable:!0});x.provide(hl,W),x.provide(vp,Rf(G)),x.provide(pc,l);const ee=x.unmount;En.add(x),x.unmount=function(){En.delete(x),En.size<1&&(h=bn,E&&E(),E=null,l.value=bn,Be=!1,Te=!1),ee()}}};function Ze(x){return x.reduce((W,G)=>W.then(()=>y(G)),Promise.resolve())}return Ht}function VE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>Wr(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>Wr(h,l))||s.push(l))}return[n,r,s]}const ME=t=>(cs("data-v-2bb0cbed"),t=t(),ls(),t),LE={class:"headerClass"},UE={class:"headerNav"},FE={class:"headerIconTitle"},BE=ME(()=>Q("img",{src:kv,type:"image/svg+xml",alt:"icon"},null,-1)),jE={class:"appView"},$E=Qe({__name:"App",setup(t){return(e,n)=>(ue(),Ne(Xe,null,[Q("header",LE,[Q("nav",UE,[Pe(De(co),{to:"/"},{default:no(()=>[Vr("HOME")]),_:1}),Pe(De(co),{to:"/about"},{default:no(()=>[Vr("ABOUT")]),_:1}),Pe(De(co),{to:"/contact"},{default:no(()=>[Vr("CONTACT")]),_:1})]),Q("div",FE,[BE,Q("p",null,at(De(hc).appName)+" v"+at(De(hc).version),1)])]),Q("div",jE,[Pe(De(Ep))])],64))}});const nt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},HE=nt($E,[["__scopeId","data-v-2bb0cbed"]]),qE="modulepreload",GE=function(t){return"/webscraper_tl/"+t},Kh={},Wh=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=GE(i),i in Kh)return;Kh[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const m=s[d];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":qE,a||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),a)return new Promise((d,m)=>{h.addEventListener("load",d),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},zE={},KE={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},WE=Q("g",null,[Q("path",{d:`M449.803,62.197C408.443,20.807,353.85-0.037,299.646-0.006C245.428-0.037,190.85,20.807,149.49,62.197
		C108.1,103.557,87.24,158.15,87.303,212.338c-0.047,37.859,10.359,75.766,30.547,109.359L15.021,424.525
		c-20.016,20.016-20.016,52.453,0,72.469c20,20.016,52.453,20.016,72.453,0L190.318,394.15
		c33.578,20.203,71.5,30.594,109.328,30.547c54.203,0.047,108.797-20.797,150.156-62.188
		c41.375-41.359,62.234-95.938,62.188-150.172C512.053,158.15,491.178,103.557,449.803,62.197z M391.818,304.541
		c-25.547,25.531-58.672,38.125-92.172,38.188c-33.5-0.063-66.609-12.656-92.188-38.188c-25.531-25.578-38.125-58.688-38.188-92.203
		c0.063-33.484,12.656-66.609,38.188-92.172c25.578-25.531,58.688-38.125,92.188-38.188c33.5,0.063,66.625,12.656,92.188,38.188
		c25.531,25.563,38.125,58.688,38.188,92.172C429.959,245.854,417.365,278.963,391.818,304.541z`})],-1),QE=[WE];function XE(t,e){return ue(),Ne("svg",KE,QE)}const YE=nt(zE,[["render",XE]]),JE="#003B83",ZE="#420011",e0="#DC003C",t0="#EC7394",n0="#FAD9E2",r0="#001942",s0="#0054DC",i0="#80AEF8",o0="#E2ECFD",a0="#212121",c0="#595757",l0="#939292",u0="#E6E6E6",h0="#004229",d0="#329B73",f0="#7ABEA4",p0="#E0F0EA",m0="#423100",g0="#DCA000",_0="#E8C159",y0="#E8FCCC",Ce={mriblue:JE,red0:ZE,red1:e0,red2:t0,red3:n0,blue0:r0,blue1:s0,blue2:i0,blue3:o0,gray0:a0,gray1:c0,gray2:l0,gray3:u0,green0:h0,green1:d0,green2:f0,green3:p0,yellow0:m0,yellow1:g0,yellow2:_0,yellow3:y0},Ip=Qe({__name:"SearchButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ue(),Nt(YE,{class:"searchButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}}),v0={},E0={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},I0=xy(`<g><path class="st0" d="M40.252,14.489C18.019,14.489,0,32.507,0,54.741c0,22.233,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,32.507,62.477,14.489,40.252,14.489z"></path><rect x="148.122" y="14.489" class="st0" width="363.878" height="80.504"></rect><path class="st0" d="M40.252,215.748C18.019,215.748,0,233.767,0,256c0,22.233,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,233.767,62.477,215.748,40.252,215.748z"></path><rect x="148.122" y="215.748" class="st0" width="363.878" height="80.504"></rect><path class="st0" d="M40.252,417.007C18.019,417.007,0,435.026,0,457.259c0,22.232,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,435.026,62.477,417.007,40.252,417.007z"></path><rect x="148.122" y="417.007" class="st0" width="363.878" height="80.504"></rect></g>`,1),T0=[I0];function w0(t,e){return ue(),Ne("svg",E0,T0)}const A0=nt(v0,[["render",w0]]),b0=Qe({__name:"MenuButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ue(),Nt(A0,{class:"menuButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),R0={},S0={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},C0=Q("g",null,[Q("path",{class:"st0",d:`M512,255.996l-63.305-51.631l29.002-76.362l-80.633-13.07L383.993,34.3l-76.361,29.002L256,0.004
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
    c0.846-0.17,1.17,0.261,1.198,1.015L371.896,281.107z`})],-1),P0=[C0];function O0(t,e){return ue(),Ne("svg",S0,P0)}const N0=nt(R0,[["render",O0]]),k0=Qe({__name:"NewsButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ue(),Nt(N0,{class:"newsButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}});/**
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
 */const Tp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},D0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,m=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,I=h&63;l||(I=64,a||(g=64)),r.push(n[d],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):D0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new x0;const g=i<<2|c>>4;if(r.push(g),h!==64){const I=c<<4&240|h>>2;if(r.push(I),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class x0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V0=function(t){const e=Tp(t);return wp.encodeByteArray(e,!0)},Ro=function(t){return V0(t).replace(/\./g,"")},Ap=function(t){try{return wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function M0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const L0=()=>M0().__FIREBASE_DEFAULTS__,U0=()=>{if(typeof process>"u"||typeof{GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_0443f0f4-3909-425e-92b3-14859a7e712a",GIT_CLONE_PROTECTION_ACTIVE:"false",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/9.6.7 node/v18.17.1 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_0443f0f4-3909-425e-92b3-14859a7e712a",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/18.17.1/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",VITE_FIREBASE_MESSAGING_SENDER_ID:"318238552225",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/webscraper_tl/webscraper_tl/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"SabaNoMisoni1123",GRADLE_HOME:"/usr/share/gradle-8.7",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/26.3.11579264",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"44354717",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/webscraper_tl/webscraper_tl",SYSTEMD_EXEC_PID:"587",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.10/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240526.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.3/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19690",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/18.17.1/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/18.17.1/x64",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"9382044084",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",VITE_FIREBASE_MEASUREMENT_ID:"G-EE5YZ9ZW6P",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",VITE_FIREBASE_STORAGE_BUCKET:"ws-db-11235813.appspot.com",GITHUB_WORKFLOW_SHA:"5e709e5fab0b5969c82f271b7ab387569ab9b59a",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"SabaNoMisoni1123/webscraper_tl/.github/workflows/deploy.yml@refs/heads/master",VITE_FIREBASE_AUTH_DOMAIN:"ws-db-11235813.firebaseapp.com",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/webscraper_tl/webscraper_tl/node_modules/.bin:/home/runner/work/webscraper_tl/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/webscraper_tl/webscraper_tl/node_modules/.bin:/home/runner/work/webscraper_tl/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/18.17.1/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_8461f451-a983-4b37-a989-0d4ee35afb3e",INVOCATION_ID:"298d067a79a64a009b136d15bde26c2f",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/18.17.1/x64/bin/node",npm_package_name:"webscraper_tl",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"14",GITHUB_TRIGGERING_ACTOR:"SabaNoMisoni1123",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 8",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"master",GITHUB_REPOSITORY:"SabaNoMisoni1123/webscraper_tl",STATS_D_D:"true",npm_lifecycle_script:"vite build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"711502675",GITHUB_ACTIONS:"true",npm_package_version:"0.0.0",npm_lifecycle_event:"build-only",VITE_FIREBASE_PROJECT_ID:"ws-db-11235813",GITHUB_REF_PROTECTED:"false",GITHUB_WORKSPACE:"/home/runner/work/webscraper_tl/webscraper_tl",ACCEPT_EULA:"Y",GITHUB_JOB:"build",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"5e709e5fab0b5969c82f271b7ab387569ab9b59a",GITHUB_RUN_ATTEMPT:"1",VITE_FIREBASE_APP_ID:"1:318238552225:web:a5eae1ca149d3137dbc0e0",GITHUB_REF:"refs/heads/master",GITHUB_ACTOR:"SabaNoMisoni1123",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/18.17.1/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_0443f0f4-3909-425e-92b3-14859a7e712a",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/webscraper_tl/webscraper_tl",GITHUB_ACTOR_ID:"44354717",RUNNER_WORKSPACE:"/home/runner/work/webscraper_tl",npm_execpath:"/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_0443f0f4-3909-425e-92b3-14859a7e712a",npm_config_global_prefix:"/opt/hostedtoolcache/node/18.17.1/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/25.2.9519653",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",VITE_FIREBASE_API_KEY:"AIzaSyBMX5fhRGBNhKpf11lnHhVi018b5Zavkv8",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_0443f0f4-3909-425e-92b3-14859a7e712a",INIT_CWD:"/home/runner/work/webscraper_tl/webscraper_tl",EDITOR:"vi",NODE_ENV:"production"}>"u")return;const t={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_0443f0f4-3909-425e-92b3-14859a7e712a",GIT_CLONE_PROTECTION_ACTIVE:"false",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/9.6.7 node/v18.17.1 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_0443f0f4-3909-425e-92b3-14859a7e712a",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/18.17.1/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",VITE_FIREBASE_MESSAGING_SENDER_ID:"318238552225",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/webscraper_tl/webscraper_tl/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"SabaNoMisoni1123",GRADLE_HOME:"/usr/share/gradle-8.7",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/26.3.11579264",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"44354717",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/webscraper_tl/webscraper_tl",SYSTEMD_EXEC_PID:"587",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.10/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240526.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.3/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19690",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/18.17.1/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/18.17.1/x64",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"9382044084",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",VITE_FIREBASE_MEASUREMENT_ID:"G-EE5YZ9ZW6P",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",VITE_FIREBASE_STORAGE_BUCKET:"ws-db-11235813.appspot.com",GITHUB_WORKFLOW_SHA:"5e709e5fab0b5969c82f271b7ab387569ab9b59a",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"SabaNoMisoni1123/webscraper_tl/.github/workflows/deploy.yml@refs/heads/master",VITE_FIREBASE_AUTH_DOMAIN:"ws-db-11235813.firebaseapp.com",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/webscraper_tl/webscraper_tl/node_modules/.bin:/home/runner/work/webscraper_tl/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/webscraper_tl/webscraper_tl/node_modules/.bin:/home/runner/work/webscraper_tl/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/18.17.1/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_8461f451-a983-4b37-a989-0d4ee35afb3e",INVOCATION_ID:"298d067a79a64a009b136d15bde26c2f",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/18.17.1/x64/bin/node",npm_package_name:"webscraper_tl",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"14",GITHUB_TRIGGERING_ACTOR:"SabaNoMisoni1123",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 8",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"master",GITHUB_REPOSITORY:"SabaNoMisoni1123/webscraper_tl",STATS_D_D:"true",npm_lifecycle_script:"vite build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"711502675",GITHUB_ACTIONS:"true",npm_package_version:"0.0.0",npm_lifecycle_event:"build-only",VITE_FIREBASE_PROJECT_ID:"ws-db-11235813",GITHUB_REF_PROTECTED:"false",GITHUB_WORKSPACE:"/home/runner/work/webscraper_tl/webscraper_tl",ACCEPT_EULA:"Y",GITHUB_JOB:"build",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"5e709e5fab0b5969c82f271b7ab387569ab9b59a",GITHUB_RUN_ATTEMPT:"1",VITE_FIREBASE_APP_ID:"1:318238552225:web:a5eae1ca149d3137dbc0e0",GITHUB_REF:"refs/heads/master",GITHUB_ACTOR:"SabaNoMisoni1123",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/18.17.1/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_0443f0f4-3909-425e-92b3-14859a7e712a",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/webscraper_tl/webscraper_tl",GITHUB_ACTOR_ID:"44354717",RUNNER_WORKSPACE:"/home/runner/work/webscraper_tl",npm_execpath:"/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_0443f0f4-3909-425e-92b3-14859a7e712a",npm_config_global_prefix:"/opt/hostedtoolcache/node/18.17.1/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/25.2.9519653",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",VITE_FIREBASE_API_KEY:"AIzaSyBMX5fhRGBNhKpf11lnHhVi018b5Zavkv8",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_0443f0f4-3909-425e-92b3-14859a7e712a",INIT_CWD:"/home/runner/work/webscraper_tl/webscraper_tl",EDITOR:"vi",NODE_ENV:"production"}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},F0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ap(t[1]);return e&&JSON.parse(e)},Zo=()=>{try{return L0()||U0()||F0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=Zo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},B0=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rp=()=>{var t;return(t=Zo())===null||t===void 0?void 0:t.config},Sp=t=>{var e;return(e=Zo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class j0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Ro(JSON.stringify(n)),Ro(JSON.stringify(a)),c].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function H0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function q0(){var t;const e=(t=Zo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function G0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function z0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K0(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function W0(){return!q0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Q0(){try{return typeof indexedDB=="object"}catch{return!1}}function X0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Y0="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Y0,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?J0(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new yn(s,c,r)}}function J0(t,e){return t.replace(Z0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Z0=/\{\$([^}]+)}/g;function eI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function So(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Qh(i)&&Qh(a)){if(!So(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qh(t){return t!==null&&typeof t=="object"}/**
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
 */function gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tI(t,e){const n=new nI(t,e);return n.subscribe.bind(n)}class nI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fa),s.error===void 0&&(s.error=Fa),s.complete===void 0&&(s.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}/**
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
 */class sI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new j0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oI(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iI(t){return t===nr?void 0:t}function oI(t){return t.instantiationMode==="EAGER"}/**
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
 */class aI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const cI={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},lI=ve.INFO,uI={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},hI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dl{constructor(e){this.name=e,this._logLevel=lI,this._logHandler=hI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const dI=(t,e)=>e.some(n=>t instanceof n);let Xh,Yh;function fI(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pI(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cp=new WeakMap,mc=new WeakMap,Pp=new WeakMap,Ba=new WeakMap,fl=new WeakMap;function mI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Bn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Cp.set(n,t)}).catch(()=>{}),fl.set(e,t),e}function gI(t){if(mc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});mc.set(t,e)}let gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _I(t){gc=t(gc)}function yI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ja(this),e,...n);return Pp.set(r,e.sort?e.sort():[e]),Bn(r)}:pI().includes(t)?function(...e){return t.apply(ja(this),e),Bn(Cp.get(this))}:function(...e){return Bn(t.apply(ja(this),e))}}function vI(t){return typeof t=="function"?yI(t):(t instanceof IDBTransaction&&gI(t),dI(t,fI())?new Proxy(t,gc):t)}function Bn(t){if(t instanceof IDBRequest)return mI(t);if(Ba.has(t))return Ba.get(t);const e=vI(t);return e!==t&&(Ba.set(t,e),fl.set(e,t)),e}const ja=t=>fl.get(t);function EI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Bn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Bn(a.result),l.oldVersion,l.newVersion,Bn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const II=["get","getKey","getAll","getAllKeys","count"],TI=["put","add","delete","clear"],$a=new Map;function Jh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=TI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||II.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return $a.set(e,i),i}_I(t=>({...t,get:(e,n,r)=>Jh(e,n)||t.get(e,n,r),has:(e,n)=>!!Jh(e,n)||t.has(e,n)}));/**
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
 */class wI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _c="@firebase/app",Zh="0.10.4";/**
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
 */const mr=new dl("@firebase/app"),bI="@firebase/app-compat",RI="@firebase/analytics-compat",SI="@firebase/analytics",CI="@firebase/app-check-compat",PI="@firebase/app-check",OI="@firebase/auth",NI="@firebase/auth-compat",kI="@firebase/database",DI="@firebase/database-compat",xI="@firebase/functions",VI="@firebase/functions-compat",MI="@firebase/installations",LI="@firebase/installations-compat",UI="@firebase/messaging",FI="@firebase/messaging-compat",BI="@firebase/performance",jI="@firebase/performance-compat",$I="@firebase/remote-config",HI="@firebase/remote-config-compat",qI="@firebase/storage",GI="@firebase/storage-compat",zI="@firebase/firestore",KI="@firebase/vertexai-preview",WI="@firebase/firestore-compat",QI="firebase",XI="10.12.1";/**
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
 */const yc="[DEFAULT]",YI={[_c]:"fire-core",[bI]:"fire-core-compat",[SI]:"fire-analytics",[RI]:"fire-analytics-compat",[PI]:"fire-app-check",[CI]:"fire-app-check-compat",[OI]:"fire-auth",[NI]:"fire-auth-compat",[kI]:"fire-rtdb",[DI]:"fire-rtdb-compat",[xI]:"fire-fn",[VI]:"fire-fn-compat",[MI]:"fire-iid",[LI]:"fire-iid-compat",[UI]:"fire-fcm",[FI]:"fire-fcm-compat",[BI]:"fire-perf",[jI]:"fire-perf-compat",[$I]:"fire-rc",[HI]:"fire-rc-compat",[qI]:"fire-gcs",[GI]:"fire-gcs-compat",[zI]:"fire-fst",[WI]:"fire-fst-compat",[KI]:"fire-vertex","fire-js":"fire-js",[QI]:"fire-js-all"};/**
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
 */const Co=new Map,JI=new Map,vc=new Map;function ed(t,e){try{t.container.addComponent(e)}catch(n){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(vc.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;vc.set(e,t);for(const n of Co.values())ed(n,t);for(const n of JI.values())ed(n,t);return!0}function pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
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
 */const ZI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new mi("app","Firebase",ZI);/**
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
 */class eT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const us=XI;function Op(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=Rp()),!n)throw jn.create("no-options");const i=Co.get(s);if(i){if(So(n,i.options)&&So(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const a=new aI(s);for(const l of vc.values())a.addComponent(l);const c=new eT(n,r,a);return Co.set(s,c),c}function Np(t=yc){const e=Co.get(t);if(!e&&t===yc&&Rp())return Op();if(!e)throw jn.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let s=(r=YI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(c.join(" "));return}Xr(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const tT="firebase-heartbeat-database",nT=1,ii="firebase-heartbeat-store";let Ha=null;function kp(){return Ha||(Ha=EI(tT,nT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Ha}async function rT(t){try{const n=(await kp()).transaction(ii),r=await n.objectStore(ii).get(Dp(t));return await n.done,r}catch(e){if(e instanceof yn)mr.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mr.warn(n.message)}}}async function td(t,e){try{const r=(await kp()).transaction(ii,"readwrite");await r.objectStore(ii).put(e,Dp(t)),await r.done}catch(n){if(n instanceof yn)mr.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mr.warn(r.message)}}}function Dp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sT=1024,iT=30*24*60*60*1e3;class oT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=iT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nd(),{heartbeatsToSend:r,unsentEntries:s}=aT(this._heartbeatsCache.heartbeats),i=Ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nd(){return new Date().toISOString().substring(0,10)}function aT(t,e=sT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),rd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q0()?X0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rd(t){return Ro(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lT(t){Xr(new pr("platform-logger",e=>new wI(e),"PRIVATE")),Xr(new pr("heartbeat",e=>new oT(e),"PRIVATE")),$n(_c,Zh,t),$n(_c,Zh,"esm2017"),$n("fire-js","")}lT("");var uT="firebase",hT="10.12.1";/**
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
 */$n(uT,hT,"app");var sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,xp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function y(){}y.prototype=_.prototype,A.D=_.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(w,b,R){for(var E=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)E[rt-2]=arguments[rt];return _.prototype[b].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,y){y||(y=0);var w=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)w[b]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(b=0;16>b;++b)w[b]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=A.g[0],y=A.g[1],b=A.g[2];var R=A.g[3],E=_+(R^y&(b^R))+w[0]+3614090360&4294967295;_=y+(E<<7&4294967295|E>>>25),E=R+(b^_&(y^b))+w[1]+3905402710&4294967295,R=_+(E<<12&4294967295|E>>>20),E=b+(y^R&(_^y))+w[2]+606105819&4294967295,b=R+(E<<17&4294967295|E>>>15),E=y+(_^b&(R^_))+w[3]+3250441966&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(R^y&(b^R))+w[4]+4118548399&4294967295,_=y+(E<<7&4294967295|E>>>25),E=R+(b^_&(y^b))+w[5]+1200080426&4294967295,R=_+(E<<12&4294967295|E>>>20),E=b+(y^R&(_^y))+w[6]+2821735955&4294967295,b=R+(E<<17&4294967295|E>>>15),E=y+(_^b&(R^_))+w[7]+4249261313&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(R^y&(b^R))+w[8]+1770035416&4294967295,_=y+(E<<7&4294967295|E>>>25),E=R+(b^_&(y^b))+w[9]+2336552879&4294967295,R=_+(E<<12&4294967295|E>>>20),E=b+(y^R&(_^y))+w[10]+4294925233&4294967295,b=R+(E<<17&4294967295|E>>>15),E=y+(_^b&(R^_))+w[11]+2304563134&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(R^y&(b^R))+w[12]+1804603682&4294967295,_=y+(E<<7&4294967295|E>>>25),E=R+(b^_&(y^b))+w[13]+4254626195&4294967295,R=_+(E<<12&4294967295|E>>>20),E=b+(y^R&(_^y))+w[14]+2792965006&4294967295,b=R+(E<<17&4294967295|E>>>15),E=y+(_^b&(R^_))+w[15]+1236535329&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(b^R&(y^b))+w[1]+4129170786&4294967295,_=y+(E<<5&4294967295|E>>>27),E=R+(y^b&(_^y))+w[6]+3225465664&4294967295,R=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(R^_))+w[11]+643717713&4294967295,b=R+(E<<14&4294967295|E>>>18),E=y+(R^_&(b^R))+w[0]+3921069994&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^R&(y^b))+w[5]+3593408605&4294967295,_=y+(E<<5&4294967295|E>>>27),E=R+(y^b&(_^y))+w[10]+38016083&4294967295,R=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(R^_))+w[15]+3634488961&4294967295,b=R+(E<<14&4294967295|E>>>18),E=y+(R^_&(b^R))+w[4]+3889429448&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^R&(y^b))+w[9]+568446438&4294967295,_=y+(E<<5&4294967295|E>>>27),E=R+(y^b&(_^y))+w[14]+3275163606&4294967295,R=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(R^_))+w[3]+4107603335&4294967295,b=R+(E<<14&4294967295|E>>>18),E=y+(R^_&(b^R))+w[8]+1163531501&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^R&(y^b))+w[13]+2850285829&4294967295,_=y+(E<<5&4294967295|E>>>27),E=R+(y^b&(_^y))+w[2]+4243563512&4294967295,R=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(R^_))+w[7]+1735328473&4294967295,b=R+(E<<14&4294967295|E>>>18),E=y+(R^_&(b^R))+w[12]+2368359562&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(y^b^R)+w[5]+4294588738&4294967295,_=y+(E<<4&4294967295|E>>>28),E=R+(_^y^b)+w[8]+2272392833&4294967295,R=_+(E<<11&4294967295|E>>>21),E=b+(R^_^y)+w[11]+1839030562&4294967295,b=R+(E<<16&4294967295|E>>>16),E=y+(b^R^_)+w[14]+4259657740&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^R)+w[1]+2763975236&4294967295,_=y+(E<<4&4294967295|E>>>28),E=R+(_^y^b)+w[4]+1272893353&4294967295,R=_+(E<<11&4294967295|E>>>21),E=b+(R^_^y)+w[7]+4139469664&4294967295,b=R+(E<<16&4294967295|E>>>16),E=y+(b^R^_)+w[10]+3200236656&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^R)+w[13]+681279174&4294967295,_=y+(E<<4&4294967295|E>>>28),E=R+(_^y^b)+w[0]+3936430074&4294967295,R=_+(E<<11&4294967295|E>>>21),E=b+(R^_^y)+w[3]+3572445317&4294967295,b=R+(E<<16&4294967295|E>>>16),E=y+(b^R^_)+w[6]+76029189&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^R)+w[9]+3654602809&4294967295,_=y+(E<<4&4294967295|E>>>28),E=R+(_^y^b)+w[12]+3873151461&4294967295,R=_+(E<<11&4294967295|E>>>21),E=b+(R^_^y)+w[15]+530742520&4294967295,b=R+(E<<16&4294967295|E>>>16),E=y+(b^R^_)+w[2]+3299628645&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(b^(y|~R))+w[0]+4096336452&4294967295,_=y+(E<<6&4294967295|E>>>26),E=R+(y^(_|~b))+w[7]+1126891415&4294967295,R=_+(E<<10&4294967295|E>>>22),E=b+(_^(R|~y))+w[14]+2878612391&4294967295,b=R+(E<<15&4294967295|E>>>17),E=y+(R^(b|~_))+w[5]+4237533241&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~R))+w[12]+1700485571&4294967295,_=y+(E<<6&4294967295|E>>>26),E=R+(y^(_|~b))+w[3]+2399980690&4294967295,R=_+(E<<10&4294967295|E>>>22),E=b+(_^(R|~y))+w[10]+4293915773&4294967295,b=R+(E<<15&4294967295|E>>>17),E=y+(R^(b|~_))+w[1]+2240044497&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~R))+w[8]+1873313359&4294967295,_=y+(E<<6&4294967295|E>>>26),E=R+(y^(_|~b))+w[15]+4264355552&4294967295,R=_+(E<<10&4294967295|E>>>22),E=b+(_^(R|~y))+w[6]+2734768916&4294967295,b=R+(E<<15&4294967295|E>>>17),E=y+(R^(b|~_))+w[13]+1309151649&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~R))+w[4]+4149444226&4294967295,_=y+(E<<6&4294967295|E>>>26),E=R+(y^(_|~b))+w[11]+3174756917&4294967295,R=_+(E<<10&4294967295|E>>>22),E=b+(_^(R|~y))+w[2]+718787259&4294967295,b=R+(E<<15&4294967295|E>>>17),E=y+(R^(b|~_))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var y=_-this.blockSize,w=this.B,b=this.h,R=0;R<_;){if(b==0)for(;R<=y;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<_;)if(w[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,w),b=0;break}}else for(;R<_;)if(w[b++]=A[R++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var y=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=y&255,y/=256;for(this.u(A),A=Array(16),_=y=0;4>_;++_)for(var w=0;32>w;w+=8)A[y++]=this.g[_]>>>w&255;return A};function i(A,_){var y=c;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=_(A)}function a(A,_){this.h=_;for(var y=[],w=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;w&&R==_||(y[b]=R,w=!1)}this.g=y}var c={};function l(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return k(h(-A));for(var _=[],y=1,w=0;A>=y;w++)_[w]=A/y|0,y*=4294967296;return new a(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return k(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),w=m,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),E=parseInt(A.substring(b,b+R),_);8>R?(R=h(Math.pow(_,R)),w=w.j(R).add(h(E))):(w=w.j(y),w=w.add(h(E)))}return w}var m=l(0),g=l(1),I=l(16777216);t=a.prototype,t.m=function(){if(N(this))return-k(this).m();for(var A=0,_=1,y=0;y<this.g.length;y++){var w=this.i(y);A+=(0<=w?w:4294967296+w)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(N(this))return"-"+k(this).toString(A);for(var _=h(Math.pow(A,6)),y=this,w="";;){var b=z(y,_).g;y=F(y,b.j(_));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=b,P(y))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=F(this,A),N(A)?-1:P(A)?0:1};function k(A){for(var _=A.g.length,y=[],w=0;w<_;w++)y[w]=~A.g[w];return new a(y,~A.h).add(g)}t.abs=function(){return N(this)?k(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0,b=0;b<=_;b++){var R=w+(this.i(b)&65535)+(A.i(b)&65535),E=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=E>>>16,R&=65535,E&=65535,y[b]=E<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function F(A,_){return A.add(k(_))}t.j=function(A){if(P(this)||P(A))return m;if(N(this))return N(A)?k(this).j(k(A)):k(k(this).j(A));if(N(A))return k(this.j(k(A)));if(0>this.l(I)&&0>A.l(I))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,y=[],w=0;w<2*_;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var R=this.i(w)>>>16,E=this.i(w)&65535,rt=A.i(b)>>>16,Je=A.i(b)&65535;y[2*w+2*b]+=E*Je,q(y,2*w+2*b),y[2*w+2*b+1]+=R*Je,q(y,2*w+2*b+1),y[2*w+2*b+1]+=E*rt,q(y,2*w+2*b+1),y[2*w+2*b+2]+=R*rt,q(y,2*w+2*b+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new a(y,0)};function q(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function Z(A,_){this.g=A,this.h=_}function z(A,_){if(P(_))throw Error("division by zero");if(P(A))return new Z(m,m);if(N(A))return _=z(k(A),_),new Z(k(_.g),k(_.h));if(N(_))return _=z(A,k(_)),new Z(k(_.g),_.h);if(30<A.g.length){if(N(A)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var y=g,w=_;0>=w.l(A);)y=he(y),w=he(w);var b=ge(y,1),R=ge(w,1);for(w=ge(w,2),y=ge(y,2);!P(w);){var E=R.add(w);0>=E.l(A)&&(b=b.add(y),R=E),w=ge(w,1),y=ge(y,1)}return _=F(A,b.j(_)),new Z(b,_)}for(b=m;0<=A.l(_);){for(y=Math.max(1,Math.floor(A.m()/_.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(y),E=R.j(_);N(E)||0<E.l(A);)y-=w,R=h(y),E=R.j(_);P(R)&&(R=g),b=b.add(R),A=F(A,E)}return new Z(b,A)}t.A=function(A){return z(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)&A.i(w);return new a(y,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)|A.i(w);return new a(y,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)^A.i(w);return new a(y,this.h^A.h)};function he(A){for(var _=A.g.length+1,y=[],w=0;w<_;w++)y[w]=A.i(w)<<1|A.i(w-1)>>>31;return new a(y,A.h)}function ge(A,_){var y=_>>5;_%=32;for(var w=A.g.length-y,b=[],R=0;R<w;R++)b[R]=0<_?A.i(R+y)>>>_|A.i(R+y+1)<<32-_:A.i(R+y);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,lr=a}).apply(typeof sd<"u"?sd:typeof self<"u"?self:typeof window<"u"?window:{});var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vp,Mp,Ls,Lp,lo,Ec,Up,Fp,Bp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wi=="object"&&Wi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in f))break e;f=f[S]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,S={next:function(){if(!p&&f<o.length){var O=f++;return{value:u(O,o[O]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function m(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function g(o,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,g.apply(null,arguments)}function I(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,S,O){for(var $=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)$[xe-2]=arguments[xe];return u.prototype[S].apply(p,$)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function k(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(l(p)){const S=o.length||0,O=p.length||0;o.length=S+O;for(let $=0;$<O;$++)o[S+$]=p[$]}else o.push(p)}}class F{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function q(o){return/^[\s\xa0]*$/.test(o)}function Z(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var he=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function ge(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function A(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let f,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(f in p)o[f]=p[f];for(let O=0;O<y.length;O++)f=y[O],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function R(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class rt{constructor(){this.h=this.g=null}add(u,f){const p=Je.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Je=new F(()=>new Ie,o=>o.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,_e=!1,Ct=new rt,xt=()=>{const o=c.Promise.resolve(void 0);Te=()=>{o.then(kt)}};var kt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){R(f)}var u=Je;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}_e=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var En=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o}();function Ht(o,u){if(Be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(he){e:{try{z(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ze[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ht.aa.h.call(this)}}P(Ht,Be);var Ze={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),W=0;function G(o,u,f,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=S,this.key=++W,this.da=this.fa=!1}function ee(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ye(o){this.src=o,this.g={},this.h=0}ye.prototype.add=function(o,u,f,p,S){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var $=T(o,u,p,S);return-1<$?(u=o[$],f||(u.fa=!1)):(u=new G(u,this.src,O,!!p,S),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var p=o.g[f],S=Array.prototype.indexOf.call(p,u,void 0),O;(O=0<=S)&&Array.prototype.splice.call(p,S,1),O&&(ee(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function T(o,u,f,p){for(var S=0;S<o.length;++S){var O=o[S];if(!O.da&&O.listener==u&&O.capture==!!f&&O.ha==p)return S}return-1}var C="closure_lm_"+(1e6*Math.random()|0),D={};function V(o,u,f,p,S){if(p&&p.once)return j(o,u,f,p,S);if(Array.isArray(u)){for(var O=0;O<u.length;O++)V(o,u[O],f,p,S);return null}return f=pe(f),o&&o[x]?o.K(u,f,h(p)?!!p.capture:!!p,S):M(o,u,f,!1,p,S)}function M(o,u,f,p,S,O){if(!u)throw Error("Invalid event type");var $=h(S)?!!S.capture:!!S,xe=te(o);if(xe||(o[C]=xe=new ye(o)),f=xe.add(u,f,p,$,O),f.proxy)return f;if(p=K(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)En||(S=$),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(ne(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function o(f){return u.call(o.src,o.listener,f)}const u=X;return o}function j(o,u,f,p,S){if(Array.isArray(u)){for(var O=0;O<u.length;O++)j(o,u[O],f,p,S);return null}return f=pe(f),o&&o[x]?o.L(u,f,h(p)?!!p.capture:!!p,S):M(o,u,f,!0,p,S)}function H(o,u,f,p,S){if(Array.isArray(u))for(var O=0;O<u.length;O++)H(o,u[O],f,p,S);else p=h(p)?!!p.capture:!!p,f=pe(f),o&&o[x]?(o=o.i,u=String(u).toString(),u in o.g&&(O=o.g[u],f=T(O,f,p,S),-1<f&&(ee(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete o.g[u],o.h--)))):o&&(o=te(o))&&(u=o.g[u.toString()],o=-1,u&&(o=T(u,f,p,S)),(f=-1<o?u[o]:null)&&L(f))}function L(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[x])v(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(ne(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=te(u))?(v(f,o),f.h==0&&(f.src=null,u[C]=null)):ee(o)}}}function ne(o){return o in D?D[o]:D[o]="on"+o}function X(o,u){if(o.da)o=!0;else{u=new Ht(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&L(o),o=f.call(p,u)}return o}function te(o){return o=o[C],o instanceof ye?o:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(o){return typeof o=="function"?o:(o[ie]||(o[ie]=function(u){return o.handleEvent(u)}),o[ie])}function ce(){Fe.call(this),this.i=new ye(this),this.M=this,this.F=null}P(ce,Fe),ce.prototype[x]=!0,ce.prototype.removeEventListener=function(o,u,f,p){H(this,o,u,f,p)};function ae(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Be(u,o);else if(u instanceof Be)u.target=u.target||o;else{var S=u;u=new Be(p,o),w(u,S)}if(S=!0,f)for(var O=f.length-1;0<=O;O--){var $=u.g=f[O];S=Me($,p,!0,u)&&S}if($=u.g=o,S=Me($,p,!0,u)&&S,S=Me($,p,!1,u)&&S,f)for(O=0;O<f.length;O++)$=u.g=f[O],S=Me($,p,!1,u)&&S}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)ee(f[p]);delete o.g[u],o.h--}}this.F=null},ce.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},ce.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function Me(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,O=0;O<u.length;++O){var $=u[O];if($&&!$.da&&$.capture==f){var xe=$.listener,st=$.ha||$.src;$.fa&&v(o.i,$),S=xe.call(st,p)!==!1&&S}}return S&&!p.defaultPrevented}function At(o,u,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function tn(o){o.g=At(()=>{o.g=null,o.i&&(o.i=!1,tn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ri extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:tn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vt(o){Fe.call(this),this.h=o,this.g={}}P(Vt,Fe);var _s=[];function ht(o){ge(o.g,function(u,f){this.g.hasOwnProperty(f)&&L(u)},o),o.g={}}Vt.prototype.N=function(){Vt.aa.N.call(this),ht(this)},Vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bt=c.JSON.stringify,Si=c.JSON.parse,Cg=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ga(){}ga.prototype.h=null;function nu(o){return o.h||(o.h=o.i())}function ru(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _a(){Be.call(this,"d")}P(_a,Be);function ya(){Be.call(this,"c")}P(ya,Be);var Xn={},su=null;function Ci(){return su=su||new ce}Xn.La="serverreachability";function iu(o){Be.call(this,Xn.La,o)}P(iu,Be);function vs(o){const u=Ci();ae(u,new iu(u))}Xn.STAT_EVENT="statevent";function ou(o,u){Be.call(this,Xn.STAT_EVENT,o),this.stat=u}P(ou,Be);function Tt(o){const u=Ci();ae(u,new ou(u,o))}Xn.Ma="timingevent";function au(o,u){Be.call(this,Xn.Ma,o),this.size=u}P(au,Be);function Es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function Pg(o,u,f,p,S,O){o.info(function(){if(o.g)if(O)for(var $="",xe=O.split("&"),st=0;st<xe.length;st++){var Se=xe[st].split("=");if(1<Se.length){var dt=Se[0];Se=Se[1];var ft=dt.split("_");$=2<=ft.length&&ft[1]=="type"?$+(dt+"="+Se+"&"):$+(dt+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+f+`
`+$})}function Og(o,u,f,p,S,O,$){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+f+`
`+O+" "+$})}function Ir(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+kg(o,f)+(p?" "+p:"")})}function Ng(o,u){o.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function kg(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var O=S[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<S.length;$++)S[$]=""}}}}return bt(f)}catch{return u}}var Pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},va;function Oi(){}P(Oi,ga),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},va=new Oi;function In(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new Vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lu}function lu(){this.i=null,this.g="",this.h=!1}var uu={},Ea={};function Ia(o,u,f){o.L=1,o.v=xi(nn(u)),o.m=f,o.P=!0,hu(o,null)}function hu(o,u){o.F=Date.now(),Ni(o),o.A=nn(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),bu(f.i,"t",p),o.C=0,f=o.j.J,o.h=new lu,o.g=Hu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ri(g(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(_s[0]=S.toString()),S=_s);for(var O=0;O<S.length;O++){var $=V(f,S[O],p||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),vs(),Pg(o.i,o.u,o.A,o.l,o.R,o.m)}In.prototype.ca=function(o){o=o.target;const u=this.M;u&&rn(o)==3?u.j():this.Y(o)},In.prototype.Y=function(o){try{if(o==this.g)e:{const ft=rn(this.g);var u=this.g.Ba();const Ar=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||ku(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Ar?vs(3):vs(2)),Ta(this);var f=this.g.Z();this.X=f;t:if(du(this)){var p=ku(this.g);o="";var S=p.length,O=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Ts(this);var $="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(O&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,Og(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,st=this.g;if((xe=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(xe)){var Se=xe;break t}}Se=null}if(f=Se)Ir(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wa(this,f);else{this.o=!1,this.s=3,Tt(12),Yn(this),Ts(this);break e}}if(this.P){f=!0;let Mt;for(;!this.J&&this.C<$.length;)if(Mt=Dg(this,$),Mt==Ea){ft==4&&(this.s=4,Tt(14),f=!1),Ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==uu){this.s=4,Tt(15),Ir(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Ir(this.i,this.l,Mt,null),wa(this,Mt);if(du(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||$.length!=0||this.h.h||(this.s=1,Tt(16),f=!1),this.o=this.o&&f,!f)Ir(this.i,this.l,$,"[Invalid Chunked Response]"),Yn(this),Ts(this);else if(0<$.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Pa(dt),dt.M=!0,Tt(11))}}else Ir(this.i,this.l,$,null),wa(this,$);ft==4&&Yn(this),this.o&&!this.J&&(ft==4?Fu(this.j,this):(this.o=!1,Ni(this)))}else Xg(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Yn(this),Ts(this)}}}catch{}finally{}};function du(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Dg(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?Ea:(f=Number(u.substring(f,p)),isNaN(f)?uu:(p+=1,p+f>u.length?Ea:(u=u.slice(p,p+f),o.C=p+f,u)))}In.prototype.cancel=function(){this.J=!0,Yn(this)};function Ni(o){o.S=Date.now()+o.I,fu(o,o.I)}function fu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Es(g(o.ba,o),u)}function Ta(o){o.B&&(c.clearTimeout(o.B),o.B=null)}In.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ng(this.i,this.A),this.L!=2&&(vs(),Tt(17)),Yn(this),this.s=2,Ts(this)):fu(this,this.S-o)};function Ts(o){o.j.G==0||o.J||Fu(o.j,o)}function Yn(o){Ta(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ht(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function wa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Aa(f.h,o))){if(!o.K&&Aa(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Fi(f),Li(f);else break e;Ca(f),Tt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Es(g(f.Za,f),6e3));if(1>=gu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Zn(f,11)}else if((o.K||f.g==o)&&Fi(f),!q(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Se=S[u];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const dt=Se[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=Se[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Ar=Se[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(p=1.5*Ar,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Mt=o.g;if(Mt){const ji=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var O=p.h;O.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ba(O,O.h),O.h=null))}if(p.D){const Oa=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Oa&&(p.ya=Oa,Le(p.I,p.D,Oa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var $=o;if(p.qa=$u(p,p.J?p.ia:null,p.W),$.K){_u(p.h,$);var xe=$,st=p.L;st&&(xe.I=st),xe.B&&(Ta(xe),Ni(xe)),p.g=$}else Lu(p);0<f.i.length&&Ui(f)}else Se[0]!="stop"&&Se[0]!="close"||Zn(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Zn(f,7):Sa(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}vs(4)}catch{}}var xg=class{constructor(o,u){this.g=o,this.map=u}};function pu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function gu(o){return o.h?1:o.g?o.g.size:0}function Aa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ba(o,u){o.g?o.g.add(u):o.h=u}function _u(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}pu.prototype.cancel=function(){if(this.i=yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function yu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function Vg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function Mg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function vu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Mg(o),p=Vg(o),S=p.length,O=0;O<S;O++)u.call(void 0,p[O],f&&f[O],o)}var Eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lg(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),S=null;if(0<=p){var O=o[f].substring(0,p);S=o[f].substring(p+1)}else O=o[f];u(O,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Jn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jn){this.h=o.h,ki(this,o.j),this.o=o.o,this.g=o.g,Di(this,o.s),this.l=o.l;var u=o.i,f=new bs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Iu(this,f),this.m=o.m}else o&&(u=String(o).match(Eu))?(this.h=!1,ki(this,u[1]||"",!0),this.o=ws(u[2]||""),this.g=ws(u[3]||"",!0),Di(this,u[4]),this.l=ws(u[5]||"",!0),Iu(this,u[6]||"",!0),this.m=ws(u[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}Jn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(As(u,Tu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(As(u,Tu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(As(f,f.charAt(0)=="/"?Bg:Fg,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",As(f,$g)),o.join("")};function nn(o){return new Jn(o)}function ki(o,u,f){o.j=f?ws(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Di(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Iu(o,u,f){u instanceof bs?(o.i=u,Hg(o.i,o.h)):(f||(u=As(u,jg)),o.i=new bs(u,o.h))}function Le(o,u,f){o.i.set(u,f)}function xi(o){return Le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ws(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function As(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Ug),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ug(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Tu=/[#\/\?@]/g,Fg=/[#\?:]/g,Bg=/[#\?]/g,jg=/[#\?@]/g,$g=/#/g;function bs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&Lg(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=bs.prototype,t.add=function(o,u){Tn(this),this.i=null,o=Tr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function wu(o,u){Tn(o),u=Tr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Au(o,u){return Tn(o),u=Tr(o,u),o.g.has(u)}t.forEach=function(o,u){Tn(this),this.g.forEach(function(f,p){f.forEach(function(S){o.call(u,S,p,this)},this)},this)},t.na=function(){Tn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const S=o[p];for(let O=0;O<S.length;O++)f.push(u[p])}return f},t.V=function(o){Tn(this);let u=[];if(typeof o=="string")Au(this,o)&&(u=u.concat(this.g.get(Tr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Tn(this),this.i=null,o=Tr(this,o),Au(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function bu(o,u,f){wu(o,u),0<f.length&&(o.i=null,o.g.set(Tr(o,u),N(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const O=encodeURIComponent(String(p)),$=this.V(p);for(p=0;p<$.length;p++){var S=O;$[p]!==""&&(S+="="+encodeURIComponent(String($[p]))),o.push(S)}}return this.i=o.join("&")};function Tr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Hg(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(f,p){var S=p.toLowerCase();p!=S&&(wu(this,p),bu(this,S,f))},o)),o.j=u}function qg(o,u){const f=new Is;if(c.Image){const p=new Image;p.onload=I(wn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=I(wn,f,"TestLoadImage: error",!1,u,p),p.onabort=I(wn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=I(wn,f,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Gg(o,u){const f=new Is,p=new AbortController,S=setTimeout(()=>{p.abort(),wn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(O=>{clearTimeout(S),O.ok?wn(f,"TestPingServer: ok",!0,u):wn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),wn(f,"TestPingServer: error",!1,u)})}function wn(o,u,f,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(f)}catch{}}function zg(){this.g=new Cg}function Kg(o,u,f){const p=f||"";try{vu(o,function(S,O){let $=S;h(S)&&($=bt(S)),u.push(p+O+"="+encodeURIComponent($))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function Rs(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Rs,ga),Rs.prototype.g=function(){return new Vi(this.l,this.j)},Rs.prototype.i=function(o){return function(){return o}}({});function Vi(o,u){ce.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Vi,ce),t=Vi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Cs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ru(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ru(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):Cs(this),this.readyState==3&&Ru(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},t.Qa=function(o){this.g&&(this.response=o,Ss(this))},t.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Su(o){let u="";return ge(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Ra(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Su(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Le(o,u,f))}function $e(o){ce.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P($e,ce);var Wg=/^https?$/i,Qg=["POST","PUT"];t=$e.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():va.g(),this.v=this.o?nu(this.o):nu(va),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(O){Cu(this,O);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)f.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())f.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Qg,u,void 0))||p||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of f)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nu(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){Cu(this,O)}};function Cu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Pu(o),Mi(o)}function Pu(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),Mi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ou(this):this.bb())},t.bb=function(){Ou(this)};function Ou(o){if(o.h&&typeof a<"u"&&(!o.v[1]||rn(o)!=4||o.Z()!=2)){if(o.u&&rn(o)==4)At(o.Ea,0,o);else if(ae(o,"readystatechange"),rn(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=$===0){var S=String(o.D).match(Eu)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),p=!Wg.test(S?S.toLowerCase():"")}f=p}if(f)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var O=2<rn(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",Pu(o)}}finally{Mi(o)}}}}function Mi(o,u){if(o.g){Nu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{f.onreadystatechange=p}catch{}}}function Nu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function rn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Si(u)}};function ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xg(o){const u={};o=(o.g&&2<=rn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(q(o[p]))continue;var f=b(o[p]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=u[S]||[];u[S]=O,O.push(f)}A(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Du(o){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,o),this.cb=Ps("retryDelaySeedMs",1e4,o),this.Wa=Ps("forwardChannelMaxRetries",2,o),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new pu(o&&o.concurrentRequestLimit),this.Da=new zg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Du.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,p){Tt(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=$u(this,null,this.W),Ui(this)};function Sa(o){if(xu(o),o.G==3){var u=o.U++,f=nn(o.I);if(Le(f,"SID",o.K),Le(f,"RID",u),Le(f,"TYPE","terminate"),Os(o,f),u=new In(o,o.j,u),u.L=2,u.v=xi(nn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Hu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ni(u)}ju(o)}function Li(o){o.g&&(Pa(o),o.g.cancel(),o.g=null)}function xu(o){Li(o),o.u&&(c.clearTimeout(o.u),o.u=null),Fi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ui(o){if(!mu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Te||xt(),_e||(Te(),_e=!0),Ct.add(u,o),o.B=0}}function Yg(o,u){return gu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Es(g(o.Ga,o,u),Bu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new In(this,this.j,o);let O=this.o;if(this.S&&(O?(O=_(O),w(O,this.S)):O=this.S),this.m!==null||this.O||(S.H=O,O=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Mu(this,S,u),f=nn(this.I),Le(f,"RID",o),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),Os(this,f),O&&(this.O?u="headers="+encodeURIComponent(String(Su(O)))+"&"+u:this.m&&Ra(f,this.m,O)),ba(this.h,S),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",u),Le(f,"SID","null"),S.T=!0,Ia(S,f,null)):Ia(S,f,u),this.G=2}}else this.G==3&&(o?Vu(this,o):this.i.length==0||mu(this.h)||Vu(this))};function Vu(o,u){var f;u?f=u.l:f=o.U++;const p=nn(o.I);Le(p,"SID",o.K),Le(p,"RID",f),Le(p,"AID",o.T),Os(o,p),o.m&&o.o&&Ra(p,o.m,o.o),f=new In(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Mu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ba(o.h,f),Ia(f,p,u)}function Os(o,u){o.H&&ge(o.H,function(f,p){Le(u,p,f)}),o.l&&vu({},function(f,p){Le(u,p,f)})}function Mu(o,u,f){f=Math.min(o.i.length,f);var p=o.l?g(o.l.Na,o.l,o):null;e:{var S=o.i;let O=-1;for(;;){const $=["count="+f];O==-1?0<f?(O=S[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let xe=!0;for(let st=0;st<f;st++){let Se=S[st].g;const dt=S[st].map;if(Se-=O,0>Se)O=Math.max(0,S[st].g-100),xe=!1;else try{Kg(dt,$,"req"+Se+"_")}catch{p&&p(dt)}}if(xe){p=$.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function Lu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Te||xt(),_e||(Te(),_e=!0),Ct.add(u,o),o.v=0}}function Ca(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Es(g(o.Fa,o),Bu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Uu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Es(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Li(this),Uu(this))};function Pa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Uu(o){o.g=new In(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=nn(o.qa);Le(u,"RID","rpc"),Le(u,"SID",o.K),Le(u,"AID",o.T),Le(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Le(u,"TO",o.ja),Le(u,"TYPE","xmlhttp"),Os(o,u),o.m&&o.o&&Ra(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=xi(nn(u)),f.m=null,f.P=!0,hu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Li(this),Ca(this),Tt(19))};function Fi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Fu(o,u){var f=null;if(o.g==u){Fi(o),Pa(o),o.g=null;var p=2}else if(Aa(o.h,u))f=u.D,_u(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=Ci(),ae(p,new au(p,f)),Ui(o)}else Lu(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&Yg(o,u)||p==2&&Ca(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),S){case 1:Zn(o,5);break;case 4:Zn(o,10);break;case 3:Zn(o,6);break;default:Zn(o,2)}}}function Bu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Zn(o,u){if(o.j.info("Error code "+u),u==2){var f=g(o.fb,o),p=o.Xa;const S=!p;p=new Jn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ki(p,"https"),xi(p),S?qg(p.toString(),f):Gg(p.toString(),f)}else Tt(2);o.G=0,o.l&&o.l.sa(u),ju(o),xu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function ju(o){if(o.G=0,o.ka=[],o.l){const u=yu(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function $u(o,u,f){var p=f instanceof Jn?nn(f):new Jn(f);if(p.g!="")u&&(p.g=u+"."+p.g),Di(p,p.s);else{var S=c.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var O=new Jn(null);p&&ki(O,p),u&&(O.g=u),S&&Di(O,S),f&&(O.l=f),p=O}return f=o.D,u=o.ya,f&&u&&Le(p,f,u),Le(p,"VER",o.la),Os(o,p),p}function Hu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new $e(new Rs({eb:f})):new $e(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qu(){}t=qu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bi(){}Bi.prototype.g=function(o,u){return new Pt(o,u)};function Pt(o,u){ce.call(this),this.g=new Du(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new wr(this)}P(Pt,ce),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Sa(this.g)},Pt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=bt(o),o=f);u.i.push(new xg(u.Ya++,o)),u.G==3&&Ui(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,Pt.aa.N.call(this)};function Gu(o){_a.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(Gu,_a);function zu(){ya.call(this),this.status=1}P(zu,ya);function wr(o){this.g=o}P(wr,qu),wr.prototype.ua=function(){ae(this.g,"a")},wr.prototype.ta=function(o){ae(this.g,new Gu(o))},wr.prototype.sa=function(o){ae(this.g,new zu)},wr.prototype.ra=function(){ae(this.g,"b")},Bi.prototype.createWebChannel=Bi.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Bp=function(){return new Bi},Fp=function(){return Ci()},Up=Xn,Ec={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pi.NO_ERROR=0,Pi.TIMEOUT=8,Pi.HTTP_ERROR=6,lo=Pi,cu.COMPLETE="complete",Lp=cu,ru.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",ce.prototype.listen=ce.prototype.K,Ls=ru,Mp=Rs,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Vp=$e}).apply(typeof Wi<"u"?Wi:typeof self<"u"?self:typeof window<"u"?window:{});const id="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let hs="10.12.1";/**
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
 */const gr=new dl("@firebase/firestore");function xs(){return gr.logLevel}function J(t,...e){if(gr.logLevel<=ve.DEBUG){const n=e.map(ml);gr.debug(`Firestore (${hs}): ${t}`,...n)}}function pn(t,...e){if(gr.logLevel<=ve.ERROR){const n=e.map(ml);gr.error(`Firestore (${hs}): ${t}`,...n)}}function Yr(t,...e){if(gr.logLevel<=ve.WARN){const n=e.map(ml);gr.warn(`Firestore (${hs}): ${t}`,...n)}}function ml(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function We(t,e){t||de()}function Re(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class fT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pT{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ur,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ur)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new jp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new mt(e)}}class mT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _T{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new _T(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function vT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ET{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Oe(t,e){return t<e?-1:t>e?1:0}function Jr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new tt(0,0))}static max(){return new le(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends oi{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const IT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends oi{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return IT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Y(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(je.fromString(e))}static fromName(e){return new se(je.fromString(e).popFirst(5))}static empty(){return new se(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new je(e.slice()))}}function TT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Gn(s,se.empty(),e)}function wT(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(le.min(),se.empty(),-1)}static max(){return new Gn(le.max(),se.empty(),-1)}}function AT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const bT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gl(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==bT)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ST(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _i(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class _l{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_l.oe=-1;function ea(t){return t==null}function Po(t){return t===0&&1/t==-1/0}function CT(t){return typeof t=="number"&&Number.isInteger(t)&&!Po(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $p(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ad(this.data.getIterator())}getIteratorFrom(e){return new ad(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class ad{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Hp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hp("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const PT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(We(!!t),typeof t=="string"){let e=0;const n=PT.exec(t);if(We(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function yl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vl(t){const e=t.mapValue.fields.__previous_value__;return yl(e)?vl(e):e}function ai(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class OT{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yl(t)?4:NT(t)?9007199254740991:10:de()}function en(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ai(t).isEqual(ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=zn(s.timestampValue),c=zn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ze(s.doubleValue),c=ze(i.doubleValue);return a===c?Po(a)===Po(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Jr(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(od(a)!==od(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!en(a[l],c[l])))return!1;return!0}(t,e);default:return de()}}function li(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Zr(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return Oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ze(i.integerValue||i.doubleValue),l=ze(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return cd(t.timestampValue,e.timestampValue);case 4:return cd(ai(t),ai(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(i,a){const c=_r(i),l=_r(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Oe(c[h],l[h]);if(d!==0)return d}return Oe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Oe(ze(i.latitude),ze(a.latitude));return c!==0?c:Oe(ze(i.longitude),ze(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,a){const c=i.values||[],l=a.values||[];for(let h=0;h<c.length&&h<l.length;++h){const d=Zr(c[h],l[h]);if(d)return d}return Oe(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===Xi.mapValue&&a===Xi.mapValue)return 0;if(i===Xi.mapValue)return 1;if(a===Xi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let m=0;m<l.length&&m<d.length;++m){const g=Oe(l[m],d[m]);if(g!==0)return g;const I=Zr(c[l[m]],h[d[m]]);if(I!==0)return I}return Oe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function cd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=zn(t),r=zn(e),s=Oe(n.seconds,r.seconds);return s!==0?s:Oe(n.nanos,r.nanos)}function es(t){return Ic(t)}function Ic(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ic(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ic(n.fields[a])}`;return s+"}"}(t.mapValue):de()}function ld(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tc(t){return!!t&&"integerValue"in t}function El(t){return!!t&&"arrayValue"in t}function ud(t){return!!t&&"nullValue"in t}function hd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=zs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(zs(this.value))}}/**
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
 */class gt{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,le.min(),le.min(),le.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,le.min(),le.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,le.min(),le.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oo{constructor(e,n){this.position=e,this.inclusive=n}}function dd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(a.referenceValue),n.key):r=Zr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ui{constructor(e,n="asc"){this.field=e,this.dir=n}}function kT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qp{}class Ke extends qp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xT(e,n,r):n==="array-contains"?new LT(e,r):n==="in"?new UT(e,r):n==="not-in"?new FT(e,r):n==="array-contains-any"?new BT(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VT(e,r):new MT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zr(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends qp{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $t(e,n)}matches(e){return Gp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gp(t){return t.op==="and"}function zp(t){return DT(t)&&Gp(t)}function DT(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function wc(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+es(t.value);if(zp(t))return t.filters.map(e=>wc(e)).join(",");{const e=t.filters.map(n=>wc(n)).join(",");return`${t.op}(${e})`}}function Kp(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Kp(a,s.filters[c]),!0):!1}(t,e):void de()}function Wp(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof $t?function(n){return n.op.toString()+" {"+n.getFilters().map(Wp).join(" ,")+"}"}(t):"Filter"}class xT extends Ke{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class VT extends Ke{constructor(e,n){super(e,"in",n),this.keys=Qp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MT extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=Qp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class LT extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return El(n)&&li(n.arrayValue,this.value)}}class UT extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&li(this.value.arrayValue,n)}}class FT extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!li(this.value.arrayValue,n)}}class BT extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!El(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>li(this.value.arrayValue,r))}}/**
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
 */class jT{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function pd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new jT(t,e,n,r,s,i,a)}function Il(t){const e=Re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ea(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=n}return e.ue}function Tl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fd(t.startAt,e.startAt)&&fd(t.endAt,e.endAt)}function Ac(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ds{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $T(t,e,n,r,s,i,a,c){return new ds(t,e,n,r,s,i,a,c)}function Xp(t){return new ds(t)}function md(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yp(t){return t.collectionGroup!==null}function Ks(t){const e=Re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ct(yt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ui(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new ui(yt.keyField(),r))}return e.ce}function Xt(t){const e=Re(t);return e.le||(e.le=HT(e,Ks(t))),e.le}function HT(t,e){if(t.limitType==="F")return pd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ui(s.field,i)});const n=t.endAt?new Oo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Oo(t.startAt.position,t.startAt.inclusive):null;return pd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bc(t,e){const n=t.filters.concat([e]);return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function No(t,e,n){return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ta(t,e){return Tl(Xt(t),Xt(e))&&t.limitType===e.limitType}function Jp(t){return`${Il(Xt(t))}|lt:${t.limitType}`}function Cr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Wp(s)).join(", ")}]`),ea(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>es(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function na(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ks(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=dd(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Ks(r),s)||r.endAt&&!function(a,c,l){const h=dd(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Ks(r),s))}(t,e)}function qT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zp(t){return(e,n)=>{let r=!1;for(const s of Ks(t)){const i=GT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GT(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Zr(l,h):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $p(this.inner)}size(){return this.innerSize}}/**
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
 */const zT=new qe(se.comparator);function Kn(){return zT}const em=new qe(se.comparator);function Us(...t){let e=em;for(const n of t)e=e.insert(n.key,n);return e}function KT(t){let e=em;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return Ws()}function tm(){return Ws()}function Ws(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const WT=new ct(se.comparator);function Ae(...t){let e=WT;for(const n of t)e=e.add(n);return e}const QT=new ct(Oe);function XT(){return QT}/**
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
 */function nm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function rm(t){return{integerValue:""+t}}function YT(t,e){return CT(e)?rm(e):nm(t,e)}/**
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
 */class ra{constructor(){this._=void 0}}function JT(t,e,n){return t instanceof Rc?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yl(i)&&(i=vl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof ko?sm(t,e):t instanceof Do?im(t,e):function(s,i){const a=ew(s,i),c=gd(a)+gd(s.Pe);return Tc(a)&&Tc(s.Pe)?rm(c):nm(s.serializer,c)}(t,e)}function ZT(t,e,n){return t instanceof ko?sm(t,e):t instanceof Do?im(t,e):n}function ew(t,e){return t instanceof Sc?function(r){return Tc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Rc extends ra{}class ko extends ra{constructor(e){super(),this.elements=e}}function sm(t,e){const n=om(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class Do extends ra{constructor(e){super(),this.elements=e}}function im(t,e){let n=om(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class Sc extends ra{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gd(t){return ze(t.integerValue||t.doubleValue)}function om(t){return El(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ko&&s instanceof ko||r instanceof Do&&s instanceof Do?Jr(r.elements,s.elements,en):r instanceof Sc&&s instanceof Sc?en(r.Pe,s.Pe):r instanceof Rc&&s instanceof Rc}(t.transform,e.transform)}class hr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wl{}function am(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rw(t.key,hr.none()):new Al(t.key,t.data,hr.none());{const n=t.data,r=Kt.empty();let s=new ct(yt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new sa(t.key,r,new Vn(s.toArray()),hr.none())}}function nw(t,e,n){t instanceof Al?function(s,i,a){const c=s.value.clone(),l=yd(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof sa?function(s,i,a){if(!uo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=yd(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(cm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Al?function(i,a,c,l){if(!uo(i.precondition,a))return c;const h=i.value.clone(),d=vd(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof sa?function(i,a,c,l){if(!uo(i.precondition,a))return c;const h=vd(i.fieldTransforms,l,a),d=a.data;return d.setAll(cm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,a,c){return uo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function _d(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jr(r,s,(i,a)=>tw(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Al extends wl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sa extends wl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yd(t,e,n){const r=new Map;We(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ZT(a,c,n[s]))}return r}function vd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,JT(i,a,e))}return r}class rw extends wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=am(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(n,r)=>_d(n,r))&&Jr(this.baseMutations,e.baseMutations,(n,r)=>_d(n,r))}}/**
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
 */class iw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ow{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,Ee;function lm(t){if(t===void 0)return pn("GRPC error has no .code"),B.UNKNOWN;switch(t){case Ge.OK:return B.OK;case Ge.CANCELLED:return B.CANCELLED;case Ge.UNKNOWN:return B.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return B.INTERNAL;case Ge.UNAVAILABLE:return B.UNAVAILABLE;case Ge.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ge.NOT_FOUND:return B.NOT_FOUND;case Ge.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ge.ABORTED:return B.ABORTED;case Ge.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ge.DATA_LOSS:return B.DATA_LOSS;default:return de()}}(Ee=Ge||(Ge={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function aw(){return new TextEncoder}/**
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
 */const cw=new lr([4294967295,4294967295],0);function Ed(t){const e=aw().encode(t),n=new xp;return n.update(e),new Uint8Array(n.digest())}function Id(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new lr([n,r],0),new lr([s,i],0)]}class bl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=lr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(lr.fromNumber(r)));return s.compare(cw)===1&&(s=new lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ed(e),[r,s]=Id(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new bl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=Ed(e),[r,s]=Id(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ia{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,vi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ia(le.min(),s,new qe(Oe),Kn(),Ae())}}class vi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vi(r,n,Ae(),Ae(),Ae())}}/**
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
 */class ho{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class um{constructor(e,n){this.targetId=e,this.me=n}}class hm{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Td{constructor(){this.fe=0,this.ge=Ad(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new vi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Ad()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lw{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=wd(),this.Qe=new qe(Oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ac(i))if(r===0){const a=new se(i.path);this.Ue(n,a,gt.newNoDocument(a,le.min()))}else We(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=_r(r).toUint8Array()}catch(l){if(l instanceof Hp)return Yr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bl(a,s,i)}catch(l){return Yr(l instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Ac(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,gt.newNoDocument(l,e))}i.be&&(n.set(a,i.Ce()),i.ve())}});let r=Ae();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ia(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=wd(),this.Qe=new qe(Oe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Td,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(Oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Td),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wd(){return new qe(se.comparator)}function Ad(){return new qe(se.comparator)}const uw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dw=(()=>({and:"AND",or:"OR"}))();class fw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cc(t,e){return t.useProto3Json||ea(e)?e:{value:e}}function Pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Mr(t){return We(!!t),le.fromTimestamp(function(n){const r=zn(n);return new tt(r.seconds,r.nanos)}(t))}function fm(t,e){return Oc(t,e).canonicalString()}function Oc(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pm(t){const e=je.fromString(t);return We(vm(e)),e}function Ga(t,e){const n=pm(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(gm(n))}function mm(t,e){return fm(t.databaseId,e)}function pw(t){const e=pm(t);return e.length===4?je.emptyPath():gm(e)}function bd(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gm(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mw(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(We(d===void 0||typeof d=="string"),It.fromBase64String(d||"")):(We(d===void 0||d instanceof Buffer||d instanceof Uint8Array),It.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?B.UNKNOWN:lm(h.code);return new Y(d,h.message||"")}(a);n=new hm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ga(t,r.document.name),i=Mr(r.document.updateTime),a=r.document.createTime?Mr(r.document.createTime):le.min(),c=new Kt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new ho(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ga(t,r.document),i=r.readTime?Mr(r.readTime):le.min(),a=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ho([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ga(t,r.document),i=r.removedTargetIds||[];n=new ho([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ow(s,i),c=r.targetId;n=new um(c,a)}}return n}function gw(t,e){return{documents:[mm(t,e.path)]}}function _w(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=mm(t,s);const i=function(h){if(h.length!==0)return ym($t.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:Pr(g.field),direction:Ew(g.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Cc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function yw(t){let e=pw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){We(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(m){const g=_m(m);return g instanceof $t&&zp(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(P){return new ui(Or(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(m){let g;return g=typeof m=="object"?m.value:m,ea(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(m){const g=!!m.before,I=m.values||[];return new Oo(I,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,I=m.values||[];return new Oo(I,g)}(n.endAt)),$T(e,s,a,i,c,"F",l,h)}function vw(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _m(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Or(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Or(n.unaryFilter.field);return Ke.create(a,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Or(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $t.create(n.compositeFilter.filters.map(r=>_m(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function Ew(t){return uw[t]}function Iw(t){return hw[t]}function Tw(t){return dw[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function Or(t){return yt.fromServerFormat(t.fieldPath)}function ym(t){return t instanceof Ke?function(n){if(n.op==="=="){if(hd(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NAN"}};if(ud(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hd(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NAN"}};if(ud(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(n.field),op:Iw(n.op),value:n.value}}}(t):t instanceof $t?function(n){const r=n.getFilters().map(s=>ym(s));return r.length===1?r[0]:{compositeFilter:{op:Tw(n.op),filters:r}}}(t):de()}function vm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mn{constructor(e,n,r,s,i=le.min(),a=le.min(),c=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ww{constructor(e){this.ct=e}}function Aw(t){const e=yw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?No(e,e.limit,"L"):e}/**
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
 */class bw{constructor(){this._n=new Rw}addToCollectionParentIndex(e,n){return this._n.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Gn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class Rw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(je.comparator)).toArray()}}/**
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
 */class ts{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ts(0)}static Ln(){return new ts(-1)}}/**
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
 */class Sw{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Cw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Pw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Vn.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Us();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=Kn();const a=Ws(),c=function(){return Ws()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof sa)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Qs(d.mutation,h,d.mutation.getFieldMask(),tt.now())):a.set(h.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var m;return c.set(h,new Cw(d,(m=a.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ws();let s=new qe((a,c)=>a-c),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Vn.empty();d=c.applyToLocalView(h,d),r.set(l,d);const m=(s.get(c.batchId)||Ae()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,m=tm();d.forEach(g=>{if(!i.has(g)){const I=am(n.get(g),r.get(g));I!==null&&m.set(g,I),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(or());let c=-1,l=i;return a.next(h=>U.forEach(h,(d,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ae())).next(d=>({batchId:c,changes:KT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Us();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,l=>{const h=function(m,g){return new ds(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,gt.newInvalidDocument(d)))});let c=Us();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&Qs(d.mutation,h,Vn.empty(),tt.now()),na(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class Ow{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return U.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Mr(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Aw(s.bundledQuery),readTime:Mr(s.readTime)}}(n)),U.resolve()}}/**
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
 */class Nw{constructor(){this.overlays=new qe(se.comparator),this.hr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=or(),i=n.length+1,a=new se(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=or(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=or(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return U.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new iw(n,r));let i=this.hr.get(n);i===void 0&&(i=Ae(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Rl{constructor(){this.Pr=new ct(et.Ir),this.Tr=new ct(et.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new et(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new se(new je([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new se(new je([])),r=new et(n,e),s=new et(n,e+1);let i=Ae();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new et(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return se.comparator(e.key,n.key)||Oe(e.pr,n.pr)}static Er(e,n){return Oe(e.pr,n.pr)||se.comparator(e.key,n.key)}}/**
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
 */class kw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ct(et.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sw(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.wr=this.wr.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,n){return U.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const c=this.Sr(a.pr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(Oe);return n.forEach(s=>{const i=new et(s,0),a=new et(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],c=>{r=r.add(c.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const a=new et(new se(i),0);let c=new ct(Oe);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.pr)),!0)},a),U.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){We(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new et(n,0),s=this.wr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Dw{constructor(e){this.vr=e,this.docs=function(){return new qe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const a=n.path,c=new se(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||AT(wT(d),r)<=0||(s.has(d.key)||na(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Fr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xw(this)}getSize(e){return U.resolve(this.size)}}class xw extends Sw{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Vw{constructor(e){this.persistence=e,this.Mr=new fs(n=>Il(n),Tl),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Rl,this.targetCount=0,this.Lr=ts.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),U.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.qn(n),U.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Nr.containsKey(n))}}/**
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
 */class Mw{constructor(e,n){this.Br={},this.overlays={},this.kr=new _l(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Vw(this),this.indexManager=new bw,this.remoteDocumentCache=function(s){return new Dw(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ww(n),this.$r=new Ow(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new kw(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new Lw(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return U.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Lw extends RT{constructor(e){super(),this.currentSequenceNumber=e}}class Sl{constructor(e){this.persistence=e,this.zr=new Rl,this.jr=null}static Hr(e){return new Sl(e)}get Jr(){if(this.jr)return this.jr;throw de()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),U.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const s=se.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return U.or([()=>U.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Cl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cl(e,n.fromCache,r,s)}}/**
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
 */class Uw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Fw{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return W0()?8:ST(ut())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Uw;return this.Ji(e,n,a).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,a,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(xs()<=ve.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),U.resolve()):(xs()<=ve.DEBUG&&J("QueryEngine","Query:",Cr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(xs()<=ve.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):U.resolve())}ji(e,n){if(md(n))return U.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=No(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ae(...i);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Zi(n,c);return this.Xi(n,h,a,l.readTime)?this.ji(e,No(n,null,"F")):this.es(e,h,n,l)}))})))}Hi(e,n,r,s){return md(n)||s.isEqual(le.min())?U.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(n,i);return this.Xi(n,a,r,s)?U.resolve(null):(xs()<=ve.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(n)),this.es(e,a,n,TT(s,-1)).next(c=>c))})}Zi(e,n){let r=new ct(Zp(e));return n.forEach((s,i)=>{na(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return xs()<=ve.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.zi.getDocumentsMatchingQuery(e,n,Gn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class Bw{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new qe(Oe),this.rs=new fs(i=>Il(i),Tl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pw(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function jw(t,e,n,r){return new Bw(t,e,n,r)}async function Em(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Ae();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({us:h,removedBatchIds:a,addedBatchIds:c}))})})}function Im(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function $w(t,e){const n=Re(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,m)=>{const g=s.get(m);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,m).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,m)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(It.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(m,I),function(N,k,F){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,I,d)&&c.push(n.Qr.updateTargetData(i,I))});let l=Kn(),h=Ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Hw(i,a,e.documentUpdates).next(d=>{l=d.cs,h=d.ls})),!r.isEqual(le.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(m=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return U.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ns=s,i))}function Hw(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Kn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):J("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{cs:a,ls:s}})}function qw(t,e){const n=Re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Qr.allocateTargetId(r).next(a=>(s=new Mn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Nc(t,e,n){const r=Re(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_i(a))throw a;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Rd(t,e,n){const r=Re(t);let s=le.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const m=Re(l),g=m.rs.get(d);return g!==void 0?U.resolve(m.ns.get(g)):m.Qr.getTargetData(h,d)}(r,a,Xt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,n?s:le.min(),n?i:Ae())).next(c=>(Gw(r,qT(e),c),{documents:c,hs:i})))}function Gw(t,e,n){let r=t.ss.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Sd{constructor(){this.activeTargetIds=XT()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zw{constructor(){this.no=new Sd,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Sd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Kw{io(e){}shutdown(){}}/**
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
 */class Cd{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yi=null;function za(){return Yi===null?Yi=function(){return 268435456+Math.round(2147483648*Math.random())}():Yi++,"0x"+Yi.toString(16)}/**
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
 */const Ww={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Qw{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const pt="WebChannelConnection";class Xw extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,a){const c=za(),l=this.vo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,a),this.Mo(n,l,h,s).then(d=>(J("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Yr("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,a,c){return this.Co(n,r,s,i,a)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}vo(n,r){const s=Ww[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=za();return new Promise((a,c)=>{const l=new Vp;l.setWithCredentials(!0),l.listenOnce(Lp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case lo.NO_ERROR:const d=l.getResponseJson();J(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case lo.TIMEOUT:J(pt,`RPC '${e}' ${i} timed out`),c(new Y(B.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const m=l.getStatus();if(J(pt,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const P=function(k){const F=k.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(F)>=0?F:B.UNKNOWN}(I.status);c(new Y(P,I.message))}else c(new Y(B.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(B.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{J(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);J(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Oo(e,n,r){const s=za(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bp(),c=Fp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Mp({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");J(pt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const m=a.createWebChannel(d,l);let g=!1,I=!1;const P=new Qw({lo:k=>{I?J(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(J(pt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),J(pt,`RPC '${e}' stream ${s} sending:`,k),m.send(k))},ho:()=>m.close()}),N=(k,F,q)=>{k.listen(F,Z=>{try{q(Z)}catch(z){setTimeout(()=>{throw z},0)}})};return N(m,Ls.EventType.OPEN,()=>{I||(J(pt,`RPC '${e}' stream ${s} transport opened.`),P.mo())}),N(m,Ls.EventType.CLOSE,()=>{I||(I=!0,J(pt,`RPC '${e}' stream ${s} transport closed`),P.po())}),N(m,Ls.EventType.ERROR,k=>{I||(I=!0,Yr(pt,`RPC '${e}' stream ${s} transport errored:`,k),P.po(new Y(B.UNAVAILABLE,"The operation could not be completed")))}),N(m,Ls.EventType.MESSAGE,k=>{var F;if(!I){const q=k.data[0];We(!!q);const Z=q,z=Z.error||((F=Z[0])===null||F===void 0?void 0:F.error);if(z){J(pt,`RPC '${e}' stream ${s} received error:`,z);const he=z.status;let ge=function(y){const w=Ge[y];if(w!==void 0)return lm(w)}(he),A=z.message;ge===void 0&&(ge=B.INTERNAL,A="Unknown error status: "+he+" with message "+z.message),I=!0,P.po(new Y(ge,A)),m.close()}else J(pt,`RPC '${e}' stream ${s} received:`,q),P.yo(q)}}),N(c,Up.STAT_EVENT,k=>{k.stat===Ec.PROXY?J(pt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Ec.NOPROXY&&J(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function Ka(){return typeof document<"u"?document:null}/**
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
 */function oa(t){return new fw(t,!0)}/**
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
 */class Tm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Yw{constructor(e,n,r,s,i,a,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Tm(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new Y(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jw extends Yw{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=mw(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?Mr(a.readTime):le.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=bd(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=Ac(l)?{documents:gw(i,l)}:{query:_w(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=dm(i,a.resumeToken);const h=Cc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){c.readTime=Pc(i,a.snapshotVersion.toTimestamp());const h=Cc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=vw(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=bd(this.serializer),n.removeTarget=e,this.i_(n)}}/**
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
 */class Zw extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,Oc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(B.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,Oc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(B.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class eA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(pn(n),this.y_=!1):J("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class tA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{Ii(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=Re(l);h.M_.add(4),await Ei(h),h.N_.set("Unknown"),h.M_.delete(4),await aa(h)}(this))})}),this.N_=new eA(r,s)}}async function aa(t){if(Ii(t))for(const e of t.x_)await e(!0)}async function Ei(t){for(const e of t.x_)await e(!1)}function wm(t,e){const n=Re(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),kl(n)?Nl(n):ps(n).Xo()&&Ol(n,e))}function Pl(t,e){const n=Re(t),r=ps(n);n.F_.delete(e),r.Xo()&&Am(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ii(n)&&n.N_.set("Unknown"))}function Ol(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).P_(e)}function Am(t,e){t.L_.xe(e),ps(t).I_(e)}function Nl(t){t.L_=new lw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.N_.w_()}function kl(t){return Ii(t)&&!ps(t).Zo()&&t.F_.size>0}function Ii(t){return Re(t).M_.size===0}function bm(t){t.L_=void 0}async function nA(t){t.N_.set("Online")}async function rA(t){t.F_.forEach((e,n)=>{Ol(t,e)})}async function sA(t,e){bm(t),kl(t)?(t.N_.D_(e),Nl(t)):t.N_.set("Unknown")}async function iA(t,e,n){if(t.N_.set("Online"),e instanceof hm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pd(t,r)}else if(e instanceof ho?t.L_.Ke(e):e instanceof um?t.L_.He(e):t.L_.We(e),!n.isEqual(le.min()))try{const r=await Im(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.L_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(h);d&&i.F_.set(h,d.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(It.EMPTY_BYTE_STRING,d.snapshotVersion)),Am(i,l);const m=new Mn(d.target,l,h,d.sequenceNumber);Ol(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Pd(t,r)}}async function Pd(t,e,n){if(!_i(e))throw e;t.M_.add(1),await Ei(t),t.N_.set("Offline"),n||(n=()=>Im(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await aa(t)})}async function Od(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Ii(n);n.M_.add(3),await Ei(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await aa(n)}async function oA(t,e){const n=Re(t);e?(n.M_.delete(2),await aa(n)):e||(n.M_.add(2),await Ei(n),n.N_.set("Unknown"))}function ps(t){return t.B_||(t.B_=function(n,r,s){const i=Re(n);return i.f_(),new Jw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:nA.bind(null,t),To:rA.bind(null,t),Ao:sA.bind(null,t),h_:iA.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),kl(t)?Nl(t):t.N_.set("Unknown")):(await t.B_.stop(),bm(t))})),t.B_}/**
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
 */class Dl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Dl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rm(t,e){if(pn("AsyncQueue",`${e}: ${t}`),_i(t))return new Y(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Lr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Lr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Lr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Nd{constructor(){this.q_=new qe(se.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):de():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new ns(e,n,Lr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class aA{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class cA{constructor(){this.queries=new fs(e=>Jp(e),ta),this.onlineState="Unknown",this.z_=new Set}}async function lA(t,e){const n=Re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new aA,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Rm(a,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&xl(n)}async function uA(t,e){const n=Re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hA(t,e){const n=Re(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.U_)c.H_(s)&&(r=!0);a.K_=s}}r&&xl(n)}function dA(t,e,n){const r=Re(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function xl(t){t.z_.forEach(e=>{e.next()})}var kc,kd;(kd=kc||(kc={})).J_="default",kd.Cache="cache";class fA{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==kc.Cache}}/**
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
 */class Sm{constructor(e){this.key=e}}class Cm{constructor(e){this.key=e}}class pA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ae(),this.mutatedKeys=Ae(),this.Ia=Zp(e),this.Ta=new Lr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Nd,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const g=s.get(d),I=na(this.query,m)?m:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let k=!1;g&&I?g.data.isEqual(I.data)?P!==N&&(r.track({type:3,doc:I}),k=!0):this.Ra(g,I)||(r.track({type:2,doc:I}),k=!0,(l&&this.Ia(I,l)>0||h&&this.Ia(I,h)<0)&&(c=!0)):!g&&I?(r.track({type:0,doc:I}),k=!0):g&&!I&&(r.track({type:1,doc:g}),k=!0,(l||h)&&(c=!0)),k&&(I?(a=a.add(I),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((d,m)=>function(I,P){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return N(I)-N(P)}(d.type,m.type)||this.Ia(d.doc,m.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,h=l!==this.ha;return this.ha=l,a.length!==0||h?{snapshot:new ns(this.query,e.Ta,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Nd,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ae(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Cm(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Sm(r))}),n}pa(e){this.la=e.hs,this.Pa=Ae();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ns.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class mA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gA{constructor(e){this.key=e,this.wa=!1}}class _A{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new fs(c=>Jp(c),ta),this.Da=new Map,this.Ca=new Set,this.va=new qe(se.comparator),this.Fa=new Map,this.Ma=new Rl,this.xa={},this.Oa=new Map,this.Na=ts.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function yA(t,e,n=!0){const r=Dm(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Pm(r,e,n,!0),s}async function vA(t,e){const n=Dm(t);await Pm(n,e,!0,!1)}async function Pm(t,e,n,r){const s=await qw(t.localStore,Xt(e)),i=s.targetId,a=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await EA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&wm(t.remoteStore,s),c}async function EA(t,e,n,r,s){t.Ba=(m,g,I)=>async function(N,k,F,q){let Z=k.view.da(F);Z.Xi&&(Z=await Rd(N.localStore,k.query,!1).then(({documents:A})=>k.view.da(A,Z)));const z=q&&q.targetChanges.get(k.targetId),he=q&&q.targetMismatches.get(k.targetId)!=null,ge=k.view.applyChanges(Z,N.isPrimaryClient,z,he);return xd(N,k.targetId,ge.fa),ge.snapshot}(t,m,g,I);const i=await Rd(t.localStore,e,!0),a=new pA(e,i.hs),c=a.da(i.documents),l=vi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);xd(t,n,h.fa);const d=new mA(e,n,a);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),h.snapshot}async function IA(t,e,n){const r=Re(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!ta(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pl(r.remoteStore,s.targetId),Dc(r,s.targetId)}).catch(gl)):(Dc(r,s.targetId),await Nc(r.localStore,s.targetId,!0))}async function TA(t,e){const n=Re(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pl(n.remoteStore,r.targetId))}async function Om(t,e){const n=Re(t);try{const r=await $w(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Fa.get(i);a&&(We(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?We(a.wa):s.removedDocuments.size>0&&(We(a.wa),a.wa=!1))}),await km(n,r,e)}catch(r){await gl(r)}}function Dd(t,e,n){const r=Re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,a)=>{const c=a.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=Re(a);l.onlineState=c;let h=!1;l.queries.forEach((d,m)=>{for(const g of m.U_)g.j_(c)&&(h=!0)}),h&&xl(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wA(t,e,n){const r=Re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new qe(se.comparator);a=a.insert(i,gt.newNoDocument(i,le.min()));const c=Ae().add(i),l=new ia(le.min(),new Map,new qe(Oe),a,c);await Om(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Vl(r)}else await Nc(r.localStore,e,!1).then(()=>Dc(r,e,n)).catch(gl)}function Dc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Nm(t,r)})}function Nm(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Pl(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Vl(t))}function xd(t,e,n){for(const r of n)r instanceof Sm?(t.Ma.addReference(r.key,e),AA(t,r)):r instanceof Cm?(J("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Nm(t,r.key)):de()}function AA(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(J("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Vl(t))}function Vl(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new se(je.fromString(e)),r=t.Na.next();t.Fa.set(r,new gA(n)),t.va=t.va.insert(n,r),wm(t.remoteStore,new Mn(Xt(Xp(n.path)),r,"TargetPurposeLimboResolution",_l.oe))}}async function km(t,e,n){const r=Re(t),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{a.push(r.Ba(l,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Cl.Ki(l.targetId,h);i.push(d)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(l,h){const d=Re(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(h,g=>U.forEach(g.qi,I=>d.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>U.forEach(g.Qi,I=>d.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!_i(m))throw m;J("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const I=d.ns.get(g),P=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(P);d.ns=d.ns.insert(g,N)}}}(r.localStore,i))}async function bA(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await Em(n.localStore,e);n.currentUser=e,function(i,a){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new Y(B.CANCELLED,a))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await km(n,r.us)}}function RA(t,e){const n=Re(t),r=n.Fa.get(e);if(r&&r.wa)return Ae().add(r.key);{let s=Ae();const i=n.Da.get(e);if(!i)return s;for(const a of i){const c=n.ba.get(a);s=s.unionWith(c.view.Ea)}return s}}function Dm(t){const e=Re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wA.bind(null,e),e.Sa.h_=hA.bind(null,e.eventManager),e.Sa.ka=dA.bind(null,e.eventManager),e}class Vd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jw(this.persistence,new Fw,e.initialUser,this.serializer)}createPersistence(e){return new Mw(Sl.Hr,this.serializer)}createSharedClientState(e){return new zw}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class SA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bA.bind(null,this.syncEngine),await oA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cA}()}createDatastore(e){const n=oa(e.databaseInfo.databaseId),r=function(i){return new Xw(i)}(e.databaseInfo);return function(i,a,c,l){return new Zw(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new tA(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Dd(this.syncEngine,n,0),function(){return Cd.D()?new Cd:new Kw}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,d){const m=new _A(s,i,a,c,l,h);return d&&(m.La=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=Re(r);J("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Ei(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class CA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class PA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=ET.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{J("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(J("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wa(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Em(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Md(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NA(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Od(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Od(e.remoteStore,s)),t._onlineComponents=e}function OA(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function NA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OA(n))throw n;Yr("Error using user provided cache. Falling back to memory cache: "+n),await Wa(t,new Vd)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Wa(t,new Vd);return t._offlineComponents}async function kA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Md(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Md(t,new SA))),t._onlineComponents}async function DA(t){const e=await kA(t),n=e.eventManager;return n.onListen=yA.bind(null,e.syncEngine),n.onUnlisten=IA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TA.bind(null,e.syncEngine),n}function xA(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const d=new CA({next:g=>{a.enqueueAndForget(()=>uA(i,m)),g.fromCache&&l.source==="server"?h.reject(new Y(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new fA(c,d,{includeMetadataChanges:!0,ra:!0});return lA(i,m)}(await DA(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function xm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ld=new Map;/**
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
 */function VA(t,e,n){if(!n)throw new Y(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MA(t,e,n,r){if(e===!0&&r===!0)throw new Y(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ud(t){if(se.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ca(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function xc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ca(t);throw new Y(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function LA(t,e){if(e<=0)throw new Y(B.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Fd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ml{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dT;switch(r.type){case"firstParty":return new gT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ld.get(n);r&&(J("ComponentProvider","Removing Datastore"),Ld.delete(n),r.terminate())}(this),Promise.resolve()}}function UA(t,e,n,r={}){var s;const i=(t=xc(t,Ml))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=mt.MOCK_USER;else{c=$0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(h)}t._authCredentials=new fT(new jp(c,l))}}/**
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
 */class Qn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qn(this.firestore,e,this._query)}}class vn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class Ur extends Qn{constructor(e,n,r){super(e,n,Xp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new se(e))}withConverter(e){return new Ur(this.firestore,e,this._path)}}function Vc(t,e,...n){if(t=Zt(t),VA("collection","path",e),t instanceof Ml){const r=je.fromString(e,...n);return Ud(r),new Ur(t,null,r)}{if(!(t instanceof vn||t instanceof Ur))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Ud(r),new Ur(t.firestore,null,r)}}/**
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
 */class FA{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Tm(this,"async_queue_retry"),this.hu=()=>{const n=Ka();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ka();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ka();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new ur;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!_i(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Dl.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&de()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Vm extends Ml{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new FA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mm(this),this._firestoreClient.terminate()}}function BA(t,e){const n=typeof t=="object"?t:Np(),r=typeof t=="string"?t:e||"(default)",s=pl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=B0("firestore");i&&UA(s,...i)}return s}function jA(t){return t._firestoreClient||Mm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mm(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new OT(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,xm(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new PA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(It.fromBase64String(e))}catch(n){throw new Y(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Um{constructor(e){this._methodName=e}}/**
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
 */class Ll{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */const $A=/^__.*__$/;function Fm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Ul{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ul(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Mc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Fm(this.fu)&&$A.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class HA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oa(e)}Fu(e,n,r,s=!1){return new Ul({fu:e,methodName:n,vu:r,path:yt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qA(t){const e=t._freezeSettings(),n=oa(t._databaseId);return new HA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GA(t,e,n,r=!1){return Fl(n,t.Fu(r?4:3,e))}function Fl(t,e){if(Bm(t=Zt(t)))return KA("Unsupported field value:",e,t),zA(t,e);if(t instanceof Um)return function(r,s){if(!Fm(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Fl(c,s.bu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:Pc(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pc(s.serializer,i)}}if(r instanceof Ll)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:dm(s.serializer,r._byteString)};if(r instanceof vn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fm(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${ca(r)}`)}(t,e)}function zA(t,e){const n={};return $p(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yi(t,(r,s)=>{const i=Fl(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Bm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Ll||t instanceof rs||t instanceof vn||t instanceof Um)}function KA(t,e,n){if(!Bm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ca(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}const WA=new RegExp("[~\\*/\\[\\]]");function QA(t,e,n){if(e.search(WA)>=0)throw Mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lm(...e.split("."))._internalPath}catch{throw Mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mc(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Y(B.INVALID_ARGUMENT,c+t+l)}/**
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
 */class jm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XA extends jm{data(){return super.data()}}function Bl(t,e){return typeof e=="string"?QA(t,e):e instanceof Lm?e._internalPath:e._delegate._internalPath}/**
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
 */function YA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jl{}class $l extends jl{}function Lc(t,e,...n){let r=[];e instanceof jl&&r.push(e),r=r.concat(n),function(i){const a=i.filter(l=>l instanceof ql).length,c=i.filter(l=>l instanceof Hl).length;if(a>1||a>0&&c>0)throw new Y(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Hl extends $l{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hl(e,n,r)}_apply(e){const n=this._parse(e);return $m(e._query,n),new Qn(e.firestore,e.converter,bc(e._query,n))}_parse(e){const n=qA(e.firestore);return function(i,a,c,l,h,d,m){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){jd(m,d);const I=[];for(const P of m)I.push(Bd(l,i,P));g={arrayValue:{values:I}}}else g=Bd(l,i,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||jd(m,d),g=GA(c,a,m,d==="in"||d==="not-in");return Ke.create(h,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ql extends jl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ql(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)$m(a,l),a=bc(a,l)}(e._query,n),new Qn(e.firestore,e.converter,bc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gl extends $l{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Gl(e,n)}_apply(e){const n=function(s,i,a){if(s.startAt!==null)throw new Y(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ui(i,a)}(e._query,this._field,this._direction);return new Qn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ds(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Uc(t,e="asc"){const n=e,r=Bl("orderBy",t);return Gl._create(r,n)}class zl extends $l{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new zl(e,n,r)}_apply(e){return new Qn(e.firestore,e.converter,No(e._query,this._limit,this._limitType))}}function JA(t){return LA("limit",t),zl._create("limit",t,"F")}function Bd(t,e,n){if(typeof(n=Zt(n))=="string"){if(n==="")throw new Y(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yp(e)&&n.indexOf("/")!==-1)throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!se.isDocumentKey(r))throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ld(t,new se(r))}if(n instanceof vn)return ld(t,n._key);throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ca(n)}.`)}function jd(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $m(t,e){const n=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ZA{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ll(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const n=zn(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);We(vm(r));const s=new ci(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eb extends jm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fo extends eb{data(e={}){return super.data(e)}}class tb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ji(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fo(this._firestore,this._userDataWriter,r.key,r,new Ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new fo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ji(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new fo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ji(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:nb(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}class rb extends ZA{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,n)}}function Fc(t){t=xc(t,Qn);const e=xc(t.firestore,Vm),n=jA(e),r=new rb(e);return YA(t._query),xA(n,t._query).then(s=>new tb(e,r,t,s))}(function(e,n=!0){(function(s){hs=s})(us),Xr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Vm(new pT(r.getProvider("auth-internal")),new yT(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),$n(id,"4.6.3",e),$n(id,"4.6.3","esm2017")})();function Kl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Hm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sb=Hm,qm=new mi("auth","Firebase",Hm());/**
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
 */const xo=new dl("@firebase/auth");function ib(t,...e){xo.logLevel<=ve.WARN&&xo.warn(`Auth (${us}): ${t}`,...e)}function po(t,...e){xo.logLevel<=ve.ERROR&&xo.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function mn(t,...e){throw Wl(t,...e)}function Yt(t,...e){return Wl(t,...e)}function Gm(t,e,n){const r=Object.assign(Object.assign({},sb()),{[e]:n});return new mi("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return Gm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qm.create(t,...e)}function oe(t,e,...n){if(!t)throw Wl(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw po(e),new Error(e)}function gn(t,e){t||cn(e)}/**
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
 */function Bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ob(){return $d()==="http:"||$d()==="https:"}function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ab(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ob()||G0()||"connection"in navigator)?navigator.onLine:!0}function cb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=H0()||z0()}get(){return ab()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ql(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ub=new Ti(3e4,6e4);function la(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ms(t,e,n,r,s={}){return Km(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=gi(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zm.fetch()(Qm(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Km(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lb),e);try{const s=new hb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Gm(t,d,h);mn(t,d)}}catch(s){if(s instanceof yn)throw s;mn(t,"network-request-failed",{message:String(s)})}}async function Wm(t,e,n,r,s={}){const i=await ms(t,e,n,r,s);return"mfaPendingCredential"in i&&mn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ql(t.config,s):`${t.config.apiScheme}://${s}`}class hb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),ub.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function db(t,e){return ms(t,"POST","/v1/accounts:delete",e)}async function Xm(t,e){return ms(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fb(t,e=!1){const n=Zt(t),r=await n.getIdToken(e),s=Xl(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(Qa(s.auth_time)),issuedAtTime:Xs(Qa(s.iat)),expirationTime:Xs(Qa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qa(t){return Number(t)*1e3}function Xl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ap(n);return s?JSON.parse(s):(po("Failed to decode base64 JWT payload"),null)}catch(s){return po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hd(t){const e=Xl(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&pb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hi(t,Xm(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ym(i.providerUserInfo):[],c=_b(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new jc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function gb(t){const e=Zt(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _b(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ym(t){return t.map(e=>{var{providerId:n}=e,r=Kl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yb(t,e){const n=await Km(t,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Qm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",zm.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vb(t,e){return ms(t,"POST","/v2/accounts:revokeToken",la(t,e))}/**
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
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Hd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Fr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function Rn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fb(this,e)}reload(){return gb(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await hi(this,db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(h=n.createdAt)!==null&&h!==void 0?h:void 0,q=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Z,emailVerified:z,isAnonymous:he,providerData:ge,stsTokenManager:A}=n;oe(Z&&A,e,"internal-error");const _=Fr.fromJSON(this.name,A);oe(typeof Z=="string",e,"internal-error"),Rn(m,e.name),Rn(g,e.name),oe(typeof z=="boolean",e,"internal-error"),oe(typeof he=="boolean",e,"internal-error"),Rn(I,e.name),Rn(P,e.name),Rn(N,e.name),Rn(k,e.name),Rn(F,e.name),Rn(q,e.name);const y=new ln({uid:Z,auth:e,email:g,emailVerified:z,displayName:m,isAnonymous:he,photoURL:P,phoneNumber:I,tenantId:N,stsTokenManager:_,createdAt:F,lastLoginAt:q});return ge&&Array.isArray(ge)&&(y.providerData=ge.map(w=>Object.assign({},w))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fr;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ym(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Fr;c.updateFromIdToken(r);const l=new ln({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const qd=new Map;function un(t){gn(t instanceof Function,"Expected a class definition");let e=qd.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qd.set(t,e),e)}/**
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
 */class Jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jm.type="NONE";const Gd=Jm;/**
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
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Br(un(Gd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||un(Gd);const a=mo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){const m=ln._fromJSON(e,d);h!==i&&(c=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Br(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Br(i,e,r))}}/**
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
 */function zd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rg(e))return"Blackberry";if(sg(e))return"Webos";if(Yl(e))return"Safari";if((e.includes("chrome/")||eg(e))&&!e.includes("edge/"))return"Chrome";if(ng(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zm(t=ut()){return/firefox\//i.test(t)}function Yl(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eg(t=ut()){return/crios\//i.test(t)}function tg(t=ut()){return/iemobile/i.test(t)}function ng(t=ut()){return/android/i.test(t)}function rg(t=ut()){return/blackberry/i.test(t)}function sg(t=ut()){return/webos/i.test(t)}function ua(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Eb(t=ut()){var e;return ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ib(){return K0()&&document.documentMode===10}function ig(t=ut()){return ua(t)||ng(t)||sg(t)||rg(t)||/windows phone/i.test(t)||tg(t)}function Tb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function og(t,e=[]){let n;switch(t){case"Browser":n=zd(ut());break;case"Worker":n=`${zd(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class wb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ab(t,e={}){return ms(t,"GET","/v2/passwordPolicy",la(t,e))}/**
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
 */const bb=6;class Rb{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:bb,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Sb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kd(this),this.idTokenSubscription=new Kd(this),this.beforeStateQueue=new wb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xm(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(Hn(this));const n=e?Zt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ab(this),n=new Rb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=og(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ib(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ha(t){return Zt(t)}class Kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=tI(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cb(t){Jl=t}function Pb(t){return Jl.loadJS(t)}function Ob(){return Jl.gapiScript}function Nb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kb(t,e){const n=pl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(So(i,e??{}))return s;mn(s,"already-initialized")}return n.initialize({options:e})}function Db(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xb(t,e,n){const r=ha(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ag(e),{host:a,port:c}=Vb(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Mb()}function ag(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Vb(t){const e=ag(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Wd(a)}}}function Wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}/**
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
 */async function jr(t,e){return Wm(t,"POST","/v1/accounts:signInWithIdp",la(t,e))}/**
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
 */const Lb="http://localhost";class vr extends cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Kl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:Lb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
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
 */class lg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wi extends lg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends wi{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class kn extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
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
 */class Dn extends wi{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */class xn extends wi{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
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
 */async function Ub(t,e){return Wm(t,"POST","/v1/accounts:signUp",la(t,e))}/**
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
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),a=Qd(r);return new Wn({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qd(r);return new Wn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Fb(t){var e;if(an(t.app))return Promise.reject(Hn(t));const n=ha(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Wn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ub(n,{returnSecureToken:!0}),s=await Wn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Mo extends yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Mo(e,n,r,s)}}function ug(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,i,e,r):i})}async function Bb(t,e,n=!1){const r=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wn._forOperation(t,"link",r)}/**
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
 */async function jb(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await hi(t,ug(r,s,e,t),n);oe(i.idToken,r,"internal-error");const a=Xl(i.idToken);oe(a,r,"internal-error");const{sub:c}=a;return oe(t.uid===c,r,"user-mismatch"),Wn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),i}}/**
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
 */async function $b(t,e,n=!1){if(an(t.app))return Promise.reject(Hn(t));const r="signIn",s=await ug(t,r,e),i=await Wn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Hb(t,e,n,r){return Zt(t).onIdTokenChanged(e,n,r)}function qb(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}const Lo="__sak";/**
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
 */class hg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Gb(){const t=ut();return Yl(t)||ua(t)}const zb=1e3,Kb=10;class dg extends hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gb()&&Tb(),this.fallbackToPolling=ig(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ib()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Kb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dg.type="LOCAL";const Wb=dg;/**
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
 */class fg extends hg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fg.type="SESSION";const pg=fg;/**
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
 */function Qb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await Qb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
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
 */function Zl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Xb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Zl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Jt(){return window}function Yb(t){Jt().location.href=t}/**
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
 */function mg(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function Jb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function e1(){return mg()?self:null}/**
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
 */const gg="firebaseLocalStorageDb",t1=1,Uo="firebaseLocalStorage",_g="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fa(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function n1(){const t=indexedDB.deleteDatabase(gg);return new Ai(t).toPromise()}function $c(){const t=indexedDB.open(gg,t1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:_g})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await n1(),e(await $c()))})})}async function Xd(t,e,n){const r=fa(t,!0).put({[_g]:e,value:n});return new Ai(r).toPromise()}async function r1(t,e){const n=fa(t,!1).get(e),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function Yd(t,e){const n=fa(t,!0).delete(e);return new Ai(n).toPromise()}const s1=800,i1=3;class yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>i1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(e1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jb(),!this.activeServiceWorker)return;this.sender=new Xb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await Xd(e,Lo,"1"),await Yd(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>r1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fa(s,!1).getAll();return new Ai(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yg.type="LOCAL";const o1=yg;new Ti(3e4,6e4);/**
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
 */function a1(t,e){return e?un(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eu extends cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function c1(t){return $b(t.auth,new eu(t),t.bypassAuthState)}function l1(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),jb(n,new eu(t),t.bypassAuthState)}async function u1(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),Bb(n,new eu(t),t.bypassAuthState)}/**
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
 */class vg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return c1;case"linkViaPopup":case"linkViaRedirect":return u1;case"reauthViaPopup":case"reauthViaRedirect":return l1;default:mn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const h1=new Ti(2e3,1e4);class Nr extends vg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Zl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,h1.get())};e()}}Nr.currentPopupAction=null;/**
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
 */const d1="pendingRedirect",go=new Map;class f1 extends vg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await p1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p1(t,e){const n=_1(e),r=g1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function m1(t,e){go.set(t._key(),e)}function g1(t){return un(t._redirectPersistence)}function _1(t){return mo(d1,t.config.apiKey,t.name)}async function y1(t,e,n=!1){if(an(t.app))return Promise.reject(Hn(t));const r=ha(t),s=a1(r,e),a=await new f1(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const v1=10*60*1e3;class E1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!I1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Eg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jd(e))}saveEventToCache(e){this.cachedEventUids.add(Jd(e)),this.lastProcessedEventTime=Date.now()}}function Jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function I1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Eg(t);default:return!1}}/**
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
 */async function T1(t,e={}){return ms(t,"GET","/v1/projects",e)}/**
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
 */const w1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A1=/^https?/;async function b1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await T1(t);for(const n of e)try{if(R1(n))return}catch{}mn(t,"unauthorized-domain")}function R1(t){const e=Bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!A1.test(n))return!1;if(w1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const S1=new Ti(3e4,6e4);function Zd(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C1(t){return new Promise((e,n)=>{var r,s,i;function a(){Zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zd(),n(Yt(t,"network-request-failed"))},timeout:S1.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)a();else{const c=Nb("iframefcb");return Jt()[c]=()=>{gapi.load?a():n(Yt(t,"network-request-failed"))},Pb(`${Ob()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw _o=null,e})}let _o=null;function P1(t){return _o=_o||C1(t),_o}/**
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
 */const O1=new Ti(5e3,15e3),N1="__/auth/iframe",k1="emulator/auth/iframe",D1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V1(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ql(e,k1):`https://${t.config.authDomain}/${N1}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=x1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${gi(r).slice(1)}`}async function M1(t){const e=await P1(t),n=Jt().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:V1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Yt(t,"network-request-failed"),c=Jt().setTimeout(()=>{i(a)},O1.get());function l(){Jt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const L1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U1=500,F1=600,B1="_blank",j1="http://localhost";class ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $1(t,e,n,r=U1,s=F1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},L1),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();n&&(c=eg(h)?B1:n),Zm(h)&&(e=e||j1,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[I,P])=>`${g}${I}=${P},`,"");if(Eb(h)&&c!=="_self")return H1(e||"",c),new ef(null);const m=window.open(e||"",c,d);oe(m,t,"popup-blocked");try{m.focus()}catch{}return new ef(m)}function H1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const q1="__/auth/handler",G1="emulator/auth/handler",z1=encodeURIComponent("fac");async function tf(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof lg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",eI(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries(i||{}))a[d]=m}if(e instanceof wi){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${z1}=${encodeURIComponent(l)}`:"";return`${K1(t)}?${gi(c).slice(1)}${h}`}function K1({config:t}){return t.emulator?Ql(t,G1):`https://${t.authDomain}/${q1}`}/**
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
 */const Xa="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pg,this._completeRedirectFn=y1,this._overrideRedirectResult=m1}async _openPopup(e,n,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await tf(e,n,r,Bc(),s);return $1(e,a,Zl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tf(e,n,r,Bc(),s);return Yb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await M1(e),r=new E1(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xa];a!==void 0&&n(!!a),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ig()||Yl()||ua()}}const Q1=W1;var nf="@firebase/auth",rf="1.7.3";/**
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
 */class X1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Y1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J1(t){Xr(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:og(t)},h=new Sb(r,s,i,l);return Db(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new pr("auth-internal",e=>{const n=ha(e.getProvider("auth").getImmediate());return(r=>new X1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(nf,rf,Y1(t)),$n(nf,rf,"esm2017")}/**
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
 */const Z1=5*60,eR=Sp("authIdTokenMaxAge")||Z1;let sf=null;const tR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eR)return;const s=n==null?void 0:n.token;sf!==s&&(sf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nR(t=Np()){const e=pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kb(t,{popupRedirectResolver:Q1,persistence:[o1,Wb,pg]}),r=Sp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=tR(i.toString());qb(n,a,()=>a(n.currentUser)),Hb(n,c=>a(c))}}const s=bp("auth");return s&&xb(n,`http://${s}`),n}function rR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Cb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J1("Browser");const sR={apiKey:"AIzaSyBMX5fhRGBNhKpf11lnHhVi018b5Zavkv8",authDomain:"ws-db-11235813.firebaseapp.com",projectId:"ws-db-11235813",storageBucket:"ws-db-11235813.appspot.com",messagingSenderId:"318238552225",appId:"1:318238552225:web:a5eae1ca149d3137dbc0e0",measurementId:"G-EE5YZ9ZW6P"},Ig=Op(sR),Hc=BA(Ig),iR=nR(Ig);Fb(iR).then(()=>{console.log("Signed in anonymously")}).catch(t=>{console.error("Error signing in anonymously:",t)});const bi=Yo("tlData",()=>{const t=vt({}),e=vt({name:"default",url:"noUrl",weight:-1,color:3,isShow:!1,valid:!0});vt(0);const n=async()=>{console.log("Call loadSiteList function"),m();try{const I=Lc(Vc(Hc,"siteData"),Uc("no")),P=await Fc(I);console.log("Fetching documents: loadSiteList function"),P.forEach(N=>{const k=N.data();k.id in t.value?(t.value[k.id].valid=!0,t.value[k.id].name=k.name,t.value[k.id].url=k.url):t.value[k.id]={name:k.name,url:k.url,weight:Object.keys(t.value).length,color:0,isShow:!0,valid:!0}}),g()}catch(I){console.error("Error fetching documents: ",I)}},r=async()=>{console.log("Call resetSiteList function"),t.value={};try{const I=Lc(Vc(Hc,"siteData"),Uc("no")),P=await Fc(I);console.log("Fetching documents: resetSiteList function"),P.forEach(N=>{const k=N.data();t.value[k.id]={name:k.name,url:k.url,weight:Object.keys(t.value).length,color:0,isShow:!0,valid:!0}})}catch(I){console.error("Error fetching documents: ",I)}},s=me(()=>{let I=[];for(const N of Object.values(t.value))I.push(N.weight);return new Set(I).size!=I.length}),i=me(()=>{let I=[];for(const[P,N]of Object.entries(t.value))I.push({id:P,weight:N.weight});return I.sort((P,N)=>P.weight-N.weight),I.map(P=>P.id)}),a=me(()=>{let I=[];for(const[P,N]of Object.entries(t.value))N.isShow!=!1&&I.push({id:P,weight:N.weight});return I.sort((P,N)=>P.weight-N.weight),I.map(P=>P.id)});function c(I,P){t.value[I].color=P}function l(I,P){t.value[I].weight=P}function h(I){const P=t.value[I].weight;if(P>0){const N=P-1,k=Object.keys(t.value).find(F=>t.value[F].weight==N);console.log("upWeight"),console.log(P,I),console.log(N,k),t.value[I].weight=N,t.value[k].weight=P}}function d(I){const P=t.value[I].weight;if(P<Object.keys(t.value).length-1){const N=P+1,k=Object.keys(t.value).find(F=>t.value[F].weight==N);t.value[I].weight=N,t.value[k].weight=P}}function m(){for(const I of Object.values(t.value))I.valid=!1}function g(){for(const[P,N]of Object.entries(t.value))N.valid||delete t.value[P];let I=[];for(const[P,N]of Object.entries(t.value))I.push({id:P,weight:N.weight});I.sort((P,N)=>P.weight-N.weight);for(const[P,N]of I.entries())t.value[N.id].weight=P}return Object.keys(t).length<2&&n(),{tlData:t,defaultTlData:e,sortedIds:i,sortedIdsFiltered:a,loadSiteList:n,setColor:c,setWeight:l,upWeight:h,downWeight:d,resetSiteList:r,invalidSiteList:s}},{persist:!0}),oR={},aR={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},cR=Q("g",null,[Q("path",{class:"st0",d:`M487.932,243.768L255.999,0L24.076,243.768c-21.787,22.886-20.874,59.088,2.013,80.865
		c22.887,21.787,59.099,20.896,80.886-2.013l91.818-96.506v228.691c0,31.59,25.617,57.195,57.205,57.195
		c31.6,0,57.217-25.606,57.217-57.195V226.114l91.829,96.506c21.777,22.909,57.978,23.8,80.875,2.013
		C508.806,302.855,509.698,266.654,487.932,243.768z`})],-1),lR=[cR];function uR(t,e){return ue(),Ne("svg",aR,lR)}const hR=nt(oR,[["render",uR]]),dR=Qe({__name:"UpArrowButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ue(),Nt(hR,{class:"upArrowButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),fR={},pR={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},mR=Q("g",null,[Q("path",{class:"st0",d:`M485.919,187.372c-22.905-21.787-59.106-20.893-80.883,2.011l-91.82,96.511V57.202
		C313.217,25.606,287.6,0,255.993,0c-31.585,0-57.202,25.606-57.202,57.202v228.692l-91.819-96.511
		c-21.776-22.904-58-23.798-80.883-2.011c-22.883,21.756-23.797,57.979-2.01,80.862L255.993,512l231.936-243.765
		C509.696,245.352,508.801,209.128,485.919,187.372z`})],-1),gR=[mR];function _R(t,e){return ue(),Ne("svg",pR,gR)}const yR=nt(fR,[["render",_R]]),vR=Qe({__name:"DownArrowButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ue(),Nt(yR,{class:"downArrowButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),ER={class:"buttons"},IR=Qe({__name:"TlTitleBlock",props:{tlSiteId:{type:String,required:!0}},setup(t){const e=t,n=bi();function r(){n.upWeight(e.tlSiteId)}function s(){n.downWeight(e.tlSiteId)}const i=me(()=>({"--ttb-bg-color":Ce.green1}));return(a,c)=>(ue(),Ne("div",{class:"tlTitleBlock",style:Et(i.value)},[Q("p",null,at(De(n).tlData[e.tlSiteId].weight+1)+" "+at(De(n).tlData[e.tlSiteId].name),1),Q("div",ER,[Wt(Q("input",{type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=l=>De(n).tlData[e.tlSiteId].isShow=l)},null,512),[[dv,De(n).tlData[e.tlSiteId].isShow]]),Pe(dR,{onClick:r,fill:"white",height:15}),Pe(vR,{onClick:s,fill:"white",height:15})])],4))}});const TR=nt(IR,[["__scopeId","data-v-c2859ba2"]]),Tg=Yo("appState",()=>{const t=vt(hc.version),e=vt(!1),n=vt(!1),r=vt(!1);return{appVersion:t,useSearch:e,useMenu:n,useNews:r}},{persist:!0}),wR=new Date,pa=Yo("searchConditionStore",()=>{const t=vt([]);function e(c,l,h,d){t.value.push({word:c,year:l,month:h,day:d,color:0})}t.value.length==0&&s();function n(c,l){c>=0&&c<t.value.length&&(t.value[c]=l)}function r(c){c>=0&&c<t.value.length&&t.value.splice(c)}function s(){t.value.push({word:"",year:wR.getFullYear(),month:"-",day:"-",color:0})}function i(){t.value.length>1&&t.value.pop()}const a=me(()=>t.value.length);return{searchCondition:t,newCondition:e,setCondition:n,rmCondition:r,pushCondition:s,popCondition:i,size:a}},{persist:!0}),ma=Yo("wsScrapedData",()=>{const t=vt({}),e=vt({}),n=vt({}),r=async(c,l=!1)=>{console.log("siteId in lastLoadTime.value: ",c in n.value),c in n.value||(n.value[c]=0);const h=Math.floor(Date.now()/1e3);if(!l&&!(h>=n.value[c]+60*30)){console.log("Stopped Loading: The specified time has not elapsed since the last loading.");return}e.value[c]=!0;try{const d=Lc(Vc(Hc,c),Uc("epoch","desc"),JA(25)),m=await Fc(d);let g=[];m.forEach(I=>{g.push(I.data())}),t.value[c]=g,e.value[c]=!1,n.value[c]=Math.floor(Date.now()/1e3),console.log("Load DB: ",c)}catch(d){console.error("Error fetching documents: ",d)}},s=me(()=>{let c=[];for(const l of Object.values(t.value))c=[...c,...l];return c.sort((l,h)=>h.epoch-l.epoch)}),i=me(()=>{let c=!1;for(const l of Object.values(e.value))c=c||l;return c});function a(c){for(const l of Object.keys(t.value))l in c||(delete t.value[l],delete e.value[l],delete n.value[l])}return{scrapedData:t,loadingStatus:e,allLoadingStatus:i,lastLoadTime:n,loadDatabase:r,allArticles:s,rmNoId:a}},{persist:!0}),AR=t=>(cs("data-v-e34922b3"),t=t(),ls(),t),bR={class:"searchArea"},RR={class:"serchCfgArea"},SR=AR(()=>Q("label",{for:"noWindow"},"窓数",-1)),CR=["value"],PR={class:"newsArea"},OR={class:"menuArea"},NR={class:"tlList"},kR=Qe({__name:"CfgTabBar",setup(t){const e=Tg(),n=bi(),r=pa(),s=ma(),i=me(()=>e.useSearch?Ce.green1:Ce.gray2),a=me(()=>e.useMenu?Ce.green1:Ce.gray2),c=me(()=>e.useNews?Ce.green1:Ce.gray2);me(()=>s.allLoadingStatus?Ce.green1:Ce.gray2);const l=vt(0);l.value=r.size;function h(){e.useSearch=!e.useSearch}function d(){if(l.value>r.size){const N=l.value-r.size;for(let k=0;k<N;k++)r.pushCondition()}else if(l.value<r.size){const N=r.size-l.value;for(let k=0;k<N;k++)r.popCondition()}}function m(){e.useNews=!e.useNews}function g(){e.useMenu=!e.useMenu,n.invalidSiteList&&n.resetSiteList()}function I(){window.confirm("データをリセットしますか？")&&(n.resetSiteList(),s.rmNoId(n.sortedIds))}const P=me(()=>({"--width":e.useMenu?"280px":"60px"}));return(N,k)=>(ue(),Ne("div",{class:"cfgTabBar",style:Et(P.value)},[Q("div",bR,[Pe(Ip,{width:50,height:50,fill:i.value,onClick:h},null,8,["fill"]),Wt(Q("div",RR,[SR,Wt(Q("select",{name:"noWindow","onUpdate:modelValue":k[0]||(k[0]=F=>l.value=F),onChange:d},[(ue(),Ne(Xe,null,dn(3,F=>Q("option",{value:F},at(F),9,CR)),64))],544),[[ao,l.value]])],512),[[Ao,De(e).useSearch]])]),Q("div",PR,[Pe(k0,{width:50,height:50,fill:c.value,onClick:m},null,8,["fill"])]),Q("div",OR,[Pe(b0,{width:50,height:50,fill:a.value,onClick:g},null,8,["fill"]),Wt(Q("div",NR,[(ue(!0),Ne(Xe,null,dn(De(n).sortedIds,F=>(ue(),Nt(TR,{"tl-site-id":F},null,8,["tl-site-id"]))),256)),Q("input",{type:"button",value:"reset",onClick:I})],512),[[Ao,De(e).useMenu]])])],4))}});const DR=nt(kR,[["__scopeId","data-v-e34922b3"]]),xR=Qe({__name:"TLTitleBar",props:{tlTitle:{type:String,required:!0},isLoading:{type:Boolean,default:!1},style:{type:Object,default:{"--tl-background-color":Ce.blue1}}},setup(t){const e=t;return(n,r)=>(ue(),Ne("div",{class:"tlTitleBar",style:Et(t.style)},[Q("p",null,at(e.tlTitle),1)],4))}});const wg=nt(xR,[["__scopeId","data-v-a547faeb"]]),VR=Qe({__name:"ItemTitleBar",props:{itemTitle:{type:String,required:!0}},setup(t){const e=me(()=>({"--it-background-color":Ce.gray3}));return(n,r)=>(ue(),Ne("div",{class:"itemTitleBar",style:Et(e.value)},[Q("p",null,at(t.itemTitle),1)],4))}});const MR=nt(VR,[["__scopeId","data-v-393697e8"]]),LR={class:"iStr"},UR=Qe({__name:"ItemBox",props:{itemString:{type:String,required:!0},isNewer:{type:Boolean,default:!1}},setup(t){const e=t;return me(()=>({"--bg-color":Ce.yellow3})),(n,r)=>(ue(),Ne("div",{class:is(t.isNewer?"itemBoxNew":"itemBox")},[Q("p",LR,at(e.itemString),1)],2))}});const FR=nt(UR,[["__scopeId","data-v-69639804"]]),BR={class:"articleItem"},jR=["href"],$R=Qe({__name:"ArticleItemNoButton",props:{articleDescription:{type:String,required:!0},articleSource:{type:String,required:!0},articleUrl:{type:String,required:!0},articleEpoch:{type:Number,required:!0},tlTitle:{type:String,default:""},showBar:{type:Boolean,default:!1}},setup(t){const e=t,n=me(()=>{const i=new Date(0);return i.setSeconds(e.articleEpoch.valueOf()),i}),r=me(()=>{const i=new Date,a=new Date(0);return a.setSeconds(e.articleEpoch.valueOf()),i.getDate()==a.getDate()&&i.getMonth()==a.getMonth()&&i.getFullYear()==a.getFullYear()}),s=me(()=>({"--bg-color":Ce.yellow3}));return(i,a)=>(ue(),Ne("div",BR,[e.showBar?(ue(),Nt(MR,{key:0,"item-title":e.articleSource},null,8,["item-title"])):ol("",!0),Pe(FR,{"item-string":e.articleDescription,"is-newer":r.value,style:Et(s.value)},null,8,["item-string","is-newer","style"]),Q("div",{class:is(r.value?"itemFooterNew":"itemFooter"),style:Et(s.value)},[Q("a",{href:e.articleUrl},"ページリンク",8,jR),Q("p",null,at(n.value.getFullYear())+"年"+at(n.value.getMonth()+1)+"月"+at(n.value.getDate())+"日",1)],6)]))}});const Ag=nt($R,[["__scopeId","data-v-d494b502"]]),bg=t=>(cs("data-v-3d98a092"),t=t(),ls(),t),HR={class:"tlItemList"},qR={key:0,class:"loadingMsg"},GR=bg(()=>Q("br",null,null,-1)),zR=bg(()=>Q("div",{class:"tlFooter"},null,-1)),KR=Qe({__name:"Timeline",props:{tlSiteId:{type:String,required:!0},tlTitle:{type:String,default:""},showBar:{type:Boolean,default:!1},lastEpoch:{type:Number,default:-1}},setup(t){const e=t,n=bi(),r=ma(),s=me(()=>e.tlSiteId in n.tlData?n.tlData[e.tlSiteId]:n.defaultTlData),i=me(()=>e.tlTitle==""?s.value.name:e.tlTitle),a=[Ce.blue1,Ce.red1,Ce.yellow1,Ce.green1,Ce.gray1],c=me(()=>{let h=[];if(e.tlSiteId=="all"){for(const d of n.sortedIdsFiltered)h=[...h,...r.scrapedData[d]];h=h.sort((d,m)=>m.epoch-d.epoch)}else h=r.scrapedData[e.tlSiteId];return h});Hf(()=>{e.tlSiteId!="all"&&s.value.isShow?r.loadDatabase(e.tlSiteId):console.log("Not load DB: ",e.tlSiteId)});const l=me(()=>({"--tl-background-color":a[s.value.color%a.length]}));return(h,d)=>(ue(),Ne("div",{class:"timeline",style:Et(l.value)},[Pe(wg,{"tl-title":i.value,style:Et(l.value)},null,8,["tl-title","style"]),Q("div",HR,[De(r).loadingStatus[e.tlSiteId]?(ue(),Ne("p",qR,[Vr("--読み込み中--"),GR,Vr("読み込みが終わらない場合はリログしてください。")])):ol("",!0),(ue(!0),Ne(Xe,null,dn(c.value,m=>(ue(),Nt(Ag,{"article-source":m.org,"article-description":m.title,"article-url":m.url,"article-epoch":m.epoch,"tl-title":s.value.name,"show-bar":e.showBar},null,8,["article-source","article-description","article-url","article-epoch","tl-title","show-bar"]))),256))]),zR],4))}});const of=nt(KR,[["__scopeId","data-v-3d98a092"]]),WR={},QR={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},XR=Q("g",null,[Q("polygon",{points:"511.998,70.682 441.315,0 256.002,185.313 70.685,0 0.002,70.692 185.316,256.006 0.002,441.318 70.69,512 256.002,326.688 441.315,512 511.998,441.318 326.684,256.006"})],-1),YR=[XR];function JR(t,e){return ue(),Ne("svg",QR,YR)}const ZR=nt(WR,[["render",JR]]),eS=Qe({__name:"XButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:Ce.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ue(),Nt(ZR,{class:"xButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}}),gs=t=>(cs("data-v-013d163b"),t=t(),ls(),t),tS={class:"textArea"},nS=["onKeydown"],rS={class:"dateArea"},sS=gs(()=>Q("option",{key:"noSelct"},"-",-1)),iS=gs(()=>Q("p",null,"年",-1)),oS=gs(()=>Q("option",{key:"noSelct"},"-",-1)),aS=gs(()=>Q("p",null,"月",-1)),cS=gs(()=>Q("option",{key:"noSelct"},"-",-1)),lS=gs(()=>Q("p",null,"日",-1)),uS=Qe({__name:"SearchForm",props:{styles:{type:Object,default:{"--tl-background-color":Ce.blue1}},scIdx:{type:Number,require:!0}},setup(t){const e=t,n=pa(),r=vt(n.searchCondition[e.scIdx]),s=[2023,2024],i=me(()=>r.value.month=="-"||r.value.year=="-"?0:new Date(r.value.year,r.value.month,0).getDate());function a(){n.setCondition(e.scIdx,r.value)}function c(){r.value.day="-",r.value.month="-"}return(l,h)=>(ue(),Ne("div",{class:"searchForm",style:Et(e.styles)},[Q("div",tS,[Wt(Q("input",{ty:"",pe:"search","onUpdate:modelValue":h[0]||(h[0]=d=>r.value.word=d),placeholder:"Enter text",size:"25",onKeydown:pv(a,["enter"])},null,40,nS),[[hv,r.value.word]]),Pe(Ip,{onClick:a,height:12,width:12,"icon-color":"white"})]),Q("div",rS,[Wt(Q("select",{name:"year",id:"selctMonth","onUpdate:modelValue":h[1]||(h[1]=d=>r.value.year=d)},[sS,(ue(),Ne(Xe,null,dn(s,d=>Q("option",{key:d},at(d),1)),64))],512),[[ao,r.value.year]]),iS,Wt(Q("select",{name:"month",id:"selctMonth","onUpdate:modelValue":h[2]||(h[2]=d=>r.value.month=d)},[oS,(ue(),Ne(Xe,null,dn(12,d=>Q("option",{key:d},at(d),1)),64))],512),[[ao,r.value.month]]),aS,Wt(Q("select",{name:"day",id:"selectDay","onUpdate:modelValue":h[3]||(h[3]=d=>r.value.day=d)},[cS,(ue(!0),Ne(Xe,null,dn(i.value,d=>(ue(),Ne("option",{key:d},at(d),1))),128))],512),[[ao,r.value.day]]),lS,Pe(eS,{onClick:c,height:12,width:12,"icon-color":"white"})])],4))}});const hS=nt(uS,[["__scopeId","data-v-013d163b"]]),dS=t=>(cs("data-v-144026ff"),t=t(),ls(),t),fS={class:"tlItemList"},pS=dS(()=>Q("div",{class:"tlFooter"},null,-1)),mS=Qe({__name:"SearchedTimeline",props:{searchCondIdx:{type:Number,default:0}},setup(t){const e=t,n=pa(),r=ma(),s=me(()=>"検索: "+n.searchCondition[e.searchCondIdx].word),i=me(()=>{let l=r.allArticles;const h=n.searchCondition[e.searchCondIdx];if(l=l.filter(d=>d.title.indexOf(h.word)>=0),h.day!="-"&&h.month!="-"&&h.year!="-"){const d=new Date(h.year,h.month-1,h.day).getTime()/1e3,m=d+60*60*24;l=l.filter(g=>d<=g.epoch&&g.epoch<m)}return l.sort((d,m)=>m.epoch-d.epoch),l}),a=[Ce.blue1,Ce.red1,Ce.yellow1,Ce.green1,Ce.gray1],c=me(()=>({"--tl-background-color":a[3]}));return(l,h)=>(ue(),Ne("div",{class:"timeline",style:Et(c.value)},[Pe(wg,{"tl-title":s.value,style:Et(c.value),"is-loading":!1},null,8,["tl-title","style"]),Pe(hS,{style:Et(c.value),"sc-idx":e.searchCondIdx},null,8,["style","sc-idx"]),Q("div",fS,[(ue(!0),Ne(Xe,null,dn(i.value,d=>(ue(),Nt(Ag,{"article-source":d.org,"article-description":d.title,"article-url":d.url,"article-epoch":d.epoch,"tl-title":d.org,"show-bar":!0},null,8,["article-source","article-description","article-url","article-epoch","tl-title"]))),256))]),pS],4))}});const gS=nt(mS,[["__scopeId","data-v-144026ff"]]),Rg=t=>(cs("data-v-11610e59"),t=t(),ls(),t),_S={class:"sideArea"},yS={class:"newsArea"},vS={class:"searchArea"},ES={class:"tlArea"},IS={key:0,class:"noDataState"},TS=Rg(()=>Q("p",null,"何度かリログすると正しく表示されるようになります。",-1)),wS=Rg(()=>Q("p",null,"お手数ですが、「ctrl-R」を何度か押してください。",-1)),AS=[TS,wS],bS=Qe({__name:"WSAppView",setup(t){const e=Tg(),n=bi(),r=pa();let s=new Date;s=new Date(s.getFullYear(),s.getMonth(),s.getDate());const i=me(()=>Object.keys(n.tlData).length<2),a=me(()=>!e.useSearch);$f(()=>{n.loadSiteList()});const c=me(()=>({"--bg-color":Ce.gray2}));return(l,h)=>(ue(),Ne("div",{class:"wsapp",style:Et(c.value)},[Q("div",_S,[Q("div",{class:is({cfgArea:!0,borderClass:a.value})},[Pe(DR)],2),Wt(Q("div",yS,[Pe(of,{"tl-site-id":"all","tl-title":"新着情報","last-epoch":De(s).getTime()/1e3,"show-bar":!0},null,8,["last-epoch"])],512),[[Ao,De(e).useNews]]),Wt(Q("div",vS,[(ue(!0),Ne(Xe,null,dn(De(r).size,d=>(ue(),Nt(gS,{"search-cond-idx":d.valueOf()-1},null,8,["search-cond-idx"]))),256))],512),[[Ao,De(e).useSearch]])]),Q("div",ES,[i.value?(ue(),Ne("div",IS,AS)):ol("",!0),(ue(!0),Ne(Xe,null,dn(De(n).sortedIdsFiltered,d=>(ue(),Nt(of,{"tl-site-id":d},null,8,["tl-site-id"]))),256))])],4))}});const RS=nt(bS,[["__scopeId","data-v-11610e59"]]),SS={class:"sample"},CS=Qe({__name:"SampleView",setup(t){const e=bi(),n=ma();return(r,s)=>(ue(),Ne("div",SS,[Q("p",null,at(De(e).tlData.micJoho),1),Q("p",null,at(De(n).allLoadingStatus),1),Q("p",null,at(De(n).loadingStatus),1)]))}});const PS=nt(CS,[["__scopeId","data-v-cba2d506"]]),OS=xE({history:Jv("/webscraper_tl/"),routes:[{path:"/",name:"app",component:RS},{path:"/sample",name:"sample",component:PS},{path:"/about",name:"about",component:()=>Wh(()=>import("./AboutView-ad8d2bce.js"),["assets/AboutView-ad8d2bce.js","assets/AboutView-08887120.css"])},{path:"/contact",name:"contact",component:()=>Wh(()=>import("./ContactView-e33ae262.js"),["assets/ContactView-e33ae262.js","assets/ContactView-65b7ef47.css"])}]}),tu=_v(HE),Sg=Ev();Sg.use(Nv());tu.use(Sg);tu.use(OS);tu.mount("#app");export{hc as A,Xe as F,Q as a,De as b,Ne as c,Qe as d,Vr as e,xy as f,ue as o,dn as r,at as t,bi as u};