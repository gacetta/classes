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

const filters = {
    searchText: ''
}

function renderTodos(todos, filters) {
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredTodos)
    
    document.querySelector('#todos').innerHTML = '';

    // Render Todos Left
    const todosLeft = document.createElement('h2');
    todosLeft.textContent = `You have ${filteredTodos.length} todos left`;
    document.querySelector('#todos').appendChild(todosLeft);

    filteredTodos.forEach((el) => {
        const newTodo = document.createElement('p');
        newTodo.textContent = el.text;
        document.querySelector('#todos').appendChild(newTodo);
    })
}

renderTodos(todos, filters);

// Event Listener for Search Todos Text Input
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

// Event Listener for Add New Todo button
document.querySelector('#add-todo').addEventListener('click', (e) => {
    console.log('you clicked me you fool!')
})

// Event Listener for Add New Todo Text Input
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