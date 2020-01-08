import React,{useEffect} from 'react';
import TeamSection from '../components/Team_section';
const Team=(props)=>{
    useEffect(()=>{
        if(props.location.pathname==="/team"){
            const q=document.querySelectorAll("header ul li");
            for (const iter of q) {
              if(iter.classList.contains("_team"))
                iter.querySelector("a").classList.add("header_active");
              else
                iter.querySelector("a").classList.remove("header_active");
            }
          }  
    })
    return (
    <div className="team">
        <h3>Team</h3>
        <TeamSection/>
    </div>)
}
export default Team;