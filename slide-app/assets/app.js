import {
    Slide
} from "./slide.js";

const ui = {
    left_btn: document.querySelector('#left_btn'),
    right_btn: document.querySelector('#right_btn'),
    title: document.querySelector('#title'),
    date: document.querySelector('#date'),
    img: document.querySelector('#img'),
    slide_control: document.querySelector("#slide_control"),
    slide_content: document.querySelector('#slide_content'),
    pagination_div: document.querySelector('#pagination-div')
}

let active_index = 0
let inerval = null

const Pagination = (active_index) => {
    let innerPagination = "";

    for (let i = 0; i < Slide.length; i++) {
        innerPagination += `
        <span class="size-[18px] ${active_index === i ? 'bg-[#000]' : 'bg-[red]'} block rounded-full"></span>
        `;
    }

    ui.pagination_div.innerHTML = innerPagination;
}

const RenderSlide = () => {
    ui.title.textContent = Slide[active_index].title
    ui.img.src = Slide[active_index].src
    ui.date.textContent = Slide[active_index].date
    Pagination(active_index)
}

window.PrevSlide = function () {
    active_index--

    if (active_index < 0) {
        active_index = Slide.length - 1
    }

    RenderSlide()
}

window.NextSlide = function () {
    active_index++

    if (active_index >= Slide.length) {
        active_index = 0
    }

    RenderSlide()
}

ui.slide_control.addEventListener('click', (e) => {
    const obj = e.target.closest('button') ? e.target.closest('button') : e.target
    const obj_data = obj.dataset.position
    if (obj.tagName === 'BUTTON') {
        window[obj_data + "Slide"]()
    }
})

const InerVal = () => {
    inerval = setInterval(() => {
        NextSlide()
    }, 3000)
}

ui.slide_content.addEventListener('mousemove', () => {
    clearInterval(inerval)
    inerval = null
})

ui.slide_content.addEventListener('mouseout', () => {
    InerVal()
})

Pagination(active_index)
InerVal()
RenderSlide()