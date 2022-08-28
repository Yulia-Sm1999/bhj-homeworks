const button = document.getElementById('tasks__add');
let taskInput = document.getElementById('task__input');
let tasksArea = document.getElementById('tasks__list');
let savedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : JSON.parse('[]');

let renderTasks = taskText => {
  let task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `<div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a>`;
  taskInput.value = '';
  tasksArea.appendChild(task);

  taskToDelete = task.querySelector('.task__remove');
  taskToDelete.addEventListener('click', () => {
    task.remove();
    let tasksText = [...tasksArea.children].map(el => el.textContent);
    savedTasks = tasksText;
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  });
};

window.addEventListener('load', () => {
  if (localStorage.getItem('tasks')) {
    savedTasks.forEach(el => {
      renderTasks(el);
    });
  };
});

let makeNewTask = (taskText) => {
  renderTasks(taskText);
  savedTasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(savedTasks)); 
};

button.addEventListener('click', event => {
  if ((button.click) && (taskInput.value.trim() != '')) {
    makeNewTask(taskInput.value);
  };
  event.preventDefault();
});

