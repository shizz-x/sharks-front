import React, { useState } from "react";
import UseAccessContext from "../../contexts/UseAccessContext";
import videoLayer from "../../media/button.mp4";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = UseAccessContext();

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const registerHandler = async () => {
    await register(email, password);
  };
  return (
    <section className="login-form">
      <div className="input_field">
        <input
          type="email"
          value={email}
          onChange={setEmailHandler}
          placeholder="Email"
        />
      </div>
      <div className="input_field">
        <input
          type="password"
          value={password}
          onChange={setPasswordHandler}
          placeholder="Password"
        />
      </div>
      <button onClick={registerHandler} className="submit-button">
        <span>Register</span>
        <div className="video-layer">
          <video src={videoLayer} loop muted playsInline></video>
        </div>
      </button>
      <div className="register_field">
        <center>
          Have an account? <Link to={"/login"}>Log in</Link>
        </center>
      </div>
    </section>
  );
}
