import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./styles.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addStudent = (data) => {
    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = data;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, data]);
    }
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const editStudent = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1 className="title">🎓 Student Management System</h1>

      <StudentForm 
        onSubmit={addStudent}
        editData={editIndex !== null ? students[editIndex] : null}
      />

      <StudentList 
        data={students}
        onDelete={deleteStudent}
        onEdit={editStudent}
      />
    </div>
  );
}

export default App;
