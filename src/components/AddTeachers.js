import { useState } from "react";
import NavSideBar from "./NavSideBar";
import { useNavigate } from "react-router-dom";
import { Appstate } from "../context/AppProvider";

export default function AddTeachers() {
  const { teacherData, setTeacherData } = Appstate();
  const [id, setId] = useState("");
  const [tname, setTname] = useState("");
  const [designation, setDesignation] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");

  const navigate = useNavigate();

  function addTeacher() {
    const newTeacherObj = {
      id,
      tname,
      designation,
      qualification,
      experience
    };
    setTeacherData([...teacherData, newTeacherObj]);

    navigate("/teachers/all");
  }

  return (
    <NavSideBar>
      <div className="form-control text-center items-center">
        <h1 className="m-5">Fill in the data to add a New Teacher</h1>
        <label className="input-group">
          <span className="w-48">ID</span>
          <input
            type="number"
            placeholder="Enter your id"
            className="input input-bordered w-auto m-5"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">NAME</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-auto m-5"
            value={tname}
            onChange={(e) => setTname(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">DESIGNATION</span>
          <input
            type="text"
            placeholder="Enter your designation"
            className="input input-bordered w-auto m-5"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">QUALIFICATION</span>
          <input
            type="text"
            placeholder="Enter your education"
            className="input input-bordered w-auto m-5"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">EXPERIENCE</span>
          <input
            type="text"
            placeholder="Enter your education"
            className="input input-bordered w-auto m-5"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>
        <button
          className="btn btn-primary w-48 mt-20 rounded-full"
          onClick={() => addTeacher()}
        >
          Add Teacher
        </button>
      </div>
    </NavSideBar>
  );
}