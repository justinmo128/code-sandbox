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