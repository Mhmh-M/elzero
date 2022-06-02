// let liActive = document.querySelectorAll(".main-nav li a");

// liActive.forEach(ele => {
//     ele.addEventListener("click", e => {
//         liActive.forEach(e => {
//             e.classList.remove("active");
//         })

//         e.target.classList.add("active")
//     })
// })

let scrollUpBtn = document.querySelector(".scroll-up");

window.onscroll = function () {

    if (window.pageYOffset >= 1200) {
        scrollUpBtn.style.display = "block";
    }
}
window.onscroll = function () {

    console.log(this.pageYOffset);

}

scrollUpBtn.onclick = function () {

    window.scrollTo(0, 0);
}

let ourSkills = document.querySelector(".our-skills");

let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {

    if (window.scrollY >= ourSkills.offsetTop - 300) {

        spans.forEach(s => {

            s.style.width = s.dataset.width
        })
    }
}
//
//

let numbers = document.querySelectorAll(".stats .number");

let numSection = document.querySelector(".stats");

let started = false;

window.onscroll = function () {

    if (window.scrollY >= numSection.offsetTop - 400) {

        if (!started) {
            numbers.forEach((num) => startCount(num));
        }

        started = true;

    }
}


function startCount(ele) {

    let goal = ele.dataset.goal;
    let count = setInterval(() => {

        ele.textContent++;

        if (ele.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}

// 
// 

let countDownDate = new Date("Apr 27, 2022 23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60)

    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

    document.querySelector(".events .unit .days").innerHTML = days;
    document.querySelector(".events .unit .hours").innerHTML = hours;
    document.querySelector(".events .unit .minutes").innerHTML = minutes;
    document.querySelector(".events .unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval();
    }
}, 1000);