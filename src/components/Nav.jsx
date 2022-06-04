import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/user";

const Nav = (props) => {
  const [user, setUser] = useState(new User());

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("user");

        setUser(new User(data.id, data.first_name, data.last_name, data.email));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const logout = async () => {
    await axios.post("logout", {});
  };

  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
          Pepega Book
        </a>

        <ul className="my-2 my-md-0 mr-md-3">
          <Link to={"/profile"} className="p-2 text-white">
            {user.name}
          </Link>
          <Link to={"/login"} onClick={logout} className="p-2 text-white">
            Sign out
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
