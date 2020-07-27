import React from 'react'
import s from './FormsControls.module.css'
import { Field } from 'redux-form'

export const FormControl = ({input, meta, ...props}) => {
// debugger
let hasError = meta.touched && meta.error
    return (
        <div className={s.formControls + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
        {hasError && <span>{meta.error} </span>}
        </div>
    )
}

export const Input = (props) => {
    // debugger
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl> 
}
export const TextArea = (props) => {
    // debugger
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl> 
}

export const createField = (placeholder,name,validators,component,props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} 
            name={name} 
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)
// export const Input = ({input, meta, ...props}) => {
//     // debugger
// let hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControls + ' ' + (hasError ? s.error : '')}>
//             <div>
//                 <input {...input}   {...props} />    
//             </div>
//         {hasError && <span>{meta.error} </span>}
//         </div>
//     )
// }