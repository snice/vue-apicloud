(function(e){function n(n){for(var r,a,u=n[0],c=n[1],f=n[2],l=0,p=[];l<u.length;l++)a=u[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(p.length)p.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={tab_accept:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var f=0;f<u.length;f++)n(u[f]);var d=c;i.push([6,"chunk-vendors"]),t()})({"58a6":function(e,n,t){"use strict";var r=t("cebc"),o=t("2b0e"),i=(t("cadf"),t("551c"),t("f751"),t("097d"),function e(n){e.installed||(e.installed=!0,n.mixin({beforeCreate:function(){var e=this;this.$root.$children.length>0&&this.$root.$children[0]===this&&(document.addEventListener("apiready",function(){e.$options.onLoad&&e.$options.onLoad.bind(e).call()}),document.addEventListener("updateOrientation",function(){e.$options.onWindowChange&&e.$options.onWindowChange.bind(e).call()}))}}))}),a={install:i};o["a"].config.productionTip=!1,o["a"].use(a),Object.defineProperty(o["a"].prototype,"api",{get:function(){return window.api}}),Object.defineProperty(o["a"].prototype,"$api",{get:function(){return window.$api}});var u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new o["a"](Object(r["a"])({},n,{render:function(n){return n(e)}})).$mount("#app")};n["a"]=u},6:function(e,n,t){e.exports=t("67e7")},"67e7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._v("\n    受理\n")])},o=[],i={created:function(){var e=this;window.refreshData=function(){e.loadData()}},methods:{loadData:function(){setTimeout(function(){window.api.refreshHeaderLoadDone()},1e3)}}},a=i,u=t("2877"),c=Object(u["a"])(a,r,o,!1,null,null,null),f=c.exports,d=t("58a6");Object(d["a"])(f)}});