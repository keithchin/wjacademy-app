import React, { useState } from "react";

function CreateCoach() {
  const [coachName, coachNameState] = useState("");
  const [coachAge, coachAgeState] = useState(0);

  const setCoachName = () => {};

  return (
    <div>
      <p>Create Coach Component!!</p>
    </div>
  );
}

export default CreateCoach;
