'use strict'

document.addEventListener("DOMContentLoaded", function() {

    let elems = document.querySelectorAll('p');

    elems = Array.from(elems);

    let midElem = elems.slice(1, -1);

    console.log("Абзацы, кроме первого и последнего:", midElem);
});