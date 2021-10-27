// VARIABLES
const todoForm = document.querySelector(".form")
const todoInput = document.querySelector(".todo-input")
const todoList = document.querySelector(".list")

const allTodoItems = []
let editTodoIndex = null
let editElement = null

// FUNCTIONS
const handleFormSubmit = e => {
    e.preventDefault()
    const userInput = todoInput.value

    if (userInput && !editTodoIndex) {
        if (allTodoItems.includes(userInput)) {
            console.log("Task already added")
        } else {
            /*--------- ADDING NEW TODO ITEM ----------*/
            allTodoItems.push(userInput)
            const todoItemElement = document.createElement("li")
            todoItemElement.textContent = userInput

            // creating edit button
            const editBtn = document.createElement("button")
            editBtn.classList.add("editBtn")
            editBtn.textContent = "Edit"
            todoItemElement.appendChild(editBtn)

            // creating delete button
            const xBtn = document.createElement("button")
            xBtn.classList.add("close")
            xBtn.textContent = "X"
            todoItemElement.appendChild(xBtn)

            todoList.appendChild(todoItemElement)
        }
    } else if (userInput && editTodoIndex) {
        /*------- EDITING EXISTING TODO ITEM ------------*/
        // Update the DOM
        editElement.childNodes[0].nodeValue = userInput

        // Update the allTodoItems Array
        allTodoItems[editTodoIndex] = userInput

        // Resetting the edit variables
        editTodoIndex = null
        editElement = null
    } else if (!userInput) {
        console.log("Please enter a todo Item")
    }

    console.log(allTodoItems)
    todoForm.reset()
}

const handleTodoDelete = e => {
    if (e.target.classList.contains("close")) {
        // Update the DOM
        const itemToDelete = e.target.parentElement
        itemToDelete.remove()

        // Remove item from allTodoItems Array
        const itemTextContent = e.target.parentElement.textContent
        const todoItem = itemTextContent.substring(0, itemTextContent.length - 5)
        const itemIndex = allTodoItems.indexOf(todoItem)
        allTodoItems.splice(itemIndex, 1)

        // console the updated allTodoItems Array
        console.log(allTodoItems)
    }
}

const handleTodoEdit = e => {
    if (e.target.classList.contains("editBtn")) {
        editElement = e.target.parentElement
        const todoItem = e.target.parentElement.childNodes[0].nodeValue
        todoInput.value = todoItem

        const itemIndex = allTodoItems.indexOf(todoItem)
        editTodoIndex = itemIndex
    }
}

// EVENT LISTENERS
todoForm.addEventListener("submit", handleFormSubmit)
todoList.addEventListener("click", handleTodoDelete)
todoList.addEventListener("click", handleTodoEdit)
