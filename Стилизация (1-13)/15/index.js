'use strict'

let input = document.getElementById('myInput');

    input.addEventListener('blur', function() {
        if (input.value.length <= 9) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
    });