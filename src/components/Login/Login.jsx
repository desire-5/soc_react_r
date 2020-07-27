import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {required, maxLength} from '../../utils/validators'
import { Input, Textarea, createField} from '../common/FormsControls/FormsControls';
import s from './Login.module.css'
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';

const maxLength25 = maxLength(25);
let LoginForm = (props) => {
    // debugger
    return (
        <form onSubmit={props.handleSubmit} className={s.wrapForm}>
           { createField('Email','email', [required, maxLength25], Input ) }
            {/* <div>
                <Field  name={'email'} placeholder={'email'} component={Input} validate={[required, maxLength25]}/>
            </div> */}
            <div>
                <Field name={'password'}  placeholder={'password'} 
                        component={Input}  validate={[required, maxLength25]}/>
            </div>
            {/* <div> */}
                {createField(null, 'rememberMe', [], Input, {type:"checkbox"}, 'remember me') }
                {/* <Field component="input" name='rememberMe'  type="checkbox" /> remember me */}
            {/* </div> */}
            { props.error &&
                <div className={s.forSumaryError}>{props.error}</div>
            }
            <div>
               <button>Login</button>
            </div>

        </form>
    )

}
//hoc
 const LoginReduxform = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)


const Login = (props) =>{
// debugger
    const onSubmit = (formData)=>{
        // debugger
        console.log('formData',formData)
        let {email, password, rememberMe} = formData;
        //thunk creator
        props.login(email, password, rememberMe)
    }

    if(props.isAuth)
        return <Redirect to={'/profile'} />

    return <div>
        <h1>Login</h1>
        <LoginReduxform onSubmit={onSubmit}/>
    </div>
}


let maStatetoProps = (state)=>({
    isAuth: state.auth.isAuth
})
export default connect(maStatetoProps,{login})(Login)