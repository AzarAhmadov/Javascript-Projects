const next_button = document.querySelector('#next')
const prev_button = document.querySelector('#prev')
const sliders = document.querySelectorAll('.slide')

// Start index of 0
let index = 0

// Show index 0 element
const showSlide = (index) => {
    sliders.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (idx === index) {
            slide.classList.add('active');
        }
    });
};

// Function Call
showSlide(index)

// Increasing
const Next = () => {
    index++;
    if (index > sliders.length - 1) {
        index = 0;
    }
    showSlide(index)
}

// Decreasing
const Prev = () => {
    index--;
    if (index < 0) {
        index = sliders.length - 1;
    }
    showSlide(index)
}

next_button.addEventListener('click', Next)
prev_button.addEventListener('click', Prev)