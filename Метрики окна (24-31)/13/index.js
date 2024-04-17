'use strict'

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});