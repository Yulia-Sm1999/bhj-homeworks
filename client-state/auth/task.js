const authBtn = document.getElementById('signin__btn');
const deauthBtn = document.getElementById('signout__btn');
const authForm = document.getElementById('signin');
const welcomeId = document.getElementById('user_id');

let getWelcomeMessage = () => {
  if (localStorage.userId) {
    authForm.classList.remove('signin_active');
    welcomeId.innerText = localStorage.userId;
    welcomeId.parentElement.classList.add('welcome_active');
  }
};
window.onload = getWelcomeMessage();

deauthBtn.addEventListener('click', (event) => {
  event.preventDefault();
  delete localStorage.userId;
  welcomeId.parentElement.classList.remove('welcome_active');
  authForm.classList.add('signin_active');
});

authBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let request = new XMLHttpRequest();
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

  const form = document.getElementById('signin__form');
  let formData = new FormData(form);
  request.send(formData);
  
  request.onload = () => {
    let response = JSON.parse(request.response);

    if (response.success === false) {
      alert('Неверный логин/пароль')
    } else {
      localStorage.userId = response.user_id;
      getWelcomeMessage();
    }
  };
})