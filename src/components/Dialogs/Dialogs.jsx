import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props)=>{
// debugger;
    // isset in app.js
    // let dialogsData = [
    //     {id: 1, name: 'Bobe' },
    //     {id: 2, name: 'Jonatan' },
    //     {id: 3, name: 'Huston' },
    //     {id: 4, name: 'Mars' },
    //     {id: 5, name: 'James' },
    // ]

    // let mesagesData = [
    //     {id: 1, message: 'hello' },
    //     {id: 2, message: ')))))' },
    //     {id: 3, message: 'i am js' },
    //     {id: 4, message: 'react' },
    //     {id: 5, message: 'nodejs' },
    // ]
    
    let dialogsElements = props.dialogsPage.dialogsData.map((d) => {
        return  <DialogItem name={d.name} id={d.id}/>
    })
    
    let messagesElements = props.dialogsPage.mesagesData.map( m => <Message message={m.message} />)
    
    let text_message = React.createRef();


    let addNewMessage = () =>{
        let value1 = text_message.current.value;
        alert(value1);
        props.addMessage(value1);
    }
    let onChangeHandler =()=>{
        let value = text_message.current.value;
        console.log(value);
        props.updateMessage(value);
        // alert(value)
        
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
                  <textarea ref={text_message} onChange={onChangeHandler} value={props.dialogsPage.startMessage}></textarea>
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
