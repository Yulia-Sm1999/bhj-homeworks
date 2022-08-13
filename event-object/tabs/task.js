let tabs = [...document.querySelectorAll('div.tab')];
let tabsContent = [...document.querySelectorAll('div.tab__content')];

tabs.forEach(tab => tab.onclick = () => {
  [...document.querySelectorAll('div.tab_active')].forEach(item => item.classList.remove('tab_active'));
  tab.classList.add('tab_active');
  [...document.querySelectorAll('div.tab__content_active')].forEach(item => item.classList.remove('tab__content_active'));
  tabsContent[tabs.indexOf(tab)].classList.add('tab__content_active');
});