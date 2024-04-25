'use strict'

let test = [
    [1, 2, 3],
    {a: 1, b: 2, c: 3},
    [3, 4, 5],
    {x: 1, y: 2, z: 3}
];

test.forEach(elem => {
    if (Array.isArray(elem)) {
        console.log("Элемент", elem, "является массивом.");
    } else {
        console.log("Элемент", elem, "не является массивом.");
    }
});