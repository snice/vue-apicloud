(function(t){function n(n){for(var i,o,s=n[0],c=n[1],u=n[2],l=0,p=[];l<s.length;l++)o=s[l],r[o]&&p.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(n);while(p.length)p.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],i=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(i=!1)}i&&(a.splice(n--,1),t=o(o.s=e[0]))}return t}var i={},r={tab_kanban:0},a=[];function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var d=c;a.push([1,"chunk-vendors"]),e()})({1:function(t,n,e){t.exports=e("fe9b")},"2adb":function(t,n,e){},"46c7":function(t,n,e){"use strict";var i=e("2adb"),r=e.n(i);r.a},6912:function(t,n,e){"use strict";var i=e("cebc"),r=(e("cadf"),e("551c"),e("f751"),e("097d"),e("2b0e")),a=function t(n){t.installed||(t.installed=!0,n.mixin({beforeCreate:function(){var t=this;this.$root.$children.length>0&&this.$root.$children[0]===this&&(document.addEventListener("apiready",function(){t.$options.onReady&&t.$options.onReady.bind(t).call()}),document.addEventListener("updateOrientation",function(){t.$options.onWindowChange&&t.$options.onWindowChange.bind(t).call()}))}}))},o={install:a};r["a"].config.productionTip=!1,r["a"].use(o),Object.defineProperty(r["a"].prototype,"api",{get:function(){return window.api}}),Object.defineProperty(r["a"].prototype,"$api",{get:function(){return window.$api}});var s=null;r["a"].prototype.$page={open:function(t,n,e,i){if(!s){var r=window.api,a={url:t,pageParam:{title:n,titleBarOpts:i}};e&&(a.animation={type:e,subType:"from_right",duration:300}),r.openWin(a)}},close:function(){var t=window.api;t.closeWin()}};var c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new r["a"](Object(i["a"])({},n,{render:function(n){return n(t)}})).$mount("#app")},u=c;e.d(n,"a",function(){return u})},fe9b:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex-wrap flex-vertical",attrs:{id:"wrap"}},[e("header",[e("ul",{staticClass:"flex-wrap"},[t._l(t.tabs,function(n,i){return[e("li",{key:"tab_"+i,class:["flex-con",n.active?"active":""],attrs:{tapmode:"hover"},on:{click:function(n){return t.switchBtn(i)}}},[t._v(t._s(n.text))])]})],2),e("div",{attrs:{id:"slider"}})]),e("div",{staticClass:"flex-con",attrs:{id:"app"}})])},r=[],a=(e("ac6a"),e("20d6"),function(){var t=document.createElement("div").style,n={standard:"transform",webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform"};for(var e in n)if(void 0!==t[n[e]])return e;return!1}()),o=function(t){return!1!==a&&("standard"===a?"transitionEnd"===t?"transitionend":t:a+t.charAt(0).toUpperCase()+t.substr(1))},s=0,c=!1,u={data:function(){return{tabs:[{text:"概况",url:"./tab_survey.html",active:!0},{text:"受理",url:"./tab_accept.html",active:!1},{text:"处置",url:"./tab_dispose.html",active:!1},{text:"督查",url:"./tab_supervision.html",active:!1}]}},onReady:function(){var t=this;this.$api.dom("#slider").style.width=this.api.winWidth/this.tabs.length,this.api.addEventListener({name:"kanbanHiddenChange"},function(t){c=t.hidden}),this.api.addEventListener({name:"kanbanSizeChange"},function(n){setTimeout(function(){t.switchBtn(s,!1)},200)}),this.funInitGroup()},computed:{curActiveId:function(){return this.tabs.findIndex(function(t){return t.active})}},methods:{funInitGroup:function(){var t=this,n=[];this.tabs.forEach(function(t){n.push({name:t.text,pageParam:{refresh:!0},url:t.url,bgColor:"rgba(0,0,0,0)",bounces:!1})}),this.api.openFrameGroup({name:"group_kanban",scrollEnabled:!0,rect:{x:0,y:this.$api.dom("header").offsetHeight+50,w:this.api.winWidth,h:this.$api.dom("#app").offsetHeight},index:0,frames:n},function(n,e){t.switchBtn(n.index,!1)})},switchBtn:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0!==this.api&&this.curActiveId!==t){this.tabs[this.curActiveId].active=!1,this.tabs[t].active=!0;var e=this.api.winWidth/this.tabs.length;this.$api.dom("#slider").style.width=e,this.setSliderTransform(t*e),this.api.setFrameGroupAttr({name:"group_kanban",hidden:c,rect:{x:0,y:this.$api.dom("header").offsetHeight+50,w:this.api.winWidth,h:this.$api.dom("#app").offsetHeight}}),s=t,!1!==n&&this.api.setFrameGroupIndex({name:"group_kanban",index:t})}},setSliderTransform:function(t){var n=this.$api.dom("#slider");if("number"===typeof t&&(t="".concat(t,"px")),n){var e=o("transform"),i=o("transition");n.style[i]="".concat(e," 0.2s linear"),n.style[e]="translateX(".concat(t,") translateZ(0)")}}}},d=u,l=(e("46c7"),e("2877")),p=Object(l["a"])(d,i,r,!1,null,null,null),f=p.exports,h=e("6912");Object(h["a"])(f)}});