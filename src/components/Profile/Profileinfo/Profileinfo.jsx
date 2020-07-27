import React, {useState} from 'react'
import s from './Profileinfo.module.css'
import Preloader from '../../Preloader/Preloader';
// import ProfileStatus from './ProfielStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import smile from '../../../assets/images/smile.png'
import LoginReduxform from './ProfileForm';

console.log('profileInfo', s);

const Profileinfo = (props)=>{
  // debugger
  const [editMode, seteditMode] = useState(false);
  
  if(!props.profile) return <Preloader/>

  const onMainPhotoSelected=(e)=>{
    // debugger
    if(e.target.files.length){
      props.sendPhoto(e.target.files[0])
    }
  }
  const onSubmit = (formData)=>{
    debugger
    console.log(formData)
    props.sendProfileData(formData)
      .then(
        () => {
          seteditMode(false);
        });
  }

    return (
      <div> Main content profileinfo!!
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" alt=""/>
        </div>
        <div className={s.profile_info}>

          <div>
            <ProfileStatusWithHooks  status={props.status} updateUserStatus={props.updateUserStatus}/>
          </div>
        
          {!editMode 
              ? <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => seteditMode(true)} /> 
              : <LoginReduxform onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
          }
          
          { props.isOwner && <div>
              <input type={'file'} onChange={onMainPhotoSelected}/>send photo</div> 
          }

          ava + desc info
        </div>
      </div>
    )
}

const ProfileData = (props)=>{
 return <div>
            <button onClick={props.goToEditMode}>edit profile</button>
            <div>Name - {props.profile.fullName}</div>
            <div>About mi - {props.profile.aboutMe}</div>
            <div><img className={s.image} src={props.profile.photos.small || smile}></img></div>
            <div>looking For A Job  - {props.profile.lookingForAJob}</div>
            <div>looking For A Job Description  - {props.profile.lookingForAJobDescription}</div>
            <div>Contacts: {Object.keys(props.profile.contacts).map((key)=> {
              return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} /> 
            })}</div>
          </div>
}
const Contact = ({contactTitle, contactValue})=>{
return <div><b>{contactTitle}</b>: {contactValue}</div>
}


export default Profileinfo