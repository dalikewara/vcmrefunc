(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.vcmrefunc = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/**
 * @delay int|str|null required
 * @func function required
 * @callback function optional - run function after repetation is finished
 */
 module.exports = function (delay, func, callback) {
  function executor () {
    var i = Number(delay) || 0;
    var iI = setInterval(function () {
        clearInterval(iI);

        func(function (repeat) {
          if (repeat == false) {
            if (callback) return callback(repeat);
          } else {
            executor();
          }
        });
      }, i);
  };

  executor();
};
},{}]},{},[1])(1)
});
