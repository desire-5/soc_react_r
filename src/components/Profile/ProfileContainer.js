import React from 'react'
import Profile from './Profile'
import  * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile , getProfileInfo} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component{

    componentDidMount() {
        
        let user_id = this.props.match.params.user_id; // user from app.js route path
        if(!user_id) user_id = 2;
        // debugger
        this.props.getProfileInfo(user_id);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${user_id}`)
        //  usersAPI.getProfile(user_id)
        // .then(res => {
        //    this.props.setUserProfile(res.data) 
        // })

    }
    render () {
        // debugger
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state)=> ({profile: state.profilePage.profile});

let WithUrlRouterParams = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    // setUserProfile,
    getProfileInfo
} )(WithUrlRouterParams);