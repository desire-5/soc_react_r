import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

// action type
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
// const ADD_POST = 'ADD_POST';


// // action creator
// export const addPostActionCreator = () => ({type:ADD_POST}) // {type:ADD_POST}
// export const updateNewPostText = (text) => ({
//     type: UPDATE_NEW_POST_TEXT, newText:text
// })


let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message: 'hello 1234', likesCount: 222, age:23},
                {id: 2, message: 'how are you', likesCount: 1}
            ],
            newPostText:'take js'
        },
        dialogsPage:{
            dialogsData:[
                {id: 1, name: 'Bobe' },
                {id: 2, name: 'Jonatan' },
                {id: 3, name: 'Huston' },
                {id: 4, name: 'Mars' },
                {id: 5, name: 'James' },
            ],  
            mesagesData:[
                {id: 1, message: 'hello' },
                {id: 2, message: ')))))' },
                {id: 3, message: 'i am js' },
                {id: 4, message: 'react' },
                {id: 5, message: 'nodejs' },
            ],
            startMessage:'222'
        },
    },
    _callSubsciber() {
        console.log('state changed');
    },
     getState(){
        // debugger;
        return this._state;
    },
    dispatch(action){
        // debugger;
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubsciber(this._state);
    },

   
    
    // addMessage(newMess){
    //     let newMessobj = {
    //         id: 44, message: newMess 
    //     }
    //     this._state.dialogsPage.mesagesData.push(newMessobj)
    //     this._callSubsciber(this._state);
    //     this.updateMessage('');
    // },
    
    
    subscribe(observer) {
        this._callSubsciber = observer;
    }
}
window.store = store;


export default store;