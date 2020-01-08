import React from 'react';
import './Header.css'
import logo from '../img/logo.svg';
import {Link} from 'react-router-dom';
const Header=()=>{
    return <header id="top">
        <img className="logo" alt="Chelsea" src={logo}/>
        <p>Chelsea FC</p>
        <ul>
            <li className="_home"><Link to="/">Home</Link></li>
            <li className="_about"><Link to="/about">About</Link></li>
            <li className="_team"><Link to="/team">Team</Link></li>
        </ul>
    </header>
}
export default Header;