import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const coachStateValue = {
  id: "",
  name: "",
  age: "",
};

const Coach = (props) => (
  <tbody>
    {props.coaches.length > 0 ? (
      props.coaches.map((coach) => (
        <tr>
          <td>{props.coach.name}</td>
          <td>{props.coach.age}</td>
          <td>
            <Link to={"/edit/" + props.coach._id}>Edit</Link>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No coaches registered</td>
      </tr>
    )}
  </tbody>
);

function CoachesList() {
  const [coaches, setCoaches] = useState([{ id: "" }]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/coaches")
      .then((response) => {
        setCoaches({ coaches: response.data });
        console.log(response.data);
        console.log(coaches);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
        <Coach coaches={coaches} />
      </table>{" "}
    </div>
  );
}

export default CoachesList;
