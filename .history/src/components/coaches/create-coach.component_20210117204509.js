import React from "react";
import { useForm } from "react-hook-form";

import "bootstrap/dist/css/bootstrap.min.css";

function CreateCoach() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input name="coachName" ref={register} />
        {errors.coachName && <span>Please enter a name</span>}
      </div>
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default CreateCoach;
