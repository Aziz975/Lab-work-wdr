import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function StudentForm({ onSubmit, editData }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (editData) reset(editData);
  }, [editData, reset]);

  const submitData = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitData)} className="form-box">
      <input placeholder="Student ID" {...register("stdid", { required: true })} />
      <input placeholder="Student Name" {...register("stdname", { required: true })} />
      <input placeholder="Standard" {...register("standard", { required: true })} />
      <input type="number" placeholder="Age" {...register("age", { required: true })} />
      <input type="number" placeholder="Roll No" {...register("rollno", { required: true })} />

      <button type="submit" className="btn">
        {editData ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;
