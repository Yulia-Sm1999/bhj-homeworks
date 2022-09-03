const currencies = document.getElementById('items');
const img = document.querySelector('.loader_active');

window.onload = getCurrencies(JSON.parse(localStorage.valute));

function getCurrencies(obj) {
  for (key in obj) {
    let cardItem = document.createElement('div');
    cardItem.classList.add('item');
    cardItem.innerHTML = `
      <div class="item__code" >
        ${obj[key].CharCode}
      </div>
      <div class="item__value">
        ${obj[key].Value}
      </div>
      <div class="item__currency">
          руб.
      </div>
      `;
    currencies.appendChild(cardItem);
    img.classList.remove('loader_active');
  };
};

const request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.send();

request.onload = () => {
  let response = JSON.parse(request.response);
  let responseCurrencies = response.response.Valute;
  console.log(responseCurrencies)
  localStorage.valute = JSON.stringify(responseCurrencies);
  let valuteItems = [...currencies.children];

  for (let i = 0; i < valuteItems.length; i++) {
    let charcode = valuteItems[i].querySelector('.item__code')
    let value = valuteItems[i].querySelector('.item__value');
    value.innerText = responseCurrencies[charcode.innerText].Value;
    console.log('updated')
  };
};

