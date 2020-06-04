import React, {useState,useEffect} from 'react'

const ProfileStatusWithHooks = (props) => {

const [editMode, setEditMode] = useState(false)
const [status, setStatus] = useState(props.status)

useEffect(() => {
    setStatus(props.status)
}, [props.status])

const activateEdit = () => {
    setEditMode(true)
}
const deActivateEdit = () => {
    setEditMode(false)
    props.updateUserStatus(status)
}
const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
    // props.updateUserStatus(status)
}
    return (
    <div>
        Status is   

        {!editMode &&
            <div><span onDoubleClick={activateEdit}>{props.status || '---'}</span></div>
        }
        {editMode && 
            <div><input 
                    autoFocus={true} 
                    onBlur={deActivateEdit} 
                    onChange={onStatusChange}
                    type="text" value={status}
                />
            </div>
        }
    </div>
    )

}
    
export default ProfileStatusWithHooks;