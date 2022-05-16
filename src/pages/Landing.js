import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import Loggin from "../components/loggin";
import "../styles/pages/landing.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const clientId =
  "961754812465-2ovtm0ao3pdnrnk9letc5d8g5arifl9v.apps.googleusercontent.com";

export function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  async function onSuccess(data) {
    try {
      console.log('user: ', data);
      // const user = await axios
      //   .post("https://pi1a5back.herokuapp.com/api/login", {
      //     idToken: data.profileObj.idToken,
      //     sub: data.profileObj.sub,
      //   });

      // if (user) {
      //   sessionStorage.setItem('idToken', data.profileObj.idToken)
      //   navigate('/user')
      // } else {
      //   const response = await axios
      //     .post("https://pi1a5back.herokuapp.com/api/newUser", {
      //       name: data.profileObj.name,
      //       email: data.profileObj.email,
      //       picture: data.profileObj.imageUrl,
      //       idToken: data.profileObj.idToken,
      //       sub: data.profileObj.sub
      //     });
      //   console.log(response);
      //   sessionStorage.setItem('idToken', data.profileObj.idToken)
      //   navigate('/user')
      // }
    } catch (error) {
      console.log(error);
    }
  }

  const onFailure = (data) => {
    console.log("FALHOU A INTEGRAÇÃO");
    console.log(data);
  };

  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1>Sistema de Gestão de Estágio IFSP-SPO</h1>
          <h3>Nunca foi tão fácil gerenciar Estágio.</h3>
        </main>

        <div className="button-wrapper">
          <Loggin successFunction={onSuccess} failureFunction={onFailure} />
        </div>
      </div>
    </div>
  );
}
