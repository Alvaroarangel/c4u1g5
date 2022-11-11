import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button">
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
