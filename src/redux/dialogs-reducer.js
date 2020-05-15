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
    switch(action.type){
        case ADD_MESSAGE:
            let newMessobj = {
                id: 44, message: state.startMessage
               //  id: 44, message: action.newMess 
           }
           state.mesagesData.push(newMessobj);
           state.startMessage = '';
        //    this._callSubsciber(this._state);
        //    this.dispatch(updateMessage(''));
           return state;
        case UPDATE_MESSAGE:
            state.startMessage = action.newMessUpd;
            // this._callSubsciber(this._state);
            return state;
        
        default: return state;
    }
}
export default dialogsReducer;