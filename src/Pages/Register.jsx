import "../Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("register", {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });

    navigate("/login");
  };

  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>

        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          id="firstName"
          className="form-control"
          placeholder="First Name"
          required
        />

        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          id="lastName"
          className="form-control"
          placeholder="Last Name"
          required
        />

        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
        />

        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
