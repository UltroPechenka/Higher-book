'use strict'

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { x: 4, y: 5, z: 6 };


const sumSymbol = Symbol('sum');

obj1[sumSymbol] = function() {
  let sum = 0;
  for (let key in this) {
    if (typeof this[key] === 'number') {
      sum += this[key];
    }
  }
  return sum;
};

obj2[sumSymbol] = function() {
  let sum = 0;
  for (let key in this) {
    if (typeof this[key] === 'number') {
      sum += this[key];
    }
  }
  return sum;
};


console.log(obj1[sumSymbol]()); 
console.log(obj2[sumSymbol]()); 
