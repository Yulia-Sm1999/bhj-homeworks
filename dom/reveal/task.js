window.onscroll = () => {
  const windowHeight = window.innerHeight;
  const textToReveal = document.querySelectorAll('div.reveal');

  textToReveal.forEach((textEl) => {
    const { top, bottom } = textEl.getBoundingClientRect();
  
    if ((top < windowHeight) && (bottom > 0)) {
      textEl.classList.add('reveal_active');
    } else {
      textEl.classList.remove('reveal_active');
    };
  });
}