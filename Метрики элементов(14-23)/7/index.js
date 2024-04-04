'use strict'

let elem = document.querySelector('#elem');

let btn = document.getElementById('btn');

  btn.addEventListener('click', function() {

    elem.scrollTop = 100;
    elem.scrollLeft = 50;
  
    });

let btn2 = document.getElementById('btn2');

  btn2.addEventListener('click', function() {

    elem.scrollTop = elem.scrollTop + 50;
    
    });

let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', function() {

      elem.scrollTop = 0;
      elem.scrollLeft = 0;

    });

let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', function() {

      elem.scrollTop = elem.scrollHeight - elem.clientHeight;

    });