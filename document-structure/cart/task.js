let quantityButtons = [...document.querySelectorAll('.product__quantity-control')];
let productsToAdd = [...document.querySelectorAll('.product__add')];
let decreaseBtn = [...document.querySelectorAll('.product__quantity-control_dec')];
let increaseBtn = [...document.querySelectorAll('.product__quantity-control_inc')];
let cart = document.querySelector('.cart__products');

let showCart = () => {
  if (cart.children.length == 0) {
    cart.parentElement.style.display = 'none';
  } else if (cart.children.length > 0) {
    cart.parentElement.style.display = 'block';
  }
};
showCart();

decreaseBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let quantity = btn.parentElement.querySelector('.product__quantity-value');
    let product = quantity.closest('.product');

    if (Number(quantity.innerText) !== 0) {
      quantity.innerText = Number(quantity.innerText) - 1;

      if ([...cart.children].some(el => el.dataset.id == product.dataset.id)) {
        let productInCart = [...cart.children].find(el => el.dataset.id == product.dataset.id);
        productInCart.querySelector('.cart__product-count').innerText = Number(productInCart.innerText) - 1;

        if (productInCart.querySelector('.cart__product-count').innerText == 0) {
          productInCart.remove();
        }
      }
    };
    showCart();
  })
});

increaseBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let quantity = btn.parentElement.querySelector('.product__quantity-value');
    let product = quantity.closest('.product');
    quantity.innerText = Number(quantity.innerText) + 1;

    if ([...cart.children].some(el => el.dataset.id == product.dataset.id)) {
      let productInCart = [...cart.children].find(el => el.dataset.id == product.dataset.id);
      productInCart.querySelector('.cart__product-count').innerText = Number(productInCart.innerText) + 1;
    }
  })
});

productsToAdd.forEach(item => {
  let quantity = item.parentElement.querySelector('.product__quantity-value');
  let img = item.closest('.product').querySelector('.product__image');
  let product = item.closest('.product');
  let productId = product.dataset.id;

  item.addEventListener('click', () => {
    if ((Number(quantity.innerText) > 0) && ([...cart.children].every(el => el.dataset.id != productId))) {
      cart.parentElement.style.display = 'block';
      let addedProduct = document.createElement('div');
      cart.appendChild(addedProduct);
      addedProduct.outerHTML = `
      <div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${img.src}">
        <div class="cart__product-count">${quantity.innerText}</div>
      </div>
      `
    }
  });
});