const p = document.getElementById('timer');
let date = new Date(null);
let start = Number(p.textContent);

//дополнительное задание 1
date.setSeconds(start); 
let timeString = date.toISOString().substr(11, 8);
p.textContent = timeString;

newInterval = setInterval(() => {
    
    //Основной вариант
    // p.textContent = Number(p.textContent) - 1;
    // if (p.textContent <= 0) {
    //     clearInterval(newInterval);
    //     alert('Вы победили в конкурсе');
    // }'''''''''''''''''''''''''''''''''''''
    
    //дополнительное задание 1
    start--;
    date.setSeconds(start); 
    let timeString = date.toISOString().substr(11, 8);
    p.textContent = timeString;
    if (start <= 0) {
        clearInterval(newInterval);
        alert('Вы победили в конкурсе');

        //дополнительное задание 2
        const url = document.createElement('a');
        url.href = 'http://hello.kitty';
        url.download = '';
        url.target = '_blank';

        url.href = '../demo.gif';

        url.click();
    }
}, 1000);

