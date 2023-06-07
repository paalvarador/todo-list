let todos= []

function addTodo() {
    const input = document.getElementById('todo-input')
    const todoText = input.value.trim()

    if(todoText !== '') {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        }

        todos.push(todo)
        input.value = ''
        renderTodos()
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
    renderTodos()
}

function toggleComplete(id){
    todos = todos.map(todo => {
        if(todo.id === id){
            todo.completed = !todo.completed
        }
        return todo
    })
    renderTodos()
}

function renderTodos(){
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = ''

    todos.forEach(todo => {
        const li = document.createElement('li')
        console.log(`li = ${li.innerText}`)
        const checkbox = document.createElement('input')
        console.log(`checkbox = ${checkbox.value}`)
        checkbox.setAttribute("type", "checkbox")
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed
        checkbox.addEventListener('change', () => toggleComplete(todo.id))
        li.appendChild(checkbox)

        const span = document.createElement('span')
        span.innerText = todo.text
        li.appendChild(span)

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Eliminar'
        deleteButton.addEventListener('click', () => deleteTodo(todo.id))
        li.appendChild(deleteButton)

        todoList.appendChild(li)
    })
}