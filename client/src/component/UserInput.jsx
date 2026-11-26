import React, { useEffect } from 'react'
import { useState } from 'react'

const UserInput = () => {
    const[Name,setname] = useState("")
    useEffect(()=>{
        console.log("Entered Name")
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
