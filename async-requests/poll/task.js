let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();

request.onload = () => {
  let response = JSON.parse(request.response);
  let title = document.getElementById('poll__title');
  let answersArea = document.getElementById('poll__answers');
  
  title.textContent = response.data.title;
  let answers = response.data.answers;

  answers.forEach(el => {
    let answerBtn = document.createElement('button');
    answerBtn.classList.add('poll__answer');
    answerBtn.textContent = el;
    answersArea.appendChild(answerBtn);

    answerBtn.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
      console.log(response.id);
      console.log(([...answerBtn.parentElement.children].indexOf(answerBtn)));

      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(`vote=${response.id}&answer=${([...answerBtn.parentElement.children].indexOf(answerBtn))}`);

      let xhr2 = new XMLHttpRequest();
      xhr2.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
      xhr2.onload = () => {
        let answer = JSON.parse(xhr2.response);
        console.log(answer);
      };
      xhr2.send();
    });
  });
};