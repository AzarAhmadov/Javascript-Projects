const progress_line = document.querySelector('#progress-line')
const increase_btn = document.querySelector('#increase')
const decrease_btn = document.querySelector('#decrease')
const progress_list = document.querySelectorAll('.progress-list')
const progress_number = document.querySelectorAll('.progress_number')

let currentValue = 0

const updateButtonState = () => {
    if (currentValue === 0) {
        decrease_btn.classList.add('disabled');
    } else if (currentValue === 100) {
        increase_btn.classList.add('disabled');
    } else {
        decrease_btn.classList.remove('disabled');
        increase_btn.classList.remove('disabled');
    }
};

const Increase = () => {
    if (currentValue < 100) {
        currentValue += 25;
        const ProgressValue = currentValue / 25;
        progress_list[ProgressValue].classList.add('active');
        progress_list[ProgressValue].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>`;
        progress_line.style.width = currentValue + '%';
        updateButtonState();
    }
};

const Decrease = () => {
    if (currentValue > 0) {
        const ProgressValue = currentValue / 25;
        progress_list[ProgressValue].classList.remove('active');
        progress_list[ProgressValue].innerHTML = ProgressValue + 1;
        currentValue -= 25;
        progress_line.style.width = currentValue + '%';
        updateButtonState();
    }
};

updateButtonState()

increase_btn.addEventListener('click', Increase)
decrease_btn.addEventListener('click', Decrease)