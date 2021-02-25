import React, { useState } from "react";
import "./Navbar.css";

function CategoryNavbar() {
  return (
    <>
      <CNavbar>
        <CNavbarItem text="Electronics">
          <DropDownMenu>
            Radio
            Television

            Mobile
          </DropDownMenu>

        </CNavbarItem>
        <CNavbarItem text="Accessories" >
          <DropDownMenu />
        </CNavbarItem>
        <CNavbarItem text="Home & Living" />
        <CNavbarItem text="Men Fashion" />
        <CNavbarItem text="Women Fashion" />
        <CNavbarItem text="Kids" />
        <CNavbarItem text="Books" />
      </CNavbar>
    </>
  );
}

function CNavbar(props) {
  return (
    <>
      <nav className="category__navbar">
        <ul className="navbar__catNav">{props.children}</ul>
      </nav>
    </>
  );
}

function CNavbarItem(props) {
  const [open, setOpen] = useState();

  return (
    <>
      <li className="cnav__item">
        <a href="#" className="cat__link" onClick={() => setOpen(!open)}>
          {props.text}
        </a>
        {open && props.children}
      </li>
    </>
  );
}

function DropDownMenu(props) {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        {props.children}
        <span className="icon__right"> {props.rightIcon} </span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem>Hello World</DropdownItem>
    </div>
  )
}




export default CategoryNavbar;
