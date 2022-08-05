import React from "react";
import "./styles.css";

function CreateAccount() {
  return (
    <div className="form-container">
      <h1>Create Account</h1>

      <form>
        <h5>E-mail</h5>
        <input type="text" />

        <h5>Password</h5>
        <input type="password" />

        <h5>Re-enter Password</h5>
        <input type="text" />

        <button>Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
