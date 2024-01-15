import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : "loginInfo",
    initialState : {
        data : {
            username : "",
            password : "",
        }
    },
    reducers : {
        loginUser : (state,action) => {
            state.data = action.payload
        },
        logoutUser : (state,action) => {
            state.data = {username:"",password:""}
        }

    }
})
export const {loginUser,logoutUser} = loginSlice.actions
export default loginSlice.reducer