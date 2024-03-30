async function fetchTodos() {
    const response = await fetch('/todos');
    const todos = await response.json();
    const listElement = document.getElementById('todo-list');
    listElement.innerHTML = ''; // リストをクリア
    todos.forEach(todo => {
        const todoElement = document.createElement('li');
        todoElement.textContent = todo.text;
        listElement.appendChild(todoElement);
    });
}

async function addTodo() {
    const inputElement = document.getElementById('todo-input');
    const text = inputElement.value;
    await fetch('/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    inputElement.value = ''; // 入力フィールドをクリア
    fetchTodos(); // TODOリストを更新
}

fetchTodos(); // アプリの初期化時にTODOリストを取得
