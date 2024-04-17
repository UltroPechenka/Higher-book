'use strict'

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let set = new Set([1, 2, 3, 4, 5]);
    let arrayFromSet = [...set];
    console.log(arrayFromSet); 
});

let btn2 = document.getElementById("btn2");

btn.addEventListener("click", function(){
    let set2 = new Set([1, 2, 3, 4, 5]);
    let arrayFromSet2 = Array.from(set2);
    console.log(arrayFromSet2); 
});

