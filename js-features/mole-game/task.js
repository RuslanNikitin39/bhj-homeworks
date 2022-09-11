let lost = document.getElementById('lost');
let dead = document.getElementById('dead');
let hole = document.getElementsByClassName('hole');

let i = 1;
while (true) {

    function getHole(i){
        let holeOnClick = document.getElementById(`hole${i}`);
        return holeOnClick;
    }

    let hole = getHole(i);

    hole.onclick = function(){
        if (hole.className.includes('hole_has-mole') === true) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent == 10){
            alert('Вы победили!')
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (lost.textContent == 5){
            alert('Вы проиграли!')
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }

    i++;
}
