import { useNavigate } from "react-router-dom";

export default function Nopage() {
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center my-48">
      <h1>Sorry ! You entered a Wrong Universe</h1>
      <button
        className="btn btn-error text-black my-10 rounded-full"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
}