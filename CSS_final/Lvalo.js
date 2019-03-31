'use strict';

const punainen = document.querySelector("#punainen");
const keltainen = document.querySelector("#keltainen");
const vihrea = document.querySelector("#vihreä");

const pun = document.querySelector("#pun");
const kelt = document.querySelector("#kelt");
const vih = document.querySelector("#vih");

const vari = document.querySelector("#vari");
const rgb =document.querySelector("#rgb");

let x = 0;
let y = 0;
let z = 0;
let clickVari;

punainen.addEventListener("click", (evt) => {
    evt.preventDefault();
    x++;
    vari.innerHTML="Punainen";
    pun.innerHTML = "Punaista: " + x;
    clickVari = window.getComputedStyle(punainen, null).getPropertyValue('background-color');
    rgb.innerHTML = clickVari
});

keltainen.addEventListener("click", (evt) => {
    evt.preventDefault();
    y++;
    vari.innerHTML="Keltainen";
    kelt.innerHTML = "Keltaista: " + y;
    clickVari = window.getComputedStyle(keltainen, null).getPropertyValue('background-color');
    rgb.innerHTML = clickVari
});

vihrea.addEventListener("click", (evt) => {
    evt.preventDefault();
    z++;
    vari.innerHTML="Vihreä";
    vih.innerHTML = "Vihreää: " + z;
    clickVari = window.getComputedStyle(vihrea, null).getPropertyValue('background-color');
    rgb.innerHTML = clickVari
});

