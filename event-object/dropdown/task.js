// const list = document.querySelector('.dropdown__list');
// const btn = document.querySelector('.dropdown__value');
// const menuLinks = document.querySelectorAll('a');

// function showMenu() {
//     list.className = (list.className === 'dropdown__list' ? 'dropdown__list dropdown__list_active' : 'dropdown__list');
//     return false;
// }

// btn.addEventListener('click', showMenu);


// function rename(linkName) {
//     linkName.preventDefault();
//     btn.textContent = linkName.target.textContent;
//     list.className = 'dropdown__list';
//     return false;
// }

// for (let link of Array.from(menuLinks)) {
//     link.addEventListener('click', rename);
// }

const cards = document.querySelectorAll('.card');

for (let card of Array.from(cards)) {
    const list = card.querySelector('.dropdown__list');
    const btn = card.querySelector('.dropdown__value');
    const menuLinks = card.querySelectorAll('a');

    function showMenu() {
        list.className = (list.className === 'dropdown__list' ? 'dropdown__list dropdown__list_active' : 'dropdown__list');
        return false;
    }
    btn.addEventListener('click', showMenu);

    function rename(linkName) {
        linkName.preventDefault();
        btn.textContent = linkName.target.textContent;
        list.className = 'dropdown__list';
        return false;
    }
    
    for (let link of Array.from(menuLinks)) {
        link.addEventListener('click', rename);
    }
}




