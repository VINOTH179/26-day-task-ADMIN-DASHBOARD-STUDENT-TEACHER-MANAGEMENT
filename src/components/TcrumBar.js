import { Link } from "react-router-dom";
import { Appstate } from "../context/AppProvider";


export default function TcrumBar() {

    const { tcrumState, setTcrumState } = Appstate();

    function removeRemaining(id) {
      let removalValue = +id + 1;
      let newTcrumState = tcrumState.slice(0, removalValue);
      setTcrumState(newTcrumState);
    }
  return (
    <div className="text-sm breadcrumbs mx-5">
    <ul>
      {tcrumState &&
        tcrumState?.map((data, idx) => (
          <li key={idx}>
            <Link to={data.path} onClick={() => removeRemaining(idx)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              {data.name}
            </Link>
          </li>
        ))}
    </ul>
  </div>
  )
}