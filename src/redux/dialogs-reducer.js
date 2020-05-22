// action type
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

// action creator
export const addMessageActionCreator = () => ({
    type:ADD_MESSAGE
})
export const updateMessageActionCreator = (val_upd) =>({
    type:UPDATE_MESSAGE, newMessUpd: val_upd
})

let  initialState= {
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
}

const dialogsReducer = (state=initialState, action) => {
    // debugger;
    // let copyState;

    switch(action.type){
        case ADD_MESSAGE:
        
        let body = state.startMessage;
        return {
            ...state,
            startMessage: '',
            mesagesData: [...state.mesagesData, {id:55, message:body}],
            
        }

        // copyState = {
        //     ...state,
        //     startMessage: '',
        //     mesagesData:[...state.mesagesData, 
        //         { id: 44, message: body} ]   
        //    }

//     let newMessobj = {
        //         id: 44, message: state.startMessage
        //    } 

        //    copyState.mesagesData = [...state.mesagesData, newMessobj]
          
        //    copyState.mesagesData = [...state.mesagesData];
        //    copyState.mesagesData.push(newMessobj);
        //    copyState.startMessage = '';
           
        //    state.mesagesData.push(newMessobj);
        //    state.startMessage = '';
        //    this._callSubsciber(this._state);
        //    this.dispatch(updateMessage(''));

        case UPDATE_MESSAGE: {
            // let copyState = {...state};
            // copyState.startMessage = action.newMessUpd;
            return {
                ...state, 
                startMessage: action.newMessUpd
            }
        }
            // state.startMessage = action.newMessUpd;
            // this._callSubsciber(this._state);
            // return state;
        
        default: return state;
    }
}

export default dialogsReducer;

