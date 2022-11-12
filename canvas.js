// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

function resetSize() {
    cnv.width = 600;
    cnv.height = 400;
}

{/*
<button id="solidTriangle">Solid Triangle</button>
<button id="outlineCircle">Outline Circle</button>
<button id="drawAnImage">Draw an image</button> */}

// Draw filled in rectangle
document.getElementById("solidRect").addEventListener("click", solidRect)
function solidRect() {
    resetSize();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 60); //(x, y, width, height)
}

// Draw filled in text
document.getElementById("solidText").addEventListener("click", solidText)
function solidText() {
    resetSize();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "Green";
    ctx.fillText("Canvas Text", 50, 100); //(text, x, y)
}

// Draw outlined text
document.getElementById("outlineText").addEventListener("click", outlineText)
function outlineText() {
    resetSize();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.font = "36px Times";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "green";
    ctx.strokeText("Canvas Text", 50, 100); //(text, x, y)
}

// Draw a line
document.getElementById("linebtn").addEventListener("click", drawALine)
function drawALine() {
    resetSize();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(0, 0, 255)";
    ctx.beginPath();
    ctx.moveTo(75, 50); // Start at (x1, y1)
    ctx.lineTo(200, 100); // Go to (x2, y2)
    ctx.stroke(); // Draw line
}

// Draw filled in triangle
document.getElementById("solidTriangle").addEventListener("click", solidTriangle)
function solidTriangle() {
    resetSize();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "#00FF00";
    ctx.beginPath();
    ctx.moveTo(100, 50); // Start at (x1, y1)
    ctx.lineTo(50, 150); // Go to (x2, y2)
    ctx.lineTo(150, 150); // Go to (x3, y3)
    ctx.fill(); // Fill shape
}

// Draw outlined circle
document.getElementById("outlineCircle").addEventListener("click", outlineCircle)
function outlineCircle() {
    resetSize();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, 2 * Math.PI); //(x, y, radius, startAngle, endAngle, counterclockwise), angles are in radians
    ctx.stroke(); // Draw line
}

// Draw an image
document.getElementById("drawAnImage").addEventListener("click", drawAnImage)
function drawAnImage() {
    resetSize();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    let htmlImg = document.getElementById("html-logo");
    ctx.drawImage(htmlImg, 0, 0, 600, 400); //(img, x, y, w, h)
}

// Draw Sunrise Assignment
document.getElementById("sunrise").addEventListener("click", drawSunrise)
function drawSunrise() {
    //Set Canvas Size
    cnv.width = 400;
    cnv.height = 400;
    //Sky
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 400);
    //Sun
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(200, 300, 15, 0, 2 * Math.PI);
    ctx.fill();
    //Grass
    ctx.fillStyle = "#008000";
    ctx.fillRect(0, 300, 400, 100);
    //Clouds
    let cloudImg = document.getElementById("cloudImg");
    ctx.drawImage(cloudImg, 130, 120);
    ctx.drawImage(cloudImg, 170, 100);
}

// Draw Cityscape Assignment
document.getElementById("cityscape").addEventListener("click", drawCityscape)
function drawCityscape() {
    //Set Canvas Size
    cnv.width = 300;
    cnv.height = 650;
    
    // BLUE BACKGROUND
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    
    // DRAW LEFT BUILDING
    ctx.fillStyle = "black";
    // Building Base
    ctx.fillRect(0, 350, 150, 300);
    // Middle Section
    ctx.fillRect(20, 200, 110, 150);
    // Triangle Top
    ctx.beginPath();
    ctx.moveTo(20, 200);
    ctx.lineTo(130, 200);
    ctx.lineTo(130, 100);
    ctx.fill();
    
    // DRAW RIGHT BUILDING
    ctx.fillStyle = "black";
    // Building Base
    ctx.fillRect(150, 100, 150, 550);
    // Medium Top
    ctx.fillRect(170, 40, 110, 60);
    // Small Top
    ctx.fillRect(190, 20, 70, 20);

    // Actual assignment (Draw windows using loops)
    ctx.fillStyle = "white";
    let yVal = 200;
    let xVal = 40;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.fillRect(xVal, yVal, 15, 10)
            yVal += 25
        }
        xVal += 22;
        yVal = 200;
    }
    xVal = 20;
    yVal = 370;
    for (let i = 0; i < 6; i++) {
        ctx.fillRect(xVal, yVal, 110, 25)
        yVal += 45;
    }
    xVal = 170;
    yVal = 120;
    for (let i = 0; i < 5; i++) {
        ctx.fillRect(xVal, yVal, 10, 500)
        xVal += 25;
    }
}

//Animation Basic
let xDraw = 100;
let frameCountDraw = 0;

document.getElementById("draw").addEventListener("click", draw)
function draw() {
    resetSize();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    // UPDATE ELEMENTS ON CANVAS
    frameCountDraw++;

    // Animate if frameCount is less than 120
    // FPS is usually around 60 (so 120 frames == 2 seconds)
    // if (frameCount < 360) {
    //     x++;
    // }

    // Animate if x is less than 400
    if (xDraw < 400) {
        xDraw++;
    }

    // Reset animation if x > 300
    if (xDraw > 300) {
        xDraw = 100;
    }

    // DRAW CANVAS
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

    ctx.fillStyle = "green";
    ctx.fillRect(xDraw, 100, 50, 50); // Rectangle

    // REQUEST ANIMATION FRAME
    requestAnimationFrame(draw);
}

// Animate Sunrise Assignment
let sunY = 300;
let sunRadius = 15;
let sunGreen = 0;
let sunCloud1X = 130;
let sunCloud2X = 170;
let frameCount = 0;

document.getElementById("anim-sunrise").addEventListener("click", resetSunrise)
function resetSunrise() {
    sunY = 300;
    sunRadius = 15;
    sunGreen = 0;
    sunCloud1X = 130;
    sunCloud2X = 170;
    frameCount = 0;
    animSunrise();
}

function animSunrise() {
    frameCount++;
    //Set Canvas Size
    cnv.width = 400;
    cnv.height = 400;
    //Sky
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 400);
    //Sun
    ctx.fillStyle = `rgb(255, ${sunGreen}, 0)`;
    ctx.beginPath();
    ctx.arc(200, sunY, sunRadius, 0, 2 * Math.PI);
    ctx.fill();
    if (frameCount <= 240) {
        sunY--;
        sunRadius += 0.25;
        sunGreen++;
        sunCloud1X--;
        sunCloud2X++;
    }
    //Grass
    ctx.fillStyle = "#008000";
    ctx.fillRect(0, 300, 400, 100);
    //Clouds
    let cloudImg = document.getElementById("cloudImg");
    ctx.drawImage(cloudImg, sunCloud1X, 120);
    ctx.drawImage(cloudImg, sunCloud2X, 100);

    //Request Animation Frame
    if (frameCount <= 240) {
        requestAnimationFrame(animSunrise);
    }
}