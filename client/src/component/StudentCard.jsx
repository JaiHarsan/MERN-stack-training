import React from 'react'

function StudentCard (props) {
  return (
    <div>
      <h1 className="text-lg font-bold text-center">
        {props.name}
      </h1>
      <p className="mt-2 text-3x1 text-blue-600 text-center">{props.roll}</p>
    </div>
  )
}

export default StudentCard