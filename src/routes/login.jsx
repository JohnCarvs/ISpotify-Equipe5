import React from "react";
import { useState } from "react";
import "./login.css";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import api from "../services/api";

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const enviarDados = () => {
    const dados = {
      email: email,
      password: senha,
    };

    fetch('http://localhost:3030/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Sucesso:', data);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  };
  
  return (
    <div>
      <div className="login">
      <div id="h1">iSpotify®</div>
      <div>Música para todos.</div>
      <div>
        <input className="inputs" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
        <input className="inputs" placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required/><br/>
       </div>
      <button id="BotaoEntrar" onClick={enviarDados}>ENTRAR</button>
      
      <div id="alreadyUser">Não tem uma conta?  <Link to="../Register"  id="link" class="myLink"> INSCREVA-SE</Link> </div>
      
      </div>
    </div>
  );
}

export default Login;
