import React from 'react';
// import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem/DialogItem'
// import Message from './Message/Message'
import { addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props)=>{
// debugger
    // let store = props.store.getState().dialogsPage;

    // let dialogsElements = store.dialogsData.map((d) => {
    //     return  <DialogItem name={d.name} id={d.id} key={d.id}/>
    // })
    
    // let messagesElements = store.mesagesData.map( m => <Message message={m.message} />)
    
    // let text_message = React.createRef();


    // let addNewMessage = () =>{
    //     // let value1 = text_message.current.value;
    //     // props.addMessage(value1);
    //     props.store.dispatch(addMessageActionCreator());
    // }
    // let onChangeHandler = (value) =>{
    //     props.store.dispatch(updateMessageActionCreator(value));        
    // }

    return (
        <StoreContext.Consumer>
            { store => {
            let state = store.getState().dialogsPage;

            let addNewMessage = () =>{
                state.dispatch(addMessageActionCreator());
            }
            let onChangeHandler = (value) =>{
                state.dispatch(updateMessageActionCreator(value));        
            }
           return <Dialogs  addNewMessage={addNewMessage} 
                updNewMessage={onChangeHandler} 
                dialogsData={state.dialogsData} 
                mesagesData={state.mesagesData}
                startMessage={state.startMessage} 
            />
        
            }}
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;
