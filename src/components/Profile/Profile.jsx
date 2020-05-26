import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';
console.log(s);

const Profile = (props)=>{
  //  debugger;
    return (
      <div >
        <Profileinfo profile = {props.profile}/>
        
        <MyPostsContainer />

        {/* <MyPostsContainer store={props.store}/> */
        //use witount context
        } 
      </div>
    )
}

export default Profile