import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore, applyMiddleware, compose } from 'react-redux';
import thunk from 'redux-thunk';

// configure a store
// const store = configureStore(reducers);

ReactDOM.render(<App/>, document.getElementById('root'));