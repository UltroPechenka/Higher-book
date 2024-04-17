'use strict'

let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

for (let values of map.values()) {
    console.log(values);
  }