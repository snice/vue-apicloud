(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)n=s[u],i[n]&&d.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={tab_survey:0},i={tab_survey:0},o=[];function s(t){return c.p+"js/"+({echarts:"echarts","a-chart":"a-chart"}[t]||t)+"."+{echarts:"fba309ab","a-chart":"c793cc67"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={echarts:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({echarts:"echarts","a-chart":"a-chart"}[t]||t)+"."+{echarts:"6dc57fe0","a-chart":"31d6cfe0"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,delete n[t],f.parentNode.removeChild(f),a(o)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){n[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,a){r=i[t]=[e,a]});e.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");o.type=r,o.request=n,a[1](o)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([3,"chunk-vendors"]),a()})({3:function(t,e,a){t.exports=a("90ce")},3542:function(t,e,a){},"5e8c":function(t,e,a){"use strict";var r=a("3542"),n=a.n(r);n.a},"90ce":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("div",{staticStyle:{background:"#ecf0f5",height:"20px"}}),t._m(0),a("div",{staticClass:"aui-hr"}),a("section",{staticClass:"aui-grid"},[a("div",{staticClass:"aui-row"},[t._l(t.platformInfos,function(e,r){return[a("div",{key:"info_"+r,staticClass:"aui-col-xs-3"},[a("div",[a("div",{staticClass:"circle",style:{backgroundColor:e.bgColor}},[t._v("\n                "+t._s(e.text)+"\n              ")])]),a("div",{staticClass:"aui-grid-label"},[t._v(t._s(e.name))])])]})],2)]),a("div",{staticClass:"aui-hr"}),t._m(1),a("div",{staticClass:"aui-hr"}),a("div",[a("div",{staticStyle:{background:"#ecf0f5",height:"20px"}}),t._m(2),a("div",{staticClass:"aui-hr"}),a("section",{staticClass:"aui-grid"},[a("div",{staticClass:"aui-row"},[t._l(t.realData,function(e,r){return[a("div",{key:"info_"+r,staticClass:"aui-col-xs-3"},[a("div",[a("div",{staticClass:"circle",style:{backgroundColor:e.bgColor}},[t._v("\n                  "+t._s(e.text)+"\n                ")])]),a("div",{staticClass:"aui-grid-label"},[t._v(t._s(e.name))])])]})],2)]),a("div",{staticClass:"aui-hr"}),t.showChart?a("div",{staticClass:"bottom_info"},[a("div",{staticClass:"info_item"},[a("a-chart",{ref:"vchart",attrs:{options:t.polar}}),a("div",{staticClass:"center"},[t._v("\n            23\n          ")])],1),a("div",{staticClass:"v_line"}),a("div",{staticClass:"info_item"},[a("a-chart",{ref:"vchart",attrs:{options:t.polar}}),a("div",{staticClass:"center"},[t._v("\n            23\n          ")])],1)]):t._e(),a("div",{staticClass:"aui-hr"})])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"5px",background:"white"}},[a("span",[t._v("平台信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom_info"},[a("div",{staticClass:"info_item"},[t._v("1")]),a("div",{staticClass:"v_line"}),a("div",{staticClass:"info_item"},[t._v("2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"5px",background:"white"}},[a("span",[t._v("实时数据")])])}],o=[{name:"面积",text:"46km",bgColor:"#0c5d98"},{name:"人口",text:"36万人",bgColor:"#21ce97"},{name:"街道",text:"46",bgColor:"#b9544f"},{name:"社区",text:"46",bgColor:"#d7a23c"},{name:"网格",text:"46",bgColor:"#d10915"},{name:"网格员",text:"46",bgColor:"#42b7f5"},{name:"企业",text:"46",bgColor:"#dcb76e"}],s=[{name:"受理数",text:"46",bgColor:"#0c5d98"},{name:"处置数",text:"46",bgColor:"#21ce97"},{name:"办结数",text:"46",bgColor:"#b9544f"},{name:"超时数",text:"46",bgColor:"#d7a23c"}],c={components:{"a-chart":function(){return Promise.all([a.e("echarts"),a.e("a-chart")]).then(a.bind(null,"5207"))}},data:function(){return{progress:{val1:30},showChart:!1,platformInfos:o,realData:s}},computed:{polar:function(){return{series:[{type:"gauge",axisLine:{show:!0,lineStyle:{opacity:1,width:10,shadowBlur:0,shadowColor:"#00000000"}},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1},data:[{value:this.progress.val1}],animationDelay:300}]}}},onLoad:function(){console.log("onLoad")},created:function(){var t=this;window.refreshData=function(){t.loadData()},window.onresize=function(){t.$refs.vchart&&t.$refs.vchart.resize()}},mounted:function(){var t=this;setTimeout(function(){t.showChart=!0},500)},methods:{loadData:function(){this.progress.val1=100*Math.random(),setTimeout(function(){window.api.refreshHeaderLoadDone()},1e3)}}},l=c,u=(a("5e8c"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"b194d14a",null),f=d.exports,h=a("9532");r["a"].config.productionTip=!1,r["a"].use(h["a"]),new r["a"]({render:function(t){return t(f)}}).$mount("#app")},9532:function(t,e,a){"use strict";a("cadf"),a("551c"),a("f751"),a("097d");var r=function t(e){t.installed||(t.installed=!0,e.mixin({beforeCreate:function(){var t=this;this.$root.$children.length>0&&this.$root.$children[0]===this&&document.addEventListener("apiready",function(){t.$options.onLoad&&t.$options.onLoad.bind(t).call()})}}))};e["a"]={install:r}}});