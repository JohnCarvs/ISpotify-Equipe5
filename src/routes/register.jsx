import React from "react";
import { useState } from "react";
import "./register.css";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import api from '../services/api'

function Register() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const enviarDados = () => {
    const dados = {
      name: nome,
      email: email,
      password: senha,
      role: 'user' 
    };

    fetch('http://localhost:3030/api/users', {
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
      <div className="register">
      <div>Inscrever-se em uma conta grátis do iSpotify ®</div>
      <div>
        <input className="inputs" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
        <input className="inputs" placeholder="Crie uma senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/><br/>
        <input className="inputs" placeholder="Como devemos chamar você?" value={nome} onChange={(e) => setNome(e.target.value)} required /><br/>
       </div>
      <button id="BotaoCadastro" onClick={enviarDados}>CADASTRAR</button>
      
      <div id="alreadyUser">Já é um usuário do iSpotify?  <Link to="../Login"  id="link" class="myLink"> FAÇA O LOGIN</Link> </div>
      
      </div>
    </div>
  );
}


export default Register;
