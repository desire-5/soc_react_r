import React from 'react'
import s from './Post.module.css'

console.log(s);


const Post = (props)=>{
  // debugger;
    return (
      <div>
        <div className={s.item}>{props.message} 
        <span> likes - </span> {props.likesCount}
        </div>
      </div>
    )
}

export default Post