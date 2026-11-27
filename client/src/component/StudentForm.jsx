import { useForm } from "react-hook-form"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import studentSchema from "@/lib/studentSchema"

const StudentForm = ({addOn}) => {
    const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    } = useForm({resolver:zodResolver(studentSchema)})

    const submit = (data)=>{
        addOn(data)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input {...register("name")} placeholder="Enter the Name"/>
                <p>{errors.name?.message}</p>

                <input {...register("email")} placeholder="Enter the Email"/>
                <p>{errors.email?.message}</p>

                <input {...register("age")} placeholder="Enter the Age"/>
                <p>{errors.age?.message}</p>

                <select {...register("course")}>
                    <option>CSE</option>
                    <option>IT</option>
                    <option>CSBS</option>
                    <option>ECE</option>
                </select>
                <p>{errors.course?.message}</p>

                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default StudentForm
