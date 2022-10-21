import React from 'react'
import adminLayout from '../hoc/adminLayout'

class AmigosMarvelPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    componentDidMount() {
        fetch(`https://akabab.github.io/superhero-api/api/all.json`)
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true, 
                  items: result
                });          
                console.log(result.id);
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
    )}
            render(){
              const { error, isLoaded, items } = this.state;
    
               if (error) {
                  return <div>Error: {error.message}</div>;
                } else if (!isLoaded) {
                  return <div>Loading...</div>;
                }else {
                  return (
                      <div className="row">
                        {items.map((item, index) => (
                        <div className="col-xl-3 col-sm-6 mb-3" key={index}>
                          <div className="card text-white bg-black o-hidden h-100">
                              <div className="card-body">
                                <img className="imageme-Herois" alt="Imagens Heroes" src={item.images.sm} />
                              </div> 
                              <span className="float-left ">{item.name}</span>
                            
                          </div>
                        </div>
                        ))}
                      </div>  
    
                )}
              }

};
export default adminLayout(AmigosMarvelPage);