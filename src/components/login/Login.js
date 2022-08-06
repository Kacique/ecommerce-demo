import React, { useState } from "react";
import "./styles.css";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();

  const handleClick = () => {
    setNewUser(!newUser);
  };

  const signin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged  In");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="login-container">
      <Link to="/" className="logo-container">
        <h1>Shopp</h1>
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      {newUser ? (
        <CreateAccount
          email={email}
          setEmail={(e) => setEmail(e.target.value)}
          password={password}
          setPassword={(e) => setPassword(e.target.value)}
          signup={signup}
        />
      ) : (
        <SignIn
          email={email}
          setEmail={(e) => setEmail(e.target.value)}
          password={password}
          setPassword={(e) => setPassword(e.target.value)}
          signin={signin}
        />
      )}

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
