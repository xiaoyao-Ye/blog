import{d as l,h as D,o as i,c as w,R as H,_ as x,u as A,l as P,b as y,L as v,a5 as d,z as $,V as p,a6 as M,a7 as R,a8 as z,a9 as E,aa as L,ab as S,ac as Y,ad as O,ae as B,af as I,Y as j,j as G,A as T,ag as V,ah as F,ai as N}from"./chunks/framework.97dce334.js";import{t as b}from"./chunks/theme.3008caeb.js";const Q=l({__name:"BG",setup(e){const a=D("");return(n=>{let c=document.body.clientHeight,k=document.body.clientWidth,s="";const u=["--vp-c-brand","--vp-c-brand-light","--vp-c-brand-lighter","--vp-c-brand-dark","--vp-c-brand-darker","--vp-c-brand-next"];for(let m=n;m>=0;m--){let f=Math.round(Math.random()*k),_=Math.round(Math.random()*c),h=Math.round(Math.random()*.52);const g=Math.floor(Math.random()*6);s+=`${f}px ${_}px 0 ${h}px var(${u[g]}),`,s+=`${f}px ${c+_}px 0 ${h}px var(${u[g]}),`}s=s.slice(0,s.length-1),a.value=s})(240),(n,c)=>(i(),w("div",{class:"stars",style:H(`box-shadow: ${a.value}`)},null,4))}});const W=x(Q,[["__scopeId","data-v-7fd72279"]]),U={class:"comment"},q=l({__name:"Comment",setup(e){const{isDark:a}=A();return(t,n)=>(i(),w("div",U,[P(a)?(i(),y(v("script"),{key:0,src:"https://giscus.app/client.js","data-repo":"xiaoyao-Ye/blog","data-repo-id":"R_kgDOHzY7HA","data-category":"General","data-category-id":"DIC_kwDOHzY7HM4CYAQ9","data-mapping":"title","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"bottom","data-theme":"dark","data-lang":"zh-CN","data-loading":"lazy",crossorigin:"anonymous",async:""})):(i(),y(v("script"),{key:1,src:"https://giscus.app/client.js","data-repo":"xiaoyao-Ye/blog","data-repo-id":"R_kgDOHzY7HA","data-category":"General","data-category-id":"DIC_kwDOHzY7HM4CYAQ9","data-mapping":"title","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"bottom","data-theme":"light","data-lang":"zh-CN","data-loading":"lazy",crossorigin:"anonymous",async:""}))]))}});const J=x(q,[["__scopeId","data-v-7f80542c"]]);let o;const K={...b,Layout:()=>d(b.Layout,null,{"home-features-after":()=>d(W),"doc-after":()=>d(J)}),enhanceApp({router:e}){typeof window>"u"||(window.localStorage.setItem("vitepress-theme-appearance","dark"),$(()=>e.route.data.relativePath,()=>X(location.pathname==="/"),{immediate:!0}))}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function X(e){if(e){if(o)return;o=document.createElement("style"),o.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(o)}else{if(!o)return;o.remove(),o=void 0}}function C(e){if(e.extends){const a=C(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const r=C(K),Z=l({name:"VitePressApp",setup(){const{site:e}=A();return G(()=>{T(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),V(),F(),N(),r.setup&&r.setup(),()=>d(r.Layout)}});async function ee(){const e=te(),a=ae();a.provide(R,e);const t=z(e.route);return a.provide(E,t),a.component("Content",L),a.component("ClientOnly",S),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),r.enhanceApp&&await r.enhanceApp({app:a,router:e,siteData:Y}),{app:a,router:e,data:t}}function ae(){return O(Z)}function te(){let e=p,a;return B(t=>{let n=I(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),p&&(e=!1),j(()=>import(n),[])):null},r.NotFound)}p&&ee().then(({app:e,router:a,data:t})=>{a.go().then(()=>{M(a.route,t.site),e.mount("#app")})});export{ee as createApp};
