import React from 'react'
import s from './Profileinfo.module.css'
import Preloader from '../../Preloader/Preloader';

console.log('profileInfo', s);

const Profileinfo = (props)=>{
  // debugger
  if(!props.profile) return <Preloader/>
    return (
      <div >Main content profileinfo
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" alt=""/>
        </div>
        <div className={s.profile_info}>
    <div>Name - {props.profile.fullName}</div>

          ava + desc info
        </div>
    
      </div>
    )
}

export default Profileinfo