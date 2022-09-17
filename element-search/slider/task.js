const slides = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

let numSld = 0;

next.onclick = function() {

    // numSld++;
    // for (let slide of Array.from(slides)) {
    //     slide.className = 'slider__item';
    // }

    // if (numSld >= slides.length) {
    //     numSld = 0;
    // }

    // slides[numSld].className = 'slider__item slider__item_active';

    changeSlade('next');
}

prev.onclick = function() {

    // numSld--;
    
    // for (let slide of Array.from(slides)) {
    //     slide.className = 'slider__item';
    // }

    // if (numSld < 0) {
    //     numSld = slides.length - 1;
    // }

    // slides[numSld].className = 'slider__item slider__item_active';

    changeSlade('prev');
}

function changeSlade(direction) {
    

    if (direction == 'next') {
        numSld++;
        
        for (let slide of Array.from(slides)) {
            slide.className = 'slider__item';
        }

        if (numSld >= slides.length) {
            numSld = 0;
        } 
        
    } else {
        numSld--;
        
        for (let slide of Array.from(slides)) {
            slide.className = 'slider__item';
        }

        if (numSld < 0) {
            numSld = slides.length - 1;
        }
    }
    
    
    slides[numSld].className = 'slider__item slider__item_active';
}