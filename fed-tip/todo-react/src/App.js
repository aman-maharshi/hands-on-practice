const App = () => {
    return (
        <div className="container">
            <h3>Simple Todo in React</h3>
            <form className="form">
                <input type="text" className="todo-input" />
                <button type="submit">Add</button>
            </form>
            <ul className="list"></ul>
        </div>
    )
}

export default App
