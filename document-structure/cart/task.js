let quantityButtons = [...document.querySelectorAll('.product__quantity-control')];
let productsToAdd = [...document.querySelectorAll('.product__add')];

quantityButtons.forEach(btn => {
  let quantity = btn.parentElement.querySelector('.product__quantity-value');

  btn.addEventListener('click', () => {
    if ((btn.classList.contains('product__quantity-control_dec')) && (Number(quantity.innerHTML) !== 0)) {
      quantity.innerHTML = Number(quantity.innerHTML) - 1;
    } else if (btn.classList.contains('product__quantity-control_inc')) {
      quantity.innerHTML = Number(quantity.innerHTML) + 1;
    }
  })
});

productsToAdd.forEach(item => {
  let quantity = item.parentElement.querySelector('.product__quantity-value');
  let img = item.closest('.product').querySelector('.product__image');
  let product = item.closest('.product');
  let productId = product.dataset.id;
  let cart = document.querySelector('.cart__products');

  item.addEventListener('click', () => {
    if ([...cart.children].some(el => el.dataset.id == productId)) {
      let productInCart = [...cart.children].find(el => el.dataset.id == productId);
      
      if (Number(quantity.innerHTML) === 0) {
        productInCart.remove();
      } else {
        productInCart.querySelector('.cart__product-count').innerHTML = Number(quantity.innerHTML);
      };

    } else if (Number(quantity.innerHTML) > 0) {
      let addedProduct = document.createElement('div');
      cart.appendChild(addedProduct);
      addedProduct.outerHTML = `
      <div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${img.src}">
        <div class="cart__product-count">${quantity.innerHTML}</div>
      </div>
      `
    }
  });
});