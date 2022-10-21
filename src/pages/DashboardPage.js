import React from "react";
import adminLayout from "../hoc/adminLayout"

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    componentDidMount() {
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=1662070501&orderBy=name&limit=12&apikey=24525c46d4e6a5abdc9c7f585f36ca61&hash=62ff6493d782c8c8a031efde7d61e64c`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true, 
              items: result.data.results
            });          
            console.log(result.data.results);
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
                            <img className="imageme-Herois" alt="Imagens Heroes" src={item.thumbnail.path+'.'+item.thumbnail.extension} />
                          </div> 
                          <span className="float-left ">{item.name}</span>
                        
                      </div>
                    </div>
                    ))}
                  </div>  

            )}
          }
       };
      
export default adminLayout(DashboardPage);