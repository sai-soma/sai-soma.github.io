let images = document.querySelectorAll("img");
let resetBtn = document.querySelector("#reset");
let verifyBtn = document.querySelector("#verify");
let output = document.querySelector("#output")
let sixthimg = document.querySelector("#image");

resetBtn.style.display = "none";
verifyBtn.style.display = "none";

let clickedTimes = 0;
let clickArray = [];

let ran = Math.floor(Math.random() * 5);
sixthimg.innerHTML = `<img src=${images[ran].src}>`;
images = document.querySelectorAll("img");

images.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        elem.style.border="2px solid black";
        clickedTimes = clickedTimes + 1;
        if (clickedTimes == 2) {
            console.log(index);
            clickArray.push(elem.src)
            resetBtn.style.display = "none";
            verifyBtn.style.display = "";
            console.log(clickArray)
        }
        if (clickedTimes == 1) {
            clickArray.push(elem.src)
            console.log(index)
            resetBtn.style.display = "";
        }
        if (clickedTimes > 2) {
            alert("You Can only select 2 images");
            images.forEach(img => {
                img.style.border = "solid 2px red";
            });
            output.innerHTML = "<h2>Please Reset and Click only 2 Images to verify</h2>"
            resetBtn.style.display = "";
            verifyBtn.style.display = "none";

        }
    })
})

function reset() {
    resetBtn.style.display = "none";
    clickedTimes = 0;
    clickArray = [];
    images.forEach(img => {
        img.style.border = "";
    });
    output.innerHTML = "";
}

console.log(clickArray)

function check() {
    let str = ``;
    if (clickArray[0] == clickArray[1]) {

        str = str + "<h2 style='color:darkgreen;text-shadow: 5px 5px 10px #00FF00;'>You are a human. Congratulations!</h2>";
    }
    else {
        str = str + "<h2 style='color:red'>We can't verify you as a human.</h2>"
    }
    output.innerHTML = str+`<span style='font-size:50px'>&#128175;</span>`;
}