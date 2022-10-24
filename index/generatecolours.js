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