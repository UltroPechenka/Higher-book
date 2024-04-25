'use strict'

let sym1 = Symbol.for('test1');
let sym2 = Symbol.for('test2');

let name1 = Symbol.keyFor(sym1);
let name2 = Symbol.keyFor(sym2);

console.log(name1); 
console.log(name2); 