'use strict'

let div = document.getElementById('myDiv');
    let hideButton = document.getElementById('hideButton');
    let showButton = document.getElementById('showButton');

    hideBtn.addEventListener('click', function() {
        div.style.display = 'none';
    });

    showBtn.addEventListener('click', function() {
        div.style.display = '';
    });