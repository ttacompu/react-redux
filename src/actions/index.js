import {v4} from 'uuid';
import * as api from '../api'

export const requestTodos = (filter) =>({
    type : 'REQUEST_TODOS',
    filter
})

export const receiveTodos =(filter, response) =>{
   return{
       type : 'RECEIVE_TODOS',
       filter,
       response
   }
}

export const fetchTodos = (filter) =>
    api.fetchTodos(filter).then((response)=> 
    receiveTodos(filter, response));

export const addTodo =(text) =>{
    return {
        type : 'ADD_TODO',
        id : v4(),
        text,

    }
}

/*export const setVisibilityFilterAction = (filter) => ({
    type : 'SET_VISIBILITY_FILTER',
    filter
})*/

export const toggleTodo = (id) =>({
    type : 'TOGGLE_TODO',
    id
})

