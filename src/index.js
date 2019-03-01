import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import Root from './root'

import configureStore from './configureStore';
const store = configureStore();

ReactDOM.render( <Root store={store} />, document.getElementById("todoApp"))