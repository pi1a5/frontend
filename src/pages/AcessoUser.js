import React from "react";
import { useLocation } from "react-router-dom";


import "../styles/pages/login.css";

export function AcessoUser() {

  const location = useLocation();
  let data = 'a';
  if(location.state){
    data = location.state.data;
  }

  console.log(data);



  return (
    <div className="container">
      <h1>User rota</h1>
    </div>
  );
}
