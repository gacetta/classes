let todos = [];

const filters = {
    searchText: '',
    hideCompleted: false
}

// Check for existing data in storage
const todosJSON = localStorage.getItem('todos');

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}
console.log(todosJSON);

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    })

    document.querySelector('#todos').innerHTML = '';

    const todoParagraph = document.createElement('h2');
    todoParagraph.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(todoParagraph);

    filteredTodos.forEach(function (todo) {
        if (!filters.hideCompleted || (filters.hideCompleted && !todo.completed)) {
            const newTodo = document.createElement('p');
            newTodo.textContent = todo.text;
            document.querySelector('#todos').appendChild(newTodo);
        }
    })

}

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false    
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos, filters);
    e.target.elements.todoText.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos,filters);
})