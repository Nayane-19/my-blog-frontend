import React from "react";
import Form from "../../components/Form/Form";
import Navigation from "../../components/Navigation/Navigation";
import "./Signup.scss";

function Signup() {
  return (
    <>
      <Navigation />
      <div className="Signup container flex">
        <Form title="Cadastro" button="Cadastrar" signup={true} />
      </div>
    </>
  );
}

export default Signup;
