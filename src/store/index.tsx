import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers/index'

//? Создали combineReducer для объединения всех reducer
const rootReducer = combineReducers(reducers)

//? Создали store
export const store = createStore(rootReducer, applyMiddleware(thunk))

//? Типизация reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;