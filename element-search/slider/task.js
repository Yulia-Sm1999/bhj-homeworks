let prevBtn = document.querySelector('div.slider__arrow_prev');
let nextBtn = document.querySelector('div.slider__arrow_next');
let photoCollection = [...document.querySelectorAll('div.slider__items div.slider__item')];
let sliderDots = [...document.querySelectorAll('div.slider__dot')];

let getActivePhoto = (photoNumber) => {
  [...document.querySelectorAll('div.slider__dot_active')].forEach(activeDot => activeDot.classList.remove('slider__dot_active'));

  let makePhotoNotActive = () => {
    let activePhoto = photoCollection.findIndex(item => item.classList.contains('slider__item_active'));
    photoCollection[activePhoto].classList.remove('slider__item_active');
  };
  makePhotoNotActive();

  sliderDots[photoNumber].classList.add('slider__dot_active');
  photoCollection[photoNumber].classList.add('slider__item_active');
};

prevBtn.onclick = () => {
  let currentPhoto = photoCollection.findIndex(item => item.classList.contains('slider__item_active'));
  getActivePhoto((currentPhoto - 1 > -1) ? currentPhoto - 1 : photoCollection.length - 1);
};

nextBtn.onclick = () => {
  let currentPhoto = photoCollection.findIndex(item => item.classList.contains('slider__item_active'));
  getActivePhoto((currentPhoto + 1 < photoCollection.length) ? currentPhoto + 1 : photoCollection.length - photoCollection.length);
};

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = () => {
    getActivePhoto(i);
  }
};