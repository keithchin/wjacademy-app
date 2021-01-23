import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            class="navbar-brand"
            href="https://codingthesmartway.com"
            target="_blank"
          >
            <img
              src={logo}
              width="30"
              height="30"
              alt="CodingTheSmartWay.com"
            />
          </a>
          <Link to="/" className="navbar-brand">
            MERN-Stack Todo App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <h2>WJGolfAcademy App</h2>
        <Route path="/" exact component={CoachesList} />
        <Route path="/create-coach" component={CreateCoach} />
        <Route path="/edit/:id" component={EditCoach} />
      </div>
    </Router>
  );
}

export default App;
