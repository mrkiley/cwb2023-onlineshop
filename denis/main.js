const slideList = Array.from(document.querySelector("#testimonials .slider").children);

// Start with random slide as current.
let currentSlide = getRandomInt(slideList.length);

// Assign initial slide classes.
addSlideClasses(slideList);

// Define a globally accessible variable for storing a value to stop slider via clearInterval().
let stopSlider;

window.addEventListener("load", () => {
    startSlider(slideList);
})

function startSlider(slides) {
    stopSlider = setInterval(() => {nextSlide(slides)}, 10_000);
}

function removeSlideClasses(slides) {
    slides.at(currentSlide - 1).classList.remove("prev");
    slides.at(currentSlide).classList.remove("current");
    slides.at(currentSlide + 1 - slides.length).classList.remove("next");
}

function addSlideClasses(slides) {
    slides.at(currentSlide - 1).classList.add("prev");
    slides.at(currentSlide).classList.add("current");
    slides.at(currentSlide + 1 - slideList.length).classList.add("next");
}

function nextSlide(slides) {
    removeSlideClasses(slides);
    if (++currentSlide === slides.length) currentSlide = 0;
    addSlideClasses(slides);
}

function prevSlide(slides) {
    removeSlideClasses(slides);
    if (--currentSlide < 0) currentSlide = slides.length - 1;
    addSlideClasses(slides);
}

// Returns random number from 0 to max.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Buttons for manual slide change.
const backSliderButton = document.querySelector(".back-button");
const forwardSliderButton = document.querySelector(".forward-button");

backSliderButton.addEventListener("click", () => {
    clearInterval(stopSlider);
    prevSlide(slideList);
    startSlider(slideList);
})

forwardSliderButton.addEventListener("click", () => {
    clearInterval(stopSlider);
    nextSlide(slideList);
    startSlider(slideList);
})