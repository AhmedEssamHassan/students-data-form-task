import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Form from "./components/form/Form";
import SingleForm from "./components/singleForm/SingleForm";
function App() {
  const [studentData, setStudentData] = useState({});
  const [students, setStudents] = useState([]);
  const [allData, setAllData] = useState([]);
  const [formData, setFormData] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setFormData([...allData.slice(1)]);
  };

  const addStudent = (e) => {
    e.preventDefault();
    setStudents([
      ...students,
      <SingleForm
        setStudentData={setStudentData}
        studentData={studentData}
        key={uuidv4()}
      />,
    ]);
    setAllData([...allData, studentData]);
  };

  return (
    <div className="App">
      <h3>enter students data</h3>
      <Form
        addStudent={addStudent}
        students={students}
        formData={FormData}
        submit={submit}
      />
    </div>
  );
}

export default App;
