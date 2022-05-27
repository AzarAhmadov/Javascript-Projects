const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const modal_text = document.querySelector('.modal-text');

modal_text.addEventListener('click', () =>{
    modal.classList.add('active')
})

close.addEventListener('click', () => {
    modal.classList.remove('active')
})
