import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Use line below for supporting the Redux browser extension. Not always active due to issues with Safari.
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer = compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
