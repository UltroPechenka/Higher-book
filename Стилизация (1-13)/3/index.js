'use strict'

document.getElementById("btn").addEventListener("click", function() {
    let elem = document.getElementById("elem");
    let fontSize = elem.style.fontSize; 
    let noneFontSize = parseInt(fontSize); 
    alert("Размер шрифта: " + noneFontSize);
});
