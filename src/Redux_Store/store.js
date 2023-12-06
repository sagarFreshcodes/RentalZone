// store.js
import { createStore, applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Import your root reducer
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, // Combine all your reducers here
  storeEnhancers(applyMiddleware(thunk))
);

export default store;
