let currentH = document.getElementById("hour");
let currentM = document.getElementById("min");
let currentS = document.getElementById("seconds");
let meri = document.getElementById("ampm");

function timer() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentH.innerText = h;
    currentM.innerText = m;
    currentS.innerText = s;
    meri.innerHTML = ampm;

    setTimeout(() => {
        timer();
    }, 1000);
}
timer();

//_______________________________________________________________________________
//////////////////////////////////////////////////////////////////////////////////
//_______________________________________________________________________________
let num = 1;
while (num < 100) {
    let imgUrl = `https://kleo09800.github.io/hosted-assets/img${num}.png`;
    num++;
    $.ajax(imgUrl, {
        success: function () {
            $("#practice-container").
                append(`<div class="empty-laptop-container">
        <div class="ex-img" style="background-image:url(${imgUrl});"></div></div>`);
        },
        error: function () {
            return;
        }
    });
}

$("#practice-container").on("click", ".empty-laptop-container", function () {
    location.href = "https://codepen.io/kleo09800/pen/ExLemQX";
});
