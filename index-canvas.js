// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

{/*
<button id="solidTriangle">Solid Triangle</button>
<button id="outlineCircle">Outline Circle</button>
<button id="drawAnImage">Draw an image</button> */}

// Draw filled in rectangle
document.getElementById("solidRect").addEventListener("click", solidRect)
function solidRect() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 60); //(x, y, width, height)
}

// Draw filled in text
document.getElementById("solidText").addEventListener("click", solidText)
function solidText() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "Green";
    ctx.fillText("Canvas Text", 50, 100); //(text, x, y)
}

// Draw outlined text
document.getElementById("outlineText").addEventListener("click", outlineText)
function outlineText() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.font = "36px Times";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "green";
    ctx.strokeText("Canvas Text", 50, 100); //(text, x, y)
}

// Draw a line
document.getElementById("linebtn").addEventListener("click", drawALine)
function drawALine() {
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
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, 2 * Math.PI); //(x, y, radius, startAngle, endAngle, counterclockwise)
    ctx.stroke(); // Draw line
}

// Draw an image
document.getElementById("drawAnImage").addEventListener("click", drawAnImage)
function drawAnImage() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    let htmlImg = document.getElementById("html-logo");
    ctx.drawImage(htmlImg, 0, 0, 600, 400); //(img, x, y, w, h)
}