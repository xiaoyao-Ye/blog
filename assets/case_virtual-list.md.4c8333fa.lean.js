import{d as E,r as y,i as h,j as D,w as v,_ as f,o as t,c,e as u,k as C,F as B,l as _,t as w,h as I,a as T}from"./app.481da17f.js";const b=E({name:"VirtualScroll",setup(){const n=y(null),a=y(0),r=y(0),o=h([]),F=D(()=>{const s=Math.floor(a.value/e),l=Math.min(s+m+i,o.length);return o.slice(s,l)}),A=D(()=>F.value.reduce((s,l)=>s+l.height,0)),p=D(()=>a.value?a.value-i*e:0),e=30,m=10,i=5,d=()=>{const s=[];for(let l=0;l<1e3;l++)s.push({text:`Item ${l}`,height:Math.floor(Math.random()*50)+30});o.length=0,o.push(...s)},g=()=>{var s;a.value=((s=n.value)==null?void 0:s.scrollTop)||0};return v(n,s=>{s&&(r.value=s.clientHeight,d())}),{wrapper:n,visibleItems:F,totalHeight:A,offsetY:p,onScroll:g}}});function q(n,a,r,o,F,A){return t(),c("div",{ref:"wrapper",class:"wrapper",onScroll:a[0]||(a[0]=(...p)=>n.onScroll&&n.onScroll(...p))},[u("div",{class:"placeholder",style:C({height:n.totalHeight+"px"})},null,4),u("div",{class:"content",style:C({transform:"translateY("+n.offsetY+"px)"})},[(t(!0),c(B,null,_(n.visibleItems,(p,e)=>(t(),c("div",{key:e,class:"item",style:C({height:p.height+"px"})},w(p.text),5))),128))],4)],544)}const S=f(b,[["render",q],["__scopeId","data-v-d68715b1"]]),x=T("",2),V=JSON.parse('{"title":"case","titleTemplate":"\u865A\u62DF\u5217\u8868","description":"\u4E00\u4E2A\u4E0D\u5B9A\u9AD8\u7684\u865A\u62DF\u5217\u8868\u793A\u4F8B, \u7531 ChatGPT \u7F16\u5199","frontmatter":{"layout":"page","aside":false,"editLink":false,"title":"case","titleTemplate":"\u865A\u62DF\u5217\u8868","description":"\u4E00\u4E2A\u4E0D\u5B9A\u9AD8\u7684\u865A\u62DF\u5217\u8868\u793A\u4F8B, \u7531 ChatGPT \u7F16\u5199"},"headers":[],"relativePath":"case/virtual-list.md","lastUpdated":1679885872000}'),H={name:"case/virtual-list.md"},Y=Object.assign(H,{setup(n){return(a,r)=>(t(),c("div",null,[I(S),x]))}});export{V as __pageData,Y as default};