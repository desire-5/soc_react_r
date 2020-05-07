import React from 'react'
import s from './Profileinfo.module.css'

console.log('profileInfo', s);

const Profileinfo = (props)=>{
    return (
      <div >Main content profileinfo
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" alt=""/>
        </div>
        <div className={s.profile_info}>
          ava + desc info
        </div>
    
      </div>
    )
}

export default Profileinfo