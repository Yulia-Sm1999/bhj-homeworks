let references = [...document.querySelectorAll('a.has-tooltip')];

references.forEach((ref) => {
  let tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = ref.title;
  ref.insertAdjacentElement('afterend', tooltip);
  tooltip.style.position = "absolute";

  ref.addEventListener('click', event => {
    if (tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.remove('tooltip_active');
    } else {
      [...document.querySelectorAll('.tooltip_active')].forEach(el => el.classList.remove('tooltip_active'));
      tooltip.classList.add('tooltip_active');
    };
    
    event.preventDefault();
  })
});




