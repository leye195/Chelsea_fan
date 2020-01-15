import React,{useState} from 'react';
import * as services from '../services';
import '../components/Stats.css';
const StatsContainer=(props)=>{
    const[stats,setStats]=useState(props.stats);
    const[season,setSeason]=useState(props.season);
    const get_topStats=()=>{
        const{played,wins,losses,goals,goalsConceded,cleanSheets}=stats;
        return(
            <div className="topStatsList">
                <div className="topStats">
                    <p>Match Played</p>
                    <p>{played}</p>
                </div>
                <div className="topStats">
                    <p>Wins</p>
                    <p>{wins}</p>
                </div>
                <div className="topStats">
                    <p>Losses</p>
                    <p>{losses}</p>
                </div>
                <div className="topStats">
                    <p>Goals</p>
                    <p>{goals}</p>
                </div>
                <div className="topStats">
                    <p>Goal conceded</p>
                    <p>{goalsConceded}</p>
                </div>
                <div className="topStats">
                    <p>Clean sheets</p>
                    <p>{cleanSheets}</p>
                </div>
            </div>
        )
    }
    const attackStats=()=>{
        const{attack}=stats;
        return(
            <li>
                <div className="stats attack">
                    <div className="header_stat">
                        Attack
                    </div>
                    <div className="normal_stat">
                        <div>Goals</div>
                        <div>
                            {attack.goals}
                        </div>
                    </div>
                    <div className="normal_stat">
                        <div>Goals per match</div>
                        <div>
                            {attack.goalPerMatch}
                        </div>
                    </div>
                    <div className="normal_stat">
                        <div>Shots</div>
                        <div>
                            {attack.shots}
                        </div>
                    </div>
                    <div className="normal_stat">
                        <div>Shots on target</div>
                        <div>
                            {attack.shotsOnTar}
                        </div>
                    </div>
                    <div className="normal_stat">
                        <div>Shooting accuracy %</div>
                        <div>
                            {attack.shootAccurancy}
                        </div>
                    </div>
                    <div className="normal_stat">
                        <div>Penalties scored</div>
                        <div>
                            {attack.penaltiesGoal}
                        </div>
                    </div>
                    <div className="normal_stat">
                        <div>Big chances created</div>
                        <div>
                            {attack.bigChances}
                        </div>
                    </div>
                    <div className="normal_stat">
                        <div>Hit woodwork</div>
                        <div>
                            {attack.hitWoodWork}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
    const teamPlayStats=()=>{
        const{teamplay}=stats;
        return(
            <li>
                <div className="stats teamplay">
                    <div className="header_stat">
                        Team Play
                    </div>
                    <div className="normal_stat">
                        <div>Passes</div>
                        <div>{teamplay.passes}</div>
                    </div>
                    <div className="normal_stat">
                        <div>Pass per match</div>
                        <div>{teamplay.passPerMatch}</div>
                    </div>
                    <div className="normal_stat">
                        <div>Pass accurancy %</div>
                        <div>{teamplay.passAccuracy}</div>
                    </div>
                    <div className="normal_stat">
                        <div>Crosses</div>
                        <div>{teamplay.crosses}</div>
                    </div>
                    <div className="normal_stat">
                        <div>Cross accuracy %</div>
                        <div>{teamplay.c_accur}</div>
                    </div>
                </div>
            </li>
        )
    }
    const defenceStats=()=>{
        const{defence}=stats;
        return(
            <li>
            <div className="stats defence">
                <div className="header_stat">
                    Defence
                </div>
                <div className="normal_stat">
                    <div>Clean sheets</div>
                    <div>{defence.cleanSheets}</div>
                </div>
                <div className="normal_stat">
                    <div>Goals conceded</div>
                    <div>{defence.goalConceded}</div>
                </div>
                <div className="normal_stat">
                    <div>Goals conceded per match</div>
                    <div>{defence.goalConcededPer}</div>
                </div>
                <div className="normal_stat">
                    <div>Saves</div>
                    <div>{defence.saves}</div>
                </div>
                <div className="normal_stat">
                    <div>Tackles</div>
                    <div>{defence.tackles}</div>
                </div>
                <div className="normal_stat">
                    <div>Tackle success %</div>
                    <div>{defence.tackleSuccess}</div>
                </div>
                <div className="normal_stat">
                    <div>Blocked shots</div>
                    <div>{defence.blockedShots}</div>
                </div>
                <div className="normal_stat">
                    <div>Interception</div>
                    <div>{defence.interception}</div>
                </div>
                <div className="normal_stat">
                    <div>Clearances</div>
                    <div>{defence.clearances}</div>
                </div>
                <div className="normal_stat">
                    <div>Headed Clearance</div>
                    <div>{defence.headClearances}</div>
                </div>
                <div className="normal_stat">
                    <div>Aerial Battles/Duels Won</div>
                    <div>{defence.arialBattles}</div>
                </div>
                <div className="normal_stat">
                    <div>Own goals</div>
                    <div>{defence.ownGoals}</div>
                </div>
            </div>
            </li>
        )
    }
    const disciplineStats=()=>{
        const{discipline}=stats;
        return(
            <li>
            <div className="stats attack">
                <div className="header_stat">
                    Discipline
                </div>
                <div className="normal_stat">
                    <div>Yellow Card <div className="yellow_card"></div></div>
                    <div>{discipline.yellow}</div>
                </div>
                <div className="normal_stat">
                    <div>Red Card <div className="red_card"></div></div>
                    <div>{discipline.red}</div>
                </div>
                <div className="normal_stat">
                    <div>Fouls</div>
                    <div>{discipline.fouls}</div>
                </div>
                <div className="normal_stat">
                    <div>Offsides</div>
                    <div>{discipline.offsides}</div>
                </div>
            </div>
            </li>
        )
    }
    const filter_list=()=>{
        const ids=[-1,210,79,54,42,27,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
        let n1=2018,n2=2019
        const tags=ids.map((item)=>{
            if(item===-1)
                return (<li key={item} id={item} onClick={handleSelect}>All Seasons</li>)
            else{
                return (
                    <li key={item} id={item} onClick={handleSelect}>
                        {String(n1--)+'/'+String(n2--)}
                    </li>)
            }
        })
        return(<ul className="filter_ul filter_close">{tags}</ul>)
    }
    const handleFilter=(e)=>{
        const{target}=e;
        if(target.classList.contains("current")){
            const ul = target.nextSibling;
            if(ul.classList.contains("filter_close")){
                openFilter();   
            }else if(ul.classList.contains("filter_open")){
                closeFilter()
            }
        }
    }
    const closeFilter=()=>{
        const filter_ul=document.querySelector(".filter_ul");
        filter_ul.classList.remove("filter_open");
        filter_ul.classList.add("filter_close");
    }
    const openFilter=()=>{
        const filter_ul=document.querySelector(".filter_ul");
        filter_ul.classList.remove("filter_close");
        filter_ul.classList.add("filter_open"); 
    }
    const handleSelect=(e)=>{
        const{target}=e;
        setSeason(target.innerText);
        get_statsInfo(target.id);
        //saveSid(stats,season)
        closeFilter();
    }
    const handleReset=(e)=>{
        const current=document.querySelector(".current");
        current.innerText="All Seasons";
        get_statsInfo(-1);
        saveSid(-1,"All Seasons");
        closeFilter();
    }
    const saveSid=(s_id,season)=>{
        sessionStorage.setItem("key",{s_id,season});
    }
    async function get_statsInfo(id){
        await services.get_stats(id)
        .then((resolve)=>{
            const {data:{results}}=resolve;
            setStats(results);
        })
    }
    return (
        <div className="stats__container">
            <section className="season_filter">
                <div>
                    <div className="current" onClick={handleFilter}>
                        {season?season:"All Seasons"}
                    </div>
                    {filter_list()}
                    <div onClick={handleReset}>
                        Reset
                    </div>
                </div>
            </section>
            {get_topStats()}
            <ul>
                {attackStats()}
                {teamPlayStats()}
                {defenceStats()}
                {disciplineStats()}
            </ul>
        </div>
    );
}
export default StatsContainer;