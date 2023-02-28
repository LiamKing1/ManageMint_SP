import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const jobList = (state = '', action) => {
    switch (action.type) {
        case 'VIEW_JOBS':
            return [...state, action.payload]
        default:
            return state;
    }
};


const store = createStore(
    combineReducers(
        {
            jobList,
        }
    ),
);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('react-root'));