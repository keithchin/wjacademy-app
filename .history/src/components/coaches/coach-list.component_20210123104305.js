import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const coachStateValue = {
  id: "0",
  name: "kc",
  age: 15,
};

const Coach = (props) => (
  <tbody>
    {props.coaches.length > 0 ? (
      props.coaches.map((coach) => (
        <tr>
          <td>{props.coaches.name}</td>
          <td>{props.coaches.age}</td>
          <td>
            <Link to={"/edit/" + props.coaches._id}>Edit</Link>
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
  const [coachesState, setCoachesState] = useState(coachStateValue);

  useEffect(() => {
    axios
      .get("http://localhost:4000/coaches")
      .then((response) => {
        setCoachesState(response.data);
        console.log(response.data);
        console.log(coachesState);
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
        <Coach coaches={coachesState} />
      </table>{" "}
    </div>
  );
}

export default CoachesList;
