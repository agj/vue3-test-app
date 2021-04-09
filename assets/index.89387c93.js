import{m as e,u as a,f as t,o as s,c as n,a as r,t as o,r as l,F as i,b as c,d as u,e as d,w as p,g as m,h as v}from"./vendor.252e2acf.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,r)=>{const o=new URL(e,s);if(self[a].moduleMap[o])return t(self[a].moduleMap[o]);const l=new Blob([`import * as m from '${o}';`,`${a}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),n(i)},onload(){t(self[a].moduleMap[o]),n(i)}});document.head.appendChild(i)})),self[a].moduleMap={}}}("assets/");const h=async e=>y("episode",b(e)),f=async e=>y("character",b(e)),y=async(e,a)=>{const t="number"==typeof a?a.toString():Array.isArray(a)?a.join(","):"",s="object"!=typeof a||Array.isArray(a)?"":new URLSearchParams(a).toString(),n=await fetch(`https://rickandmortyapi.com/api/${e}/${t}?${s}`);return await n.json()},b=e=>"object"!=typeof e||Array.isArray(e)?e:w(e),w=a=>e((e=>{var a;return null!=(a=null==e?void 0:e.toString())?a:""}),a),C=async e=>{var a,t;return null!=(t=null==(a=(await(async e=>y("location",b(e)))({name:e})).info)?void 0:a.count)?t:0},g=async()=>{let e=[],a=1;for(;;){const t=await h({page:a});if(e=e.concat(t.results),++a,!t.info.next)break}return e},L=e=>{var a;const t=null!=(a=e.match(/\/(\d+)$/))?a:[];return parseInt(t[1])},E=e=>{var a,t;const s=(null!=(a=e.match(/S(\d\d)/))?a:[])[1],n=(null!=(t=e.match(/E(\d\d)/))?t:[])[1];return{season:parseInt(s),episode:parseInt(n)}},j=(e,t)=>{const s=t.map(L),n=e.filter((({id:e})=>s.includes(e)));return a(n.map((e=>e.origin.name)))};var O={props:{data:{type:Object}}};const $={class:"card"},R={class:"header"},U={class:"letter"},_={class:"amount"},x={class:"content"};O.render=function(e,a,t,i,c,u){var d,p,m,v;return s(),n("section",$,[r("div",R,[r("div",U,o(null!=(p=null==(d=t.data)?void 0:d.letter)?p:"…"),1),r("div",_,o(null!=(v=null==(m=t.data)?void 0:m.amount)?v:"…"),1)]),r("div",x,[l(e.$slots,"default")])])};var A={props:{episode:{type:Object,required:!0}}};const M={class:"card"},D={class:"header"},S={class:"location-amount"},k={class:"episode-title"},F={class:"episode-number"},I={class:"content"},T={class:"locations"};A.render=function(e,a,t,l,u,d){var p,m,v,h,f;return s(),n("section",M,[r("div",D,[r("div",S,o(null==(p=t.episode)?void 0:p.origins.length),1),r("div",k,o(null==(m=t.episode)?void 0:m.title),1),r("div",F," T"+o(null==(v=t.episode)?void 0:v.number.season)+" E"+o(null==(h=t.episode)?void 0:h.number.episode),1)]),r("div",I,[r("ul",T,[(s(!0),n(i,null,c(null==(f=t.episode)?void 0:f.origins,(e=>(s(),n("li",null,o(e),1)))),256))])])])};var q={components:{LetterCount:O,EpCharOrigins:A},setup(){const e=u(),s=u(),n=u(),r=u(),o=Date.now(),l=()=>{e.value&&s.value&&n.value&&(r.value=Date.now()-o)};C("L").then((a=>{e.value={letter:"L",amount:a},l()})),(async e=>{var a,t;return null!=(t=null==(a=(await h({name:e})).info)?void 0:a.count)?t:0})("E").then((e=>{s.value={letter:"E",amount:e},l()})),(async e=>{var a,t;return null!=(t=null==(a=(await f({name:e})).info)?void 0:a.count)?t:0})("C").then((e=>{n.value={letter:"C",amount:e},l()}));const i=u(),c=u(),d=Date.now();return(async()=>{const e=await g(),s=a(t(e.map((e=>e.characters.map(L))))),n=await f(s);return e.map((e=>({title:e.name,number:E(e.episode),origins:j(n,e.characters)})))})().then((e=>{i.value=e,c.value=Date.now()-d})),{locationsLetterCount:e,episodesLetterCount:s,charactersLetterCount:n,letterCountElapsed:r,epCharOrigins:i,epCharOriginsElapsed:c}}};const P={class:"container"},B=r("h1",null,[m("Hechos inútiles sobre "),r("b",null,"Rick and Morty")],-1),H={class:"letter-count box"},z=r("div",{class:"description"}," ¿Cuántas veces se repiten letras en nombres? ",-1),G={class:"items rows-3"},J=m(" veces en nombres de lugares "),K=m(" veces en títulos de capítulos "),N=m(" veces en nombres de personajes "),Q={class:"extra"},V=m(" Tiempo de respuesta: "),W={class:"elapsed"},X={class:"ep-char-origins box"},Y=r("div",{class:"description"}," ¿De dónde vienen los personajes que aparecen en cada capítulo? ",-1),Z={class:"items rows-4"},ee={class:"extra"},ae=m(" Tiempo de respuesta: "),te={class:"elapsed"};q.render=function(e,a,t,l,u,m){const v=d("LetterCount"),h=d("EpCharOrigins");return s(),n("article",P,[B,r("section",H,[z,r("div",G,[r(v,{class:"in-locations",data:l.locationsLetterCount},{default:p((()=>[J])),_:1},8,["data"]),r(v,{class:"in-episodes",data:l.episodesLetterCount},{default:p((()=>[K])),_:1},8,["data"]),r(v,{class:"in-characters",data:l.charactersLetterCount},{default:p((()=>[N])),_:1},8,["data"])]),r("div",Q,[V,r("span",W,o(l.letterCountElapsed?l.letterCountElapsed+" ms":"…"),1)])]),r("section",X,[Y,r("div",Z,[(s(!0),n(i,null,c(l.epCharOrigins,(e=>(s(),n(h,{episode:e},null,8,["episode"])))),256))]),r("div",ee,[ae,r("span",te,o(l.epCharOriginsElapsed?l.epCharOriginsElapsed+" ms":"…"),1)])])])},v(q).mount("#app");