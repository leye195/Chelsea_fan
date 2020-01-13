import React,{useCallback} from 'react';
import {Link} from 'react-router-dom';
const Season=(props)=>{
    const handleArrow=useCallback((e)=>{
        const {target}=e;
        const __club=target.parentNode.parentNode.nextSibling;
        const section=target.parentNode.parentNode.parentNode;
        if(target.classList.contains("up")){
            section.style.paddingBottom="0";
        }else if(target.classList.contains("down")){
            section.style.paddingBottom="40px";
        }
        target.classList.toggle("up");
        target.classList.toggle("down");
        __club.classList.toggle("t_active");
        __club.classList.toggle("t_hide");
    },[]);
    const getSeasonInfo=()=>{
        const {seasons}=props;
        const tags=seasons.map((item)=>{
            return(
                <section className="season" key={item.season}>
                    <div>
                        <h4>{item.season}</h4>
                        <span><i className="arrow up" onClick={handleArrow}></i></span>
                    </div>
                    <div className="club__ t_active">
                        <div>
                        <dl className="club__stats">
                            <dt>League Position</dt>
                            <dd className="club__rank">
                                {item.rank}
                            </dd>
                            <dt>Manager</dt>
                            <dd className="club__managers">
                                {item.managers.map((m)=>{
                                    return <p key={m}>{m}</p>
                                })}
                            </dd>
                            <dt>Top Scorer</dt>
                            <dd className="top__scorers">
                                {item.topScorer.map((t)=>{
                                return <p key={t}>{t}</p>
                                })}
                            </dd>
                            <dt>Most Appearance</dt>
                            <dd className="most__appear">
                                {item.mostAppearance.map((m)=>{
                                    return <p key={m}>{m}</p>
                                })}
                            </dd>
                            <dt>Biggest Win</dt>
                            <dd className="club__biggestW">
                                {item.biggestWin}
                            </dd>
                            <dt>Harvest Defeat</dt>
                            <dd className="club__harvestD">
                                {item.havestDefeat}
                            </dd>
                        </dl>
                        <div className="more">
                            <Link to="/stats"><div>more</div></Link>
                        </div>
                        </div>
                        <div className="club__kits__table">
                            <div className="club__kits">
                                <div className="club__kit">
                                    <h5>Home</h5>
                                    <img src={item.kits[0]} alt={item.kits[0]}/>
                                </div>
                                <div className="club__kit">
                                    <h5>Away</h5>
                                    <img src={item.kits[1]} alt={item.kits[1]}/>
                                </div>
                                {item.kits[2]!==null?<div className="club__kit">
                                    <h5>Third</h5>
                                    <img src={item.kits[2]} alt={item.kits[2]}/>
                                </div>:<div></div>}
                            </div>    
                            <div className="table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="th_pos">Pos</th>
                                        <th className="th_club">Club</th>
                                        <th className="th_match">Matches</th>
                                        <th className="th_win">W</th>
                                        <th className="th_draw">D</th>
                                        <th className="th_lost">L</th>
                                        <th className="th_gd">GD</th>
                                        <th className="th_points">Pts</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{item.rank}</td>
                                            <td>CHE</td>
                                            <td>{item.matches}</td>
                                            <td>{item.won}</td>
                                            <td>{item.draw}</td>
                                            <td>{item.lost}</td>
                                            <td>{item.gd}</td>
                                            <td>{item.points}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>          
                        </div>
                    </div>
                </section>)
        })
        return tags;
    }
    return(
        <div className="seasons">
            <div>
                <div className="seasons_container">
                    {getSeasonInfo()}
                </div>
            </div>
        </div>
    )
}
export default Season;