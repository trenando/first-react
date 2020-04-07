import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { homeReducer } from './homeReducer'
import { contactReducer } from './contactReducer'


const reducers = combineReducers({
    homeReducer,
    contactReducer,
    form: formReducer
})

export const store = createStore(reducers)