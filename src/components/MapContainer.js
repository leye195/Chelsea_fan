import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
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
        }}
      />);
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCzHMcB7h8gXNOrphMorstUsv9m1qk7Rj0'
  })(MapContainer);