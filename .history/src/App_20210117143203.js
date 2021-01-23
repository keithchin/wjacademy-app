import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
      <div className="container">
        <h2>WJGolfAcademy App</h2>
      </div>
    </Router>
  );
}

export default App;
