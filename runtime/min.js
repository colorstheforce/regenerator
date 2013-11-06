/**
 * Copyright (c) 2013, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
!function(t){function e(t,e){return new r(t,e||null)}function n(){}function r(t,e){function n(){d=h;do var n=t.call(e,f);while(n===l);return d=f.done?s:c,{value:n,done:f.done}}function r(){if(d===h)throw new Error("Generator is already running");if(d===s)throw new Error("Generator has already finished")}function o(t,e){var n=f.delegate;if(n){try{var r=n.generator[t](e)}catch(i){return f.delegate=null,u.throw(i)}if(r){if(!r.done)return r;f[n.resultName]=r.value,f.next=n.nextLoc}f.delegate=null}}var u=this,f=new i,d=a;u.next=function(t){r();var e=o("next",t);if(e)return e;for(d===c&&(f.sent=t);;)try{return n()}catch(i){f.dispatchException(i)}},u.throw=function(t){r();var e=o("throw",t);if(e)return e;if(d===a)throw d=s,t;for(;;){f.dispatchException(t);try{return n()}catch(i){t=i}}}}function i(){this.reset()}var o=Object.prototype.hasOwnProperty;if(!t.wrapGenerator){t.wrapGenerator=e,"undefined"!=typeof exports&&(exports.wrapGenerator=e);var a="suspendedStart",c="suspendedYield",h="executing",s="completed",l={};e.mark=function(t){return t.constructor=n,t},e.isGeneratorFunction=function(t){var e=t&&t.constructor;return e?"GeneratorFunction"===e.name:!1},i.prototype={constructor:i,reset:function(){this.next=0,this.sent=void 0,this.tryStack=[],this.done=!1,this.delegate=null;for(var t,e=0;o.call(this,t="t"+e)||20>e;++e)this[t]=null},stop:function(){if(this.done=!0,o.call(this,"thrown")){var t=this.thrown;throw delete this.thrown,t}return this.rval},keys:function(t){return Object.keys(t).reverse()},pushTry:function(t,e,n){e&&this.tryStack.push({finallyLoc:e,finallyTempVar:n}),t&&this.tryStack.push({catchLoc:t})},popCatch:function(t){var e=this.tryStack.length-1,n=this.tryStack[e];n&&n.catchLoc===t&&(this.tryStack.length=e)},popFinally:function(t){var e=this.tryStack.length-1,n=this.tryStack[e];n&&o.call(n,"finallyLoc")||(n=this.tryStack[--e]),n&&n.finallyLoc===t&&(this.tryStack.length=e)},dispatchException:function(t){var e=[],n=!1;if(this.done)throw t;this.thrown=t,this.next="end";for(var r=this.tryStack.length-1;r>=0;--r){var i=this.tryStack[r];if(i.catchLoc){this.next=i.catchLoc,n=!0;break}i.finallyLoc&&(e.push(i),n=!0)}for(;i=e.pop();)this[i.finallyTempVar]=this.next,this.next=i.finallyLoc},delegateYield:function(t,e,n){var r=t.next(this.sent);return r.done?(this.delegate=null,this[e]=r.value,this.next=n,l):(this.delegate={generator:t,resultName:e,nextLoc:n},r.value)}}}}(Function("return this")());