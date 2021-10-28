const TodoItem = ({ id, task, todoList, setTodoList, setUserInput, setItemToEdit }) => {
    const handleDeleteTodo = itemId => {
        setTodoList(todoList.filter(item => item.id !== itemId))
    }

    const handleEditTodo = itemId => {
        const editingItemDetails = todoList.filter(item => item.id === itemId)[0]
        setItemToEdit(editingItemDetails)
        setUserInput(editingItemDetails.task)
    }

    return (
        <li>
            {task}{" "}
            <button onClick={() => handleEditTodo(id)} className="editBtn">
                Edit
            </button>
            <button onClick={() => handleDeleteTodo(id)} className="deleteBtn">
                X
            </button>
        </li>
    )
}

export default TodoItem
