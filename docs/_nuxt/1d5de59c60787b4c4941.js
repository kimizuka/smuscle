(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},154:function(t,e,r){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))},155:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return n}))},157:function(t,e,r){"use strict";var n=r(17);function o(t,e){return!e||"object"!==Object(n.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}r.d(e,"a",(function(){return o}))},158:function(t,e,r){"use strict";function n(t,p){return(n=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return o}))},159:function(t,e,r){"use strict";var n=r(1),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var f={__proto__:[]}instanceof Array;function d(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push((function(e){return t(e,r,n)}))}}var l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function y(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(l.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(n[t]=data[t])})),n}(this,t)}});var d=t.__decorators__;d&&(d.forEach((function(t){return t(e)})),delete t.__decorators__);var y,v,w=Object.getPrototypeOf(t.prototype),h=w instanceof n.a?w.constructor:n.a,O=h.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!m[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var c,d,l=Object.getOwnPropertyDescriptor(e,n);if(!f){if("cid"===n)return;var y=Object.getOwnPropertyDescriptor(r,n);if(c=l.value,d=typeof c,null!=c&&("object"===d||"function"===d)&&y&&y.value===l.value)return}0,Object.defineProperty(t,n,l)}}}))}(O,t,h),o&&(c(y=O,v=t),Object.getOwnPropertyNames(v.prototype).forEach((function(t){c(y.prototype,v.prototype,t)})),Object.getOwnPropertyNames(v).forEach((function(t){c(y,v,t)}))),O}var m={prototype:!0,arguments:!0,callee:!0,caller:!0};function v(t){return"function"==typeof t?y(t):function(e){return y(e,t)}}v.registerHooks=function(t){l.push.apply(l,t)};var w=v;r.d(e,"b",(function(){return k})),r.d(e,"d",(function(){return _})),r.d(e,"a",(function(){return w})),r.d(e,"c",(function(){return n.a}));var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function O(t,e,r){h&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,r)))}function k(t){return void 0===t&&(t={}),function(e,r){O(t,e,r),d((function(e,r){(e.props||(e.props={}))[r]=t}))(e,r)}}function _(path,t){void 0===t&&(t={});var e=t.deep,r=void 0!==e&&e,n=t.immediate,o=void 0!==n&&n;return d((function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var n=t.watch;"object"!=typeof n[path]||Array.isArray(n[path])?void 0===n[path]&&(n[path]=[]):n[path]=[n[path]],n[path].push({handler:e,deep:r,immediate:o})}))}},173:function(t,e,r){var content=r(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("2ed14425",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";var n=r(173);r.n(n).a},228:function(t,e,r){(t.exports=r(25)(!1)).push([t.i,"@-webkit-keyframes countup-data-v-320f85ad{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.1,.9);transform:scale(1.1,.9)}50%{-webkit-transform:scale(.9,1.1);transform:scale(.9,1.1)}60%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes countup-data-v-320f85ad{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.1,.9);transform:scale(1.1,.9)}50%{-webkit-transform:scale(.9,1.1);transform:scale(.9,1.1)}60%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes bonus-data-v-320f85ad{0%{opacity:0;-webkit-transform:translate(0);transform:translate(0)}8%{opacity:1;-webkit-transform:translateY(-24px);transform:translateY(-24px)}16%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}92%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}to{opacity:0;-webkit-transform:translate(0);transform:translate(0)}}@keyframes bonus-data-v-320f85ad{0%{opacity:0;-webkit-transform:translate(0);transform:translate(0)}8%{opacity:1;-webkit-transform:translateY(-24px);transform:translateY(-24px)}16%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}92%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}to{opacity:0;-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes blink-data-v-320f85ad{0%{opacity:0}25%{opacity:1}50%{opacity:0}75%{opacity:1}to{opacity:0}}@keyframes blink-data-v-320f85ad{0%{opacity:0}25%{opacity:1}50%{opacity:0}75%{opacity:1}to{opacity:0}}.wrapper[data-v-320f85ad]{display:-webkit-box;display:flex;position:fixed;top:0;bottom:0;left:0;right:0;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:rgba(0,0,0,.8)}.box[data-v-320f85ad]{top:0;width:576px;height:320px}.box[data-v-320f85ad],.btn[data-v-320f85ad]{position:absolute;bottom:0;left:0;right:0;margin:auto}.btn[data-v-320f85ad]{color:#fff;font-size:80px;text-align:center;-webkit-animation:blink-data-v-320f85ad 4s ease-in-out infinite;animation:blink-data-v-320f85ad 4s ease-in-out infinite}@media (max-width:600px){.box[data-v-320f85ad]{width:320px;height:232px}.btn[data-v-320f85ad]{font-size:40px}}",""])},233:function(t,e,r){"use strict";r.r(e);var n=r(153),o=r(154),c=r(157),f=r(155),d=r(158),l=r(17),y=r(159),m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},v=function(t){function e(){var t;return Object(n.a)(this,e),(t=Object(c.a)(this,Object(f.a)(e).apply(this,arguments))).msg=t.isSp()?"Tap to Start":"Click to Start",t}return Object(d.a)(e,t),Object(o.a)(e,[{key:"isSp",value:function(){var t=navigator.userAgent.toLowerCase();return/iphone|ipad|ipod|android/.test(t)}}]),e}(y.c),w=v=m([Object(y.a)({})],v),h=(r(227),r(18)),component=Object(h.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"wrapper",attrs:{to:"/game"}},[e("div",{staticClass:"box"},[e("a",{staticClass:"btn"},[this._v(this._s(this.msg))])])])}),[],!1,null,"320f85ad",null);e.default=component.exports}}]);