let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = './img/bird.png';
bg.src = './img/bird_bg.png';
fg.src = './img/bird_fg.png';
pipeUp.src = './img/pipe.png';
pipeBottom.src = './img/xpipe.png';

// Wait for all images to load before starting the game
let imagesLoaded = 0;
function imagesLoadedCheck() {
    imagesLoaded++;
    if (imagesLoaded === 5) {
        draw(); // Start the game when all images are loaded
    }
}

bird.onload = imagesLoadedCheck;
bg.onload = imagesLoadedCheck;
fg.onload = imagesLoadedCheck;
pipeUp.onload = imagesLoadedCheck;
pipeBottom.onload = imagesLoadedCheck;

let gap = 90;
let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
};

let score = 0;
let xPos = 10;
let yPos = 150;
let grav = 1.5;


function draw() {
    ctx.drawImage(bg, 0, 0);
    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x--;

        if (pipe[i].x === 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * (pipeUp.height - gap)) - pipeUp.height
            });
        }    
        
        if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width && (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height){
            location.reload()    
        }
        if(pipe[i].x == 5){
            score++;
        }
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText(`Счет: ${score}`, 10, cvs.height - 20);
    
    requestAnimationFrame(draw);
}

document.addEventListener('keydown', moveUp);

function moveUp() {
    yPos -= 25;
}
