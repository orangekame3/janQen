(function(t){function a(a){for(var i,o,s=a[0],u=a[1],l=a[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(a);while(d.length)d.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],i=!0,s=1;s<e.length;s++){var u=e[s];0!==r[u]&&(i=!1)}i&&(n.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},r={app:0},n=[];function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var c=u;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Snow"),e("v-navigation-drawer",{attrs:{app:"",clipped:"",dark:"",color:"#146B3A"},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}}),e("v-app-bar",{attrs:{app:"",clippedLeft:"",flat:"",dark:"",color:"#146B3A"}},[e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("janQen")]),e("v-spacer"),e("v-btn",{attrs:{outlined:"",href:"https://github.com/orangekame3/janqen"}},[t._v("GitHub")])],1),e("v-content",[e("v-container",{attrs:{fluid:""}},[e("v-card",{staticClass:"mx-auto my-12",attrs:{width:"90%"}},[e("v-col",{attrs:{justify:"center","align-content":"center"}},[e("v-raw",[e("v-card-title",{staticClass:"text-sm-h4 font-weight-bold"},[t._v("ようこそjanQenへ")]),e("v-card-text",{staticClass:"text-sm-h5"},[t._v(" janQenは量子コンピュータとジャンケンするサービスです。"),e("br"),t._v(" 「グー」「チョキ」「パー」のボタンを押してください。すぐにゲームをはじめることができます。"),e("br"),t._v(" janQenの仕組みについては"),e("a",{attrs:{href:"https://github.com/orangekame3/janqen"}},[t._v("こちら")]),t._v("の記事で解説してます。"),e("br"),t._v(" 量子コンピュータはあなたの入力が完了したら乱数計算をはじめます。出力結果は[Result]に表示されます。"),e("br")])],1),e("v-raw",{staticClass:"mx-auto my-auto"},[e("v-layout",{attrs:{"justify-center":""}},[e("img",{attrs:{src:t.histogram,width:"50%"}})])],1)],1)],1)],1),e("v-container",[e("v-row",[e("v-col",[e("v-layout",{attrs:{"justify-center":""}},[e("v-card",{staticClass:"d-flex child-flex",attrs:{width:"70%",fluid:""}},[null==t.your_input?e("img",{attrs:{src:t.your_fig}}):t._e(),0==t.your_input?e("img",{attrs:{src:t.gu_fig}}):t._e(),1==t.your_input?e("img",{attrs:{src:t.choki_fig}}):t._e(),2==t.your_input?e("img",{attrs:{src:t.pa_fig}}):t._e()])],1)],1),e("v-col",[e("v-layout",{attrs:{"justify-center":""}},[e("v-card",{staticClass:"d-flex child-flex",attrs:{width:"73%",fluid:""}},[null==t.q_output?e("img",{attrs:{src:t.q_fig}}):t._e(),0==t.q_output?e("img",{attrs:{src:t.gu_fig}}):t._e(),1==t.q_output?e("img",{attrs:{src:t.choki_fig}}):t._e(),2==t.q_output?e("img",{attrs:{src:t.pa_fig}}):t._e()])],1)],1)],1),e("v-container",{staticClass:"my-auto"},[e("v-row",[e("v-col",[e("v-layout",{attrs:{"justify-center":""}},[e("p",{staticClass:"text-sm-h5 font-weight-bold"},[t._v("あなた")])])],1),e("v-col",[e("v-layout",{attrs:{"justify-center":""}},[e("p",{staticClass:"text-sm-h5 font-weight-bold"},[t._v("量子コンピューター")])])],1)],1),e("v-container")],1),e("v-layout",{attrs:{"justify-center":""}},[e("v-card",{staticClass:"d-flex justify-space-between my-6",attrs:{height:"100",color:t.$vuetify.theme.dark?"grey darken-3":"grey lighten-4",flat:"",tile:"",width:"80%"}},[e("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"80%",width:"20%",loading:t.loading1,disabled:t.loading1,color:"#BB2528"},on:{click:t.gu}},[t._v(" グー ")]),e("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"80%",width:"20%",loading:t.loading2,disabled:t.loading2,color:"#BB2528"},on:{click:t.tyoki}},[t._v(" チョキ ")]),e("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"80%",width:"20%",loading:t.loading3,disabled:t.loading3,color:"#BB2528"},on:{click:t.pa}},[t._v(" パー ")])],1)],1),e("v-row",{attrs:{align:"start",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"mx-auto",attrs:{width:"80%"}},[e("v-toolbar",{attrs:{color:"#BB2528",dark:""}},[e("v-toolbar-title",[t._v("Result")])],1),e("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(a,i){return[e("v-list-item",{key:a.title},[e("v-list-item-content",[e("v-list-item-title",[t._v("この勝負は"+t._s(a.result)+"です。")]),e("v-list-item-subtitle",[t._v(" あなたは"+t._s(a.input)+"を ")]),e("v-list-item-subtitle",[t._v(" 量子コンピューターは"+t._s(a.output)+"を出しました。")])],1)],1),e("v-divider",{key:i,attrs:{inset:a.inset}})]}))],2)],1)],1)],1)],1)],1),e("v-footer",{attrs:{app:"",dark:"",color:"#146B3A"}},[t._v(" @orangekame3 ")])],1)},n=[],o=e("bc3a"),s=e.n(o),u=e("7949"),l={name:"App",components:{Snow:u["a"]},data:function(){return{InputText:"",TextLength:null,items:[],loader:null,loading1:!1,loading2:!1,loading3:!1,qout:0,gu_fig:"static/janken_gu.png",choki_fig:"static/janken_choki.png",pa_fig:"static/janken_pa.png",your_fig:"static/yaruki_moeru_man.png",q_fig:"static/computer_ryoushi_quantum.png",load_fig:"static/computer_bar5_load.png",your_input:null,q_output:null,drawer:null,histogram:"static/result.png",janqen:"static/janQen.png"}},methods:{gu:function(){var t=this,a={input:0};this.your_input=0,this.q_output=null,this.q_fig=this.load_fig,this.histogram="static/result.png",s.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num,t.histogram=a.data.fig}))},tyoki:function(){var t=this,a={input:1};this.your_input=1,this.q_output=null,this.q_fig=this.load_fig,this.histogram="static/result.png",s.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num,t.histogram=a.data.fig}))},pa:function(){var t=this,a={input:2};this.your_input=2,this.q_output=null,this.q_fig=this.load_fig,this.histogram="static/result.png",s.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num,t.histogram=a.data.fig}))},SendData:function(){var t=this,a=this.InputText;s.a.post("/api/post",a).then((function(a){t.items.push(a.data)}))}},watch:{loader:function(){var t=this,a=this.loader;this[a]=!this[a],setTimeout((function(){return t[a]=!1}),3e3),this.loader=null}}},c=l,p=e("2877"),d=e("6544"),f=e.n(d),h=e("7496"),g=e("40dc"),v=e("5bc1"),_=e("8336"),m=e("b0af"),b=e("99d9"),y=e("62ad"),w=e("a523"),j=e("a75b"),k=e("ce7e"),x=e("553a"),V=e("a722"),q=e("8860"),C=e("da13"),B=e("5d23"),T=e("f774"),O=e("0fd9"),S=e("2fa4"),L=e("71d9"),P=e("2a7f"),A=Object(p["a"])(c,r,n,!1,null,null,null),I=A.exports;f()(A,{VApp:h["a"],VAppBar:g["a"],VAppBarNavIcon:v["a"],VBtn:_["a"],VCard:m["a"],VCardText:b["a"],VCardTitle:b["b"],VCol:y["a"],VContainer:w["a"],VContent:j["a"],VDivider:k["a"],VFooter:x["a"],VLayout:V["a"],VList:q["a"],VListItem:C["a"],VListItemContent:B["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VNavigationDrawer:T["a"],VRow:O["a"],VSpacer:S["a"],VToolbar:L["a"],VToolbarTitle:P["a"]});var Q=e("f309");i["a"].use(Q["a"]);var M=new Q["a"]({theme:{dark:!0,themes:{light:{primary:"#4caf50",secondary:"#8bc34a",accent:"#cddc39",error:"#ffeb3b",warning:"#ffc107",info:"#ff5722",success:"#795548"}}}});i["a"].config.productionTip=!1,new i["a"]({vuetify:M,render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=app.0db7bcad.js.map