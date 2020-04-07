import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { homeReducer } from './homeReducer'

const reducers = combineReducers({
    homeReducer,
    form: formReducer
})

export const store = createStore(reducers)