import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from './profile-reducer';
import dialogsReducer from "./dialogs-reducer";
import usersReducer from './usersReducer'
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage:profileReducer, //create state for profilePage
    dialogsPage: dialogsReducer, //create state for dialogsPage
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware)); 
window.store  = store;
window.state  = store.getState();

export default store;