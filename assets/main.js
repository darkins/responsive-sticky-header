// Sticky responsive header
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger-on");
const nav = document.querySelector(".menu");
let hamburgerOpen = false;

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

hamburger.addEventListener("click", function () {
    if (!hamburgerOpen) {
        nav.classList.toggle("show-nav");
        hamburger.classList.toggle("hamburger-off");
    } else {
        nav.classList.remove("show-nav");
        hamburger.classList.remove("show-nav");
        hamburgerOpen = false;
    }
});