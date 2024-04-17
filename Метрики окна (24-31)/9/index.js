'use strict'

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    document.documentElement.scrollHeight - window.innerHeight - 100;
});