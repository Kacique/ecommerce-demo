import React, { useState } from "react";
import "./styles.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../../state/StateProvider";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";

function Login() {
  const [{ basket }, dispatch] = useStateValue();
  const [newUser, setNewUser] = useState(false);

  const handleClick = () => {
    setNewUser(!newUser);
  };

  return (
    <div className="login-container">
      <Link to="/" className="logo-container">
        <h1>Shopp</h1>
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      {newUser ? <CreateAccount /> : <SignIn />}

      {newUser ? (
        <>
          <p>Already have an account?</p>
          <button id="submit" onClick={handleClick}>
            Sign in
          </button>
        </>
      ) : (
        <>
          <p>New to Shopp?</p>
          <button id="submit" onClick={handleClick}>
            Create your Shopp account
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
