import React, { useState } from "react";
import UseAccessContext from "../../contexts/AccessContext/UseAccessContext";
import videoLayer from "../../media/button.mp4";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitPassword, setSubmitPassword] = useState("");

  const { registerHandler } = UseAccessContext();

  const verifyPassword = (p, p2) => {
    if (p !== p2) {
      toast("passwords doesnt match");
      return false;
    }
    if (p.length < 5) {
      toast("min length is 5");
      return false;
    }
    return true;
  };

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const setSubmitPasswordHandler = (e) => {
    setSubmitPassword(e.target.value);
  };

  const registerHandle = async () => {
    if (verifyPassword(password, submitPassword)) {
      await registerHandler(email, password);
    }
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
      <div className="input_field">
        <input
          type="password"
          value={submitPassword}
          onChange={setSubmitPasswordHandler}
          placeholder="Submit password"
        />
      </div>
      <button onClick={registerHandle} className="submit-button">
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
