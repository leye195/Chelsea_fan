import React from 'react';
import './Header.css'
import logo from '../img/logo.svg';
import {Link} from 'react-router-dom';
const Header=()=>{
    const handleMenu=()=>{
        const menuBtn=document.querySelector(".menu__btn"),
        headerUl=document.querySelector("header ul");
        headerUl.classList.toggle("menu__open");    
    }
    return <header id="top">
        <img className="logo" alt="Chelsea" src={logo}/>
        <p>Chelsea FC</p>
        <ul>
            <li className="_home"><Link to="/">Home</Link></li>
            <li className="_about"><Link to="/about">About</Link></li>
            <li className="_team"><Link to="/team">Team</Link></li>
            <li className="_stat">
                <Link to={{pathname:"/stats",state:{_id:-1}}}>Stats</Link>
            </li>
        </ul>
        <div className="menu__btn" onClick={handleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </header>
}
export default Header;