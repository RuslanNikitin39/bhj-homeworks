const btnClose = document.querySelectorAll('div.modal__close');
const popUp = document.querySelector('#modal_main');
const btnSuccess = document.querySelector('.show-success');
const success = document.querySelector('#modal_success');

popUp.className = 'modal modal_active';

for (let btn of btnClose) {
    btn.onclick = function(){
        this.closest('div.modal').className = 'modal'
    };
}
btnSuccess.onclick = function(){
    popUp.className = 'modal';
    success.className = 'modal modal_active';
};