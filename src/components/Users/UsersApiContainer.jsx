// import React from 'react';
// import  * as axios from 'axios';
// import Users from './Users';

// class UsersApiContainer extends React.Component {
    
//     constructor (props){
//         super(props);
//         // debugger
//         // alert('new');
//         // if(this.props.users.length === 0){
//             // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {})
//         // }
//     }
//     componentDidMount(){
//         // alert('did mount')
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(res => {
//             // debugger
//             this.props.set_users(res.data.items)
//             this.props.set_total_count_page(res.data.totalCount)
//         })
//     }
//     onClickHendler = (curPage) =>{
//         this.props.setCurPage(curPage);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${curPage}`).then(res => {
//             // debugger
//             this.props.set_users(res.data.items)
            
//         })
//     }
    
//     // getUsers = () => {
//     //     if(this.props.users.length === 0){
//     //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
//     //             // debugger
//     //             this.props.set_users(res.data.items)
//     //         })
//     //     }
//     // }
//     render() { 
    
//         return <Users 
//                     totalPages={this.props.totalPages} 
//                     // onClickHendler = {this.props.onClickHendler}
//                     users = {this.props.users}
//                     pageSize = {this.props.pageSize}
//                     onClickHendler = {this.onClickHendler}
//                     check_follow={this.props.check_follow}
//         />
//     }
// }
// export default UsersApiContainer;