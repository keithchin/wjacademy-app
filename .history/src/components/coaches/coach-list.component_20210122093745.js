import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CoachesList() {
  const [coaches, setCoaches] = [""];

  useEffect(() => {
    axios
      .get("http:localhost:4000/coaches")
      .then((response) => {
        setCoaches({ coaches: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div>
      <h3>Coaches</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{coaches}</tbody>
      </table>{" "}
    </div>
  );
}

export default CoachesList;
