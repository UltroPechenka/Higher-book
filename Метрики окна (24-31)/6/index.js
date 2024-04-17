'use strict'

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let scrollTop = window.pageYOffset 
    
    alert('Вертикальная прокрутка: ' + scrollTop + 'px');
});