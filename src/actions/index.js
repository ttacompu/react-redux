//import { v4 } from 'uuid';
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

    return api.fetchTodos(filter).then((response) => dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response
    }),
        error => {
            dispatch({
                type: 'FETCH_TODOS_FAIL',
                filter,
                message : error.message || 'something went wrong'

            })
        }
    );

}


export const addTodo = (text) => (dispatch) => {
    api.addTodo(text).then( (response) =>{
        dispatch({
            type : 'ADD_TODO_SUCCESS',
            response,
        })
    })
}

/*export const setVisibilityFilterAction = (filter) => ({
    type : 'SET_VISIBILITY_FILTER',
    filter
})*/

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

