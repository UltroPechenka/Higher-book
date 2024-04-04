'use strict'

let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function(paragraph) {
    let number = parseInt(paragraph.textContent);
    
    if (number % 2 === 0) {
        paragraph.style.color = 'red'; 
    } else {
        paragraph.style.color = 'green'; 
    }
});