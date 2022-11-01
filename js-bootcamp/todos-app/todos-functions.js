// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        if (filters.hideCompleted && todo.completed) return false;
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#todos').innerHTML = '';
    
    generateSummaryDOM(filteredTodos);

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const newTodo = document.createElement('p');
    newTodo.textContent = todo.text;
    return newTodo;
}

// Get the DOM elements for list summary
const generateSummaryDOM = (filteredTodos) => {
    const todosLeft = document.createElement('h2');
    todosLeft.textContent = `You have ${filteredTodos.length} todos left`;
    document.querySelector('#todos').appendChild(todosLeft);
}

// 'use strict'

// // Fetch existing todos from localStorage
// const getSavedTodos = () => {
//     const todosJSON = localStorage.getItem('todos');

//     try {
//         return todosJSON ? JSON.parse(todosJSON) : [];
//     } catch (e) {
//         return [];
//     }
// }

// // Save todos to localStorage
// const saveTodos = (todos) => {
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// // remove todo by id
// const removeTodo = (id) => {
//     const todoIndex = todos.findIndex((todo) => todo.id === id);
//     if (todoIndex >= 0) {
//         todos.splice(todoIndex, 1);
//     };
// }

// // Toggle the completed value for a given todo
// const toggleTodo = (id) => {
//     const todo = todos.find((todo) => todo.id === id);

//     if (todo) {
//         todo.completed = !todo.completed;
//     }
// }

// //render application todos based on filters
// const renderTodos = (todos, filters) => {
//     const filteredTodos = todos.filter((todo) => {
//         const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
//         const hideCompletedMatch =  !filters.hideCompleted || !todo.completed;
//         return searchTextMatch && hideCompletedMatch;
//     });
    
//     const incompleteTodos = todos.filter((todo) => !todo.completed);
    
//     document.querySelector('#todos').innerHTML = '';
//     document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
//     filteredTodos.forEach((todo) => {
//         document.querySelector('#todos').appendChild(generateTodoDOM(todo));
//     });
// }

// //get the DOM elements for an individual note
// const generateTodoDOM = (todo) => {
//     const todoEl = document.createElement('div');
//     const checkbox = document.createElement('input');
//     const todoText = document.createElement('span');
//     const removeButton = document.createElement('button');
    
//     // Setup todo checkbox
//     checkbox.setAttribute('type', 'checkbox');
//     todoEl.appendChild(checkbox);
//     checkbox.checked = todo.completed;
//     checkbox.addEventListener('change', () => {
//        toggleTodo(todo.id);
//        saveTodos(todos);
//        renderTodos(todos, filters);
//     })

//     // Setup todo text
//     todoText.textContent = todo.text;
//     todoEl.appendChild(todoText);

//     // Setup remove todo button
//     removeButton.textContent = 'x';
//     todoEl.appendChild(removeButton);
//     removeButton.addEventListener('click', () => {
//         removeTodo(todo.id);
//         saveTodos(todos);
//         renderTodos(todos, filters);
//     })

//     return todoEl;
// }

// //get the dom elements for list summary
// const generateSummaryDOM = (incompleteTodos) =>{
//     const summary = document.createElement('h3');
//     summary.textContent = `You have ${incompleteTodos.length} todos left`;
//     return summary;
// }