import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import * as actions from '../actions';
import TodoItem from './TodoItem';
import {  getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './FetchError';



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

class TodoListContainer extends React.Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter);
    }

    render() {
        const { toggleTodo, todos, isFetching, errorMessage  } = this.props;
        if(isFetching && !todos.length){
            return (<p>Loading ...</p>)
        }
        if(errorMessage && !todos.length ){
                return <FetchError message={errorMessage} onRetry={()=> this.fetchData()} />
        }

        return <TodoList todos={todos} onTodoClick={toggleTodo} />
    }
}

const mapStateTodoListToProps = (state, { match }) => {
    const filter = (match.params && match.params.filter) ? match.params.filter : 'all';
    return { 
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage : getErrorMessage(state, filter),
        filter 
    }
}



TodoListContainer = withRouter(connect(mapStateTodoListToProps, actions)(TodoListContainer));

export default TodoListContainer;