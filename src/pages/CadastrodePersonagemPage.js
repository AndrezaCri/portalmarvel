import React from "react";
import adminLayout from "../hoc/adminLayout";
import {useState} from "react-hook-form"



class CadastrodePersonagemPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name:"andreza",
            habilidade:"ataque",
            textarea:"historia",
            forca:true,
            vitalidade:true,
            estrategia:true,
            idade:100,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {isLoggedIn: false};

    };
        handleChange(event) {
            this.setState({value: event.target.value});
        }
        handleSubmit(event) {
            this.setState({isLoggedIn: true});
            event.preventDefault();   
            console.log(event)  
             
        }
      
      
        handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value,
          
        });
    };

    render(){
        const isLoggedIn = () =>{
            const [form] = (['input']);
        
        return <>
            <h1 className="titulo-marvel">Cadastro de Personagem</h1>
            
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h5 className="border-bottom pb-black mb-0 mb-3">Informação do Personagem</h5>
                        <form onSubmit={this.handleSubmit}>
                        {form === "input"};
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nome:</label>
                                    <div className="input-group mb-3">
                                        <input 
                                        type="text" className="form-control form-check" id="validationServer01" 
                                        minLength={4} maxLength={20} name="nome" value="Submit"
                                        placeholder="Nome do Personagem" required 
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" 
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="invalid-feedback">Please provide a valid city.</div>
                                </div>
                                    
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Habilidade</label>
                                    <div className="input-group mb-3">
                                        <input 
                                        type="text" className="form-control" placeholder="Habilidade" 
                                        aria-label="Recipient's username" aria-describedby="basic-addon2"
                                        required minLength={4} name="habilidade" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <label htmlFor="exampleInputEmail1" className="form-label">História do Personagem</label>
                                        <div className="input-group mb-3">
                                            <textarea 
                                                onChange={this.handleChange}
                                                type="text" id="formHistoria" className="form-control" 
                                                minLength={4} maxLength={500} required
                                                placeholder="História do Personagem" 
                                                aria-label="Recipient's username" aria-describedby="basic-addon2" 
                                                name="historia" cols="50" rows="8">
                                            </textarea>                                    
                                        </div>    
                                <div className="col-md-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Idade</label>
                                    <div className="input-group mb-3">
                                        <input onChange={this.handleChange}
                                            type="number" className="form-control" placeholder="idade"
                                            aria-label="Recipient's username" aria-describedby="basic-addon2" 
                                            required name="idade" maxLength={100}/>
                                    </div>
                                </div>                                                                      
                            </div>                       
                            <div className="mb-3 col  form-check" 
                                checked={this.state.forca}
                                onChange={this.handleInputChange}>
                                <input   type="checkbox" className="form-check-input" 
                                            id="exampleCheck1" 
                                            required name="forca"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Força</label>
                            </div>
                            <div className="mb-3 col  form-check"
                                checked={this.state.vitalidade}
                                onChange={this.handleInputChange}>
                                <input   type="checkbox" className="form-check-input" 
                                            id="exampleCheck2" 
                                            required name="vitalidade"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Vitalidade</label>
                            </div>
                            <div className="mb-3 col  form-check"
                            checked={this.state.estrategia}
                            onChange={this.handleInputChange}>
                                <input   type="checkbox" className="form-check-input" 
                                            id="exampleCheck3" required name="estrategia"  />
                                <label className="form-check-label" htmlFor="exampleCheck1">Estratégia</label>
                            </div>                
                            <div className="mb-3" checked={this.state.foto}
                                onChange={this.handleInputChange}>
                                <label  className="form-label" htmlFor="disabledCustomFile">Upload Foto</label>
                                <input  type="file" className="form-control" id="disabledCustomFile" 
                                    disabled=""  required name="foto"/>
                            </div>

                            <button type="submit"  isLoggedIn={isLoggedIn} 
                                className="row btn btn-dark moz submit-invalid" 
                                name="cadastrar" disabled="false" required
                                >Cadastras
                            </button>
                        </form>    
            </div>
    
        </>
    }};

     
};

export default adminLayout(CadastrodePersonagemPage);