import { useState } from "react";
import CrumBar from "../components/CrumBar";
import NavSideBar from "../components/NavSideBar";
import StudentCard from "../components/StudentCards";
import { Appstate } from "../context/AppProvider";

export default function StudentList() {
  const { studentData } = Appstate();
  const [currentPage, setPage] = useState(1);

  return (
    <NavSideBar>
      <div className="relative">
        <div>
          <CrumBar />
        </div>
        <div className="flex flex-row flex-wrap place-content-evenly gap-5 m-5 pb-20">
          {studentData
            .slice(currentPage * 6 - 6, currentPage * 6)
            .map((stud, ind) => (
              <StudentCard student={stud} key={ind} />
            ))}
        </div>
        <div className="join absolute inset-x-0 bottom-0 justify-center">
          <button
            onClick={() => (currentPage > 1 ? setPage(currentPage - 1) : "")}
            className={`join-item btn btn-md`}
          >
            Prev
          </button>
          {[...Array(Math.ceil(studentData.length / 6))].map((_, idx) => (
            <button
              onClick={() => setPage(idx + 1)}
              className={
                currentPage === idx + 1
                  ? "join-item btn btn-md btn-active"
                  : "join-item btn btn-md"
              }
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() =>
              currentPage < Math.ceil(studentData.length / 6)
                ? setPage(currentPage + 1)
                : ""
            }
            className={`join-item btn btn-md`}
          >
            Next
          </button>
        </div>
      </div>
    </NavSideBar>
  );
}