import React from 'react'
import { setUserStatus } from '../../../redux/profile-reducer'

class ProfileStatus extends React.Component {
    
    state = {
        editMode:false,
        status: this.props.status
    }

    activateEdit=()=>{
        // debugger
        // this.state.editMode = true;
        console.log(this)
        this.setState({
            editMode: true
        })
        // console.log(this.state.editMode)
    }

    deActivateEdit=()=>{
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange=(e)=>{
        // debugger
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        //alert('upd');

        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
        let a = this.state
        let b = this.props.status
    }
render(){
    // debugger
    return <>
    <div>
        Status is   

        {!this.state.editMode &&
            <div><span onDoubleClick={this.activateEdit} >{this.props.status || '---'}</span></div>
        }
        {this.state.editMode &&
            <div><input autoFocus={true} onBlur={this.deActivateEdit} 
                onChange={this.onStatusChange}
                type="text" value={this.state.status}/></div>
        }
    </div>
    </>
    }
}
export default ProfileStatus;