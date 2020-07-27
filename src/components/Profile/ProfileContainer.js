import React from 'react'
import Profile from './Profile'
// import  * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile, getProfileInfo, getUserStatus,updateUserStatus,sendPhoto,sendProfileData} from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
// import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

    refreshProfile(){
        let user_id = this.props.match.params.user_id; // user from app.js route path
        if(!user_id){
            user_id = this.props.logined_user_id
            //  user_id = 8352;
             if(!user_id){
                 this.props.history.push('/login')
             }
        }
        this.props.getProfileInfo(user_id);
        // setTimeout(()=>{
        this.props.getUserStatus(user_id);
    }

    componentDidMount() {
    //    debugger
        this.refreshProfile();

        // },1000)
        // this.props.getUserStatus(user_id);

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${user_id}`)
        //  usersAPI.getProfile(user_id)
        // .then(res => {
        //    this.props.setUserProfile(res.data) 
        // })

    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.user_id !== prevProps.match.params.user_id)
            this.refreshProfile();
        // debugger
    }
    render () {
       
        // alert(this.props.auth)
    //    let withAuthRedirect =  withAuthRedirect(ProfileContainer)
        // if(!this.props.auth) return <Redirect to='/login'/>

        return <Profile {...this.props} profile={this.props.profile} 
                     sendPhoto={this.props.sendPhoto}
                    isOwner={!this.props.match.params.user_id}
                    status={this.props.status} 
                    updateUserStatus={this.props.updateUserStatus}
                    sendProfileData={this.props.sendProfileData}/>
    }
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    logined_user_id: state.auth.id
    // auth: state.auth.isAuth //this prop recive from hoc
});

export default compose(
    connect(mapStateToProps, {
            // setUserProfile,
            getProfileInfo,
            getUserStatus,
            updateUserStatus,
            sendPhoto,
            sendProfileData,
        } ),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = (props) => {
//     if(!this.props.auth) return <Redirect to='/login'/>
//     return <ProfileContainer {...this.props}/>
// }

// good
// let withAuthRedirectCon =  withAuthRedirect(ProfileContainer);

// let mapStateToPropsForRedirect = (state)=> ({
//     auth: state.auth.isAuth
// });
// withAuthRedirectCon = connect(mapStateToPropsForRedirect)(withAuthRedirectCon)


// let WithUrlRouterParams = withRouter(ProfileContainer); //withAuthRedirectCon

// export default withAuthRedirect(connect(mapStateToProps, {
//     // setUserProfile,
//     getProfileInfo
// } )(WithUrlRouterParams));