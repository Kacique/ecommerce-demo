import React from "react";
import "./styles.css";

function SignIn() {
  return (
    <div className="form-container">
      <h1>Sign In</h1>

      <form>
        <h5>E-mail</h5>
        <input type="text" />

        <h5>Password</h5>
        <input type="password" />

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
