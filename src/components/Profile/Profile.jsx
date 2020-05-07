import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo'
console.log(s);

const Profile = (props)=>{
  // debugger;
    return (
      <div >
        <Profileinfo />
        <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} 
                addPost={props.addPost} updateNewPostText1={props.updateNewPostText1}/>
      </div>
    )
}

export default Profile