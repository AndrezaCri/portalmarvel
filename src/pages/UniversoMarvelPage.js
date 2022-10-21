import React from "react";
import adminLayout from "../hoc/adminLayout"

class UniversoMarvelPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
            <h1 class="titulo-marvel">Universo Marvel</h1>
            <div class="flex">
            
            <img class="imagem-marvel" alt="Alt content" src={require('./../assets/images/marvel.png')} />

            <p class="texto-marvel" >


                O Universo Marvel (ou Terra-616)[1] é o universo compartilhado onde ocorrem as histórias na maioria dos títulos de quadrinhos americanos e outras mídias publicadas pela Marvel Entertainment. Super-equipes, como os Vingadores, os X-Men, o Quarteto Fantástico, os Guardiões da Galáxia, os Defensores, os Inumanos e outros super-heróis Marvel vivem neste universo, incluindo personagens como Homem-Aranha, Capitão América, Homem-Formiga, Capitã Marvel, Homem de Ferro, Thor, Hulk, Feiticeira Escarlate, Viúva Negra, Doutor Estranho e muitos outros.<br /><br />

                O Universo Marvel é retratado como existente dentro de um "multiverso" composto por milhares de universos separados, todas as quais são as criações da Marvel Comics e todas elas, em certo sentido, "universos Marvel". Neste contexto, "Universo Marvel" é levado a se referir à continuidade mainstream Marvel, que é conhecida como Terra-616 ou Terra Prime..
            </p>
            </div>
            
           
            
        </>
    }
}

export default adminLayout(UniversoMarvelPage);