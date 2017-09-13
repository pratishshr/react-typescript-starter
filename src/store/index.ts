import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),

    // Required for redux-devtools-extension 
    // https://github.com/zalmoxisus/redux-devtools-extension
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
  )
);

export default store;
