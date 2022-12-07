import { getTodos, toggleTodo, removeTodo } from "./todos";
import { getFilters } from "./filters";

const renderTodos = () => {
  const {searchText, hideCompleted} = getFilters();
  const todoEl = document.querySelector('#todos');
  console.log(todoEl)

  const filteredTodos = getTodos().filter((todo) => {
    const hideCompletedMatch = !hideCompleted || !todo.completed
    const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);
  
  todoEl.innerHTML = '';
  todoEl.append(generateSummaryDOM(incompleteTodos))

  if (filteredTodos.length > 0) {
      filteredTodos.forEach((todo) => {
          todoEl.appendChild(generateTodoDOM(todo));
      })
  } else {
      const emptyMessageEl = document.createElement('p');
      emptyMessageEl.classList.add('empty-message');
      emptyMessageEl.textContent = 'There are no todos to show';
      todoEl.append(emptyMessageEl);
  }
}

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
      renderTodos();
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
      renderTodos();
  })
  return todoEl;
}


const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.classList.add('list-title');
  const plural = incompleteTodos.length !== 1 ? 's' : '';
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
  return summary;
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }