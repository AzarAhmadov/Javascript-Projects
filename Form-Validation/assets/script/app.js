// Imports
import { validateEmail, telephoneCheck } from "./helper.js"

// Selectors
const form = document.querySelector('#form')

// Show Error Message
const ErrorMsg = (inputs, msg) => {
    const parent_el = inputs.closest('div')
    parent_el.querySelector('label').classList.add('text-red-500')
    inputs.classList.add('border-red-500')
    parent_el.insertAdjacentHTML("beforeend", `<p class="error-el  mt-2 text-[#F22B2B] text-[13px]"> ${msg ? msg : 'Please fill in the input field'} </p>`);
}

// Remove Error Message
const RemoveErrorMsg = () => {
    const err_el = form.querySelectorAll('.error-el')
    for (let err of err_el) {
        RemoveEl(err)
        err.remove()
    }
}

// Remove Elements
const RemoveEl = (err) => {
    const parent = err.closest('div')
    parent.querySelector('label').classList.remove('text-red-500')
    parent.querySelector('[name]').classList.remove('border-red-500')
}

// Input Validation
const InputValidation = (inputs, e) => {
    const value = inputs.value
    const data_name = inputs.dataset.message
    const data_required = inputs.dataset.required
    const data_min = inputs.dataset.min
    const data_email = inputs.dataset.email
    const data_some_el = e.target.querySelector(`[name="${inputs.dataset.some}"]`)
    const data_phone = inputs.dataset.phone

    if (!value.trim() && data_required) {
        ErrorMsg(inputs, data_name)
    } else if (value.trim() && data_min && data_min > value.length) {
        ErrorMsg(inputs, `There must be a minimum of 10 symbols !`)
    } else if (value.trim() && data_email && !validateEmail(value)) {
        ErrorMsg(inputs, `Write the email format correctly !`)
    } else if (value.trim() && data_some_el && value !== data_some_el.value) {
        ErrorMsg(inputs, `Passwords are not the same !`)
    } else if (value.trim() && data_phone && !telephoneCheck(value)) {
        ErrorMsg(inputs, `Please write in accordance with telephone format !`)
    }
}

// After Form Submit
form.addEventListener('submit', (e) => {
    e.preventDefault()
    RemoveErrorMsg()

    for (let inputs of e.target.elements) {
        if (inputs.tagName !== 'BUTTON') {
            InputValidation(inputs, e)
        }
    }
})