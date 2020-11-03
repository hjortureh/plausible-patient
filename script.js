
let slideshow = document.querySelector('.slideshow')
let slides = document.querySelectorAll('.slide')
let prevButton = document.querySelector('.button.previous')
let nextButton = document.querySelector('.button.next')

prevButton.addEventListener('click', onPrevClick);
nextButton.addEventListener('click', onNextClick);

window.addEventListener('load', onLoad);
function onLoad() {
    slides[0].classList.add('active')
}

//document.body.classList.add('loaded');

let currentIndex = 0;

function onPrevClick() {
    if (currentIndex > 0) {
        let prevousIndex = currentIndex;
        currentIndex = currentIndex - 1;
        switchSlide(prevousIndex);
    }
}

function onNextClick() {
    if ((currentIndex+1) < slides.length) {
        let previousIndex = currentIndex;
        currentIndex = currentIndex + 1;
        switchSlide(previousIndex);
    }
}

function switchSlide(previousIndex) {
    // switch active slide
    slides[previousIndex].classList.remove('active')
    slides[currentIndex].classList.add('active')

    // move new slide into viewport
    translateValue = currentIndex * slideshow.clientWidth * -1;
    slideshow.style.transform = "translateX(" + translateValue + "px)";
}
