import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Coach = (coaches) => (
  <tr>
    <td>{coaches.coach_name}</td>
    <td>{coaches.coach_age}</td>
    <td>
      <Link to={"/edit/" + coaches._id}>Edit</Link>
    </td>
  </tr>
);

function CoachesList() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/coaches")
      .then((response) => {
        setCoaches({ coaches: response.data });
        console.log(response.data);
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
        <tbody>
          <tr>
            <td>
              <Coach coach={coaches}></Coach>
            </td>
          </tr>
        </tbody>
      </table>{" "}
    </div>
  );
}

export default CoachesList;
