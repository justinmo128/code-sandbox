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

let spellArray = ["Sizz", "Sizzle", "Bang", "Kaboom", "Snooze", "Flame Slash", "Kacrackle Slash", "Metal Slash", "Hatchet Man", "Whack", "Thwack", "Magic Burst", "Kamikazee", "Psyche Up", "Oomph", "Acceleratle", "Kaclang", "Bounce", "Heal", "Zoom", "Hocus Pocus"];

function commandSelection() {
    let commands = [];
    commands[0] = Math.floor(Math.random() * 21);
    commands[1] = Math.floor(Math.random() * 21);
    if (commands[0] != commands[1]) {
        commands[3] = Math.floor(Math.random() * 21);
        if (commands[3] != commands[0]) {
            commands[4] = Math.floor(Math.random() * 21);
            if (commands[4] != commands[0]) {
                commandName(commands);
            }  else {
                commandSelection();
            }
        } else {
            commandSelection();
        }
    } else {
        commandSelection();
    }
    // commands[2] = Math.floor(Math.random() * 21);
    // commands[3] = Math.floor(Math.random() * 21);
    // if (notEqual(commands)) {
    //     commandName(commands);
    // } else {
    //     commandSelection();
    // }
}

function notEqual(array) {
    if (array[0] != array[1] && array[0] != array[2] && array[0] != array[3] && array[1] != array[2] && array[1] != array[3] && array[2] != array[3]) {
        return true;
    } else {
        return false;
    }
}

function typeCheck(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 1; j < array.length; j++) {
            if (array[i] == 0 && array[j] == 1 || array[i] == 2 && array[j] == 3 || array[i] == 9 && array[j] == 10) {
                return false;
            }
        }
    }
}

function commandName(array) {
    for (i = 0; i < spellArray.length; i++) {
        if (array[0] == i) {
            document.getElementById("cmd1").innerHTML = spellArray[i]
        } else if (array[1] == i) {
            document.getElementById("cmd2").innerHTML = spellArray[i]
        } else if (array[2] == i) {
            document.getElementById("cmd3").innerHTML = spellArray[i]
        } else if (array[3] == i) {
            document.getElementById("cmd4").innerHTML = spellArray[i]
        } 
    }
}