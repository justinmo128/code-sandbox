var myGamePiece;
var myScore;
var myObstacles = [];

function startGame() {
    // Create new canvas
    myGameArea.start();
    // Add GamePieces
    myGamePiece = new component(10, 10, "red", 120, 120);
    // Add obstacles
    myObstacle = new component(10, 200, "green", 300, 120);
    // Bottom limit and top limit
    // bottomLimit = new component(480, 10, "blue", 240, 260);
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
}
  
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        // Top left is (0, 0)
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style.cursor = "none"; //hide the original cursor
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        // Runs updateGameArea 60 times per second (every 16.6ms)
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 1000/60);
        // Mouse controls
        window.addEventListener('mousedown', function (e) {
            myGamePiece.mouseheld = true;
        })
        window.addEventListener('mouseup', function (e) {
            myGamePiece.mouseheld = false;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, y;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
        myGameArea.stop();
        return;
        }
    }
    // Clears canvas
    myGameArea.clear();
    myGameArea.frameNo++;
    // Movement, Bottom limit should be 240
    if (myGamePiece.mouseheld) {
        myGamePiece.speedY = -4;
    } else {
        myGamePiece.speedY = 4;
    }
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 70;
        maxGap = 100;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
      for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x -= 3;
        myObstacles[i].update();
    }
    // Update position
    myGamePiece.newPos();
    // Redraw things
    myGamePiece.update();
}