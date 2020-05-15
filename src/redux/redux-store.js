import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from "./dialogs-reducer";



let reducers = combineReducers({
    profilePage:profileReducer, //create state for profilePage
    dialogsPage: dialogsReducer, //create state for dialogsPage

})

const store = createStore(reducers); // store - create state profilePage dialogsPage

export default store;