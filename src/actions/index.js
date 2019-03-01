import {v4} from 'node-uuid';

export const addTodoAction =(text) =>{
    return {
        type : 'ADD_TODO',
        id : v4(),
        text,

    }
}

export const setVisibilityFilterAction = (filter) => ({
    type : 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodoAction = (id) =>({
    type : 'TOGGLE_TODO',
    id
})

