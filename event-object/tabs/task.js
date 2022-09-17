const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

for (let tab of Array.from(tabs)) {
    tab.addEventListener('click', change);
}

function change(event) {
    for (let tab of Array.from(tabs)) {
        tab.className = 'tab';
    }

    event.target.className = 'tab tab_active';

    for (let content of Array.from(contents)) {
        content.className = 'tab__content';
    }

    const i = Array.from(tabs).indexOf(event.target);
    contents[i].className = 'tab__content tab__content_active';
}