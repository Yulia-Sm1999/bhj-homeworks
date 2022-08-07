let prevBtn = document.querySelector('div.slider__arrow_prev');
let nextBtn = document.querySelector('div.slider__arrow_next');
let photoCollection = [...document.querySelectorAll('div.slider__items div.slider__item')];
let activePhoto = document.querySelector('div.slider__item_active');

let makePhotoNotActive = () => {
  activePhoto.classList.remove('slider__item_active');
}

let getPrevPhoto = () => {
  if (!activePhoto.previousElementSibling) {
    photoCollection[photoCollection.length - 1].classList.add('slider__item_active');
    makePhotoNotActive;
  } else {
    activePhoto.previousElementSibling.classList.add('slider__item_active');
    makePhotoNotActive;
  }
};

let getnextPhoto = () => {
  if (!activePhoto.nextElementSibling) {
    photoCollection[photoCollection.length - photoCollection.length].classList.add('slider__item_active');
    makePhotoNotActive;
  } else {
    activePhoto.nextElementSibling.classList.add('slider__item_active');
    makePhotoNotActive;
  }
};

prevBtn.onclick = getPrevPhoto;
nextBtn.onclick = getnextPhoto;