let progress = document.getElementById('progress');

let xhr = new XMLHttpRequest();
xhr.upload.addEventListener('progress', (event) => {
  let percentageOfComplete = event.loaded / event.total * 100; 
  progress.value = percentageOfComplete; 
  console.log(event);
});

xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.send();