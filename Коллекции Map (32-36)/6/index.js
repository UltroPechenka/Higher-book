'use strict'


let inputs = document.querySelectorAll('.input');

let enteredNumbers = [];

inputs.forEach(input => {

  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      let number = parseFloat(this.value);
      if (!isNaN(number)) {
        enteredNumbers.push(number); 
        this.value = '';
      }
    }
  });

  input.addEventListener('blur', function() {
    console.log(enteredNumbers);
  });
});
