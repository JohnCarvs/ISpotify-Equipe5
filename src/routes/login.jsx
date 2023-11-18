import React from "react";
import { useState } from "react";
import "./login.css";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function Login() {
  
  return (
    <div>
      <div className="login">
      <div id="h1">iSpotify®</div>
      <div>Música para todos.</div>
      <div>
        <input className="inputs" placeholder="Email"/><br/>
        <input className="inputs" placeholder="Senha" type="password"/><br/>
       </div>
      <button id="BotaoEntrar">ENTRAR</button>
      
      <div id="alreadyUser">Não tem uma conta?  <Link to="../Register"  id="link" class="myLink"> INSCREVA-SE</Link> </div>
      
      </div>
    </div>
  );
}

export default Login;
