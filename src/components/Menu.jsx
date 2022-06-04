import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link" aria-current="page">
                <span data-feather="home"></span>
                All Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/books"} className="nav-link " aria-current="page">
                <span data-feather="home"></span>
                My Books
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
