import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route path="/coaches" exact component={CoachesList} />
      <Route path="/create-coach" component={CreateCoach} />
      <Route path="/edit/:id" component={EditCoach} />
      <div className="container">
        <h2>WJGolfAcademy App</h2>
      </div>
    </Router>
  );
}

export default App;
