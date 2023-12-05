let cvs = document.getElementById('canvas')
let ctx = cvs.getContext("2d")

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "./img/birg.png"
bg.src = "./img/bird_bg.png"
fg.src = "./img/bird_fg.png"
pipeUp.src = "./img/pipe.png"
pipeBottom.src = "./img/xpipe.png"

let gap = 90;

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipeUp, 100, 0);
    ctx.drawImage(pipeBottom, 90, 0 + pipeUp.height + gap);
}

pipeBottom.onload = draw;