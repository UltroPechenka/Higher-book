'use strict'

let btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        
        console.log(scrollHeight);
    });

