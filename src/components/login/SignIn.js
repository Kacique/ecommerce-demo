import React from "react";
import "./styles.css";

function SignIn({ email, setEmail, password, setPassword, signin }) {
  return (
    <div className="form-container">
      <h1>Sign In</h1>

      <form>
        <h5>E-mail</h5>
        <input type="text" value={email} onChange={setEmail} />

        <h5>Password</h5>
        <input type="password" value={password} onChange={setPassword} />

        <button type="submit" onClick={signin}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
