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

let judgePrev0 = 0;
let judgePrev1 = 0;

document.getElementById("judge").addEventListener("click", judge)
function judge() {
    // Get number from 1 to 9
    let judgeNext = Math.floor(Math.random() * 9);
    judgeNext++;

    // Check if number generated is same as previous two generated
    if (judgeNext != judgePrev0 && judgeNext != judgePrev1) {
        // Set innerHTML
        document.getElementById("judge-out").innerHTML = `${judgeNext}`;
        // "Push back" the value
        judgePrev0 = judgePrev1;
        judgePrev1 = judgeNext;
    } else {
        // Recursion moment
        judge();
    }
}