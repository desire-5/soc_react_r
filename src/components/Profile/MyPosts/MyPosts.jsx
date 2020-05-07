import React from 'react'
import s from './MyPosts.module.css'
import Post from '../Post/Post'

console.log(s);

const MyPosts = (props)=>{
  // debugger;

  // let messageData = [
  //   {message: 'hello 1234', likesCount: 222, age:23},
  //   {message: 'how are you', likesCount: 1},
  // ]
  let messagesElements = props.posts.map(m => <Post message={m.message} age={m.age} likesCount={m.likesCount} key={m.id}/> )
  
  let newPostElement = React.createRef();
  
  let addPost = () => {
    // debugger;
    // let text = newPostElement.current.value; //onchage now take val
    // newPostElement.current.value = '';
    props.addPost();
    // props.updateNewPostText1('');
    // console.log(props);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    console.log('text',text);
    // props.updateNewPostText1(text);
    props.updateNewPostText1(text);
    
  }
    return (
      <div className={s.myposts}><h3>My posts</h3>
        <div>
          <div>
          <textarea onChange={onPostChange} ref={newPostElement} cols="30" rows="4" 
                    value={props.newPostText}></textarea>
          </div>
          <button onClick={ addPost }>Add post</button>
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