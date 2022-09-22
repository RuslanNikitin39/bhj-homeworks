const chatVidget = document.querySelector('.chat-widget')
const messages = document.querySelector('.chat-widget__messages')
const input = document.getElementById('chat-widget__input')

const container = document.querySelector('.chat-widget__messages-container')

let flg = 1

chatVidget.addEventListener('click', () => {
    chatVidget.classList.add('chat-widget_active')
})

const arrMsgs = [
    'Кто здесь?',
    'Давай, досвидания!!!',
    'Приходите завтра.',
    'Что хотели?',
    'Ошиблись номером.'
]

function addZero(i){
    if (i < 10) {
        i = "0" + i
    }
    return i
}

function getTime(){
    const time = new Date()
    return `${addZero(time.getHours())}:${addZero(time.getMinutes())}`
}

input.addEventListener('change', (event) => {
    
    flg = 0

    if (event.target.value !== "") {
        
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${getTime()}</div>
        <div class="message__text">${event.target.value}</div>
         </div>
        `
        event.target.value = "" 
        
        botAnswer(arrMsgs)
        container.scrollTo(0, container.scrollHeight)

    }   
})

function botAnswer(answer) {
    const index = Math.floor(Math.random() * answer.length)

    return messages.innerHTML += `
    <div class="message">
    <div class="message__time">${getTime()}</div>
    <div class="message__text">${answer[index]}</div>
    </div>
    `
}

tm = setInterval(() => {
    if(flg){
        botAnswer(arrMsgs)
        container.scrollTo(0, container.scrollHeight)
    } else {
        flg = 1
    }
}, 30000, flg);