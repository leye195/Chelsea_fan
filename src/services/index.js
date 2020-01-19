import axios from 'axios';
export const get_player=()=>{
    return axios.get("http://localhost:3030/players"); 
}
export const get_staffs=()=>{
    return axios.get("http://localhost:3030/managers");
}
export const get_seasons=()=>{
    return axios.get("http://localhost:3030/seasons");
}
export const get_stats=(id)=>{
    //return axios.get(`https://footballapi.pulselive.com/football/stats/team/4?comps=1&compSeasons=${}`)
    return axios.get(`http://localhost:3030/season/stats/${id}`);
}
export const get_twitter=(ps=9)=>{
    return axios.get(`https://api.canary.platform.pulselive.com/production/stream/86a1bb48-4ff2-47e6-81d1-64edd69a6adb/posts/?pageSize=${ps}`);
}