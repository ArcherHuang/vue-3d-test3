(function(){"use strict";var e={392:function(e,a,n){var t=n(3513),r=n(9242),c=n(3396);function i(e,a){const n=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(n)}var s=n(89);const d={},o=(0,s.Z)(d,[["render",i]]);var l=o,v=n(2483),u=n(7139);const f=e=>((0,c.dD)("data-v-c7719fe4"),e=e(),(0,c.Cn)(),e),p=f((()=>(0,c._)("div",{class:"title"}," 12 吋晶圓膜厚機 - 狀態資訊 ",-1))),h=f((()=>(0,c._)("div",null,[(0,c.Uk)(" 目前機台"),(0,c._)("span",{class:"badge badge-success device-status"},"正常運作")],-1))),b=[p,h],m=(0,c.uE)('<div class="title" data-v-c7719fe4> 12 吋晶圓膜厚機 - 統計資訊 </div><div class="card" data-v-c7719fe4><span class="card-title" data-v-c7719fe4>Standard Deviation</span><p class="card-text" data-v-c7719fe4>769.93 <span data-v-c7719fe4>Å</span></p></div><div class="card" data-v-c7719fe4><span class="card-title" data-v-c7719fe4>Average</span><p class="card-text" data-v-c7719fe4>54954.8 <span data-v-c7719fe4>Å</span></p></div><div class="card" data-v-c7719fe4><span class="card-title" data-v-c7719fe4>Uniformity</span><p class="card-text" data-v-c7719fe4>98.599 <span data-v-c7719fe4>Å</span></p></div><div class="card" data-v-c7719fe4><span class="card-title" data-v-c7719fe4>Max</span><p class="card-text" data-v-c7719fe4>54954.8 <span data-v-c7719fe4>Å</span></p></div><div class="card" data-v-c7719fe4><span class="card-title" data-v-c7719fe4>Min</span><p class="card-text" data-v-c7719fe4>54954.8 <span data-v-c7719fe4>Å</span></p></div><div class="card" data-v-c7719fe4><span class="card-title" data-v-c7719fe4>Max - Min</span><p class="card-text" data-v-c7719fe4>54954.8 <span data-v-c7719fe4>Å</span></p></div>',7),C=[m],g={id:"renderCanvas",ref:"renderCanvas"};function w(e,a,n,t,i,s){return(0,c.wg)(),(0,c.iD)("div",null,[(0,c._)("div",{class:(0,u.C_)(["list",{collapsed:i.isActive}])},[(0,c._)("div",{id:"status",onClick:a[0]||(a[0]=(...e)=>s.handleClick&&s.handleClick(...e)),onKeyup:a[1]||(a[1]=(0,r.D2)(((...e)=>s.handleClick&&s.handleClick(...e)),["enter"]))},b,32),(0,c._)("div",{id:"statistics",onClick:a[2]||(a[2]=(...e)=>s.handleClick&&s.handleClick(...e)),onKeyup:a[3]||(a[3]=(0,r.D2)(((...e)=>s.handleClick&&s.handleClick(...e)),["enter"]))},C,32)],2),(0,c._)("canvas",g,null,512)])}n(3279);var y=n(1617);const _=e=>{const a=new y.D4V(e),n=new y.xsS(a);n.clearColor=new y.Wot(192,221,255);new y.YfP("Camera",0,.8,10,y.Pa4.Zero(),n);y.n0n.Append("assets/","semi-v1.glb",n,(()=>{n.activeCamera=null,n.createDefaultCameraOrLight(!0),n.createDefaultEnvironment(),n.activeCamera.attachControl(e,!1)})),a.runRenderLoop((()=>{n.render()})),window.addEventListener("resize",(()=>{a.resize()}))};var k={name:"BabylonScene",data(){return{isActive:!1}},mounted(){const e=this.$refs.renderCanvas;e.width=window.innerWidth,e.height=window.innerHeight,e&&_(e)},methods:{handleClick(){console.log("點擊了 div"),this.isActive=!this.isActive}}};const x=(0,s.Z)(k,[["render",w],["__scopeId","data-v-c7719fe4"]]);var O=x;const j=[{path:"/",name:"home",component:O}],D=(0,v.p7)({history:(0,v.r5)(),routes:j});var M=D,S=n(65),P=(0,S.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});n(5654);(0,r.ri)(l).use(t.ZP),(0,r.ri)(l).use(P).use(M).mount("#app")}},a={};function n(t){var r=a[t];if(void 0!==r)return r.exports;var c=a[t]={id:t,loaded:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.loaded=!0,c.exports}n.m=e,function(){var e=[];n.O=function(a,t,r,c){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],c=e[l][2];for(var s=!0,d=0;d<t.length;d++)(!1&c||i>=c)&&Object.keys(n.O).every((function(e){return n.O[e](t[d])}))?t.splice(d--,1):(s=!1,c<i&&(i=c));if(s){e.splice(l--,1);var o=r();void 0!==o&&(a=o)}}return a}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[t,r,c]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var r,c,i=t[0],s=t[1],d=t[2],o=0;if(i.some((function(a){return 0!==e[a]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(d)var l=d(n)}for(a&&a(t);o<i.length;o++)c=i[o],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(l)},t=self["webpackChunkvue_d3_blender"]=self["webpackChunkvue_d3_blender"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(392)}));t=n.O(t)})();
//# sourceMappingURL=app.60e59bc7.js.map