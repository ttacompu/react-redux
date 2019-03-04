import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import * as actions from '../actions';
import TodoItem from './TodoItem';
import { FilterByVisibility } from '../reducers'



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
        const { toggleTodo, ...rest } = this.props;
        return <TodoList
            {...rest}
            onTodoClick={toggleTodo}
        />
    }
}

const mapStateTodoListToProps = (state, { match }) => {
    const filter = (match.params && match.params.filter) ? match.params.filter : 'all';
    return { todos: FilterByVisibility(state, filter), filter }
}



TodoListContainer = withRouter(connect(mapStateTodoListToProps, actions)(TodoListContainer));

export default TodoListContainer;