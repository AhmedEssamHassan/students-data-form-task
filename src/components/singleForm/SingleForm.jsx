import React from "react";
import "antd/dist/antd.css";
import { DatePicker, Input, InputNumber, Radio } from "antd";

export default function SingleForm({ setStudentData, studentData }) {
  return (
    <main
      className="border py-3"
      style={{ width: "750px", backgroundColor: "#bcbcbc" }}
    >
      <section className="d-flex justify-content-around  w-100">
        {" "}
        <Input
          placeholder="Student Name"
          style={{ width: "290px", height: "50px" }}
          onChange={(e) => {
            setStudentData((studentData) => {
              return { ...studentData, studentName: e.target.value };
            });
          }}
        />
        <div className="flex-column d-flex justify-content-center align-items-start">
          <label htmlFor="stGrades">Grades</label>
          <InputNumber
            id="stGrades"
            min={1}
            max={100}
            onChange={(val) => {
              setStudentData((studentData) => {
                return { ...studentData, studentGrades: val };
              });
            }}
          />
        </div>
      </section>
      <section className="d-flex justify-content-around  w-100 my-3">
        <DatePicker
          onChange={(_, dateString) => {
            setStudentData((studentData) => {
              return { ...studentData, dateOfBairth: dateString };
            });
          }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor="stGroup" className="mx-3">
            student group
          </label>
          <Radio.Group
            id="stGroup"
            onChange={(e) => {
              setStudentData((studentData) => {
                return { ...studentData, studentGroup: e.target.value };
              });
            }}
          >
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="C">C</Radio>
            <Radio value="d">D</Radio>
          </Radio.Group>
        </div>
      </section>
    </main>
  );
}
