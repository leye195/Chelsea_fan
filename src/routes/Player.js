import React from "react";
import "../components/players.css";
import defaultPhoto from "../img/Photo_Missing.png";
const basicStyle = {
  maxHeight: "600px",
  height: "100%"
};
const headerSection = () => {
  return (
    <section className="player-header">
      <div className="imgContainer">
        <img src={defaultPhoto} />
      </div>
      <div className="playerDetail">
        <div className="number white">3</div>
        <h1 className="name white">Marcos Alonso</h1>
      </div>
      <div className="numberTag ">3</div>
    </section>
  );
};
const bodySection = () => {
  return (
    <section className="player-body">
      <nav className="sidebar">
        <aside>
          <section className="asideSection intro">
            <div className="label">Club</div>
            <div className="info">Chelsea FC</div>
            <div className="label">Position</div>
            <div className="info">Defender</div>
          </section>
        </aside>
      </nav>
      <div className="details">
        <div className="playerInfo">
          <section>
            <h3>Personal Details</h3>
            <ul>
              <li>
                <div className="label">Nationality</div>
                <div className="info">Spain</div>
              </li>
              <li>
                <div className="label">Birth</div>
                <div className="info">28/12/1990 (29)</div>
              </li>
              <li>
                <div className="label">Height</div>
                <div className="info">188cm</div>
              </li>
            </ul>
          </section>
        </div>
        <div className="career">
          <section>
            <h3>Career</h3>
            <table>
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Club</th>
                  <th>Apps</th>
                  <th>Goals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2019/2020</td>
                  <td>Chelsea</td>
                  <td>8(2)</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </section>
  );
};
const Player = () => {
  return (
    <div className="player-container" style={basicStyle}>
      {headerSection()}
      {bodySection()}
    </div>
  );
};
export default Player;
