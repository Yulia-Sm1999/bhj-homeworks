let countdownPoint = document.getElementById('timer');
countdownPoint.innerHTML = 65;

let hours;
let minutes;
let seconds;

let toTimeString = () => {
  hours = Math.floor(+countdownPoint.innerHTML / 3600);
  minutes = Math.floor(+countdownPoint.innerHTML / 60) - (hours * 60);
  seconds = +countdownPoint.innerHTML % 60;

  if (hours === '00') hours = 0;
  if (minutes === '00') minutes = 0;
  if (seconds === '00') seconds = 0;

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  countdownPoint.innerHTML = `${hours}:${minutes}:${seconds}`
};

let countdown = () => {
  countdownPoint.innerHTML = (+hours * 3600 + (60 * +minutes) + (+seconds)) - 1;
};

toTimeString();

let timer = () => {
  if (+hours === 0 && +minutes === 0 && +seconds === 0 ) {
    clearInterval(interval);
    window.alert("Вы победили в конкурсе!");
    return;
  };
  
  countdown();
  toTimeString();
};

let interval = setInterval(timer, 1000);







