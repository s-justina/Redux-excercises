import React from 'react';

const AddTodo = () => {
    let input;
    const handleSubmit = (e) => {
        const value = input.value.trim();
        console.log(value);
    };
    return (
        <div>
            <input type="text" ref={node => {
                input = node
            }}/>
            <button type='submit' onClick={handleSubmit}>Add new task</button>
        </div>
    )
};

export default AddTodo;