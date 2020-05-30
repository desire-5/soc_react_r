import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {compose} from 'redux'
// import StoreContext from '../../StoreContext'; // dont use now. use connect

let mapStateToProps = (state) => {
    return {
        startMessage: state.dialogsPage.startMessage,
        dialogsData: state.dialogsPage.dialogsData,
        mesagesData: state.dialogsPage.mesagesData,
        // auth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => ({
    addNewMessage: () => dispatch(addMessageActionCreator()),
    updNewMessage: (val) => dispatch(updateMessageActionCreator(val))
})


//before compose
// let withRedirect = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirect)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs);
// export default DialogsContainer;

//old version with own context and own created container of componet!

// const DialogsContainer = (props)=>{
// // debugger
//     // let store = props.store.getState().dialogsPage;

//     // let addNewMessage = () =>{
//     //     // let value1 = text_message.current.value;
//     //     // props.addMessage(value1);
//     //     props.store.dispatch(addMessageActionCreator());
//     // }
//     // let onChangeHandler = (value) =>{
//     //     props.store.dispatch(updateMessageActionCreator(value));        
//     // }

//     return (
//         <StoreContext.Consumer>{
//             store => {
//                 let state = store.getState().dialogsPage;

//                 let addNewMessage = () =>{
//                     store.dispatch(addMessageActionCreator());
//                 }
//                 let onChangeHandler = (value) =>{
//                     store.dispatch(updateMessageActionCreator(value));        
//                 }
//                 return <Dialogs  addNewMessage={addNewMessage} 
//                             updNewMessage={onChangeHandler} 
//                             dialogsData={state.dialogsData} 
//                             mesagesData={state.mesagesData}
//                             startMessage={state.startMessage} 
//                         />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

// export default DialogsContainer;
