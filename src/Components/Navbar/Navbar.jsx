import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.Navbar}>
            <NavLink className={style.item} to="/Profile"><i className="fas fa-user-circle"></i></NavLink><br/><br/>
            <NavLink className={style.item} to="/message"><i className="fas fa-envelope"></i></NavLink><br/><br/>
            <NavLink className={style.item} to="/friend"><i className="fas fa-user"></i></NavLink><br/><br/>
            <NavLink className={style.item} to="/news"><i className="far fa-newspaper"></i></NavLink><br/><br/>
        </div>
    );
}
export default Navbar;