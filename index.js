let randomNum1 = Math.floor(Math.random()*6 + 1);
let randomNum2 = Math.floor(Math.random()*6 + 1);

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

img1.setAttribute("src", "images/dice" + randomNum1 + ".png");
img2.setAttribute("src", "images/dice" + randomNum2 + ".png");
