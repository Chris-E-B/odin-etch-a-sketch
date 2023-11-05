let regular = document.getElementById("regular");
let color = document.getElementById("colorful");
let random = document.getElementById("random");
let eraser = document.getElementById("eraser");


function populate(){

    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = "repeat(16, 1fr)";
    board.style.gridTemplateRows = "repeat(16, 1fr)";

    for (let i = 0; i<256; i++) {
    let square = document.createElement("div");
    board.insertAdjacentElement("beforeend", square)

    regular.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
    })

    let r = Math.floor(Math.random(0, 255) * 255);
    let g = Math.floor(Math.random(0, 255) * 255);
    let b = Math.floor(Math.random(0, 255) * 255);
    let a = Math.random();

    let randcolor = `rgb(${r},${g},${b})`

    let randalpha = `rgba(${r},${g},${b},${a})`

    color.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randcolor;
        })
    })

    random.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randalpha;
        })
    })

    eraser.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        })
    })

    let clear = document.getElementById("clear")

    clear.addEventListener("click", () => {
        square.style.backgroundColor = "white";
    }
    )

    }


}





populate();