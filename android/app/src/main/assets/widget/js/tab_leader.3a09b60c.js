(function(e){function t(t){for(var r,a,u=t[0],c=t[1],l=t[2],d=0,f=[];d<u.length;d++)a=u[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={tab_leader:0},i=[];function a(e){return u.p+"js/"+({leader_add:"leader_add"}[e]||e)+"."+{leader_add:"98d86e25"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=l;i.push([3,"vue-router","chunk-vendors"]),n()})({"0c20":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("8c4f"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)},a=[],u=n("2877"),c={},l=Object(u["a"])(c,i,a,!1,null,null,null),d=l.exports,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    leader list\n    "),n("router-link",{staticClass:"link",attrs:{to:"/leader/add"}},[e._v("add"),n("i",{staticClass:"cubeic-arrow"})])],1)},f=[],p={created:function(){console.log("index created")}},v=p,h=Object(u["a"])(v,s,f,!1,null,null,null),b=h.exports,m=[{path:"/",component:b,meta:{keepAlive:!0}},{path:"/leader/add",component:function(){return n.e("leader_add").then(n.bind(null,"95fe"))}}],g=m,y=new o["a"]({routes:g}),w=y,_=n("58a6");r["a"].use(o["a"]),Object(_["a"])(d,{router:w})},3:function(e,t,n){e.exports=n("0c20")},"58a6":function(e,t,n){"use strict";var r=n("cebc"),o=n("2b0e"),i=(n("cadf"),n("551c"),n("f751"),n("097d"),function e(t){e.installed||(e.installed=!0,t.mixin({beforeCreate:function(){var e=this;this.$root.$children.length>0&&this.$root.$children[0]===this&&(document.addEventListener("apiready",function(){e.$options.onLoad&&e.$options.onLoad.bind(e).call()}),document.addEventListener("updateOrientation",function(){e.$options.onWindowChange&&e.$options.onWindowChange.bind(e).call()}))}}))}),a={install:i};o["a"].config.productionTip=!1,o["a"].use(a),Object.defineProperty(o["a"].prototype,"api",{get:function(){return window.api}}),Object.defineProperty(o["a"].prototype,"$api",{get:function(){return window.$api}});var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new o["a"](Object(r["a"])({},t,{render:function(t){return t(e)}})).$mount("#app")};t["a"]=u}});