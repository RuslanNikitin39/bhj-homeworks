const btnClose = document.querySelectorAll('div.modal__close');
const popUp = document.querySelector('#modal_main');
const btnSuccess = document.querySelector('.show-success');
const success = document.querySelector('#modal_success');

popUp.className = 'modal modal_active';

btnClose[0].onclick = function(){
    popUp.className = 'modal';
};

btnSuccess.onclick = function(){
    success.className = 'modal modal_active';
};

btnClose[1].onclick = function(){
    popUp.className = 'modal';
    success.className = 'modal';    
};