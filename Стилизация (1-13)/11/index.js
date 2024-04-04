'use strict'

document.getElementById('increaseSize').addEventListener('click', function() {
    let elem = document.getElementById('elem');
    let computedStyle = getComputedStyle(elem);
    let currentWidth = parseInt(computedStyle.width);
    let currentHeight = parseInt(computedStyle.height);

    elem.style.width = (currentWidth * 2) + 'px';
    elem.style.height = (currentHeight * 2) + 'px';
});