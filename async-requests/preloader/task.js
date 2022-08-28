let currencies = document.getElementById('items');
let img = document.querySelector('.loader_active');
let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.send();

request.onload = () => {
  let response = JSON.parse(request.response);
  let responseCurrencies = response.response.Valute;
  console.log(response);
  console.log(responseCurrencies);

  for (key in responseCurrencies) {
    let cardItem = document.createElement('div');
    cardItem.classList.add('item');
    cardItem.append
    cardItem.innerHTML = `
      <div class="item__code" >
        ${responseCurrencies[key].CharCode}
      </div>
      <div class="item__value">
        ${responseCurrencies[key].Value}
      </div>
      <div class="item__currency">
          руб.
      </div>
      `;
    currencies.appendChild(cardItem);
  };
  img.classList.remove('loader_active');
};

