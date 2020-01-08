import React from 'react';
import faCup from '../img/fa_cup.png';
import champ from '../img/champions_league.png';
import football from '../img/football_league.png';
import premier from '../img/premier_league.png';
import cup_winners from '../img/cup_winners_cup.png';
import urpa from '../img/europa_league.png';
import superCup from '../img/super_cup.png';
import timeline from '../img/timeline_2019.png';
const Main_trophies=()=>{
    return <section className="main_trophies">
        <h5>Main Trophies </h5>
        <img className="trophy_timeline" src={timeline} alt={timeline}/>
        <div>
            <div>
                <img src={premier} alt={premier}/>
                <p>Premier League: 6</p>
            </div>
            <div>
                <img src={faCup} alt={faCup}/>
                <p>FA Cup: 8</p>
            </div>
            <div>
                <img src={football} alt={football}/>
                <p>League Cup: 5</p>
            </div>
            <div>
                <img src={champ} alt={champ}/>
                <p>UEFA Champions League: 1</p>
            </div>
            <div>
                <img src={cup_winners} alt={cup_winners}/>
                <p>UEFA Cup Winners Cup: 2</p>
            </div>
            <div>
                <img src={urpa} alt={urpa}/>
                <p>UEFA Europa League: 2</p>
            </div>
            <div>
                <img src={superCup} alt={urpa}/>
                <p>UEFA Super Cup: 1</p>
            </div>
        </div>
    </section>
}
export default Main_trophies;