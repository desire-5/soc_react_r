import React from 'react'
import { reduxForm, Field } from 'redux-form'


let LoginForm = (props) => {
    // debugger
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field  name={'login'} placeholder={'Login'} component={"input"}/>
            </div>
            <div>
                <Field name={'password'}  placeholder={'Password'} component={"input"}/>
            </div>
            <div>
                <Field component="input" name='rem'  type="checkbox" /> remember me
               
            </div>
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
    const onSubmit = (formData)=>{
        console.log('formData',formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxform onSubmit={onSubmit}/>
    </div>
}
export default Login