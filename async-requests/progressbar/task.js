let progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

  xhr.upload.addEventListener('progress', (event) => {
    let percentageOfComplete = event.loaded / event.total * 100;
    progress.value = percentageOfComplete;
  });
  
  xhr.send(formData);
  e.preventDefault();
});
