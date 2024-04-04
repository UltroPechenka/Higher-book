'use strict'

document.querySelector('#btn').addEventListener('click', function() {
    let elem = document.querySelector('#elem');
    let computedStyle = getComputedStyle(elem);
    let width = parseInt(computedStyle.width);
    let height = parseInt(computedStyle.height);

    console.log("Ширина элемента: " + width + "px");
    console.log("Высота элемента: " + height + "px");
});

