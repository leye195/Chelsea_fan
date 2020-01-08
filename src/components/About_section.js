import React from 'react';
import BasicFact from './Basic_fact';
import HomeGround from './Home_ground';
import MainTrophies from './Main_trophies';
import TimeLine from './Time_line';
import thumb from '../img/56033.jpg';
import './About_section.css';
const About_section=()=>{
    return <div>
        <img src={thumb} alt={thumb}/>
        <BasicFact/>
        <HomeGround/>
        <MainTrophies/>
        <TimeLine/>
        <div className="to_top">Top</div>
    </div>
}
export default About_section;