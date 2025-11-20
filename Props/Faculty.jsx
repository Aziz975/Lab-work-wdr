import React from "react";

function Faculty(props) {
  return (
    <div style={{ border: "2px solid black", padding: "10px", width: "250px" }}>
      <h3>Faculty Profile</h3>
      <p><strong>Name:</strong> {props.facName}</p>
      <p><strong>Subject:</strong> {props.subject}</p>
      <p><strong>Experience:</strong> {props.experience}</p>
    </div>
  );
}

export default Faculty;
