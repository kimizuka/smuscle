(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},154:function(t,e,n){"use strict";function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},155:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},157:function(t,e,n){"use strict";var r=n(17);function o(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return o}))},158:function(t,e,n){"use strict";function r(t,p){return(r=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},159:function(t,e,n){"use strict";var r=n(1),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var f={__proto__:[]}instanceof Array;function l(t){return function(e,n,r){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(e){return t(e,n,r)}))}}var d=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function y(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(d.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=r.value,e}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}(this,t)}});var l=t.__decorators__;l&&(l.forEach((function(t){return t(e)})),delete t.__decorators__);var y,v,w=Object.getPrototypeOf(t.prototype),h=w instanceof r.a?w.constructor:r.a,k=h.extend(e);return function(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!m[r]){var o=Object.getOwnPropertyDescriptor(t,r);if(!o||o.configurable){var c,l,d=Object.getOwnPropertyDescriptor(e,r);if(!f){if("cid"===r)return;var y=Object.getOwnPropertyDescriptor(n,r);if(c=d.value,l=typeof c,null!=c&&("object"===l||"function"===l)&&y&&y.value===d.value)return}0,Object.defineProperty(t,r,d)}}}))}(k,t,h),o&&(c(y=k,v=t),Object.getOwnPropertyNames(v.prototype).forEach((function(t){c(y.prototype,v.prototype,t)})),Object.getOwnPropertyNames(v).forEach((function(t){c(y,v,t)}))),k}var m={prototype:!0,arguments:!0,callee:!0,caller:!0};function v(t){return"function"==typeof t?y(t):function(e){return y(e,t)}}v.registerHooks=function(t){d.push.apply(d,t)};var w=v;n.d(e,"b",(function(){return O})),n.d(e,"d",(function(){return x})),n.d(e,"a",(function(){return w})),n.d(e,"c",(function(){return r.a}));var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function k(t,e,n){h&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)))}function O(t){return void 0===t&&(t={}),function(e,n){k(t,e,n),l((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}function x(path,t){void 0===t&&(t={});var e=t.deep,n=void 0!==e&&e,r=t.immediate,o=void 0!==r&&r;return l((function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!=typeof r[path]||Array.isArray(r[path])?void 0===r[path]&&(r[path]=[]):r[path]=[r[path]],r[path].push({handler:e,deep:n,immediate:o})}))}},174:function(t,e,n){var content=n(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("86457870",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";var r=n(174);n.n(r).a},229:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,"@-webkit-keyframes countup-data-v-01455984{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.1,.9);transform:scale(1.1,.9)}50%{-webkit-transform:scale(.9,1.1);transform:scale(.9,1.1)}60%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes countup-data-v-01455984{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.1,.9);transform:scale(1.1,.9)}50%{-webkit-transform:scale(.9,1.1);transform:scale(.9,1.1)}60%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes bonus-data-v-01455984{0%{opacity:0;-webkit-transform:translate(0);transform:translate(0)}8%{opacity:1;-webkit-transform:translateY(-24px);transform:translateY(-24px)}16%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}92%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}to{opacity:0;-webkit-transform:translate(0);transform:translate(0)}}@keyframes bonus-data-v-01455984{0%{opacity:0;-webkit-transform:translate(0);transform:translate(0)}8%{opacity:1;-webkit-transform:translateY(-24px);transform:translateY(-24px)}16%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}92%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}to{opacity:0;-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes blink-data-v-01455984{0%{opacity:0}25%{opacity:1}50%{opacity:0}75%{opacity:1}to{opacity:0}}@keyframes blink-data-v-01455984{0%{opacity:0}25%{opacity:1}50%{opacity:0}75%{opacity:1}to{opacity:0}}.wrapper[data-v-01455984]{display:-webkit-box;display:flex;position:fixed;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:rgba(0,0,0,.8)}.box[data-v-01455984],.wrapper[data-v-01455984]{top:0;bottom:0;left:0;right:0}.box[data-v-01455984]{position:absolute;margin:auto;width:576px;height:320px}hgroup[data-v-01455984]{text-align:center}.ttl-main[data-v-01455984]{font-size:160px}.ttl-sub[data-v-01455984]{font-size:40px;text-shadow:#fff -2px 0 0,#fff 2px 0 0,#fff 0 -2px 0,#fff 0 2px 0}.btn[data-v-01455984]{position:absolute;left:0;right:0;bottom:0;margin:auto;color:#fff;font-size:80px;text-align:center;text-shadow:#000 -2px 0 0,#000 2px 0 0,#000 0 -2px 0,#000 0 2px 0;-webkit-animation:blink-data-v-01455984 4s ease-in-out infinite;animation:blink-data-v-01455984 4s ease-in-out infinite}@media (max-width:600px){.box[data-v-01455984]{width:320px;height:232px}.ttl-main[data-v-01455984]{font-size:120px}.ttl-sub[data-v-01455984]{font-size:24px}.btn[data-v-01455984]{font-size:40px}}",""])},233:function(t,e,n){"use strict";n.r(e);var r=n(153),o=n(154),c=n(157),f=n(155),l=n(158),d=n(17),y=n(159),m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},v=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(c.a)(this,Object(f.a)(e).apply(this,arguments))).msg=t.isSp()?"Tap to Start":"Click to Start",t}return Object(l.a)(e,t),Object(o.a)(e,[{key:"isSp",value:function(){var t=navigator.userAgent.toLowerCase();return/iphone|ipad|ipod|android/.test(t)}},{key:"handleKeyDown",value:function(t){switch(t.key){case"p":this.$router.push("/keynote")}}},{key:"mounted",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"beforeDestroy",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}}]),e}(y.c),w=v=m([Object(y.a)({})],v),h=(n(228),n(18)),component=Object(h.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"wrapper",attrs:{to:"/game"}},[e("div",{staticClass:"box"},[e("hgroup",[e("h1",{staticClass:"ttl-main"},[this._v("💪😄")]),this._v(" "),e("h2",{staticClass:"ttl-sub"},[this._v("Muscle & Smile")])]),this._v(" "),e("a",{staticClass:"btn"},[this._v(this._s(this.msg))])])])}),[],!1,null,"01455984",null);e.default=component.exports}}]);