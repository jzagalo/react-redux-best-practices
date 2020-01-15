
import { createStore, combineReducers, applyMiddleware } from "redux";
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import {createLogger } from 'redux-logger';

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
  };

export default createStore(
    combineReducers({math: mathReducer, user: userReducer}),
    {},
    applyMiddleware(myLogger, createLogger())
);
 
