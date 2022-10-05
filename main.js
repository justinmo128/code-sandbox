document.getElementById("coinflip").addEventListener("click", flipACoin)
function flipACoin() {
    let num = Math.floor(Math.random() * 2);
    let coin;

    if (num == 0) {
        coin = "heads";
    } else {
        coin = "tails";
    }

    document.getElementById("flip-out").innerHTML = coin;
}

document.getElementById("randomcolor").addEventListener("click", colorGen)
function colorGen() {
    let boxes = document.getElementsByClassName("grid-item")

    for (let i = 0; i < boxes.length; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        boxes[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

document.getElementById("judge").addEventListener("click", judge)

let judgePrev0 = 0;
let judgePrev1 = 0;
function judge() {
    // Get number from 1 to 9
    let judgeNext = Math.floor(Math.random() * 9);
    judgeNext++;

    // Check if the number generated is different from the previous two
    if (judgeNext != judgePrev0 && judgeNext != judgePrev1) {
        // Set innerHTML
        document.getElementById("judge-out").innerHTML = `${judgeNext}`;
        // "Push back" the previous values
        judgePrev0 = judgePrev1;
        judgePrev1 = judgeNext;
    } else {
        judge();
    }
}

document.getElementById("command-selection").addEventListener("click", commandSelection);

let cmd1 = document.getElementById("cmd1");
let cmd2 = document.getElementById("cmd2");
let cmd3 = document.getElementById("cmd3");
let cmd4 = document.getElementById("cmd4");

function commandSelection() {
    let commands = [];
    commands[0] = Math.floor(Math.random() * 21);
    commands[1] = Math.floor(Math.random() * 21);
    commands[2] = Math.floor(Math.random() * 21);
    commands[3] = Math.floor(Math.random() * 21);
    if (notEqual(commands)) {
        cmd1.innerHTML = `${commands[0]}`;
        cmd2.innerHTML = `${commands[1]}`;
        cmd3.innerHTML = `${commands[2]}`;
        cmd4.innerHTML = `${commands[3]}`;
    } else {
        commandSelection();
    }
}

function notEqual(array) {
    if (array[0] != array[1] && array[0] != array[2] && array[0] != array[3] && array[1] != array[2] && array[1] != array[3] && array[2] != array[3]) {
        return true;
    } else {
        return false;
    }
  }