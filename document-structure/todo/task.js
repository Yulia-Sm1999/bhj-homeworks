const addButton = document.getElementById('tasks__add');
let taskInput = document.getElementById('task__input');
let tasksArea = document.getElementById('tasks__list');

function createTask() {
  let task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `<div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a>`;

  taskInput.value = '';
  tasksArea.appendChild(task);
  localStorage.setItem('tasks', tasksArea.innerHTML);

  let deleteTaskBtn = task.querySelector('.task__remove');
  deleteTaskBtn.addEventListener('click', () => task.remove());
}

document.addEventListener('keyup', event => {
  if ((event.code === 'Enter') && (taskInput.value != '')) {
    createTask();
  };
  event.preventDefault();
});

addButton.addEventListener('click', event => {
  if ((addButton.click) && (taskInput.value != '')) {
    createTask();
  };
  event.preventDefault();
});