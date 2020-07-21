import React from 'react';
import {connect} from 'react-redux'

const TodoList = ({todos}) => {
    return (
        <div>
            {JSON.stringify(todos)}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps)(TodoList);