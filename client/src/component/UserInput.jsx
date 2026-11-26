import React from 'react'
import { useState,useEffect } from 'react'

const UserInput = () => {
    const[Name,setname] = useState("")
    useEffect(()=>{
        console.log("Changing",Name)
    },[Name])
    return (
        <div>
            <h3>User Input</h3>
            <input type="text"
            value = {Name}
            onChange={(t)=>{setname(t.target.value)}}
            placeholder="Enter the Name"
            />
            <p>Welcome {Name}</p>
        </div>
    )
}

export default UserInput;