import React from "react";
import ModalComponent from "../components/ModalComponent";


class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    modalContent(){
      return <>
         <h1> Condições de utilização</h1>

          <h2>Última Actualização 10 de Julho de 2014</h2>

          <p>A Disney Interactive tem o prazer de disponibilizar-lhe os seus sites, software, aplicações, conteúdos, produtos e serviços (“Serviços Disney”), que podem ser da marca Disney, ABC, ESPN, Marvel, Lucasfilm, Club Penguin, Playdom ou uma outra marca da propriedade ou licenciada pela The Walt Disney Company. Estas cláusulas regem a sua utilização e a nossa prestação dos Serviços Disney nos quais as mesmas se baseiam, bem como os Serviços Disney que disponibilizamos em sites e em plataformas de terceiros, se as mesmas lhe forem divulgadas por via da sua utilização dos Serviços Disney.</p>    
            
          <p>  POR FAVOR LEIA ESTAS CLÁUSULAS COM CUIDADO ANTES DE UTILIZAR OS SERVIÇOS DISNEY.
          QUALQUER LITÍGIO ENTRE AMBAS AS PARTES DEVE SER RESOLVIDO POR ARBITRAGEM INDIVIDUAL VINCULATIVA. POR FAVOR, LEIA AS DISPOSIÇÕES SOBRE ARBITRAGEM CONTIDAS NESTAS CLÁUSULAS, POIS AS MESMAS AFECTAM OS SEUS DIREITOS NESTE CONTRATO.
          NADA NESTAS CLÁUSULAS VISA PREJUDICAR OS SEUS DIREITOS PREVISTOS NA LEI EM VIGOR NO SEU LOCAL DE RESIDÊNCIA HABITUAL. SE HOUVER UM CONFLITO ENTRE ESSES DIREITOS E ESTAS CLÁUSULAS, OS SEUS DIREITOS CONFERIDOS PELA LEI LOCAL APLICÁVEL PREVALECERÃO.</p>
      </>;
    } 
    modalFooterContent(){ 
    
    return <>
    </>;
  }
   render (){
    return (
    <>
      <footer className="footer">
          <div className="container-fluid">

          <div>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalTermosUso">
                  Termos de uso   
              </button>
          </div>

          
          </div>
      </footer>
     
<ModalComponent title="Termos de Uso" footerContent={this.modalFooterContent()} content={this.modalContent()} dataBsBackdrop="static" id="ModalTermosUso"/>
</> 
    )
   }
 
    

    
};


export default Footer;