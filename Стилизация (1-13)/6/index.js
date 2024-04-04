'use strict'

document.getElementById('btn').addEventListener('click', function() {
    let elem = document.getElementById('elem');
    let style = elem.style;
    let borderWidth = parseInt(style.borderWidth);
    let borderStyle = style.borderStyle;
    let borderColor = style.borderColor;

    alert("Толщина границы: " + borderWidth + "px\nТип границы: " + borderStyle + "\nЦвет границы: " + borderColor);
});