'use strict'

let obj = {a: 1, b: 2, c: 3};

let sym = Symbol();
obj[sym] = 'privet';

console.log(obj[sym]);