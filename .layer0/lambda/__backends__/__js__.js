!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(global,(function(){return(()=>{"use strict";var __webpack_modules__={710:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(622),i=o(r(129)),a=r(605),c=o(r(879)),l=o(r(291)),s=o(r(622));let u;process.env.API_HOST="127.0.0.1:3001",t.default=async function(e){if(!u){const t=c.default("../next.config.js");u="server"===t.target?((e,t)=>{const r=c.default("next/dist/server/next-server").default;t.experimental.isrFlushToDisk=!1;const o=new r({hostname:"localhost",port:e,dir:s.default.resolve(__dirname,".."),dev:!1,conf:t}).getRequestHandler();return a.createServer((async(e,t)=>{try{o(e,t)}catch(e){const r="An unexpected error occurred while processing the request with next.js.";console.error(e.stack),t.writeHead(500),t.end(r)}}))})(e,t):(()=>{const e=l.default();return a.createServer((async(t,r)=>{var o;const a=t.headers["x-next-page"],l=null===(o=t.url)||void 0===o?void 0:o.split("?")[1];t.query=i.default.parse(l);try{const o=n.join(process.cwd(),e,"serverless","pages",a),i=c.default(o);i.getServerSideProps||i.getStaticProps?await i.renderReqToHTML(t,r,void 0,void 0,t.query):i.render?await i.render(t,r):await i.default(t,r)}catch(e){const t=`An unexpected error occurred while processing the request with next.js. (page="${a}")`;console.error(e.stack),r.writeHead(500),r.end(t)}}))})()}return new Promise(((t,r)=>{try{u.listen(e,t)}catch(e){r(e)}}))}},291:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(879)),i=r(622);t.default=function(){const e=process.cwd(),t=i.join(e,"next.config.js");let r;try{r=n.default(t)}catch(e){}return"function"==typeof r&&(r=r("phase-production-build",{})),(null==r?void 0:r.distDir)||".next"}},879:function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const slash_1=__importDefault(__webpack_require__(313));function nonWebpackRequire(modulePath,{ignoreErrors=!1}={}){try{return eval("require")(slash_1.default(modulePath))}catch(e){if(ignoreErrors)return;throw e}}exports.default=nonWebpackRequire},313:e=>{e.exports=e=>{const t=/^\\\\\?\\/.test(e),r=/[^\u0000-\u0080]+/.test(e);return t||r?e:e.replace(/\\/g,"/")}},798:(e,t,r)=>{var o=String.prototype.replace,n=/%20/g,i=r(769),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return String(e)}}},a)},129:(e,t,r)=>{var o=r(261),n=r(235),i=r(798);e.exports={formats:i,parse:n,stringify:o}},235:(e,t,r)=>{var o=r(769),n=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},s=function(e,t,r,o){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,c=r.depth>0&&/(\[[^[\]]*])/.exec(i),s=c?i.slice(0,c.index):i,u=[];if(s){if(!r.plainObjects&&n.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}for(var f=0;r.depth>0&&null!==(c=a.exec(i))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+i.slice(c.index)+"]"),function(e,t,r,o){for(var n=o?t:l(t,r),i=e.length-1;i>=0;--i){var a,c=e[i];if("[]"===c&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var s="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,u=parseInt(s,10);r.parseArrays||""!==s?!isNaN(u)&&c!==s&&String(u)===s&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[])[u]=n:a[s]=n:a={0:n}}n=a}return n}(u,t,r,o)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var r,s={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=u.split(t.delimiter,f),d=-1,y=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?y="utf-8":"utf8=%26%2310003%3B"===p[r]&&(y="iso-8859-1"),d=r,r=p.length);for(r=0;r<p.length;++r)if(r!==d){var h,m,b=p[r],_=b.indexOf("]="),v=-1===_?b.indexOf("="):_+1;-1===v?(h=t.decoder(b,a.decoder,y,"key"),m=t.strictNullHandling?null:""):(h=t.decoder(b.slice(0,v),a.decoder,y,"key"),m=o.maybeMap(l(b.slice(v+1),t),(function(e){return t.decoder(e,a.decoder,y,"value")}))),m&&t.interpretNumericEntities&&"iso-8859-1"===y&&(m=c(m)),b.indexOf("[]=")>-1&&(m=i(m)?[m]:m),n.call(s,h)?s[h]=o.combine(s[h],m):s[h]=m}return s}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(u),d=0;d<p.length;++d){var y=p[d],h=s(y,u[y],r,"string"==typeof e);f=o.merge(f,h,r)}return o.compact(f)}},261:(e,t,r)=>{var o=r(769),n=r(798),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,s=function(e,t){l.apply(e,c(t)?t:[t])},u=Date.prototype.toISOString,f=n.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:f,formatter:n.formatters[f],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,n,i,a,l,u,f,d,y,h,m,b){var _,v=t;if("function"==typeof u?v=u(r,v):v instanceof Date?v=y(v):"comma"===n&&c(v)&&(v=o.maybeMap(v,(function(e){return e instanceof Date?y(e):e})).join(",")),null===v){if(i)return l&&!m?l(r,p.encoder,b,"key"):r;v=""}if("string"==typeof(_=v)||"number"==typeof _||"boolean"==typeof _||"symbol"==typeof _||"bigint"==typeof _||o.isBuffer(v))return l?[h(m?r:l(r,p.encoder,b,"key"))+"="+h(l(v,p.encoder,b,"value"))]:[h(r)+"="+h(String(v))];var g,w=[];if(void 0===v)return w;if(c(u))g=u;else{var j=Object.keys(v);g=f?j.sort(f):j}for(var x=0;x<g.length;++x){var O=g[x],k=v[O];if(!a||null!==k){var P=c(v)?"function"==typeof n?n(r,O):r:r+(d?"."+O:"["+O+"]");s(w,e(k,P,n,i,a,l,u,f,d,y,h,m,b))}}return w};e.exports=function(e,t){var r,o=e,l=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!i.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],a=p.filter;return("function"==typeof e.filter||c(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof l.filter?o=(0,l.filter)("",o):c(l.filter)&&(r=l.filter);var u,f=[];if("object"!=typeof o||null===o)return"";u=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var y=a[u];r||(r=Object.keys(o)),l.sort&&r.sort(l.sort);for(var h=0;h<r.length;++h){var m=r[h];l.skipNulls&&null===o[m]||s(f,d(o[m],m,y,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var b=f.join(l.delimiter),_=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),b.length>0?_+b:""}},769:e=>{var t=Object.prototype.hasOwnProperty,r=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};e.exports={arrayToObject:n,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],o=[],n=0;n<t.length;++n)for(var i=t[n],a=i.obj[i.prop],c=Object.keys(a),l=0;l<c.length;++l){var s=c[l],u=a[s];"object"==typeof u&&null!==u&&-1===o.indexOf(u)&&(t.push({obj:a,prop:s}),o.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),o=t.obj[t.prop];if(r(o)){for(var n=[],i=0;i<o.length;++i)void 0!==o[i]&&n.push(o[i]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var i="",a=0;a<n.length;++a){var c=n.charCodeAt(a);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?i+=n.charAt(a):c<128?i+=o[c]:c<2048?i+=o[192|c>>6]+o[128|63&c]:c<55296||c>=57344?i+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(a+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(a)),i+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return i},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(r(e)){for(var o=[],n=0;n<e.length;n+=1)o.push(t(e[n]));return o}return t(e)},merge:function e(o,i,a){if(!i)return o;if("object"!=typeof i){if(r(o))o.push(i);else{if(!o||"object"!=typeof o)return[o,i];(a&&(a.plainObjects||a.allowPrototypes)||!t.call(Object.prototype,i))&&(o[i]=!0)}return o}if(!o||"object"!=typeof o)return[o].concat(i);var c=o;return r(o)&&!r(i)&&(c=n(o,a)),r(o)&&r(i)?(i.forEach((function(r,n){if(t.call(o,n)){var i=o[n];i&&"object"==typeof i&&r&&"object"==typeof r?o[n]=e(i,r,a):o.push(r)}else o[n]=r})),o):Object.keys(i).reduce((function(r,o){var n=i[o];return t.call(r,o)?r[o]=e(r[o],n,a):r[o]=n,r}),c)}}},605:e=>{e.exports=require("http")},622:e=>{e.exports=require("path")}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}return __webpack_require__(710)})()}));