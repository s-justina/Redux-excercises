import React from 'react';
import {connect} from 'react-redux'

const TodoList = ({todos}) => {
    return (
        <pre>
            {JSON.stringify(todos, null, 2)}
        </pre>
    )
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps)(TodoList);