let chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

document.addEventListener('keyup', event => {
  let chatInput = document.getElementById('chat-widget__input');
  let date = new Date();
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
  let randomBotMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
  let randomBotQuestion = botQuestions[Math.floor(Math.random() * botQuestions.length)];
  let chatArea = document.querySelector('.chat-widget__messages-container');
  let currentTime = `${date.getHours()} : ${date.getMinutes()}`;
  const messages = document.querySelector('.chat-widget__messages');

  let timer = setTimeout(() => {
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">
          ${currentTime}</div>
        <div class="message__text">${randomBotQuestion}</div>
      </div>
      `;
    }, 10000);

  chatInput.addEventListener('focus', () => {
    timer();
  });

  if ((event.code === 'Enter') && (chatInput.value != '')) {
    clearTimeout(timer);
        
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">
        ${currentTime}</div>
        <div class="message__text">
          ${chatInput.value}
        </div>
      </div>`;
    
    chatInput.value = '';

    messages.innerHTML += `
    <div class="message">
      <div class="message__time">
        ${currentTime}</div>
      <div class="message__text">${randomBotMessage}</div>
    </div>
    `;
    
    chatArea.scrollTop = chatArea.scrollHeight;
  };
});
