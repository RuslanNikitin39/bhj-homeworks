const img = document.getElementById('cookie');
const p = document.getElementById('clicker__counter');
const t = document.getElementById('clicker__time');

let checker = 1;
let lastClick = 0;
img.onclick = () => {
    if (checker) {
        img.width += 20;
        img.heght += 20;
        checker = 0;
    } else {
        img.width -= 20;
        img.heght -= 20;
        checker = 1;
    } 
    
    p.textContent = Number(p.textContent) + 1;

    d = new Date();
    tm = d.getTime()/1000;
    
    t.textContent = (1/(tm - lastClick)).toFixed(2);

    lastClick = tm;
}