import './style.css';
import {
  add, handleUI, remove,
} from './modules/UI.js';
import { getLocalStorage, addLocalStorage, editLocalStorage } from './modules/localstorage.js';
import List from './modules/constructor.js';

handleUI();
add();

const enterTodo = document.getElementById('enter-todo');
enterTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const description = document.getElementById('enter-todo').value;
    const complete = false;
    const todoList = getLocalStorage();
    const index = todoList.length + 1;
    if (description === '') {
      const error = document.getElementById('error');
      error.textContent = 'Task description cannot be empty!';
      setTimeout(() => {
        error.textContent = '';
      }, 2000);
    } else {
      const newTodo = new List(description, complete, index);
      window.location.reload();
      addLocalStorage(newTodo);
    }
  }
});

const removeBtn = document.querySelectorAll('.remove');
removeBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btnID = e.target.id;
    remove(btnID);
    btn.parentElement.parentElement.remove();
    window.location.reload();
  });
});

const boxes = document.getElementsByClassName('entertodo').length;
export default function statusManager(id) {
  for (let i = 1; i <= boxes; i++) {
    const checkbox = document.getElementById(String(i));
    localStorage.setItem(`checkbox${String(i)}`, checkbox.checked);

    const getTodos = getLocalStorage().localTodos;
    const completedTasks = getTodos.filter((task) => task.index === parseInt(id, 10));
    completedTasks[0].complete = true;
    getTodos[id - 1].complete = completedTasks[0].complete;
    localStorage.setItem('todolist', JSON.stringify(getTodos));
  }
}

for (let i = 1; i <= boxes; i++) {
  const getTodos = getLocalStorage().localTodos;
  if (getTodos[i - 1].complete === true) {
    const checked = JSON.parse(localStorage.getItem(`checkbox${String(i)}`));
    document.getElementById(String(i)).checked = checked;
  }
}

window.addEventListener('change', (e) => {
  const { id } = e.target;
  const targetElement = e.target;
  const labelElement = targetElement.nextElementSibling;
  labelElement.classList.add('active');

  statusManager(id);
});

const ul = document.getElementById('to-do-container');
const refresh = document.getElementById('refreshIcon');
refresh.addEventListener('click', () => {
  ul.classList.add('active');
  localStorage.clear();
  window.location.reload();
});

const deleteAllChecked = document.getElementById('complete');
deleteAllChecked.addEventListener('click', () => {
  const getTasks = getLocalStorage().localTodos;
  let incompleteTodos = getTasks.filter((task) => task.complete !== true);
  
  incompleteTodos = incompleteTodos.map((task, index) => {
    const result = {
      ...task,
      index: index + 1,
    };
    return result;
  });
  localStorage.setItem('todolist', JSON.stringify(incompleteTodos));
  window.location.reload();
});

const editBtn = document.querySelectorAll('.edit');
editBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const { id } = e.target;
    editLocalStorage(id);
  });
});
