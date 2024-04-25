'use strict'

document.addEventListener("DOMContentLoaded", function() {

    let arr = document.querySelectorAll('p');

    // Способ 1: 
    let arrfrm = Array.from(arr);
    console.log("Массив, полученный первым способом:", arrfrm);

    // Способ 2: 
    let arrm = [...arr];
    console.log("Массив, полученный вторым способом:", arrm);

    // Способ 3:
    let arrarr = [];
    for (let elem of arr) {
        arrarr.push(elem);
    }
    console.log("Массив, полученный третьим способом:", arrarr);
});