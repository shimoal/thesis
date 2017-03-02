import {combineReducers} from 'redux';

import reducerOne from './reducer_One';
import reducerTwo from './reducer_Two';

const rootReducer = combineReducers({
  reducerOne,
  reducerTwo,
});

export default rootReducer;