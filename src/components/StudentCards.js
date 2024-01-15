import { useNavigate } from "react-router-dom";
import { Appstate } from "../context/AppProvider";
import { API } from "../API/api";

function StudentCard({ student }) {
  const { studentData, setData, crumState, setCrumState } = Appstate();

  const navigate = useNavigate();

  const removeStud = async (id) => {

    let res = window.confirm("Are you sure want to delete?");
    if (res) {
    
      const response = await fetch(`${API}/${id}`,{
        method:"DELETE"
      })
      const data = await response.json();

      const newStudData = studentData.filter((stud, ind) => stud.id !== id);
      setData(newStudData);
    }
  };
  const handleEdit = (id) => {
    const newCrum = {
      name: "EditStudents",
      path: `/editStudents/${id}`,
    };
    setCrumState([...crumState, newCrum]);
    navigate(`/editStudents/${id}`);
  };
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl p-0 rounded-3xl">
        <div className="card-body ">
          <h2 className="card-title justify-center uppercase">
            {student.Name}
          </h2>
          <p className="text-left">{student.Email}</p>
          <p className="text-left">{student.Qualification}</p>
          <p className="text-left">{student.Batch}</p>
          <p className="text-left">{student.mobile}</p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-blue-600 text-white rounded-full mt-3"
              onClick={() => handleEdit(student.id)}
            >
              edit
            </button>
            <button
              className="btn bg-red-600 text-white rounded-full mt-3"
              onClick={() => removeStud(student.id)}
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

export default StudentCard;