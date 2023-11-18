import React from "react";
import { useState } from "react";
import "./register.css";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="register">
      <div>Inscrever-se em uma conta grátis do iSpotify ®</div>
      <div>
        <input className="inputs" placeholder="Email"/><br/>
        <input className="inputs" placeholder="Crie uma senha" type="password"/><br/>
        <input className="inputs" placeholder="Como devemos chamar você?"/><br/>
       </div>
      <button id="BotaoCadastro">CADASTRAR</button>
      
      <div id="alreadyUser">Já é um usuário do iSpotify?  <Link to="../Login"  id="link" class="myLink"> FAÇA O LOGIN</Link> </div>
      
      </div>
    </div>
  );
}

export default Register;
