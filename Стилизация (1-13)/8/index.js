'use strict'

let div = document.getElementById('myDiv');
let redBtn = document.getElementById('redBtn');
let noneBtn = document.getElementById('noneBtn');

let originalColor = div.style.backgroundColor; 

redBtn.addEventListener('click', function() {
    div.style.backgroundColor = 'red'; 
});

noneBtn.addEventListener('click', function() {
    div.style.backgroundColor = ''; 
});