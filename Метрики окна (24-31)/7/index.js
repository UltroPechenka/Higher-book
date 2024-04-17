'use strict'

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let vScroll = document.documentElement.scrollHeight - (window.pageYOffset + window.innerHeight);
    
    alert('Осталось до конца прокрутки: ' + vScroll + 'px');
});