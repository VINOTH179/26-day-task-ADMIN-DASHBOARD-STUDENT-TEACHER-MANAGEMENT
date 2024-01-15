import { createSlice } from "@reduxjs/toolkit";
import { AuthAPI } from "../API/api";



const SignupSlice = createSlice({
  name: "signupInfo",
  initialState: {
    data: {
      username: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    signupUser: (state, action) => {
      
      state.user = action.payload;
      postSignupdata(action.payload)
    },
  },
});

export const { signupUser } = SignupSlice.actions;
export default SignupSlice.reducer;

async function postSignupdata(payload){
    const res = await fetch(AuthAPI, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
}