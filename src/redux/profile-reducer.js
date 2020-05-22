// action type
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

// action creator
export const addPostActionCreator = () => ({type:ADD_POST}) 
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText:text
})
let initialState ={
    posts: [
        {id: 1, message: 'hello 1234', likesCount: 222, age:23},
        {id: 2, message: 'how are you', likesCount: 1}
    ],
    newPostText:'take js'
}
const profileReducer = (state=initialState, action) => {
    // debugger;
    switch(action.type){
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            // let copyState = {...state};
            // copyState.newPostText = action.newText;
            
            // state.newPostText = action.newText;
            // this._callSubsciber(this._state);
            // return {...state, newPostText:action.newText };
        case ADD_POST:{
            let newObj = {
                id: 55,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newObj],
                newPostText:''
            }
            // let copyState = {...state};
            // copyState.posts = [...state.posts]
            // copyState.posts.push(newObj);
            // copyState.newPostText = '';
            
            // state.posts.push(newObj);
            // state.newPostText ='';
            // this._callSubsciber(this._state); 
            // return copyState;
        }
        default:  return state;
    }   
}
export default profileReducer;