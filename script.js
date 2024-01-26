let selector = document.querySelectorAll("div.container");

document.querySelector(".marker").addEventListener("click", () => {
    document.querySelector(".notif").innerHTML = "0";
    for (a of selector) {
        a.style.backgroundColor = "white";
        a.querySelector("div.container p span.dot").style.display = "none";
    }
})

function changeNum() {

    if (document.querySelector(".notif").innerHTML > 0) {
        document.querySelector(".notif").innerHTML = 
        document.querySelector(".notif").innerHTML - 1;
    } 
    else {
        document.querySelector(".notif").innerHTML = 0;
    }
}

function bgChange(b) {
    document.getElementById(b).style.backgroundColor = "white";
}

function displayChange(c) {
    document.querySelector(c).style.display = "none";
}

for (a of selector) {
    let selectId = a.id;
    a.addEventListener("click", () => {
        bgChange(selectId);
        displayChange("#" + didi + " div.container p span.dot");
        changeNum();
    }, { once: true })
}