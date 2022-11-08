import React from "react";
import adminLayout from "../hoc/adminLayout"

class PanteraNegra extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return<>
            <div className="row">
                <h5 className="titlepantera">Pantera Negra - Wakanda para Sempre</h5>
                <h1 className="titleestreia border-bottom pb-black mb-0 mb-3">Data de estreia: 10 de novembro 2022</h1>
                <a className="site" href="https://www.ingresso.com/filme/pantera-negra-wakanda-para-sempre?city=sao-paulo&partnership=home&target=em-alta#!#data=20221109" target="_blank" rel="noopener noreferrer">"Compre seu ingresso"</a>
            </div>
            <div className="row">
                <iframe className="treile" width="560" height="400" src="https://www.youtube.com/embed/aPwKTKqa8WU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    }

}
export default adminLayout(PanteraNegra);

