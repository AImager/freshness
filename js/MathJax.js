/*
 *  /MathJax.js
 *
 *  Copyright (c) 2009-2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

if(document.getElementById&&document.childNodes&&document.createElement){if(!(window.MathJax&&MathJax.Hub)){if(window.MathJax){window.MathJax={AuthorConfig:window.MathJax}}else{window.MathJax={}}MathJax.isPacked=true;MathJax.version="2.7.4";MathJax.fileversion="2.7.4";MathJax.cdnVersion="2.7.4";MathJax.cdnFileVersions={};(function(d){var b=window[d];if(!b){b=window[d]={}}var e=[];var c=function(f){var g=f.constructor;if(!g){g=function(){}}for(var h in f){if(h!=="constructor"&&f.hasOwnProperty(h)){g[h]=f[h]}}return g};var a=function(){return function(){return arguments.callee.Init.call(this,arguments)}};b.Object=c({constructor:a(),Subclass:function(f,h){var g=a();g.SUPER=this;g.Init=this.Init;g.Subclass=this.Subclass;g.Augment=this.Augment;g.protoFunction=this.protoFunction;g.can=this.can;g.has=this.has;g.isa=this.isa;g.prototype=new this(e);g.prototype.constructor=g;g.Augment(f,h);return g},Init:function(f){var g=this;if(f.length===1&&f[0]===e){return g}if(!(g instanceof f.callee)){g=new f.callee(e)}return g.Init.apply(g,f)||g},Augment:function(f,g){var h;if(f!=null){for(h in f){if(f.hasOwnProperty(h)){this.protoFunction(h,f[h])}}if(f.toString!==this.prototype.toString&&f.toString!=={}.toString){this.protoFunction("toString",f.toString)}}if(g!=null){for(h in g){if(g.hasOwnProperty(h)){this[h]=g[h]}}}return this},protoFunction:function(g,f){this.prototype[g]=f;if(typeof f==="function"){f.SUPER=this.SUPER.prototype}},prototype:{Init:function(){},SUPER:function(f){return f.callee.SUPER},can:function(f){return typeof(this[f])==="function"},has:function(f){return typeof(this[f])!=="undefined"},isa:function(f){return(f instanceof Object)&&(this instanceof f)}},can:function(f){return this.prototype.can.call(this,f)},has:function(f){return this.prototype.has.call(this,f)},isa:function(g){var f=this;while(f){if(f===g){return true}else{f=f.SUPER}}return false},SimpleSUPER:c({constructor:function(f){return this.SimpleSUPER.define(f)},define:function(f){var h={};if(f!=null){for(var g in f){if(f.hasOwnProperty(g)){h[g]=this.wrap(g,f[g])}}if(f.toString!==this.prototype.toString&&f.toString!=={}.toString){h.toString=this.wrap("toString",f.toString)}}return h},wrap:function(i,h){if(typeof(h)!=="function"||!h.toString().match(/\.\s*SUPER\s*\(/)){return h}var g=function(){this.SUPER=g.SUPER[i];try{var f=h.apply(this,arguments)}catch(j){delete this.SUPER;throw j}delete this.SUPER;return f};g.toString=function(){return h.toString.apply(h,arguments)};return g}})});b.Object.isArray=Array.isArray||function(f){return Object.prototype.toString.call(f)==="[object Array]"};b.Object.Array=Array})("MathJax");(function(BASENAME){var BASE=window[BASENAME];if(!BASE){BASE=window[BASENAME]={}}var isArray=BASE.Object.isArray;var CALLBACK=function(data){var cb=function(){return arguments.callee.execute.apply(arguments.callee,