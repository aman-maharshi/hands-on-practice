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

            const editBtn = document.createElement("button")
            editBtn.classList.add("editBtn")
            editBtn.textContent = "Edit"
            todoItemElement.appendChild(editBtn)

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
        itemToDelete.remove()

        // Remove item from Array
        const itemTextContent = e.target.parentElement.textContent
        const todoItem = itemTextContent.substring(0, itemTextContent.length - 5)
        const itemIndex = allTodoItems.indexOf(todoItem)
        allTodoItems.splice(itemIndex, 1)

        // console the updated Array
        console.log(allTodoItems)
    }
}

const handleTodoEdit = e => {
    if (e.target.classList.contains("editBtn")) {
        console.log("edit click")

        // Update item from Array

        // console the updated Array
    }
}

// EVENT LISTENERS
todoForm.addEventListener("submit", handleFormSubmit)
todoList.addEventListener("click", handleTodoDelete)
todoList.addEventListener("click", handleTodoEdit)
