import{z as c,V as s,a5 as u,a6 as p,a7 as d,a8 as l,a9 as f,aa as m,ab as h,ac as w,ad as g,ae as v,Y as A,d as y,u as b,j as P,A as C,af as E,ag as L,ah as R,ai as S}from"./chunks/framework.655210d0.js";import{t as _}from"./chunks/theme.56d9f588.js";let n;const T={..._,enhanceApp({router:e}){typeof window>"u"||(window.localStorage.setItem("vitepress-theme-appearance","dark"),c(()=>e.route.data.relativePath,()=>x(location.pathname==="/"),{immediate:!0}))}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function x(e){if(e){if(n)return;n=document.createElement("style"),n.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(n)}else{if(!n)return;n.remove(),n=void 0}}function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const r=i(T),D=y({name:"VitePressApp",setup(){const{site:e}=b();return P(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),E(),L(),R(),r.setup&&r.setup(),()=>S(r.Layout)}});async function j(){const e=V(),t=O();t.provide(p,e);const a=d(e.route);return t.provide(l,a),t.component("Content",f),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),r.enhanceApp&&await r.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function O(){return w(D)}function V(){let e=s,t;return g(a=>{let o=v(a);return o?(e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),A(()=>import(o),[])):null},r.NotFound)}s&&j().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{j as createApp};
