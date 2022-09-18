const book = document.querySelector('.book')
const controls = document.querySelector('.book__control')
const icons = document.querySelectorAll('.font-size')

for (let control of controls.children){
    control.addEventListener('click', change)
}

function change(event) {
    event.preventDefault()

    if (event.target.dataset.size === 'big') {
        book.classList.add('book_fs-big')
        book.classList.remove('book_fs-small')
    } else if (event.target.dataset.size === 'small') {
        book.classList.remove('book_fs-big')
        book.classList.add('book_fs-small')
    } else {
        book.classList.remove('book_fs-big')
        book.classList.remove('book_fs-small')
    }

    for (let icon of icons) {
        icon.classList.remove('font-size_active')
    }

    event.target.classList.add('font-size_active')
}