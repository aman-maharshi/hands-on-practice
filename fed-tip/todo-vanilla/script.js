// VARIABLES
const todoForm = document.querySelector(".form")
const todoInput = document.querySelector(".todo-input")
const todoList = document.querySelector(".list")

const allTodoItems = []

// FUNCTIONS
const handleFormSubmit = e => {
    e.preventDefault()
    const userInput = todoInput.value

    if (userInput) {
        if (allTodoItems.includes(userInput)) {
            console.log("Task already added")
        } else {
            allTodoItems.push(userInput)
            const todoItemElement = document.createElement("li")
            todoItemElement.textContent = userInput

            const xBtn = document.createElement("button")
            xBtn.classList.add("close")
            xBtn.textContent = "X"
            todoItemElement.appendChild(xBtn)

            todoList.appendChild(todoItemElement)
        }
    } else {
        console.log("Please enter a todo Item")
    }

    console.log(allTodoItems)
    todoForm.reset()
}

const handleTodoDelete = e => {
    if (e.target.classList.contains("close")) {
        // Remove item from DOM
        const itemToDelete = e.target.parentElement
        console.log(itemToDelete)
        itemToDelete.remove()

        // Remove item from Array

        // console the updated Array
    }
}

// EVENT LISTENERS
todoForm.addEventListener("submit", handleFormSubmit)

todoList.addEventListener("click", handleTodoDelete)
