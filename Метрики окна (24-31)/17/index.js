'use strict'

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    window.scrollBy({
        top: 300,
        behavior: 'smooth'
    });
});

