import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./LoginContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App-header-login">
          <AuthProvider>
            <Menu></Menu>
            <div className="container">
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </div>
          </AuthProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
