import NavSideBar from "../components/NavSideBar";
import { useSelector } from "react-redux";

export default function Profile() {
  const { username, email } = useSelector((state) => state.signupInfo.data);

  return (
    <NavSideBar>
      <div className="flex flex-col w-full">
        <h2 className="uppercase font-bold text-2xl">profile</h2>

        <div className="grid h-20 mt-4 p-5 card">
          {username && (
            <>
            <p className="mt-4">Name : {username}</p>
          <p className="mt-4">Email : {email}</p>
            </>
          )}
          
        </div>
      </div>
    </NavSideBar>
  );
}