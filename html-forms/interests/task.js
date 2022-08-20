let listsOfOptions = document.getElementsByClassName('interests_active');

[...listsOfOptions].forEach(el => {
  let mainOption = el.previousElementSibling.querySelector('input');
  let options = [...el.querySelectorAll('input')];
  
  mainOption.addEventListener('change', () => {
    if (mainOption.checked) {
      options.forEach(el => el.checked = true);
    };

    if (!mainOption.checked) {
      options.forEach(el => el.checked = false);
    };
  });

  options.forEach((opt) => {
    opt.addEventListener('change', () => {
      let everyOptionTrue = (options.every(el => el.checked == true));
      let someOptionTrue = ((options.some(el => el.checked == true)) != everyOptionTrue);
      let everyOptionFalse = (options.every(el => el.checked == false));


      if (everyOptionTrue) {
        mainOption.indeterminate = false;
        mainOption.checked = true;
        return;
      };

      if (everyOptionFalse) {
        mainOption.indeterminate = false;
        mainOption.checked = false;
      };
      
      if (someOptionTrue) {
        mainOption.indeterminate = true;
      };
    })
  });
})