// Galary Data
const GalaryData = [{
        category: "Nature",
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&s"
    },
    {
        category: "Nature",
        img_src: "https://img.lovepik.com/photo/48013/0603.jpg_wh860.jpg"
    },
    {
        category: "Nature",
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRin-RHdvU8GYNk8I2YPre0yYYHCJlY9GuAbsYmBF-AOTXZQXEOrOjF-etRUFagA9Gx0NE&usqp=CAU"
    },
    {
        category: "Nature",
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlst33n37g93m8liDygxtpqoPise6krFHX8g&s"
    },
    {
        category: "Cars",
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8G6jnjll-aZ2prUZimjNetaonanodJQ8hQ&s"
    },
    {
        category: "Cars",
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctHtqxrauH7tM1qptX5RRCDrNTIbBQQQxe10V1-9HPzBoM6Jx_AuveMRZY62jJP_Ueu0&usqp=CAU"
    },
    {
        category: "Cars",
        img_src: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg"
    },
    {
        category: "Cars",
        img_src: "https://c4.wallpaperflare.com/wallpaper/787/18/502/cars-hd-widescreen-high-quality-desktop-wallpaper-preview.jpg"
    },
    {
        category: "People",
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDL2tw51_VGBqdXVZA_-Lw78KAT8lt5fOWw&s"
    },
    {
        category: "People",
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlqqRpKwolBy-CshufPzxI-GoDtPesa67WcxWWQfX70BfD7AsFG5_9h_9r2rN-IkbyWk&usqp=CAU"
    },
    {
        category: "People",
        img_src: "https://media.istockphoto.com/id/1305350997/photo/portrait-of-happy-three-generations-of-women-have-fun.jpg?s=612x612&w=0&k=20&c=AB6RfRqKBwrBgOSldokiomUfmL1bZ02YT8K_CIGx4-w="
    },
    {
        category: "People",
        img_src: "https://e0.pxfuel.com/wallpapers/803/885/desktop-wallpaper-normal-people-people-nature.jpg"
    },
];

// Selectors
const galary_list = document.querySelector('.galary_list');
const filter_btn = document.querySelectorAll('.filter_btn');

filter_btn.forEach((el) => el.addEventListener('click', () => {
    const active_filter = document.querySelector('.filter_btn.active')
    const BtnValue = el.innerHTML
    RenderGalary(BtnValue)

    if (active_filter) {
        active_filter.classList.remove('active')
    }

    el.classList.add('active')
}))

// Render Galary
const RenderGalary = (value) => {
    let galaryItems = ''

    GalaryData.forEach((el) => {
        if (value === 'Show All' || el.category === value) {
            galaryItems += `
            <li>
                <img src="${el.img_src}" alt="${el.category}">
            </li>
        `;
        }
    })

    galary_list.innerHTML = galaryItems
}

// Inital Render
RenderGalary('Show All')