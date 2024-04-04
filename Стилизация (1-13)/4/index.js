'use strict'

document.getElementById("btn").addEventListener("click", function() {
    let elem = document.getElementById("elem");
    let numWidth = parseInt(elem.style.width); 
    let numHeight = parseInt(elem.style.height); 
    elem.style.width = (numWidth + 50) + "px"; 
    elem.style.height = (numHeight + 50) + "px"; 
});
