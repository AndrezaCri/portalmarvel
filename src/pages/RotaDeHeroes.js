import React from 'react'
import adminLayout from '../hoc/adminLayout'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
        
const defaultgeolocation = {
  center: {
    lat: -23.5536384,
    lng: -46.3536128
  },
  zoom: 20
};

class RotaDeHeroes extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }  
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(positions => {
      const coords = positions.coords;
      this.setState({
        currentLocation: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      });
      console.log(positions)
    })
  }  
  
    

  render(){

    return<div>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC2vqJjH9WPG3X3z286RUjf0ewi3IMeUvQ" }}
          defaultCenter={defaultgeolocation.center}
          defaultZoom={defaultgeolocation.zoom}
        >
          <AnyReactComponent
            lat={-23.5536384}
            lng={-46.3536128}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  }  
  
};
export default adminLayout(RotaDeHeroes);