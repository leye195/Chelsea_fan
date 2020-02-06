import React from "react";
import { Link } from "react-router-dom";
const PlayerSection = props => {
  let info_obj = { Forward: [], Midfielder: [], Defender: [], GoalKeeper: [] };
  const get_info = () => {
    const { players } = props;
    for (const player of players) {
      info_obj[player.position].push(player);
    }
  };
  const players_tag = type => {
    const tags = info_obj[type].map((item, idx) => {
      return (
        <li id={item._id} key={item._id}>
          <div>
            <div>
              <span className="number">{item.number}</span>
              <h4 className="name">{item.name}</h4>
              <span className="position">{item.position}</span>
              <p className="country">{item.country}</p>
              <div className="view">
                <Link to={{ pathname: "/players", state: { _id: -1 } }}>
                  <p>
                    View Player
                    <span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <img src={`http://localhost:3030${item.img}`} alt={item.name} />
          </div>
        </li>
      );
    });
    return tags;
  };
  get_info();
  return (
    <div className="players">
      <div className="player goalkeep">
        <h4>GoalKeepers</h4>
        <ul>{players_tag("GoalKeeper")}</ul>
      </div>
      <div className="player defender">
        <h4>Defenders</h4>
        <ul>{players_tag("Defender")}</ul>
      </div>
      <div className="player midfielder">
        <h4>Midfielders</h4>
        <ul>{players_tag("Midfielder")}</ul>
      </div>
      <div className="player forward">
        <h4>Forwards</h4>
        <ul>{players_tag("Forward")}</ul>
      </div>
    </div>
  );
};
export default PlayerSection;
