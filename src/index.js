/*import "./style.css";

let sectionBox = document.querySelectorAll('.section-box');

let randomHue = () => Math.floor(Math.random() * 360);
let randomValue = () => Math.floor(Math.random() * 100);

setInterval(() => {
    let hue = randomHue();
    let saturation = randomValue();

    sectionBox[0].style.background = `hsl(${hue}, ${saturation}%, 77%)`;
    sectionBox[4].style.background = `hsl(${hue}, ${saturation}%, 77%)`;
}, 1000);



function scrollSmooth(){
    let top = sectionBox[1].getBoundingClientRect().top;
    window.scrollBy(0, top);
}

let btn_title = document.querySelector('.btn-title');
btn_title.addEventListener('click', scrollSmooth, false);*/


import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App";

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);