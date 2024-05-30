const Month = document.querySelector('.month')
const Day = document.querySelector('.day')
const Year = document.querySelector('.year')
const Week = document.querySelector('.week')

const date = new Date();

Month.innerHTML = date.toLocaleDateString("en", {
    month: 'long'
})

Week.innerHTML = date.toLocaleDateString("en", {
    weekday: 'long'
})

Day.innerHTML = date.getDate()

Year.innerHTML = date.getFullYear()