import { useState } from "react";
import NavSideBar from "./NavSideBar";
import { useNavigate } from "react-router-dom";
import { Appstate } from "../context/AppProvider";
import { API } from "../API/api";
import { useFormik } from "formik";
import { StudentSchema } from "../Schema/Schema";

export default function AddStudents() {
  // form validation topic

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        Name: "",
        Email: "",
        Qualification: "",
        Batch: "",
        mobile: "",
      },
      validationSchema: StudentSchema,
      onSubmit: (newstudent) => {
        // console.log(newstudent)
        addStudent(newstudent);
      },
    });

  const { studentData, setData } = Appstate();

  // const [Name, setName] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Qualification, setQualification] = useState("");
  // const [Batch, setBatch] = useState("");
  // const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  async function addStudent(newstudent) {
    // const newStudentObj = {
    //   Name,
    //   Email,
    //   Qualification,
    //   Batch,
    //   mobile
    // };

    const response = await fetch(API, {
      method: "POST",
      body: JSON.stringify(newstudent),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();

    setData([...studentData, data]);

    navigate("/students/all");
  }

  return (
    <NavSideBar>
      <div className="form-control text-center items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="m-5">Fill in the data to add a New Student</h1>
          <label className="input-group">
            <span className="w-48">NAME</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-auto m-5"
              value={values.Name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Name"
            />
          </label>
          {touched.Name && errors.Name ? (
            <div className="text-red-500">{errors.Name}</div>
          ) : (
            ""
          )}
          <label className="input-group">
            <span className="w-48">MAIL</span>
            <input
              type="text"
              placeholder="Enter your mail"
              className="input input-bordered w-auto m-5"
              value={values.Email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Email"
            />
          </label>
          {touched.Email && errors.Email ? (
            <div className="text-red-500">{errors.Email}</div>
          ) : (
            ""
          )}
          <label className="input-group">
            <span className="w-48">QUALIFICATION</span>
            <input
              type="text"
              placeholder="Enter your qualification"
              className="input input-bordered w-auto m-5"
              value={values.Qualification}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Qualification"
            />
          </label>
          {touched.Qualification && errors.Qualification ? (
            <div className="text-red-500">{errors.Qualification}</div>
          ) : (
            ""
          )}
          <label className="input-group">
            <span className="w-48">BATCH</span>
            <input
              type="text"
              placeholder="Enter your batch"
              className="input input-bordered w-auto m-5"
              value={values.Batch}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Batch"
            />
          </label>
          {touched.Batch && errors.Batch ? (
            <div className="text-red-500">{errors.Batch}</div>
          ) : (
            ""
          )}
          <label className="input-group">
            <span className="w-48">MOBILE NUMBER</span>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="input input-bordered w-auto m-5"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              name="mobile"
            />
          </label>
          {touched.mobile && errors.mobile ? (
            <div className="text-red-500">{errors.mobile}</div>
          ) : (
            ""
          )}
          <button
            className="btn btn-primary w-48 mt-20 rounded-full"
            type="submit"
          >
            Add Student
          </button>
        </form>
      </div>
    </NavSideBar>
  );
}