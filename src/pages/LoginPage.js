import { useState } from "react";
import { loginUser } from "../Reducers/LoginReducer";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { signupUser } from "../Reducers/SignupReducer";

export default function LoginPage() {

    const navigate =useNavigate()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState()
    const [tab,setTab] = useState(1)

    const dispatch = useDispatch()

    const userLogin = ()=>{
        const userData = {
            username,
            password
        }
        // console.log(userData)
    dispatch(loginUser(userData))


    navigate("/")
    }

    const userSignup = ()=>{
      const signupData = {
        username,
        email,
        password
      }
      console.log(signupData)
      dispatch(signupUser(signupData))

      navigate("/profile")
    }
  return (
    <div className="flex flex-col w-full">
      <div className="grid h-screen bg-blue-500 place-items-center">
        <div className="card w-96 bg-base-100 rounded-xl shadow-xl">
          <div className="card-body">
            <div className="flex flex-row justify-between px-10">
            <a
            onClick={()=>setTab(1)}
            className="text-center uppercase font-bold text-2xl text-blue-700">
              Login
            </a>
            <a
            onClick={()=>setTab(2)}
            className="text-center uppercase font-bold text-2xl text-blue-700">
              Signup
            </a>
            </div>

            <div className="form-control" style={{display : tab===1 ? "block":"none"}} >
              <p>UserName</p>
              <label className="input-group mt-4">
                <input
                  type="text"
                  placeholder="enter your username"
                  className="input input-bordered w-full"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </label>
              <p className="mt-4">Password</p>
              <label className="input-group mt-4">
                <input
                  type="password"
                  placeholder="enter your password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </label>
            
            <div className="card-actions justify-center">
              <button className="btn btn-primary rounded-full mt-4"
               onClick={userLogin} 
              >
                login
                </button>
            </div>
            </div>

            <div className="form-control" style={{display : tab===2 ? "block":"none"}}>
              <p>UserName</p>
              <label className="input-group mt-4">
                <input
                  type="text"
                  placeholder="enter your username"
                  className="input input-bordered w-full"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </label>
              <p className="mt-4">Email</p>
              <label className="input-group mt-4">
                <input
                  type="email"
                  placeholder="enter your mail"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </label>
              <p className="mt-4">Password</p>
              <label className="input-group mt-4">
                <input
                  type="password"
                  placeholder="enter your password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </label>
            
            <div className="card-actions justify-center">
              <button className="btn btn-primary rounded-full mt-4"
               onClick={userSignup} 
              >
                Signup
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}