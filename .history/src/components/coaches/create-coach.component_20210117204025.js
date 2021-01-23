import React from "react";
import { useForm } from "react-hook-form";

function CreateCoach() { 
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);


  const setCoachName = () => {
      coachNameState = 
  };

  const handleSubmit = () => {};

  return (
    <div>
      <p>Create Coach Component!!</p>
    </div>
  );
}

export default CreateCoach;
