import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const allowedDomain = "https://jsonplaceholder.typicode.com"

const api = axios.create({
  baseURL : allowedDomain
})

// Domain whitelisting
api.interceptors.request.use((config)=>{
  const url = new URL(config.url,config.baseURL)

  if(url.origin !== allowedDomain){
    throw new Error("Request to unallowed domain")
  }
  return config;
})


const Student = () =>{
  const[student,setStudent]= useState([])
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")

  const getstudent = async()=>{
    try{
      const response = await api.get("/users");
      setStudent(response.data)
    }
    catch{
      console.error("Error fetching students : ",error)
    }
  }
  // Add Students
  const addstudents = async()=>{
    try{
      const response = await api.post("/users",{name:name ,email:email
      });
      setStudent([...student,response.data]);
      setName("");
      setEmail("")
    }
    catch(error){
      console.error("Error adding student : ",error)
    }
  }
  // Edit Student
  

  const updatestudent = async(id,updatedData)=>{
    try{
      const response = await api.put('/users/${id}',updatedData);
      const updatedStudents = student.map((student)=>
      student.id === id ? response.data : student);
      setStudent(updatedStudents);
    }
    catch(error){
      console.log("Error updating student : ",error)
    }
  }

 

  return(
    <div>
      {/* Read and fetch the data */}
      <p>Students data</p>
      <button onClick={getstudent}>Get Students</button>
      <br/>
      <br/>

      {/* Adding name */}
      <input type="text"  placeholder="Enter the Name : " value={name} 
      onChange={(e)=>setName(e.target.value)}/>
      <br/>
      <br/>

      {/* Adding Email */}
      <input type="text" placeholder="Enter the Email : " value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <br/>

      <button onClick={addstudents}>Add Students</button>

      <br/>
      <br/>
      <ul>
        {student.map((student)=>(
          <li key = {student.id}>{student.id}-{student.name}-{student.email}
          <br/>
          <button onClick={()=>setName(student.name) & setEmail(student.email)}>Edit</button>
          <br/>
            <button onClick={()=>updatestudent(student.id)}>Update</button>
          
          </li>
        ))}
      </ul>
    </div>
  )
}



export default Student
