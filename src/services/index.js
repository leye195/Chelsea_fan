import axios from 'axios';
export  function get_player(){
    return axios.get("http://localhost:3030/players"); 
}
export function get_staffs(){
    return axios.get("http://localhost:3030/managers");
}
export function get_seasons(){
    return axios.get("http://localhost:3030/seasons");
}