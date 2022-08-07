let counter = document.getElementById('clicker__counter');
let cookieImage = document.getElementById('cookie');
let speadCounter = document.querySelector('div.clicker');
let clickSpeadDiv = document.createElement('div');
clickSpeadDiv.textContent = 'Скорость клика: ';
speadCounter.insertBefore(clickSpeadDiv, speadCounter.querySelector('img'));

function changeSize() {
  counter.textContent = Number(counter.textContent) + 1;
  
  if (cookieImage.width == 200) {
    cookieImage.width = 180;
  } else {
    cookieImage.width = 200;
  };
}

cookieImage.onclick = changeSize;


