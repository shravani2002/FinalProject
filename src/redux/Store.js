import {combineReducers, configureStore} from '@reduxjs/toolkit';
// call reducer
import { quesctionReducer } from './quesction_reducer';
import { resultReducer } from './result_reducer';

const rootReducer = combineReducers({
    quesctions : quesctionReducer,
    result : resultReducer
})