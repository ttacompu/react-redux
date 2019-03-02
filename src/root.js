import { Provider } from 'react-redux';
import App from './components/App';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const Root = ({store}) =>(
    <Provider store={store}>
        <Router>
            <Route path='/:filter?' component={App} />
        </Router>
        
    </Provider>
)

export default Root;