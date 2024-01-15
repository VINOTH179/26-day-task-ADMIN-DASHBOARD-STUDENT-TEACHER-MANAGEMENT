import { useEffect, useState } from "react";
import NavSideBar from "./NavSideBar";
import { useNavigate, useParams } from "react-router-dom";
import { Appstate } from "../context/AppProvider";
import TcrumBar from "./TcrumBar";

export default function EditTeachers() {
  const { teacherData, setTeacherData } = Appstate();
  const navigate = useNavigate();

  const { id } = useParams();

  const [idx, setIdx] = useState("");
  const [tname, setTname] = useState("");
  const [designation, setDesignation] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const selectedTeacher = teacherData.find((teach, index) => teach.id == id);

    setIdx(selectedTeacher.id);
    setTname(selectedTeacher.tname);
    setDesignation(selectedTeacher.designation);
    setQualification(selectedTeacher.qualification);
    setExperience(selectedTeacher.experience);
  }, [id, teacherData]);

  function editTeacher() {
    const editedTeachObj = {
      id: idx,
      tname,
      designation,
      qualification,
      experience
    };
    // console.log(editedStudObj)

    const editIndex = teacherData.findIndex((teach, index) => teach.id == id);
    teacherData[editIndex] = editedTeachObj;
    setTeacherData([...teacherData]);

    navigate("/teachers/all");
  }

  return (
    <NavSideBar>
      <TcrumBar />
      <div className="form-control text-center items-center">
        <h1 className="m-5">Fill the Data to add a New Teachers</h1>
        <label className="input-group">
          <span className="w-48">ID</span>
          <input
            type="number"
            placeholder="Enter your id"
            className="input input-bordered w-auto m-5"
            value={id}
            onChange={(e) => setIdx(e.target.value)}
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
          onClick={() => editTeacher()}
        >
          Edit Teacher
        </button>
      </div>
    </NavSideBar>
  );
}