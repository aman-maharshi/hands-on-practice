import { useState } from "react"
import TodoItem from "./TodoItem"

const App = () => {
    const [userInput, setUserInput] = useState("")
    const [todoList, setTodoList] = useState([])
    const [itemToEdit, setItemToEdit] = useState(null)

    const handleFormSubmit = e => {
        e.preventDefault()
        if (userInput) {
            if (itemToEdit) {
                // Edit Existing Item
                const editId = itemToEdit.id
                const editIndex = todoList.indexOf(itemToEdit)
                const copyOfList = [...todoList]
                copyOfList.splice(editIndex, 1, { id: editId, task: userInput })
                setTodoList(copyOfList)
            } else {
                // Add New Item
                const newTodoItem = {
                    id: new Date().getTime(),
                    task: userInput
                }

                setTodoList([...todoList, newTodoItem])
            }
        } else {
            console.log("Enter a task")
        }

        setUserInput("")
        setItemToEdit(null)
    }

    return (
        <div className="container">
            <h3>Simple Todo in React</h3>
            <form className="form" onSubmit={handleFormSubmit}>
                <input value={userInput} onChange={e => setUserInput(e.target.value)} type="text" className="todo-input" />
                <button type="submit">{itemToEdit ? "Edit" : "Add"}</button>
            </form>
            <ul className="list">
                {todoList.map(item => {
                    return <TodoItem key={item.id} id={item.id} task={item.task} todoList={todoList} setTodoList={setTodoList} setUserInput={setUserInput} setItemToEdit={setItemToEdit} />
                })}
            </ul>
        </div>
    )
}

export default App
