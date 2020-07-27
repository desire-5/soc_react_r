import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_DATA_USER_AUTH = 'SET_DATA_USER_AUTH'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

type setDataUserAuthActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setDataUserAuthActionType = {
    type: typeof SET_DATA_USER_AUTH,
    payload: setDataUserAuthActionPayloadType
}
export const setDataUserAuth = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setDataUserAuthActionType => (
    {
        type: SET_DATA_USER_AUTH,
        payload: { id, email, login, isAuth }
    }
);
export const setIsFetching = (isFetching: boolean) => ({ type: SET_IS_FETCHING, isFetching })

export type initialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    isFetching: boolean,
}
let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
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
    (dispatch: any) => {
        // debugger
        dispatch(setIsFetching(true))
        return authAPI.me()
            .then((res: any) => {
                // debugger
                if (res.data.resultCode === 0) {
                    let { email, id, login } = res.data.data;
                    dispatch(setDataUserAuth(id, email, login, true))
                    dispatch(setIsFetching(false))
                }
            })

    }
//thunc creator
export const login = (email: string, password: string, rememberMe = false) =>
    (dispatch: any) => {
        // let action = stopSubmit('login', {_error: 'somethig wrong'})
        // dispatch(action);
        // return 
        authAPI.login(email, password, rememberMe)
            .then((res: any) => {
                if (res.data.resultCode === 0) {
                    dispatch(getDataUserAuth())
                }
                else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'somethig wrong';
                    dispatch(stopSubmit('login', { _error: message }))
                    // let action = stopSubmit('login', {_error: 'somethig wrong'})
                    // dispatch(action);
                }
            })
    }

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then((res: any) => {
            if (res.data.resultCode === 0) {
                dispatch(setDataUserAuth(null, null, null, false))
            }
        })
}
export default authReducer
