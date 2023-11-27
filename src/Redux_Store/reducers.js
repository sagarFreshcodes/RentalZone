// reducers/index.js
import { combineReducers } from 'redux';import exampleReducer from './Reducer/exampleReducer';
import GeneralReducer from './Reducer/GeneralReducer';
import HomeReducer from './Reducer/HomeReducer';
 ;

const rootReducer = combineReducers({
  example: exampleReducer, // Add your reducers here
  GeneralState:GeneralReducer,
  Home:HomeReducer 
});

export default rootReducer;
