import { combineReducers } from 'redux';

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        case 'TOGGLE_TODO':
            return {
                ...state,
                [action.id]: todo(state[action.id], action),
            };
        default:
            return state;
    }
};



/*const todos = (states = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...states, todo(undefined, action)];

        case 'TOGGLE_TODO':
            return states.map(t => todo(t, action))

        default:
            return states;
    }
}*/

const allIds = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.id];
        default:
            return state;
    }
};

const todos = combineReducers({
    byId,
    allIds
})

const getAllTodos = (state) => {
    return state.allIds.map(id => state.byId[id]);
}

export const FilterByVisibility = (state, filter) => {
    const allTodos = getAllTodos(state);
    switch (filter) {
        case 'all':
            return allTodos;
        case 'active':
            return allTodos.filter(todo => !todo.completed)
        case 'completed':
            return allTodos.filter(todo => todo.completed)
        default:
            return allTodos;
    }
}

export default todos;