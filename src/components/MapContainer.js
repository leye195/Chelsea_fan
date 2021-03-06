import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import dotenv from 'dotenv';
dotenv.config();
const mapStyles = {
    position:'relative',
    width: '100%',
    height: '350px',
};
export class MapContainer extends Component {
    render() {
        return (
            <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{
         lat: 51.4817131,
         lng: -0.1914929
        }}>
          <Marker position={{lat: 51.481616,
         lng: -0.190946}}
            draggable={false}
         />
      </Map>);
    }
}
dotenv.config();
export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_API
    //language:''
})(MapContainer);