import React,{useEffect} from 'react';
import b1 from '../img/stamfordbridge.jpeg';
import b2 from '../img/fa_cup.jpeg';
import b3 from '../img/young.jpeg';
import SnsSection from '../components/snsSection';
const Home=(props)=>{
  useEffect(()=>{
    const imgs=[b1,b2,b3];
    const bg=document.querySelector(".bg");
    const idx=Math.floor(Math.random()*3)
    bg.style.backgroundImage=`url(${imgs[idx]})`;
    if(props.location.pathname==="/"){
      const q=document.querySelectorAll("header ul li");
      for (const iter of q) {
        if(iter.classList.contains("_home"))
          iter.querySelector("a").classList.add("header_active");
        else
          iter.querySelector("a").classList.remove("header_active");
      }
    }    
  });
    return (
    <div style={{backgroundColor:"#00009e"}}>
      <div className="bg">
        <p className="slider_p">
          Keep the Blue Flag Flying High
        </p>
      </div>
      <SnsSection/>
    </div>)
}
export default Home;