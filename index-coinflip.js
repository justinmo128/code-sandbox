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
