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
  
    axios.post('http://localhost:3030/api/users', dados)
      .then(response => {
        console.log('Sucesso:', response.data);
        window.location.href = "/login";
      })
      .catch(error => {
        console.error('Erro:', error);
        alert("ERRO", error.message);
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
