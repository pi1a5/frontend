import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "../styles/pages/login.css";

export function AcessoUser() {

  // const name = sessionStorage.getItem('name')
  // const email = sessionStorage.getItem('email')
  // const photo = sessionStorage.getItem('imageUrl')

  const data = undefined;

  //const location = useLocation();
  //console.log(location);

  async function consulta() {
    try {
      const response = await axios
        .post("https://pi1a5back.herokuapp.com/api/user", {
          email: sessionStorage.getItem('email')
        });

      console.log(response);
      this.data = response.data;
      console.log(this.data);
    } catch (error) {
      console.log(error);
    }
  }

  consulta();

  return (
    <div className="container">
      <h1>Dados do Usuário Cadastrado</h1>
      <img src={data.foto} alt="img" />
      <p>Nome: {data.nome}</p>
      <p>E-mail: {data.email} </p>
    </div>
  );
}
