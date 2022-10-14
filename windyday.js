let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let cloud1x = 130;
let cloud1y = 120;
let cloud2x = 170;
let cloud2y = 100;
let cloud1RandDir = Math.random();
let cloud2RandDir = Math.random();
let cloud2RandSide = Math.random();
let cloud1RandSide = Math.random();
let cloudImg = document.getElementById("cloudImg");

requestAnimationFrame(windyDay)
function windyDay() {
    // UPDATE
    // Animate cloud 1
    if (cloud1RandDir < 0.5) {
        cloud1x--;
    } else {
        cloud1x++;
    }
    // Animate cloud 2
    if (cloud2RandDir < 0.5) {
        cloud2x--;
    } else {
        cloud2x++;
    }

    // If cloud goes off left side of canvas, teleport to right side at random height
    if (cloud1x + 100 < 0 || cloud1x > 400) {
        if (cloud1RandSide < 0.5) {
            cloud1x = cnv.width;
        } else {
            cloud1x = -100;
        }
        cloud1y = Math.random() * 200;
        cloud1RandDir = Math.random();
        cloud1RandSide = Math.random();
    }
    if (cloud2x + 100 < 0 || cloud2x > 400) {
        if (cloud2RandSide < 0.5) {
            cloud2x = cnv.width;
        } else {
            cloud2x = -100;
        }
        cloud2x = cnv.width;
        cloud2y = Math.random() * 200;
        cloud2RandDir = Math.random();
        cloud2RandSide = Math.random();
    }

    // DRAW
    // Blue Background
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Green Grass
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100);

    // Draw Clouds
    ctx.drawImage(cloudImg, cloud1x, cloud1y); // Cloud 1
    ctx.drawImage(cloudImg, cloud2x, cloud2y); // Cloud 2
    

    // LOOP
    requestAnimationFrame(windyDay);
}