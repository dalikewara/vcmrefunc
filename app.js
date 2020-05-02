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