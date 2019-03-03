import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { toggleTodoAction } from '../actions';
import TodoItem from './TodoItem';
import {FilterByVisibility} from '../reducers'


const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div>
            <ul>
                {
                    todos.map((todo) => <TodoItem key={todo.id} completed={todo.completed} text={todo.text}
                        onClick={() =>
                            onTodoClick(todo.id)
                        } />)
                }
            </ul>
        </div>
    )
}

const mapStateTodoListToProps = (state, { match }) => {
    const filter = (match.params && match.params.filter) ? match.params.filter : 'all';
    return { todos: FilterByVisibility(state, filter) }
}



const TodoListContainer = withRouter(connect(mapStateTodoListToProps, { onTodoClick : toggleTodoAction})(TodoList));

export default TodoListContainer;