import{d as _,u as r,c as n,a as e,t,b as o,F as i,r as c,o as l,A as a,e as d}from"./index-413127df.js";const p={class:"about"},h={class:"aboutBoddy"},m=e("h2",null,"情報源一覧",-1),f=e("p",null,"以下のURLから情報収集しております。",-1),v=["href"],b=e("h2",null,"リリースノート",-1),g=e("ul",null,[e("li",null,"2024/04/08 v0.2"),e("li",null,"2024/04/29 v0.3")],-1),D=_({__name:"AboutView",setup(x){const u=r();return(y,A)=>(l(),n("div",p,[e("div",h,[e("h1",null,t(o(a).appName)+" v"+t(o(a).version),1),m,f,e("ul",null,[(l(!0),n(i,null,c(o(u).tlData,s=>(l(),n("li",null,[d(t(s.name)+": ",1),e("a",{href:s.url},t(s.url),9,v)]))),256))]),b,g])]))}});export{D as default};