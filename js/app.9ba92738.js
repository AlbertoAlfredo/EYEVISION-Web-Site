(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0982":function(t,e,r){t.exports=r.p+"img/CaixaHolografica.3ac157aa.jpg"},"2b52":function(t,e,r){"use strict";r("cdd2")},"38ce":function(t,e,r){t.exports=r.p+"img/robo.5118acef.jpg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background},attrs:{id:"app"}},[r("Header"),r("v-main",[r("v-container",[r("router-view")],1)],1),r("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("nav",[r("v-app-bar",{attrs:{absolute:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7",color:"third",id:"navigation"}},[r("div",{staticClass:"d-flex justify-start",attrs:{id:"logo"}},[r("h1",[t._v("EYEVISION")])]),r("div",{staticClass:"d-flex justify-end links"},[r("router-link",{attrs:{to:"/"}},[r("v-btn",{staticClass:"botao",attrs:{color:"third",depressed:"",elevation:"0",tile:""}},[t._v("Início")])],1),r("router-link",{attrs:{to:"Promotor"}},[r("v-btn",{staticClass:"botao",attrs:{color:"background",depressed:"",elevation:"0",tile:""}},[t._v("Promotor ")])],1),r("router-link",{attrs:{to:"Caixa"}},[r("v-btn",{staticClass:"botao",attrs:{color:"background",depressed:"",elevation:"0",tile:""}},[t._v("Caixa")])],1),r("router-link",{attrs:{to:"Blog"}},[r("v-btn",{staticClass:"botao",attrs:{color:"third",depressed:"",elevation:"0",tile:""}},[t._v("Blog")])],1),r("router-link",{attrs:{to:"Sobre"}},[r("v-btn",{staticClass:"botao",attrs:{color:"third",depressed:"",elevation:"0",tile:""}},[t._v("Sobre Nós")])],1),r("router-link",{attrs:{to:"Contato"}},[r("v-btn",{staticClass:"botao",attrs:{color:"third",depressed:"",elevation:"0",tile:""}},[t._v("Contato")])],1)],1)])],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:r("d22d"),alt:""}})])}],c={},l=c,u=(r("2b52"),r("2877")),f=r("6544"),p=r.n(f),v=r("40dc"),d=r("8336"),m=Object(u["a"])(l,i,s,!1,null,"0522be83",null),h=m.exports;p()(m,{VAppBar:v["a"],VBtn:d["a"]});var b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",[r("h3",[t._v("Footer")])])},_=[],g={},C=g,y=r("553a"),x=Object(u["a"])(C,b,_,!1,null,"69b51320",null),j=x.exports;p()(x,{VFooter:y["a"]});var k={components:{Header:h,Footer:j},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}},O=k,E=(r("034f"),r("7496")),$=r("a523"),w=r("f6c4"),P=Object(u["a"])(O,o,a,!1,null,null,null),S=P.exports;p()(P,{VApp:E["a"],VContainer:$["a"],VMain:w["a"]});var F=r("f309");n["a"].use(F["a"]);var V=new F["a"]({theme:{dark:!0,themes:{dark:{primary:"#4f4f4f",secondary:"#00C3A0",third:"#16355F",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",background:"#144989"}}}}),B=r("8c4f"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("hr"),n("v-container",{staticClass:"justify-end"},[n("div",{staticClass:"grid justify-end"},[n("div",{},[n("img",{staticClass:"imagem",attrs:{src:r("38ce")}})]),n("hr"),n("div",{staticClass:"texto justify-end"},[n("h2",[t._v("Promotor Holográfico Inteligente")]),n("p",[t._v("Solução de Projeção Holográfica Inteligente que interage com o público por meio de Inteligência Artificial.")]),n("router-link",{attrs:{to:"Promotor"}},[n("v-btn",{attrs:{color:"secondary"}},[t._v("Saiba Mais")])],1)],1)]),n("hr",{staticStyle:{height:"200px"}}),n("div",{staticClass:"grid justify-start"},[n("div",{staticClass:"texto justify-end"},[n("h2",[t._v("Caixa Holográfica")]),n("p",[t._v("Projeção Holográfica ideal para pequenos espaços.")]),n("router-link",{attrs:{to:"Caixa"}},[n("v-btn",{attrs:{color:"secondary"}},[t._v("Saiba Mais")])],1)],1),n("hr"),n("div",{},[n("img",{staticClass:"imagem",attrs:{src:r("0982")}})])]),n("section",[n("h2",[t._v("Quem Confia em Nós:")])])])],1)},M=[],I={},A=I,N=(r("e4ae"),Object(u["a"])(A,H,M,!1,null,"1826ea95",null)),q=N.exports;p()(N,{VBtn:d["a"],VContainer:$["a"]});var T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h3",[t._v("Promotor")])])}],Q={},Y=Q,z=Object(u["a"])(Y,T,J,!1,null,"5c21679e",null),D=z.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h3",[t._v("Caixa")])])}],L={},R=L,U=Object(u["a"])(R,G,K,!1,null,"2e852054",null),W=U.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h3",[t._v("Sobre Nós")])])}],tt={},et=tt,rt=Object(u["a"])(et,X,Z,!1,null,"ea660478",null),nt=rt.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h3",[t._v("Contato")])])}],it={},st=it,ct=Object(u["a"])(st,ot,at,!1,null,"158e0596",null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h3",[t._v("Em Construção")])])}],pt={},vt=pt,dt=Object(u["a"])(vt,ut,ft,!1,null,"7fb7e675",null),mt=dt.exports;n["a"].use(B["a"]);var ht=[{path:"*",name:"Home",component:q},{path:"/Promotor",name:"Promotor",component:D},{path:"/Caixa",name:"Caixa",component:W},{path:"/Sobre",name:"Sobre",component:nt},{path:"/Contato",name:"Contato",component:lt},{path:"/Blog",name:"Blog",component:mt}],bt=new B["a"]({mode:"history",base:"",routes:ht}),_t=bt,gt=r("2f62");n["a"].use(gt["a"]);var Ct=new gt["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({vuetify:V,router:_t,store:Ct,render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,r){},cdd2:function(t,e,r){},d22d:function(t,e,r){t.exports=r.p+"img/banner.10d2bc67.png"},e4ae:function(t,e,r){"use strict";r("f884")},f884:function(t,e,r){}});
//# sourceMappingURL=app.9ba92738.js.map