import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './reducers/userReducer'
import {contactReducer} from './reducers/contactReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    userReducer,
    contactReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))