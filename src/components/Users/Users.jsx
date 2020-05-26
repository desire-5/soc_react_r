import React from 'react';
import s from './Users.module.css'
import smile from '../../assets/images/smile.png'
import { NavLink } from 'react-router-dom';
import  * as axios from 'axios';
import { usersAPI } from '../../api/api';
// import pre from '../../assets/images/pre.gif'
const Users = (props)=>{
// debugger
    // let restrict_count_pages = (props.totalPages > 50)? 50:props.totalPages ;
    let countPage =  Math.ceil(props.totalPages / props.pageSize);
    let pages = [];
    for(let i = 1; i<=countPage; i++){
        pages.push(i)
    }

    return <div>
        {/* {props.isFetching == true? <img src={pre}></img> :null} */}
            <div>
                {pages.map( p => {
                    return <span className={s.pagination}>
                                <span onClick={ (e) => {props.onClickHendler(p)}} className={props.currentPage == p? s.currentPage: ''}>{p}</span>
                            </span>
                })}
            </div>
        {/* <button onClick={this.getUsers}>getUsers</button> */}
        {
            props.users.map( u => <div key={u.id} className={s.main_wrapper}>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ?u.photos.small :  smile } className={s.image}/>
                    </NavLink>
                    {/* <img className={s.image} src="https://kacabiru.files.wordpress.com/2010/11/smilelaughuy0.png" alt=""/> */}
                </div>
                <div>
                    {(u.followed) 
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            // debugger

                            props.unfollow(u.id, u.followed)
                            // props.toggleFollowingProgress(true, u.id)
                            
                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                //     withCredentials:true,
                                //     headers:{
                                //         "API-KEY":"3ded3cb2-444b-4bcb-b115-dae85c5ca5ff"
                                //     }
                                // })
                                // usersAPI.unfollow(u.id)
                                // .then(res => {
                                //     debugger
                                //     if(res.data.resultCode == 0){
                                //         props.check_follow(u.id, u.followed)
                                //         props.toggleFollowingProgress(false, u.id)
                                //     }
                                    
                                // })

                                    
                                } }> Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            // debugger
                            // props.toggleFollowingProgress(true, u.id)
                            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                            // withCredentials:true,
                            // headers:{
                            //     "API-KEY":"3ded3cb2-444b-4bcb-b115-dae85c5ca5ff"
                            // }
                            // })
                            // usersAPI.follow(u.id)
                            // .then(res => {
                            //     debugger
                            //     if(res.data.resultCode == 0){
                            //         props.check_follow(u.id,u.followed)
                            //         props.toggleFollowingProgress(false, u.id)
                            //     }
                                
                            // })
                            props.follow(u.id,u.followed)

                            } }> follow</button>
                    }

                    {/* { u.followed 
                        ?<button onClick={() => {props.unfollow(u.id)} }>Follow</button>
                        :<button onClick={() => {props.follow(u.id,u.followed)} }>Unfollow</button>} */
                    }
                </div>
                    <div>{u.name}</div>
                    {/* <div>{u.location.country}</div> */}
                    
                    <div>{u.status}</div>
                    <hr/>
            </div>)
        } 
        </div>
}

export default Users;