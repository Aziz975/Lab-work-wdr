import React, { useState } from "react";

function UserForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [std, setStd] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age, email, std, address });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br />

      <label>Age:</label>
      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} /><br />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />

      <label>Standard:</label>
      <input type="text" value={std} onChange={(e)=>setStd(e.target.value)} /><br />

      <label>Address:</label>
      <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
