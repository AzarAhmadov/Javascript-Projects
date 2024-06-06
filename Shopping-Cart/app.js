const data = [{
        id: 0,
        img: "https://smart-tabletjo.com/ecdata/stores/TINCWF1203/image/data/products/1685370708_1366_2000.jpg",
        name: "Xiaomi Redmi Buds 4 Lite",
        price: 37
    },
    {
        id: 1,
        img: "https://haylou.com/cdn/shop/products/1_667ea867-0ab6-47ce-a72a-30b90bac5e4f.jpg?v=1671500697",
        name: "Haylou X1 Neo TWS White",
        price: 35
    },
    {
        id: 2,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-13-finish-select-202207-pink_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=WGQwVDZoTWdLODlMWERUbVY5M013a1NCSGJEVklzV3dtVWxKME5oOWltbnJvcW8wOTZaWVVoVzlvSmJqQWJsdlVwQlRha0d1UWVWYzlNWUdhZlZHdEswekI5ZWpRa0o2WWdVYzdzTUdBdFUvWXNuSEE1a3N6Rk1STjQvVG56Y3E=&traceId=1",
        name: "Apple iPhone 13 ",
        price: 1449
    },
    {
        id: 3,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-13-finish-select-202207-midnight_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=WGQwVDZoTWdLODlMWERUbVY5M013bkE5c2FxTFBHYVd1Uk1sVVFiM0hqMjF4UG1SeTBHbVQxVTNFM2swY0V6bG9oWWZrdHNvMW9vSmlxY25FUmlXYlNRRkZPbEhXZEdXTXlCZG9FcEUwK0p0RUlwdVp1d0F5TXhuNVd0SEhNSDVWNEZEYlB4ZlYyRUlCN0h5Z3dXVmNnPT0=&traceId=1",
        name: "Apple iPhone 14",
        price: 1729
    },
    {
        id: 4,
        img: "https://www.ourfriday.co.uk/image/cache/catalog/Samsung/samsung-galaxy-s24-ultra-5gsmartphone-tittanium-gray-1-3-1200x1200.png",
        name: "Samsung Galaxy S24 Ultra",
        price: 999
    },
    {
        id: 5,
        img: "https://images.samsung.com/cl/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
        name: "Samsung Galaxy S23 ",
        price: 500
    },
    {
        id: 6,
        img: "https://texnoplus.az/image/cache/catalog/honor/honor-x7b-black%20(1)-771x1000.png",
        name: "HONOR X7B 8/128 ",
        price: 348
    },
    {
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIFbF8COMOfeVVLWXhoFYa4NdmgbE3ul-HA&s",
        name: "HUAWEI Watch GT 4 ",
        price: 200
    },
];

const products_list = document.querySelector(".products_list");
const open_basket = document.querySelector('.open_basket');
const close_basket = document.querySelector('.close_basket');
const basket_list = document.querySelector('.basket_list');
const basketArea = document.querySelector('.basket')
const empty = document.querySelector('.empty')
const basket_count = document.querySelectorAll('.basket_count')
const total_price = document.querySelector('.total_price')

let cart = [];
let total = 0;

const CountBasket = (count) => {
    basket_count.forEach((el) => {
        el.innerHTML = `${count.length}`
    })
}

const TotalBasket = (total) => {
    total_price.innerHTML = `${total}$`
}

const RemoveFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);

    if (cart.length === 0) {
        empty.style.display = 'block';
    }

    BasketList(cart);
}

const BasketList = (cart) => {

    total = 0

    let BasketListHtml = cart.map((item) => {

        total += item.price * item.quantity;

        return ` 
        <li>
            <img src="${item.img}" alt=${item.name}>
            <div class="basket-left">
                <span class="title">${item.name}</span>
                <span class="price">${item.price}$</span>
                <button onClick="RemoveFromCart(${item.id})">remove</button>
            </div>
            <div class="basket-right">
                <button onClick="changeQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <div class="quantity">${item.quantity}</div>
                <button onClick="changeQuantity(${item.id}, ${item.quantity - 1})">-</button>
            </div>
        </li>`;
    }).join('');

    basket_list.innerHTML = BasketListHtml;

    CountBasket(cart);
    TotalBasket(total)
}

const AddToCart = (id) => {
    const product = data.find(item => item.id === id);
    const productInCart = cart.find(item => item.id === id);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart = [...cart, {
            ...product,
            quantity: 1
        }];
    }

    if (cart.length > 0) {
        empty.style.display = 'none';
    }

    BasketList(cart);
}

const changeQuantity = (id, quantity) => {
    const productInCart = cart.find(item => item.id === id);

    if (productInCart) {
        if (quantity <= 0) {
            RemoveFromCart(id);
        } else {
            productInCart.quantity = quantity;
        }
    }

    BasketList(cart);
}

const OpenBasket = () => {
    basketArea.classList.toggle('active');
};

const CloseBasket = () => {
    basketArea.classList.remove('active');
}

const RenderProducts = () => {
    const ProductsHtml = data.map((product) => {
        return `
        <li>
            <img src="${product.img}" alt="${product.name}">
            <span class="title">${product.name}</span>
            <span class="price">${product.price}$</span>
            <button onclick="AddToCart(${product.id})">Add to cart</button>
        </li>`;
    }).join("");

    products_list.innerHTML = ProductsHtml;
};

RenderProducts();
TotalBasket(total)

close_basket.addEventListener('click', CloseBasket);
open_basket.addEventListener('click', OpenBasket);