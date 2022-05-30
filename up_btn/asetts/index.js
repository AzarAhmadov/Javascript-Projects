const upBtn = document.querySelector('.up-btn');
window.addEventListener('scroll', ()=>{
    if(scrollY > 300){
        upBtn.classList.add('active')
    }else{
        upBtn.classList.remove('active')
    }
})

upBtn.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0
    })
})