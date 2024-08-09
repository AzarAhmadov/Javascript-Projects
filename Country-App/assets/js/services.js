import ui_selector from "./selectors.js"
import { bordersHtml, renderHtml, selectHtml } from "./ui.js"

class Services {
    constructor() {}

    getCountryByName = async (name) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            const data = await res.json()
            renderHtml(data[0])
            this.getBorders(data[0])
        } catch (err) {
            console.log(err)
        }
    }

    getAllCountryByName = async (name) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data = await res.json()
            selectHtml(data)
        } catch (err) {
            console.log(err)
        }
    }

    getBorders = async (el) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${el?.borders?.toString()}`);
            const data = await res.json();
            bordersHtml(data)
        } catch (err) {
            console.log(err)
        }
    }

    changeCountryName = (e) => {
        try {
            const obj = e.target.closest('[data-country]')
            const data_country_name = obj.dataset.country
            this.getCountryByName(data_country_name)
        } catch (err) {
            console.log(err)
        }
    }

    searchByName = (e) => {
        const value = ui_selector.search.value.trim()

        if (e.key === 'Enter') {
            if (value) {
                this.getCountryByName(value)
                ui_selector.search.value = ""
            }
        }
        if (ui_selector.search.value.trim() === "") {
            ui_selector.select.classList.remove('active')
        } else {
            ui_selector.select.classList.add('active')
        }

        this.getAllCountryByName(value)
    }

    selectByName = (e) => {
        const obj = e.target.closest('[data-country]')
        const data_country = obj.dataset.country
        if (data_country) {
            this.getCountryByName(data_country)
            ui_selector.search.value = ""
            ui_selector.select.classList.remove('active')
        }
    }

    events = () => {
        ui_selector.neighbor.addEventListener('click', this.changeCountryName)
        ui_selector.search.addEventListener('keyup', this.searchByName)
        ui_selector.select.addEventListener('click', this.selectByName)
    }
}

export default Services