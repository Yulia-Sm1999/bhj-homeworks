let book = document.getElementById('book');
let fontElements = document.querySelectorAll('a.font-size');
let textColors = [...document.querySelector('div.book__control_color').querySelectorAll('a.color')];
let backgroundColors = [...document.querySelector('div.book__control_background').querySelectorAll('a.color')];


fontElements.forEach(currentFont => {

  currentFont.onclick = () => {
    document.querySelector('a.font-size_active').classList.remove('font-size_active');
    currentFont.classList.add('font-size_active');

    if (book.classList.contains('book_fs-small')) {
      book.classList.remove('book_fs-small');
    };

    if (book.classList.contains('book_fs-big')) {
      book.classList.remove('book_fs-big');
    };

    if (currentFont.classList.contains('font-size_small')) {
      book.classList.add('book_fs-small');
      return false;
    } else if (currentFont.classList.contains('font-size_big')) {
      book.classList.add('book_fs-big');
      return false;
    } else {
      return false;
    };
  }
});

textColors.forEach(currentTextColor => {

  currentTextColor.onclick = () => {
    let textColors = [...document.querySelectorAll('.book__control_color a.color')];
    textColors.forEach(el => el.classList.remove('color_active'));
    currentTextColor.classList.add('color_active');

    if (book.classList.contains('book_color-gray')) {
      book.classList.remove('book_color-gray');
    };

    if (book.classList.contains('book_color-whitesmoke')) {
      book.classList.remove('book_color-whitesmoke');
    };

    if (currentTextColor.classList.contains('text_color_gray')) {
      book.classList.add('book_color-gray');
      return false;
    } else if (currentTextColor.classList.contains('text_color_whitesmoke')) {
      book.classList.add('book_color-whitesmoke');
      return false;
    } else {
      return false;
    };
  }
}); 

backgroundColors.forEach(currentBackgroundColor => {

  currentBackgroundColor.onclick = () => {
    let backgroundColors = [...document.querySelectorAll('.book__control_background a.color')];
    backgroundColors.forEach(el => el.classList.remove('color_active'));
    currentBackgroundColor.classList.add('color_active');

    if (book.classList.contains('book_bg-gray')) {
      book.classList.remove('book_bg-gray');
    };

    if (book.classList.contains('book_bg-black')) {
      book.classList.remove('book_bg-black');
    };

    if (currentBackgroundColor.classList.contains('bg_color_gray')) {
      book.classList.add('book_bg-gray');
      return false;
    } else if (currentBackgroundColor.classList.contains('bg_color_black')){
      book.classList.add('book_bg-black');
      return false;
    } else {
      return false;
    };
  }
})