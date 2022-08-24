const addButton = document.getElementById('tasks__add');
let taskInput = document.getElementById('task__input');
let tasksArea = document.getElementById('tasks__list');
let allTasks = [];

function createTask(taskText) {
  let task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `<div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a>`;

  taskInput.value = '';
  tasksArea.appendChild(task);
  allTasks.push(task);

  let deleteTaskBtn = task.querySelector('.task__remove');
  deleteTaskBtn.addEventListener('click', () => {
    task.remove();
    localStorage.removeItem('task');
  });
};

addButton.addEventListener('click', event => {
  if ((addButton.click) && (taskInput.value.trim() != '')) {
    createTask(taskInput.value);
  };
  event.preventDefault();
});

localStorage.setItem('tasks', JSON.stringify(allTasks));

window.addEventListener('reload', () => {
  let savedTasks = JSON.parse(localStorage.getItem('tasks'));
  savedTasks.forEach(el => createTask(el));
})