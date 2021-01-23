import React from "react";

function CreateCoach() {

constructor(props) {
    super(props);

    this.state = {
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    }
}
  return (
    <div>
      <p>Create Coach Component!!</p>
    </div>
  );
}

export default CreateCoach;
