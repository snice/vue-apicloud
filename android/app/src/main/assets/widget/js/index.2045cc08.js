(function(t){function e(e){for(var i,o,u=e[0],s=e[1],c=e[2],l=0,d=[];l<u.length;l++)o=u[l],a[o]&&d.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={index:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-wrap flex-vertical",attrs:{id:"wrap"}},[t._m(0),n("div",{staticClass:"flex-con",attrs:{id:"app"}}),n("div",{staticClass:"border-t",attrs:{id:"footer"}},[n("ul",{staticClass:"flex-wrap"},[t._l(t.tabs,function(e,i){return[n("li",{key:"tab_"+i,class:["flex-con",e.active?"active":""],attrs:{tapmode:"hover"},on:{click:function(e){return t.switchBtn(i)}}},[t._v(t._s(e.text))])]})],2)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("ul",[n("li",{staticClass:"border-b active"},[t._v("益治理APP")])])])}],r=(n("ac6a"),n("20d6"),0),o={data:function(){return{tabs:[{text:"看板",url:"./tab_kanban.html",active:!0},{text:"地图",url:"./tab_map.html",active:!1},{text:"领导上报",url:"./tab_leader.html",active:!1},{text:"我的",url:"./tab_my.html",active:!1}]}},onReady:function(){this.api.setScreenOrientation({orientation:"auto"}),this.$api.fixStatusBar(this.$api.dom("header")),this.api.setStatusBarStyle({style:"light",color:"#272c3b"}),this.funInitGroup()},onWindowChange:function(){0===r&&this.api.sendEvent({name:"kanbanSizeChange"}),this.api.setFrameGroupAttr({name:"group_kanban",hidden:0!==r}),this.api.setFrameGroupAttr({name:"group",rect:{x:0,y:this.$api.dom("header").offsetHeight-1,w:this.api.winWidth,h:this.$api.dom("#app").offsetHeight+1}})},computed:{curActiveId:function(){return this.tabs.findIndex(function(t){return t.active})}},methods:{funInitGroup:function(){var t=[];this.tabs.forEach(function(e){t.push({name:e.text,url:e.url,bgColor:"rgba(0,0,0,0)",bounces:!1})}),this.api.openFrameGroup({name:"group",scrollEnabled:!1,rect:{x:0,y:this.$api.dom("header").offsetHeight-1,w:this.api.winWidth,h:this.$api.dom("#app").offsetHeight+1},index:0,frames:t},function(t,e){})},switchBtn:function(t){void 0!==this.api&&this.curActiveId!==t&&(this.tabs[this.curActiveId].active=!1,this.tabs[t].active=!0,r=t,0===t&&this.api.sendEvent({name:"kanbanSizeChange"}),this.api.sendEvent({name:"kanbanHiddenChange",extra:{hidden:0!==r}}),this.api.setFrameGroupAttr({name:"group_kanban",hidden:0!==r}),this.api.setFrameGroupIndex({name:"group",index:t}))}}},u=o,s=(n("034f"),n("2877")),c=Object(s["a"])(u,i,a,!1,null,null,null),p=c.exports,l=n("6912");Object(l["a"])(p)},"64a9":function(t,e,n){},6912:function(t,e,n){"use strict";var i=n("cebc"),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),r=function t(e){t.installed||(t.installed=!0,e.mixin({beforeCreate:function(){var t=this;this.$root.$children.length>0&&this.$root.$children[0]===this&&(document.addEventListener("apiready",function(){t.$options.onReady&&t.$options.onReady.bind(t).call()}),document.addEventListener("updateOrientation",function(){t.$options.onWindowChange&&t.$options.onWindowChange.bind(t).call()}))}}))},o={install:r};a["a"].config.productionTip=!1,a["a"].use(o),Object.defineProperty(a["a"].prototype,"api",{get:function(){return window.api}}),Object.defineProperty(a["a"].prototype,"$api",{get:function(){return window.$api}});var u=null;a["a"].prototype.$page={open:function(t,e,n,i){if(!u){var a=window.api,r={url:t,pageParam:{title:e,titleBarOpts:i}};n&&(r.animation={type:n,subType:"from_right",duration:300}),a.openWin(r)}},close:function(){var t=window.api;t.closeWin()}};var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new a["a"](Object(i["a"])({},e,{render:function(e){return e(t)}})).$mount("#app")},c=s;n.d(e,"a",function(){return c})}});