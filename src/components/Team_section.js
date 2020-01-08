import React,{useState,useCallback,useEffect} from 'react';
import './Team_section.css';
import Player from './Player_section';
import Management from './Management';
import thumb from '../img/56033.jpg';
import * as service from '../services';
const TeamSection=()=>{
    const [status,setStatus]=useState(0);//0: player , 1:management
    const [loading,setLoading]=useState(true);
    const [p_info,setInfo]=useState([]);
    const [staff_info,setStaffInfo]=useState([]);
    const handleClick=useCallback((e)=>{
        const{target}=e;
        if(target.classList.contains("li_ma")&&!target.classList.contains("active")){
            target.classList.toggle("active");
            document.querySelector(".li_pl").classList.toggle("active");
            setStatus(1);
        }else if(target.classList.contains("li_pl")&&!target.classList.contains("active")){
            target.classList.toggle("active");
            document.querySelector(".li_ma").classList.toggle("active");
            setStatus(0);
        }
    },[]);
    useEffect(()=>{
        async function getInfo(){
            Promise.all(
                [await service.get_player()
                .then((resolve)=>{
                setLoading(true);
                const {data:{results}}=resolve;
                setInfo(results);  
                }),
                    await service.get_staffs()
                .then((resolve)=>{
                const {data:{results}}=resolve;
                setStaffInfo(results);})]
            );            
        }
        getInfo();
    },[]);
    return (
    <div>
        <ul className="team_ul">
            <li className="li_ma" onClick={handleClick}>Management</li>
            <li className="li_pl active" onClick={handleClick}>Players</li>
        </ul>

        {status===0?<Player players={p_info}/>:<Management staffs={staff_info}/>}
    </div>)
}
export default TeamSection;