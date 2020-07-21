import React from 'react';
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";

function App() {
    return (
        <div className="App">
            <h2>List of tasks:</h2>
            <AddTodo/>
            <TodoList/>
        </div>
    );
}

export default App;
