const links = document.querySelectorAll('.menu__link');

for (let lnk of Array.from(links)) {
    lnk.onclick = function() {

        const parent = lnk.parentElement;

        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
            parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            parent.querySelector('.menu_sub').className = 'menu menu_sub';
        }

        if (lnk.closest('.menu_main')) {
            return false;
        }
    }
}