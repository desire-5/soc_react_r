import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from "./dialogs-reducer";
import usersReducer from './usersReducer'



let reducers = combineReducers({
    profilePage:profileReducer, //create state for profilePage
    dialogsPage: dialogsReducer, //create state for dialogsPage
    usersPage: usersReducer,

})

const store = createStore(reducers); // store - create state profilePage dialogsPage

window.store  = store;
window.state  = store.getState();

export default store;