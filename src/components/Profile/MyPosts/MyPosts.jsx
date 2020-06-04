import React from 'react'
import s from './MyPosts.module.css'
import Post from '../Post/Post'
// import { addPostActionCreator, updateNewPostText } from '../../../redux/profile-reducer';
import { Field, reduxForm } from 'redux-form';

console.log(s);
window.a= [];
const MyPosts = (props)=>{
  console.log('RENDER');
  window.a.push(props);
   //debugger;
  let messagesElements = [...props.posts]
                .reverse()
                .map(m => <Post message={m.message} age={m.age} likesCount={m.likesCount} key={m.id}/> )

                // let messagesElements = props.posts
                // .map(m => <Post message={m.message} age={m.age} likesCount={m.likesCount} key={m.id}/> ).reverse()
  
  // let newPostElement = React.createRef();
  
  
  let onAddPost = (val) => {
    // alert(val.addNewPost)
    // debugger;
    //props.dispatch(addPostActionCreator());
    props.addPost(val.addNewPost);
  }

  // let onPostChange = (e) => {
  //   // debugger;
  //   // let text = newPostElement.current.value;
  //   let text = e.target.value;
  //   console.log('text',text);

  //   props.updateNewPostText(text);
  //   // props.dispatch(updateNewPostText(text));

  //   // props.dispatch({type:'UPDATE_NEW_POST_TEXT',newText:text});  //it was before

  // }

  
  
    return (
      <div className={s.myposts}><h3>My posts</h3>
        <div>

          <FormProfile onSubmit={onAddPost}/>
          
          {/* <div> */}
          {/* ref={newPostElement} */}
          {/* <textarea onChange={onPostChange}  cols="30" rows="4" 
                    value={props.newPostText}></textarea>
          </div>
          <button onClick={ onAddPost }>Add post</button> */}
        </div>
        <div className={s.posts}>new post</div>
        <div >
          {messagesElements}
          {/* <Post message={messageData[1].message} age={messageData[1].age} likesCount={messageData[1].likesCount}/>
          <Post message='hi 123' likesCount='233'/> */}
         
        </div>
      </div>
    )
}
//redux-form
let FormProfile = (props) =>{
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' name='addNewPost'/>
      <button>Add message</button>
    </form>
  )
}
FormProfile = reduxForm({
    // a unique name for the form
    form: 'profileForm'
  })(FormProfile)

export default MyPosts