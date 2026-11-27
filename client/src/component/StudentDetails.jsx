import React from 'react'

const StudentDetails = ({name,email,age,course}) => {
  return (
    <div className="font-bond p-3">
        <h3 >"name" : {name}</h3>
        <p>"email" : {email}</p>
        <p>"age" : {age}</p>
        <p>"course" : {course}</p>
    </div>
  )
}

export default StudentDetails
