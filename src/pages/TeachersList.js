import NavSideBar from "../components/NavSideBar";
import TcrumBar from "../components/TcrumBar";
import TeacherCard from "../components/TeacherCard";
import { Appstate } from "../context/AppProvider";

export default function TeachersList() {
  const { teacherData } = Appstate();

  return (
    <NavSideBar>
      <div>
        <div>
          <TcrumBar />
        </div>
        <div className="flex flex-row flex-wrap place-content-evenly gap-5 m-5">
          {teacherData.map((teach, ind) => (
            <TeacherCard teacher={teach} key={teach.id} />
          ))}
        </div>
      </div>
    </NavSideBar>
  );
}