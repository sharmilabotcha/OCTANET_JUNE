document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const taskList = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            const taskText = document.createElement('span');
            taskText.textContent = task.text;
            taskText.classList.add('task-text');
            if (task.completed) {
                taskText.style.textDecoration = 'line-through';
            }

            const dueDate = document.createElement('span');
            dueDate.textContent = task.dueDate ? ` |   ${task.dueDate}` : '';
            dueDate.classList.add('due-date');
            const completeBtn = document.createElement('completeb');
            completeBtn.textContent = task.completed ? '😊' : '😕';
            completeBtn.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });

            const deleteBtn = document.createElement('buttond');
            deleteBtn.textContent = 'x';
            deleteBtn.addEventListener('click', () => {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });

            li.appendChild(taskText);
            li.appendChild(dueDate);
            li.appendChild(deleteBtn);
            li.appendChild(completeBtn);
            taskList.appendChild(li);
        });
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = taskInput.value.trim();
        const dueDate = dueDateInput.value.trim();
        if (task) {
            tasks.push({ text: task, dueDate: dueDate || null, completed: false });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskInput.value = '';
            dueDateInput.value = '';
            renderTasks();
        }
    });

    renderTasks();
});
