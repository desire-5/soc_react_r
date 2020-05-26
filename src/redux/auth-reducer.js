import { authAPI } from "../api/api";

const SET_DATA_USER_AUTH = 'SET_DATA_USER_AUTH'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

export const setDataUserAuth = (id,email,login) => ({type:SET_DATA_USER_AUTH, data:{id,email,login}});
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
                ...action.data,
                isAuth:true,
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
export const getDataUserAuth = () => 
    dispatch => {
        dispatch(setIsFetching(true))
        authAPI.me()
        .then(res => {
            // debugger
            if(res.data.resultCode === 0){
                let {email,id,login} = res.data.data;
                dispatch(setDataUserAuth(id,email,login))
                dispatch(setIsFetching(false))
            }
        })
    }
export default authReducer
