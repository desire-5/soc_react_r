import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    // debugger
    return (
        <header className={s.header}>
            <img  src='https://www.hatchwise.com/entry/L969100-20150201222814.png'/>
    <div className={s.auth_block}>
      
            {props.user_auth_data.isAuth
                ? <div> 
                    {props.user_auth_data.login } - <button onClick={props.logout}>logout</button>
                </div>
                : <NavLink to='/login'> Login </NavLink>} 
        
    </div>
        </header>
    );
}

export default Header