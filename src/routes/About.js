import React,{useEffect} from 'react';
import AboutSection from '../components/About_section';
const About=(props)=>{
    useEffect(()=>{
        if(props.location.pathname==="/about"){
            const q=document.querySelectorAll("header ul li");
            for (const iter of q) {
              if(iter.classList.contains("_about"))
                iter.querySelector("a").classList.add("header_active");
              else
                iter.querySelector("a").classList.remove("header_active");
            }
          }  
    })
    return( 
    <div className="history">
        <h3>About Chelsea</h3>
        <AboutSection/>
    </div>)
}
export default About;