import {v4} from 'uuid';
import * as api from '../api'
import { getIsFetching } from '../reducers'

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

export const fetchTodos = (filter) => (dispatch, getState) =>{
    if(getIsFetching(getState(), filter)){
        return;
    }
    dispatch(requestTodos(filter));
    
    return api.fetchTodos(filter).then((response)=>  dispatch(receiveTodos(filter, response)));

}
    

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

