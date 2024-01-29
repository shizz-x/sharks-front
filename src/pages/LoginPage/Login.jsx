import React, { useState, useContext } from "react";
import UseAccessContext from "../../contexts/UseAccessContext";
import "./Login.css";
import videoLayer from "../../media/button.mp4";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = UseAccessContext();

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async () => {
    await login(email, password);
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
      <button onClick={loginHandler} className="submit-button">
        <span>Log in</span>
        <div className="video-layer">
          <video src={videoLayer} loop muted playsInline></video>
        </div>
      </button>
      <div className="register_field">
        <center>
          New here? <Link to={"/register"}>Sign up</Link>
        </center>
      </div>
    </section>
  );
}
