const form = document.querySelector('#form')
const table_body = document.querySelector('.t-body')
const title = document.querySelector('#title')
const autor = document.querySelector('#autor')
const image = document.querySelector('#image')

let BookArr = JSON.parse(localStorage.getItem('books')) || []

class Book {
    constructor(title, autor, image, id) {
        this.title = title
        this.autor = autor
        this.image = image
        this.id = id
    }
}

class UI {
    addBookList(books) {
        table_body.innerHTML = ''

        books.forEach(book => {
            let bookInner = `
            <li>
                ${book.title}
            </li>
            <li>
                ${book.autor}
            </li>
            <li>
                <img src="${book.image}" alt="${book.title}">
            </li>
            <li>
                <button id="delete_book" data-id="${book.id}">delete</button>
            </li>
            `
            table_body.innerHTML += bookInner
        })
    }

    clearInput() {
        title.value = ''
        autor.value = ''
        image.value = ''
    }

    deleteBook(id) {
        BookArr = BookArr.filter(book => book.id !== id)
        this.addBookList(BookArr)
        localStorage.setItem('books', JSON.stringify(BookArr))
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (title.value === '' || autor.value === '' || image.value === '') {
        return alert('does not empty')
    }

    const book = new Book(title.value, autor.value, image.value, BookArr.length)
    const ui = new UI()

    BookArr = [...BookArr, book]
    ui.addBookList(BookArr)
    localStorage.setItem('books', JSON.stringify(BookArr))
    ui.clearInput()
})

table_body.addEventListener('click', (e) => {
    if (e.target.id === 'delete_book') {
        const id = parseInt(e.target.dataset.id)
        const ui = new UI()
        ui.deleteBook(id)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI()
    ui.addBookList(BookArr)
})