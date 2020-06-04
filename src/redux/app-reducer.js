import { authAPI } from "../api/api";
import { getDataUserAuth } from "./auth-reducer";



const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export const initializedSuccess = () => ({type:INITIALIZED_SUCCESS});


let initialState = {
    initialized: false
}

const appReducer = (state=initialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
       
        default: 
            return state;
    }
}
//thunc creator
export const initializedApp = () => 
    dispatch => {
        // debugger
        let promise = dispatch(getDataUserAuth())
        // let promise2 = dispatch(getDataUserAuth2())
        // let promise3 = dispatch(getDataUserAuth3())

        Promise.all([promise])
            .then(()=>{
                dispatch(initializedSuccess())
            })
      
    }

export default appReducer
