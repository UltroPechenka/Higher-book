'use strict'

var input = document.querySelector('myInput');

input.addEventListener('blur', function() {
    if (number < 10) {
        input.classList.type ='green';
    } else if (number >= 10 && number <= 20) {
        input.classList.type = 'yellow';
    } else {
        input.classList.type = 'red';
    }
});