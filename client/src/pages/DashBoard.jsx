import StudentCard from "../component/StudentCard"
// import React from 'react'
import studentSchema from "@/lib/studentSchema"
import StudentDetails from "@/component/StudentDetails"
import StudentForm from "@/component/StudentForm"
import { useState , useEffect } from "react"

function DashBoard() {
  const[students,setStudents] = useState([])

  useEffect(()=>{
    document.title = "Student Count"+students.length
  },[students])

  const addStudent=(student)=>{
    setStudents([...students,student])
  }

  return (
    <div className="flex-1 bg-gray-100 p-6">
        <h1 className="nb-5 text-2x1 font-bold text-center">
            Dashboard
        </h1>
        <p>Student Count : {students.length}</p>
        <StudentForm addOn={addStudent}/>
        <div>
          {/* Displaying the data */}
          {students.map((s,index)=>(
              <StudentDetails key = {index} {...s}/>
          ))
        }
        </div>
        {/* <div className="grid grid-cols-3 shadow mt-3 p-3">
            <StudentCard
            name = "Ram"
            roll = "40"
            />
            <StudentCard
            name = "Bala"
            roll = "5"
            />
            <StudentCard
            name = "Pandya"
            roll = "45"
            />
        </div>
        <button>Add Student</button> */}

        {/* <div className="grid grid-cols-3 shadow mt-3 p-3">
          <StudentDetails
          name = "Ram"
          email = "ram@gmail.com"
          Age = "18"
          course = "CSE"
          />

          
        </div> */}
        
    </div>
  )
}

export default DashBoard
