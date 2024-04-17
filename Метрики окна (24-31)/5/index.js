'use strict'

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsethscrollHeight, document.documentElement.offsethscrollHeight,
        document.body.clienthscrollHeight, document.documentElement.clienthscrollHeight
    );
    
    console.log(scrollHeight);
});