import { setFilters } from "./filters";
import { createTodo, refreshTodos } from './todos'
import { renderTodos } from './views'

renderTodos();

document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderTodos();
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.target.checked,
  })
  renderTodos();
})

document.querySelector('#add-todo').addEventListener('submit', (e) => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault();
  
  if (text !== '') {
      createTodo(text);
      renderTodos();
      e.target.elements.text.value = '';
  }
})

window.addEventListener('storage', (e) => {
  if (e.key === 'todos') {
    refreshTodos();
    renderTodos();
  }
})