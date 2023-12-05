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

let xPos = 10;
let yPos = 150;
let grav = 1;

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipeUp, 100, 0);
    ctx.drawImage(pipeBottom, 100, 0 + pipeUp.height + gap);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    requestAnimationFrame(draw)
}

pipeBottom.onload = draw;