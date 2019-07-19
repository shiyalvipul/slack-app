import { combineReducers } from 'redux'; 

import userReducer from '../modules/redux/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;