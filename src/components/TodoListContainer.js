import { connect} from 'react-redux';
import React from 'react';
import {toggleTodoAction} from '../actions';
import TodoItem from './TodoItem';


const FilterByVisibility = (data, filter)=>{
    switch(filter){
        case 'SHOW_ALL':
            return data;
        case 'SHOW_ACTIVE':
            return data.filter(todo => !todo.completed )
       case 'SHOW_COMPLETED':
            return data.filter(todo => todo.completed )
        default:
            return data;
    }
}

const TodoList = ({todos, visibilityFilter, onTodoClick}) =>{
    const dataResult = FilterByVisibility(todos, visibilityFilter);
    return (
     <div>   
        <ul>
            {
                dataResult.map((todo)=> <TodoItem key={todo.id} completed={todo.completed} text={todo.text}
                 onClick={ () =>
                  onTodoClick(todo.id) 
                } /> )
            }       
        </ul>
    </div>
    )
}

const mapStateTodoListToProps = (state) =>({
    todos : FilterByVisibility(state.todos, state.visibilityFilter)
})

const mapDispatchTodoListToProps = (dispatch) =>({
    onTodoClick(id){
        dispatch(toggleTodoAction(id))
    }
})

const TodoListContainer=connect(mapStateTodoListToProps, mapDispatchTodoListToProps)(TodoList);

export  default TodoListContainer;