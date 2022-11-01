let todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters);

document.querySelector('#add-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = e.target.elements.todoText.value;
    const newTodo = {
        text: todoText,
        completed: false,
    }
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.todoText.value = '';
})

// Event Listener for Search Todos Text Input
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

// Event Listener for Hide Completed Checkbox
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})

// 'use strict'

// const todos = getSavedTodos();

// const filters = {
//     searchText: '',
//     hideCompleted: false
// }

// renderTodos(todos, filters);

// document.querySelector('#search-text').addEventListener('input', (e) => {
//     filters.searchText = e.target.value;
//     renderTodos(todos, filters);
// });

// document.querySelector('#add-todo').addEventListener('submit', (e) => {
//     e.preventDefault();
//     todos.push( {
//         id: uuidv4(),
//         text: e.target.elements.text.value,
//         completed: false
//     });
//     saveTodos(todos);
//     renderTodos(todos, filters);
//     e.target.elements.text.value = '';
// });

// document.querySelector('#hide-completed').addEventListener('change', (e) => {
//     filters.hideCompleted = e.target.checked;
//     renderTodos(todos, filters);
// });