import formatNumber from "./helper.js"
import ui_selector from "./selectors.js"

const renderHtml = async (data) => {
    ui_selector.neighbor_title.classList.add('hidden')

    ui_selector.country_info.innerHTML = `
            <figure class="w-full h-[80px] sm:h-[100px]">
                 <img class="size-full object-contain rounded-md" src="https://cdn-icons-gif.flaticon.com/17098/17098052.gif" alt="loading...">
            </figure>
    `
    setTimeout(() => {
        if (data) {
            ui_selector.neighbor_title.classList.remove('hidden')
            ui_selector.country_info.innerHTML = `
            <figure class="w-full md:w-[310px] h-[180px]">
                <img id="flag" class="size-full object-cover rounded-md" src=${data?.flags?.png} alt=${data?.name?.common}>
            </figure>
            <div class="flex flex-col justify-center gap-2 px-5">
                <h2 class="text-[22px] sm:text-[25px]">${data.name.common}</h2>
                <h3 class="text-[16px] sm:text-[17px]">${data?.capital[0]}</h3>
                <h3 class="text-[16px] sm:text-[17px]">${Object.values(data.currencies)[0].name} (${Object.values(data.currencies)[0].symbol})</h3>
                <h3 class="text-[16px] sm:text-[17px]"> Population: ${formatNumber(data.population)} </h3>
            </div>
`
        } else {
            ui_selector.neighbor_title.classList.add('hidden')
            ui_selector.country_info.innerHTML = `
           <div class="flex flex-col items-center gap-5 w-full">
            <figure class="w-full h-[120px]">
                <img id="flag" class="size-full object-contain rounded-md" src="https://cdn-icons-gif.flaticon.com/15586/15586040.gif" alt="No Result">
            </figure>
            <h3 class="text-[20px]"> Not found </h3>
           </div>
`
        }
    }, 1500)
}

const bordersHtml = async (data) => {
    ui_selector.neighbor.innerHTML = ""
    ui_selector.neighbor_title.innerHTML = ""
    ui_selector.neighbor_title.classList.remove('border-b')
    ui_selector.neighbor.classList.add('hidden')

    setTimeout(() => {

        if (data.length > 1) {
            ui_selector.neighbor.classList.remove('hidden')
            ui_selector.neighbor_title.innerHTML = "Neighboring countries"
            ui_selector.neighbor_title.classList.add('border-b')

            data.forEach((el) => {
                ui_selector.neighbor.innerHTML += `
                <li data-country="${el.name.common}" title="${el.name.common}" class="border h-[110px] md:h-[100px] cursor-pointer text-center p-1 rounded-lg ">
                    <img class="rounded-md object-cover size-full" src=${el.flags.png} alt=${el.name.common}>
                </li>
            `
            })

        } else {
            ui_selector.neighbor_title.classList.remove('border-b')
            ui_selector.neighbor_title.innerHTML = "This country has no neighbors"
        }
    }, 1500)
}

const selectHtml = async(data) => {
    ui_selector.select.innerHTML = "";

    if (data) {
        if (data.length > 0) {
            data.forEach((el) => {
                ui_selector.select.innerHTML += `
                <li data-country="${el.name.common}" class="cursor-pointer px-3 py-2 transition-all hover:text-white hover:bg-blue-500">
                    ${el.name.common}
                </li>
                `;
            });
        } else {
            ui_selector.select.innerHTML = `
            <li class="text-center py-3">
              No country found with this name
            </li>
            `;
        }
    }
};

export { renderHtml, bordersHtml, selectHtml }