'use strict'

document.getElementById('getFontSize').addEventListener('click', function() {
    let elem = document.getElementById('elem');
    let computedStyle = getComputedStyle(elem);
    let fontSize = computedStyle.fontSize;

    alert("Размер шрифта элемента: " + fontSize);
});