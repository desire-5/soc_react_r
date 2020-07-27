import { PostType, ProfileType, PhotosType } from './../types/types';
import { usersAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

// action type
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELL_POST = 'DELL_POST';
const SEND_USER_PHOTO_SUCCESS = 'SEND_USER_PHOTO_SUCCESS';

// action creator
type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPost: string
}
export const addPostActionCreator = (newPost: string): AddPostActionCreatorType => ({ type: ADD_POST, newPost })
type SetUserPhotoSuccessType = {
    type: typeof SEND_USER_PHOTO_SUCCESS
    photo: PhotosType
}
export const setUserPhotoSuccess = (photo: PhotosType): SetUserPhotoSuccessType => ({ type: SEND_USER_PHOTO_SUCCESS, photo })

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    user_info: ProfileType
}
export const setUserProfile = (user_info: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, user_info })

type setUserStatusType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): setUserStatusType => ({ type: SET_USER_STATUS, status })
type DellPostType = {
    type: typeof DELL_POST
    id_user: number
}
export const dellPost = (id_user: number): DellPostType => ({ type: DELL_POST, id_user })

let initialState = {
    posts: [
        { id: 1, message: 'hello 1234', likesCount: 222, age: 3 },
        { id: 2, message: 'how are you', likesCount: 1 }
    ] as Array<PostType>,
    // newPostText:'take js',
    profile: null as ProfileType | null,
    status: '',
}
export type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action: any): InitialStateType => {
    // debugger;
    switch (action.type) {
        // case UPDATE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        // let copyState = {...state};
        // copyState.newPostText = action.newText;

        // state.newPostText = action.newText;
        // this._callSubsciber(this._state);
        // return {...state, newPostText:action.newText };
        case ADD_POST: {
            let newObj = {
                id: 3,
                message: action.newPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newObj],
                // newPostText:''
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
            // debugger
            return {
                ...state,
                status: action.status
            }
        case DELL_POST:
            // debugger
            return {
                ...state,
                posts: state.posts.filter(u => u.id !== action.id_user)
            }
        case SEND_USER_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photo } as ProfileType
            }

        default: return state;
    }
}

// thunk
export const getProfileInfo = (user_id: number) => {
    return async (dispatch: any) => {
        let res = await usersAPI.getProfile(user_id)
        dispatch(setUserProfile(res.data))
    }
}
// export const getProfileInfo = (user_id) => {
//     // debugger
//     return dispatch => {
//         usersAPI.getProfile(user_id)
//         .then(res => {
//            dispatch(setUserProfile(res.data)) 
//         })
//     }
// }

export const getUserStatus = (user_id: number) => {
    return async (dispatch: any) => {
        let res = await profileAPI.getUserStatus(user_id)
        dispatch(setUserStatus(res.data))
        // .then(status => {
        //     // debugger
        //     dispatch(setUserStatus(status.data))
        // })
    }
}

export const updateUserStatus = (status: string) => {
    // debugger
    return async (dispatch: any) => {
        try {
            let res = await profileAPI.updateStatus(status)
            if (res.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        } catch (error) {
            debugger;
        }

    }
}
export const sendPhoto = (photo: any) => {
    return async (dispatch: any) => {
        let res = await profileAPI.savePhoto(photo)
        //    debugger
        if (res.resultCode === 0) {
            dispatch(setUserPhotoSuccess(res.data.data.photos))
        }
    }
}

export const sendProfileData = (profile: ProfileType) => {
    return async (dispatch: any, getState: any) => {
        let res = await profileAPI.saveProfileData(profile)
        //    debugger
        if (res.resultCode === 0) {
            dispatch(getProfileInfo(getState().auth.id))
        }
        else {
            dispatch(stopSubmit('profileForm', { _error: res.data.messages[0] }))
            //    {"contacts": {"facebook":res.data.messages[0]}}
            return Promise.reject(res.data.messages[0])
        }
    }
}
export default profileReducer;

