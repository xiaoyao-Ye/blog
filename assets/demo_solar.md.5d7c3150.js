import{_ as X,j as Z,h as F,o as U,c as D,k as n,n as A,a as E,U as G,p as K,m as Q,E as Y,J as H,w as tt}from"./chunks/framework.97dce334.js";const d=m=>(K("data-v-4e75f24f"),m=m(),Q(),m),nt=G('<div class="taiyangxi" data-v-4e75f24f><div class="xingxing" data-v-4e75f24f></div><div class="taiyang" data-v-4e75f24f></div><div class="shuixing-guidao" data-v-4e75f24f></div><div class="shuixing-xitong" data-v-4e75f24f><div class="shuixing" data-v-4e75f24f></div></div><div class="jinxing-guidao" data-v-4e75f24f></div><div class="jinxing-xitong" data-v-4e75f24f><div class="jinxing" data-v-4e75f24f></div></div><div class="diqiu-guidao" data-v-4e75f24f></div><div class="diqiu-xitong" data-v-4e75f24f><div class="diqiu" data-v-4e75f24f></div><div class="yueliang" data-v-4e75f24f></div></div><div class="huoxing-guidao" data-v-4e75f24f></div><div class="huoxing-xitong" data-v-4e75f24f><div class="huoxing" data-v-4e75f24f></div></div><div class="xiaoxingxingdai" data-v-4e75f24f></div><div class="xiaoxingxing" data-v-4e75f24f></div><div class="muxing-guidao" data-v-4e75f24f></div><div class="muxing-xitong" data-v-4e75f24f><div class="muxing" data-v-4e75f24f></div></div><div class="tuxing-guidao" data-v-4e75f24f></div><div class="tuxing-xitong" data-v-4e75f24f><div class="tuxing" data-v-4e75f24f></div><div class="ring" data-v-4e75f24f></div></div><div class="tianwangxing-guidao" data-v-4e75f24f></div><div class="tianwangxing-xitong" data-v-4e75f24f><div class="tianwangxing" data-v-4e75f24f></div></div><div class="haiwangxing-guidao" data-v-4e75f24f></div><div class="haiwangxing-xitong" data-v-4e75f24f><div class="haiwangxing" data-v-4e75f24f></div></div></div>',1),at=d(()=>n("svg",{t:"1581348631156",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1959",width:"32",height:"32"},[n("path",{d:"M1021.28261 737.254254 512.697383 228.665956 4.114203 737.254254 65.145208 798.285259 512.697383 350.727966 960.251605 798.280142Z","p-id":"1960",fill:"#ffffff"})],-1)),it=[at],ot=d(()=>n("td",{class:"zh"}," 背景颜色 ",-1)),st=d(()=>n("td",{class:"en",style:{display:"none"}}," Background Color ",-1)),et=d(()=>n("td",{class:"zh"}," 小行星数量 ",-1)),dt=d(()=>n("td",{class:"en",style:{display:"none"}}," Asteroid Number ",-1)),lt=d(()=>n("td",{class:"zh"}," 星球随机位 ",-1)),ct=d(()=>n("td",{class:"en",style:{display:"none"}}," Random Position ",-1)),gt={__name:"Solar",setup(m){Z(()=>{l(2400),p(240),f()}),window.onresize=function(){p(240)};function l(o){let t="";for(let i=o;i>=0;i--){const a=Math.round(Math.random()*360)-180,s=Math.round(Math.random()*360)-180,e=Math.random()*.5;a*a+s*s<=160*160&&(t+=`${a}px ${s}px 0 -139px rgba(255,255,255,${e}),`)}t=t.substr(0,t.length-1),document.getElementsByClassName("xiaoxingxing")[0].style.boxShadow=t}function p(o){const t=document.body.clientHeight,i=document.body.clientWidth;let a="";for(let s=o;s>=0;s--){const e=Math.round(Math.random()*i),v=Math.round(Math.random()*t),g=Math.round(Math.random()*.52),r=Math.random()*.5;for(let x=0;x<2;x++)a+=`${e}px ${v}px 0 ${g}px rgba(255,255,255,${r}),`,a+=`${e}px ${t+v}px 0 ${g}px rgba(255,255,255,${r}),`}a=a+a.substr(0,a.length-1),document.getElementsByClassName("xingxing")[0].style.boxShadow=a}function f(){const o=Math.random()*45,t=(Math.random()>.5?1:-1)*o-4/2,i=(Math.random()>.5?1:-1)*Math.sqrt(45*45-o*o)-4/2,a=document.getElementsByClassName("shuixing-xitong")[0].style;a.marginTop=`${t+1/2}px`,a.marginLeft=`${i+1/2}px`,a.transformOrigin=`${-i}px ${-t}px`;const s=Math.random()*60,e=(Math.random()>.5?1:-1)*s-8/2,v=(Math.random()>.5?1:-1)*Math.sqrt(60*60-s*s)-8/2,g=document.getElementsByClassName("jinxing-xitong")[0].style;g.marginTop=`${e}px`,g.marginLeft=`${v}px`,g.transformOrigin=`${-v}px ${-e}px`;const r=Math.random()*90,x=(Math.random()>.5?1:-1)*r-16/2,T=(Math.random()>.5?1:-1)*Math.sqrt(90*90-r*r)-16/2,h=document.getElementsByClassName("diqiu-xitong")[0].style;h.marginTop=`${x}px`,h.marginLeft=`${T}px`,h.transformOrigin=`${-T}px ${-x}px`;const y=Math.random()*120,S=(Math.random()>.5?1:-1)*y-16/2,q=(Math.random()>.5?1:-1)*Math.sqrt(120*120-y*y)-16/2,_=document.getElementsByClassName("huoxing-xitong")[0].style;_.marginTop=`${S}px`,_.marginLeft=`${q}px`,_.transformOrigin=`${-q}px ${-S}px`;const $=Math.random()*190,O=(Math.random()>.5?1:-1)*$-40/2,L=(Math.random()>.5?1:-1)*Math.sqrt(190*190-$*$)-40/2,M=document.getElementsByClassName("muxing-xitong")[0].style;M.marginTop=`${O}px`,M.marginLeft=`${L}px`,M.transformOrigin=`${-L}px ${-O}px`;const C=Math.random()*240,j=(Math.random()>.5?1:-1)*C-24/2,z=(Math.random()>.5?1:-1)*Math.sqrt(240*240-C*C)-24/2,w=document.getElementsByClassName("tuxing-xitong")[0].style;w.marginTop=`${j}px`,w.marginLeft=`${z}px`,w.transformOrigin=`${-z}px ${-j}px`;const k=Math.random()*290,I=(Math.random()>.5?1:-1)*k-20/2,P=(Math.random()>.5?1:-1)*Math.sqrt(290*290-k*k)-20/2,N=document.getElementsByClassName("tianwangxing-xitong")[0].style;N.marginTop=`${I}px`,N.marginLeft=`${P}px`,N.transformOrigin=`${-P}px ${-I}px`;const b=Math.random()*340,V=(Math.random()>.5?1:-1)*b-18/2,R=(Math.random()>.5?1:-1)*Math.sqrt(340*340-b*b)-18/2,B=document.getElementsByClassName("haiwangxing-xitong")[0].style;B.marginTop=`${V}px`,B.marginLeft=`${R}px`,B.transformOrigin=`${-R}px ${-V}px`}function c(o){const t=window.getComputedStyle(o.target).backgroundColor;document.getElementsByClassName("taiyangxi")[0].style.backgroundColor=t,document.getElementsByTagName("body")[0].style.backgroundColor=t}function J(o){const t=document.getElementsByClassName("zh"),i=document.getElementsByClassName("en");if(o.value==="EN"){o.value="中";for(let a=0;a<t.length;a++)t[a].style.display="none",i[a].style.display="table-cell"}else{o.value="EN";for(let a=0;a<t.length;a++)t[a].style.display="table-cell",i[a].style.display="none"}}const u=F(!1);function W(){u.value=!u.value}return(o,t)=>(U(),D("div",null,[nt,n("div",{id:"optionBtn",class:A([u.value&&"optionBtnHide"]),onClick:W},it,2),n("div",{id:"option",class:A([u.value&&"optionHide"])},[n("input",{id:"language",type:"button",value:"EN",onClick:t[0]||(t[0]=i=>J(this))}),n("table",null,[n("tr",null,[ot,st,n("td",{id:"cc"},[n("div",{onClick:c}),n("div",{onClick:c}),n("div",{onClick:c}),n("div",{onClick:c}),n("div",{onClick:c}),n("div",{onClick:c})])]),n("tr",null,[et,dt,n("td",null,[n("button",{onClick:t[1]||(t[1]=i=>l(0))}," 0 "),E(" | "),n("button",{onClick:t[2]||(t[2]=i=>l(1200))}," 100 "),E(" | "),n("button",{onClick:t[3]||(t[3]=i=>l(2400))}," 200 "),E(" | "),n("button",{onClick:t[4]||(t[4]=i=>l(3600))}," 400 ")])]),n("tr",null,[lt,ct,n("td",null,[n("button",{onClick:t[5]||(t[5]=i=>f())}," click ")])])])],2)]))}},rt=X(gt,[["__scopeId","data-v-4e75f24f"]]),xt=JSON.parse('{"title":"case","titleTemplate":"太阳系","description":"一个等比例缩放的太阳系运行图","frontmatter":{"layout":"page","aside":false,"editLink":false,"title":"case","titleTemplate":"太阳系","description":"一个等比例缩放的太阳系运行图"},"headers":[],"relativePath":"demo/solar.md","filePath":"demo/solar.md","lastUpdated":1713497300000}'),mt={name:"demo/solar.md"},ft=Object.assign(mt,{setup(m){return(l,p)=>{const f=Y("ClientOnly");return U(),D("div",null,[H(f,null,{default:tt(()=>[H(rt)]),_:1})])}}});export{xt as __pageData,ft as default};