'use strict'

let set = new Set([1, 2, 3, 4, 5]);

let sum = 0;

for (const num of set) {
  sum += num;
}

console.log("Сумма элементов коллекции:", sum);
