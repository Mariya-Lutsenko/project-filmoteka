!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=s);var o,r=s("b7ONl"),a=s("j1lrD"),c={};window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
o=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,s,o,r=Object.prototype.hasOwnProperty;for(s=1,o=arguments.length;s<o;s+=1)for(i in n=arguments[s])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),s=n(17),o=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var s,o;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,s=n;n>=0&&s<o;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){"use strict";var i=n(29),s=n(30),o=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=o(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),s=n(7),o=n(0),r=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=s({init:function(t,e){this._options=o({},l,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),o=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(o/2),(n=(e=Math.max(t-i,1))+o-1)>s&&(e=Math.max(s-o+1,1),n=s)):(e=(r-1)*o+1,n=r*o,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){"use strict";var i=n(0),s=n(14),o=n(4),r=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;o(t)?(t=t.split(u),l(t,(function(t){i._bindEvent(t,e,n)}))):r(t)&&(n=e,l(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(r(t))return n=e,void l(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function s(){e.apply(n,arguments),i.off(t,s,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,o=e===i.context,r=s&&o;return r&&n._forgetContext(i.context),r}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),s=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?l(t,(function(t,e){i.off(e,t)})):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),s=n(7),o=n(21),r=n(22),a=n(24),c=n(25),l=n(0),u=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},m=["first","prev","next","last"],h=["prev","next"],g=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(m,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(m,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(h,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==s||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,i,s=o(e);a(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),s=n(3),o=n(23);function r(t,e,n,i){function r(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,i){var r=o(t,e),a=!1;s(r,(function(t){return t.handler!==n||(a=!0,!1)})),a||r.push({handler:n,wrappedHandler:i})}(t,e,n,r)}t.exports=function(t,e,n,o){i(e)?s(e.split(/\s+/g),(function(e){r(t,e,n,o)})):s(e,(function(e,i){r(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),s=n(8),o=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?i(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){s(t,c)<0&&c.push(t)})),r(t,c))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),s=n(3),o=n(2),r=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,m=/"|'/g,h=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],o=0,r=0;return s(e,(function(t,s){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(r,s)),r=s+1)})),i.push(e.slice(r)),{exps:n,sourcesInsideIf:i}}(t,e),o=!1,r="";return s(i.exps,(function(t,e){return(o=b(t,n))&&(r=x(i.sourcesInsideIf[e],n)),!o})),r},each:function(t,e,n){var i=b(t,n),r=o(i)?"@index":"@key",c={},l="";return s(i,(function(t,i){c[r]=i,c["@this"]=t,a(n,c),l+=x(e.slice(),n)})),l},with:function(t,e,n){var s=i("as",t),o=t[s+1],r=b(t.slice(0,s),n),c={};return c[o]=r,x(e,a(n,c))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return s.push(t.slice(o)),s};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(m,""):l.test(t)?i=v((n=t.split(u))[0],e)[v(n[1],e)]:p.test(t)?i=v((n=t.split(f))[0],e)[n[1]]:h.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,s,o,a,c=g[t],l=1,u=2,p=e[u];l&&r(p);)0===p.indexOf(t)?l+=1:0===p.indexOf("/"+t)&&(l-=1,i=u),p=e[u+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(s=0,o=i,(a=e.splice(s+1,o-s)).pop(),a),n),e}function b(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,(function(t){i.push(v(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,s,o=1,a=t[o];r(a);)i=(n=a.split(" "))[0],g[i]?(s=y(i,t.splice(o,t.length-o),e),t=t.concat(s)):t[o]=b(n,e),a=t[o+=2];return t.join("")}t.exports=function(t,e){return x(_(t,c),e)}},function(t,e,n){"use strict";var i=n(1),s=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,(function(t,e){s+="&"+e+"="+t})),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},c=o();var l=s("cnUZu"),u=s("2aRDm");function p(t){u.refs.cardList.insertAdjacentHTML("beforeend",function(t=[]){return async function(){if(localStorage.key===d);}(),t.map((t=>{const{id:e,title:n,original_name:i,poster_path:s,genre_ids:o,release_date:r,first_air_date:a}=t;return`<li class="home-card__link" id=${e}>\n\t\t\t\t<div class = "home-card__thumb">\n\t\t\t\t<picture class="home-card__poster">\n\t\t\t\t\t\t  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${s}">\n\t\t\t\t\t\t  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${s}">\n\t\t\t\t\t\t  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${s}" alt="${n}" loading="lazy">\n\t\t\t\t\t  </picture>\n\t\t\t\t  </div>\n\t\t\t\t  <div class="card__content">\n\t\t\t\t  <h2 class="card__title">${n||i}</h2>\n\t\t\t\t  <p class="card__text">${function(t){const e=m.filter((e=>t.includes(e.id))).map((t=>t.name));return e.length>2?`${e[0]}, ${e[1]}, Others`:e.join(", ")}(o)} | ${r?r.slice(0,4):a.slice(0,4)}</p>\n\t\t\t</div>\n\t\t\t\t  </li>`})).join("")}(t))}function f(){u.refs.cardList.innerHTML=""}const d="genres";let m=l.genres;const h={totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!1,usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',currentPage:'<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>'}};u=s("2aRDm");const g=document.querySelector("#tui-pagination-container"),_=new(0,r.default),v=new(t(c))(u.refs.pagination,h),y=v.getCurrentPage();async function b(t){try{_.setPage(t.page),a.spinner.spin(g),f();const e=await _.fetchPopularMovies(y);p(e.results)}catch(t){console.log(t)}a.spinner.stop()}console.log(h),async function(t){try{a.spinner.spin(g);const e=await _.fetchPopularMovies(t);console.log(e),v.reset(e.total_results),u.refs.pagination.classList.remove("pagination-is-hidden");p(e.results)}catch(t){console.log(t)}a.spinner.stop(),v.on("afterMove",b)}(y),s("6pumv");var x=s("dIxxU"),E=s("h6c0i"),P=(a=s("j1lrD"),s("4LMMA")),w=(r=s("b7ONl"),s("ijpk6"));u=s("2aRDm");const M=document.getElementById("foo");function C(t){const e=t.target,n=Number(t.target.dataset.id);t.target.classList.contains("js-add-watched")?(0,P.checkWatchedLocalStorageMovies)(e,n,P.WATCHED_FILM):t.target.classList.contains("js-add-queue")&&(0,P.checkQueuedLocalStorageMovies)(e,n,P.QUEUED_FILM)}function L(){window.removeEventListener("keydown",B),document.removeEventListener("click",I),u.refs.modalFilmBackdrop.classList.add("is-hidden"),u.refs.modalFilm.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function I(t){(t.target.classList.contains("close-modal__btn-text")||t.target.classList.contains("close-modal__btn-inner")||t.target.classList.contains("close-modal__btn-text"))&&L()}function B(t){"Escape"===t.code&&L()}async function T(t){try{a.spinner.spin(M);const e=await x.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}finally{a.spinner.stop()}}function N(t){const e=S(t);return u.refs.modalFilm.insertAdjacentHTML("beforeend",e),t}u.refs.cardFilm.addEventListener("click",(function(t){u.refs.modalFilmBackdrop.classList.remove("is-hidden"),u.refs.modalFilm.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",I),window.addEventListener("keydown",B);const e=t.target.closest(".home-card__link").id;if(!e)return void L();T(e).then((t=>(u.refs.modalFilm.innerHTML="",N(t)))),u.refs.modalFilmBackdrop.classList.contains("is-hidden")||u.refs.modalFilm.addEventListener("click",C);(new(0,r.default)).fetchMoviesTrailers(e).then((t=>{if(console.log(t),0===t.results.length)return;document.querySelector(".modal-film-card-wrapper").remove();const e=(0,w.markupMovieTrailer)(t.results[0].key);u.refs.modalFilm.insertAdjacentHTML("afterbegin",e)})).catch((t=>console.log(t)))})),u.refs.modalFilmBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&L()}));const S=({id:t,title:e,original_title:n,overview:i,poster_path:s,vote_average:o,vote_count:r,popularity:a,genres:c})=>{const l=c.map((t=>t.name)).join(", "),u=(0,P.loadFromLocalStorage)(P.WATCHED_FILM),p=(0,P.loadFromLocalStorage)(P.QUEUED_FILM);let f="ADD TO WATCHED",d="ADD TO QUEUE",m="modal-active",h="modal-active";return u.includes(t)&&(f="REMOVE FROM WATCHED",m=""),p.includes(t)&&(d="REMOVE FROM QUEUE",h=""),`\n  <button\n      type="button"\n      class="modal-film__close-button close-modal__btn"\n    >\n    <div class="close-modal__btn-inner">\n    <span class="close-modal__btn-text">Back\n    </span> </div>\n    </button>\n  <div class="modal-film__card"  id="${t}">\n  <div class="modal-film-card-wrapper">\n  <picture class="modal-film__img>\n  <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${s}">\n  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${s}">\n  <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${s}"  "alt="${e}" loading="lazy"  >\n</picture>\n</div>\n<div class="movie-info">\n  <h2 class="film-title">${e}</h2>\n  <ul class="film-title__list-film">\n  <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${o}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${r}</span> </p> </li>\n  <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${a}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${n}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${l}</p></li>\n \n  </ul>\n  <h3 class="about-title">About</h3>\n  <p class="text-about-movie">${i}</p>\n\n  <ul class="modal-window_list-btn">\n      <li class="modal-window_list-item-btn "><button aria-label="add or remove from watched" class="${m} modal-window__watched-btn js-add-watched" type="button" data-id=${t}>${f}</button></li>\n      <li class="modal-window_list-item-btn "><button aria-label="add or remove from queue" class="${h} modal-window__queued-btn js-add-queue" type="button" data-id=${t}>${d}</button></li>\n    </ul>\n  </div>\n`};s("b7ONl"),s("j1lrD"),s("b3EoS"),s("cnUZu");s("2aRDm");document.querySelector(".registr-btn"),document.querySelector(".modal-window"),document.querySelector(".exitBtnForm"),document.querySelector("body"),document.querySelector(".login-btn"),document.querySelector(".enter-btn"),document.querySelector("[data-content-registr]"),document.querySelector("[data-content-login]"),document.querySelector(".registr-form"),document.querySelector(".login-form");s("4LMMA");r=s("b7ONl"),a=s("j1lrD"),E=s("h6c0i"),u=s("2aRDm");const O=document.getElementById("foo"),k=new(0,r.default);u.refs.formSearch.addEventListener("submit",(function(t){if(t.preventDefault(),k.query=t.currentTarget.elements.searchQuery.value.trim().toLowerCase(),""===k.query)return void E.Notify.info("Search result not successful. Enter the correct movie name and try again.");!async function(){try{a.spinner.spin(O);const t=await k.fetchSearchMovies(),e=t.results;if(console.log(e),p(e),console.log(t),f(),p(e),0===t.total_results)E.Notify.info("Search result not successful. Enter the correct movie name and try again.")}catch(t){E.Notify.info("Search result not successful. Enter the correct movie name and try again.")}finally{a.spinner.stop()}}()})),s("ghI91").btnUp.addEventListener()}();
//# sourceMappingURL=index.93658da2.js.map
