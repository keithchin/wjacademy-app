import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

function CreateCoach() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
  });
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label for="coachName">Name</label>
        <br />
        <input name="name" ref={register} />
        {errors.coachName && <span>Please enter a name</span>}
      </div>
      <div className="form-group">
        <label for="coachAge">Age</label>
        <br />
        <input name="age" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <input type="submit" />
    </form>
  );
}

export default CreateCoach;
