import React from 'react'
import Header from './Header'
import {setDataUserAuth,setIsFetching,getDataUserAuth,logout} from '../../redux/auth-reducer'

// import * as axios from 'axios'
import { connect } from 'react-redux'
import Preloader from '../Preloader/Preloader'
// import { authAPI } from '../../api/api'
class HeaderComponent extends React.Component {

    componentDidMount() {
       
        // this.props.getDataUserAuth();

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
        
        // this.props.setIsFetching(true)
        // authAPI.me()
        // .then(res => {
        //     // debugger
        //     let {email,id,login} = res.data.data;
        //     this.props.setDataUserAuth(id,email,login)
        //     this.props.setIsFetching(false)
        // })
    }
    render() {
        return <>
        {this.props.isFetching == true? <Preloader/>: null} 
            <Header {...this.props} logout={this.props.logout}/>
             </>
    }
}

let mapStateToProps = (state)=>{
    // debugger
    return {
        user_auth_data: state.auth,
        isFetching: state.auth.isFetching,
    }
}
export default connect(mapStateToProps, {
    setDataUserAuth,
    setIsFetching,
    // getDataUserAuth,
    logout
})(HeaderComponent);