import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger'
import todoApp from './reducers';


/*const logger = (store) => {
    return (next) => {
        if (!console.group) {
            return next;
        }
        return (action) => {
            console.group(action.type);
            console.log('%c prev state', 'color gray', store.getState());
            console.log('%c action', 'color : blue', action);
            const returnValue = next(action);
            console.log('%c next state', 'color : green', store.getState());
            console.groupEnd(action.type);
            return returnValue;
        }
    }
}*/

/*const promiseMiddleware = (store) => (next) => {
    return (action) => {
        if (typeof action.then === 'function') {
            return action.then(next)
        }
        return next(action)
    }
}*/


/*const wrapDispatchWithMiddleware = (store, middlewares) => {
    middlewares.slice().reverse().forEach((middleware) => {
        store.dispatch = middleware(store)(store.dispatch);
    })
}*/

const configureStore = () => {
    
    const middlewares = [promise];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger())
    }
    return createStore(todoApp, applyMiddleware(...middlewares));
    /*store.subscribe(throttle(() => {
        saveState({ todos: store.getState().todos });
    }, 1000));*/
    //store.dispatch = addPromiseSupportToDispatch(store);
    
    //wrapDispatchWithMiddleware(store, middlewares);
    //return store;

}

export default configureStore;