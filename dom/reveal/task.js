const elements = document.querySelectorAll('.reveal')

document.addEventListener('scroll', showDiv)

function showDiv(event) {

    const viewportHeight = window.innerHeight

    for (let element of elements) {
        const elementTop = element.getBoundingClientRect().top

        if (elementTop < viewportHeight) {
            element.classList.add('reveal_active')
        } else {
            element.classList.remove('reveal_active')
        }
    }
}