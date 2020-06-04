import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
// import { addMessage, updateMessage} from '../../redux/dialogs-reducer';

const Dialogs = (props)=>{
// debugger;
    // isset in app.js
    // let dialogsData = [
    //     {id: 5, name: 'James' },
    // ]

    // let store = props.store.getState().dialogsPage;

    let dialogsElements = props.dialogsData.map((d) => {
        return  <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    
    let messagesElements = props.mesagesData.map( m => <Message message={m.message} />)
    
    // let text_message = React.createRef();

// use redux-form
    let addNewMessage = (ofj) =>{
        // let value1 = text_message.current.value;
        props.addNewMessage(ofj.addNewMessage);
        //was before without componnet of conteiner 
        // props.store.dispatch(addMessage());
    }
    
    // let onChangeHandler = (e) =>{
    //     let value = e.target.value;
    //     props.updNewMessage(value);

        //     // let value = text_message.current.value;
        //     console.log(value);
        //     props.store.dispatch(updateMessage(value)); //was before without componnet of conteiner       
    // }
    // alert('1' + props.auth);
    // if(!props.auth) return <Redirect to='/login'/>
    const MessageForm = (props) => {
            return(
                <form onSubmit={props.handleSubmit}>
                    <Field component='textarea' name='addNewMessage'/>

                    <button>Send message</button>
                  {/* <textarea  onChange={onChangeHandler} value={props.startMessage}></textarea> */}
                  {/* <textarea ref={text_message} onChange={onChangeHandler} value={store.startMessage}></textarea> */}
                
                    {/* <div><button onClick={addNewMessage} >Send message</button></div> */}
                </form>
        )
    }

    const MessageReduxForm = reduxForm({
        // a unique name for the form
        form: 'dialogform'
      })(MessageForm)

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
                {dialogsElements}
            {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/> */}
           </div>

           <div className={s.messages}>
               {messagesElements}
              {/* <Message message='blaaa1' /> */}

        <MessageReduxForm onSubmit={addNewMessage}/>
                
           </div>

           <div className={s.messages2}>
               {messagesElements}
              {/* <Message message='blaaa1' /> */}
           </div>

        </div>
    )
}
export default Dialogs;
