let title = document.querySelector(".title");
let Storypart1 = document.querySelector(".story-opening");
let Buttons = document.querySelector(".buttons");
let Storypart2short = document.querySelector(".option-one-screen");
let Storypart3long = document.querySelector(".option-two-screen");
let Storypart4short = document.querySelector(".option-three-screen");
let Storypart5long = document.querySelector(".option-four-screen");
let Storypart6dead = document.querySelector(".option-one-end");
let Storypart7won = document.querySelector(".option-two-end");
let shortbutdangerousroad = document.querySelector(".option-one");
let longbutsaferoad = document.querySelector(".option-two");
let endGame = document.querySelector(".end-game");
let changeColor = document.querySelector(".changeColor");
let background=document.querySelector(".background");
let body =document.querySelector("body");
endGame.onclick = function() {
    title.innerHTML = "Game over.";
};


changeColor.onkeydown=function(){
 body.style.backgroundColor="green";
};

shortbutdangerousroad.onclick = function() {
    Storypart6dead.style.display = "block";
    shortbutdangerousroad.style.displaye = "none";
};
longbutsaferoad.onclick = function() {
    Storypart7won.style.display = "block";
    longbutsaferoad.style.displaye = "none";
};