'use strict'

let symbolKey = Symbol('pop'); 

let obj = {
  [pop]: 'notpop',
  key: 'keey'
};

for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ': ' + obj[key]);
    }
  }