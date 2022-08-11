let menuLinks = [...document.getElementsByClassName('menu__link')];
let mainMenu = document.querySelector('ul.menu_main');
let menuLists = [...document.querySelectorAll('ul.menu')];

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].onclick = () => {
    let parentLink = menuLinks[i].closest('li');
    let menuElement = parentLink.querySelector('ul');
    
    if (menuElement.classList.contains('menu_active')) {
      menuElement.classList.remove('menu_active');
      return false;
    } else {
      if ([...mainMenu.querySelectorAll('ul.menu_active')]) {
        [...mainMenu.querySelectorAll('ul.menu_active')].forEach(el => el.classList.remove('menu_active'));
      };

      menuElement.classList.add('menu_active');
      return false;
    }
  }
};


