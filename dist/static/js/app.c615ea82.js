(function(t){function a(a){for(var e,o,s=a[0],u=a[1],l=a[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);c&&c(a);while(d.length)d.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,a=0;a<n.length;a++){for(var i=n[a],e=!0,s=1;s<i.length;s++){var u=i[s];0!==r[u]&&(e=!1)}e&&(n.splice(a--,1),t=o(o.s=i[0]))}return t}var e={},r={app:0},n=[];function o(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,a,i){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(i,e,function(a){return t[a]}.bind(null,e));return i},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var c=u;n.push([0,"chunk-vendors"]),i()})({0:function(t,a,i){t.exports=i("56d7")},"56d7":function(t,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-app",[i("v-navigation-drawer",{attrs:{app:"",clipped:"",dark:"",color:"#146B3A"},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}}),i("v-app-bar",{attrs:{app:"",clippedLeft:"",flat:"",dark:"",color:"#146B3A"}},[i("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",[t._v("janQen")]),i("v-spacer"),i("v-btn",{attrs:{outlined:"",href:"https://github.com/orangekame3/janqen"}},[t._v("GitHub")])],1),i("v-content",[i("v-container",{attrs:{fluid:""}},[i("v-card",{staticClass:"mx-auto my-12",attrs:{width:"90%"}},[i("v-col",{attrs:{justify:"center","align-content":"center"}},[i("v-raw",[i("v-card-title",{staticClass:"text-sm-h4 font-weight-bold"},[t._v("ようこそjanQenへ")]),i("v-card-text",{staticClass:"text-sm-h5"},[t._v(" janQenは量子コンピュータとジャンケンするサービスです。"),i("br"),t._v(" 「グー」「チョキ」「パー」のボタンを押してください。すぐにゲームをはじめることができます。"),i("br"),t._v(" janQenの仕組みについては"),i("a",{attrs:{href:"https://qiita.com/orangekame3/private/2f1cde38a92f1289cd69"}},[t._v("こちら")]),t._v("の記事で解説してます。"),i("br"),t._v(" 量子コンピュータはあなたの入力が完了したら乱数計算をはじめます。出力結果は[Result]に表示されます。"),i("br")])],1),i("v-raw",{staticClass:"mx-auto my-auto"},[i("v-layout",{attrs:{"justify-center":""}},[i("img",{attrs:{src:t.histogram,width:"50%"}})])],1)],1)],1)],1),i("v-container",[i("v-row",[i("v-col",[i("v-layout",{attrs:{"justify-center":""}},[i("v-card",{staticClass:"d-flex child-flex",attrs:{width:"70%",fluid:""}},[null==t.your_input?i("img",{attrs:{src:t.your_fig}}):t._e(),0==t.your_input?i("img",{attrs:{src:t.gu_fig}}):t._e(),1==t.your_input?i("img",{attrs:{src:t.choki_fig}}):t._e(),2==t.your_input?i("img",{attrs:{src:t.pa_fig}}):t._e()])],1)],1),i("v-col",[i("v-layout",{attrs:{"justify-center":""}},[i("v-card",{staticClass:"d-flex child-flex",attrs:{width:"73%",fluid:""}},[null==t.q_output?i("img",{attrs:{src:t.q_fig}}):t._e(),0==t.q_output?i("img",{attrs:{src:t.gu_fig}}):t._e(),1==t.q_output?i("img",{attrs:{src:t.choki_fig}}):t._e(),2==t.q_output?i("img",{attrs:{src:t.pa_fig}}):t._e()])],1)],1)],1),i("v-container",{staticClass:"my-auto"},[i("v-row",[i("v-col",[i("v-layout",{attrs:{"justify-center":""}},[i("p",{staticClass:"text-sm-h5 font-weight-bold"},[t._v("あなた")])])],1),i("v-col",[i("v-layout",{attrs:{"justify-center":""}},[i("p",{staticClass:"text-sm-h5 font-weight-bold"},[t._v("量子コンピューター")])])],1)],1),i("v-container")],1),i("v-layout",{attrs:{"justify-center":""}},[i("v-card",{staticClass:"d-flex justify-space-between my-6",attrs:{height:"100",color:t.$vuetify.theme.dark?"grey darken-3":"grey lighten-4",flat:"",tile:"",width:"80%"}},[i("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"80%",width:"20%",loading:t.loading1,disabled:t.loading1,color:"#BB2528"},on:{click:t.gu}},[t._v(" グー ")]),i("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"80%",width:"20%",loading:t.loading2,disabled:t.loading2,color:"#BB2528"},on:{click:t.tyoki}},[t._v(" チョキ ")]),i("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"80%",width:"20%",loading:t.loading3,disabled:t.loading3,color:"#BB2528"},on:{click:t.pa}},[t._v(" パー ")])],1)],1),i("v-row",{attrs:{align:"start",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{width:"80%"}},[i("v-toolbar",{attrs:{color:"#BB2528",dark:""}},[i("v-toolbar-title",[t._v("Result History")])],1),i("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(a,e){return[i("v-list-item",{key:a.title},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e+1)+"回目:この勝負は"+t._s(a.result)+"です。")]),i("v-list-item-subtitle",[t._v(" あなたは"+t._s(a.input)+"を ")]),i("v-list-item-subtitle",[t._v(" 量子コンピューターは"+t._s(a.output)+"を出しました。")])],1)],1),i("v-divider",{key:e,attrs:{inset:a.inset}})]}))],2)],1)],1)],1)],1)],1),i("v-footer",{attrs:{app:"",dark:"",color:"#146B3A"}},[t._v(" @orangekame3 ")])],1)},n=[],o=i("bc3a"),s=i.n(o),u={name:"App",data:function(){return{InputText:"",TextLength:null,items:[],loader:null,loading1:!1,loading2:!1,loading3:!1,qout:0,gu_fig:"static/janken_gu.png",choki_fig:"static/janken_choki.png",pa_fig:"static/janken_pa.png",your_fig:"static/yaruki_moeru_man.png",q_fig:"static/computer_ryoushi_quantum.png",load_fig:"static/computer_bar5_load.png",your_input:null,q_output:null,drawer:null,histogram:"static/result.png",janqen:"static/janQen.png"}},methods:{gu:function(){var t=this,a={input:0};this.your_input=0,this.q_output=null,this.q_fig=this.load_fig,this.histogram="static/result.png",s.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num,t.histogram=a.data.fig}))},tyoki:function(){var t=this,a={input:1};this.your_input=1,this.q_output=null,this.q_fig=this.load_fig,this.histogram="static/result.png",s.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num,t.histogram=a.data.fig}))},pa:function(){var t=this,a={input:2};this.your_input=2,this.q_output=null,this.q_fig=this.load_fig,this.histogram="static/result.png",s.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num,t.histogram=a.data.fig}))},SendData:function(){var t=this,a=this.InputText;s.a.post("/api/post",a).then((function(a){t.items.push(a.data)}))}},watch:{loader:function(){var t=this,a=this.loader;this[a]=!this[a],setTimeout((function(){return t[a]=!1}),3e3),this.loader=null}}},l=u,c=i("2877"),p=i("6544"),d=i.n(p),f=i("7496"),h=i("40dc"),g=i("5bc1"),v=i("8336"),_=i("b0af"),m=i("99d9"),y=i("62ad"),b=i("a523"),w=i("a75b"),k=i("ce7e"),j=i("553a"),x=i("a722"),V=i("8860"),q=i("da13"),C=i("5d23"),B=i("f774"),T=i("0fd9"),O=i("2fa4"),L=i("71d9"),P=i("2a7f"),S=Object(c["a"])(l,r,n,!1,null,null,null),A=S.exports;d()(S,{VApp:f["a"],VAppBar:h["a"],VAppBarNavIcon:g["a"],VBtn:v["a"],VCard:_["a"],VCardText:m["a"],VCardTitle:m["b"],VCol:y["a"],VContainer:b["a"],VContent:w["a"],VDivider:k["a"],VFooter:j["a"],VLayout:x["a"],VList:V["a"],VListItem:q["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VNavigationDrawer:B["a"],VRow:T["a"],VSpacer:O["a"],VToolbar:L["a"],VToolbarTitle:P["a"]});var I=i("f309");e["a"].use(I["a"]);var Q=new I["a"]({theme:{dark:!0,themes:{light:{primary:"#4caf50",secondary:"#8bc34a",accent:"#cddc39",error:"#ffeb3b",warning:"#ffc107",info:"#ff5722",success:"#795548"}}}});e["a"].config.productionTip=!1,new e["a"]({vuetify:Q,render:function(t){return t(A)}}).$mount("#app")}});
//# sourceMappingURL=app.c615ea82.js.map