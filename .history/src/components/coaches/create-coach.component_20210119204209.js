import Reactm from "react";
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
  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/coaches/add", data)
      .then((res) => console.log(res.data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label for="name">Name</label>
        <br />
        <input name="name" ref={register} />
        {errors.name && <span>Please enter a valid name</span>}
      </div>
      <div className="form-group">
        <label for="age">Age</label>
        <br />
        <input name="age" ref={register({ required: true })} />
        {errors.age && <span>Please enter a valid age</span>}
      </div>
      {formState.isSubmitted && (
        <div class="alert alert-success">
          <strong>Success!</strong> Indicates a successful or positive action.
        </div>
      )}
      <input type="submit" />
    </form>
  );
}

export default CreateCoach;
