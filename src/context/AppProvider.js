import { createContext, useContext, useEffect, useState } from "react"
import { API } from "../API/api"


const AppCtx = createContext()
function AppProvider({children}) {

  const tdataBase = [
    {
      id: 1,
      tname: "Latha maheswari",
      designation: "Principal",
      qualification: "M.Sc,M.Ed",
      experience: "32"
    },
    {
      id: 2,
      tname: "Muniyappan",
      designation: "SR.Principal",
      qualification: "M.Sc,M.Ed",
      experience: "42"
    },
    {
      id: 3,
      tname: "narasimha reddy",
      designation: "PGT",
      qualification: "BSC",
      experience: "9"
    }
  ]

  const spages = [
    {
      name: "Student",
      path: "/students/all"
    }
  ]

  const tpages = [
    {
      name: "Teacher",
      path: "/teachers/all"
    }
  ]
  const [crumState, setCrumState] = useState(spages)
  const [tcrumState,setTcrumState] = useState(tpages)

  const [studentData, setData] = useState([])
  const [teacherData,setTeacherData] = useState(tdataBase)

  useEffect(()=>{
    const getAllStudents = async()=>{
      const response = await fetch(API,{
        method:"GET"
      })
      const data = await response.json();
      // console.log(data)
      setData(data)
    }
    getAllStudents()
  },[])

  return (
    <AppCtx.Provider
      value = {{
        studentData,
        setData,
        crumState,
        setCrumState,
        teacherData,
        setTeacherData,
        tcrumState,
        setTcrumState
      }}

    >
      {children}
    </AppCtx.Provider>
  )
}

export const Appstate = ()=>{
  return useContext(AppCtx)
}

export default AppProvider