import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Reducers';

const songStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={songStore}>
        <App />
    </Provider>,
    document.getElementById('root')
)

