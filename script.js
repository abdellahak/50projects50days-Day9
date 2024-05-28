let cat = new Audio("sounds/cat.wav")
let chicken = new Audio("sounds/chicken.wav")
let dog = new Audio("sounds/dog.wav")
let horse = new Audio("sounds/horse.wav")
let cow = new Audio("sounds/cow.wav")
let sheep = new Audio("sounds/sheep.wav")

let sounds = [cat, chicken, dog, horse, cow, sheep];

let btns = document.querySelectorAll('#buttons button');


for(let i =0; i<btns.length; i++){
    btns[i].onclick = function(){
        sounds[i].play();
    }
}