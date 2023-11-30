// reducers/index.js
import { combineReducers } from "redux";
import exampleReducer from "./Reducer/exampleReducer";
import GeneralReducer from "./Reducer/GeneralReducer";
import HomeReducer from "./Reducer/HomeReducer";
import BusinessReducer from "./Reducer/BusinessListReducer";
import ListDetailsReducer from "./Reducer/ListDetailsReducer";
const rootReducer = combineReducers({
  example: exampleReducer, // Add your reducers here
  GeneralState: GeneralReducer,
  Home: HomeReducer,
  BusinessState: BusinessReducer,
  ListDetailsState: ListDetailsReducer,
});

export default rootReducer;
