import React from "react";
import { useForm } from "react-hook-form";

function CreateCoach() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Col>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input name="coachName" ref={register} />
          {errors.coachName && <span>Please enter a name</span>}
          {/* include validation with required or other standard HTML validation rules */}
          <input name="exampleRequired" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Col>
    </div>
  );
}

export default CreateCoach;
