"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var v=n(function(z,f){
var j=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-assert-is-positive-zerof/dist');function R(e,r,a,q){var t,u,i,s;if(e<=0)return NaN;if(e===1||a===0)return r[q];for(u=q,t=r[u],s=1;s<e;s++){if(u+=a,i=r[u],j(i))return i;(i>t||i===t&&l(i))&&(t=i)}return t}f.exports=R
});var x=n(function(A,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=v();function O(e,r,a){return E(e,r,a,_(e,a))}m.exports=O
});var y=n(function(B,p){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=x(),Z=v();P(c,"ndarray",Z);p.exports=c
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=y(),o,d=g(b(__dirname,"./native.js"));h(d)?o=k:o=d;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
