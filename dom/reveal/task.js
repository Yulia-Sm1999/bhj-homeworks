window.onscroll = () => {
  let windowHeight = window.innerHeight;
  let textToReveal = document.querySelectorAll('div.reveal');

  textToReveal.forEach((textEl) => {
    let elementTop = textEl.getBoundingClientRect().top;
    let elementBottom = textEl.getBoundingClientRect().bottom;
  
    if ((elementTop < windowHeight) && (elementBottom > 0)) {
      textEl.classList.add('reveal_active');
    } else {
      textEl.classList.remove('reveal_active');
    };
  });
}
