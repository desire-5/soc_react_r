import React from 'react';
import { checkFollow, setUsers, setCurPage,setTotalCountPage,setIsFetching,
    toggleFollowingProgress, getUsers,follow,unfollow} from '../../redux/usersReducer'; // action creator
import Users from './Users';
import {connect} from 'react-redux'
// import  * as axios from 'axios';
import Preloader from '../Preloader/Preloader'
// import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {getUserSuperSelector,getTotalPages,getcurrentPage,getPageSize,getIsFetching,getFollowingInProgress} from '../../redux/users-selectors'
// import {usersAPI} from '../../api/api'
// import pre from '../../assets/images/pre.gif'
// import UsersApiContainer from './UsersApiContainer';


class UsersApiContainer extends React.Component {
    
    constructor (props){
        super(props);
        // if(this.props.users.length === 0){
            // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {})
        // }
    }
    componentDidMount(){
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,{
        //     withCredentials:true,
        // })

        this.props.getUsers(this.props.pageSize,this.props.currentPage); //thunk
        //before use thunk
        // this.props.setIsFetching(true)
        // usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(res => {
        //     // debugger
        //     this.props.setUsers(res.items) // recive only data from usersAPI returned promise
        //     this.props.setIsFetching(false)
        //     // this.props.setCurPage(this.props.currentPage)
        //     // this.props.setTotalCountPage(res.data.totalCount)
        // })
        //end
    }
    onClickHendler = (curPage) =>{
        // this.props.isFetching = true;

        this.props.getUsers(this.props.pageSize,curPage); //thunk

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${curPage}`,{
        //     withCredentials:true,
        // })

        // this.props.setIsFetching(true)
        // this.props.setCurPage(curPage);
        // usersAPI.getUsers(this.props.pageSize, curPage)
        // .then(res => {
        //      //debugger
        //     this.props.setUsers(res.items)
        //     this.props.setIsFetching(false)
        //     // this.props.isFetching = false; //bad
        // })
    }
    
    // getUsers = () => {
    //     if(this.props.users.length === 0){
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
    //             // debugger
    //             this.props.set_users(res.data.items)
    //         })
    //     }
    // }
    render() { 
        console.log('RENDER USERS')
    // <Preloader/>
    // if(!this.props.auth) return <Redirect to='/login'/>
        return <>
            {this.props.isFetching == true? <Preloader/> :null}
                <Users
                    totalPages={this.props.totalPages} 
                    users = {this.props.users}
                    pageSize = {this.props.pageSize}
                    onClickHendler = {this.onClickHendler}
                    currentPage = {this.props.currentPage}
                    // check_follow={this.props.checkFollow}
                    isFetching = {this.props.isFetching}
                    followingInProgress = {this.props.followingInProgress}
                    // toggleFollowingProgress = {this.props.toggleFollowingProgress}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow} // thunk 
             />
        </>
    }
}
//selectors
let mapStateToProps = (state) => {
    console.log('mapStateToProps USERS')
    return {
       users: getUserSuperSelector(state),
       totalPages: getTotalPages(state),
       currentPage: getcurrentPage(state),
       pageSize: getPageSize(state),
       isFetching: getIsFetching(state),
       followingInProgress: getFollowingInProgress(state),
    //    auth: state.auth.isAuth
    }
}
// without selectors
// let mapStateToProps = (state) => {
//     return {
//        users: getUsersSelect(state),
//        totalPages: state.usersPage.totalPages,
//        currentPage: state.usersPage.currentPage,
//        pageSize: state.usersPage.pageSize,
//        isFetching: state.usersPage.isFetching,
//        followingInProgress: state.usersPage.followingInProgress,
//     //    auth: state.auth.isAuth
//     }
// }
// debugger 

// full version before
// let mapDispatchToProps = (dispatch1) => ({

//     check_follow: (userId,follow) => dispatch1(checkFollowAC(userId,follow)),
//     // unfollow: (userId) => dispatch1(unFollowAC(userId)),
//     set_users: (users) => dispatch1(setUsersAC(users)),
//     setCurPage: (curpage) => dispatch1(setCurPageAC(curpage)),
//     set_total_count_page:(count)=>dispatch1(setTotalCountPageAC(count)),
//     setIsFetchingTogle:(togle)=>dispatch1(setIsFetchingAC(togle))
// })


// connect 
//key checkFollow is = link to AC checkFollow
// withAuthRedirect - HOC
// withAuthRedirect(
const UsersContainer = connect(mapStateToProps, {
    checkFollow,
    //setUsers,
    //setCurPage,
    // setTotalCountPage,
    // setIsFetching,
    toggleFollowingProgress, 
    getUsers,
    follow,
    unfollow
})(UsersApiContainer);

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)
export default UsersContainer;

//old version with own context and own created container of componet!

// const DialogsContainer = (props)=>{
// // debugger
//     // let store = props.store.getState().dialogsPage;

//     // let addNewMessage = () =>{
//     //     // let value1 = text_message.current.value;
//     //     // props.addMessage(value1);
//     //     props.store.dispatch(addMessageActionCreator());
//     // }
//     // let onChangeHandler = (value) =>{
//     //     props.store.dispatch(updateMessageActionCreator(value));        
//     // }

//     return (
//         <StoreContext.Consumer>{
//             store => {
//                 let state = store.getState().dialogsPage;

//                 let addNewMessage = () =>{
//                     store.dispatch(addMessageActionCreator());
//                 }
//                 let onChangeHandler = (value) =>{
//                     store.dispatch(updateMessageActionCreator(value));        
//                 }
//                 return <Dialogs  addNewMessage={addNewMessage} 
//                             updNewMessage={onChangeHandler} 
//                             dialogsData={state.dialogsData} 
//                             mesagesData={state.mesagesData}
//                             startMessage={state.startMessage} 
//                         />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

// export default DialogsContainer;
