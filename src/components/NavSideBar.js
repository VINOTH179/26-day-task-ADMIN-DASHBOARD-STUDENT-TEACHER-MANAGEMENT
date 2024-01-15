import { useNavigate } from "react-router-dom";
import logo from "../assets/apple.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Reducers/LoginReducer";

export default function NavSideBar({ children }) {
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.loginInfo.data);
  const dispatch = useDispatch();
  // console.log(username)

  return (
    <div className="drawer lg:drawer-open z-50 ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-200">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <input
              type="text"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <h1 className="text-2xl">{username}</h1>
              </li>
              <div className="dropdown dropdown-end z-20">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li onClick={() => navigate("/profile")}>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li
                    onClick={() => dispatch(logoutUser(), navigate("/login"))}
                  >
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
        <div className="grid h-screen m-2 p-5 card bg-base-200 rounded-2xl overflow-y-scroll">
          {children}
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-white bg-blue-500">
          {/* Sidebar content here */}
          <li className="place-content-center" onClick={() => navigate("/")}>
            <img className="w-20 h-20 hover:bg-transparent" src={logo} />
          </li>
          <hr />
          <li onClick={() => navigate("/")}>
            <a className="hover:bg-base-300 py-4">Dashboard</a>
          </li>
          <hr />
          <header className="text-xs pt-3">STUDENTS</header>
          <li onClick={() => navigate("/students/all")}>
            <a className="hover:bg-base-300 py-4">Students List</a>
          </li>
          <hr />
          <header className="text-xs pt-3">TEACHERS</header>
          <li onClick={() => navigate("/teachers/all")}>
            <a className="hover:bg-base-300 py-4">Teachers List</a>
          </li>
          <hr />
          <li onClick={() => navigate("/interview/notes")}>
            <a className="hover:bg-base-300 py-4">Interview Notes</a>
          </li>
        </ul>
      </div>
    </div>
  );
}