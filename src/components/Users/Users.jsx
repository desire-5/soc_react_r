import React from 'react';
import s from './Users.module.css'
import smile from '../../assets/images/smile.png'
import { NavLink } from 'react-router-dom';
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
                    {(u.followed) ?
                        <button onClick={() => {props.check_follow(u.id,u.followed)} }> Unfollow</button>
                        :<button onClick={() => {props.check_follow(u.id,u.followed)} }> follow</button>
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