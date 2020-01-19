import React,{useState,useEffect} from 'react';
import * as services from '../services';
import StatsContainer from '../components/StatsContainer';
import Loading from '../components/Loading';
const Stats=(props)=>{
    const [stats,setStats]=useState({});
    //const [season,setSeason]=useState({});
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        if(props.location.pathname==="/stats"){
            const q=document.querySelectorAll("header ul li");
            for (const iter of q) {
              if(iter.classList.contains("_stat"))
                iter.querySelector("a").classList.add("header_active");
              else
                iter.querySelector("a").classList.remove("header_active");
            }
          }  
        async function getStats(){
            let _id=-1;
            setLoading(true);
            if(props.location.state!==undefined)
                _id=props.location.state._id;                
            await services.get_stats(_id)
            .then((resolve)=>{
                const{data:{results}}=resolve;
                setStats(results);
                setLoading(false);
            });
        }
        getStats();
    },[props]); 
    return(
        <div>
            {loading!==true?<StatsContainer stats={stats}/>:<Loading/>}
        </div>
    );
}
export default Stats;
