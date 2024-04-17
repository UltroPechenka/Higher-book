'use strict'

let obj1 = { id: 1, name: 'John' };
let obj2 = { id: 2, name: 'Alice' };
let obj3 = { id: 3, name: 'Bob' };

let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];
let array3 = ['x', 'y', 'z'];

let map = new Map();

map.set(obj1, array1);
map.set(obj2, array2);
map.set(obj3, array3);

console.log(map);