export const createList = (filter) =>(state=[], action) =>{
    if(state !== filter)
        return state;
        switch (action.type) {
            case 'RECEIVE_TODOS':
                return action.response.map(todo => todo.id);
            default:
                return state;
        }
}

export default createList;

export const getIds = (state) => state;