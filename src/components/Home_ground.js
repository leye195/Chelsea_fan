import React from 'react';
import home from '../img/home.jpg';
import MapContainer from './MapContainer'
const Home_ground=(props)=>{
    return <section className="home_ground">
        <h5>Stadium</h5>
        <div>
            <p>Stamford Bridge (1905-)</p>
            <div>
            <img src={home} alt={home}/>
            <MapContainer/>
            </div>
        </div>
    </section>
}
export default Home_ground;