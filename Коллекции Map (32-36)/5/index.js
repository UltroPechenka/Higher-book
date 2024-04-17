'use strict'

let inputs = document.querySelectorAll('.input');

let inputMap = new Map();

inputs.forEach((input, index) => {
  inputMap.set(input, index + 1); 
});

inputs.forEach(input => {
  input.addEventListener('click', function() {
    
    this.value = inputMap.get(this);
  });
});
