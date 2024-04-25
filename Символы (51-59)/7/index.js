'use strict'

let arr = [1, 2, 3];

arr.push(4, 5, 6);

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray(arr)); 
