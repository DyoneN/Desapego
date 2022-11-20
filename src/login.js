import { useState } from "react";
import imgLog from "./components/assets/images/desapego-logo.png";

import './login.css'

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <div className="login-form">

                        <span className="login-form-title">Bem vindo!</span>

                        <span className="login-form-title">
                            <img src={imgLog} alt="logo"/>
                        </span>

                        <div className="wrap-input">
                            <input 
                                className={email !== "" ? 'has-val innput' : 'input'} 
                                type="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-imput" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input 
                                className={password !== "" ? 'has-val innput' : 'input'} 
                                type="password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="focus-imput" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-from-btn">
                            <button className="login-form-btn">Login</button>

                        </div>

                        <div className="text-center">
                            <span className="txt1"> Não Possui conta?</span>
                            <a className="txt2" href="#">Criar Conta Usuario</a>
                            <a className="txt2" href="#">Criar Conta Vendedor</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;