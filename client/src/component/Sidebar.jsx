import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className="w-48 h-150 bg-gray-200 p-5 flex flex-col">
      <h1 className="font-bold">Menu</h1>
      <Link to="/about" className="mt-3">About</Link>
      <Link to="/" className="mt-3">Dashboard</Link>
      <Link to="/student" className="mt-3">Student</Link>
      <Link to="/settings" className="mt-3">Settings</Link>
      <Link to="/crash" className="mt-3">Crash</Link>
      <Link to="/login" className="mt-3">Login</Link>
      

    </div>
  )
}


export default Sidebar