let popup = document.getElementById('modal_main');
popup.className = 'modal modal_active';
let popupClose = document.querySelectorAll('div.modal__close');
let popupSuccess = document.getElementById('modal_success');
let elementSucces = document.querySelector('a.show-success');

let closePopup = () => {
  popup.classList.remove ('modal_active');
  popupSuccess.classList.remove ('modal_active');
};

for (let i = 0; i < popupClose.length; i++) {
  popupClose[i].onclick = closePopup; 
};

elementSucces.onclick = () => {
  popupSuccess.classList.add('modal_active');
  popup.classList.remove('modal_active');
};