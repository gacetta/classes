const todos = [{
    text: 'Finish section 6',
    completed: false
}, {
    text: 'Taxes',
    completed: false
}, {
    text: 'Shell work',
    completed: true
}, {
    text: 'Definitions',
    completed: true
}, {
    text: 'Start section 7',
    completed: false
}]

const deleteTodo = function(todos, itemToDelete) {
    const index = todos.findIndex(function (todos) {
        return todos.text.toLowerCase() === itemToDelete.toLowerCase()
    })
    if (index >= 0) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed 
    })
}

const sortTodos = function (notes) {
    notes.sort(function (a, b){
        if (a.completed) {
            return 1
        } else if (b.completed) {
            return -1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'taxes')
// console.log(todos)