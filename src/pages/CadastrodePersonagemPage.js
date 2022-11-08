import React, { useEffect, useState  } from "react";
import adminLayout from "../hoc/adminLayout";
import { useFormInputValidation } from "react-form-input-validation";

const ValidationForm2 = () => {
    const [isDisabled, setDisabled] = useState(true);

    const [fields, errors, form] = useFormInputValidation({
      nomePersonagem: "",
      habilidade: [],
      historia: "",
      idade: ""
    }, {
      nomePersonagem: "required|min:4",
      habilidade: "required|array",
      historia:"required|max:500",
      idade: "required"
    });

    
    const onSubmit = async (event) => {
        const isValid = await form.validate(event);
        if (isValid) {
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

    useEffect(() => {
        if (form.isValidForm) {
          console.log("MAKE AN API CALL ==> useEffect", fields, errors, form);
        }
    }, [])
      
        return<div>
            <h1 className="titulo-marvel">Cadastro de Personagem</h1>
            
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h5 className="border-bottom pb-black mb-0 mb-3">Informação do Personagem</h5>
                        <form className="myForm"
                            noValidate
                            autoComplete="off"
                            onChange={onSubmit}
                            onSubmit={onSubmit}>
                        
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nome:</label>
                                    <div className="input-group mb-3">
                                        <input 
                                        type="text" className="form-control form-check" id="validationServer01" 
                                        placeholder="Nome do Personagem" name="nomePersonagem"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2"
                                        onBlur={form.handleBlurEvent}
                                        onChange={form.handleChangeEvent}
                                        value={fields.nomePersonagem}
                                        />
                                    </div>
                                    <div className="error">
                                        {errors.nomePersonagem ? 'Campo obrigatorio, favor preencher!' : ""}
                                    </div>
                                </div>
                                    
                                <label htmlFor="exampleInputEmail1" className="form-label">História do Personagem</label>
                                        <div className="input-group mb-3">
                                            <textarea 

                                                type="text" id="formHistoria" className="form-control" 
                                                minLength={4} maxLength={500} 
                                                placeholder="História do Personagem" 
                                                aria-label="Recipient's username" aria-describedby="basic-addon2" 
                                                name="historia" cols="50" rows="8"
                                                onBlur={form.handleBlurEvent}
                                                onChange={form.handleChangeEvent}
                                                value={fields.historia}>

                                            </textarea>   
                                        </div>  
                                        <div className="error">
                                            {errors.historia ? 'Campo obrigatorio, favor preencher!' : ""}
                                        </div>

                                <div className="col-md-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Idade:</label>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="number" className="form-control" placeholder="idade"
                                            aria-label="Recipient's username" aria-describedby="basic-addon2" name="idade"
                                            onBlur={form.handleBlurEvent}
                                            onChange={form.handleChangeEvent}
                                            value={fields.idade}
                                        />
                                       
                                    </div>
                                    <div className="error">
                                        {errors.idade ? 'Campo obrigatorio, favor preencher' : ""}
                                    </div>  
                                </div>                                                                      
                            </div> 
                            <div className="colmb-3 col">
                                <label className="form-label">Habilidade:</label>
                            </div>
                            <div className="colmb-3 col  form-check">
                               <input type="checkbox" className="form-check-input" 
                                    id="exampleCheck1" 
                                     name="habilidade"
                                    onChange={form.handleChangeEvent}
                                    value="Vitalidade"
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Força</label>
                            </div>
                            
                            <div className="colmb-3 col  form-check">
                                <input type="checkbox" className="form-check-input" 
                                    id="exampleCheck2" 
                                    required name="habilidade"
                                    onChange={form.handleChangeEvent}
                                    value="Forca"
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Vitalidade</label>
                            </div>
                            
                            <div className="colmb-3 col  form-check">   
                                <input type="checkbox" className="form-check-input" 
                                    id="exampleCheck3" 
                                    required name="habilidade"
                                    onChange={form.handleChangeEvent}
                                    value="Vitalidade"
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Estratégia</label>
                            </div>         
                            <div className="error">
                                {errors.habilidade ? 'Campo obrigatorio, favor preencher!' : ""}
                            </div>   

                            <div className="mb-3">
                                <label  className="form-label" htmlFor="disabledCustomFile">Upload Foto</label>
                                <input  type="file" className="form-control" id="disabledCustomFile" 
                                    disabled=""  required name="foto"/>
                            </div>

                            <button type="submit" className="row btn btn-dark moz submit-invalid" 
                                name="cadastrar"  disabled={isDisabled}>cadastrar
                            </button>
                        </form>    
                        
            </div>
            
            
        </div>
  
    
     
};

export default adminLayout(ValidationForm2);