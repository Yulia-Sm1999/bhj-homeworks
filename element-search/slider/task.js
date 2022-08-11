let prevBtn = document.querySelector('div.slider__arrow_prev');
let nextBtn = document.querySelector('div.slider__arrow_next');
let photoCollection = [...document.querySelectorAll('div.slider__items div.slider__item')];
let sliderDots = [...document.querySelectorAll('div.slider__dot')];


  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = () => {

      [...document.querySelectorAll('div.slider__dot_active')].forEach(activeDot => activeDot.classList.remove('slider__dot_active'));
    
      makePhotoNotActive();
      sliderDots[i].classList.add('slider__dot_active');
      photoCollection[i].classList.add('slider__item_active');
    }
  };

function makePhotoNotActive() {
  let activePhoto = photoCollection.findIndex(item => item.classList.contains('slider__item_active'));
  photoCollection[activePhoto].classList.remove('slider__item_active');
}

let getPrevPhoto = () => {
  let activePhoto = photoCollection.findIndex(item => item.classList.contains('slider__item_active'));
  photoCollection[activePhoto].classList.remove('slider__item_active');
  [...document.querySelectorAll('div.slider__dot_active')].forEach(activeDot => activeDot.classList.remove('slider__dot_active'));
  sliderDots[activePhoto].classList.add('slider__dot_active');

  if (!photoCollection[activePhoto].previousElementSibling) {
    photoCollection[photoCollection.length - 1].classList.add('slider__item_active');
  } else {
    photoCollection[activePhoto - 1].classList.add('slider__item_active');
  }
};

let getnextPhoto = () => {
  let activePhoto = photoCollection.findIndex(item => item.classList.contains('slider__item_active'));
  photoCollection[activePhoto].classList.remove('slider__item_active');
  [...document.querySelectorAll('div.slider__dot_active')].forEach(activeDot => activeDot.classList.remove('slider__dot_active'));
  sliderDots[activePhoto].classList.add('slider__dot_active');

  if (!photoCollection[activePhoto].nextElementSibling) {
    photoCollection[photoCollection.length - photoCollection.length].classList.add('slider__item_active');
  } else {
    photoCollection[activePhoto + 1].classList.add('slider__item_active');
  }
};

prevBtn.onclick = getPrevPhoto;
nextBtn.onclick = getnextPhoto;