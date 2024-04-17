'use strict'

let btn = document.getElementById("btn");

    btn.addEventListener("click", function(){

    let w = document.documentElement.clientWidth;  
    let h = document.documentElement.clientHeight;

    alert("Ширина окна: " + w + "px, Высота окна: " + h + "px");
    });

    