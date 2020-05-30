import React from 'react'
import s from './MyPosts.module.css'
import Post from '../Post/Post'
// import { addPostActionCreator, updateNewPostText } from '../../../redux/profile-reducer';


console.log(s);

const MyPosts = (props)=>{
   //debugger;
  let messagesElements = props.posts.map(m => <Post message={m.message} age={m.age} likesCount={m.likesCount} key={m.id}/> )
  
  // let newPostElement = React.createRef();
  
  
  let onAddPost = () => {
    // debugger;
    //props.dispatch(addPostActionCreator());
    props.addPost();
  }

  let onPostChange = (e) => {
    // debugger;
    // let text = newPostElement.current.value;
    let text = e.target.value;
    console.log('text',text);

    props.updateNewPostText(text);
    // props.dispatch(updateNewPostText(text));

    // props.dispatch({type:'UPDATE_NEW_POST_TEXT',newText:text});  //it was before

  }
    return (
      <div className={s.myposts}><h3>My posts</h3>
        <div>
          <div>
          {/* ref={newPostElement} */}
          <textarea onChange={onPostChange}  cols="30" rows="4" 
                    value={props.newPostText}></textarea>
          </div>
          <button onClick={ onAddPost }>Add post</button>
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

export default MyPosts