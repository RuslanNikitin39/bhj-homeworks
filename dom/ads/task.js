const rotators = document.querySelectorAll('.rotator')
const rotator = Array.from(rotators[0].children)

interval = 1000

function changeRotator(arrMsg) {
    
    let index = arrMsg.findIndex((item)=> {
        return item.classList.contains('rotator__case_active')
    })

    arrMsg[index].classList.remove('rotator__case_active')

    index++

    if (index === arrMsg.length) {
        index = 0
    }

    arrMsg[index].classList.add('rotator__case_active')

    //interval = Number(arrMsg[index].dataset.speed) + 5000

    //let tmID = setInterval(changeRotator, interval, arrMsg)
    
}


let timerID  = setInterval(changeRotator, interval, rotator)

