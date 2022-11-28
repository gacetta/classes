'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos');

    const filteredTodos = todos.filter((todo) => {
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    todoEl.innerHTML = '';
    
    generateSummaryDOM(incompleteTodos);
    console.log(filteredTodos.length)

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo));
        })
    } else {
        const emptyMessageEl = document.createElement('p');
        emptyMessageEl.classList.add('empty-message');
        emptyMessageEl.textContent = 'No to-dos to show';
        todoEl.append(emptyMessageEl);
    }
}

// Remove the Todo when button is clicked
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

// Toggle Todo Completed
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkboxEl = document.createElement('input');
    const textEl = document.createElement('span');
    const removeButton = document.createElement('button');

    // Set up Checkbox
    checkboxEl.setAttribute('type', 'checkbox');
    checkboxEl.checked = todo.completed;
    containerEl.appendChild(checkboxEl);
    checkboxEl.addEventListener('change', (e) => {
        toggleTodo(todo.id);
        checkboxEl.checked = todo.completed;
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // Set up todo text
    textEl.textContent = todo.text;
    containerEl.appendChild(textEl);

    // Set up container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    todoEl.append(containerEl);

    // Set up remove button
    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text');
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    

    return todoEl;
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.classList.add('list-title');
    const plural = incompleteTodos.length > 1 ? 's' : '';
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
    document.querySelector('#todos').appendChild(summary);
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