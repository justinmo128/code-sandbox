function startGame2() {
    gameArea2.start();
}

var gameArea2 = {
    canvas : document.createElement("canvas"), //Self Explanatory
    start : () => {
        // In an object method, *this* refers to the object
        this.canvas.width = 480; //Set canvas width
        this.canvas.height = 270; //Set canvas height
        this.context = this.canvas.getContext("2d"); //getContext() is a built-in HTML object, with properties and methods for drawing.
    }
}