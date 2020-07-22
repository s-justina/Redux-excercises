import React from 'react';
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";
import Footer from '../src/containers/Footer';

function App() {
    return (
        <div className="App">
            <h2>List of tasks:</h2>
            <AddTodo/>
            <TodoList/>
            <Footer/>
        </div>
    );
}

export default App;
