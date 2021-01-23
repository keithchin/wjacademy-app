import React from "react";
import { useForm } from "react-hook-form";

import "bootstrap/dist/css/bootstrap.min.css";

function CreateCoach() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label for="coachName">Coach Name</label>
        <input name="coachName" ref={register} />
        {errors.coachName && <span>Please enter a name</span>}
      </div>
      <div className="form-group">
        <label for="coachAge">Coach Age</label>
        <input name="coachAge" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </div>

      <input type="submit" />
    </form>
  );
}

export default CreateCoach;
