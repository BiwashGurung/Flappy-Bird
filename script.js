let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 635;

let bird = new Image();
let backround = new Image();
let road = new Image();
let PipeBottom = new Image();
let PipeUp = new Image();

bird.src = "img/bird.png";
backround.src = "./img/back.png";
road.src = "./img/road.png";
PipeBottom.src = "./img/pipeBottom.png";
PipeUp.src = "./img/pipeUp.png";

let fly_audio = new Audio();
let score_audio = new Audio();