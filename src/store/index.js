import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


const store = createStore(
  rootReducer, 
  {},
  // composeWithDevTools()
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f => f,
  )
);

export default store;