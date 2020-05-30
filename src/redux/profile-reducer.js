import { usersAPI, profileAPI } from "../api/api";

// action type
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

// action creator
export const addPostActionCreator = () => ({type:ADD_POST}) 
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText:text
})
export const setUserProfile = (user_info)=> ({type: SET_USER_PROFILE, user_info})

export const setUserStatus = (status)=> ({type: SET_USER_STATUS, status})

let initialState = { 
    posts: [
        {id: 1, message: 'hello 1234', likesCount: 222, age:23},
        {id: 2, message: 'how are you', likesCount: 1}
    ],
    newPostText:'take js',
    profile: null,
    status:''
    
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
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.user_info
        }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:  return state;
    }   
}

// thunk
export const getProfileInfo = (user_id) => {
    // debugger
    return dispatch => {
        usersAPI.getProfile(user_id)
        .then(res => {
           dispatch(setUserProfile(res.data)) 
        })
    }
}

export const getUserStatus = (user_id) => {
    return dispatch => {
        profileAPI.getUserStatus(user_id)
        .then(status => {
            // debugger
            dispatch(setUserStatus(status.data))
        })
    }
}

export const updateUserStatus = (status)=> {
    return dispatch => {
        profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
    }
}
export default profileReducer;