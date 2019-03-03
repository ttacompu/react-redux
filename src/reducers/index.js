import {combineReducers} from 'redux';
import todos from './todos'
//import visibilityFilter from './visibilityFilter'
import * as FromTodos from './todos'


const  todoApp =  combineReducers({
    todos
})

export default todoApp;

export const FilterByVisibility =(state, filter) => FromTodos.FilterByVisibility(state.todos, filter);
