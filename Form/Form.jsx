import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [standard, setStandard] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px", width: "300px", border: "1px solid gray" }}>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br/>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/><br/>

        <label>Age:</label><br/>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        /><br/><br/>

        <label>Standard:</label><br/>
        <input
          type="text"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          required
        /><br/><br/>

        <button type="submit">Submit</button>
      </form>

      {/* Display data after submit */}
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Entered Details:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Standard:</strong> {standard}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
