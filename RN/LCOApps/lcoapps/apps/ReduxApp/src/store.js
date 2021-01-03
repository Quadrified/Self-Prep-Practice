import { createStore, applyMiddleware } from 'redux'; // Step 1
import thunk from 'redux-thunk'; // Step 1

import rootReducer from './reducer'; //Step 3

const middleware = [thunk]; // Step 4 => defining a middleware to be used
import { composeWithDevTools } from 'redux-devtools-extension'; // Step 5 => devtools on top of RN dev tools

// Step 2 => create store
const store = createStore(
  rootReducer, // Step 3
  composeWithDevTools(applyMiddleware(...middleware)), // Step 6
);

export default store;
