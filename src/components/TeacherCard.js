import { useNavigate } from "react-router-dom";
import { Appstate } from "../context/AppProvider";


function TeacherCard({ teacher }) {
  const { teacherData,setTeacherData,tcrumState, setTcrumState } = Appstate();

  const navigate = useNavigate();

  const removeTeach = (id) => {
    let response = window.confirm("Are you sure want to delete?");
    if (response) {
      const newTeachData = teacherData.filter((teach, ind) => teach.id !== id);
      setTeacherData(newTeachData);
    }
  };
  const handleEdit = (id) => {
    const newCrum = {
      name: "EditTeachers",
      path: `/editTeachers/${id}`,
    };
    setTcrumState([...tcrumState, newCrum]);
    navigate(`/editTeachers/${id}`);
  };
  return (
    <div>
      <div className="card w-64 bg-base-100 shadow-xl p-0 rounded-3xl">
        <div className="card-body ">
          <h2 className="card-title justify-center uppercase">
            {teacher.tname}
          </h2>
          <p className="text-left">{teacher.designation}</p>
          <p className="text-left">{teacher.qualification}</p>
          <p className="text-left">{teacher.experience}</p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-blue-600 text-white rounded-full mt-3"
              onClick={() => handleEdit(teacher.id)}
            >
              edit
            </button>
            <button
              className="btn bg-red-600 text-white rounded-full mt-3"
              onClick={() => removeTeach(teacher.id)}
            >
              Delete
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;