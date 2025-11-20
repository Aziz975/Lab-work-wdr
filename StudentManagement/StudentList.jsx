import React from "react";

function StudentList({ data, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Standard</th>
          <th>Age</th>
          <th>Roll No</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.length > 0 ? (
          data.map((s, index) => (
            <tr key={index}>
              <td>{s.stdid}</td>
              <td>{s.stdname}</td>
              <td>{s.standard}</td>
              <td>{s.age}</td>
              <td>{s.rollno}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(index)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr><td colSpan="6">No Student Records Found</td></tr>
        )}
      </tbody>
    </table>
  );
}

export default StudentList;
