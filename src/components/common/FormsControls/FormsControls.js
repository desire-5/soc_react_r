import React from 'react'
import s from './FormsControls.module.css'

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
    return <FormControl {...props}> <textArea {...input} {...restProps}/> </FormControl> 
}

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