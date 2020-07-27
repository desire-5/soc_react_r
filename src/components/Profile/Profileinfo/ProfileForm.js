import React from "react";
import s from './Profileinfo.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input, TextArea, createField} from '../../common/FormsControls/FormsControls';
import {required, maxLength} from '../../../utils/validators'

let ProfileForm = ({handleSubmit, profile, error}) => {
    // debugger
    return (
        <form onSubmit={handleSubmit} className={s.wrapForm}>
          <div>
              <button>Send</button>
          </div>
          {error &&
              <div className={s.forSumaryError}>{error}</div>
          }
              <b>Full name</b>: { createField('fullName','fullName', [], Input ) }
              <b>looking For A Job</b>: { createField(null,'lookingForAJob', [], Input, {type:"checkbox"},'yes') }
              <b>looking For A Job Description</b>: { createField('lookingForAJobDescription','lookingForAJobDescription', [], TextArea ) }
              <b>about me</b>: { createField('about Me','aboutMe', [], TextArea ) }
            {
                <div>contacts: {Object.keys(profile.contacts).map((key)=> {
              return <div key={key}>  
                  {key}: { createField(key, "contacts." + key, [], Input ) }  
                  </div>
            })}
            </div> 
          }
        </form>
    )

}

//hoc
const LoginReduxform = reduxForm({
    // a unique name for the form
    form: 'profileForm'
  })(ProfileForm)

export default LoginReduxform;