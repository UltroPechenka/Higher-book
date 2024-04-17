'use strict'

let btn = document.getElementById("btn");

    btn.addEventListener("click", function(){

    let horizontalScroll = document.body.scrollWidth > window.innerWidth;

    if (horizontalScroll) {
        alert("Горизонтальная прокрутка есть");
    } else {
        alert("Горизонтальная прокрутка отсутствует");
    }
});



