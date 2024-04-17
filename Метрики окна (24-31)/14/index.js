'use strict'

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
});