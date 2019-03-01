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

const todos = (states = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...states, todo(undefined, action)];

        case 'TOGGLE_TODO':
            return states.map(t => todo(t, action))

        default:
            return states;
    }
}

export default todos;