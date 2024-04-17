'use strict'

let btn = document.getElementById("btn");

    btn.addEventListener("click", function(){

    let verticalScroll = document.body.scrollHeight > window.innerHeight;

    if (verticalScroll) {
        alert("Вертикальная прокрутка есть");
    } else {
        alert("Вертикальная прокрутка отсутствует");
    }
});



