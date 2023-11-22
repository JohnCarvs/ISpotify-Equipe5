import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import Alert from '@mui/material/Alert';

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
        window.location.href = "/artists";
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro', error.message);
      });
  };

  const AlertResponse = ({ response }) => {
  let divRenderizada;
  response = 'caso3';
  if (response === 'caso1') {
    divRenderizada = <Alert variant="filled"severity="error">eita</Alert>;
  } else if (response === 'caso2') {
    divRenderizada = <Alert variant="filled"severity="warning">warning</Alert>;
  } else if (response === 'caso3') {
    divRenderizada = <Alert variant="filled"severity="success">oba oba</Alert>;
  } else {
    divRenderizada = <Alert variant="filled"severity="info">na verdade ☝🤓</Alert>;
  }

  return (
    <div>
      {divRenderizada}
    </div>
  );
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
      <AlertResponse/>

      </div>
    </div>
    
  );
}

export default Login;
