const slider = document.querySelector(".slider");
const slideList = Array.from(slider.children);
let activeSlide = getRandomInt(slideList.length);
slideList[activeSlide].classList.add("active");

window.addEventListener("load", () => {
    setInterval(() => {changeSlide(slideList)}, 10_000);
})

function changeSlide(slides) {
    slides.at(activeSlide - 1).classList.remove("past");
    slides.at(activeSlide).classList.remove("active");
    slides.at(activeSlide).classList.add("past");
    if (++activeSlide === slides.length) activeSlide = 0;
    slides.at(activeSlide).classList.add("active");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
