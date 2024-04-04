'use strict'

document.getElementById("btn").addEventListener("click", function() {
    let elem = document.getElementById("elem");
    let width = parseInt(elem.style.width); 
    let height = parseInt(elem.style.height);
    alert("Ширина: " + width + ", Высота: " + height);
});