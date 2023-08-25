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

fly_audio.src = "./audio/fly.mp3";
score_audio.src = "./audio/score.mp3";


let xPos = 10;
let yPos = 150;

let gravity = 0.2;
let velY = 0;

gap = 130;

let pipe = [];

pipe[0] = {
    x: canvas.width,
    y: 0,
};

let scoreText = document.getElementById("score");
let bestScoreText = document.getElementById("best_score");