import React from "react";
import { useLocation } from "react-router-dom";


import "../styles/pages/login.css";

export function AcessoUser() {

  const name = sessionStorage.getItem('name')
  const email = sessionStorage.getItem('email')
  const photo = sessionStorage.getItem('imageUrl')

  const location = useLocation();
 console.log(location);

  return (
    <div className="container"> 
      <h1>Dados do Usuário Cadastrado</h1>
      <img src={photo} alt="img"/>
      <p>Nome: {name}</p>
      <p>E-mail: {email} </p>
    </div>
  );
}
