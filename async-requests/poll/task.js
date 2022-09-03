let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();

request.onload = () => {
  let response = JSON.parse(request.response);
  const title = document.getElementById('poll__title');
  const answersArea = document.getElementById('poll__answers');

  function makeXHR(method, url, etc) {
    let xhr = new XMLHttpRequest();    
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   
    xhr.onload = () => {
      let answer = JSON.parse(xhr.response);
      answersArea.innerHTML = '';
      let votes = 0;
      answer.stat.forEach(el => votes += el.votes);
      answer.stat.forEach(el => {
        let percentage = Number((el.votes / votes * 100).toFixed(2));
        answersArea.insertAdjacentHTML('beforeend', `<div>${el.answer}: ${percentage}%</div>`);
      })  
    };
    xhr.send(etc);
  };

  title.textContent = response.data.title;
  let answers = response.data.answers;

  answers.forEach(el => {
    const answerBtn = document.createElement('button');
    answerBtn.classList.add('poll__answer');
    answerBtn.textContent = el;
    answersArea.appendChild(answerBtn);

    answerBtn.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
      voteData = `vote=${response.id}&answer=${([...answerBtn.parentElement.children].indexOf(answerBtn))}`;
      makeXHR('POST', 'https://netology-slow-rest.herokuapp.com/poll.php', voteData);
    });
  });
}