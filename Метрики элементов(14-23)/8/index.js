'use strict'

let elem = document.querySelector('#elem');

let btn = document.getElementById('btn')

btn.addEventListener('click', function() {

  elem.style.height = elem.scrollHeight + 'px';

  });

  