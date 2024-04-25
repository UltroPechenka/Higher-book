'use strict'

// Создаем коллекцию Map
let map = new Map();

// Проверяем наличие ключа Symbol.iterator
let hasIterator = map.has(Symbol.iterator);

console.log(hasIterator); // Выведет: false

let set = new Set();

// Проверяем наличие ключа Symbol.iterator
let hasIterator2 = set.has(Symbol.iterator);

console.log(hasIterator2); // Выведет: true