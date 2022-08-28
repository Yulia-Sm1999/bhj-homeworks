let references = [...document.querySelectorAll('a.has-tooltip')];

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

references.forEach(ref => {
  ref.addEventListener('click', event => {
    if (tooltip.classList.contains('tooltip_active') && tooltip.textContent === ref.title) {
      tooltip.classList.remove('tooltip_active');
      console.log('removed');
    } else {
      tooltip.classList.add('tooltip_active');
      tooltip.textContent = ref.title;
      ref.insertAdjacentElement('afterbegin', tooltip);
    
      let { left, top } = ref.getBoundingClientRect();
      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 20 + 'px';
    };
    
    event.preventDefault();
  })
});




