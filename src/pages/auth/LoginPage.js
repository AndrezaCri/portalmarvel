import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";

class LoginPage extends React.Component {
    constructor(props){
        super(props);

       
        this.state = {
            aceites: false
        };
        
    }    
        setCookie = () => {
            localStorage.setItem('username', "aceite");
            this.setState(() => ({
                aceites: true
            }));
        }
        
        onClick = () => {
            this.setCookie(); 
        };
        
        componentDidMount(){
            if(localStorage.getItem('username')){
                this.setState(() => ({
                    aceites: true
                }));
            }
        };
        
        renderCookie(){ 
            if(!this.state.aceites) {
                console.log("ok")
                return<div  className="alert alert-secondary alert-dismissible fade show" role="alert">
                <p> Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, 
                    personalizar publicidade e recomendar conteúdo de seu interesse. 
                    Ao utilizar nossos serviços, você concorda com tal monitoramento. 
                    Informamos ainda que atualizamos nossa Política de Privacidade. Conheça nosso Portal da Privacidade e veja a nossa nova Política.
                </p>
                    <button type="button" className="btn btn-dark moz submit-invalid" 
                        aria-label="Close" data-bs-dismiss="alert" 
                        disabled="" required 
                        onClick={() => this.setCookie(true)} 
                        > Aceitar
                    </button>
                </div>
            }
        }
         
        render(){
        return <>
        <div  className="row alert alert-secondary alert-dismissible fade show" role="alert">
        </div>
        
            <form className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <Link to="/reset-password" className="text-body">Forgot password?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="/" type="button" className="btn btn-primary btn-lg">Login</Link>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                        className="link-danger">Register</a></p>
                </div>
            </form>
            {this.renderCookie()}
        </>
        
    }
}

export default authLayout(LoginPage);