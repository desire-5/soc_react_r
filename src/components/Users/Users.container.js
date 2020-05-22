import React from 'react';
import { checkFollow, setUsers, setCurPage,setTotalCountPage,setIsFetching} from '../../redux/usersReducer';
import Users from './Users';
import {connect} from 'react-redux'
import  * as axios from 'axios';
import pre from '../../assets/images/pre.gif'
// import UsersApiContainer from './UsersApiContainer';


class UsersApiContainer extends React.Component {
    
    constructor (props){
        super(props);
        // debugger
        // alert('new');
        // if(this.props.users.length === 0){
            // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {})
        // }
    }
    componentDidMount(){
        // alert('did mount')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(res => {
            // debugger
            this.props.setUsers(res.data.items)
            // this.props.setCurPage(this.props.currentPage)
            // this.props.setTotalCountPage(res.data.totalCount)
        })
    }
    onClickHendler = (curPage) =>{
        // debugger
        // this.props.isFetching = true;
        this.props.setIsFetching(true)
        this.props.setCurPage(curPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${curPage}`).then(res => {
            // debugger
            this.props.setUsers(res.data.items)
            this.props.setIsFetching(false)
            // this.props.isFetching = false;
           
            
        })
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
    
        return <>
            {this.props.isFetching == true? <img src={pre}></img> :null}
            <Users 
                    totalPages={this.props.totalPages} 
                    // onClickHendler = {this.props.onClickHendler}
                    users = {this.props.users}
                    pageSize = {this.props.pageSize}
                    onClickHendler = {this.onClickHendler}
                    currentPage = {this.props.currentPage}
                    check_follow={this.props.checkFollow}
                    isFetching = {this.props.isFetching}
                    
             />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
       users: state.usersPage.users,
       totalPages: state.usersPage.totalPages,
       currentPage: state.usersPage.currentPage,
       pageSize: state.usersPage.pageSize,
       isFetching: state.usersPage.isFetching
    }
}

// debugger 

// full version
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
const UsersContainer = connect(mapStateToProps, {
    checkFollow,
    setUsers,
    setCurPage,
    setTotalCountPage,
    setIsFetching
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
