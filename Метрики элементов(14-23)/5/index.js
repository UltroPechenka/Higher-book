'use strict'

let elem = document.querySelector('#elem');

let btn = document.getElementById('btn')

btn.addEventListener('click', function() {

    let scrolTop = elem.scrollTop;
    let scrolLeft = elem.scrollLeft;
  
    console.log('Vertical Scroll:', scrolTop, 'px');
    console.log('Horizontal Scroll:', scrolLeft, 'px');
  });

  