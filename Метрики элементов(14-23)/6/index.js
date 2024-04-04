'use strict'

let elem = document.querySelector('#elem');

let btn = document.getElementById('btn')

btn.addEventListener('click', function() {

  let isScrolled = elem.scrollTop > 0;

  if (isScrolled) {
    console.log('Елемент прокручен');
  } else {
    console.log('Елемент не прокручен.');
  }
});
  