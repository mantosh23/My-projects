document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const span = document.createElement('span');
        span.textContent = todoText;
        todoItem.appendChild(span);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);
        todoInput.value = '';
        todoInput.focus();
    }
}
