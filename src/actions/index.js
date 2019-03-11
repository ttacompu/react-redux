//import { v4 } from 'uuid';
import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api'
import { getIsFetching } from '../reducers'



export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        Promise.resolve();
    }
    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    });

    return api.fetchTodos(filter).then((response) => {
        console.log('normalize response', normalize(response, schema.arrayOfTodos))

        dispatch({
            type: 'FETCH_TODOS_SUCCESS',
            filter,
            response : normalize(response, schema.arrayOfTodos)
        })
    },
        error => {
            dispatch({
                type: 'FETCH_TODOS_FAIL',
                filter,
                message: error.message || 'something went wrong'

            })
        }
    );

}


export const addTodo = (text) => (dispatch) => {
    api.addTodo(text).then((response) => {
        console.log('normalize response', normalize(response, schema.todo))

        dispatch({
            type: 'ADD_TODO_SUCCESS',
            response : normalize(response, schema.todo),
        })
    })
}

/*export const setVisibilityFilterAction = (filter) => ({
    type : 'SET_VISIBILITY_FILTER',
    filter
})*/

export const toggleTodo = (id) => (dispatch) =>{
    api.toggleTodo(id).then((response)=>{
            dispatch({
                type : 'TOGGLE_TODO_SUCCESS',
                response : normalize(response, schema.todo)
            })
    })
}

