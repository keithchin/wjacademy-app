import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CoachesList from "./components/coaches/coach-list.component";
import EditCoach from "./components/coaches/edit-coach.component";
import CreateCoach from "./components/coaches/create-coach.component";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img
              src={src / assets / images / wj - logo - transparent.png}
              width="30"
              height="30"
              alt="CodingTheSmartWay.com"
            />
          </Link>
          <Link to="/" className="navbar-brand">
            WJGolfAcademy App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Coaches
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create-coach" className="nav-link">
                  Create Coach
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />

        <Route path="/" exact component={CoachesList} />
        <Route path="/create-coach" component={CreateCoach} />
        <Route path="/edit/:id" component={EditCoach} />
      </div>
    </Router>
  );
}

export default App;
