import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("login", {
        email,
        password,
      });
      setErrMsg("");
      if (data) navigate("/");
    } catch (e) {
      setErrMsg("User tidak ditemukan");
    }
  };

  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
        {errMsg && (
          <h1 className="h3 mb-3 font-weight-normal text-danger">{errMsg}</h1>
        )}

        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
