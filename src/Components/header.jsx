import React, { Component } from "react";
import NavLink from "./navLink";
import "../Css/styles.css";
import "../Css/yellow.css";


class Header extends Component {
  render() { 
    return (
        <header className="d" id="header">
            <div className="nav-container">
                <NavLink links={links}></NavLink>
            </div>
        </header>
    );
  }
}

const links = ["Home", "About", "Work", "Blog", "Contact"];
export default Header;
