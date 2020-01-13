import React,{useState,useEffect} from 'react';
import * as services from '../services';
import StatsContainer from '../components/statsContainer';
const Stats=(props)=>{
    const [stats,setStats]=useState({});
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
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
            {loading!==true?<StatsContainer stats={stats}/>:<div>Loading</div>}
        </div>
    );
}
export default Stats;
