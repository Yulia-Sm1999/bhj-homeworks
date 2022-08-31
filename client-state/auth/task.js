const authBtn = document.getElementById('signin__btn');

authBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let request = new XMLHttpRequest();
  
  request.onload = () => {
    let response = JSON.parse(request.response);

    if (!response.success) {
    // if (response.success === 'false') {  Почему такая запись не работает???
      alert('Неверный логин/пароль')
    } else {
      localStorage.userId = response.user_id;
      let welcomeMessage = document.getElementById('user_id');
      welcomeMessage.innerText = response.user_id;
      welcomeMessage.classList.add('welcome_active');
    }
  };
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

  const form = document.getElementById('signin__form');
  let formData = new FormData(form);
  request.send(formData);
})