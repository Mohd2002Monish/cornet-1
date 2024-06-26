import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>CoreNets</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/add-product"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Product
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <IoIosCloseCircle />
              </span>
            ) : (
              <span className="icon">
                <GiHamburgerMenu />{" "}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
