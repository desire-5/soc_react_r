// import { authAPI } from "../api/api";
import { getDataUserAuth } from "./auth-reducer";



const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS, // 'INITIALIZED_SUCCESS'
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export type InitialStateType = {
    initialized: boolean,
    // aaa:number
}

let initialState: InitialStateType = {
    initialized: false,
    // aaa:1
}

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
                // aaa:'w'
            }

        default:
            return state;
    }
}
//thunc creator
export const initializedApp = () =>
    (dispatch: any) => {
        // debugger
        let promise = dispatch(getDataUserAuth())

        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })

    }

export default appReducer
