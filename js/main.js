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
let ourSkills = document.querySelector("#Skills");
let spans_Skills = document.querySelectorAll(".the-progress span");
let numbers = document.querySelectorAll(".stats .number");
let numSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {

    if (window.pageYOffset >= 1200) {
        scrollUpBtn.style.display = "block";
    }
    if (window.scrollY >= ourSkills.offsetTop - 300) {

        spans_Skills.forEach(s => {

            s.style.width = s.dataset.width
        })
    }
    if (window.scrollY >= numSection.offsetTop - 400) {

        if (!started) {
            numbers.forEach((num) => startCount(num));
        }

        started = true;

    }
}

scrollUpBtn.onclick = function () {

    window.scrollTo(0, 0);
}


//
//





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

let countDownDate = new Date("Apr 27, 2023 23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60)

    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

    if (dateDiff < 0) {
        days = 00;
        hours = 00;
        minutes = 00;
        seconds = 00;
    }

    document.querySelector(".events .unit .days").innerHTML = days;
    document.querySelector(".events .unit .hours").innerHTML = hours;
    document.querySelector(".events .unit .minutes").innerHTML = minutes;
    document.querySelector(".events .unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);