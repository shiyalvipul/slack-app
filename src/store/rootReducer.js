import { combineReducers } from 'redux'; 

import { userReducer, channelReducer } from '../modules/redux/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer,
});

export default rootReducer;