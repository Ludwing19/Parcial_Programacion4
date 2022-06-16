import { NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { MenuItems } from "./components/MenuItems";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";

export const Menu = () => {
  const [context, setContext] = useContext(LoginContext);

  const activeClass = "active";

  if (context.token.length != 0) {
    return (
      <div className="row w-100">
        <nav className="col-12 navbar navbar-expand-lg navbar-dark shadow-5-strong">
          <div className=" container-fluid">
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `navbar-brand ${activeClass}` : "navbar-brand"
                }
                to="/"
              >
                <img src={logo} className="App-logo navbar-brand" alt="logo" />
              </NavLink>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <MenuItems></MenuItems>
              </ul>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `nav-link ${activeClass}` : "nav-link"
                    }
                    to="/singout"
                  >
                    Salir
                  </NavLink>
                </li>
              </ul>
            </>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="row w-100">
        <nav className="col-12 navbar navbar-expand-lg navbar-dark shadow-5-strong">
          <div className=" container-fluid">
            <>
              <img src={logo} className="App-logo navbar-brand" alt="logo" />
            </>
          </div>
        </nav>
      </div>
    );
  }
};
