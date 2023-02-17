import React from "react";
import { NavLink } from "react-router-dom";
import { FaAmilia } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NavLink class="nav-item nav-link active" to='/'>
            Home <span class="sr-only"></span>
          </NavLink>
          
          <NavLink class="nav-item nav-link" to='/contect'>
            Contect
          </NavLink>
          <NavLink class="nav-item nav-link disabled" to='*'>
            
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
