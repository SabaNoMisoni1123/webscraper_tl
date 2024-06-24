(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function al(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Be={},$r=[],qt=()=>{},Og=()=>!1,kg=/^on[^a-z]/,sa=t=>kg.test(t),cl=t=>t.startsWith("onUpdate:"),ut=Object.assign,ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vg=Object.prototype.hasOwnProperty,Se=(t,e)=>Vg.call(t,e),oe=Array.isArray,jr=t=>Ai(t)==="[object Map]",fs=t=>Ai(t)==="[object Set]",gh=t=>Ai(t)==="[object Date]",_e=t=>typeof t=="function",Ze=t=>typeof t=="string",Xr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Df=t=>(Le(t)||_e(t))&&_e(t.then)&&_e(t.catch),Of=Object.prototype.toString,Ai=t=>Of.call(t),xg=t=>Ai(t).slice(8,-1),kf=t=>Ai(t)==="[object Object]",ul=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fo=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mg=/-(\w)/g,Yr=ia(t=>t.replace(Mg,(e,n)=>n?n.toUpperCase():"")),Lg=/\B([A-Z])/g,Ar=ia(t=>t.replace(Lg,"-$1").toLowerCase()),Vf=ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),rc=ia(t=>t?`on${Vf(t)}`:""),mr=(t,e)=>!Object.is(t,e),po=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Do=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Oo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yh;const wc=()=>yh||(yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rt(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?$g(r):rt(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||Le(t))return t}const Ug=/;(?![^(]*\))/g,Fg=/:([^]+)/,Bg=/\/\*[^]*?\*\//g;function $g(t){const e={};return t.replace(Bg,"").split(Ug).forEach(n=>{if(n){const r=n.split(Fg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ps(t){let e="";if(Ze(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=ps(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hg=al(jg);function xf(t){return!!t||t===""}function qg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=bi(t[r],e[r]);return n}function bi(t,e){if(t===e)return!0;let n=gh(t),r=gh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Xr(t),r=Xr(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?qg(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!bi(t[a],e[a]))return!1}}return String(t)===String(e)}function hl(t,e){return t.findIndex(n=>bi(n,e))}const At=t=>Ze(t)?t:t==null?"":oe(t)||Le(t)&&(t.toString===Of||!_e(t.toString))?JSON.stringify(t,Mf,2):String(t),Mf=(t,e)=>e&&e.__v_isRef?Mf(t,e.value):jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:fs(e)?{[`Set(${e.size})`]:[...e.values()]}:Le(e)&&!oe(e)&&!kf(e)?String(e):e;let kt;class Lf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Uf(t){return new Lf(t)}function Gg(t,e=kt){e&&e.active&&e.effects.push(t)}function Ff(){return kt}function zg(t){kt&&kt.cleanups.push(t)}const dl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bf=t=>(t.w&Xn)>0,$f=t=>(t.n&Xn)>0,Kg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xn},Wg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Bf(s)&&!$f(s)?s.delete(t):e[n++]=s,s.w&=~Xn,s.n&=~Xn}e.length=n}},ko=new WeakMap;let Hs=0,Xn=1;const Ic=30;let Bt;const dr=Symbol(""),Ac=Symbol("");class fl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Gg(this,r)}run(){if(!this.active)return this.fn();let e=Bt,n=jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bt,Bt=this,jn=!0,Xn=1<<++Hs,Hs<=Ic?Kg(this):vh(this),this.fn()}finally{Hs<=Ic&&Wg(this),Xn=1<<--Hs,Bt=this.parent,jn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(vh(this),this.onStop&&this.onStop(),this.active=!1)}}function vh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jn=!0;const jf=[];function ms(){jf.push(jn),jn=!1}function _s(){const t=jf.pop();jn=t===void 0?!0:t}function Nt(t,e,n){if(jn&&Bt){let r=ko.get(t);r||ko.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=dl()),Hf(s)}}function Hf(t,e){let n=!1;Hs<=Ic?$f(t)||(t.n|=Xn,n=!Bf(t)):n=!t.has(Bt),n&&(t.add(Bt),Bt.deps.push(t))}function mn(t,e,n,r,s,i){const a=ko.get(t);if(!a)return;let c=[];if(e==="clear")c=[...a.values()];else if(n==="length"&&oe(t)){const l=Number(r);a.forEach((u,d)=>{(d==="length"||!Xr(d)&&d>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(a.get(n)),e){case"add":oe(t)?ul(n)&&c.push(a.get("length")):(c.push(a.get(dr)),jr(t)&&c.push(a.get(Ac)));break;case"delete":oe(t)||(c.push(a.get(dr)),jr(t)&&c.push(a.get(Ac)));break;case"set":jr(t)&&c.push(a.get(dr));break}if(c.length===1)c[0]&&bc(c[0]);else{const l=[];for(const u of c)u&&l.push(...u);bc(dl(l))}}function bc(t,e){const n=oe(t)?t:[...t];for(const r of n)r.computed&&Eh(r);for(const r of n)r.computed||Eh(r)}function Eh(t,e){(t!==Bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Qg(t,e){var n;return(n=ko.get(t))==null?void 0:n.get(e)}const Xg=al("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xr)),Th=Yg();function Yg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ce(this);for(let i=0,a=this.length;i<a;i++)Nt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ms();const r=Ce(this)[e].apply(this,n);return _s(),r}}),t}function Jg(t){const e=Ce(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class Gf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?hy:Qf:i?Wf:Kf).get(e))return e;const a=oe(e);if(!s){if(a&&Se(Th,n))return Reflect.get(Th,n,r);if(n==="hasOwnProperty")return Jg}const c=Reflect.get(e,n,r);return(Xr(n)?qf.has(n):Xg(n))||(s||Nt(e,"get",n),i)?c:Ke(c)?a&&ul(n)?c:c.value:Le(c)?s?Yf(c):Ri(c):c}}class zf extends Gf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Jr(i)&&Ke(i)&&!Ke(r))return!1;if(!this._shallow&&(!Vo(r)&&!Jr(r)&&(i=Ce(i),r=Ce(r)),!oe(e)&&Ke(i)&&!Ke(r)))return i.value=r,!0;const a=oe(e)&&ul(n)?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,s);return e===Ce(s)&&(a?mr(r,i)&&mn(e,"set",n,r):mn(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Xr(n)||!qf.has(n))&&Nt(e,"has",n),r}ownKeys(e){return Nt(e,"iterate",oe(e)?"length":dr),Reflect.ownKeys(e)}}class Zg extends Gf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ey=new zf,ty=new Zg,ny=new zf(!0),pl=t=>t,oa=t=>Reflect.getPrototypeOf(t);function to(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ce(t),i=Ce(e);n||(mr(e,i)&&Nt(s,"get",e),Nt(s,"get",i));const{has:a}=oa(s),c=r?pl:n?gl:ai;if(a.call(s,e))return c(t.get(e));if(a.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function no(t,e=!1){const n=this.__v_raw,r=Ce(n),s=Ce(t);return e||(mr(t,s)&&Nt(r,"has",t),Nt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ro(t,e=!1){return t=t.__v_raw,!e&&Nt(Ce(t),"iterate",dr),Reflect.get(t,"size",t)}function wh(t){t=Ce(t);const e=Ce(this);return oa(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function Ih(t,e){e=Ce(e);const n=Ce(this),{has:r,get:s}=oa(n);let i=r.call(n,t);i||(t=Ce(t),i=r.call(n,t));const a=s.call(n,t);return n.set(t,e),i?mr(e,a)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function Ah(t){const e=Ce(this),{has:n,get:r}=oa(e);let s=n.call(e,t);s||(t=Ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function bh(){const t=Ce(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function so(t,e){return function(r,s){const i=this,a=i.__v_raw,c=Ce(a),l=e?pl:t?gl:ai;return!t&&Nt(c,"iterate",dr),a.forEach((u,d)=>r.call(s,l(u),l(d),i))}}function io(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),a=jr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,u=s[t](...r),d=n?pl:e?gl:ai;return!e&&Nt(i,"iterate",l?Ac:dr),{next(){const{value:p,done:_}=u.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function Nn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ry(){const t={get(i){return to(this,i)},get size(){return ro(this)},has:no,add:wh,set:Ih,delete:Ah,clear:bh,forEach:so(!1,!1)},e={get(i){return to(this,i,!1,!0)},get size(){return ro(this)},has:no,add:wh,set:Ih,delete:Ah,clear:bh,forEach:so(!1,!0)},n={get(i){return to(this,i,!0)},get size(){return ro(this,!0)},has(i){return no.call(this,i,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:so(!0,!1)},r={get(i){return to(this,i,!0,!0)},get size(){return ro(this,!0)},has(i){return no.call(this,i,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=io(i,!1,!1),n[i]=io(i,!0,!1),e[i]=io(i,!1,!0),r[i]=io(i,!0,!0)}),[t,n,e,r]}const[sy,iy,oy,ay]=ry();function ml(t,e){const n=e?t?ay:oy:t?iy:sy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const cy={get:ml(!1,!1)},ly={get:ml(!1,!0)},uy={get:ml(!0,!1)},Kf=new WeakMap,Wf=new WeakMap,Qf=new WeakMap,hy=new WeakMap;function dy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fy(t){return t.__v_skip||!Object.isExtensible(t)?0:dy(xg(t))}function Ri(t){return Jr(t)?t:_l(t,!1,ey,cy,Kf)}function Xf(t){return _l(t,!1,ny,ly,Wf)}function Yf(t){return _l(t,!0,ty,uy,Qf)}function _l(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=fy(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Hn(t){return Jr(t)?Hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jr(t){return!!(t&&t.__v_isReadonly)}function Vo(t){return!!(t&&t.__v_isShallow)}function Jf(t){return Hn(t)||Jr(t)}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function aa(t){return Do(t,"__v_skip",!0),t}const ai=t=>Le(t)?Ri(t):t,gl=t=>Le(t)?Yf(t):t;function Zf(t){jn&&Bt&&(t=Ce(t),Hf(t.dep||(t.dep=dl())))}function ep(t,e){t=Ce(t);const n=t.dep;n&&bc(n)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return tp(t,!1)}function py(t){return tp(t,!0)}function tp(t,e){return Ke(t)?t:new my(t,e)}class my{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ce(e),this._value=n?e:ai(e)}get value(){return Zf(this),this._value}set value(e){const n=this.__v_isShallow||Vo(e)||Jr(e);e=n?e:Ce(e),mr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ai(e),ep(this))}}function De(t){return Ke(t)?t.value:t}const _y={get:(t,e,n)=>De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function np(t){return Hn(t)?t:new Proxy(t,_y)}function gy(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=vy(t,n);return e}class yy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Qg(Ce(this._object),this._key)}}function vy(t,e,n){const r=t[e];return Ke(r)?r:new yy(t,e,n)}class Ey{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new fl(e,()=>{this._dirty||(this._dirty=!0,ep(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ce(this);return Zf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ty(t,e,n=!1){let r,s;const i=_e(t);return i?(r=t,s=qt):(r=t.get,s=t.set),new Ey(r,s,i||!s,n)}function qn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ca(i,e,n)}return s}function Gt(t,e,n,r){if(_e(t)){const i=qn(t,e,n,r);return i&&Df(i)&&i.catch(a=>{ca(a,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}function ca(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,c=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){qn(l,null,10,[t,a,c]);return}}wy(t,n,s,r)}function wy(t,e,n,r=!0){console.error(t)}let ci=!1,Rc=!1;const vt=[];let Jt=0;const Hr=[];let un=null,cr=0;const rp=Promise.resolve();let yl=null;function vl(t){const e=yl||rp;return t?e.then(this?t.bind(this):t):e}function Iy(t){let e=Jt+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=li(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function El(t){(!vt.length||!vt.includes(t,ci&&t.allowRecurse?Jt+1:Jt))&&(t.id==null?vt.push(t):vt.splice(Iy(t.id),0,t),sp())}function sp(){!ci&&!Rc&&(Rc=!0,yl=rp.then(op))}function Ay(t){const e=vt.indexOf(t);e>Jt&&vt.splice(e,1)}function by(t){oe(t)?Hr.push(...t):(!un||!un.includes(t,t.allowRecurse?cr+1:cr))&&Hr.push(t),sp()}function Rh(t,e=ci?Jt+1:0){for(;e<vt.length;e++){const n=vt[e];n&&n.pre&&(vt.splice(e,1),e--,n())}}function ip(t){if(Hr.length){const e=[...new Set(Hr)];if(Hr.length=0,un){un.push(...e);return}for(un=e,un.sort((n,r)=>li(n)-li(r)),cr=0;cr<un.length;cr++)un[cr]();un=null,cr=0}}const li=t=>t.id==null?1/0:t.id,Ry=(t,e)=>{const n=li(t)-li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function op(t){Rc=!1,ci=!0,vt.sort(Ry);const e=qt;try{for(Jt=0;Jt<vt.length;Jt++){const n=vt[Jt];n&&n.active!==!1&&qn(n,null,14)}}finally{Jt=0,vt.length=0,ip(),ci=!1,yl=null,(vt.length||Hr.length)&&op()}}function Sy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),a=i&&e.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:_}=r[d]||Be;_&&(s=n.map(T=>Ze(T)?T.trim():T)),p&&(s=n.map(Oo))}let c,l=r[c=rc(e)]||r[c=rc(Yr(e))];!l&&i&&(l=r[c=rc(Ar(e))]),l&&Gt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Gt(u,t,6,s)}}function ap(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!_e(t)){const l=u=>{const d=ap(u,e,!0);d&&(c=!0,ut(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Le(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>a[l]=null):ut(a,i),Le(t)&&r.set(t,a),a)}function la(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Ar(e))||Se(t,e))}let Mt=null,ua=null;function xo(t){const e=Mt;return Mt=t,ua=t&&t.type.__scopeId||null,e}function gs(t){ua=t}function ys(){ua=null}function mo(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mh(-1);const i=xo(e);let a;try{a=t(...s)}finally{xo(i),r._d&&Mh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function sc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[a],slots:c,attrs:l,emit:u,render:d,renderCache:p,data:_,setupState:T,ctx:C,inheritAttrs:k}=t;let D,j;const H=xo(t);try{if(n.shapeFlag&4){const V=s||r,ee=V;D=Yt(d.call(ee,V,p,i,T,_,C)),j=l}else{const V=e;D=Yt(V.length>1?V(i,{attrs:l,slots:c,emit:u}):V(i,null)),j=e.props?l:Py(l)}}catch(V){Ys.length=0,ca(V,t,1),D=Pe(_r)}let L=D;if(j&&k!==!1){const V=Object.keys(j),{shapeFlag:ee}=L;V.length&&ee&7&&(a&&V.some(cl)&&(j=Cy(j,a)),L=Zr(L,j))}return n.dirs&&(L=Zr(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),D=L,xo(H),D}const Py=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},Cy=(t,e)=>{const n={};for(const r in t)(!cl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ny(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sh(r,a,u):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(a[_]!==r[_]&&!la(u,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Sh(r,a,u):!0:!!a;return!1}function Sh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!la(n,i))return!0}return!1}function Dy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Oy=Symbol.for("v-ndc"),ky=t=>t.__isSuspense;function Vy(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):by(t)}const oo={};function Qs(t,e,n){return cp(t,e,n)}function cp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:a}=Be){var c;const l=Ff()===((c=at)==null?void 0:c.scope)?at:null;let u,d=!1,p=!1;if(Ke(t)?(u=()=>t.value,d=Vo(t)):Hn(t)?(u=()=>t,r=!0):oe(t)?(p=!0,d=t.some(V=>Hn(V)||Vo(V)),u=()=>t.map(V=>{if(Ke(V))return V.value;if(Hn(V))return ur(V);if(_e(V))return qn(V,l,2)})):_e(t)?e?u=()=>qn(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return _&&_(),Gt(t,l,3,[T])}:u=qt,e&&r){const V=u;u=()=>ur(V())}let _,T=V=>{_=H.onStop=()=>{qn(V,l,4),_=H.onStop=void 0}},C;if(di)if(T=qt,e?n&&Gt(e,l,3,[u(),p?[]:void 0,T]):u(),s==="sync"){const V=Sv();C=V.__watcherHandles||(V.__watcherHandles=[])}else return qt;let k=p?new Array(t.length).fill(oo):oo;const D=()=>{if(H.active)if(e){const V=H.run();(r||d||(p?V.some((ee,ne)=>mr(ee,k[ne])):mr(V,k)))&&(_&&_(),Gt(e,l,3,[V,k===oo?void 0:p&&k[0]===oo?[]:k,T]),k=V)}else H.run()};D.allowRecurse=!!e;let j;s==="sync"?j=D:s==="post"?j=()=>Pt(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),j=()=>El(D));const H=new fl(u,j);e?n?D():k=H.run():s==="post"?Pt(H.run.bind(H),l&&l.suspense):H.run();const L=()=>{H.stop(),l&&l.scope&&ll(l.scope.effects,H)};return C&&C.push(L),L}function xy(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?lp(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const a=at;es(this);const c=cp(s,i.bind(r),n);return a?es(a):fr(),c}function lp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ur(t,e){if(!Le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))ur(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)ur(t[n],e);else if(fs(t)||jr(t))t.forEach(n=>{ur(n,e)});else if(kf(t))for(const n in t)ur(t[n],e);return t}function $t(t,e){const n=Mt;if(n===null)return t;const r=pa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[a,c,l,u=Be]=e[i];a&&(_e(a)&&(a={mounted:a,updated:a}),a.deep&&ur(c),s.push({dir:a,instance:r,value:c,oldValue:void 0,arg:l,modifiers:u}))}return t}function ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(ms(),Gt(l,n,8,[t.el,c,t,e]),_s())}}/*! #__NO_SIDE_EFFECTS__ */function Ge(t,e){return _e(t)?(()=>ut({name:t.name},e,{setup:t}))():t}const _o=t=>!!t.type.__asyncLoader,up=t=>t.type.__isKeepAlive;function My(t,e){hp(t,"a",e)}function Ly(t,e){hp(t,"da",e)}function hp(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)up(s.parent.vnode)&&Uy(r,e,n,s),s=s.parent}}function Uy(t,e,n,r){const s=ha(e,t,r,!0);dp(()=>{ll(r[e],s)},n)}function ha(t,e,n=at,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;ms(),es(n);const c=Gt(e,n,t,a);return fr(),_s(),c});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=at)=>(!di||t==="sp")&&ha(t,(...r)=>e(...r),n),Fy=In("bm"),By=In("m"),$y=In("bu"),jy=In("u"),Hy=In("bum"),dp=In("um"),qy=In("sp"),Gy=In("rtg"),zy=In("rtc");function Ky(t,e=at){ha("ec",t,e)}function zt(t,e,n,r){let s;const i=n&&n[r];if(oe(t)||Ze(t)){s=new Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=e(t[a],a,void 0,i&&i[a])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i&&i[a])}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i&&i[c]));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const Sc=t=>t?Ip(t)?pa(t)||t.proxy:Sc(t.parent):null,Xs=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sc(t.parent),$root:t=>Sc(t.root),$emit:t=>t.emit,$options:t=>Tl(t),$forceUpdate:t=>t.f||(t.f=()=>El(t.update)),$nextTick:t=>t.n||(t.n=vl.bind(t.proxy)),$watch:t=>xy.bind(t)}),ic=(t,e)=>t!==Be&&!t.__isScriptSetup&&Se(t,e),Wy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ic(r,e))return a[e]=1,r[e];if(s!==Be&&Se(s,e))return a[e]=2,s[e];if((u=t.propsOptions[0])&&Se(u,e))return a[e]=3,i[e];if(n!==Be&&Se(n,e))return a[e]=4,n[e];Pc&&(a[e]=0)}}const d=Xs[e];let p,_;if(d)return e==="$attrs"&&Nt(t,"get",e),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Be&&Se(n,e))return a[e]=4,n[e];if(_=l.config.globalProperties,Se(_,e))return _[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ic(s,e)?(s[e]=n,!0):r!==Be&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==Be&&Se(t,a)||ic(e,a)||(c=i[0])&&Se(c,a)||Se(r,a)||Se(Xs,a)||Se(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ph(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pc=!0;function Qy(t){const e=Tl(t),n=t.proxy,r=t.ctx;Pc=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:_,beforeUpdate:T,updated:C,activated:k,deactivated:D,beforeDestroy:j,beforeUnmount:H,destroyed:L,unmounted:V,render:ee,renderTracked:ne,renderTriggered:A,errorCaptured:g,serverPrefetch:y,expose:I,inheritAttrs:b,components:R,directives:E,filters:st}=e;if(u&&Xy(u,r,null),a)for(const Re in a){const ve=a[Re];_e(ve)&&(r[Re]=ve.bind(n))}if(s){const Re=s.call(n,n);Le(Re)&&(t.data=Ri(Re))}if(Pc=!0,i)for(const Re in i){const ve=i[Re],Dt=_e(ve)?ve.bind(n,n):_e(ve.get)?ve.get.bind(n,n):qt,Lt=!_e(ve)&&_e(ve.set)?ve.set.bind(n):qt,xt=me({get:Dt,set:Lt});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>xt.value,set:$e=>xt.value=$e})}if(c)for(const Re in c)fp(c[Re],r,n,Re);if(l){const Re=_e(l)?l.call(n):l;Reflect.ownKeys(Re).forEach(ve=>{go(ve,Re[ve])})}d&&Ch(d,t,"c");function be(Re,ve){oe(ve)?ve.forEach(Dt=>Re(Dt.bind(n))):ve&&Re(ve.bind(n))}if(be(Fy,p),be(By,_),be($y,T),be(jy,C),be(My,k),be(Ly,D),be(Ky,g),be(zy,ne),be(Gy,A),be(Hy,H),be(dp,V),be(qy,y),oe(I))if(I.length){const Re=t.exposed||(t.exposed={});I.forEach(ve=>{Object.defineProperty(Re,ve,{get:()=>n[ve],set:Dt=>n[ve]=Dt})})}else t.exposed||(t.exposed={});ee&&t.render===qt&&(t.render=ee),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),E&&(t.directives=E)}function Xy(t,e,n=qt){oe(t)&&(t=Cc(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=Zt(s.from||r,s.default,!0):i=Zt(s.from||r):i=Zt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Ch(t,e,n){Gt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fp(t,e,n,r){const s=r.includes(".")?lp(n,r):()=>n[r];if(Ze(t)){const i=e[t];_e(i)&&Qs(s,i)}else if(_e(t))Qs(s,t.bind(n));else if(Le(t))if(oe(t))t.forEach(i=>fp(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Qs(s,i,t)}}function Tl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Mo(l,u,a,!0)),Mo(l,e,a)),Le(e)&&i.set(e,l),l}function Mo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Mo(t,i,n,!0),s&&s.forEach(a=>Mo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Yy[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Yy={data:Nh,props:Dh,emits:Dh,methods:qs,computed:qs,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:qs,directives:qs,watch:Zy,provide:Nh,inject:Jy};function Nh(t,e){return e?t?function(){return ut(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function Jy(t,e){return qs(Cc(t),Cc(e))}function Cc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?ut(Object.create(null),t,e):e}function Dh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:ut(Object.create(null),Ph(t),Ph(e??{})):e}function Zy(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function pp(){return{app:null,config:{isNativeTag:Og,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ev=0;function tv(t,e){return function(r,s=null){_e(r)||(r=ut({},r)),s!=null&&!Le(s)&&(s=null);const i=pp(),a=new WeakSet;let c=!1;const l=i.app={_uid:ev++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Pv,get config(){return i.config},set config(u){},use(u,...d){return a.has(u)||(u&&_e(u.install)?(a.add(u),u.install(l,...d)):_e(u)&&(a.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const _=Pe(r,s);return _.appContext=i,d&&e?e(_,u):t(_,u,p),c=!0,l._container=u,u.__vue_app__=l,pa(_.component)||_.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){ui=l;try{return u()}finally{ui=null}}};return l}}let ui=null;function go(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=at||Mt;if(r||ui){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ui._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}function nv(){return!!(at||Mt||ui)}function rv(t,e,n,r=!1){const s={},i={};Do(i,fa,1),t.propsDefaults=Object.create(null),mp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Xf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=Ce(s),[l]=t.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(la(t.emitsOptions,_))continue;const T=e[_];if(l)if(Se(i,_))T!==i[_]&&(i[_]=T,u=!0);else{const C=Yr(_);s[C]=Nc(l,c,C,T,t,!1)}else T!==i[_]&&(i[_]=T,u=!0)}}}else{mp(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!Se(e,p)&&((d=Ar(p))===p||!Se(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Nc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&mn(t,"set","$attrs")}function mp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(fo(l))continue;const u=e[l];let d;s&&Se(s,d=Yr(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:la(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,a=!0)}if(i){const l=Ce(n),u=c||Be;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Nc(s,l,p,u[p],t,!Se(u,p))}}return a}function Nc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Se(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&_e(l)){const{propsDefaults:u}=s;n in u?r=u[n]:(es(s),r=u[n]=l.call(null,e),fr())}else r=l}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Ar(n))&&(r=!0))}return r}function _p(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!_e(t)){const d=p=>{l=!0;const[_,T]=_p(p,e,!0);ut(a,_),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Le(t)&&r.set(t,$r),$r;if(oe(i))for(let d=0;d<i.length;d++){const p=Yr(i[d]);Oh(p)&&(a[p]=Be)}else if(i)for(const d in i){const p=Yr(d);if(Oh(p)){const _=i[d],T=a[p]=oe(_)||_e(_)?{type:_}:ut({},_);if(T){const C=xh(Boolean,T.type),k=xh(String,T.type);T[0]=C>-1,T[1]=k<0||C<k,(C>-1||Se(T,"default"))&&c.push(p)}}}const u=[a,c];return Le(t)&&r.set(t,u),u}function Oh(t){return t[0]!=="$"}function kh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Vh(t,e){return kh(t)===kh(e)}function xh(t,e){return oe(e)?e.findIndex(n=>Vh(n,t)):_e(e)&&Vh(e,t)?0:-1}const gp=t=>t[0]==="_"||t==="$stable",wl=t=>oe(t)?t.map(Yt):[Yt(t)],iv=(t,e,n)=>{if(e._n)return e;const r=mo((...s)=>wl(e(...s)),n);return r._c=!1,r},yp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(gp(s))continue;const i=t[s];if(_e(i))e[s]=iv(s,i,r);else if(i!=null){const a=wl(i);e[s]=()=>a}}},vp=(t,e)=>{const n=wl(e);t.slots.default=()=>n},ov=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ce(e),Do(e,"_",n)):yp(e,t.slots={})}else t.slots={},e&&vp(t,e);Do(t.slots,fa,1)},av=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Be;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ut(s,e),!n&&c===1&&delete s._):(i=!e.$stable,yp(e,s)),a=e}else e&&(vp(t,e),a={default:1});if(i)for(const c in s)!gp(c)&&a[c]==null&&delete s[c]};function Dc(t,e,n,r,s=!1){if(oe(t)){t.forEach((_,T)=>Dc(_,e&&(oe(e)?e[T]:e),n,r,s));return}if(_o(r)&&!s)return;const i=r.shapeFlag&4?pa(r.component)||r.component.proxy:r.el,a=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Be?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(Ze(u)?(d[u]=null,Se(p,u)&&(p[u]=null)):Ke(u)&&(u.value=null)),_e(l))qn(l,c,12,[a,d]);else{const _=Ze(l),T=Ke(l);if(_||T){const C=()=>{if(t.f){const k=_?Se(p,l)?p[l]:d[l]:l.value;s?oe(k)&&ll(k,i):oe(k)?k.includes(i)||k.push(i):_?(d[l]=[i],Se(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else _?(d[l]=a,Se(p,l)&&(p[l]=a)):T&&(l.value=a,t.k&&(d[t.k]=a))};a?(C.id=-1,Pt(C,n)):C()}}}const Pt=Vy;function cv(t){return lv(t)}function lv(t,e){const n=wc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:_,setScopeId:T=qt,insertStaticContent:C}=t,k=(v,w,P,O=null,U=null,F=null,X=!1,q=null,z=!!w.dynamicChildren)=>{if(v===w)return;v&&!Fs(v,w)&&(O=x(v),$e(v,U,F,!0),v=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:B,ref:se,shapeFlag:J}=w;switch(B){case da:D(v,w,P,O);break;case _r:j(v,w,P,O);break;case yo:v==null&&H(w,P,O,X);break;case ze:R(v,w,P,O,U,F,X,q,z);break;default:J&1?ee(v,w,P,O,U,F,X,q,z):J&6?E(v,w,P,O,U,F,X,q,z):(J&64||J&128)&&B.process(v,w,P,O,U,F,X,q,z,W)}se!=null&&U&&Dc(se,v&&v.ref,F,w||v,!w)},D=(v,w,P,O)=>{if(v==null)r(w.el=c(w.children),P,O);else{const U=w.el=v.el;w.children!==v.children&&u(U,w.children)}},j=(v,w,P,O)=>{v==null?r(w.el=l(w.children||""),P,O):w.el=v.el},H=(v,w,P,O)=>{[v.el,v.anchor]=C(v.children,w,P,O,v.el,v.anchor)},L=({el:v,anchor:w},P,O)=>{let U;for(;v&&v!==w;)U=_(v),r(v,P,O),v=U;r(w,P,O)},V=({el:v,anchor:w})=>{let P;for(;v&&v!==w;)P=_(v),s(v),v=P;s(w)},ee=(v,w,P,O,U,F,X,q,z)=>{X=X||w.type==="svg",v==null?ne(w,P,O,U,F,X,q,z):y(v,w,U,F,X,q,z)},ne=(v,w,P,O,U,F,X,q)=>{let z,B;const{type:se,props:J,shapeFlag:re,transition:ce,dirs:ge}=v;if(z=v.el=a(v.type,F,J&&J.is,J),re&8?d(z,v.children):re&16&&g(v.children,z,null,O,U,F&&se!=="foreignObject",X,q),ge&&ir(v,null,O,"created"),A(z,v,v.scopeId,X,O),J){for(const he in J)he!=="value"&&!fo(he)&&i(z,he,null,J[he],F,v.children,O,U,tt);"value"in J&&i(z,"value",null,J.value),(B=J.onVnodeBeforeMount)&&Xt(B,O,v)}ge&&ir(v,null,O,"beforeMount");const fe=uv(U,ce);fe&&ce.beforeEnter(z),r(z,w,P),((B=J&&J.onVnodeMounted)||fe||ge)&&Pt(()=>{B&&Xt(B,O,v),fe&&ce.enter(z),ge&&ir(v,null,O,"mounted")},U)},A=(v,w,P,O,U)=>{if(P&&T(v,P),O)for(let F=0;F<O.length;F++)T(v,O[F]);if(U){let F=U.subTree;if(w===F){const X=U.vnode;A(v,X,X.scopeId,X.slotScopeIds,U.parent)}}},g=(v,w,P,O,U,F,X,q,z=0)=>{for(let B=z;B<v.length;B++){const se=v[B]=q?Vn(v[B]):Yt(v[B]);k(null,se,w,P,O,U,F,X,q)}},y=(v,w,P,O,U,F,X)=>{const q=w.el=v.el;let{patchFlag:z,dynamicChildren:B,dirs:se}=w;z|=v.patchFlag&16;const J=v.props||Be,re=w.props||Be;let ce;P&&or(P,!1),(ce=re.onVnodeBeforeUpdate)&&Xt(ce,P,w,v),se&&ir(w,v,P,"beforeUpdate"),P&&or(P,!0);const ge=U&&w.type!=="foreignObject";if(B?I(v.dynamicChildren,B,q,P,O,ge,F):X||ve(v,w,q,null,P,O,ge,F,!1),z>0){if(z&16)b(q,w,J,re,P,O,U);else if(z&2&&J.class!==re.class&&i(q,"class",null,re.class,U),z&4&&i(q,"style",J.style,re.style,U),z&8){const fe=w.dynamicProps;for(let he=0;he<fe.length;he++){const Ue=fe[he],Rt=J[Ue],on=re[Ue];(on!==Rt||Ue==="value")&&i(q,Ue,Rt,on,U,v.children,P,O,tt)}}z&1&&v.children!==w.children&&d(q,w.children)}else!X&&B==null&&b(q,w,J,re,P,O,U);((ce=re.onVnodeUpdated)||se)&&Pt(()=>{ce&&Xt(ce,P,w,v),se&&ir(w,v,P,"updated")},O)},I=(v,w,P,O,U,F,X)=>{for(let q=0;q<w.length;q++){const z=v[q],B=w[q],se=z.el&&(z.type===ze||!Fs(z,B)||z.shapeFlag&70)?p(z.el):P;k(z,B,se,null,O,U,F,X,!0)}},b=(v,w,P,O,U,F,X)=>{if(P!==O){if(P!==Be)for(const q in P)!fo(q)&&!(q in O)&&i(v,q,P[q],null,X,w.children,U,F,tt);for(const q in O){if(fo(q))continue;const z=O[q],B=P[q];z!==B&&q!=="value"&&i(v,q,B,z,X,w.children,U,F,tt)}"value"in O&&i(v,"value",P.value,O.value)}},R=(v,w,P,O,U,F,X,q,z)=>{const B=w.el=v?v.el:c(""),se=w.anchor=v?v.anchor:c("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:ce}=w;ce&&(q=q?q.concat(ce):ce),v==null?(r(B,P,O),r(se,P,O),g(w.children,P,se,U,F,X,q,z)):J>0&&J&64&&re&&v.dynamicChildren?(I(v.dynamicChildren,re,P,U,F,X,q),(w.key!=null||U&&w===U.subTree)&&Ep(v,w,!0)):ve(v,w,P,se,U,F,X,q,z)},E=(v,w,P,O,U,F,X,q,z)=>{w.slotScopeIds=q,v==null?w.shapeFlag&512?U.ctx.activate(w,P,O,X,z):st(w,P,O,U,F,X,z):et(v,w,z)},st=(v,w,P,O,U,F,X)=>{const q=v.component=Ev(v,O,U);if(up(v)&&(q.ctx.renderer=W),Tv(q),q.asyncDep){if(U&&U.registerDep(q,be),!v.el){const z=q.subTree=Pe(_r);j(null,z,w,P)}return}be(q,v,w,P,U,F,X)},et=(v,w,P)=>{const O=w.component=v.component;if(Ny(v,w,P))if(O.asyncDep&&!O.asyncResolved){Re(O,w,P);return}else O.next=w,Ay(O.update),O.update();else w.el=v.el,O.vnode=w},be=(v,w,P,O,U,F,X)=>{const q=()=>{if(v.isMounted){let{next:se,bu:J,u:re,parent:ce,vnode:ge}=v,fe=se,he;or(v,!1),se?(se.el=ge.el,Re(v,se,X)):se=ge,J&&po(J),(he=se.props&&se.props.onVnodeBeforeUpdate)&&Xt(he,ce,se,ge),or(v,!0);const Ue=sc(v),Rt=v.subTree;v.subTree=Ue,k(Rt,Ue,p(Rt.el),x(Rt),v,U,F),se.el=Ue.el,fe===null&&Dy(v,Ue.el),re&&Pt(re,U),(he=se.props&&se.props.onVnodeUpdated)&&Pt(()=>Xt(he,ce,se,ge),U)}else{let se;const{el:J,props:re}=w,{bm:ce,m:ge,parent:fe}=v,he=_o(w);if(or(v,!1),ce&&po(ce),!he&&(se=re&&re.onVnodeBeforeMount)&&Xt(se,fe,w),or(v,!0),J&&we){const Ue=()=>{v.subTree=sc(v),we(J,v.subTree,v,U,null)};he?w.type.__asyncLoader().then(()=>!v.isUnmounted&&Ue()):Ue()}else{const Ue=v.subTree=sc(v);k(null,Ue,P,O,v,U,F),w.el=Ue.el}if(ge&&Pt(ge,U),!he&&(se=re&&re.onVnodeMounted)){const Ue=w;Pt(()=>Xt(se,fe,Ue),U)}(w.shapeFlag&256||fe&&_o(fe.vnode)&&fe.vnode.shapeFlag&256)&&v.a&&Pt(v.a,U),v.isMounted=!0,w=P=O=null}},z=v.effect=new fl(q,()=>El(B),v.scope),B=v.update=()=>z.run();B.id=v.uid,or(v,!0),B()},Re=(v,w,P)=>{w.component=v;const O=v.vnode.props;v.vnode=w,v.next=null,sv(v,w.props,O,P),av(v,w.children,P),ms(),Rh(),_s()},ve=(v,w,P,O,U,F,X,q,z=!1)=>{const B=v&&v.children,se=v?v.shapeFlag:0,J=w.children,{patchFlag:re,shapeFlag:ce}=w;if(re>0){if(re&128){Lt(B,J,P,O,U,F,X,q,z);return}else if(re&256){Dt(B,J,P,O,U,F,X,q,z);return}}ce&8?(se&16&&tt(B,U,F),J!==B&&d(P,J)):se&16?ce&16?Lt(B,J,P,O,U,F,X,q,z):tt(B,U,F,!0):(se&8&&d(P,""),ce&16&&g(J,P,O,U,F,X,q,z))},Dt=(v,w,P,O,U,F,X,q,z)=>{v=v||$r,w=w||$r;const B=v.length,se=w.length,J=Math.min(B,se);let re;for(re=0;re<J;re++){const ce=w[re]=z?Vn(w[re]):Yt(w[re]);k(v[re],ce,P,null,U,F,X,q,z)}B>se?tt(v,U,F,!0,!1,J):g(w,P,O,U,F,X,q,z,J)},Lt=(v,w,P,O,U,F,X,q,z)=>{let B=0;const se=w.length;let J=v.length-1,re=se-1;for(;B<=J&&B<=re;){const ce=v[B],ge=w[B]=z?Vn(w[B]):Yt(w[B]);if(Fs(ce,ge))k(ce,ge,P,null,U,F,X,q,z);else break;B++}for(;B<=J&&B<=re;){const ce=v[J],ge=w[re]=z?Vn(w[re]):Yt(w[re]);if(Fs(ce,ge))k(ce,ge,P,null,U,F,X,q,z);else break;J--,re--}if(B>J){if(B<=re){const ce=re+1,ge=ce<se?w[ce].el:O;for(;B<=re;)k(null,w[B]=z?Vn(w[B]):Yt(w[B]),P,ge,U,F,X,q,z),B++}}else if(B>re)for(;B<=J;)$e(v[B],U,F,!0),B++;else{const ce=B,ge=B,fe=new Map;for(B=ge;B<=re;B++){const dt=w[B]=z?Vn(w[B]):Yt(w[B]);dt.key!=null&&fe.set(dt.key,B)}let he,Ue=0;const Rt=re-ge+1;let on=!1,Fi=0;const Ut=new Array(Rt);for(B=0;B<Rt;B++)Ut[B]=0;for(B=ce;B<=J;B++){const dt=v[B];if(Ue>=Rt){$e(dt,U,F,!0);continue}let St;if(dt.key!=null)St=fe.get(dt.key);else for(he=ge;he<=re;he++)if(Ut[he-ge]===0&&Fs(dt,w[he])){St=he;break}St===void 0?$e(dt,U,F,!0):(Ut[St-ge]=B+1,St>=Fi?Fi=St:on=!0,k(dt,w[St],P,null,U,F,X,q,z),Ue++)}const bs=on?hv(Ut):$r;for(he=bs.length-1,B=Rt-1;B>=0;B--){const dt=ge+B,St=w[dt],Bi=dt+1<se?w[dt+1].el:O;Ut[B]===0?k(null,St,P,Bi,U,F,X,q,z):on&&(he<0||B!==bs[he]?xt(St,P,Bi,2):he--)}}},xt=(v,w,P,O,U=null)=>{const{el:F,type:X,transition:q,children:z,shapeFlag:B}=v;if(B&6){xt(v.component.subTree,w,P,O);return}if(B&128){v.suspense.move(w,P,O);return}if(B&64){X.move(v,w,P,W);return}if(X===ze){r(F,w,P);for(let J=0;J<z.length;J++)xt(z[J],w,P,O);r(v.anchor,w,P);return}if(X===yo){L(v,w,P);return}if(O!==2&&B&1&&q)if(O===0)q.beforeEnter(F),r(F,w,P),Pt(()=>q.enter(F),U);else{const{leave:J,delayLeave:re,afterLeave:ce}=q,ge=()=>r(F,w,P),fe=()=>{J(F,()=>{ge(),ce&&ce()})};re?re(F,ge,fe):fe()}else r(F,w,P)},$e=(v,w,P,O=!1,U=!1)=>{const{type:F,props:X,ref:q,children:z,dynamicChildren:B,shapeFlag:se,patchFlag:J,dirs:re}=v;if(q!=null&&Dc(q,null,P,v,!0),se&256){w.ctx.deactivate(v);return}const ce=se&1&&re,ge=!_o(v);let fe;if(ge&&(fe=X&&X.onVnodeBeforeUnmount)&&Xt(fe,w,v),se&6)Qt(v.component,P,O);else{if(se&128){v.suspense.unmount(P,O);return}ce&&ir(v,null,w,"beforeUnmount"),se&64?v.type.remove(v,w,P,U,W,O):B&&(F!==ze||J>0&&J&64)?tt(B,w,P,!1,!0):(F===ze&&J&384||!U&&se&16)&&tt(z,w,P),O&&je(v)}(ge&&(fe=X&&X.onVnodeUnmounted)||ce)&&Pt(()=>{fe&&Xt(fe,w,v),ce&&ir(v,null,w,"unmounted")},P)},je=v=>{const{type:w,el:P,anchor:O,transition:U}=v;if(w===ze){Rn(P,O);return}if(w===yo){V(v);return}const F=()=>{s(P),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:X,delayLeave:q}=U,z=()=>X(P,F);q?q(v.el,F,z):z()}else F()},Rn=(v,w)=>{let P;for(;v!==w;)P=_(v),s(v),v=P;s(w)},Qt=(v,w,P)=>{const{bum:O,scope:U,update:F,subTree:X,um:q}=v;O&&po(O),U.stop(),F&&(F.active=!1,$e(X,v,w,P)),q&&Pt(q,w),Pt(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},tt=(v,w,P,O=!1,U=!1,F=0)=>{for(let X=F;X<v.length;X++)$e(v[X],w,P,O,U)},x=v=>v.shapeFlag&6?x(v.component.subTree):v.shapeFlag&128?v.suspense.next():_(v.anchor||v.el),Y=(v,w,P)=>{v==null?w._vnode&&$e(w._vnode,null,null,!0):k(w._vnode||null,v,w,null,null,null,P),Rh(),ip(),w._vnode=v},W={p:k,um:$e,m:xt,r:je,mt:st,mc:g,pc:ve,pbc:I,n:x,o:t};let te,we;return e&&([te,we]=e(W)),{render:Y,hydrate:te,createApp:tv(Y,te)}}function or({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function uv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ep(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Vn(s[i]),c.el=a.el),n||Ep(a,c)),c.type===da&&(c.el=a.el)}}function hv(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<u?i=c+1:a=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}const dv=t=>t.__isTeleport,ze=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),_r=Symbol.for("v-cmt"),yo=Symbol.for("v-stc"),Ys=[];let jt=null;function ae(t=!1){Ys.push(jt=t?null:[])}function fv(){Ys.pop(),jt=Ys[Ys.length-1]||null}let hi=1;function Mh(t){hi+=t}function Tp(t){return t.dynamicChildren=hi>0?jt||$r:null,fv(),hi>0&&jt&&jt.push(t),t}function Te(t,e,n,r,s,i){return Tp(K(t,e,n,r,s,i,!0))}function bt(t,e,n,r,s){return Tp(Pe(t,e,n,r,s,!0))}function Oc(t){return t?t.__v_isVNode===!0:!1}function Fs(t,e){return t.type===e.type&&t.key===e.key}const fa="__vInternal",wp=({key:t})=>t??null,vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Ke(t)||_e(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===ze?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wp(e),ref:e&&vo(e),scopeId:ua,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return c?(Al(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ze(n)?8:16),hi>0&&!a&&jt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&jt.push(l),l}const Pe=pv;function pv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Oy)&&(t=_r),Oc(t)){const c=Zr(t,e,!0);return n&&Al(c,n),hi>0&&!i&&jt&&(c.shapeFlag&6?jt[jt.indexOf(t)]=c:jt.push(c)),c.patchFlag|=-2,c}if(bv(t)&&(t=t.__vccOpts),e){e=mv(e);let{class:c,style:l}=e;c&&!Ze(c)&&(e.class=ps(c)),Le(l)&&(Jf(l)&&!oe(l)&&(l=ut({},l)),e.style=rt(l))}const a=Ze(t)?1:ky(t)?128:dv(t)?64:Le(t)?4:_e(t)?2:0;return K(t,e,n,r,s,a,i,!0)}function mv(t){return t?Jf(t)||fa in t?ut({},t):t:null}function Zr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:a}=t,c=e?gv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&wp(c),ref:e&&e.ref?n&&s?oe(s)?s.concat(vo(e)):[s,vo(e)]:vo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qr(t=" ",e=0){return Pe(da,null,t,e)}function _v(t,e){const n=Pe(yo,null,t);return n.staticCount=e,n}function Il(t="",e=!1){return e?(ae(),bt(_r,null,t)):Pe(_r,null,t)}function Yt(t){return t==null||typeof t=="boolean"?Pe(_r):oe(t)?Pe(ze,null,t.slice()):typeof t=="object"?Vn(t):Pe(da,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function Al(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Al(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(fa in e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[qr(e)]):n=8);t.children=e,t.shapeFlag|=n}function gv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ps([e.class,r.class]));else if(s==="style")e.style=rt([e.style,r.style]);else if(sa(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Gt(t,e,7,[n,r])}const yv=pp();let vv=0;function Ev(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yv,i={uid:vv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_p(r,s),emitsOptions:ap(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Sy.bind(null,i),t.ce&&t.ce(i),i}let at=null,bl,Vr,Lh="__VUE_INSTANCE_SETTERS__";(Vr=wc()[Lh])||(Vr=wc()[Lh]=[]),Vr.push(t=>at=t),bl=t=>{Vr.length>1?Vr.forEach(e=>e(t)):Vr[0](t)};const es=t=>{bl(t),t.scope.on()},fr=()=>{at&&at.scope.off(),bl(null)};function Ip(t){return t.vnode.shapeFlag&4}let di=!1;function Tv(t,e=!1){di=e;const{props:n,children:r}=t.vnode,s=Ip(t);rv(t,n,s,e),ov(t,r);const i=s?wv(t,e):void 0;return di=!1,i}function wv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=aa(new Proxy(t.ctx,Wy));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Av(t):null;es(t),ms();const i=qn(r,t,0,[t.props,s]);if(_s(),fr(),Df(i)){if(i.then(fr,fr),e)return i.then(a=>{Uh(t,a,e)}).catch(a=>{ca(a,t,0)});t.asyncDep=i}else Uh(t,i,e)}else Ap(t,e)}function Uh(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=np(e)),Ap(t,n)}let Fh;function Ap(t,e,n){const r=t.type;if(!t.render){if(!e&&Fh&&!r.render){const s=r.template||Tl(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=ut(ut({isCustomElement:i,delimiters:c},a),l);r.render=Fh(s,u)}}t.render=r.render||qt}{es(t),ms();try{Qy(t)}finally{_s(),fr()}}}function Iv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Nt(t,"get","$attrs"),e[n]}}))}function Av(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Iv(t)},slots:t.slots,emit:t.emit,expose:e}}function pa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(np(aa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xs)return Xs[n](t)},has(e,n){return n in e||n in Xs}}))}function bv(t){return _e(t)&&"__vccOpts"in t}const me=(t,e)=>Ty(t,e,di);function bp(t,e,n){const r=arguments.length;return r===2?Le(e)&&!oe(e)?Oc(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Oc(n)&&(n=[n]),Pe(t,e,n))}const Rv=Symbol.for("v-scx"),Sv=()=>Zt(Rv),Pv="3.3.9",Cv="http://www.w3.org/2000/svg",lr=typeof document<"u"?document:null,Bh=lr&&lr.createElement("template"),Nv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?lr.createElementNS(Cv,t):lr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>lr.createTextNode(t),createComment:t=>lr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Bh.innerHTML=r?`<svg>${t}</svg>`:t;const c=Bh.content;if(r){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Dv=Symbol("_vtc");function Ov(t,e,n){const r=t[Dv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rl=Symbol("_vod"),Js={beforeMount(t,{value:e},{transition:n}){t[Rl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Bs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Bs(t,!0),r.enter(t)):r.leave(t,()=>{Bs(t,!1)}):Bs(t,e))},beforeUnmount(t,{value:e}){Bs(t,e)}};function Bs(t,e){t.style.display=e?t[Rl]:"none"}function kv(t,e,n){const r=t.style,s=Ze(n);if(n&&!s){if(e&&!Ze(e))for(const i in e)n[i]==null&&kc(r,i,"");for(const i in n)kc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Rl in t&&(r.display=i)}}const $h=/\s*!important$/;function kc(t,e,n){if(oe(n))n.forEach(r=>kc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Vv(t,e);$h.test(n)?t.setProperty(Ar(r),n.replace($h,""),"important"):t[r]=n}}const jh=["Webkit","Moz","ms"],oc={};function Vv(t,e){const n=oc[e];if(n)return n;let r=Yr(e);if(r!=="filter"&&r in t)return oc[e]=r;r=Vf(r);for(let s=0;s<jh.length;s++){const i=jh[s]+r;if(i in t)return oc[e]=i}return e}const Hh="http://www.w3.org/1999/xlink";function xv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hh,e.slice(6,e.length)):t.setAttributeNS(Hh,e,n);else{const i=Hg(e);n==null||i&&!xf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Mv(t,e,n,r,s,i,a){if(e==="innerHTML"||e==="textContent"){r&&a(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const u=c==="OPTION"?t.getAttribute("value"):t.value,d=n??"";u!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=xf(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mn(t,e,n,r){t.addEventListener(e,n,r)}function Lv(t,e,n,r){t.removeEventListener(e,n,r)}const qh=Symbol("_vei");function Uv(t,e,n,r,s=null){const i=t[qh]||(t[qh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Fv(e);if(r){const u=i[e]=jv(r,s);Mn(t,c,u,l)}else a&&(Lv(t,c,a,l),i[e]=void 0)}}const Gh=/(?:Once|Passive|Capture)$/;function Fv(t){let e;if(Gh.test(t)){e={};let r;for(;r=t.match(Gh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ar(t.slice(2)),e]}let ac=0;const Bv=Promise.resolve(),$v=()=>ac||(Bv.then(()=>ac=0),ac=Date.now());function jv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(Hv(r,n.value),e,5,[r])};return n.value=t,n.attached=$v(),n}function Hv(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const zh=/^on[a-z]/,qv=(t,e,n,r,s=!1,i,a,c,l)=>{e==="class"?Ov(t,r,s):e==="style"?kv(t,n,r):sa(e)?cl(e)||Uv(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gv(t,e,r,s))?Mv(t,e,r,i,a,c,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xv(t,e,r,s))};function Gv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&zh.test(e)&&_e(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||zh.test(e)&&Ze(n)?!1:e in t}const ts=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>po(e,n):e};function zv(t){t.target.composing=!0}function Kh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _n=Symbol("_assign"),Kv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_n]=ts(s);const i=r||s.props&&s.props.type==="number";Mn(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Oo(c)),t[_n](c)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",zv),Mn(t,"compositionend",Kh),Mn(t,"change",Kh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[_n]=ts(i),t.composing)return;const a=s||t.type==="number"?Oo(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},Wv={deep:!0,created(t,e,n){t[_n]=ts(n),Mn(t,"change",()=>{const r=t._modelValue,s=fi(t),i=t.checked,a=t[_n];if(oe(r)){const c=hl(r,s),l=c!==-1;if(i&&!l)a(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),a(u)}}else if(fs(r)){const c=new Set(r);i?c.add(s):c.delete(s),a(c)}else a(Rp(t,i))})},mounted:Wh,beforeUpdate(t,e,n){t[_n]=ts(n),Wh(t,e,n)}};function Wh(t,{value:e,oldValue:n},r){t._modelValue=e,oe(e)?t.checked=hl(e,r.props.value)>-1:fs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=bi(e,Rp(t,!0)))}const Eo={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=fs(e);Mn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Oo(fi(a)):fi(a));t[_n](t.multiple?s?new Set(i):i:i[0])}),t[_n]=ts(r)},mounted(t,{value:e}){Qh(t,e)},beforeUpdate(t,e,n){t[_n]=ts(n)},updated(t,{value:e}){Qh(t,e)}};function Qh(t,e){const n=t.multiple;if(!(n&&!oe(e)&&!fs(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],a=fi(i);if(n)oe(e)?i.selected=hl(e,a)>-1:i.selected=e.has(a);else if(bi(fi(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fi(t){return"_value"in t?t._value:t.value}function Rp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Qv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xv=(t,e)=>n=>{if(!("key"in n))return;const r=Ar(n.key);if(e.some(s=>s===r||Qv[s]===r))return t(n)},Yv=ut({patchProp:qv},Nv);let Xh;function Jv(){return Xh||(Xh=cv(Yv))}const Zv=(...t)=>{const e=Jv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=eE(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function eE(t){return Ze(t)?document.querySelector(t):t}var tE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Sp;const ma=t=>Sp=t,Pp=Symbol();function Vc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zs||(Zs={}));function nE(){const t=Uf(!0),e=t.run(()=>yt({}));let n=[],r=[];const s=aa({install(i){ma(s),s._a=i,i.provide(Pp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!tE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Cp=()=>{};function Yh(t,e,n,r=Cp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ff()&&zg(s),s}function xr(t,...e){t.slice().forEach(n=>{n(...e)})}const rE=t=>t();function xc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Vc(s)&&Vc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!Hn(r)?t[n]=xc(s,r):t[n]=r}return t}const sE=Symbol();function iE(t){return!Vc(t)||!t.hasOwnProperty(sE)}const{assign:kn}=Object;function oE(t){return!!(Ke(t)&&t.effect)}function aE(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const d=gy(n.state.value[t]);return kn(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=aa(me(()=>{ma(n);const T=n._s.get(t);return a[_].call(T,T)})),p),{}))}return l=Np(t,u,e,n,r,!0),l}function Np(t,e,n={},r,s,i){let a;const c=kn({actions:{}},n),l={deep:!0};let u,d,p=[],_=[],T;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),yt({});let k;function D(g){let y;u=d=!1,typeof g=="function"?(g(r.state.value[t]),y={type:Zs.patchFunction,storeId:t,events:T}):(xc(r.state.value[t],g),y={type:Zs.patchObject,payload:g,storeId:t,events:T});const I=k=Symbol();vl().then(()=>{k===I&&(u=!0)}),d=!0,xr(p,y,r.state.value[t])}const j=i?function(){const{state:y}=n,I=y?y():{};this.$patch(b=>{kn(b,I)})}:Cp;function H(){a.stop(),p=[],_=[],r._s.delete(t)}function L(g,y){return function(){ma(r);const I=Array.from(arguments),b=[],R=[];function E(be){b.push(be)}function st(be){R.push(be)}xr(_,{args:I,name:g,store:ee,after:E,onError:st});let et;try{et=y.apply(this&&this.$id===t?this:ee,I)}catch(be){throw xr(R,be),be}return et instanceof Promise?et.then(be=>(xr(b,be),be)).catch(be=>(xr(R,be),Promise.reject(be))):(xr(b,et),et)}}const V={_p:r,$id:t,$onAction:Yh.bind(null,_),$patch:D,$reset:j,$subscribe(g,y={}){const I=Yh(p,g,y.detached,()=>b()),b=a.run(()=>Qs(()=>r.state.value[t],R=>{(y.flush==="sync"?d:u)&&g({storeId:t,type:Zs.direct,events:T},R)},kn({},l,y)));return I},$dispose:H},ee=Ri(V);r._s.set(t,ee);const A=(r._a&&r._a.runWithContext||rE)(()=>r._e.run(()=>(a=Uf()).run(e)));for(const g in A){const y=A[g];if(Ke(y)&&!oE(y)||Hn(y))i||(C&&iE(y)&&(Ke(y)?y.value=C[g]:xc(y,C[g])),r.state.value[t][g]=y);else if(typeof y=="function"){const I=L(g,y);A[g]=I,c.actions[g]=y}}return kn(ee,A),kn(Ce(ee),A),Object.defineProperty(ee,"$state",{get:()=>r.state.value[t],set:g=>{D(y=>{kn(y,g)})}}),r._p.forEach(g=>{kn(ee,a.run(()=>g({store:ee,app:r._a,pinia:r,options:c})))}),C&&i&&n.hydrate&&n.hydrate(ee.$state,C),u=!0,d=!0,ee}function _a(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function a(c,l){const u=nv();return c=c||(u?Zt(Pp,null):null),c&&ma(c),c=Sp,c._s.has(r)||(i?Np(r,e,s,c):aE(r,s,c)),c._s.get(r)}return a.$id=r,a}function cE(t){return typeof t=="object"&&t!==null}function Jh(t,e){return t=cE(t)?t:Object.create(null),new Proxy(t,{get(n,r,s){return r==="key"?Reflect.get(n,r,s):Reflect.get(n,r,s)||Reflect.get(e,r,s)}})}function lE(t,e){return e.reduce((n,r)=>n==null?void 0:n[r],t)}function uE(t,e,n){return e.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},t)[e[e.length-1]]=n,t}function hE(t,e){return e.reduce((n,r)=>{const s=r.split(".");return uE(n,s,lE(t,s))},{})}function dE(t,e){return n=>{var r;try{const{storage:s=localStorage,beforeRestore:i=void 0,afterRestore:a=void 0,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:l=e.$id,paths:u=null,debug:d=!1}=n;return{storage:s,beforeRestore:i,afterRestore:a,serializer:c,key:((r=t.key)!=null?r:p=>p)(typeof l=="string"?l:l(e.$id)),paths:u,debug:d}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function Zh(t,{storage:e,serializer:n,key:r,debug:s}){try{const i=e==null?void 0:e.getItem(r);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){s&&console.error("[pinia-plugin-persistedstate]",i)}}function ed(t,{storage:e,serializer:n,key:r,paths:s,debug:i}){try{const a=Array.isArray(s)?hE(t,s):t;e.setItem(r,n.serialize(a))}catch(a){i&&console.error("[pinia-plugin-persistedstate]",a)}}function fE(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:r=n},store:s,pinia:i}=e;if(!r)return;if(!(s.$id in i.state.value)){const c=i._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(r)?r.map(c=>Jh(c,t)):[Jh(r,t)]).map(dE(t,s)).filter(Boolean);s.$persist=()=>{a.forEach(c=>{ed(s.$state,c)})},s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{const{beforeRestore:u,afterRestore:d}=l;c&&(u==null||u(e)),Zh(s,l),c&&(d==null||d(e))})},a.forEach(c=>{const{beforeRestore:l,afterRestore:u}=c;l==null||l(e),Zh(s,c),u==null||u(e),s.$subscribe((d,p)=>{ed(p,c)},{detached:!0})})}}const pE="MiniCrawler",mE="0.5",Mc={appName:pE,version:mE};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof window<"u";function _E(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function cc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Kt(s)?s.map(t):t(s)}return n}const ei=()=>{},Kt=Array.isArray,gE=/\/$/,yE=t=>t.replace(gE,"");function lc(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=wE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:a}}function vE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function td(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function EE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ns(e.matched[r],n.matched[s])&&Dp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TE(t[n],e[n]))return!1;return!0}function TE(t,e){return Kt(t)?nd(t,e):Kt(e)?nd(e,t):t===e}function nd(t,e){return Kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var pi;(function(t){t.pop="pop",t.push="push"})(pi||(pi={}));var ti;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ti||(ti={}));function IE(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yE(t)}const AE=/^[^#]+#/;function bE(t,e){return t.replace(AE,"#")+e}function RE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ga=()=>({left:window.pageXOffset,top:window.pageYOffset});function SE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=RE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function rd(t,e){return(history.state?history.state.position-e:-1)+t}const Lc=new Map;function PE(t,e){Lc.set(t,e)}function CE(t){const e=Lc.get(t);return Lc.delete(t),e}let NE=()=>location.protocol+"//"+location.host;function Op(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),td(l,"")}return td(n,t)+r+s}function DE(t,e,n,r){let s=[],i=[],a=null;const c=({state:_})=>{const T=Op(t,location),C=n.value,k=e.value;let D=0;if(_){if(n.value=T,e.value=_,a&&a===C){a=null;return}D=k?_.position-k.position:0}else r(T);s.forEach(j=>{j(n.value,C,{delta:D,type:pi.pop,direction:D?D>0?ti.forward:ti.back:ti.unknown})})};function l(){a=n.value}function u(_){s.push(_);const T=()=>{const C=s.indexOf(_);C>-1&&s.splice(C,1)};return i.push(T),T}function d(){const{history:_}=window;_.state&&_.replaceState(ke({},_.state,{scroll:ga()}),"")}function p(){for(const _ of i)_();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function sd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ga():null}}function OE(t){const{history:e,location:n}=window,r={value:Op(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),_=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:NE()+t+l;try{e[d?"replaceState":"pushState"](u,"",_),s.value=u}catch(T){console.error(T),n[d?"replace":"assign"](_)}}function a(l,u){const d=ke({},e.state,sd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=ke({},s.value,e.state,{forward:l,scroll:ga()});i(d.current,d,!0);const p=ke({},sd(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function kE(t){t=IE(t);const e=OE(t),n=DE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:bE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function VE(t){return typeof t=="string"||t&&typeof t=="object"}function kp(t){return typeof t=="string"||typeof t=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vp=Symbol("");var id;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(id||(id={}));function rs(t,e){return ke(new Error,{type:t,[Vp]:!0},e)}function ln(t,e){return t instanceof Error&&Vp in t&&(e==null||!!(t.type&e))}const od="[^/]+?",xE={sensitive:!1,strict:!1,start:!0,end:!0},ME=/[.+*?^${}()[\]/\\]/g;function LE(t,e){const n=ke({},xE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const _=u[p];let T=40+(n.sensitive?.25:0);if(_.type===0)p||(s+="/"),s+=_.value.replace(ME,"\\$&"),T+=40;else if(_.type===1){const{value:C,repeatable:k,optional:D,regexp:j}=_;i.push({name:C,repeatable:k,optional:D});const H=j||od;if(H!==od){T+=10;try{new RegExp(`(${H})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${C}" (${H}): `+V.message)}}let L=k?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;p||(L=D&&u.length<2?`(?:/${L})`:"/"+L),D&&(L+="?"),s+=L,T+=20,D&&(T+=-8),k&&(T+=-20),H===".*"&&(T+=-50)}d.push(T)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(a),p={};if(!d)return null;for(let _=1;_<d.length;_++){const T=d[_]||"",C=i[_-1];p[C.name]=T&&C.repeatable?T.split("/"):T}return p}function l(u){let d="",p=!1;for(const _ of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const T of _)if(T.type===0)d+=T.value;else if(T.type===1){const{value:C,repeatable:k,optional:D}=T,j=C in u?u[C]:"";if(Kt(j)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const H=Kt(j)?j.join("/"):j;if(!H)if(D)_.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=H}}return d||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function UE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function FE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=UE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ad(r))return 1;if(ad(s))return-1}return s.length-r.length}function ad(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const BE={type:0,value:""},$E=/[a-zA-Z0-9_]/;function jE(t){if(!t)return[[]];if(t==="/")return[[BE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${u}": ${T}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function _(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),a()):l===":"?(p(),n=1):_();break;case 4:_(),n=r;break;case 1:l==="("?n=2:$E.test(l)?_():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),a(),s}function HE(t,e,n){const r=LE(jE(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function qE(t,e){const n=[],r=new Map;e=ud({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,_){const T=!_,C=GE(d);C.aliasOf=_&&_.record;const k=ud(e,d),D=[C];if("alias"in d){const L=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of L)D.push(ke({},C,{components:_?_.record.components:C.components,path:V,aliasOf:_?_.record:C}))}let j,H;for(const L of D){const{path:V}=L;if(p&&V[0]!=="/"){const ee=p.record.path,ne=ee[ee.length-1]==="/"?"":"/";L.path=p.record.path+(V&&ne+V)}if(j=HE(L,p,k),_?_.alias.push(j):(H=H||j,H!==j&&H.alias.push(j),T&&d.name&&!ld(j)&&a(d.name)),C.children){const ee=C.children;for(let ne=0;ne<ee.length;ne++)i(ee[ne],j,_&&_.children[ne])}_=_||j,(j.record.components&&Object.keys(j.record.components).length||j.record.name||j.record.redirect)&&l(j)}return H?()=>{a(H)}:ei}function a(d){if(kp(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function c(){return n}function l(d){let p=0;for(;p<n.length&&FE(d,n[p])>=0&&(d.record.path!==n[p].record.path||!xp(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!ld(d)&&r.set(d.record.name,d)}function u(d,p){let _,T={},C,k;if("name"in d&&d.name){if(_=r.get(d.name),!_)throw rs(1,{location:d});k=_.record.name,T=ke(cd(p.params,_.keys.filter(H=>!H.optional).map(H=>H.name)),d.params&&cd(d.params,_.keys.map(H=>H.name))),C=_.stringify(T)}else if("path"in d)C=d.path,_=n.find(H=>H.re.test(C)),_&&(T=_.parse(C),k=_.record.name);else{if(_=p.name?r.get(p.name):n.find(H=>H.re.test(p.path)),!_)throw rs(1,{location:d,currentLocation:p});k=_.record.name,T=ke({},p.params,d.params),C=_.stringify(T)}const D=[];let j=_;for(;j;)D.unshift(j.record),j=j.parent;return{name:k,path:C,params:T,matched:D,meta:KE(D)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:a,getRoutes:c,getRecordMatcher:s}}function cd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function GE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ld(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KE(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function ud(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xp(t,e){return e.children.some(n=>n===t||xp(t,n))}const Mp=/#/g,WE=/&/g,QE=/\//g,XE=/=/g,YE=/\?/g,Lp=/\+/g,JE=/%5B/g,ZE=/%5D/g,Up=/%5E/g,e0=/%60/g,Fp=/%7B/g,t0=/%7C/g,Bp=/%7D/g,n0=/%20/g;function Sl(t){return encodeURI(""+t).replace(t0,"|").replace(JE,"[").replace(ZE,"]")}function r0(t){return Sl(t).replace(Fp,"{").replace(Bp,"}").replace(Up,"^")}function Uc(t){return Sl(t).replace(Lp,"%2B").replace(n0,"+").replace(Mp,"%23").replace(WE,"%26").replace(e0,"`").replace(Fp,"{").replace(Bp,"}").replace(Up,"^")}function s0(t){return Uc(t).replace(XE,"%3D")}function i0(t){return Sl(t).replace(Mp,"%23").replace(YE,"%3F")}function o0(t){return t==null?"":i0(t).replace(QE,"%2F")}function Lo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function a0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Lp," "),a=i.indexOf("="),c=Lo(a<0?i:i.slice(0,a)),l=a<0?null:Lo(i.slice(a+1));if(c in e){let u=e[c];Kt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function hd(t){let e="";for(let n in t){const r=t[n];if(n=s0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(r)?r.map(i=>i&&Uc(i)):[r&&Uc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function c0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const l0=Symbol(""),dd=Symbol(""),Pl=Symbol(""),$p=Symbol(""),Fc=Symbol("");function $s(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(rs(4,{from:n,to:e})):p instanceof Error?c(p):VE(p)?c(rs(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),a())},u=t.call(r&&r.instances[s],e,n,l);let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function uc(t,e,n,r){const s=[];for(const i of t)for(const a in i.components){let c=i.components[a];if(!(e!=="beforeRouteEnter"&&!i.instances[a]))if(u0(c)){const u=(c.__vccOpts||c)[e];u&&s.push(xn(u,n,r,i,a))}else{let l=c();s.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=_E(u)?u.default:u;i.components[a]=d;const _=(d.__vccOpts||d)[e];return _&&xn(_,n,r,i,a)()}))}}return s}function u0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fd(t){const e=Zt(Pl),n=Zt($p),r=me(()=>e.resolve(De(t.to))),s=me(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const _=p.findIndex(ns.bind(null,d));if(_>-1)return _;const T=pd(l[u-2]);return u>1&&pd(d)===T&&p[p.length-1].path!==T?p.findIndex(ns.bind(null,l[u-2])):_}),i=me(()=>s.value>-1&&f0(n.params,r.value.params)),a=me(()=>s.value>-1&&s.value===n.matched.length-1&&Dp(n.params,r.value.params));function c(l={}){return d0(l)?e[De(t.replace)?"replace":"push"](De(t.to)).catch(ei):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}const h0=Ge({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fd,setup(t,{slots:e}){const n=Ri(fd(t)),{options:r}=Zt(Pl),s=me(()=>({[md(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[md(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:bp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),To=h0;function d0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function f0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Kt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function pd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const md=(t,e,n)=>t??e??n,p0=Ge({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(Fc),s=me(()=>t.route||r.value),i=Zt(dd,0),a=me(()=>{let u=De(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=me(()=>s.value.matched[a.value]);go(dd,me(()=>a.value+1)),go(l0,c),go(Fc,s);const l=yt();return Qs(()=>[l.value,c.value,t.name],([u,d,p],[_,T,C])=>{d&&(d.instances[p]=u,T&&T!==d&&u&&u===_&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),u&&d&&(!T||!ns(d,T)||!_)&&(d.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,_=p&&p.components[d];if(!_)return _d(n.default,{Component:_,route:u});const T=p.props[d],C=T?T===!0?u.params:typeof T=="function"?T(u):T:null,D=bp(_,ke({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return _d(n.default,{Component:D,route:u})||D}}});function _d(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jp=p0;function m0(t){const e=qE(t.routes,t),n=t.parseQuery||a0,r=t.stringifyQuery||hd,s=t.history,i=$s(),a=$s(),c=$s(),l=py(Dn);let u=Dn;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=cc.bind(null,x=>""+x),p=cc.bind(null,o0),_=cc.bind(null,Lo);function T(x,Y){let W,te;return kp(x)?(W=e.getRecordMatcher(x),te=Y):te=x,e.addRoute(te,W)}function C(x){const Y=e.getRecordMatcher(x);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(x=>x.record)}function D(x){return!!e.getRecordMatcher(x)}function j(x,Y){if(Y=ke({},Y||l.value),typeof x=="string"){const P=lc(n,x,Y.path),O=e.resolve({path:P.path},Y),U=s.createHref(P.fullPath);return ke(P,O,{params:_(O.params),hash:Lo(P.hash),redirectedFrom:void 0,href:U})}let W;if("path"in x)W=ke({},x,{path:lc(n,x.path,Y.path).path});else{const P=ke({},x.params);for(const O in P)P[O]==null&&delete P[O];W=ke({},x,{params:p(P)}),Y.params=p(Y.params)}const te=e.resolve(W,Y),we=x.hash||"";te.params=d(_(te.params));const v=vE(r,ke({},x,{hash:r0(we),path:te.path})),w=s.createHref(v);return ke({fullPath:v,hash:we,query:r===hd?c0(x.query):x.query||{}},te,{redirectedFrom:void 0,href:w})}function H(x){return typeof x=="string"?lc(n,x,l.value.path):ke({},x)}function L(x,Y){if(u!==x)return rs(8,{from:Y,to:x})}function V(x){return A(x)}function ee(x){return V(ke(H(x),{replace:!0}))}function ne(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:W}=Y;let te=typeof W=="function"?W(x):W;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=H(te):{path:te},te.params={}),ke({query:x.query,hash:x.hash,params:"path"in te?{}:x.params},te)}}function A(x,Y){const W=u=j(x),te=l.value,we=x.state,v=x.force,w=x.replace===!0,P=ne(W);if(P)return A(ke(H(P),{state:typeof P=="object"?ke({},we,P.state):we,force:v,replace:w}),Y||W);const O=W;O.redirectedFrom=Y;let U;return!v&&EE(r,te,W)&&(U=rs(16,{to:O,from:te}),xt(te,te,!0,!1)),(U?Promise.resolve(U):I(O,te)).catch(F=>ln(F)?ln(F,2)?F:Lt(F):ve(F,O,te)).then(F=>{if(F){if(ln(F,2))return A(ke({replace:w},H(F.to),{state:typeof F.to=="object"?ke({},we,F.to.state):we,force:v}),Y||O)}else F=R(O,te,!0,w,we);return b(O,te,F),F})}function g(x,Y){const W=L(x,Y);return W?Promise.reject(W):Promise.resolve()}function y(x){const Y=Rn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function I(x,Y){let W;const[te,we,v]=_0(x,Y);W=uc(te.reverse(),"beforeRouteLeave",x,Y);for(const P of te)P.leaveGuards.forEach(O=>{W.push(xn(O,x,Y))});const w=g.bind(null,x,Y);return W.push(w),tt(W).then(()=>{W=[];for(const P of i.list())W.push(xn(P,x,Y));return W.push(w),tt(W)}).then(()=>{W=uc(we,"beforeRouteUpdate",x,Y);for(const P of we)P.updateGuards.forEach(O=>{W.push(xn(O,x,Y))});return W.push(w),tt(W)}).then(()=>{W=[];for(const P of v)if(P.beforeEnter)if(Kt(P.beforeEnter))for(const O of P.beforeEnter)W.push(xn(O,x,Y));else W.push(xn(P.beforeEnter,x,Y));return W.push(w),tt(W)}).then(()=>(x.matched.forEach(P=>P.enterCallbacks={}),W=uc(v,"beforeRouteEnter",x,Y),W.push(w),tt(W))).then(()=>{W=[];for(const P of a.list())W.push(xn(P,x,Y));return W.push(w),tt(W)}).catch(P=>ln(P,8)?P:Promise.reject(P))}function b(x,Y,W){c.list().forEach(te=>y(()=>te(x,Y,W)))}function R(x,Y,W,te,we){const v=L(x,Y);if(v)return v;const w=Y===Dn,P=Mr?history.state:{};W&&(te||w?s.replace(x.fullPath,ke({scroll:w&&P&&P.scroll},we)):s.push(x.fullPath,we)),l.value=x,xt(x,Y,W,w),Lt()}let E;function st(){E||(E=s.listen((x,Y,W)=>{if(!Qt.listening)return;const te=j(x),we=ne(te);if(we){A(ke(we,{replace:!0}),te).catch(ei);return}u=te;const v=l.value;Mr&&PE(rd(v.fullPath,W.delta),ga()),I(te,v).catch(w=>ln(w,12)?w:ln(w,2)?(A(w.to,te).then(P=>{ln(P,20)&&!W.delta&&W.type===pi.pop&&s.go(-1,!1)}).catch(ei),Promise.reject()):(W.delta&&s.go(-W.delta,!1),ve(w,te,v))).then(w=>{w=w||R(te,v,!1),w&&(W.delta&&!ln(w,8)?s.go(-W.delta,!1):W.type===pi.pop&&ln(w,20)&&s.go(-1,!1)),b(te,v,w)}).catch(ei)}))}let et=$s(),be=$s(),Re;function ve(x,Y,W){Lt(x);const te=be.list();return te.length?te.forEach(we=>we(x,Y,W)):console.error(x),Promise.reject(x)}function Dt(){return Re&&l.value!==Dn?Promise.resolve():new Promise((x,Y)=>{et.add([x,Y])})}function Lt(x){return Re||(Re=!x,st(),et.list().forEach(([Y,W])=>x?W(x):Y()),et.reset()),x}function xt(x,Y,W,te){const{scrollBehavior:we}=t;if(!Mr||!we)return Promise.resolve();const v=!W&&CE(rd(x.fullPath,0))||(te||!W)&&history.state&&history.state.scroll||null;return vl().then(()=>we(x,Y,v)).then(w=>w&&SE(w)).catch(w=>ve(w,x,Y))}const $e=x=>s.go(x);let je;const Rn=new Set,Qt={currentRoute:l,listening:!0,addRoute:T,removeRoute:C,hasRoute:D,getRoutes:k,resolve:j,options:t,push:V,replace:ee,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:be.add,isReady:Dt,install(x){const Y=this;x.component("RouterLink",To),x.component("RouterView",jp),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>De(l)}),Mr&&!je&&l.value===Dn&&(je=!0,V(s.location).catch(we=>{}));const W={};for(const we in Dn)Object.defineProperty(W,we,{get:()=>l.value[we],enumerable:!0});x.provide(Pl,Y),x.provide($p,Xf(W)),x.provide(Fc,l);const te=x.unmount;Rn.add(x),x.unmount=function(){Rn.delete(x),Rn.size<1&&(u=Dn,E&&E(),E=null,l.value=Dn,je=!1,Re=!1),te()}}};function tt(x){return x.reduce((Y,W)=>Y.then(()=>y(W)),Promise.resolve())}return Qt}function _0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(u=>ns(u,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(u=>ns(u,l))||s.push(l))}return[n,r,s]}/**
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
 */const Hp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},g0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|u>>6,T=u&63;l||(T=64,a||(_=64)),r.push(n[d],n[p],n[_],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):g0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new y0;const _=i<<2|c>>4;if(r.push(_),u!==64){const T=c<<4&240|u>>2;if(r.push(T),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class y0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const v0=function(t){const e=Hp(t);return qp.encodeByteArray(e,!0)},Uo=function(t){return v0(t).replace(/\./g,"")},Gp=function(t){try{return qp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function E0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const T0=()=>E0().__FIREBASE_DEFAULTS__,w0=()=>{if(typeof process>"u"||typeof{GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/9.6.7 node/v18.17.1 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/18.17.1/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",VITE_FIREBASE_MESSAGING_SENDER_ID:"318238552225",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/webscraper_tl/webscraper_tl/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"SabaNoMisoni1123",GRADLE_HOME:"/usr/share/gradle-8.8",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/26.3.11579264",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"44354717",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/webscraper_tl/webscraper_tl",SYSTEMD_EXEC_PID:"588",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.11/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240616.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.4/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:2896",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/18.17.1/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/18.17.1/x64",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"9647737663",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",VITE_FIREBASE_MEASUREMENT_ID:"G-EE5YZ9ZW6P",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",VITE_FIREBASE_STORAGE_BUCKET:"ws-db-11235813.appspot.com",GITHUB_WORKFLOW_SHA:"64ffc4905e90b4f3d2846bae9c0e7a631264ab33",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",STATS_BLT:"true",GITHUB_WORKFLOW_REF:"SabaNoMisoni1123/webscraper_tl/.github/workflows/deploy.yml@refs/heads/master",VITE_FIREBASE_AUTH_DOMAIN:"ws-db-11235813.firebaseapp.com",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/webscraper_tl/webscraper_tl/node_modules/.bin:/home/runner/work/webscraper_tl/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/webscraper_tl/webscraper_tl/node_modules/.bin:/home/runner/work/webscraper_tl/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/18.17.1/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_b124757d-2939-4dc7-8613-1314d4e14326",INVOCATION_ID:"fd0ff09304aa456dbaa2c7e55737b4bd",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/18.17.1/x64/bin/node",npm_package_name:"webscraper_tl",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"22",GITHUB_TRIGGERING_ACTOR:"SabaNoMisoni1123",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 1",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"master",GITHUB_REPOSITORY:"SabaNoMisoni1123/webscraper_tl",STATS_D_D:"true",npm_lifecycle_script:"vite build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"711502675",GITHUB_ACTIONS:"true",npm_package_version:"0.0.0",npm_lifecycle_event:"build-only",VITE_FIREBASE_PROJECT_ID:"ws-db-11235813",GITHUB_REF_PROTECTED:"false",GITHUB_WORKSPACE:"/home/runner/work/webscraper_tl/webscraper_tl",ACCEPT_EULA:"Y",GITHUB_JOB:"build",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"64ffc4905e90b4f3d2846bae9c0e7a631264ab33",GITHUB_RUN_ATTEMPT:"1",VITE_FIREBASE_APP_ID:"1:318238552225:web:a5eae1ca149d3137dbc0e0",GITHUB_REF:"refs/heads/master",GITHUB_ACTOR:"SabaNoMisoni1123",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/18.17.1/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/webscraper_tl/webscraper_tl",GITHUB_ACTOR_ID:"44354717",RUNNER_WORKSPACE:"/home/runner/work/webscraper_tl",npm_execpath:"/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",npm_config_global_prefix:"/opt/hostedtoolcache/node/18.17.1/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/25.2.9519653",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",VITE_FIREBASE_API_KEY:"AIzaSyBMX5fhRGBNhKpf11lnHhVi018b5Zavkv8",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",INIT_CWD:"/home/runner/work/webscraper_tl/webscraper_tl",EDITOR:"vi",NODE_ENV:"production"}>"u")return;const t={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/9.6.7 node/v18.17.1 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/18.17.1/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",VITE_FIREBASE_MESSAGING_SENDER_ID:"318238552225",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/webscraper_tl/webscraper_tl/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"SabaNoMisoni1123",GRADLE_HOME:"/usr/share/gradle-8.8",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/26.3.11579264",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"44354717",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/webscraper_tl/webscraper_tl",SYSTEMD_EXEC_PID:"588",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.11/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240616.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.4/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:2896",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/18.17.1/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/18.17.1/x64",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"9647737663",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",VITE_FIREBASE_MEASUREMENT_ID:"G-EE5YZ9ZW6P",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",VITE_FIREBASE_STORAGE_BUCKET:"ws-db-11235813.appspot.com",GITHUB_WORKFLOW_SHA:"64ffc4905e90b4f3d2846bae9c0e7a631264ab33",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",STATS_BLT:"true",GITHUB_WORKFLOW_REF:"SabaNoMisoni1123/webscraper_tl/.github/workflows/deploy.yml@refs/heads/master",VITE_FIREBASE_AUTH_DOMAIN:"ws-db-11235813.firebaseapp.com",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/webscraper_tl/webscraper_tl/node_modules/.bin:/home/runner/work/webscraper_tl/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/webscraper_tl/webscraper_tl/node_modules/.bin:/home/runner/work/webscraper_tl/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/18.17.1/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_b124757d-2939-4dc7-8613-1314d4e14326",INVOCATION_ID:"fd0ff09304aa456dbaa2c7e55737b4bd",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/18.17.1/x64/bin/node",npm_package_name:"webscraper_tl",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"22",GITHUB_TRIGGERING_ACTOR:"SabaNoMisoni1123",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 1",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"master",GITHUB_REPOSITORY:"SabaNoMisoni1123/webscraper_tl",STATS_D_D:"true",npm_lifecycle_script:"vite build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"711502675",GITHUB_ACTIONS:"true",npm_package_version:"0.0.0",npm_lifecycle_event:"build-only",VITE_FIREBASE_PROJECT_ID:"ws-db-11235813",GITHUB_REF_PROTECTED:"false",GITHUB_WORKSPACE:"/home/runner/work/webscraper_tl/webscraper_tl",ACCEPT_EULA:"Y",GITHUB_JOB:"build",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"64ffc4905e90b4f3d2846bae9c0e7a631264ab33",GITHUB_RUN_ATTEMPT:"1",VITE_FIREBASE_APP_ID:"1:318238552225:web:a5eae1ca149d3137dbc0e0",GITHUB_REF:"refs/heads/master",GITHUB_ACTOR:"SabaNoMisoni1123",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/18.17.1/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/webscraper_tl/webscraper_tl",GITHUB_ACTOR_ID:"44354717",RUNNER_WORKSPACE:"/home/runner/work/webscraper_tl",npm_execpath:"/opt/hostedtoolcache/node/18.17.1/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",npm_config_global_prefix:"/opt/hostedtoolcache/node/18.17.1/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/25.2.9519653",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",VITE_FIREBASE_API_KEY:"AIzaSyBMX5fhRGBNhKpf11lnHhVi018b5Zavkv8",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_6a78a5af-7afe-48bb-83ca-7e8db7780fe2",INIT_CWD:"/home/runner/work/webscraper_tl/webscraper_tl",EDITOR:"vi",NODE_ENV:"production"}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},I0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gp(t[1]);return e&&JSON.parse(e)},ya=()=>{try{return T0()||w0()||I0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zp=t=>{var e,n;return(n=(e=ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},A0=t=>{const e=zp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kp=()=>{var t;return(t=ya())===null||t===void 0?void 0:t.config},Wp=t=>{var e;return(e=ya())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class b0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function R0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Uo(JSON.stringify(n)),Uo(JSON.stringify(a)),c].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function S0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function P0(){var t;const e=(t=ya())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function C0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function N0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D0(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function O0(){return!P0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k0(){try{return typeof indexedDB=="object"}catch{return!1}}function V0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const x0="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=x0,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?M0(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new An(s,c,r)}}function M0(t,e){return t.replace(L0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const L0=/\{\$([^}]+)}/g;function U0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(gd(i)&&gd(a)){if(!Fo(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gd(t){return t!==null&&typeof t=="object"}/**
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
 */function Pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function F0(t,e){const n=new B0(t,e);return n.subscribe.bind(n)}class B0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hc),s.error===void 0&&(s.error=hc),s.complete===void 0&&(s.complete=hc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hc(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ar="[DEFAULT]";/**
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
 */class j0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new b0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(q0(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:H0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H0(t){return t===ar?void 0:t}function q0(t){return t.instantiationMode==="EAGER"}/**
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
 */class G0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new j0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const z0={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},K0=Ie.INFO,W0={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Q0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=W0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=K0,this._logHandler=Q0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const X0=(t,e)=>e.some(n=>t instanceof n);let yd,vd;function Y0(){return yd||(yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J0(){return vd||(vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qp=new WeakMap,Bc=new WeakMap,Xp=new WeakMap,dc=new WeakMap,Nl=new WeakMap;function Z0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Gn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Qp.set(n,t)}).catch(()=>{}),Nl.set(e,t),e}function eT(t){if(Bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Bc.set(t,e)}let $c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tT(t){$c=t($c)}function nT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fc(this),e,...n);return Xp.set(r,e.sort?e.sort():[e]),Gn(r)}:J0().includes(t)?function(...e){return t.apply(fc(this),e),Gn(Qp.get(this))}:function(...e){return Gn(t.apply(fc(this),e))}}function rT(t){return typeof t=="function"?nT(t):(t instanceof IDBTransaction&&eT(t),X0(t,Y0())?new Proxy(t,$c):t)}function Gn(t){if(t instanceof IDBRequest)return Z0(t);if(dc.has(t))return dc.get(t);const e=rT(t);return e!==t&&(dc.set(t,e),Nl.set(e,t)),e}const fc=t=>Nl.get(t);function sT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Gn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Gn(a.result),l.oldVersion,l.newVersion,Gn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const iT=["get","getKey","getAll","getAllKeys","count"],oT=["put","add","delete","clear"],pc=new Map;function Ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=oT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||iT.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return pc.set(e,i),i}tT(t=>({...t,get:(e,n,r)=>Ed(e,n)||t.get(e,n,r),has:(e,n)=>!!Ed(e,n)||t.has(e,n)}));/**
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
 */class aT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jc="@firebase/app",Td="0.10.4";/**
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
 */const yr=new Cl("@firebase/app"),lT="@firebase/app-compat",uT="@firebase/analytics-compat",hT="@firebase/analytics",dT="@firebase/app-check-compat",fT="@firebase/app-check",pT="@firebase/auth",mT="@firebase/auth-compat",_T="@firebase/database",gT="@firebase/database-compat",yT="@firebase/functions",vT="@firebase/functions-compat",ET="@firebase/installations",TT="@firebase/installations-compat",wT="@firebase/messaging",IT="@firebase/messaging-compat",AT="@firebase/performance",bT="@firebase/performance-compat",RT="@firebase/remote-config",ST="@firebase/remote-config-compat",PT="@firebase/storage",CT="@firebase/storage-compat",NT="@firebase/firestore",DT="@firebase/vertexai-preview",OT="@firebase/firestore-compat",kT="firebase",VT="10.12.1";/**
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
 */const Hc="[DEFAULT]",xT={[jc]:"fire-core",[lT]:"fire-core-compat",[hT]:"fire-analytics",[uT]:"fire-analytics-compat",[fT]:"fire-app-check",[dT]:"fire-app-check-compat",[pT]:"fire-auth",[mT]:"fire-auth-compat",[_T]:"fire-rtdb",[gT]:"fire-rtdb-compat",[yT]:"fire-fn",[vT]:"fire-fn-compat",[ET]:"fire-iid",[TT]:"fire-iid-compat",[wT]:"fire-fcm",[IT]:"fire-fcm-compat",[AT]:"fire-perf",[bT]:"fire-perf-compat",[RT]:"fire-rc",[ST]:"fire-rc-compat",[PT]:"fire-gcs",[CT]:"fire-gcs-compat",[NT]:"fire-fst",[OT]:"fire-fst-compat",[DT]:"fire-vertex","fire-js":"fire-js",[kT]:"fire-js-all"};/**
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
 */const Bo=new Map,MT=new Map,qc=new Map;function wd(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(qc.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,t);for(const n of Bo.values())wd(n,t);for(const n of MT.values())wd(n,t);return!0}function Dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
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
 */const LT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new Si("app","Firebase",LT);/**
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
 */class UT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=VT;function Yp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=Kp()),!n)throw zn.create("no-options");const i=Bo.get(s);if(i){if(Fo(n,i.options)&&Fo(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const a=new G0(s);for(const l of qc.values())a.addComponent(l);const c=new UT(n,r,a);return Bo.set(s,c),c}function Jp(t=Hc){const e=Bo.get(t);if(!e&&t===Hc&&Kp())return Yp();if(!e)throw zn.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let s=(r=xT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(c.join(" "));return}ss(new gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const FT="firebase-heartbeat-database",BT=1,mi="firebase-heartbeat-store";let mc=null;function Zp(){return mc||(mc=sT(FT,BT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mi)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),mc}async function $T(t){try{const n=(await Zp()).transaction(mi),r=await n.objectStore(mi).get(em(t));return await n.done,r}catch(e){if(e instanceof An)yr.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function Id(t,e){try{const r=(await Zp()).transaction(mi,"readwrite");await r.objectStore(mi).put(e,em(t)),await r.done}catch(n){if(n instanceof An)yr.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function em(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jT=1024,HT=30*24*60*60*1e3;class qT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ad();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=HT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ad(),{heartbeatsToSend:r,unsentEntries:s}=GT(this._heartbeatsCache.heartbeats),i=Uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ad(){return new Date().toISOString().substring(0,10)}function GT(t,e=jT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),bd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return k0()?V0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $T(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bd(t){return Uo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function KT(t){ss(new gr("platform-logger",e=>new aT(e),"PRIVATE")),ss(new gr("heartbeat",e=>new qT(e),"PRIVATE")),Kn(jc,Td,t),Kn(jc,Td,"esm2017"),Kn("fire-js","")}KT("");var WT="firebase",QT="10.12.1";/**
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
 */Kn(WT,QT,"app");var Rd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,tm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,g){function y(){}y.prototype=g.prototype,A.D=g.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(I,b,R){for(var E=Array(arguments.length-2),st=2;st<arguments.length;st++)E[st-2]=arguments[st];return g.prototype[b].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,g,y){y||(y=0);var I=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)I[b]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(b=0;16>b;++b)I[b]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=A.g[0],y=A.g[1],b=A.g[2];var R=A.g[3],E=g+(R^y&(b^R))+I[0]+3614090360&4294967295;g=y+(E<<7&4294967295|E>>>25),E=R+(b^g&(y^b))+I[1]+3905402710&4294967295,R=g+(E<<12&4294967295|E>>>20),E=b+(y^R&(g^y))+I[2]+606105819&4294967295,b=R+(E<<17&4294967295|E>>>15),E=y+(g^b&(R^g))+I[3]+3250441966&4294967295,y=b+(E<<22&4294967295|E>>>10),E=g+(R^y&(b^R))+I[4]+4118548399&4294967295,g=y+(E<<7&4294967295|E>>>25),E=R+(b^g&(y^b))+I[5]+1200080426&4294967295,R=g+(E<<12&4294967295|E>>>20),E=b+(y^R&(g^y))+I[6]+2821735955&4294967295,b=R+(E<<17&4294967295|E>>>15),E=y+(g^b&(R^g))+I[7]+4249261313&4294967295,y=b+(E<<22&4294967295|E>>>10),E=g+(R^y&(b^R))+I[8]+1770035416&4294967295,g=y+(E<<7&4294967295|E>>>25),E=R+(b^g&(y^b))+I[9]+2336552879&4294967295,R=g+(E<<12&4294967295|E>>>20),E=b+(y^R&(g^y))+I[10]+4294925233&4294967295,b=R+(E<<17&4294967295|E>>>15),E=y+(g^b&(R^g))+I[11]+2304563134&4294967295,y=b+(E<<22&4294967295|E>>>10),E=g+(R^y&(b^R))+I[12]+1804603682&4294967295,g=y+(E<<7&4294967295|E>>>25),E=R+(b^g&(y^b))+I[13]+4254626195&4294967295,R=g+(E<<12&4294967295|E>>>20),E=b+(y^R&(g^y))+I[14]+2792965006&4294967295,b=R+(E<<17&4294967295|E>>>15),E=y+(g^b&(R^g))+I[15]+1236535329&4294967295,y=b+(E<<22&4294967295|E>>>10),E=g+(b^R&(y^b))+I[1]+4129170786&4294967295,g=y+(E<<5&4294967295|E>>>27),E=R+(y^b&(g^y))+I[6]+3225465664&4294967295,R=g+(E<<9&4294967295|E>>>23),E=b+(g^y&(R^g))+I[11]+643717713&4294967295,b=R+(E<<14&4294967295|E>>>18),E=y+(R^g&(b^R))+I[0]+3921069994&4294967295,y=b+(E<<20&4294967295|E>>>12),E=g+(b^R&(y^b))+I[5]+3593408605&4294967295,g=y+(E<<5&4294967295|E>>>27),E=R+(y^b&(g^y))+I[10]+38016083&4294967295,R=g+(E<<9&4294967295|E>>>23),E=b+(g^y&(R^g))+I[15]+3634488961&4294967295,b=R+(E<<14&4294967295|E>>>18),E=y+(R^g&(b^R))+I[4]+3889429448&4294967295,y=b+(E<<20&4294967295|E>>>12),E=g+(b^R&(y^b))+I[9]+568446438&4294967295,g=y+(E<<5&4294967295|E>>>27),E=R+(y^b&(g^y))+I[14]+3275163606&4294967295,R=g+(E<<9&4294967295|E>>>23),E=b+(g^y&(R^g))+I[3]+4107603335&4294967295,b=R+(E<<14&4294967295|E>>>18),E=y+(R^g&(b^R))+I[8]+1163531501&4294967295,y=b+(E<<20&4294967295|E>>>12),E=g+(b^R&(y^b))+I[13]+2850285829&4294967295,g=y+(E<<5&4294967295|E>>>27),E=R+(y^b&(g^y))+I[2]+4243563512&4294967295,R=g+(E<<9&4294967295|E>>>23),E=b+(g^y&(R^g))+I[7]+1735328473&4294967295,b=R+(E<<14&4294967295|E>>>18),E=y+(R^g&(b^R))+I[12]+2368359562&4294967295,y=b+(E<<20&4294967295|E>>>12),E=g+(y^b^R)+I[5]+4294588738&4294967295,g=y+(E<<4&4294967295|E>>>28),E=R+(g^y^b)+I[8]+2272392833&4294967295,R=g+(E<<11&4294967295|E>>>21),E=b+(R^g^y)+I[11]+1839030562&4294967295,b=R+(E<<16&4294967295|E>>>16),E=y+(b^R^g)+I[14]+4259657740&4294967295,y=b+(E<<23&4294967295|E>>>9),E=g+(y^b^R)+I[1]+2763975236&4294967295,g=y+(E<<4&4294967295|E>>>28),E=R+(g^y^b)+I[4]+1272893353&4294967295,R=g+(E<<11&4294967295|E>>>21),E=b+(R^g^y)+I[7]+4139469664&4294967295,b=R+(E<<16&4294967295|E>>>16),E=y+(b^R^g)+I[10]+3200236656&4294967295,y=b+(E<<23&4294967295|E>>>9),E=g+(y^b^R)+I[13]+681279174&4294967295,g=y+(E<<4&4294967295|E>>>28),E=R+(g^y^b)+I[0]+3936430074&4294967295,R=g+(E<<11&4294967295|E>>>21),E=b+(R^g^y)+I[3]+3572445317&4294967295,b=R+(E<<16&4294967295|E>>>16),E=y+(b^R^g)+I[6]+76029189&4294967295,y=b+(E<<23&4294967295|E>>>9),E=g+(y^b^R)+I[9]+3654602809&4294967295,g=y+(E<<4&4294967295|E>>>28),E=R+(g^y^b)+I[12]+3873151461&4294967295,R=g+(E<<11&4294967295|E>>>21),E=b+(R^g^y)+I[15]+530742520&4294967295,b=R+(E<<16&4294967295|E>>>16),E=y+(b^R^g)+I[2]+3299628645&4294967295,y=b+(E<<23&4294967295|E>>>9),E=g+(b^(y|~R))+I[0]+4096336452&4294967295,g=y+(E<<6&4294967295|E>>>26),E=R+(y^(g|~b))+I[7]+1126891415&4294967295,R=g+(E<<10&4294967295|E>>>22),E=b+(g^(R|~y))+I[14]+2878612391&4294967295,b=R+(E<<15&4294967295|E>>>17),E=y+(R^(b|~g))+I[5]+4237533241&4294967295,y=b+(E<<21&4294967295|E>>>11),E=g+(b^(y|~R))+I[12]+1700485571&4294967295,g=y+(E<<6&4294967295|E>>>26),E=R+(y^(g|~b))+I[3]+2399980690&4294967295,R=g+(E<<10&4294967295|E>>>22),E=b+(g^(R|~y))+I[10]+4293915773&4294967295,b=R+(E<<15&4294967295|E>>>17),E=y+(R^(b|~g))+I[1]+2240044497&4294967295,y=b+(E<<21&4294967295|E>>>11),E=g+(b^(y|~R))+I[8]+1873313359&4294967295,g=y+(E<<6&4294967295|E>>>26),E=R+(y^(g|~b))+I[15]+4264355552&4294967295,R=g+(E<<10&4294967295|E>>>22),E=b+(g^(R|~y))+I[6]+2734768916&4294967295,b=R+(E<<15&4294967295|E>>>17),E=y+(R^(b|~g))+I[13]+1309151649&4294967295,y=b+(E<<21&4294967295|E>>>11),E=g+(b^(y|~R))+I[4]+4149444226&4294967295,g=y+(E<<6&4294967295|E>>>26),E=R+(y^(g|~b))+I[11]+3174756917&4294967295,R=g+(E<<10&4294967295|E>>>22),E=b+(g^(R|~y))+I[2]+718787259&4294967295,b=R+(E<<15&4294967295|E>>>17),E=y+(R^(b|~g))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+g&4294967295,A.g[1]=A.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,g){g===void 0&&(g=A.length);for(var y=g-this.blockSize,I=this.B,b=this.h,R=0;R<g;){if(b==0)for(;R<=y;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<g;)if(I[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,I),b=0;break}}else for(;R<g;)if(I[b++]=A[R++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=g},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var g=1;g<A.length-8;++g)A[g]=0;var y=8*this.o;for(g=A.length-8;g<A.length;++g)A[g]=y&255,y/=256;for(this.u(A),A=Array(16),g=y=0;4>g;++g)for(var I=0;32>I;I+=8)A[y++]=this.g[g]>>>I&255;return A};function i(A,g){var y=c;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=g(A)}function a(A,g){this.h=g;for(var y=[],I=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;I&&R==g||(y[b]=R,I=!1)}this.g=y}var c={};function l(A){return-128<=A&&128>A?i(A,function(g){return new a([g|0],0>g?-1:0)}):new a([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(u(-A));for(var g=[],y=1,I=0;A>=y;I++)g[I]=A/y|0,y*=4294967296;return new a(g,0)}function d(A,g){if(A.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A.charAt(0)=="-")return D(d(A.substring(1),g));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(g,8)),I=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),E=parseInt(A.substring(b,b+R),g);8>R?(R=u(Math.pow(g,R)),I=I.j(R).add(u(E))):(I=I.j(y),I=I.add(u(E)))}return I}var p=l(0),_=l(1),T=l(16777216);t=a.prototype,t.m=function(){if(k(this))return-D(this).m();for(var A=0,g=1,y=0;y<this.g.length;y++){var I=this.i(y);A+=(0<=I?I:4294967296+I)*g,g*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(k(this))return"-"+D(this).toString(A);for(var g=u(Math.pow(A,6)),y=this,I="";;){var b=V(y,g).g;y=j(y,b.j(g));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=b,C(y))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var g=0;g<A.g.length;g++)if(A.g[g]!=0)return!1;return!0}function k(A){return A.h==-1}t.l=function(A){return A=j(this,A),k(A)?-1:C(A)?0:1};function D(A){for(var g=A.g.length,y=[],I=0;I<g;I++)y[I]=~A.g[I];return new a(y,~A.h).add(_)}t.abs=function(){return k(this)?D(this):this},t.add=function(A){for(var g=Math.max(this.g.length,A.g.length),y=[],I=0,b=0;b<=g;b++){var R=I+(this.i(b)&65535)+(A.i(b)&65535),E=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);I=E>>>16,R&=65535,E&=65535,y[b]=E<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function j(A,g){return A.add(D(g))}t.j=function(A){if(C(this)||C(A))return p;if(k(this))return k(A)?D(this).j(D(A)):D(D(this).j(A));if(k(A))return D(this.j(D(A)));if(0>this.l(T)&&0>A.l(T))return u(this.m()*A.m());for(var g=this.g.length+A.g.length,y=[],I=0;I<2*g;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<A.g.length;b++){var R=this.i(I)>>>16,E=this.i(I)&65535,st=A.i(b)>>>16,et=A.i(b)&65535;y[2*I+2*b]+=E*et,H(y,2*I+2*b),y[2*I+2*b+1]+=R*et,H(y,2*I+2*b+1),y[2*I+2*b+1]+=E*st,H(y,2*I+2*b+1),y[2*I+2*b+2]+=R*st,H(y,2*I+2*b+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function H(A,g){for(;(A[g]&65535)!=A[g];)A[g+1]+=A[g]>>>16,A[g]&=65535,g++}function L(A,g){this.g=A,this.h=g}function V(A,g){if(C(g))throw Error("division by zero");if(C(A))return new L(p,p);if(k(A))return g=V(D(A),g),new L(D(g.g),D(g.h));if(k(g))return g=V(A,D(g)),new L(D(g.g),g.h);if(30<A.g.length){if(k(A)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,I=g;0>=I.l(A);)y=ee(y),I=ee(I);var b=ne(y,1),R=ne(I,1);for(I=ne(I,2),y=ne(y,2);!C(I);){var E=R.add(I);0>=E.l(A)&&(b=b.add(y),R=E),I=ne(I,1),y=ne(y,1)}return g=j(A,b.j(g)),new L(b,g)}for(b=p;0<=A.l(g);){for(y=Math.max(1,Math.floor(A.m()/g.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=u(y),E=R.j(g);k(E)||0<E.l(A);)y-=I,R=u(y),E=R.j(g);C(R)&&(R=_),b=b.add(R),A=j(A,E)}return new L(b,A)}t.A=function(A){return V(this,A).h},t.and=function(A){for(var g=Math.max(this.g.length,A.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)&A.i(I);return new a(y,this.h&A.h)},t.or=function(A){for(var g=Math.max(this.g.length,A.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)|A.i(I);return new a(y,this.h|A.h)},t.xor=function(A){for(var g=Math.max(this.g.length,A.g.length),y=[],I=0;I<g;I++)y[I]=this.i(I)^A.i(I);return new a(y,this.h^A.h)};function ee(A){for(var g=A.g.length+1,y=[],I=0;I<g;I++)y[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(y,A.h)}function ne(A,g){var y=g>>5;g%=32;for(var I=A.g.length-y,b=[],R=0;R<I;R++)b[R]=0<g?A.i(R+y)>>>g|A.i(R+y+1)<<32-g:A.i(R+y);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tm=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=d,pr=a}).apply(typeof Rd<"u"?Rd:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nm,rm,Gs,sm,wo,Gc,im,om,am;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,f){return o==Array.prototype||o==Object.prototype||(o[h]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in f))break e;f=f[S]}o=o[o.length-1],m=f[o],h=h(m),h!=m&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var f=0,m=!1,S={next:function(){if(!m&&f<o.length){var N=f++;return{value:h(N,o[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function d(o,h,f){return o.call.apply(o.bind,arguments)}function p(o,h,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),o.apply(h,S)}}return function(){return o.apply(h,arguments)}}function _(o,h,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function T(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,h){function f(){}f.prototype=h.prototype,o.aa=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,S,N){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return h.prototype[S].apply(m,G)}}function k(o){const h=o.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=o[m];return f}return[]}function D(o,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(l(m)){const S=o.length||0,N=m.length||0;o.length=S+N;for(let G=0;G<N;G++)o[S+G]=m[G]}else o.push(m)}}class j{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function H(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function V(o){return V[" "](o),o}V[" "]=function(){};var ee=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function ne(o,h,f){for(const m in o)h.call(f,o[m],m,o)}function A(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function g(o){const h={};for(const f in o)h[f]=o[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,h){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)o[f]=m[f];for(let N=0;N<y.length;N++)f=y[N],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function b(o){var h=1;o=o.split(":");const f=[];for(;0<h&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function R(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Dt;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class st{constructor(){this.h=this.g=null}add(h,f){const m=et.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var et=new j(()=>new be,o=>o.reset());class be{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,ve=!1,Dt=new st,Lt=()=>{const o=c.Promise.resolve(void 0);Re=()=>{o.then(xt)}};var xt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){R(f)}var h=et;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}ve=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Rn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return o}();function Qt(o,h){if(je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(ee){e:{try{V(h.nodeName);var S=!0;break e}catch{}S=!1}S||(h=null)}}else f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:tt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qt.aa.h.call(this)}}C(Qt,je);var tt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),Y=0;function W(o,h,f,m,S){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=S,this.key=++Y,this.da=this.fa=!1}function te(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function we(o){this.src=o,this.g={},this.h=0}we.prototype.add=function(o,h,f,m,S){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var G=w(o,h,m,S);return-1<G?(h=o[G],f||(h.fa=!1)):(h=new W(h,this.src,N,!!m,S),h.fa=f,o.push(h)),h};function v(o,h){var f=h.type;if(f in o.g){var m=o.g[f],S=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=S)&&Array.prototype.splice.call(m,S,1),N&&(te(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,h,f,m){for(var S=0;S<o.length;++S){var N=o[S];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==m)return S}return-1}var P="closure_lm_"+(1e6*Math.random()|0),O={};function U(o,h,f,m,S){if(m&&m.once)return q(o,h,f,m,S);if(Array.isArray(h)){for(var N=0;N<h.length;N++)U(o,h[N],f,m,S);return null}return f=ge(f),o&&o[x]?o.K(h,f,u(m)?!!m.capture:!!m,S):F(o,h,f,!1,m,S)}function F(o,h,f,m,S,N){if(!h)throw Error("Invalid event type");var G=u(S)?!!S.capture:!!S,Ve=re(o);if(Ve||(o[P]=Ve=new we(o)),f=Ve.add(h,f,m,G,N),f.proxy)return f;if(m=X(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)Rn||(S=G),S===void 0&&(S=!1),o.addEventListener(h.toString(),m,S);else if(o.attachEvent)o.attachEvent(se(h.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function X(){function o(f){return h.call(o.src,o.listener,f)}const h=J;return o}function q(o,h,f,m,S){if(Array.isArray(h)){for(var N=0;N<h.length;N++)q(o,h[N],f,m,S);return null}return f=ge(f),o&&o[x]?o.L(h,f,u(m)?!!m.capture:!!m,S):F(o,h,f,!0,m,S)}function z(o,h,f,m,S){if(Array.isArray(h))for(var N=0;N<h.length;N++)z(o,h[N],f,m,S);else m=u(m)?!!m.capture:!!m,f=ge(f),o&&o[x]?(o=o.i,h=String(h).toString(),h in o.g&&(N=o.g[h],f=w(N,f,m,S),-1<f&&(te(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete o.g[h],o.h--)))):o&&(o=re(o))&&(h=o.g[h.toString()],o=-1,h&&(o=w(h,f,m,S)),(f=-1<o?h[o]:null)&&B(f))}function B(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[x])v(h.i,o);else{var f=o.type,m=o.proxy;h.removeEventListener?h.removeEventListener(f,m,o.capture):h.detachEvent?h.detachEvent(se(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=re(h))?(v(f,o),f.h==0&&(f.src=null,h[P]=null)):te(o)}}}function se(o){return o in O?O[o]:O[o]="on"+o}function J(o,h){if(o.da)o=!0;else{h=new Qt(h,this);var f=o.listener,m=o.ha||o.src;o.fa&&B(o),o=f.call(m,h)}return o}function re(o){return o=o[P],o instanceof we?o:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(o){return typeof o=="function"?o:(o[ce]||(o[ce]=function(h){return o.handleEvent(h)}),o[ce])}function fe(){$e.call(this),this.i=new we(this),this.M=this,this.F=null}C(fe,$e),fe.prototype[x]=!0,fe.prototype.removeEventListener=function(o,h,f,m){z(this,o,h,f,m)};function he(o,h){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=h.type||h,typeof h=="string")h=new je(h,o);else if(h instanceof je)h.target=h.target||o;else{var S=h;h=new je(m,o),I(h,S)}if(S=!0,f)for(var N=f.length-1;0<=N;N--){var G=h.g=f[N];S=Ue(G,m,!0,h)&&S}if(G=h.g=o,S=Ue(G,m,!0,h)&&S,S=Ue(G,m,!1,h)&&S,f)for(N=0;N<f.length;N++)G=h.g=f[N],S=Ue(G,m,!1,h)&&S}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var f=o.g[h],m=0;m<f.length;m++)te(f[m]);delete o.g[h],o.h--}}this.F=null},fe.prototype.K=function(o,h,f,m){return this.i.add(String(o),h,!1,f,m)},fe.prototype.L=function(o,h,f,m){return this.i.add(String(o),h,!0,f,m)};function Ue(o,h,f,m){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var S=!0,N=0;N<h.length;++N){var G=h[N];if(G&&!G.da&&G.capture==f){var Ve=G.listener,it=G.ha||G.src;G.fa&&v(o.i,G),S=Ve.call(it,m)!==!1&&S}}return S&&!m.defaultPrevented}function Rt(o,h,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(o,h||0)}function on(o){o.g=Rt(()=>{o.g=null,o.i&&(o.i=!1,on(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class Fi extends $e{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:on(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ut(o){$e.call(this),this.h=o,this.g={}}C(Ut,$e);var bs=[];function dt(o){ne(o.g,function(h,f){this.g.hasOwnProperty(f)&&B(h)},o),o.g={}}Ut.prototype.N=function(){Ut.aa.N.call(this),dt(this)},Ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var St=c.JSON.stringify,Bi=c.JSON.parse,cg=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ja(){}ja.prototype.h=null;function Ru(o){return o.h||(o.h=o.i())}function Su(){}var Rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ha(){je.call(this,"d")}C(Ha,je);function qa(){je.call(this,"c")}C(qa,je);var tr={},Pu=null;function $i(){return Pu=Pu||new fe}tr.La="serverreachability";function Cu(o){je.call(this,tr.La,o)}C(Cu,je);function Ss(o){const h=$i();he(h,new Cu(h))}tr.STAT_EVENT="statevent";function Nu(o,h){je.call(this,tr.STAT_EVENT,o),this.stat=h}C(Nu,je);function wt(o){const h=$i();he(h,new Nu(h,o))}tr.Ma="timingevent";function Du(o,h){je.call(this,tr.Ma,o),this.size=h}C(Du,je);function Ps(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},h)}function Cs(){this.g=!0}Cs.prototype.xa=function(){this.g=!1};function lg(o,h,f,m,S,N){o.info(function(){if(o.g)if(N)for(var G="",Ve=N.split("&"),it=0;it<Ve.length;it++){var Ne=Ve[it].split("=");if(1<Ne.length){var ft=Ne[0];Ne=Ne[1];var pt=ft.split("_");G=2<=pt.length&&pt[1]=="type"?G+(ft+"="+Ne+"&"):G+(ft+"=redacted&")}}else G=null;else G=N;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+h+`
`+f+`
`+G})}function ug(o,h,f,m,S,N,G){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+h+`
`+f+`
`+N+" "+G})}function Nr(o,h,f,m){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+dg(o,f)+(m?" "+m:"")})}function hg(o,h){o.info(function(){return"TIMEOUT: "+h})}Cs.prototype.info=function(){};function dg(o,h){if(!o.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var N=S[0];if(N!="noop"&&N!="stop"&&N!="close")for(var G=1;G<S.length;G++)S[G]=""}}}}return St(f)}catch{return h}}var ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ou={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ga;function Hi(){}C(Hi,ja),Hi.prototype.g=function(){return new XMLHttpRequest},Hi.prototype.i=function(){return{}},Ga=new Hi;function Sn(o,h,f,m){this.j=o,this.i=h,this.l=f,this.R=m||1,this.U=new Ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ku}function ku(){this.i=null,this.g="",this.h=!1}var Vu={},za={};function Ka(o,h,f){o.L=1,o.v=Ki(an(h)),o.m=f,o.P=!0,xu(o,null)}function xu(o,h){o.F=Date.now(),qi(o),o.A=an(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Qu(f.i,"t",m),o.C=0,f=o.j.J,o.h=new ku,o.g=fh(o.j,f?h:null,!o.m),0<o.O&&(o.M=new Fi(_(o.Y,o,o.g),o.O)),h=o.U,f=o.g,m=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(bs[0]=S.toString()),S=bs);for(var N=0;N<S.length;N++){var G=U(f,S[N],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),Ss(),lg(o.i,o.u,o.A,o.l,o.R,o.m)}Sn.prototype.ca=function(o){o=o.target;const h=this.M;h&&cn(o)==3?h.j():this.Y(o)},Sn.prototype.Y=function(o){try{if(o==this.g)e:{const pt=cn(this.g);var h=this.g.Ba();const kr=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||nh(this.g)))){this.J||pt!=4||h==7||(h==8||0>=kr?Ss(3):Ss(2)),Wa(this);var f=this.g.Z();this.X=f;t:if(Mu(this)){var m=nh(this.g);o="";var S=m.length,N=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),Ns(this);var G="";break t}this.h.i=new c.TextDecoder}for(h=0;h<S;h++)this.h.h=!0,o+=this.h.i.decode(m[h],{stream:!(N&&h==S-1)});m.length=0,this.h.g+=o,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,ug(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,it=this.g;if((Ve=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Ve)){var Ne=Ve;break t}}Ne=null}if(f=Ne)Nr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qa(this,f);else{this.o=!1,this.s=3,wt(12),nr(this),Ns(this);break e}}if(this.P){f=!0;let Ft;for(;!this.J&&this.C<G.length;)if(Ft=fg(this,G),Ft==za){pt==4&&(this.s=4,wt(14),f=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Vu){this.s=4,wt(15),Nr(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else Nr(this.i,this.l,Ft,null),Qa(this,Ft);if(Mu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||G.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)Nr(this.i,this.l,G,"[Invalid Chunked Response]"),nr(this),Ns(this);else if(0<G.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),tc(ft),ft.M=!0,wt(11))}}else Nr(this.i,this.l,G,null),Qa(this,G);pt==4&&nr(this),this.o&&!this.J&&(pt==4?lh(this.j,this):(this.o=!1,qi(this)))}else Ng(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),nr(this),Ns(this)}}}catch{}finally{}};function Mu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function fg(o,h){var f=o.C,m=h.indexOf(`
`,f);return m==-1?za:(f=Number(h.substring(f,m)),isNaN(f)?Vu:(m+=1,m+f>h.length?za:(h=h.slice(m,m+f),o.C=m+f,h)))}Sn.prototype.cancel=function(){this.J=!0,nr(this)};function qi(o){o.S=Date.now()+o.I,Lu(o,o.I)}function Lu(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ps(_(o.ba,o),h)}function Wa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(hg(this.i,this.A),this.L!=2&&(Ss(),wt(17)),nr(this),this.s=2,Ns(this)):Lu(this,this.S-o)};function Ns(o){o.j.G==0||o.J||lh(o.j,o)}function nr(o){Wa(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,dt(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function Qa(o,h){try{var f=o.j;if(f.G!=0&&(f.g==o||Xa(f.h,o))){if(!o.K&&Xa(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ji(f),Xi(f);else break e;ec(f),wt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ps(_(f.Za,f),6e3));if(1>=Bu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else sr(f,11)}else if((o.K||f.g==o)&&Ji(f),!H(h))for(S=f.Da.g.parse(h),h=0;h<S.length;h++){let Ne=S[h];if(f.T=Ne[0],Ne=Ne[1],f.G==2)if(Ne[0]=="c"){f.K=Ne[1],f.ia=Ne[2];const ft=Ne[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const pt=Ne[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const kr=Ne[5];kr!=null&&typeof kr=="number"&&0<kr&&(m=1.5*kr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Ft=o.g;if(Ft){const eo=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var N=m.h;N.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ya(N,N.h),N.h=null))}if(m.D){const nc=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;nc&&(m.ya=nc,Fe(m.I,m.D,nc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var G=o;if(m.qa=dh(m,m.J?m.ia:null,m.W),G.K){$u(m.h,G);var Ve=G,it=m.L;it&&(Ve.I=it),Ve.B&&(Wa(Ve),qi(Ve)),m.g=G}else ah(m);0<f.i.length&&Yi(f)}else Ne[0]!="stop"&&Ne[0]!="close"||sr(f,7);else f.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?sr(f,7):Za(f):Ne[0]!="noop"&&f.l&&f.l.ta(Ne),f.v=0)}}Ss(4)}catch{}}var pg=class{constructor(o,h){this.g=o,this.map=h}};function Uu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Bu(o){return o.h?1:o.g?o.g.size:0}function Xa(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Ya(o,h){o.g?o.g.add(h):o.h=h}function $u(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Uu.prototype.cancel=function(){if(this.i=ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ju(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.D);return h}return k(o.i)}function mg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var h=[],f=o.length,m=0;m<f;m++)h.push(o[m]);return h}h=[],f=0;for(m in o)h[f++]=o[m];return h}function _g(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var h=[];o=o.length;for(var f=0;f<o;f++)h.push(f);return h}h=[],f=0;for(const m in o)h[f++]=m;return h}}}function Hu(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var f=_g(o),m=mg(o),S=m.length,N=0;N<S;N++)h.call(void 0,m[N],f&&f[N],o)}var qu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gg(o,h){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),S=null;if(0<=m){var N=o[f].substring(0,m);S=o[f].substring(m+1)}else N=o[f];h(N,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function rr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rr){this.h=o.h,Gi(this,o.j),this.o=o.o,this.g=o.g,zi(this,o.s),this.l=o.l;var h=o.i,f=new ks;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Gu(this,f),this.m=o.m}else o&&(h=String(o).match(qu))?(this.h=!1,Gi(this,h[1]||"",!0),this.o=Ds(h[2]||""),this.g=Ds(h[3]||"",!0),zi(this,h[4]),this.l=Ds(h[5]||"",!0),Gu(this,h[6]||"",!0),this.m=Ds(h[7]||"")):(this.h=!1,this.i=new ks(null,this.h))}rr.prototype.toString=function(){var o=[],h=this.j;h&&o.push(Os(h,zu,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Os(h,zu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Os(f,f.charAt(0)=="/"?Eg:vg,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Os(f,wg)),o.join("")};function an(o){return new rr(o)}function Gi(o,h,f){o.j=f?Ds(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function zi(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function Gu(o,h,f){h instanceof ks?(o.i=h,Ig(o.i,o.h)):(f||(h=Os(h,Tg)),o.i=new ks(h,o.h))}function Fe(o,h,f){o.i.set(h,f)}function Ki(o){return Fe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ds(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Os(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,yg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function yg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zu=/[#\/\?@]/g,vg=/[#\?:]/g,Eg=/[#\?]/g,Tg=/[#\?@]/g,wg=/#/g;function ks(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&gg(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ks.prototype,t.add=function(o,h){Pn(this),this.i=null,o=Dr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function Ku(o,h){Pn(o),h=Dr(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Wu(o,h){return Pn(o),h=Dr(o,h),o.g.has(h)}t.forEach=function(o,h){Pn(this),this.g.forEach(function(f,m){f.forEach(function(S){o.call(h,S,m,this)},this)},this)},t.na=function(){Pn(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const S=o[m];for(let N=0;N<S.length;N++)f.push(h[m])}return f},t.V=function(o){Pn(this);let h=[];if(typeof o=="string")Wu(this,o)&&(h=h.concat(this.g.get(Dr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)h=h.concat(o[f])}return h},t.set=function(o,h){return Pn(this),this.i=null,o=Dr(this,o),Wu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function Qu(o,h,f){Ku(o,h),0<f.length&&(o.i=null,o.g.set(Dr(o,h),k(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const N=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var S=N;G[m]!==""&&(S+="="+encodeURIComponent(String(G[m]))),o.push(S)}}return this.i=o.join("&")};function Dr(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function Ig(o,h){h&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(Ku(this,m),Qu(this,S,f))},o)),o.j=h}function Ag(o,h){const f=new Cs;if(c.Image){const m=new Image;m.onload=T(Cn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=T(Cn,f,"TestLoadImage: error",!1,h,m),m.onabort=T(Cn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=T(Cn,f,"TestLoadImage: timeout",!1,h,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else h(!1)}function bg(o,h){const f=new Cs,m=new AbortController,S=setTimeout(()=>{m.abort(),Cn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:m.signal}).then(N=>{clearTimeout(S),N.ok?Cn(f,"TestPingServer: ok",!0,h):Cn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Cn(f,"TestPingServer: error",!1,h)})}function Cn(o,h,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function Rg(){this.g=new cg}function Sg(o,h,f){const m=f||"";try{Hu(o,function(S,N){let G=S;u(S)&&(G=St(S)),h.push(m+N+"="+encodeURIComponent(G))})}catch(S){throw h.push(m+"type="+encodeURIComponent("_badmap")),S}}function Vs(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Vs,ja),Vs.prototype.g=function(){return new Wi(this.l,this.j)},Vs.prototype.i=function(o){return function(){return o}}({});function Wi(o,h){fe.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Wi,fe),t=Wi.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Ms(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?xs(this):Ms(this),this.readyState==3&&Xu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,xs(this))},t.Qa=function(o){this.g&&(this.response=o,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ms(o)}t.setRequestHeader=function(o,h){this.u.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function Ms(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Yu(o){let h="";return ne(o,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Ja(o,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Yu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Fe(o,h,f))}function qe(o){fe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(qe,fe);var Pg=/^https?$/i,Cg=["POST","PUT"];t=qe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ga.g(),this.v=this.o?Ru(this.o):Ru(Ga),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(N){Ju(this,N);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Cg,h,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,G]of f)this.g.setRequestHeader(N,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{th(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){Ju(this,N)}};function Ju(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Zu(o),Qi(o)}function Zu(o){o.A||(o.A=!0,he(o,"complete"),he(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,he(this,"complete"),he(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?eh(this):this.bb())},t.bb=function(){eh(this)};function eh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)Rt(o.Ea,0,o);else if(he(o,"readystatechange"),cn(o)==4){o.h=!1;try{const G=o.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=G===0){var S=String(o.D).match(qu)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!Pg.test(S?S.toLowerCase():"")}f=m}if(f)he(o,"complete"),he(o,"success");else{o.m=6;try{var N=2<cn(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",Zu(o)}}finally{Qi(o)}}}}function Qi(o,h){if(o.g){th(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||he(o,"ready");try{f.onreadystatechange=m}catch{}}}function th(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Bi(h)}};function nh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ng(o){const h={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(H(o[m]))continue;var f=b(o[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[S]||[];h[S]=N,N.push(f)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function rh(o){this.Aa=0,this.i=[],this.j=new Cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,o),this.cb=Ls("retryDelaySeedMs",1e4,o),this.Wa=Ls("forwardChannelMaxRetries",2,o),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Uu(o&&o.concurrentRequestLimit),this.Da=new Rg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rh.prototype,t.la=8,t.G=1,t.connect=function(o,h,f,m){wt(0),this.W=o,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=dh(this,null,this.W),Yi(this)};function Za(o){if(sh(o),o.G==3){var h=o.U++,f=an(o.I);if(Fe(f,"SID",o.K),Fe(f,"RID",h),Fe(f,"TYPE","terminate"),Us(o,f),h=new Sn(o,o.j,h),h.L=2,h.v=Ki(an(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=fh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),qi(h)}hh(o)}function Xi(o){o.g&&(tc(o),o.g.cancel(),o.g=null)}function sh(o){Xi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ji(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Yi(o){if(!Fu(o.h)&&!o.s){o.s=!0;var h=o.Ga;Re||Lt(),ve||(Re(),ve=!0),Dt.add(h,o),o.B=0}}function Dg(o,h){return Bu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ps(_(o.Ga,o,h),uh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Sn(this,this.j,o);let N=this.o;if(this.S&&(N?(N=g(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(S.H=N,N=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=oh(this,S,h),f=an(this.I),Fe(f,"RID",o),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),Us(this,f),N&&(this.O?h="headers="+encodeURIComponent(String(Yu(N)))+"&"+h:this.m&&Ja(f,this.m,N)),Ya(this.h,S),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",h),Fe(f,"SID","null"),S.T=!0,Ka(S,f,null)):Ka(S,f,h),this.G=2}}else this.G==3&&(o?ih(this,o):this.i.length==0||Fu(this.h)||ih(this))};function ih(o,h){var f;h?f=h.l:f=o.U++;const m=an(o.I);Fe(m,"SID",o.K),Fe(m,"RID",f),Fe(m,"AID",o.T),Us(o,m),o.m&&o.o&&Ja(m,o.m,o.o),f=new Sn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),h&&(o.i=h.D.concat(o.i)),h=oh(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ya(o.h,f),Ka(f,m,h)}function Us(o,h){o.H&&ne(o.H,function(f,m){Fe(h,m,f)}),o.l&&Hu({},function(f,m){Fe(h,m,f)})}function oh(o,h,f){f=Math.min(o.i.length,f);var m=o.l?_(o.l.Na,o.l,o):null;e:{var S=o.i;let N=-1;for(;;){const G=["count="+f];N==-1?0<f?(N=S[0].g,G.push("ofs="+N)):N=0:G.push("ofs="+N);let Ve=!0;for(let it=0;it<f;it++){let Ne=S[it].g;const ft=S[it].map;if(Ne-=N,0>Ne)N=Math.max(0,S[it].g-100),Ve=!1;else try{Sg(ft,G,"req"+Ne+"_")}catch{m&&m(ft)}}if(Ve){m=G.join("&");break e}}}return o=o.i.splice(0,f),h.D=o,m}function ah(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;Re||Lt(),ve||(Re(),ve=!0),Dt.add(h,o),o.v=0}}function ec(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ps(_(o.Fa,o),uh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,ch(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ps(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Xi(this),ch(this))};function tc(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ch(o){o.g=new Sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=an(o.qa);Fe(h,"RID","rpc"),Fe(h,"SID",o.K),Fe(h,"AID",o.T),Fe(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Fe(h,"TO",o.ja),Fe(h,"TYPE","xmlhttp"),Us(o,h),o.m&&o.o&&Ja(h,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ki(an(h)),f.m=null,f.P=!0,xu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Xi(this),ec(this),wt(19))};function Ji(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function lh(o,h){var f=null;if(o.g==h){Ji(o),tc(o),o.g=null;var m=2}else if(Xa(o.h,h))f=h.D,$u(o.h,h),m=1;else return;if(o.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var S=o.B;m=$i(),he(m,new Du(m,f)),Yi(o)}else ah(o);else if(S=h.s,S==3||S==0&&0<h.X||!(m==1&&Dg(o,h)||m==2&&ec(o)))switch(f&&0<f.length&&(h=o.h,h.i=h.i.concat(f)),S){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function uh(o,h){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*h}function sr(o,h){if(o.j.info("Error code "+h),h==2){var f=_(o.fb,o),m=o.Xa;const S=!m;m=new rr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Gi(m,"https"),Ki(m),S?Ag(m.toString(),f):bg(m.toString(),f)}else wt(2);o.G=0,o.l&&o.l.sa(h),hh(o),sh(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function hh(o){if(o.G=0,o.ka=[],o.l){const h=ju(o.h);(h.length!=0||o.i.length!=0)&&(D(o.ka,h),D(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function dh(o,h,f){var m=f instanceof rr?an(f):new rr(f);if(m.g!="")h&&(m.g=h+"."+m.g),zi(m,m.s);else{var S=c.location;m=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;var N=new rr(null);m&&Gi(N,m),h&&(N.g=h),S&&zi(N,S),f&&(N.l=f),m=N}return f=o.D,h=o.ya,f&&h&&Fe(m,f,h),Fe(m,"VER",o.la),Us(o,m),m}function fh(o,h,f){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new qe(new Vs({eb:f})):new qe(o.pa),h.Ha(o.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ph(){}t=ph.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zi(){}Zi.prototype.g=function(o,h){return new Ot(o,h)};function Ot(o,h){fe.call(this),this.g=new rh(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!H(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!H(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new Or(this)}C(Ot,fe),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Za(this.g)},Ot.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=St(o),o=f);h.i.push(new pg(h.Ya++,o)),h.G==3&&Yi(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Za(this.g),delete this.g,Ot.aa.N.call(this)};function mh(o){Ha.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}C(mh,Ha);function _h(){qa.call(this),this.status=1}C(_h,qa);function Or(o){this.g=o}C(Or,ph),Or.prototype.ua=function(){he(this.g,"a")},Or.prototype.ta=function(o){he(this.g,new mh(o))},Or.prototype.sa=function(o){he(this.g,new _h)},Or.prototype.ra=function(){he(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,am=function(){return new Zi},om=function(){return $i()},im=tr,Gc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,wo=ji,Ou.COMPLETE="complete",sm=Ou,Su.EventType=Rs,Rs.OPEN="a",Rs.CLOSE="b",Rs.ERROR="c",Rs.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Gs=Su,rm=Vs,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,nm=qe}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});const Sd="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let Es="10.12.1";/**
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
 */const vr=new Cl("@firebase/firestore");function js(){return vr.logLevel}function Z(t,...e){if(vr.logLevel<=Ie.DEBUG){const n=e.map(Ol);vr.debug(`Firestore (${Es}): ${t}`,...n)}}function vn(t,...e){if(vr.logLevel<=Ie.ERROR){const n=e.map(Ol);vr.error(`Firestore (${Es}): ${t}`,...n)}}function is(t,...e){if(vr.logLevel<=Ie.WARN){const n=e.map(Ol);vr.warn(`Firestore (${Es}): ${t}`,...n)}}function Ol(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function Me(t,e){t||ue()}function pe(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class YT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JT{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new _t(e)}}class ZT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ew{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new tw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class lm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Oe(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Je(0,0))}static max(){return new de(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _i{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _i.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _i?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends _i{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const sw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends _i{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return sw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(xe.fromString(e))}static fromName(e){return new ie(xe.fromString(e).popFirst(5))}static empty(){return new ie(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new xe(e.slice()))}}function iw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Yn(s,ie.empty(),e)}function ow(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(de.min(),ie.empty(),-1)}static max(){return new Yn(de.max(),ie.empty(),-1)}}function aw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const cw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ci(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==cw)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{a[u]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function uw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ni(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class kl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kl.oe=-1;function va(t){return t==null}function $o(t){return t===0&&1/t==-1/0}function hw(t){return typeof t=="number"&&Number.isInteger(t)&&!$o(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cd(this.data.getIterator())}getIteratorFrom(e){return new Cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new lt(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class hm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hm("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const dw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Me(!!t),typeof t=="string"){let e=0;const n=dw.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function Ea(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vl(t){const e=t.mapValue.fields.__previous_value__;return Ea(e)?Vl(e):e}function gi(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class fw{constructor(e,n,r,s,i,a,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ea(t)?4:pw(t)?9007199254740991:10:ue()}function sn(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gi(t).isEqual(gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jn(s.timestampValue),c=Jn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Xe(s.doubleValue),c=Xe(i.doubleValue);return a===c?$o(a)===$o(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Pd(a)!==Pd(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!sn(a[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function vi(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return Oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Xe(i.integerValue||i.doubleValue),l=Xe(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Nd(t.timestampValue,e.timestampValue);case 4:return Nd(gi(t),gi(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(i,a){const c=Er(i),l=Er(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Oe(c[u],l[u]);if(d!==0)return d}return Oe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Oe(Xe(i.latitude),Xe(a.latitude));return c!==0?c:Oe(Xe(i.longitude),Xe(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,a){const c=i.values||[],l=a.values||[];for(let u=0;u<c.length&&u<l.length;++u){const d=as(c[u],l[u]);if(d)return d}return Oe(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===lo.mapValue&&a===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(a===lo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=a.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=Oe(l[p],d[p]);if(_!==0)return _;const T=as(c[l[p]],u[d[p]]);if(T!==0)return T}return Oe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Nd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=Jn(t),r=Jn(e),s=Oe(n.seconds,r.seconds);return s!==0?s:Oe(n.nanos,r.nanos)}function cs(t){return zc(t)}function zc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${zc(n.fields[a])}`;return s+"}"}(t.mapValue):ue()}function jo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kc(t){return!!t&&"integerValue"in t}function xl(t){return!!t&&"arrayValue"in t}function Dd(t){return!!t&&"nullValue"in t}function Od(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function ni(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ni(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ni(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ni(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=ni(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(ni(this.value))}}function dm(t){const e=[];return br(t.fields,(n,r)=>{const s=new ct([n]);if(Io(r)){const i=dm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ht(e)}/**
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
 */class gt{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,de.min(),de.min(),de.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,de.min(),de.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,de.min(),de.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ls{constructor(e,n){this.position=e,this.inclusive=n}}function kd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(a.referenceValue),n.key):r=as(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ei{constructor(e,n="asc"){this.field=e,this.dir=n}}function mw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fm{}class Ye extends fm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gw(e,n,r):n==="array-contains"?new Ew(e,r):n==="in"?new Tw(e,r):n==="not-in"?new ww(e,r):n==="array-contains-any"?new Iw(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yw(e,r):new vw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends fm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return pm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pm(t){return t.op==="and"}function mm(t){return _w(t)&&pm(t)}function _w(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Wc(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(mm(t))return t.filters.map(e=>Wc(e)).join(",");{const e=t.filters.map(n=>Wc(n)).join(",");return`${t.op}(${e})`}}function _m(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)}(t,e):t instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&_m(a,s.filters[c]),!0):!1}(t,e):void ue()}function gm(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(gm).join(" ,")+"}"}(t):"Filter"}class gw extends Ye{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class yw extends Ye{constructor(e,n){super(e,"in",n),this.keys=ym("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vw extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=ym("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ym(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class Ew extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xl(n)&&vi(n.arrayValue,this.value)}}class Tw extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vi(this.value.arrayValue,n)}}class ww extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vi(this.value.arrayValue,n)}}class Iw extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vi(this.value.arrayValue,r))}}/**
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
 */class Aw{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function xd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Aw(t,e,n,r,s,i,a)}function Ml(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.ue=n}return e.ue}function Ll(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vd(t.startAt,e.startAt)&&Vd(t.endAt,e.endAt)}function Qc(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Rr{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bw(t,e,n,r,s,i,a,c){return new Rr(t,e,n,r,s,i,a,c)}function Ul(t){return new Rr(t)}function Md(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fl(t){return t.collectionGroup!==null}function Gr(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new lt(ct.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ei(i,r))}),n.has(ct.keyField().canonicalString())||e.ce.push(new Ei(ct.keyField(),r))}return e.ce}function en(t){const e=pe(t);return e.le||(e.le=Rw(e,Gr(t))),e.le}function Rw(t,e){if(t.limitType==="F")return xd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ei(s.field,i)});const n=t.endAt?new ls(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ls(t.startAt.position,t.startAt.inclusive):null;return xd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xc(t,e){const n=t.filters.concat([e]);return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ho(t,e,n){return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ta(t,e){return Ll(en(t),en(e))&&t.limitType===e.limitType}function vm(t){return`${Ml(en(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gm(s)).join(", ")}]`),va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>cs(s)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function wa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const u=kd(a,c,l);return a.inclusive?u<=0:u<0}(r.startAt,Gr(r),s)||r.endAt&&!function(a,c,l){const u=kd(a,c,l);return a.inclusive?u>=0:u>0}(r.endAt,Gr(r),s))}(t,e)}function Sw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Em(t){return(e,n)=>{let r=!1;for(const s of Gr(t)){const i=Pw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Pw(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),u=c.data.field(i);return l!==null&&u!==null?as(l,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return um(this.inner)}size(){return this.innerSize}}/**
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
 */const Cw=new He(ie.comparator);function En(){return Cw}const Tm=new He(ie.comparator);function zs(...t){let e=Tm;for(const n of t)e=e.insert(n.key,n);return e}function wm(t){let e=Tm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hr(){return ri()}function Im(){return ri()}function ri(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nw=new He(ie.comparator),Dw=new lt(ie.comparator);function Ee(...t){let e=Dw;for(const n of t)e=e.add(n);return e}const Ow=new lt(Oe);function kw(){return Ow}/**
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
 */function Am(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$o(e)?"-0":e}}function bm(t){return{integerValue:""+t}}function Vw(t,e){return hw(e)?bm(e):Am(t,e)}/**
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
 */class Ia{constructor(){this._=void 0}}function xw(t,e,n){return t instanceof qo?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ea(i)&&(i=Vl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof Ti?Sm(t,e):t instanceof wi?Pm(t,e):function(s,i){const a=Rm(s,i),c=Ld(a)+Ld(s.Pe);return Kc(a)&&Kc(s.Pe)?bm(c):Am(s.serializer,c)}(t,e)}function Mw(t,e,n){return t instanceof Ti?Sm(t,e):t instanceof wi?Pm(t,e):n}function Rm(t,e){return t instanceof Go?function(r){return Kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qo extends Ia{}class Ti extends Ia{constructor(e){super(),this.elements=e}}function Sm(t,e){const n=Cm(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class wi extends Ia{constructor(e){super(),this.elements=e}}function Pm(t,e){let n=Cm(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class Go extends Ia{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ld(t){return Xe(t.integerValue||t.doubleValue)}function Cm(t){return xl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Lw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof wi&&s instanceof wi?os(r.elements,s.elements,sn):r instanceof Go&&s instanceof Go?sn(r.Pe,s.Pe):r instanceof qo&&s instanceof qo}(t.transform,e.transform)}class Uw{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Aa{}function Nm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Om(t.key,yn.none()):new ba(t.key,t.data,yn.none());{const n=t.data,r=Vt.empty();let s=new lt(ct.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Sr(t.key,r,new Ht(s.toArray()),yn.none())}}function Fw(t,e,n){t instanceof ba?function(s,i,a){const c=s.value.clone(),l=Fd(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,a){if(!Ao(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Fd(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Dm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof ba?function(i,a,c,l){if(!Ao(i.precondition,a))return c;const u=i.value.clone(),d=Bd(i.fieldTransforms,l,a);return u.setAll(d),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,a,c,l){if(!Ao(i.precondition,a))return c;const u=Bd(i.fieldTransforms,l,a),d=a.data;return d.setAll(Dm(i)),d.setAll(u),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,c){return Ao(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function Bw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rm(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function Ud(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&os(r,s,(i,a)=>Lw(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ba extends Aa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends Aa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fd(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Mw(a,c,n[s]))}return r}function Bd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,xw(i,a,e))}return r}class Om extends Aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $w extends Aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Fw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Im();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Nm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Ud(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Ud(n,r))}}class Bl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return Nw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Bl(e,n,r,s)}}/**
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
 */class Hw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qw{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,Ae;function Gw(t){switch(t){default:return ue();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function km(t){if(t===void 0)return vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Qe.OK:return M.OK;case Qe.CANCELLED:return M.CANCELLED;case Qe.UNKNOWN:return M.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return M.INTERNAL;case Qe.UNAVAILABLE:return M.UNAVAILABLE;case Qe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Qe.NOT_FOUND:return M.NOT_FOUND;case Qe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Qe.ABORTED:return M.ABORTED;case Qe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Qe.DATA_LOSS:return M.DATA_LOSS;default:return ue()}}(Ae=Qe||(Qe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zw(){return new TextEncoder}/**
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
 */const Kw=new pr([4294967295,4294967295],0);function $d(t){const e=zw().encode(t),n=new tm;return n.update(e),new Uint8Array(n.digest())}function jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class $l{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=pr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(pr.fromNumber(r)));return s.compare(Kw)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=$d(e),[r,s]=jd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new $l(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=$d(e),[r,s]=jd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ra{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ra(de.min(),s,new He(Oe),En(),Ee())}}class Di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Di(r,n,Ee(),Ee(),Ee())}}/**
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
 */class bo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Vm{constructor(e,n){this.targetId=e,this.me=n}}class xm{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hd{constructor(){this.fe=0,this.ge=Gd(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new Di(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Gd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ww{constructor(e){this.Le=e,this.Be=new Map,this.ke=En(),this.qe=qd(),this.Qe=new He(Oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Qc(i))if(r===0){const a=new ie(i.path);this.Ue(n,a,gt.newNoDocument(a,de.min()))}else Me(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Er(r).toUint8Array()}catch(l){if(l instanceof hm)return is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new $l(a,s,i)}catch(l){return is(l instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Qc(c.target)){const l=new ie(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,gt.newNoDocument(l,e))}i.be&&(n.set(a,i.Ce()),i.ve())}});let r=Ee();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ra(e,n,this.Qe,this.ke,r);return this.ke=En(),this.qe=qd(),this.Qe=new He(Oe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Hd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(Oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Hd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qd(){return new He(ie.comparator)}function Gd(){return new He(ie.comparator)}const Qw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Yw=(()=>({and:"AND",or:"OR"}))();class Jw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yc(t,e){return t.useProto3Json||va(e)?e:{value:e}}function zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zw(t,e){return zo(t,e.toTimestamp())}function tn(t){return Me(!!t),de.fromTimestamp(function(n){const r=Jn(n);return new Je(r.seconds,r.nanos)}(t))}function jl(t,e){return Jc(t,e).canonicalString()}function Jc(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lm(t){const e=xe.fromString(t);return Me(jm(e)),e}function Zc(t,e){return jl(t.databaseId,e.path)}function _c(t,e){const n=Lm(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(Fm(n))}function Um(t,e){return jl(t.databaseId,e)}function eI(t){const e=Lm(t);return e.length===4?xe.emptyPath():Fm(e)}function el(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fm(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zd(t,e,n){return{name:Zc(t,e),fields:n.value.mapValue.fields}}function tI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Me(d===void 0||typeof d=="string"),Tt.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(u){const d=u.code===void 0?M.UNKNOWN:km(u.code);return new Q(d,u.message||"")}(a);n=new xm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(t,r.document.name),i=tn(r.document.updateTime),a=r.document.createTime?tn(r.document.createTime):de.min(),c=new Vt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,a,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new bo(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(t,r.document),i=r.readTime?tn(r.readTime):de.min(),a=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new bo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new qw(s,i),c=r.targetId;n=new Vm(c,a)}}return n}function nI(t,e){let n;if(e instanceof ba)n={update:zd(t,e.key,e.value)};else if(e instanceof Om)n={delete:Zc(t,e.key)};else if(e instanceof Sr)n={update:zd(t,e.key,e.data),updateMask:hI(e.fieldMask)};else{if(!(e instanceof $w))return ue();n={verify:Zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof qo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ti)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof wi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Go)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Zw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function rI(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?tn(s.updateTime):tn(i);return a.isEqual(de.min())&&(a=tn(i)),new Uw(a,s.transformResults||[])}(n,e))):[]}function sI(t,e){return{documents:[Um(t,e.path)]}}function iI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Um(t,s);const i=function(u){if(u.length!==0)return $m(Wt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(u){if(u.length!==0)return u.map(d=>function(_){return{field:Ur(_.field),direction:cI(_.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Yc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function oI(t){let e=eI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const _=Bm(p);return _ instanceof Wt&&mm(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(_=>function(C){return new Ei(Fr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(n.orderBy));let c=null;n.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,va(_)?null:_}(n.limit));let l=null;n.startAt&&(l=function(p){const _=!!p.before,T=p.values||[];return new ls(T,_)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const _=!p.before,T=p.values||[];return new ls(T,_)}(n.endAt)),bw(e,s,a,i,c,"F",l,u)}function aI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fr(n.unaryFilter.field);return Ye.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>Bm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function cI(t){return Qw[t]}function lI(t){return Xw[t]}function uI(t){return Yw[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Fr(t){return ct.fromServerFormat(t.fieldPath)}function $m(t){return t instanceof Ye?function(n){if(n.op==="=="){if(Od(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(Dd(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Od(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(Dd(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:lI(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(s=>$m(s));return r.length===1?r[0]:{compositeFilter:{op:uI(n.op),filters:r}}}(t):ue()}function hI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,s,i=de.min(),a=de.min(),c=Tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dI{constructor(e){this.ct=e}}function fI(t){const e=oI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ho(e,e.limit,"L"):e}/**
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
 */class pI{constructor(){this._n=new mI}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Yn.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class mI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(xe.comparator)).toArray()}}/**
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
 */class us{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new us(0)}static Ln(){return new us(-1)}}/**
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
 */class _I{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,Ht.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=zs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=En();const a=ri(),c=function(){return ri()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(u.key,u):d!==void 0?(a.set(u.key,d.mutation.getFieldMask()),si(d.mutation,u,d.mutation.getFieldMask(),Je.now())):a.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>a.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new gI(d,(p=a.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new He((a,c)=>a-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Ht.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=Im();d.forEach(_=>{if(!i.has(_)){const T=Nm(n.get(_),r.get(_));T!==null&&p.set(_,T),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ie.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fl(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(hr());let c=-1,l=i;return a.next(u=>$.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{l=l.insert(d,_)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ee())).next(d=>({batchId:c,changes:wm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=zs();return this.indexManager.getCollectionParents(e,i).next(c=>$.forEach(c,l=>{const u=function(p,_){return new Rr(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,u)=>{const d=u.getKey();a.get(d)===null&&(a=a.insert(d,gt.newInvalidDocument(d)))});let c=zs();return a.forEach((l,u)=>{const d=i.get(l);d!==void 0&&si(d.mutation,u,Ht.empty(),Je.now()),wa(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class vI{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:tn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:fI(s.bundledQuery),readTime:tn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class EI{constructor(){this.overlays=new He(ie.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=hr(),i=n.length+1,a=new ie(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((u,d)=>u-d);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=hr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=hr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return $.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Hw(n,r));let i=this.hr.get(n);i===void 0&&(i=Ee(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Hl{constructor(){this.Pr=new lt(nt.Ir),this.Tr=new lt(nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new nt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ie(new xe([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ie(new xe([])),r=new nt(n,e),s=new nt(n,e+1);let i=Ee();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ie.comparator(e.key,n.key)||Oe(e.pr,n.pr)}static Er(e,n){return Oe(e.pr,n.pr)||ie.comparator(e.key,n.key)}}/**
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
 */class TI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new lt(nt.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jw(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.wr=this.wr.add(new nt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(a)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const c=this.Sr(a.pr);i.push(c)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(Oe);return n.forEach(s=>{const i=new nt(s,0),a=new nt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],c=>{r=r.add(c.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const a=new nt(new ie(i),0);let c=new lt(Oe);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},a),$.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new nt(n,0),s=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wI{constructor(e){this.vr=e,this.docs=function(){return new He(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=En();const a=n.path,c=new ie(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||aw(ow(d),r)<=0||(s.has(d.key)||wa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new II(this)}getSize(e){return $.resolve(this.size)}}class II extends _I{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class AI{constructor(e){this.persistence=e,this.Mr=new Ts(n=>Ml(n),Ll),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Hl,this.targetCount=0,this.Lr=us.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
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
 */class bI{constructor(e,n){this.Br={},this.overlays={},this.kr=new kl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new AI(this),this.indexManager=new pI,this.remoteDocumentCache=function(s){return new wI(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new dI(n),this.$r=new vI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new TI(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new RI(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class RI extends lw{constructor(e){super(),this.currentSequenceNumber=e}}class ql{constructor(e){this.persistence=e,this.zr=new Hl,this.jr=null}static Hr(e){return new ql(e)}get Jr(){if(this.jr)return this.jr;throw ue()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const s=ie.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Gl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gl(e,n.fromCache,r,s)}}/**
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
 */class SI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PI{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return O0()?8:uw(ht())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new SI;return this.Ji(e,n,a).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,a,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(js()<=Ie.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(js()<=Ie.DEBUG&&Z("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(js()<=Ie.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):$.resolve())}ji(e,n){if(Md(n))return $.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ho(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ee(...i);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,a,l.readTime)?this.ji(e,Ho(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return Md(n)||s.isEqual(de.min())?$.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(n,i);return this.Xi(n,a,r,s)?$.resolve(null):(js()<=Ie.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(n)),this.es(e,a,n,iw(s,-1)).next(c=>c))})}Zi(e,n){let r=new lt(Em(e));return n.forEach((s,i)=>{wa(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return js()<=Ie.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.zi.getDocumentsMatchingQuery(e,n,Yn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class CI{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new He(Oe),this.rs=new Ts(i=>Ml(i),Ll),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yI(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function NI(t,e,n,r){return new CI(t,e,n,r)}async function Hm(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Ee();for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:a,addedBatchIds:c}))})})}function DI(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,_=p.keys();let T=$.resolve();return _.forEach(C=>{T=T.next(()=>d.getEntry(l,C)).next(k=>{const D=u.docVersions.get(C);Me(D!==null),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ee();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function qm(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function OI(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,p)=>{const _=s.get(p);if(!_)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let T=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Tt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(p,T),function(k,D,j){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(_,T,d)&&c.push(n.Qr.updateTargetData(i,T))});let l=En(),u=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(kI(i,a,e.documentUpdates).next(d=>{l=d.cs,u=d.ls})),!r.isEqual(de.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return $.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function kI(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=En();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:a,ls:s}})}function VI(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xI(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Qr.allocateTargetId(r).next(a=>(s=new $n(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function tl(t,e,n){const r=pe(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ni(a))throw a;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Kd(t,e,n){const r=pe(t);let s=de.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,d){const p=pe(l),_=p.rs.get(d);return _!==void 0?$.resolve(p.ns.get(_)):p.Qr.getTargetData(u,d)}(r,a,en(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,n?s:de.min(),n?i:Ee())).next(c=>(MI(r,Sw(e),c),{documents:c,hs:i})))}function MI(t,e,n){let r=t.ss.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Wd{constructor(){this.activeTargetIds=kw()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LI{constructor(){this.no=new Wd,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Wd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UI{io(e){}shutdown(){}}/**
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
 */class Qd{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uo=null;function gc(){return uo===null?uo=function(){return 268435456+Math.round(2147483648*Math.random())}():uo++,"0x"+uo.toString(16)}/**
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
 */const FI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class BI{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const mt="WebChannelConnection";class $I extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,a){const c=gc(),l=this.vo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,a),this.Mo(n,l,u,s).then(d=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw is("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,a,c){return this.Co(n,r,s,i,a)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}vo(n,r){const s=FI[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=gc();return new Promise((a,c)=>{const l=new nm;l.setWithCredentials(!0),l.listenOnce(sm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wo.NO_ERROR:const d=l.getResponseJson();Z(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case wo.TIMEOUT:Z(mt,`RPC '${e}' ${i} timed out`),c(new Q(M.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const p=l.getStatus();if(Z(mt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const C=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(j)>=0?j:M.UNKNOWN}(T.status);c(new Q(C,T.message))}else c(new Q(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Q(M.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(mt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(mt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=gc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=am(),c=om(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new rm({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Z(mt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);let _=!1,T=!1;const C=new BI({lo:D=>{T?Z(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(_||(Z(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),Z(mt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},ho:()=>p.close()}),k=(D,j,H)=>{D.listen(j,L=>{try{H(L)}catch(V){setTimeout(()=>{throw V},0)}})};return k(p,Gs.EventType.OPEN,()=>{T||(Z(mt,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),k(p,Gs.EventType.CLOSE,()=>{T||(T=!0,Z(mt,`RPC '${e}' stream ${s} transport closed`),C.po())}),k(p,Gs.EventType.ERROR,D=>{T||(T=!0,is(mt,`RPC '${e}' stream ${s} transport errored:`,D),C.po(new Q(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,Gs.EventType.MESSAGE,D=>{var j;if(!T){const H=D.data[0];Me(!!H);const L=H,V=L.error||((j=L[0])===null||j===void 0?void 0:j.error);if(V){Z(mt,`RPC '${e}' stream ${s} received error:`,V);const ee=V.status;let ne=function(y){const I=Qe[y];if(I!==void 0)return km(I)}(ee),A=V.message;ne===void 0&&(ne=M.INTERNAL,A="Unknown error status: "+ee+" with message "+V.message),T=!0,C.po(new Q(ne,A)),p.close()}else Z(mt,`RPC '${e}' stream ${s} received:`,H),C.yo(H)}}),k(c,im.STAT_EVENT,D=>{D.stat===Gc.PROXY?Z(mt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Gc.NOPROXY&&Z(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function yc(){return typeof document<"u"?document:null}/**
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
 */function Sa(t){return new Jw(t,!0)}/**
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
 */class Gm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class zm{constructor(e,n,r,s,i,a,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Gm(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new Q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jI extends zm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=tI(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?de.min():a.readTime?tn(a.readTime):de.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=el(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=Qc(l)?{documents:sI(i,l)}:{query:iI(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Mm(i,a.resumeToken);const u=Yc(i,a.expectedCount);u!==null&&(c.expectedCount=u)}else if(a.snapshotVersion.compareTo(de.min())>0){c.readTime=zo(i,a.snapshotVersion.toTimestamp());const u=Yc(i,a.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=aI(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=el(this.serializer),n.removeTarget=e,this.i_(n)}}class HI extends zm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=rI(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.A_(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=el(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nI(this.serializer,r))};this.i_(n)}}/**
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
 */class qI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,Jc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(M.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,Jc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(M.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class GI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(vn(n),this.y_=!1):Z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class zI{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{Pr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=pe(l);u.M_.add(4),await Oi(u),u.N_.set("Unknown"),u.M_.delete(4),await Pa(u)}(this))})}),this.N_=new GI(r,s)}}async function Pa(t){if(Pr(t))for(const e of t.x_)await e(!0)}async function Oi(t){for(const e of t.x_)await e(!1)}function Km(t,e){const n=pe(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Ql(n)?Wl(n):ws(n).Xo()&&Kl(n,e))}function zl(t,e){const n=pe(t),r=ws(n);n.F_.delete(e),r.Xo()&&Wm(n,e),n.F_.size===0&&(r.Xo()?r.n_():Pr(n)&&n.N_.set("Unknown"))}function Kl(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).P_(e)}function Wm(t,e){t.L_.xe(e),ws(t).I_(e)}function Wl(t){t.L_=new Ww({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.N_.w_()}function Ql(t){return Pr(t)&&!ws(t).Zo()&&t.F_.size>0}function Pr(t){return pe(t).M_.size===0}function Qm(t){t.L_=void 0}async function KI(t){t.N_.set("Online")}async function WI(t){t.F_.forEach((e,n)=>{Kl(t,e)})}async function QI(t,e){Qm(t),Ql(t)?(t.N_.D_(e),Wl(t)):t.N_.set("Unknown")}async function XI(t,e,n){if(t.N_.set("Online"),e instanceof xm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ko(t,r)}else if(e instanceof bo?t.L_.Ke(e):e instanceof Vm?t.L_.He(e):t.L_.We(e),!n.isEqual(de.min()))try{const r=await qm(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.L_.rt(a);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(u);d&&i.F_.set(u,d.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,u)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(Tt.EMPTY_BYTE_STRING,d.snapshotVersion)),Wm(i,l);const p=new $n(d.target,l,u,d.sequenceNumber);Kl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Ko(t,r)}}async function Ko(t,e,n){if(!Ni(e))throw e;t.M_.add(1),await Oi(t),t.N_.set("Offline"),n||(n=()=>qm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Pa(t)})}function Xm(t,e){return e().catch(n=>Ko(t,n,e))}async function Ca(t){const e=pe(t),n=Zn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;YI(e);)try{const s=await VI(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,JI(e,s)}catch(s){await Ko(e,s)}Ym(e)&&Jm(e)}function YI(t){return Pr(t)&&t.v_.length<10}function JI(t,e){t.v_.push(e);const n=Zn(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function Ym(t){return Pr(t)&&!Zn(t).Zo()&&t.v_.length>0}function Jm(t){Zn(t).start()}async function ZI(t){Zn(t).V_()}async function eA(t){const e=Zn(t);for(const n of t.v_)e.d_(n.mutations)}async function tA(t,e,n){const r=t.v_.shift(),s=Bl.from(r,e,n);await Xm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ca(t)}async function nA(t,e){e&&Zn(t).E_&&await async function(r,s){if(function(a){return Gw(a)&&a!==M.ABORTED}(s.code)){const i=r.v_.shift();Zn(r).t_(),await Xm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ca(r)}}(t,e),Ym(t)&&Jm(t)}async function Xd(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Pr(n);n.M_.add(3),await Oi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Pa(n)}async function rA(t,e){const n=pe(t);e?(n.M_.delete(2),await Pa(n)):e||(n.M_.add(2),await Oi(n),n.N_.set("Unknown"))}function ws(t){return t.B_||(t.B_=function(n,r,s){const i=pe(n);return i.f_(),new jI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:KI.bind(null,t),To:WI.bind(null,t),Ao:QI.bind(null,t),h_:XI.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Ql(t)?Wl(t):t.N_.set("Unknown")):(await t.B_.stop(),Qm(t))})),t.B_}function Zn(t){return t.k_||(t.k_=function(n,r,s){const i=pe(n);return i.f_(),new HI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:ZI.bind(null,t),Ao:nA.bind(null,t),R_:eA.bind(null,t),A_:tA.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Ca(t)):(await t.k_.stop(),t.v_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Xl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Xl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yl(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Ni(t))return new Q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Yd{constructor(){this.q_=new He(ie.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ue():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,a,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new hs(e,n,zr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sA{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class iA{constructor(){this.queries=new Ts(e=>vm(e),Ta),this.onlineState="Unknown",this.z_=new Set}}async function Zm(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new sA,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Yl(a,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Jl(n)}async function e_(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oA(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.U_)c.H_(s)&&(r=!0);a.K_=s}}r&&Jl(n)}function aA(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function Jl(t){t.z_.forEach(e=>{e.next()})}var nl,Jd;(Jd=nl||(nl={})).J_="default",Jd.Cache="cache";class t_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==nl.Cache}}/**
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
 */class n_{constructor(e){this.key=e}}class r_{constructor(e){this.key=e}}class cA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ee(),this.mutatedKeys=Ee(),this.Ia=Em(e),this.Ta=new zr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Yd,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const _=s.get(d),T=wa(this.query,p)?p:null,C=!!_&&this.mutatedKeys.has(_.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let D=!1;_&&T?_.data.isEqual(T.data)?C!==k&&(r.track({type:3,doc:T}),D=!0):this.Ra(_,T)||(r.track({type:2,doc:T}),D=!0,(l&&this.Ia(T,l)>0||u&&this.Ia(T,u)<0)&&(c=!0)):!_&&T?(r.track({type:0,doc:T}),D=!0):_&&!T&&(r.track({type:1,doc:_}),D=!0,(l||u)&&(c=!0)),D&&(T?(a=a.add(T),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((d,p)=>function(T,C){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(T)-k(C)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,a.length!==0||u?{snapshot:new hs(this.query,e.Ta,i,a,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Yd,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ee(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new r_(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new n_(r))}),n}pa(e){this.la=e.hs,this.Pa=Ee();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return hs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class lA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uA{constructor(e){this.key=e,this.wa=!1}}class hA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Ts(c=>vm(c),Ta),this.Da=new Map,this.Ca=new Set,this.va=new He(ie.comparator),this.Fa=new Map,this.Ma=new Hl,this.xa={},this.Oa=new Map,this.Na=us.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function dA(t,e,n=!0){const r=l_(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await s_(r,e,n,!0),s}async function fA(t,e){const n=l_(t);await s_(n,e,!0,!1)}async function s_(t,e,n,r){const s=await xI(t.localStore,en(e)),i=s.targetId,a=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await pA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Km(t.remoteStore,s),c}async function pA(t,e,n,r,s){t.Ba=(p,_,T)=>async function(k,D,j,H){let L=D.view.da(j);L.Xi&&(L=await Kd(k.localStore,D.query,!1).then(({documents:A})=>D.view.da(A,L)));const V=H&&H.targetChanges.get(D.targetId),ee=H&&H.targetMismatches.get(D.targetId)!=null,ne=D.view.applyChanges(L,k.isPrimaryClient,V,ee);return ef(k,D.targetId,ne.fa),ne.snapshot}(t,p,_,T);const i=await Kd(t.localStore,e,!0),a=new cA(e,i.hs),c=a.da(i.documents),l=Di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=a.applyChanges(c,t.isPrimaryClient,l);ef(t,n,u.fa);const d=new lA(e,n,a);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function mA(t,e,n){const r=pe(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!Ta(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&zl(r.remoteStore,s.targetId),rl(r,s.targetId)}).catch(Ci)):(rl(r,s.targetId),await tl(r.localStore,s.targetId,!0))}async function _A(t,e){const n=pe(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zl(n.remoteStore,r.targetId))}async function gA(t,e,n){const r=AA(t);try{const s=await function(a,c){const l=pe(a),u=Je.now(),d=c.reduce((T,C)=>T.add(C.key),Ee());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let C=En(),k=Ee();return l.os.getEntries(T,d).next(D=>{C=D,C.forEach((j,H)=>{H.isValidDocument()||(k=k.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,C)).next(D=>{p=D;const j=[];for(const H of c){const L=Bw(H,p.get(H.key).overlayedDocument);L!=null&&j.push(new Sr(H.key,L,dm(L.value.mapValue),yn.exists(!0)))}return l.mutationQueue.addMutationBatch(T,u,j,c)}).next(D=>{_=D;const j=D.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(T,D.batchId,j)})}).then(()=>({batchId:_.batchId,changes:wm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let u=a.xa[a.currentUser.toKey()];u||(u=new He(Oe)),u=u.insert(c,l),a.xa[a.currentUser.toKey()]=u}(r,s.batchId,n),await ki(r,s.changes),await Ca(r.remoteStore)}catch(s){const i=Yl(s,"Failed to persist write");n.reject(i)}}async function i_(t,e){const n=pe(t);try{const r=await OI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Fa.get(i);a&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?Me(a.wa):s.removedDocuments.size>0&&(Me(a.wa),a.wa=!1))}),await ki(n,r,e)}catch(r){await Ci(r)}}function Zd(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,a)=>{const c=a.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=pe(a);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const _ of p.U_)_.j_(c)&&(u=!0)}),u&&Jl(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yA(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new He(ie.comparator);a=a.insert(i,gt.newNoDocument(i,de.min()));const c=Ee().add(i),l=new Ra(de.min(),new Map,new He(Oe),a,c);await i_(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Zl(r)}else await tl(r.localStore,e,!1).then(()=>rl(r,e,n)).catch(Ci)}async function vA(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await DI(n.localStore,e);a_(n,r,null),o_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ki(n,s)}catch(s){await Ci(s)}}async function EA(t,e,n){const r=pe(t);try{const s=await function(a,c){const l=pe(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Me(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);a_(r,e,n),o_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ki(r,s)}catch(s){await Ci(s)}}function o_(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function a_(t,e,n){const r=pe(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function rl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||c_(t,r)})}function c_(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(zl(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Zl(t))}function ef(t,e,n){for(const r of n)r instanceof n_?(t.Ma.addReference(r.key,e),TA(t,r)):r instanceof r_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||c_(t,r.key)):ue()}function TA(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Zl(t))}function Zl(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ie(xe.fromString(e)),r=t.Na.next();t.Fa.set(r,new uA(n)),t.va=t.va.insert(n,r),Km(t.remoteStore,new $n(en(Ul(n.path)),r,"TargetPurposeLimboResolution",kl.oe))}}async function ki(t,e,n){const r=pe(t),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{a.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const d=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Gl.Ki(l.targetId,u);i.push(d)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(l,u){const d=pe(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,_=>$.forEach(_.qi,T=>d.persistence.referenceDelegate.addReference(p,_.targetId,T)).next(()=>$.forEach(_.Qi,T=>d.persistence.referenceDelegate.removeReference(p,_.targetId,T)))))}catch(p){if(!Ni(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const _=p.targetId;if(!p.fromCache){const T=d.ns.get(_),C=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(C);d.ns=d.ns.insert(_,k)}}}(r.localStore,i))}async function wA(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await Hm(n.localStore,e);n.currentUser=e,function(i,a){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new Q(M.CANCELLED,a))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(n,r.us)}}function IA(t,e){const n=pe(t),r=n.Fa.get(e);if(r&&r.wa)return Ee().add(r.key);{let s=Ee();const i=n.Da.get(e);if(!i)return s;for(const a of i){const c=n.ba.get(a);s=s.unionWith(c.view.Ea)}return s}}function l_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=i_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yA.bind(null,e),e.Sa.h_=oA.bind(null,e.eventManager),e.Sa.ka=aA.bind(null,e.eventManager),e}function AA(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EA.bind(null,e),e}class tf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return NI(this.persistence,new PI,e.initialUser,this.serializer)}createPersistence(e){return new bI(ql.Hr,this.serializer)}createSharedClientState(e){return new LI}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wA.bind(null,this.syncEngine),await rA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iA}()}createDatastore(e){const n=Sa(e.databaseInfo.databaseId),r=function(i){return new $I(i)}(e.databaseInfo);return function(i,a,c,l){return new qI(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new zI(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Zd(this.syncEngine,n,0),function(){return Qd.D()?new Qd:new UI}())}createSyncEngine(e,n){return function(s,i,a,c,l,u,d){const p=new hA(s,i,a,c,l,u);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=pe(r);Z("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Oi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class u_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class RA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=lm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PA(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Xd(e.remoteStore,s)),t._onlineComponents=e}function SA(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function PA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!SA(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await vc(t,new tf)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await vc(t,new tf);return t._offlineComponents}async function h_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await nf(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await nf(t,new bA))),t._onlineComponents}function CA(t){return h_(t).then(e=>e.syncEngine)}async function d_(t){const e=await h_(t),n=e.eventManager;return n.onListen=dA.bind(null,e.syncEngine),n.onUnlisten=mA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_A.bind(null,e.syncEngine),n}function NA(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,u){const d=new u_({next:_=>{a.enqueueAndForget(()=>e_(i,p));const T=_.docs.has(c);!T&&_.fromCache?u.reject(new Q(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&_.fromCache&&l&&l.source==="server"?u.reject(new Q(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new t_(Ul(c.path),d,{includeMetadataChanges:!0,ra:!0});return Zm(i,p)}(await d_(t),t.asyncQueue,e,n,r)),r.promise}function DA(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,u){const d=new u_({next:_=>{a.enqueueAndForget(()=>e_(i,p)),_.fromCache&&l.source==="server"?u.reject(new Q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new t_(c,d,{includeMetadataChanges:!0,ra:!0});return Zm(i,p)}(await d_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function f_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rf=new Map;/**
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
 */function p_(t,e,n){if(!n)throw new Q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OA(t,e,n,r){if(e===!0&&r===!0)throw new Q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sf(t){if(!ie.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function of(t){if(ie.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Na(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Na(t);throw new Q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function kA(t,e){if(e<=0)throw new Q(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class af{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Da{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XT;switch(r.type){case"firstParty":return new ew(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),rf.delete(n),r.terminate())}(this),Promise.resolve()}}function VA(t,e,n,r={}){var s;const i=(t=wr(t,Da))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=_t.MOCK_USER;else{c=R0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(u)}t._authCredentials=new YT(new cm(c,l))}}/**
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
 */class bn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bn(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Wn extends bn{constructor(e,n,r){super(e,n,Ul(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new ie(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function Wo(t,e,...n){if(t=Et(t),p_("collection","path",e),t instanceof Da){const r=xe.fromString(e,...n);return of(r),new Wn(t,null,r)}{if(!(t instanceof Ct||t instanceof Wn))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return of(r),new Wn(t.firestore,null,r)}}function xA(t,e,...n){if(t=Et(t),arguments.length===1&&(e=lm.newId()),p_("doc","path",e),t instanceof Da){const r=xe.fromString(e,...n);return sf(r),new Ct(t,null,new ie(r))}{if(!(t instanceof Ct||t instanceof Wn))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return sf(r),new Ct(t.firestore,t instanceof Wn?t.converter:null,new ie(r))}}/**
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
 */class MA{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Gm(this,"async_queue_retry"),this.hu=()=>{const n=yc();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=yc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new gn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ni(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Xl.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ue()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Oa extends Da{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new MA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||m_(this),this._firestoreClient.terminate()}}function LA(t,e){const n=typeof t=="object"?t:Jp(),r=typeof t=="string"?t:e||"(default)",s=Dl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=A0("firestore");i&&VA(s,...i)}return s}function eu(t){return t._firestoreClient||m_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function m_(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new fw(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,f_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new RA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(Tt.fromBase64String(e))}catch(n){throw new Q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ka{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class tu{constructor(e){this._methodName=e}}/**
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
 */class nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */const UA=/^__.*__$/;class __{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function g_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class ru{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Qo(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(g_(this.fu)&&UA.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class FA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sa(e)}Fu(e,n,r,s=!1){return new ru({fu:e,methodName:n,vu:r,path:ct.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function su(t){const e=t._freezeSettings(),n=Sa(t._databaseId);return new FA(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Va extends tu{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Va}}function BA(t,e,n,r){const s=t.Fu(1,e,n);E_("Data must be an object, but it was:",s,r);const i=[],a=Vt.empty();br(r,(l,u)=>{const d=iu(e,l,n);u=Et(u);const p=s.Su(d);if(u instanceof Va)i.push(d);else{const _=Vi(u,p);_!=null&&(i.push(d),a.set(d,_))}});const c=new Ht(i);return new __(a,c,s.fieldTransforms)}function $A(t,e,n,r,s,i){const a=t.Fu(1,e,n),c=[cf(e,r,n)],l=[s];if(i.length%2!=0)throw new Q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(cf(e,i[_])),l.push(i[_+1]);const u=[],d=Vt.empty();for(let _=c.length-1;_>=0;--_)if(!qA(u,c[_])){const T=c[_];let C=l[_];C=Et(C);const k=a.Su(T);if(C instanceof Va)u.push(T);else{const D=Vi(C,k);D!=null&&(u.push(T),d.set(T,D))}}const p=new Ht(u);return new __(d,p,a.fieldTransforms)}function y_(t,e,n,r=!1){return Vi(n,t.Fu(r?4:3,e))}function Vi(t,e){if(v_(t=Et(t)))return E_("Unsupported field value:",e,t),jA(t,e);if(t instanceof tu)return function(r,s){if(!g_(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Vi(c,s.bu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:zo(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zo(s.serializer,i)}}if(r instanceof nu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:Mm(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Na(r)}`)}(t,e)}function jA(t,e){const n={};return um(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,s)=>{const i=Vi(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function v_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof nu||t instanceof ds||t instanceof Ct||t instanceof tu)}function E_(t,e,n){if(!v_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Na(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function cf(t,e,n){if((e=Et(e))instanceof ka)return e._internalPath;if(typeof e=="string")return iu(t,e);throw Qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const HA=new RegExp("[~\\*/\\[\\]]");function iu(t,e,n){if(e.search(HA)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ka(...e.split("."))._internalPath}catch{throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Q(M.INVALID_ARGUMENT,c+t+l)}function qA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ou{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(au("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GA extends ou{data(){return super.data()}}function au(t,e){return typeof e=="string"?iu(t,e):e instanceof ka?e._internalPath:e._delegate._internalPath}/**
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
 */function zA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cu{}class xa extends cu{}function Xo(t,e,...n){let r=[];e instanceof cu&&r.push(e),r=r.concat(n),function(i){const a=i.filter(l=>l instanceof uu).length,c=i.filter(l=>l instanceof lu).length;if(a>1||a>0&&c>0)throw new Q(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class lu extends xa{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new lu(e,n,r)}_apply(e){const n=this._parse(e);return T_(e._query,n),new bn(e.firestore,e.converter,Xc(e._query,n))}_parse(e){const n=su(e.firestore);return function(i,a,c,l,u,d,p){let _;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hf(p,d);const T=[];for(const C of p)T.push(uf(l,i,C));_={arrayValue:{values:T}}}else _=uf(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hf(p,d),_=y_(c,a,p,d==="in"||d==="not-in");return Ye.create(u,d,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class uu extends cu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)T_(a,l),a=Xc(a,l)}(e._query,n),new bn(e.firestore,e.converter,Xc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hu extends xa{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hu(e,n)}_apply(e){const n=function(s,i,a){if(s.startAt!==null)throw new Q(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ei(i,a)}(e._query,this._field,this._direction);return new bn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Rr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Yo(t,e="asc"){const n=e,r=au("orderBy",t);return hu._create(r,n)}class du extends xa{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new du(e,n,r)}_apply(e){return new bn(e.firestore,e.converter,Ho(e._query,this._limit,this._limitType))}}function lf(t){return kA("limit",t),du._create("limit",t,"F")}class fu extends xa{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new fu(e,n,r)}_apply(e){const n=WA(e,this.type,this._docOrFields,this._inclusive);return new bn(e.firestore,e.converter,function(s,i){return new Rr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function KA(...t){return fu._create("startAfter",t,!1)}function WA(t,e,n,r){if(n[0]=Et(n[0]),n[0]instanceof ou)return function(i,a,c,l,u){if(!l)throw new Q(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const p of Gr(i))if(p.field.isKeyField())d.push(jo(a,l.key));else{const _=l.data.field(p.field);if(Ea(_))throw new Q(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const T=p.field.canonicalString();throw new Q(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${T}' (used as the orderBy) does not exist.`)}d.push(_)}return new ls(d,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=su(t.firestore);return function(a,c,l,u,d,p){const _=a.explicitOrderBy;if(d.length>_.length)throw new Q(M.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const T=[];for(let C=0;C<d.length;C++){const k=d[C];if(_[C].field.isKeyField()){if(typeof k!="string")throw new Q(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof k}`);if(!Fl(a)&&k.indexOf("/")!==-1)throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${k}' contains a slash.`);const D=a.path.child(xe.fromString(k));if(!ie.isDocumentKey(D))throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const j=new ie(D);T.push(jo(c,j))}else{const D=y_(l,u,k);T.push(D)}}return new ls(T,p)}(t._query,t.firestore._databaseId,s,e,n,r)}}function uf(t,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new Q(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fl(e)&&n.indexOf("/")!==-1)throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!ie.isDocumentKey(r))throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jo(t,new ie(r))}if(n instanceof Ct)return jo(t,n._key);throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Na(n)}.`)}function hf(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function T_(t,e){const n=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class QA{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new nu(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Me(jm(r));const s=new yi(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w_ extends ou{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(au("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ro extends w_{data(e={}){return super.data(e)}}class XA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ro(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:YA(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function JA(t){t=wr(t,Ct);const e=wr(t.firestore,Oa);return NA(eu(e),t._key).then(n=>t1(e,t,n))}class I_ extends QA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Jo(t){t=wr(t,bn);const e=wr(t.firestore,Oa),n=eu(e),r=new I_(e);return zA(t._query),DA(n,t._query).then(s=>new XA(e,r,t,s))}function ZA(t,e,n,...r){t=wr(t,Ct);const s=wr(t.firestore,Oa),i=su(s);let a;return a=typeof(e=Et(e))=="string"||e instanceof ka?$A(i,"updateDoc",t._key,e,n,r):BA(i,"updateDoc",t._key,e),e1(s,[a.toMutation(t._key,yn.exists(!0))])}function e1(t,e){return function(r,s){const i=new gn;return r.asyncQueue.enqueueAndForget(async()=>gA(await CA(r),s,i)),i.promise}(eu(t),e)}function t1(t,e,n){const r=n.docs.get(e._key),s=new I_(t);return new w_(t,s,e._key,r,new Ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Es=s})(vs),ss(new gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Oa(new JT(r.getProvider("auth-internal")),new nw(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(u.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Kn(Sd,"4.6.3",e),Kn(Sd,"4.6.3","esm2017")})();function pu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function A_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n1=A_,b_=new Si("auth","Firebase",A_());/**
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
 */const Zo=new Cl("@firebase/auth");function r1(t,...e){Zo.logLevel<=Ie.WARN&&Zo.warn(`Auth (${vs}): ${t}`,...e)}function So(t,...e){Zo.logLevel<=Ie.ERROR&&Zo.error(`Auth (${vs}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw mu(t,...e)}function nn(t,...e){return mu(t,...e)}function R_(t,e,n){const r=Object.assign(Object.assign({},n1()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return R_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return b_.create(t,...e)}function le(t,e,...n){if(!t)throw mu(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function wn(t,e){t||dn(e)}/**
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
 */function sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function s1(){return df()==="http:"||df()==="https:"}function df(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function i1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s1()||C0()||"connection"in navigator)?navigator.onLine:!0}function o1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=S0()||N0()}get(){return i1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _u(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class S_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const a1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const c1=new xi(3e4,6e4);function Ma(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Is(t,e,n,r,s={}){return P_(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Pi(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),S_.fetch()(N_(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function P_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},a1),e);try{const s=new l1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ho(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw ho(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw R_(t,d,u);Tn(t,d)}}catch(s){if(s instanceof An)throw s;Tn(t,"network-request-failed",{message:String(s)})}}async function C_(t,e,n,r,s={}){const i=await Is(t,e,n,r,s);return"mfaPendingCredential"in i&&Tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function N_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_u(t.config,s):`${t.config.apiScheme}://${s}`}class l1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),c1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function u1(t,e){return Is(t,"POST","/v1/accounts:delete",e)}async function D_(t,e){return Is(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function h1(t,e=!1){const n=Et(t),r=await n.getIdToken(e),s=gu(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ii(Ec(s.auth_time)),issuedAtTime:ii(Ec(s.iat)),expirationTime:ii(Ec(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function gu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gp(n);return s?JSON.parse(s):(So("Failed to decode base64 JWT payload"),null)}catch(s){return So("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ff(t){const e=gu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&d1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function d1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class f1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class il{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ea(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ii(t,D_(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?O_(i.providerUserInfo):[],c=m1(t.providerData,a),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new il(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function p1(t){const e=Et(t);await ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function m1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function O_(t){return t.map(e=>{var{providerId:n}=e,r=pu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _1(t,e){const n=await P_(t,{},async()=>{const r=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=N_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",S_.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function g1(t,e){return Is(t,"POST","/v2/accounts:revokeToken",Ma(t,e))}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ff(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=ff(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Kr;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function On(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=pu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new f1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new il(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return h1(this,e)}reload(){return p1(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await Ii(this,u1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,H=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:V,isAnonymous:ee,providerData:ne,stsTokenManager:A}=n;le(L&&A,e,"internal-error");const g=Kr.fromJSON(this.name,A);le(typeof L=="string",e,"internal-error"),On(p,e.name),On(_,e.name),le(typeof V=="boolean",e,"internal-error"),le(typeof ee=="boolean",e,"internal-error"),On(T,e.name),On(C,e.name),On(k,e.name),On(D,e.name),On(j,e.name),On(H,e.name);const y=new fn({uid:L,auth:e,email:_,emailVerified:V,displayName:p,isAnonymous:ee,photoURL:C,phoneNumber:T,tenantId:k,stsTokenManager:g,createdAt:j,lastLoginAt:H});return ne&&Array.isArray(ne)&&(y.providerData=ne.map(I=>Object.assign({},I))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ea(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?O_(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kr;c.updateFromIdToken(r);const l=new fn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new il(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const pf=new Map;function pn(t){wn(t instanceof Function,"Expected a class definition");let e=pf.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pf.set(t,e),e)}/**
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
 */class k_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k_.type="NONE";const mf=k_;/**
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
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Po(this.userKey,s.apiKey,i),this.fullPersistenceKey=Po("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(pn(mf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||pn(mf);const a=Po(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(a);if(d){const p=fn._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Wr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new Wr(i,e,r))}}/**
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
 */function _f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(U_(e))return"Blackberry";if(F_(e))return"Webos";if(yu(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(L_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V_(t=ht()){return/firefox\//i.test(t)}function yu(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(t=ht()){return/crios\//i.test(t)}function M_(t=ht()){return/iemobile/i.test(t)}function L_(t=ht()){return/android/i.test(t)}function U_(t=ht()){return/blackberry/i.test(t)}function F_(t=ht()){return/webos/i.test(t)}function La(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function y1(t=ht()){var e;return La(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v1(){return D0()&&document.documentMode===10}function B_(t=ht()){return La(t)||L_(t)||F_(t)||U_(t)||/windows phone/i.test(t)||M_(t)}function E1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $_(t,e=[]){let n;switch(t){case"Browser":n=_f(ht());break;case"Worker":n=`${_f(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class T1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function w1(t,e={}){return Is(t,"GET","/v2/passwordPolicy",Ma(t,e))}/**
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
 */const I1=6;class A1{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:I1,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class b1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new T1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await D_(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ea(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Qn(this));const n=e?Et(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w1(this),n=new A1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await g1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&r1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ua(t){return Et(t)}class gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=F0(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function R1(t){vu=t}function S1(t){return vu.loadJS(t)}function P1(){return vu.gapiScript}function C1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function N1(t,e){const n=Dl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fo(i,e??{}))return s;Tn(s,"already-initialized")}return n.initialize({options:e})}function D1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function O1(t,e,n){const r=Ua(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=j_(e),{host:a,port:c}=k1(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||V1()}function j_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function k1(t){const e=j_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:yf(a)}}}function yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class H_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function Qr(t,e){return C_(t,"POST","/v1/accounts:signInWithIdp",Ma(t,e))}/**
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
 */const x1="http://localhost";class Ir extends H_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=pu(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ir(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qr(e,n)}buildRequest(){const e={requestUri:x1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
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
 */class q_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends q_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends Mi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class Un extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class Fn extends Mi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class Bn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */async function M1(t,e){return C_(t,"POST","/v1/accounts:signUp",Ma(t,e))}/**
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
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),a=vf(r);return new er({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vf(r);return new er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function L1(t){var e;if(hn(t.app))return Promise.reject(Qn(t));const n=Ua(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new er({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await M1(n,{returnSecureToken:!0}),s=await er._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class ta extends An{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ta.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ta(e,n,r,s)}}function G_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ta._fromErrorAndOperation(t,i,e,r):i})}async function U1(t,e,n=!1){const r=await Ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return er._forOperation(t,"link",r)}/**
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
 */async function F1(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(Qn(r));const s="reauthenticate";try{const i=await Ii(t,G_(r,s,e,t),n);le(i.idToken,r,"internal-error");const a=gu(i.idToken);le(a,r,"internal-error");const{sub:c}=a;return le(t.uid===c,r,"user-mismatch"),er._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),i}}/**
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
 */async function B1(t,e,n=!1){if(hn(t.app))return Promise.reject(Qn(t));const r="signIn",s=await G_(t,r,e),i=await er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function $1(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function j1(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}const na="__sak";/**
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
 */class z_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(na,"1"),this.storage.removeItem(na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function H1(){const t=ht();return yu(t)||La(t)}const q1=1e3,G1=10;class K_ extends z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H1()&&E1(),this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);v1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,G1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}K_.type="LOCAL";const z1=K_;/**
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
 */class W_ extends z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}W_.type="SESSION";const Q_=W_;/**
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
 */function K1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async u=>u(n.origin,i)),l=await K1(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
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
 */function Eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class W1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const u=Eu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rn(){return window}function Q1(t){rn().location.href=t}/**
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
 */function X_(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function X1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function J1(){return X_()?self:null}/**
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
 */const Y_="firebaseLocalStorageDb",Z1=1,ra="firebaseLocalStorage",J_="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ba(t,e){return t.transaction([ra],e?"readwrite":"readonly").objectStore(ra)}function eb(){const t=indexedDB.deleteDatabase(Y_);return new Li(t).toPromise()}function ol(){const t=indexedDB.open(Y_,Z1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ra,{keyPath:J_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ra)?e(r):(r.close(),await eb(),e(await ol()))})})}async function Ef(t,e,n){const r=Ba(t,!0).put({[J_]:e,value:n});return new Li(r).toPromise()}async function tb(t,e){const n=Ba(t,!1).get(e),r=await new Li(n).toPromise();return r===void 0?null:r.value}function Tf(t,e){const n=Ba(t,!0).delete(e);return new Li(n).toPromise()}const nb=800,rb=3;class Z_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(J1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Y1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ol();return await Ef(e,na,"1"),await Tf(e,na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ef(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ba(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Z_.type="LOCAL";const sb=Z_;new xi(3e4,6e4);/**
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
 */function ib(t,e){return e?pn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tu extends H_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ob(t){return B1(t.auth,new Tu(t),t.bypassAuthState)}function ab(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),F1(n,new Tu(t),t.bypassAuthState)}async function cb(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),U1(n,new Tu(t),t.bypassAuthState)}/**
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
 */class eg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ob;case"linkViaPopup":case"linkViaRedirect":return cb;case"reauthViaPopup":case"reauthViaRedirect":return ab;default:Tn(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lb=new xi(2e3,1e4);class Br extends eg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lb.get())};e()}}Br.currentPopupAction=null;/**
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
 */const ub="pendingRedirect",Co=new Map;class hb extends eg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function db(t,e){const n=mb(e),r=pb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function fb(t,e){Co.set(t._key(),e)}function pb(t){return pn(t._redirectPersistence)}function mb(t){return Po(ub,t.config.apiKey,t.name)}async function _b(t,e,n=!1){if(hn(t.app))return Promise.reject(Qn(t));const r=Ua(t),s=ib(r,e),a=await new hb(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const gb=10*60*1e3;class yb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gb&&this.cachedEventUids.clear(),this.cachedEventUids.has(wf(e))}saveEventToCache(e){this.cachedEventUids.add(wf(e)),this.lastProcessedEventTime=Date.now()}}function wf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tg(t);default:return!1}}/**
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
 */async function Eb(t,e={}){return Is(t,"GET","/v1/projects",e)}/**
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
 */const Tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wb=/^https?/;async function Ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Eb(t);for(const n of e)try{if(Ab(n))return}catch{}Tn(t,"unauthorized-domain")}function Ab(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!wb.test(n))return!1;if(Tb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bb=new xi(3e4,6e4);function If(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rb(t){return new Promise((e,n)=>{var r,s,i;function a(){If(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{If(),n(nn(t,"network-request-failed"))},timeout:bb.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)a();else{const c=C1("iframefcb");return rn()[c]=()=>{gapi.load?a():n(nn(t,"network-request-failed"))},S1(`${P1()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw No=null,e})}let No=null;function Sb(t){return No=No||Rb(t),No}/**
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
 */const Pb=new xi(5e3,15e3),Cb="__/auth/iframe",Nb="emulator/auth/iframe",Db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kb(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_u(e,Nb):`https://${t.config.authDomain}/${Cb}`,r={apiKey:e.apiKey,appName:t.name,v:vs},s=Ob.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pi(r).slice(1)}`}async function Vb(t){const e=await Sb(t),n=rn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:kb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Db,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=nn(t,"network-request-failed"),c=rn().setTimeout(()=>{i(a)},Pb.get());function l(){rn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const xb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mb=500,Lb=600,Ub="_blank",Fb="http://localhost";class Af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bb(t,e,n,r=Mb,s=Lb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},xb),{width:r.toString(),height:s.toString(),top:i,left:a}),u=ht().toLowerCase();n&&(c=x_(u)?Ub:n),V_(u)&&(e=e||Fb,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[T,C])=>`${_}${T}=${C},`,"");if(y1(u)&&c!=="_self")return $b(e||"",c),new Af(null);const p=window.open(e||"",c,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Af(p)}function $b(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jb="__/auth/handler",Hb="emulator/auth/handler",qb=encodeURIComponent("fac");async function bf(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:s};if(e instanceof q_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",U0(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(i||{}))a[d]=p}if(e instanceof Mi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${qb}=${encodeURIComponent(l)}`:"";return`${Gb(t)}?${Pi(c).slice(1)}${u}`}function Gb({config:t}){return t.emulator?_u(t,Hb):`https://${t.authDomain}/${jb}`}/**
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
 */const Tc="webStorageSupport";class zb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Q_,this._completeRedirectFn=_b,this._overrideRedirectResult=fb}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await bf(e,n,r,sl(),s);return Bb(e,a,Eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bf(e,n,r,sl(),s);return Q1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Vb(e),r=new yb(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tc];a!==void 0&&n(!!a),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ib(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B_()||yu()||La()}}const Kb=zb;var Rf="@firebase/auth",Sf="1.7.3";/**
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
 */class Wb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xb(t){ss(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(t)},u=new b1(r,s,i,l);return D1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new gr("auth-internal",e=>{const n=Ua(e.getProvider("auth").getImmediate());return(r=>new Wb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Rf,Sf,Qb(t)),Kn(Rf,Sf,"esm2017")}/**
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
 */const Yb=5*60,Jb=Wp("authIdTokenMaxAge")||Yb;let Pf=null;const Zb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jb)return;const s=n==null?void 0:n.token;Pf!==s&&(Pf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eR(t=Jp()){const e=Dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=N1(t,{popupRedirectResolver:Kb,persistence:[sb,z1,Q_]}),r=Wp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Zb(i.toString());j1(n,a,()=>a(n.currentUser)),$1(n,c=>a(c))}}const s=zp("auth");return s&&O1(n,`http://${s}`),n}function tR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}R1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xb("Browser");const nR={apiKey:"AIzaSyBMX5fhRGBNhKpf11lnHhVi018b5Zavkv8",authDomain:"ws-db-11235813.firebaseapp.com",projectId:"ws-db-11235813",storageBucket:"ws-db-11235813.appspot.com",messagingSenderId:"318238552225",appId:"1:318238552225:web:a5eae1ca149d3137dbc0e0",measurementId:"G-EE5YZ9ZW6P"},ng=Yp(nR),oi=LA(ng),rR=eR(ng);L1(rR).then(()=>{console.log("Signed in anonymously")}).catch(t=>{console.error("Error signing in anonymously:",t)});const Cr=_a("dbDataStore",()=>{const t=yt({}),e=yt({name:"default",url:"noUrl",weight:-1,color:3,isShow:!1,valid:!0,id:"noId",no:-1}),n=yt(!1),r=yt(-1),s=yt(-1),i=async()=>{n.value=!0,console.log("Call updateSiteData function"),a(!1);try{const L=Xo(Wo(oi,"siteData"),Yo("no")),V=await Jo(L);console.log("Fetching documents: updateSiteData function"),V.forEach(ee=>{const ne=ee.data();ne.id in t.value?(t.value[ne.id].valid=!0,t.value[ne.id].name=ne.name,t.value[ne.id].url=ne.url):t.value[ne.id]={name:ne.name,url:ne.url,weight:Object.keys(t.value).length,color:0,isShow:!0,valid:!0,id:ne.id,no:ne.no}})}catch(L){console.error("Error fetching documents: ",L),a(!0)}c(),n.value=!1};function a(L){for(const V of Object.keys(t.value))t.value[V].valid=L}function c(){for(const[L,V]of Object.entries(t.value))V.valid||delete t.value[L];C()}const l=async()=>{n.value=!0;let L={};console.log("Call resetSiteData function");try{const V=Xo(Wo(oi,"siteData"),Yo("no")),ee=await Jo(V);console.log("Fetching documents: resetSiteData function"),ee.forEach(ne=>{const A=ne.data();t.value[A.id]={name:A.name,url:A.url,weight:Object.keys(t.value).length,color:0,isShow:!0,valid:!0,id:A.id,no:A.no}}),t.value=L}catch(V){console.error("Error fetching documents: ",V),console.log("データベースにアクセスできなかったため、サイト情報を更新できませんでした。")}};function u(L){if(L.name=="default")for(const V of Object.keys(t.value))t.value[V].weight=t.value[V].no;else{for(const V of Object.values(t.value))V.weight=V.weight+L.order.length+10;for(const V of L.order)t.value[V.id].weight=V.weight;C()}}const d=me(()=>{let L=[];for(const[V,ee]of Object.entries(t.value))L.push({id:V,weight:ee.weight});return L.sort((V,ee)=>V.weight-ee.weight),L.map(V=>V.id)}),p=me(()=>{let L=[];for(const[V,ee]of Object.entries(t.value))ee.isShow&&L.push({id:V,weight:ee.weight});return L.sort((V,ee)=>V.weight-ee.weight),L.map(V=>V.id)});function _(L){t.value[L].weight-=1.5,C()}function T(L){t.value[L].weight+=1.5,C()}function C(){let L=[];for(const[V,ee]of Object.entries(t.value))L.push({id:V,weight:ee.weight});L.sort((V,ee)=>V.weight-ee.weight);for(let V=0;V<L.length;V++)t.value[L[V].id].weight=V}function k(L,V){t.value[L].color=V}function D(L,V){t.value[L].weight=V}const j=async()=>{console.log("Call _loadDbAccessData function");let L=!1;try{const V=xA(oi,"timeLog","lastTime"),ne=(await JA(V)).data();L=s.value!=ne.lastTimeEpoch,r.value=ne.noAccess+1,s.value=ne.lastTimeEpoch,await ZA(V,{noAccess:r.value})}catch(V){console.log("Error getting document: ",V)}return L};return{siteData:t,defaultSiteData:e,noAccess:r,dbTimestamp:s,isLoadingSiteData:n,updateSiteData:i,resetSiteData:l,setOrderSiteDataPreset:u,getSortedSiteDataId:d,getSortedSiteDataIdFiltered:p,upWeight:_,downWeight:T,setSiteDataColor:k,setSiteDataWeight:D,init:async()=>(console.log("Call init function"),await j()&&console.log("Database updated"),console.log("Done init function"),0)}},{persist:!0}),We=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},sR={},iR={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},oR=K("g",null,[K("path",{d:`M497.618,248.108c-25.19-35.976-74.773-44.72-110.741-19.531c-35.967,25.191-44.72,74.766-19.514,110.742
		c25.174,35.959,74.758,44.712,110.725,19.522C514.071,333.66,522.792,284.068,497.618,248.108z`}),K("path",{d:`M302.155,266.276c0.677-24.489,9.518-63.94,49.599-104.38c15.911-16.046,54.478-40.512,126.604-37.713
		c24.25-1.348,30.978-24.241,29.639-36.366c-1.34-12.117-10.618-25.613-35.012-26.936c-32.309-1.754-110.98-12.276-196.594,69.616
		c-20.328,19.435-78.17,101.439-78.17,101.439s-32.444,41.556-80.226,80.154L0,420.35c35.521,1.833,36.765,32.15,74.486,32.15
		c38.918,0,38.918-32.325,77.818-32.325c38.886,0,38.886,32.325,77.787,32.325s38.901-32.325,77.818-32.325
		c35.569,0,38.694,26.968,68.716,31.584c-10.125-28.236-34.015-67.408-56.408-104.93
		C310.318,330.224,301.429,292.263,302.155,266.276z`})],-1),aR=[oR];function cR(t,e){return ae(),Te("svg",iR,aR)}const lR=We(sR,[["render",cR]]),uR="#003B83",hR="#420011",dR="#DC003C",fR="#EC7394",pR="#FAD9E2",mR="#001942",_R="#0054DC",gR="#80AEF8",yR="#E2ECFD",vR="#212121",ER="#595757",TR="#939292",wR="#E6E6E6",IR="#004229",AR="#329B73",bR="#7ABEA4",RR="#E0F0EA",SR="#423100",PR="#DCA000",CR="#E8C159",NR="#E8FCCC",ye={mriblue:uR,red0:hR,red1:dR,red2:fR,red3:pR,blue0:mR,blue1:_R,blue2:gR,blue3:yR,gray0:vR,gray1:ER,gray2:TR,gray3:wR,green0:IR,green1:AR,green2:bR,green3:RR,yellow0:SR,yellow1:PR,yellow2:CR,yellow3:NR},DR={class:"headerClass"},OR={class:"headerNav"},kR={class:"headerNoVistor"},VR={class:"headerIconTitle"},xR={class:"appView"},MR=Ge({__name:"App",setup(t){const e=Cr();return(n,r)=>(ae(),Te(ze,null,[K("header",DR,[K("nav",OR,[Pe(De(To),{to:"/"},{default:mo(()=>[qr("HOME")]),_:1}),Pe(De(To),{to:"/about"},{default:mo(()=>[qr("ABOUT")]),_:1}),Pe(De(To),{to:"/contact"},{default:mo(()=>[qr("CONTACT")]),_:1})]),K("div",kR,[K("p",null,"閲覧者数: "+At(De(e).noAccess),1)]),K("div",VR,[Pe(lR,{height:"100%",fill:De(ye).green0},null,8,["fill"]),K("p",null,At(De(Mc).appName)+" v"+At(De(Mc).version),1)])]),K("div",xR,[Pe(De(jp))])],64))}});const LR=We(MR,[["__scopeId","data-v-78996ba9"]]),UR="modulepreload",FR=function(t){return"/webscraper_tl/"+t},Cf={},Nf=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=FR(i),i in Cf)return;Cf[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const p=s[d];if(p.href===i&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":UR,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},BR={},$R={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},jR=K("g",null,[K("path",{d:`M449.803,62.197C408.443,20.807,353.85-0.037,299.646-0.006C245.428-0.037,190.85,20.807,149.49,62.197
		C108.1,103.557,87.24,158.15,87.303,212.338c-0.047,37.859,10.359,75.766,30.547,109.359L15.021,424.525
		c-20.016,20.016-20.016,52.453,0,72.469c20,20.016,52.453,20.016,72.453,0L190.318,394.15
		c33.578,20.203,71.5,30.594,109.328,30.547c54.203,0.047,108.797-20.797,150.156-62.188
		c41.375-41.359,62.234-95.938,62.188-150.172C512.053,158.15,491.178,103.557,449.803,62.197z M391.818,304.541
		c-25.547,25.531-58.672,38.125-92.172,38.188c-33.5-0.063-66.609-12.656-92.188-38.188c-25.531-25.578-38.125-58.688-38.188-92.203
		c0.063-33.484,12.656-66.609,38.188-92.172c25.578-25.531,58.688-38.125,92.188-38.188c33.5,0.063,66.625,12.656,92.188,38.188
		c25.531,25.563,38.125,58.688,38.188,92.172C429.959,245.854,417.365,278.963,391.818,304.541z`})],-1),HR=[jR];function qR(t,e){return ae(),Te("svg",$R,HR)}const GR=We(BR,[["render",qR]]),rg=Ge({__name:"SearchButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:ye.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ae(),bt(GR,{class:"searchButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}}),zR={},KR={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},WR=_v(`<g><path class="st0" d="M40.252,14.489C18.019,14.489,0,32.507,0,54.741c0,22.233,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,32.507,62.477,14.489,40.252,14.489z"></path><rect x="148.122" y="14.489" class="st0" width="363.878" height="80.504"></rect><path class="st0" d="M40.252,215.748C18.019,215.748,0,233.767,0,256c0,22.233,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,233.767,62.477,215.748,40.252,215.748z"></path><rect x="148.122" y="215.748" class="st0" width="363.878" height="80.504"></rect><path class="st0" d="M40.252,417.007C18.019,417.007,0,435.026,0,457.259c0,22.232,18.019,40.252,40.252,40.252
		c22.225,0,40.252-18.019,40.252-40.252C80.504,435.026,62.477,417.007,40.252,417.007z"></path><rect x="148.122" y="417.007" class="st0" width="363.878" height="80.504"></rect></g>`,1),QR=[WR];function XR(t,e){return ae(),Te("svg",KR,QR)}const YR=We(zR,[["render",XR]]),JR=Ge({__name:"MenuButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:ye.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ae(),bt(YR,{class:"menuButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),ZR={},eS={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},tS=K("g",null,[K("path",{class:"st0",d:`M512,255.996l-63.305-51.631l29.002-76.362l-80.633-13.07L383.993,34.3l-76.361,29.002L256,0.004
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
    c0.846-0.17,1.17,0.261,1.198,1.015L371.896,281.107z`})],-1),nS=[tS];function rS(t,e){return ae(),Te("svg",eS,nS)}const sS=We(ZR,[["render",rS]]),iS=Ge({__name:"NewsButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:ye.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ae(),bt(sS,{class:"newsButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}}),oS={},aS={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},cS=K("g",null,[K("path",{class:"st0",d:`M268.149,12.153c-7.179,0-14.309,0.309-21.374,0.926l4.905,56.561h0.016
		c5.392-0.462,10.882-0.698,16.453-0.698c51.745,0.016,98.326,20.886,132.272,54.782c33.896,33.954,54.783,80.534,54.783,132.28
		c0,51.745-20.887,98.326-54.783,132.271c-33.945,33.896-80.526,54.767-132.272,54.783c-51.746-0.016-98.326-20.886-132.272-54.783
		c-18.239-18.264-32.532-40.279-42.017-64.699l31.102-4.376L44.729,201.952l-17.93,54.052h-2.485c0,2.192,0.26,4.32,0.325,6.505
		L0,336.765l36.414-5.116c31.85,97.611,123.485,168.189,231.735,168.197C402.84,499.839,511.984,390.688,512,256.004
		C511.984,121.313,402.84,12.161,268.149,12.153z`}),K("path",{class:"st0",d:`M113.041,151.425c3.054-4.532,6.335-8.941,9.794-13.237l-44.144-35.707
		c-4.466,5.522-8.722,11.23-12.717,17.167l47.052,31.777H113.041z`}),K("path",{class:"st0",d:`M193.762,84.314c9.079-3.938,18.532-7.17,28.292-9.648L208.12,19.607c-12.766,3.232-25.11,7.472-36.966,12.62
		l22.609,52.078V84.314z`}),K("path",{class:"st0",d:`M167.353,98.412l-30.664-47.807c-10.996,7.041-21.374,14.95-31.054,23.615l37.86,42.318
		C150.933,109.887,158.908,103.812,167.353,98.412z`})],-1),lS=[cS];function uS(t,e){return ae(),Te("svg",aS,lS)}const hS=We(oS,[["render",uS]]);ye.gray2;const dS={},fS={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},pS=K("g",null,[K("path",{class:"st0",d:`M487.932,243.768L255.999,0L24.076,243.768c-21.787,22.886-20.874,59.088,2.013,80.865
		c22.887,21.787,59.099,20.896,80.886-2.013l91.818-96.506v228.691c0,31.59,25.617,57.195,57.205,57.195
		c31.6,0,57.217-25.606,57.217-57.195V226.114l91.829,96.506c21.777,22.909,57.978,23.8,80.875,2.013
		C508.806,302.855,509.698,266.654,487.932,243.768z`})],-1),mS=[pS];function _S(t,e){return ae(),Te("svg",fS,mS)}const gS=We(dS,[["render",_S]]),yS=Ge({__name:"UpArrowButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:ye.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ae(),bt(gS,{class:"upArrowButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),vS={},ES={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512"},TS=K("g",null,[K("path",{class:"st0",d:`M485.919,187.372c-22.905-21.787-59.106-20.893-80.883,2.011l-91.82,96.511V57.202
		C313.217,25.606,287.6,0,255.993,0c-31.585,0-57.202,25.606-57.202,57.202v228.692l-91.819-96.511
		c-21.776-22.904-58-23.798-80.883-2.011c-22.883,21.756-23.797,57.979-2.01,80.862L255.993,512l231.936-243.765
		C509.696,245.352,508.801,209.128,485.919,187.372z`})],-1),wS=[TS];function IS(t,e){return ae(),Te("svg",ES,wS)}const AS=We(vS,[["render",IS]]),bS=Ge({__name:"DownArrowButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:ye.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ae(),bt(AS,{class:"downArrowButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:t.iconColor},null,8,["width","height","fill"]))}}),RS={class:"buttons"},SS=Ge({__name:"TlTitleBlock",props:{tlSiteId:{type:String,required:!0}},setup(t){const e=t,n=Cr();function r(){n.upWeight(e.tlSiteId)}function s(){n.downWeight(e.tlSiteId)}const i=me(()=>({"--ttb-bg-color":ye.green1}));return(a,c)=>(ae(),Te("div",{class:"tlTitleBlock",style:rt(i.value)},[K("p",null,At(De(n).siteData[e.tlSiteId].weight+1)+" "+At(De(n).siteData[e.tlSiteId].name),1),K("div",RS,[$t(K("input",{type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=l=>De(n).siteData[e.tlSiteId].isShow=l)},null,512),[[Wv,De(n).siteData[e.tlSiteId].isShow]]),Pe(yS,{onClick:r,fill:"white",height:15}),Pe(bS,{onClick:s,fill:"white",height:15})])],4))}});const PS=We(SS,[["__scopeId","data-v-90f1fe85"]]),CS={name:"総務省",order:[{id:"micJoho",weight:0},{id:"micNews",weight:1},{id:"micRSS",weight:2},{id:"micDenpaKanri",weight:3}]},NS={name:"国交省",order:[{id:"mlitNewsRSS",weight:0},{id:"mlitPressRSS",weight:1},{id:"mlitAutomobile",weight:2},{id:"mlitPolicy",weight:3},{id:"mlitAviation",weight:4}]},DS={name:"経産省",order:[{id:"metiNewsRSS",weight:0},{id:"metiStatRSS",weight:1},{id:"metiShingikai",weight:2}]},OS={name:"デジ庁",order:[{id:"digitalConf",weight:0},{id:"digitalNews",weight:1},{id:"digitalRSS",weight:2}]},kS={name:"厚労省他",order:[{id:"mhlwRSS",weight:0},{id:"envCentralEarth",weight:1},{id:"caoPressRSS",weight:2}]},VS={mic:CS,mlit:NS,meti:DS,digital:OS,other:kS},sg=_a("appState",()=>{const t=yt(Mc.version),e=yt(!1),n=yt(!1),r=yt(!1);return{appVersion:t,useSearch:e,useMenu:n,useNews:r}},{persist:!0}),Ui=_a("wsDataStore",()=>{const e=yt({});function n(c){c in Object.keys(e.value)||(e.value[c]={scrapedData:[],dataTimestamp:-1,loadingStatus:!1,lastArticle:{}})}const r=async(c,l)=>{if(e.value[c].dataTimestamp==l){console.log("Not load data (id: ",c,"). The timestamp is the Newest.");return}console.log("Call loadTlData (id: ",c,"timestamp",e.value[c].dataTimestamp,l,")"),e.value[c].loadingStatus=!0,e.value[c].dataTimestamp=l.valueOf();try{const u=Xo(Wo(oi,c),Yo("epoch","desc"),lf(25)),d=await Jo(u);let p=[];d.forEach(_=>{p.push(_.data())}),e.value[c].scrapedData=p,e.value[c].loadingStatus=!1,e.value[c].lastArticle=d.docs[d.docs.length-1],console.log("Load DB: ",c)}catch(u){console.error("Error fetching documents: ",u),e.value[c].loadingStatus=!1}},s=async c=>{if(console.log("Call loadNextTlData function"),e.value[c].lastArticle=={}){console.log("Last ArticleData is undefined.");return}e.value[c].loadingStatus=!0;try{const l=Xo(Wo(oi,c),Yo("epoch","desc"),KA(e.value[c].lastArticle),lf(25)),u=await Jo(l);let d=[];u.forEach(p=>{d.push(p.data())}),e.value[c].scrapedData=[...e.value[c].scrapedData,...d],e.value[c].loadingStatus=!1,e.value[c].lastArticle=u.docs[u.docs.length-1],console.log("Load DB: ",c)}catch(l){console.error("Error fetching documents: ",l),e.value[c].loadingStatus=!1}e.value[c].loadingStatus=!1},i=me(()=>{let c=!1;for(const l of Object.values(e.value))c=c||l.loadingStatus;return c});function a(c){console.log("Call wsStore's init function",c);for(const l of c)l in e.value||(e.value[l]={scrapedData:[],loadingStatus:!1,dataTimestamp:-1,lastArticle:{}})}return{tlData:e,newTlData:n,loadTlData:r,allLoadingStatus:i,loadNextTlData:s,init:a}},{persist:!0}),xS=new Date,$a=_a("searchConditionStore",()=>{const t=yt([]);function e(c,l,u,d){t.value.push({word:c,year:l,month:u,day:d,color:0})}t.value.length==0&&s();function n(c,l){c>=0&&c<t.value.length&&(t.value[c]=l)}function r(c){c>=0&&c<t.value.length&&t.value.splice(c)}function s(){t.value.push({word:"",year:xS.getFullYear(),month:"-",day:"-",color:0})}function i(){t.value.length>1&&t.value.pop()}const a=me(()=>t.value.length);return{searchCondition:t,newCondition:e,setCondition:n,rmCondition:r,pushCondition:s,popCondition:i,size:a}},{persist:!0}),wu=t=>(gs("data-v-1b8412b2"),t=t(),ys(),t),MS={class:"searchArea"},LS={class:"serchCfgArea"},US=wu(()=>K("label",{for:"noWindow"},"窓数",-1)),FS=["value"],BS={class:"newsArea"},$S={class:"menuArea"},jS={class:"menuItems"},HS={class:"tlList"},qS=wu(()=>K("p",null,"並び替えプリセット",-1)),GS=["value","onClick"],zS=wu(()=>K("p",null,"初期化",-1)),KS=Ge({__name:"CfgTabBar",setup(t){const e=sg(),n=$a(),r=Cr(),s=Ui(),i=VS,a=me(()=>e.useSearch?ye.green1:ye.gray2),c=me(()=>e.useMenu?ye.green1:ye.gray2),l=me(()=>e.useNews?ye.green1:ye.gray2);me(()=>s.allLoadingStatus?ye.green1:ye.gray2);const u=yt(0);u.value=n.size;function d(){e.useSearch=!e.useSearch}function p(){if(u.value>n.size){const j=u.value-n.size;for(let H=0;H<j;H++)n.pushCondition()}else if(u.value<n.size){const j=n.size-u.value;for(let H=0;H<j;H++)n.popCondition()}}function _(){e.useNews=!e.useNews}function T(){e.useMenu=!e.useMenu}function C(j){r.setOrderSiteDataPreset(j)}function k(){window.confirm("データをリセットしますか？")&&r.resetSiteData()}const D=me(()=>({"--width":e.useMenu?"280px":"60px","--textColor":ye.green0}));return(j,H)=>(ae(),Te("div",{class:"cfgTabBar",style:rt(D.value)},[K("div",MS,[Pe(rg,{width:50,height:50,fill:a.value,onClick:d},null,8,["fill"]),$t(K("div",LS,[US,$t(K("select",{name:"noWindow","onUpdate:modelValue":H[0]||(H[0]=L=>u.value=L),onChange:p},[(ae(),Te(ze,null,zt(3,L=>K("option",{value:L},At(L),9,FS)),64))],544),[[Eo,u.value]])],512),[[Js,De(e).useSearch]])]),K("div",BS,[Pe(iS,{width:50,height:50,fill:l.value,onClick:_},null,8,["fill"])]),K("div",$S,[Pe(JR,{width:50,height:50,fill:c.value,onClick:T},null,8,["fill"]),$t(K("div",jS,[K("div",HS,[(ae(!0),Te(ze,null,zt(De(r).getSortedSiteDataId,L=>(ae(),bt(PS,{"tl-site-id":L},null,8,["tl-site-id"]))),256))]),qS,(ae(!0),Te(ze,null,zt(Object.keys(De(i)),L=>(ae(),Te("input",{type:"button",value:De(i)[L].name,onClick:V=>C(De(i)[L])},null,8,GS))),256)),zS,K("input",{type:"button",value:"reset",onClick:k})],512),[[Js,De(e).useMenu]])])],4))}});const WS=We(KS,[["__scopeId","data-v-1b8412b2"]]),QS=Ge({__name:"TLTitleBar",props:{tlTitle:{type:String,required:!0},isLoading:{type:Boolean,default:!1},style:{type:Object,default:{"--tl-background-color":ye.blue1}}},setup(t){const e=t;return(n,r)=>(ae(),Te("div",{class:"tlTitleBar",style:rt(t.style)},[K("p",null,At(e.tlTitle),1)],4))}});const Iu=We(QS,[["__scopeId","data-v-a547faeb"]]),XS=Ge({__name:"ItemTitleBar",props:{itemTitle:{type:String,required:!0}},setup(t){const e=me(()=>({"--it-background-color":ye.gray3}));return(n,r)=>(ae(),Te("div",{class:"itemTitleBar",style:rt(e.value)},[K("p",null,At(t.itemTitle),1)],4))}});const YS=We(XS,[["__scopeId","data-v-393697e8"]]),JS={class:"iStr"},ZS=Ge({__name:"ItemBox",props:{itemString:{type:String,required:!0},isNewer:{type:Boolean,default:!1}},setup(t){const e=t;return me(()=>({"--bg-color":ye.yellow3})),(n,r)=>(ae(),Te("div",{class:ps(t.isNewer?"itemBoxNew":"itemBox")},[K("p",JS,At(e.itemString),1)],2))}});const eP=We(ZS,[["__scopeId","data-v-69639804"]]),tP={class:"articleItem"},nP=["href"],rP=Ge({__name:"ArticleItemNoButton",props:{articleDescription:{type:String,required:!0},articleSource:{type:String,required:!0},articleUrl:{type:String,required:!0},articleEpoch:{type:Number,required:!0},tlTitle:{type:String,default:""},showBar:{type:Boolean,default:!1}},setup(t){const e=t,n=me(()=>{const i=new Date(0);return i.setSeconds(e.articleEpoch.valueOf()),i}),r=me(()=>{const i=new Date,a=new Date(0);a.setSeconds(e.articleEpoch.valueOf());const c=i.getDate()==a.getDate()&&i.getMonth()==a.getMonth()&&i.getFullYear()==a.getFullYear(),l=e.articleEpoch.valueOf()>=Math.floor(i.getTime()/1e3);return c||l}),s=me(()=>({"--bg-color":ye.yellow3}));return(i,a)=>(ae(),Te("div",tP,[e.showBar?(ae(),bt(YS,{key:0,"item-title":e.articleSource},null,8,["item-title"])):Il("",!0),Pe(eP,{"item-string":e.articleDescription,"is-newer":r.value,style:rt(s.value)},null,8,["item-string","is-newer","style"]),K("div",{class:ps(r.value?"itemFooterNew":"itemFooter"),style:rt(s.value)},[K("a",{href:e.articleUrl},"ページリンク",8,nP),K("p",null,At(n.value.getFullYear())+"年"+At(n.value.getMonth()+1)+"月"+At(n.value.getDate())+"日",1)],6)]))}});const Au=We(rP,[["__scopeId","data-v-3576e5b3"]]),ig=t=>(gs("data-v-b4c362fb"),t=t(),ys(),t),sP={class:"tlItemList"},iP={key:0,class:"loadingMsg"},oP=ig(()=>K("br",null,null,-1)),aP={class:"loadNext"},cP=["value"],lP=ig(()=>K("div",{class:"tlFooter"},null,-1)),uP=Ge({__name:"Timeline",props:{tlSiteId:{type:String,required:!0},tlTitle:{type:String,default:""},showBar:{type:Boolean,default:!1},lastEpoch:{type:Number,default:-1}},setup(t){const e=t,n=Cr(),r=Ui(),s=me(()=>e.tlSiteId in n.siteData?n.siteData[e.tlSiteId]:n.defaultSiteData),i=me(()=>e.tlTitle==""?s.value.name:e.tlTitle);function a(){r.loadNextTlData(e.tlSiteId)}const c=me(()=>r.tlData[e.tlSiteId].loadingStatus?"読み込み中":"さらに読み込み"),l=[ye.blue1,ye.red1,ye.yellow1,ye.green1,ye.gray1],u=me(()=>{let p=[];if(e.tlSiteId=="all")for(const _ in n.getSortedSiteDataIdFiltered)p=[...p,...r.tlData[_].scrapedData];else p=r.tlData[e.tlSiteId].scrapedData;return p.length>0&&(p=p.filter(_=>_.epoch>=e.lastEpoch)),p}),d=me(()=>({"--tl-background-color":l[s.value.color%l.length]}));return(p,_)=>(ae(),Te("div",{class:"timeline",style:rt(d.value)},[Pe(Iu,{"tl-title":i.value,style:rt(d.value)},null,8,["tl-title","style"]),K("div",sP,[De(r).tlData[e.tlSiteId].loadingStatus?(ae(),Te("p",iP,[qr("--読み込み中--"),oP,qr("読み込みが終わらない場合はリログしてください。")])):Il("",!0),(ae(!0),Te(ze,null,zt(u.value,T=>(ae(),bt(Au,{"article-source":T.org,"article-description":T.title,"article-url":T.url,"article-epoch":T.epoch,"tl-title":s.value.name,"show-bar":e.showBar},null,8,["article-source","article-description","article-url","article-epoch","tl-title","show-bar"]))),256)),K("div",aP,[K("input",{type:"button",value:c.value,onClick:a},null,8,cP)])]),lP],4))}});const hP=We(uP,[["__scopeId","data-v-b4c362fb"]]),dP=t=>(gs("data-v-67be5be9"),t=t(),ys(),t),fP={class:"tlItemList"},pP=dP(()=>K("div",{class:"tlFooter"},null,-1)),mP=Ge({__name:"NewsTimeline",props:{tlTitle:{type:String,default:""},showBar:{type:Boolean,default:!1},lastEpoch:{type:Number,default:-1}},setup(t){const e=t,n=Cr(),r=Ui(),s=n.defaultSiteData,i=me(()=>e.tlTitle==""?s.name:e.tlTitle),a=[ye.blue1,ye.red1,ye.yellow1,ye.green1,ye.gray1],c=me(()=>{let u=[];for(const d of n.getSortedSiteDataIdFiltered)u=[...u,...r.tlData[d].scrapedData];return u.length>0&&(u=u.filter(d=>d.epoch>=e.lastEpoch)),u}),l=me(()=>({"--tl-background-color":a[s.color%a.length]}));return(u,d)=>(ae(),Te("div",{class:"timeline",style:rt(l.value)},[Pe(Iu,{"tl-title":i.value,style:rt(l.value)},null,8,["tl-title","style"]),K("div",fP,[(ae(!0),Te(ze,null,zt(c.value,p=>(ae(),bt(Au,{"article-source":p.org,"article-description":p.title,"article-url":p.url,"article-epoch":p.epoch,"tl-title":De(s).name,"show-bar":e.showBar},null,8,["article-source","article-description","article-url","article-epoch","tl-title","show-bar"]))),256))]),pP],4))}});const _P=We(mP,[["__scopeId","data-v-67be5be9"]]),gP={},yP={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},vP=K("g",null,[K("polygon",{points:"511.998,70.682 441.315,0 256.002,185.313 70.685,0 0.002,70.692 185.316,256.006 0.002,441.318 70.69,512 256.002,326.688 441.315,512 511.998,441.318 326.684,256.006"})],-1),EP=[vP];function TP(t,e){return ae(),Te("svg",yP,EP)}const wP=We(gP,[["render",TP]]),IP=Ge({__name:"XButton",props:{width:{type:Number,default:20},height:{type:Number,default:20},iconColor:{type:String,default:ye.gray2}},emits:["click"],setup(t,{emit:e}){const n=t,r=e;return(s,i)=>(ae(),bt(wP,{class:"xButton",onClick:i[0]||(i[0]=a=>r("click")),width:n.width,height:n.height,fill:n.iconColor},null,8,["width","height","fill"]))}}),As=t=>(gs("data-v-013d163b"),t=t(),ys(),t),AP={class:"textArea"},bP=["onKeydown"],RP={class:"dateArea"},SP=As(()=>K("option",{key:"noSelct"},"-",-1)),PP=As(()=>K("p",null,"年",-1)),CP=As(()=>K("option",{key:"noSelct"},"-",-1)),NP=As(()=>K("p",null,"月",-1)),DP=As(()=>K("option",{key:"noSelct"},"-",-1)),OP=As(()=>K("p",null,"日",-1)),kP=Ge({__name:"SearchForm",props:{styles:{type:Object,default:{"--tl-background-color":ye.blue1}},scIdx:{type:Number,require:!0}},setup(t){const e=t,n=$a(),r=yt(n.searchCondition[e.scIdx]),s=[2023,2024],i=me(()=>r.value.month=="-"||r.value.year=="-"?0:new Date(r.value.year,r.value.month,0).getDate());function a(){n.setCondition(e.scIdx,r.value)}function c(){r.value.day="-",r.value.month="-"}return(l,u)=>(ae(),Te("div",{class:"searchForm",style:rt(e.styles)},[K("div",AP,[$t(K("input",{ty:"",pe:"search","onUpdate:modelValue":u[0]||(u[0]=d=>r.value.word=d),placeholder:"Enter text",size:"25",onKeydown:Xv(a,["enter"])},null,40,bP),[[Kv,r.value.word]]),Pe(rg,{onClick:a,height:12,width:12,"icon-color":"white"})]),K("div",RP,[$t(K("select",{name:"year",id:"selctMonth","onUpdate:modelValue":u[1]||(u[1]=d=>r.value.year=d)},[SP,(ae(),Te(ze,null,zt(s,d=>K("option",{key:d},At(d),1)),64))],512),[[Eo,r.value.year]]),PP,$t(K("select",{name:"month",id:"selctMonth","onUpdate:modelValue":u[2]||(u[2]=d=>r.value.month=d)},[CP,(ae(),Te(ze,null,zt(12,d=>K("option",{key:d},At(d),1)),64))],512),[[Eo,r.value.month]]),NP,$t(K("select",{name:"day",id:"selectDay","onUpdate:modelValue":u[3]||(u[3]=d=>r.value.day=d)},[DP,(ae(!0),Te(ze,null,zt(i.value,d=>(ae(),Te("option",{key:d},At(d),1))),128))],512),[[Eo,r.value.day]]),OP,Pe(IP,{onClick:c,height:12,width:12,"icon-color":"white"})])],4))}});const VP=We(kP,[["__scopeId","data-v-013d163b"]]),xP=t=>(gs("data-v-dddb5aee"),t=t(),ys(),t),MP={class:"tlItemList"},LP=xP(()=>K("div",{class:"tlFooter"},null,-1)),UP=Ge({__name:"SearchedTimeline",props:{searchCondIdx:{type:Number,default:0}},setup(t){const e=t,n=$a(),r=Cr(),s=Ui(),i=me(()=>"検索: "+n.searchCondition[e.searchCondIdx].word),a=me(()=>{let u=[];for(const p of r.getSortedSiteDataIdFiltered)u=[...u,...s.tlData[p].scrapedData];const d=n.searchCondition[e.searchCondIdx];if(u=u.filter(p=>p.title.indexOf(d.word)>=0),d.day!="-"&&d.month!="-"&&d.year!="-"){const p=new Date(d.year,d.month-1,d.day).getTime()/1e3,_=p+60*60*24;u=u.filter(T=>p<=T.epoch&&T.epoch<_)}return u.sort((p,_)=>_.epoch-p.epoch),u}),c=[ye.blue1,ye.red1,ye.yellow1,ye.green1,ye.gray1],l=me(()=>({"--tl-background-color":c[3]}));return(u,d)=>(ae(),Te("div",{class:"timeline",style:rt(l.value)},[Pe(Iu,{"tl-title":i.value,style:rt(l.value),"is-loading":!1},null,8,["tl-title","style"]),Pe(VP,{style:rt(l.value),"sc-idx":e.searchCondIdx},null,8,["style","sc-idx"]),K("div",MP,[(ae(!0),Te(ze,null,zt(a.value,p=>(ae(),bt(Au,{"article-source":p.org,"article-description":p.title,"article-url":p.url,"article-epoch":p.epoch,"tl-title":p.org,"show-bar":!0},null,8,["article-source","article-description","article-url","article-epoch","tl-title"]))),256))]),LP],4))}});const FP=We(UP,[["__scopeId","data-v-dddb5aee"]]),og=t=>(gs("data-v-f281bada"),t=t(),ys(),t),BP={class:"sideArea"},$P={class:"newsArea"},jP={class:"searchArea"},HP={class:"tlArea"},qP={key:0,class:"noDataState"},GP=og(()=>K("p",null,"何度かリログすると正しく表示されるようになります。",-1)),zP=og(()=>K("p",null,"お手数ですが、「ctrl-R」を何度か押してください。",-1)),KP=Ge({__name:"WSAppView",setup(t){const e=sg(),n=$a(),r=Cr(),s=Ui();let i=new Date;i=new Date(i.getFullYear(),i.getMonth(),i.getDate());const a=me(()=>Object.keys(r.siteData).length<2),c=me(()=>!e.useSearch),l=me(()=>({"--bg-color":ye.gray2}));return r.init().then(()=>{r.updateSiteData()}).then(()=>{s.init(r.getSortedSiteDataId)}).then(()=>{for(const u of r.getSortedSiteDataIdFiltered)s.loadTlData(u,r.dbTimestamp)}).catch(u=>{console.log(u)}),(u,d)=>(ae(),Te("div",{class:"wsapp",style:rt(l.value)},[K("div",BP,[K("div",{class:ps({cfgArea:!0,borderClass:c.value})},[Pe(WS)],2),$t(K("div",$P,[Pe(_P,{"tl-site-id":"all","tl-title":"新着情報","last-epoch":De(i).getTime()/1e3,"show-bar":!0},null,8,["last-epoch"])],512),[[Js,De(e).useNews]]),$t(K("div",jP,[(ae(!0),Te(ze,null,zt(De(n).size,p=>(ae(),bt(FP,{"search-cond-idx":p.valueOf()-1},null,8,["search-cond-idx"]))),256))],512),[[Js,De(e).useSearch]])]),K("div",HP,[a.value?(ae(),Te("div",qP,[GP,zP,$t(K("p",null,"現在読み込み中...",512),[[Js,De(r).isLoadingSiteData]])])):Il("",!0),(ae(!0),Te(ze,null,zt(De(r).getSortedSiteDataIdFiltered,p=>(ae(),bt(hP,{"tl-site-id":p},null,8,["tl-site-id"]))),256))])],4))}});const WP=We(KP,[["__scopeId","data-v-f281bada"]]),QP={class:"sample"},XP=Ge({__name:"SampleView",setup(t){return(e,n)=>(ae(),Te("div",QP))}});const YP=We(XP,[["__scopeId","data-v-a58c378e"]]),JP=m0({history:kE("/webscraper_tl/"),routes:[{path:"/",name:"app",component:WP},{path:"/sample",name:"sample",component:YP},{path:"/about",name:"about",component:()=>Nf(()=>import("./AboutView-5226f755.js"),["assets/AboutView-5226f755.js","assets/AboutView-08887120.css"])},{path:"/contact",name:"contact",component:()=>Nf(()=>import("./ContactView-3573c02c.js"),["assets/ContactView-3573c02c.js","assets/ContactView-65b7ef47.css"])}]}),bu=Zv(LR),ag=nE();ag.use(fE());bu.use(ag);bu.use(JP);bu.mount("#app");export{Mc as A,ze as F,K as a,De as b,Te as c,Ge as d,qr as e,_v as f,ae as o,zt as r,At as t,Cr as u};
