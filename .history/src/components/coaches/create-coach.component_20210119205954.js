import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

function CreateCoach() {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter a valid name."),
    age: yup.number().required("Please enter a valid age."),
  });
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/coaches/add", data)
      .then((res) => console.log(res.data));
    setIsSuccessfullySubmitted(1);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <br />
        <input name="name" ref={register} />
        {errors.name && <span>Please enter a valid name</span>}
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <br />
        <input name="age" ref={register({ required: true })} />
        {errors.age && <span>Please enter a valid age</span>}
      </div>
      {isSuccessfullySubmitted && (
        <div class="alert alert-success">
          <strong>Coach successfully created!</strong>.
        </div>
      )}
      <input type="submit" />
    </form>
  );
}

export default CreateCoach;
