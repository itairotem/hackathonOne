document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const tasks = [];
  
    taskForm.addEventListener('submit', function (e) {
      e.preventDefault();
      addTask();
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task');
        return;
      }
  
      tasks.push(taskText);
      renderTasks();
      taskInput.value = '';
    }
  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = task;
        const deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  
        deleteButton.addEventListener('click', function () {
          deleteTask(index);
        });
  
        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
      });
    }
  
    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }
  });
  