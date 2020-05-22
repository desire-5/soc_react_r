import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
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


    let addNewMessage = () =>{
        // let value1 = text_message.current.value;
        props.addNewMessage();

        //was before without componnet of conteiner 
        // props.store.dispatch(addMessage());
    }
    let onChangeHandler = (e) =>{
    //     // let value = text_message.current.value;
        let value = e.target.value;
        props.updNewMessage(value);
    //     console.log(value);
    //     props.store.dispatch(updateMessage(value)); //was before without componnet of conteiner       
    }

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
                {dialogsElements}
            {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/> */}
           </div>

           <div className={s.messages}>
               {messagesElements}
              {/* <Message message='blaaa1' /> */}

                <div>
                  <textarea  onChange={onChangeHandler} value={props.startMessage}></textarea>
                  {/* <textarea ref={text_message} onChange={onChangeHandler} value={store.startMessage}></textarea> */}
                </div>
                    <div><button onClick={addNewMessage} >Send message</button></div>
           </div>

           <div className={s.messages2}>
               {messagesElements}
              {/* <Message message='blaaa1' /> */}
           </div>

        </div>
    )
}
export default Dialogs;
