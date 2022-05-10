import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "../styles/pages/login.css";

export function AcessoUser() {

  // const name = sessionStorage.getItem('name')
  // const email = sessionStorage.getItem('email')
  // const photo = sessionStorage.getItem('imageUrl')

  state = {
    user: []
  }

  //const location = useLocation();
  //console.log(location);

  async function consulta() {
    try {
      const response = await axios
        .post("https://pi1a5back.herokuapp.com/api/user", {
          email: sessionStorage.getItem('email')
        });

      console.log(response);
      const user = response.data;
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
       <ul>
        { this.state.user.map(u => <li>{u.nome}</li>)}
      </ul>
      {/* <h1>Dados do Usuário Cadastrado</h1>
      <img src={this.state.user.foto} alt="img" />
      <p>Nome: {this.state.user.nome}</p>
      <p>E-mail: {this.state.user.email} </p> */}
    </div>
  );
}
