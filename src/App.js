import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import StudentsList from "./pages/StudentsList";
import TeachersList from "./pages/TeachersList";
import InterviewNotes from "./pages/InterviewNotes";
import Profile from "./pages/Profile";
import Nopage from "./pages/Nopage";
import AddStudents from "./components/AddStudents";
import EditStudents from "./components/EditStudents";
import AddTeachers from "./components/AddTeachers";
import EditTeachers from "./components/EditTeachers";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/addStudents" element={<AddStudents />} />
        <Route path="/editStudents/:id" element={<EditStudents />} />
        <Route path="/addTeachers" element={<AddTeachers />} />
        <Route path="/editTeachers/:id" element={<EditTeachers />} />
        <Route path="/students/all" element={<StudentsList />} />
        <Route path="/teachers/all" element={<TeachersList />} />
        <Route path="/interview/notes" element={<InterviewNotes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;