import React from 'react'
import adminLayout from '../hoc/adminLayout'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class RotaDeHeroes extends React.Component {
  

  constructor(props){
    super(props);

    this.state = {
      aceite:false,
      }
    }

    
        
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {  
      const coords = position.coords
      this.setState({
            center: {
              lat: coords.latitude,
              lng: coords.longitude
            },
            zoom:19,
        })  
        console.log("geo2",this.state)

    });
  }  
    
  render(){ 
    return(
            <div>
              {this.state.center?(
                <div style={{ height: '100vh', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyC2vqJjH9WPG3X3z286RUjf0ewi3IMeUvQ" }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                  >
                    <AnyReactComponent
                      lat={this.state.center.lat}
                      lng={this.state.center.lng}         
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
              ):(
                <h1>Heroi não encontrado</h1>
              )}
            </div>
    ); 
  }  
  
};
export default adminLayout(RotaDeHeroes);