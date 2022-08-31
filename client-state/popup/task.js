const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

function getCookie() {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(p => p == 'modalClosed=yes');
  console.log(cookie);
  return cookie;
}

if (getCookie()) {
  popup.classList.remove('modal_active');
} else { 
popupClose.onclick = () => {
  popup.classList.remove('modal_active');
  document.cookie = 'modalClosed=yes';
  console.log(document.cookie);
  };
}
