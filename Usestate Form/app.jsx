import React, { useState } from "react";
import UserForm from "./UserForm";
import DisplayData from "./DisplayData";

function App() {
  const [student, setStudent] = useState({});

  const handleData = (data) => {
    setStudent(data);
  };

  return (
    <div>
      <h1>Student Registration</h1>
      <UserForm onSubmit={handleData} />
      <DisplayData info={student} />
    </div>
  );
}

export default App;
