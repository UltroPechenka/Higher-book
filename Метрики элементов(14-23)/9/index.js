'use strict'

let btn = document.getElementById("btn")
    btn.addEventListener("click", function() {

        let div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.overflow = "scroll";

        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        document.body.remove(div);

        alert("Ширина полосы прокрутки: " + scrollWidth + "px");
    });
