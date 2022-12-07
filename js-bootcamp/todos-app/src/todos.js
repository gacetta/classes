import { v4 as uuidv4 } from 'uuid';

let todos = [];

const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    console.log('Error loading todos from local Storage.  Todos are empty []')
    return [];
  }
}

const refreshTodos = () => {
  todos = loadTodos();
}

const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos));

const getTodos = () => todos;

const createTodo = (text) => {
  if (typeof text === 'string') {
    todos.push({
      id: uuidv4(),
      text,
      completed: false,
    })
    saveTodos();
  }
}

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
      todos.splice(todoIndex, 1);
      saveTodos();
    }
  }

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
      todo.completed = !todo.completed;
      saveTodos();
  }
}

refreshTodos();

export { getTodos, createTodo, removeTodo, saveTodos, toggleTodo, refreshTodos }