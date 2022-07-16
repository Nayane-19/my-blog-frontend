import React from "react";
import Form from "../../components/Form/Form";
import Navigation from "../../components/Navigation/Navigation";
import "./Login.scss";

function Login() {
  return (
    <>
      <Navigation />
      <div className="Login container flex">
        <Form title="Login" button="Entrar" login={true} />
      </div>
    </>
  );
}

export default Login;
