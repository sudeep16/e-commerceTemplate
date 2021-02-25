import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";

function Navbars() {
  function clickEvent(e) {
    e.preventDefault();
    alert("You  have to be registered to place your order.");
    window.location.href = "/register";
  }

  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-container-main">
          <Navbar.Brand href="/" className="navbar-logo-main">
            <img
              style={{ marginLeft: 0 }}
              alt=""
              src={logo}
              width="80"
              height="60"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>

          <ul className="nav-menu-main">
            <li className="nav-item-main">
              <Link to="/" className="nav-links-main">
                <i class="fas fa-shopping-cart">
                  <span class="tooltiptext">Cart</span>
                </i>
              </Link>
            </li>
            <li className="nav-item-main">
              <Link to="/about" className="nav-links-main">
                About Us
              </Link>
            </li>

            <li className="nav-item-main">
              <div className="nav-links-main">
                <i class="fas fa-user-alt"></i> <span>My Account</span>
                {/* <label for="profile2">
                  <i class="fas fa-hamburger"></i>
                </label>
                <ul>
                  <li>
                    <a href="#">
                      <i class="mdi mdi-email-outline"></i>Messages
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="mdi mdi-account"></i>Account
                    </a>
                  </li>
                </ul> */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
