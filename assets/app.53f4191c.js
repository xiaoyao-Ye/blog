import{d as l,h as H,o as d,c as x,R as P,_ as A,u as C,l as $,b as y,L as v,a5 as i,z as M,V as p,a6 as R,a7 as z,a8 as E,a9 as L,aa as S,ab as Y,ac as O,ad as B,ae as I,af as j,Y as G,j as T,A as V,ag as F,ah as N,ai as Q}from"./chunks/framework.97dce334.js";import{t as b}from"./chunks/theme.3008caeb.js";const W=l({__name:"BG",setup(e){const a=H("");return(n=>{let c=document.body.clientHeight,D=document.body.clientWidth,s="";const u=["--vp-c-brand","--vp-c-brand-light","--vp-c-brand-lighter","--vp-c-brand-dark","--vp-c-brand-darker","--vp-c-brand-next"];for(let m=n;m>=0;m--){let f=Math.round(Math.random()*D),_=Math.round(Math.random()*c),h=Math.round(Math.random()*.52);const g=Math.floor(Math.random()*6);s+=`${f}px ${_}px 0 ${h}px var(${u[g]}),`,s+=`${f}px ${c+_}px 0 ${h}px var(${u[g]}),`}s=s.slice(0,s.length-1),a.value=s})(240),(n,c)=>(d(),x("div",{class:"stars",style:P(`box-shadow: ${a.value}`)},null,4))}});const w=A(W,[["__scopeId","data-v-7fd72279"]]),U={class:"comment"},q=l({__name:"Comment",setup(e){const{isDark:a}=C();return(t,n)=>(d(),x("div",U,[$(a)?(d(),y(v("script"),{key:0,src:"https://giscus.app/client.js","data-repo":"xiaoyao-Ye/blog","data-repo-id":"R_kgDOHzY7HA","data-category":"General","data-category-id":"DIC_kwDOHzY7HM4CYAQ9","data-mapping":"title","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"bottom","data-theme":"dark","data-lang":"zh-CN","data-loading":"lazy",crossorigin:"anonymous",async:""})):(d(),y(v("script"),{key:1,src:"https://giscus.app/client.js","data-repo":"xiaoyao-Ye/blog","data-repo-id":"R_kgDOHzY7HA","data-category":"General","data-category-id":"DIC_kwDOHzY7HM4CYAQ9","data-mapping":"title","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"bottom","data-theme":"light","data-lang":"zh-CN","data-loading":"lazy",crossorigin:"anonymous",async:""}))]))}});const J=A(q,[["__scopeId","data-v-7f80542c"]]);let o;const K={...b,Layout:()=>i(b.Layout,null,{"home-features-after":()=>i(w),"doc-before":()=>i(w),"doc-after":()=>i(J)}),enhanceApp({router:e}){typeof window>"u"||(window.localStorage.setItem("vitepress-theme-appearance","dark"),M(()=>e.route.data.relativePath,()=>X(location.pathname==="/"),{immediate:!0}))}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function X(e){if(e){if(o)return;o=document.createElement("style"),o.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(o)}else{if(!o)return;o.remove(),o=void 0}}function k(e){if(e.extends){const a=k(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const r=k(K),Z=l({name:"VitePressApp",setup(){const{site:e}=C();return T(()=>{V(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),F(),N(),Q(),r.setup&&r.setup(),()=>i(r.Layout)}});async function ee(){const e=te(),a=ae();a.provide(z,e);const t=E(e.route);return a.provide(L,t),a.component("Content",S),a.component("ClientOnly",Y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),r.enhanceApp&&await r.enhanceApp({app:a,router:e,siteData:O}),{app:a,router:e,data:t}}function ae(){return B(Z)}function te(){let e=p,a;return I(t=>{let n=j(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),p&&(e=!1),G(()=>import(n),[])):null},r.NotFound)}p&&ee().then(({app:e,router:a,data:t})=>{a.go().then(()=>{R(a.route,t.site),e.mount("#app")})});export{ee as createApp};
