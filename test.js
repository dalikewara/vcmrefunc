"use strict";

const vcmrefunc = require('./app.js');

// REPEAT 1
console.log('REPEAT 1');
var a = 0;
vcmrefunc(null, (repeat) => {
  // console.log('repeated! (' + a + ')');
  console.log('Repeated ' + a);

  if (a == 4) return repeat(false);

  a++;

  repeat();
});

// // REPEAT 2
// console.log('REPEAT 2');
// var b = 0;
// vcmrefunc(2000, (repeat) => {
//   console.log('repeated! (' + b + ')');

//   if (b == 4) return repeat(false);

//   b++;

//   repeat();
// }, () => {
//   console.log('end!');
// });

// // REPEAT 3
// console.log('REPEAT 3');
// var c = 0;
// var customFunction3 = function () {
//   setTimeout(() => {
//     console.log('async');
//   }, 2000);
// };
// vcmrefunc(2000, (repeat) => {
//   console.log('repeated! (' + c + ')');

//   customFunction3();

//   if (c == 4) return repeat(false);

//   c++;

//   repeat();
// }, () => {
//   console.log('end!');
// });

// // REPEAT 4
// console.log('REPEAT 4');
// var d = 0;
// vcmrefunc(null, () => {
//   console.log('repeated! (' + d + ')');

//   console.log('end!');

//   d++;
// });

// // REPEAT 5
// console.log('REPEAT 5');
// var e = 0;
// var customFunction5 = function (callback) {
//   setTimeout(() => {
//     console.log('async');
//     callback();
//   }, 2000);
// };
// vcmrefunc(2000, (repeat) => {
//   console.log('repeated! (' + e + ')');

//   customFunction5(() => {
// 	if (e == 4) return repeat(false);

// 	e++;

// 	repeat();
//   });
// }, () => {
//   console.log('end!');
// });
