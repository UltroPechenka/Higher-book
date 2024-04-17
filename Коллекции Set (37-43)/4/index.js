'use strict'

let set = new Set([1, 2, 3]);

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert(set.size);
});

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
    alert(set.has(3));
});

let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function(){
    alert(set.has(4));
});

