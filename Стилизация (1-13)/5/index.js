'use strict'

document.getElementById("btn").addEventListener("click", function() {
    let elem = document.getElementById("elem");
    let numWidth = parseInt(elem.style.width); 
    let numHeight = parseInt(elem.style.height); 
    let newWidth = numWidth * 1.1; 
    let newHeight = numHeight * 1.1; 
    elem.style.width = newWidth + "px";
    elem.style.height = newHeight + "px";
});