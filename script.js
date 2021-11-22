let slider = document.querySelector(".faq-slider__wrapper"),
button = slider.querySelector(".faq-slider__slider-button"),
slides = slider.querySelectorAll(".faq-slider__item"),
index = 3;


function sliderMove() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }  
    slides[index].classList.add('show');
    slides[index - 1].classList.add('show');
    slides[index - 2].classList.add('show');
    slides[index - 3].classList.add('show');
index++;
if (index === slides.length) {
    index = 3;
    }
}

button.addEventListener("click", sliderMove);