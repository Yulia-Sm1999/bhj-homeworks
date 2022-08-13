let dropdown = document.querySelector('div.dropdown');
let dropdownList = dropdown.querySelector('ul.dropdown__list');
let listOfItems = [...dropdownList.querySelectorAll('li.dropdown__item')];
let selectedItem = dropdown.querySelector('div.dropdown__value');

function dropList() {
  if (dropdownList.classList.contains('dropdown__list_active')) {
    dropdownList.classList.remove('dropdown__list_active');
  } else {
    dropdownList.classList.add('dropdown__list_active');
  }
};

dropdown.addEventListener('click', dropList);

listOfItems.forEach((item) => item.onclick = () => {
  dropList;
  selectedItem.textContent = item.textContent;
  return false;
});

