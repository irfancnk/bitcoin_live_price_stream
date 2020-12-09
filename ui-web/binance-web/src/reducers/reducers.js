import {combineReducers} from 'redux';
import { graphReducer } from './graphReducer.js';
import { valueReducer } from './valueReducer.js';

var reducers = {
    graph: graphReducer,
    value: valueReducer
};

export default combineReducers(reducers);