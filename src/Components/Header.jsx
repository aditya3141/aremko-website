import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header style={{ background: "#000" }}>
        {/* container start */}
        <div className="container">
          {/* navigation bar */}
          <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
              <img
                src="images/logo.svg"
                style={{ width: "200px" }}
                alt="Logo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                {/* <i class="icofont-navigation-menu ico_menu"></i> */}
                <span className="toggle-wrap">
                  <span className="toggle-bar" />
                </span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {/* secondery menu start */}
                <li className="nav-item has_dropdown">
                  <NavLink className="nav-link" to="/">
                    Money Transfer
                  </NavLink>
                </li>
                {/* secondery menu end */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/help">
                    Help
                  </NavLink>
                </li>
                {/* secondery menu start */}

                {/* secondery menu end */}

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <div className="btn_block">
                    <NavLink className="nav-link dark_btn" to="/">
                      Login
                    </NavLink>
                    <div className="btn_bottom" />
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/* navigation end */}
        </div>
        {/* container end */}
      </header>
    </div>
  );
};

export default Header;
