/*
Automatic slider function.
Adds classes for previous, current and next slides, and shifts them in a cycle.

Takes arguments:
    slidesContainer
        Element which contains slide elements as direct children.
    changeTime
        Time in seconds between change of slides (5 by default).

Control methods (self-explanatory):
    start()
    stop()
    prev()
    next()
*/

function autoSlider(slidesContainer, changeTime=5) {
    const slides = Array.from(slidesContainer.children);

    // Returns random number from 0 to max.
    function getRandomSlide() {
        return Math.floor(Math.random() * slides.length);
    }

    // Start with random slide as current.
    let currentSlide = getRandomSlide();

    // Assign initial slide classes.
    addSlideClasses();

    // Define local variable for a value to stop slider via clearInterval().
    let stopSlider;

    function removeSlideClasses() {
        slides.at(currentSlide - 1).classList.remove("prev");
        slides.at(currentSlide).classList.remove("current");
        slides.at(currentSlide + 1 - slides.length).classList.remove("next");
    }

    function addSlideClasses() {
        slides.at(currentSlide - 1).classList.add("prev");
        slides.at(currentSlide).classList.add("current");
        slides.at(currentSlide + 1 - slides.length).classList.add("next");
    }

    return {
        start: function() {
            stopSlider = setInterval(() => {this.next(slides)}, changeTime * 1000);
        },
        stop: function() {
            clearInterval(stopSlider);
        },
        prev: function() {
                removeSlideClasses();
                if (--currentSlide < 0) currentSlide = slides.length - 1;
                addSlideClasses();
        },
        next: function() {
            removeSlideClasses();
            if (++currentSlide === slides.length) currentSlide = 0;
            addSlideClasses();
        }
    }
}

let slider = autoSlider(document.querySelector(".slider"));
window.addEventListener("load", () => {
    slider.start();
})

let prevSlideButton = document.querySelector(".back-button");
let nextSlideButton = document.querySelector(".forward-button");

prevSlideButton.addEventListener("click", () => {
    slider.stop();
    slider.prev();
    slider.start();
})

nextSlideButton.addEventListener("click", () => {
    slider.stop();
    slider.next();
    slider.start();
})