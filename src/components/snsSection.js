import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Loading from './Loading';
import './sns_section.css';
import * as services from '../services';
const SnsSection=(props)=>{
    const [sns,setSNS]=useState([]);
    const [page,setPage]=useState(6);
    const [loading,setLoading]=useState(true);
    const getSns=async(page)=>{
        setLoading(true);
        const {data:{content}} = await services.get_twitter(page);
        setSNS(content);
        setPage(page);
        setLoading(false);
    }
    useEffect(()=>{
        getSns(page);
    },[page]);
    const snsList=()=>{
        //const{link,body,postedTime,image}=sns;
        const tags=sns.map((item)=>{
            const {data:{object,twitter_entities}}=item;
            let a_idx=-1;
            if(twitter_entities.media===undefined)
                twitter_entities.media=[{media_url:undefined}];
            if(object.summary.indexOf("https://")!==-1)
                a_idx=object.summary.indexOf("https://");
            return (
                <li key={item.data.id} className={twitter_entities.media[0].media_url!==undefined?"cardContent imageContent":"cardContent textContent"}>
                    <div className="message">
                        <div className="message__header">
                            Chelsea FC
                            <h6>{object.postedTime}</h6>
                        </div>
                        <div className="socialMessage__container">
                            <div className="post__image">
                                <img src={twitter_entities.media[0].media_url} alt={twitter_entities.media[0].media_url}/>
                            </div>
                            <p className="post__message">{a_idx===-1?object.summary:(object.summary.slice(0,a_idx-1)) }</p>
                        </div>
                    </div>
                    <div className="actions">
                        <a href={object.summary.slice(a_idx,)}><FontAwesomeIcon icon={faComment}/></a>
                        <span className="brand"><FontAwesomeIcon icon={faTwitter}/></span>
                    </div>
                </li>
            );
        })
        return tags;
    };
    const handleClick=(e)=>{
        getSns(page+3);        
    }
    return(
        <div className="sns__container">
            <p className="on__sns">On Social</p>
            {
                loading===false?(<ul>
                    {snsList()}
                </ul>):<Loading/>
            }
            <button onClick={handleClick}>Load More +</button>            
        </div>
    )
}
export default SnsSection;