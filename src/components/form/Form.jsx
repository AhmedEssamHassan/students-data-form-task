import React from "react";
import "./form.css";

export default function Formm({ addStudent, students, submit }) {
  return (
    <form
      className="flex-column d-flex justify-content-center align-items-center p-3"
      onSubmit={submit}
    >
      {students}
      <button
        className="btn btn-outline-primary mt-2 mb-4"
        onClick={addStudent}
      >
        add student
      </button>
      <button className="btn btn-success w-75" type="submit">
        submit
      </button>
    </form>
  );
}

/*  {isAddMore ? (
        <SingleForm studentData={studentData} setStudentData={setStudentData} />
      ) : (
        ""
      )} */
