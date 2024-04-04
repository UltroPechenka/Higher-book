'use strict'

let elem = document.querySelector('#elem');

let btn = document.getElementById('btn')

btn.addEventListener('click', function() {

    let clientWidth = elem.offsetWidth;
    let clientHeight = elem.offsetHeight;
  
    console.log('Client Width:', clientWidth, 'px');
    console.log('Client Height:', clientHeight, 'px');
  });

  