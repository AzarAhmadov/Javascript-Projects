const age = document.querySelector('#age')
const date = document.querySelector('#date')
const form = document.querySelector('#form')

const GetAge = (e) => {
    e.preventDefault()

    const Year = date.value

    if (!Year) {
        alert('Please enter your birthday')
    } else {

        const CurrentYear = new Date().getFullYear();

        const format = Year.slice(0, 4)

        const result = CurrentYear - format

        age.innerHTML = `
        Your age is ${result} years old
        `
    }

}

form.addEventListener('submit', GetAge)