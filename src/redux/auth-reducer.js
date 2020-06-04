import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_DATA_USER_AUTH = 'SET_DATA_USER_AUTH'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

export const setDataUserAuth = (id,email,login, isAuth) => ({type:SET_DATA_USER_AUTH, payload:{id,email,login,isAuth}});
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING, isFetching})

let initialState = {
    id: null,
    email:null,
    login: null,
    isAuth:false,
    isFetching: false,
}

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_DATA_USER_AUTH:
            // debugger
            return {
                ...state,
                ...action.payload,
                // isAuth:true,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: 
            return state;
    }
}
//thunc creator
export const getDataUserAuth = () => 
    dispatch => {
        // debugger
        dispatch(setIsFetching(true))
       return authAPI.me()
        .then(res => {
            // debugger
            if(res.data.resultCode === 0){
                let {email,id,login} = res.data.data;
                dispatch(setDataUserAuth(id,email,login,true))
                dispatch(setIsFetching(false))
            }
        })
       
    }
//thunc creator
export const login = (email, password, rememberMe = false) => 
    dispatch => {
        // let action = stopSubmit('login', {_error: 'somethig wrong'})
        // dispatch(action);
        // return 
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if(res.data.resultCode === 0){
                    dispatch(getDataUserAuth())
                }
                else{
                    let message = res.data.messages.length > 0 ? res.data.messages[0] :'somethig wrong';
                    dispatch(stopSubmit('login',{_error: message}))
                    // let action = stopSubmit('login', {_error: 'somethig wrong'})
                    // dispatch(action);
                   
                }
            })
}

export const logout = () => (dispatch) =>{
    authAPI.logout()
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setDataUserAuth(null,null,null, false))
            }
        })
}
export default authReducer
