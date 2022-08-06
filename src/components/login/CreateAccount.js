import React from "react";
import "./styles.css";

function CreateAccount({ email, setEmail, password, setPassword, signup }) {
  return (
    <div className="form-container">
      <h1>Create Account</h1>

      <form>
        <h5>E-mail</h5>
        <input type="text" value={email} onChange={setEmail} />

        <h5>Password</h5>
        <input type="password" value={password} onChange={setPassword} />

        <button type="submit" onClick={signup}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
