import React from 'react';

const statsContainer=(props)=>{
    const get_topStats=()=>{
        const{stats:{played,wins,losses,goals,goalsConceded,cleanSheets}}=props;
    }
    const getBlockS=()=>{
        const{stats:{attack,teamPlay,defence,discipline}}=props;
    }
    return (
        <div className="stats__container">
            <ul>

            </ul>
        </div>
    );
}

export default statsContainer;