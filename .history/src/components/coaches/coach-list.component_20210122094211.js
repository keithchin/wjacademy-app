import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Coach = props => (
  <tr>
  <td>{props.coach.coach_name}</td>
  <td>{props.coach.coach_age}</td>
  <td>
      <Link to={"/edit/"+props.coach._id}>Edit</Link>
  </td>
</tr>
)

function CoachesList() {
  const [coaches, setCoaches] = [""];

  todoList() {
    return this.state.todos.map(function(currentTodo, i){
        return <Todo todo={currentTodo} key={i} />;
    })
  }


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
