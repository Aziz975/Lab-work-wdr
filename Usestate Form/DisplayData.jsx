import React from "react";

function DisplayData({ info }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p><b>Name:</b> {info.name}</p>
      <p><b>Age:</b> {info.age}</p>
      <p><b>Email:</b> {info.email}</p>
      <p><b>Standard:</b> {info.std}</p>
      <p><b>Address:</b> {info.address}</p>
    </div>
  );
}

export default DisplayData;
