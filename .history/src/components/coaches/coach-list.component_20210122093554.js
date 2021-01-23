import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CoachesList() {
  const [coaches, setCoaches] = [""];

  useEffect(() => {
    axios.get("http:localhost:4000/coaches").then;
  });

  return (
    <div>
      <p>Coaches List Component!!</p>
    </div>
  );
}

export default CoachesList;
