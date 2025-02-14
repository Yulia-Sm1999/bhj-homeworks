let chatWidget = document.querySelector('.chat-widget');
let chatInput = document.getElementById('chat-widget__input');
let botMessages = [
  'Сейчас узнаю!',
  'Подождите секунду!',
  'Стараюсь Вам помочь',
  'Это очень интересно!',
];
let botQuestions = [
  'Почему молчите?',
  'У Вас больше нет вопросов?',
  'Могу я ещё чем-то помочь?'
];
const messages = document.querySelector('.chat-widget__messages');
let chatArea = document.querySelector('.chat-widget__messages-container');
let id;

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

function interval() {
  let intervalId = setInterval(() => {
    let randomBotQuestion = botQuestions[Math.floor(Math.random() * botQuestions.length)];
    getRandomBotMessage(randomBotQuestion);
  }, 3000);
  return intervalId;
};

function getCurrentTime() {
  let date = new Date();
  let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let time = `${hours} : ${minutes}`;
  return time;
}

function getRandomBotMessage(botElement) {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">
      ${getCurrentTime()}</div>
    <div class="message__text">${botElement}</div>
  </div>
  `;
  chatArea.scrollTop = chatArea.scrollHeight;
};

chatInput.addEventListener('focus', () => {
  id = interval();
});

chatInput.addEventListener('blur', () => {
  clearInterval(id);
});

document.addEventListener('keyup', event => {
  if (id) {
    clearInterval(id);
  };
  
  if (chatInput.value.trim().length === 0) {
    id = interval();
  };

  if ((event.code === 'Enter') && (chatInput.value != '')) {
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">
        ${getCurrentTime()}</div>
        <div class="message__text">
          ${chatInput.value}
        </div>
      </div>`;
    
    chatInput.value = '';
    let randomBotMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
    getRandomBotMessage(randomBotMessage);
    id = interval();
  };
});