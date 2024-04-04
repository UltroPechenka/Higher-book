'use strict'

let divs = document.querySelectorAll('div');

divs.forEach(function(div) {
    let paragraph = div.querySelector('p');

    div.addEventListener('click', function() {
        div.classList.toggle('active');
    });
});