const link = document.querySelectorAll('.link')

link.forEach((item) => {
    item.addEventListener('click', function(){
        document.querySelector('.link.active').classList.remove('active')
        item.classList.add('active')
    })
})