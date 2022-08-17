let changeAdd = () => {
  let currentAdd = document.querySelector('span.rotator__case_active');
  let firstAdd = document.querySelector('span.rotator__case');
  let nextAdd = currentAdd.nextElementSibling;
  currentAdd.classList.remove('rotator__case_active');
  nextAdd ? nextAdd.classList.add('rotator__case_active') : firstAdd.classList.add('rotator__case_active');
}

setInterval(changeAdd, 1000);



  