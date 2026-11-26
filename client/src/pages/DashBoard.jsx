import StudentCard from "../component/StudentCard"
// import React from 'react'

function DashBoard() {
  return (
    <div className="flex-1 bg-gray-100 p-6">
        <h2 className="nb-5 text-2x1 font bold">
            Dashboard
        </h2>
        <div className="grid grid-cols-3 shadow mt-3 p-3">
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
        <button>Add Student</button>
        
    </div>
  )
}

export default DashBoard
