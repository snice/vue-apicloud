(function(n){function e(e){for(var o,a,u=e[0],c=e[1],p=e[2],f=0,d=[];f<u.length;f++)a=u[f],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,u=1;u<t.length;u++){var c=t[u];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),n=a(a.s=t[0]))}return n}var o={},r={tab_dispose:0},i=[];function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=o,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=c;i.push([7,"chunk-vendors"]),t()})({"0c97":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[n._v("处置")])},r=[],i={created:function(){var n=this;window.refreshData=function(){n.loadData()}},methods:{loadData:function(){setTimeout(function(){window.api.refreshHeaderLoadDone()},1e3)}}},a=i,u=t("2877"),c=Object(u["a"])(a,o,r,!1,null,null,null),p=c.exports,l=t("6912");Object(l["a"])(p)},6912:function(n,e,t){"use strict";var o=t("cebc"),r=(t("cadf"),t("551c"),t("f751"),t("097d"),t("2b0e")),i=function n(e){n.installed||(n.installed=!0,e.mixin({beforeCreate:function(){var n=this;this.$root.$children.length>0&&this.$root.$children[0]===this&&(document.addEventListener("apiready",function(){n.$options.onReady&&n.$options.onReady.bind(n).call()}),document.addEventListener("updateOrientation",function(){n.$options.onWindowChange&&n.$options.onWindowChange.bind(n).call()}))}}))},a={install:i};r["a"].config.productionTip=!1,r["a"].use(a),Object.defineProperty(r["a"].prototype,"api",{get:function(){return window.api}}),Object.defineProperty(r["a"].prototype,"$api",{get:function(){return window.$api}});var u=null;r["a"].prototype.$page={open:function(n,e,t,o){if(!u){var r=window.api,i={url:n,pageParam:{title:e,titleBarOpts:o}};t&&(i.animation={type:t,subType:"from_right",duration:300}),r.openWin(i)}},close:function(){var n=window.api;n.closeWin()}};var c=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new r["a"](Object(o["a"])({},e,{render:function(e){return e(n)}})).$mount("#app")},p=c;t.d(e,"a",function(){return p})},7:function(n,e,t){n.exports=t("0c97")}});