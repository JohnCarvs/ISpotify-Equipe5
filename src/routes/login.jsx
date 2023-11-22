import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const enviarDados = () => {
    const dados = {
      email: email,
      password: senha,
    };

    
    axios.post('http://localhost:3030/api/users/login', dados)
      .then(response => {
        console.log('Sucesso:', response.data);
        alert('Sucesso', response.data.message);
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro', error.message);
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
