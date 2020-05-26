import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    // debugger
    return (
        <header className={s.header}>
            <img  src='https://www.hatchwise.com/entry/L969100-20150201222814.png'/>
    <div className={s.auth_block}>
      
            {props.user_auth_data.isAuth? props.user_auth_data.login : <NavLink to='/login'> 'Login' </NavLink>} 
        
    </div>
        </header>
    );
}

export default Header