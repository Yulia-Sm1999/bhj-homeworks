const textArea = document.getElementById('editor');
const button = document.getElementById('btn');

// window.addEventListener('load', () => {
//   if (localStorage.getItem('text')) {
//     console.log(localStorage.getItem('text'))
//     textArea.value = localStorage.getItem('text');
//   };
// });

if (localStorage.getItem('text')) {
  textArea.value = localStorage.getItem('text')
};

textArea.addEventListener('input', () => {
  localStorage.setItem('text', textArea.value);
});

button.addEventListener('click', () => {
  textArea.value = '';
  localStorage.removeItem('text');
})
