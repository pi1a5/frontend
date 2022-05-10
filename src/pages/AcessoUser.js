import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "../styles/pages/login.css";

export function AcessoUser() {

  // const name = sessionStorage.getItem('name')
  // const email = sessionStorage.getItem('email')
  // const photo = sessionStorage.getItem('imageUrl')

  const [user, setUser] = React.useState(null);

  //const location = useLocation();
  //console.log(location);

  async function consulta() {
    try {
      const response = await axios
        .post("https://pi1a5back.herokuapp.com/api/user", {
          email: sessionStorage.getItem('email')
        });

      console.log(response);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

    if (!user) return null;

    return (
      <div className="container">
        <h1>Dados do Usuário Cadastrado</h1>
        <img src={user.foto} alt="img" />
        <p>Nome: {user.nome}</p>
        <p>E-mail: {user.email} </p>
        <button onClick={consulta}>Consultar banco de dados</button>
      </div>
    );

    consulta();


}
