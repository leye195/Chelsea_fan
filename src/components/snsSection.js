import React,{useEffect} from 'react';
import db from '../services/fakeDB';
const SnsSection=(props)=>{
    useEffect(()=>{
        const {data:{postedTime,body,actor:{image,links}}}=db;
        console.log(db.data);
        console.log(postedTime,body,image,links);
    },[]);
    return(
        <div className="sns__container">
            on SNS
        </div>
    )
}
export default SnsSection;