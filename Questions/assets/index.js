const que_area = document.querySelectorAll('.que-area');
const que_text = document.querySelectorAll('.que-text');
const minus = document.querySelectorAll('.minus');
const title = document.querySelectorAll('.title')

que_area.forEach((value,index)=>{{
    value.addEventListener('click', () => {
        que_text[index].classList.toggle('active')
        minus[index].classList.toggle('active')
        title[index].classList.toggle('active')
    })
}})
