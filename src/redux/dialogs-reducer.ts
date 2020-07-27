// action type
const ADD_MESSAGE = 'ADD_MESSAGE';
// const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

// action creator
type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    val: string
}
export const addMessageActionCreator = (val: string): AddMessageActionCreatorType => ({
    type: ADD_MESSAGE, val
})
// export const updateMessageActionCreator = (val_upd) =>({
//     type:UPDATE_MESSAGE, newMessUpd: val_upd
// })

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogsData: [
        { id: 1, name: 'Bobe' },
        { id: 2, name: 'Jonatan' },
        { id: 3, name: 'Huston' },
        { id: 4, name: 'Mars' },
        { id: 5, name: 'James' },
    ] as Array<DialogType>,
    mesagesData: [
        { id: 1, message: 'hello' },
        { id: 2, message: ')))))' },
        { id: 3, message: 'i am js' },
        { id: 4, message: 'react' },
        { id: 5, message: 'nodejs' },
    ] as Array<MessageType>,

}
export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.val
            return {
                ...state,
                mesagesData: [...state.mesagesData, { id: 55, message: body }],

            }
        // case UPDATE_MESSAGE: {
        //     // let copyState = {...state};
        //     // copyState.startMessage = action.newMessUpd;
        //     return {
        //         ...state, 
        //         startMessage: action.newMessUpd
        //     }
        // }
        // state.startMessage = action.newMessUpd;
        // this._callSubsciber(this._state);
        // return state;

        default: return state;
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


}

export default dialogsReducer;

