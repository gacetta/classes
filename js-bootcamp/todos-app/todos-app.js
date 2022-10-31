const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean Kitchen',
    completed: true
}, {
    text: 'Buy Food',
    completed: true
}, {
    text: 'Do Work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const incompleteTodos = todos.filter((todo) => {
    return !todo.completed;
})

// Create How Many Todos left h2
const todosLeft = document.createElement('h2');
todosLeft.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(todosLeft);

// Add a p for each todo
todos.forEach((el) => {
    const newTodo = document.createElement('p');
    newTodo.textContent = el.text;
    document.querySelector('body').appendChild(newTodo);
})

document.querySelector('#add-todo').addEventListener('click', (e) => {
    console.log('you clicked me you fool!')
})

document.querySelector('#new-todo').addEventListener('input', (e) => {
    console.log(e.target.value);
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