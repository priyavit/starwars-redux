import {combineReducers } from 'redux';
import loginReducer from './loginreducer';
import planetReducer from './planetReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    planet: planetReducer
});

export default rootReducer;