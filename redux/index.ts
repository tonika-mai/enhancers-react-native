import {applyMiddleware, createStore} from 'redux';

import appReducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(appReducer, applyMiddleware(thunk));
