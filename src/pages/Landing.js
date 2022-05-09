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

  async function onSuccess2(data) {
    console.log(data);
    console.log(data.profileObj.name);
    console.log(data.profileObj.email);
    console.log(data.profileObj.imageUrl);

    try {
      const response = await fetch("https://pi1a5back.herokuapp.com/api/auth", {
        method: "POST",
        body: JSON.stringify({
          token: data.tokenId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  //cria um novo user
  async function onSuccess(data) {
    axios
      .post("https://pi1a5back.herokuapp.com/api/newUser", {
        name: data.profileObj.name,
        email: data.profileObj.email,
        picture: data.profileObj.imageUrl,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
