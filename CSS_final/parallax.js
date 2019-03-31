'use strict';

const html = document.querySelector("html");
const hiiri = document.querySelector("#mouse");
const hiiriC = document.querySelector("#mouse-center");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

const centerX = html.clientWidth / 2;
const centerY = html.clientHeight / 2;


html.addEventListener("mousemove", (evt) => {
    evt.preventDefault();
    let x = evt.clientX;
    let y = evt.clientY;

    let centX = centerX - x;
    let centY = centerY - y;
    hiiri.innerHTML = "From top left: X: " + x + " Y: " + y;
    hiiriC.innerHTML = "From Center: X: " + centX + " Y: " + centY;

    div1.style.transform = 'translateX(' + centX / 100 + '%) translateY(' + centY / 100 + '%)';
    div2.style.transform = 'translateX(' + centX / 500 + '%) translateY(' + centY / 500 + '%)';
    div3.style.transform = 'translateX(' + x / 5 + '%) translateY(' + y / 10 + '%)';
});
