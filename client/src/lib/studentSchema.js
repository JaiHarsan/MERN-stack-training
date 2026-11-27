import {z} from "zod"

const clean = (text)=>text.replace(/[<>]/g,"");

const studentSchema = z.object({
    name : z.coerce.string().min(3,"Must be three characters or more")
    .max(20,"Maximum 20 character").trim()
    .regex(/^[A-Za-z .]+$/,"Invalid Name")
    .transform(clean),

    email : z.string().transform(clean),

    age : z.coerce.number({message : "Age must be Number"}).int("Age must be a number")
    .min(18,"Age is not eligible").max(75,"Age is not eligible"),

    course : z.enum(["CSE","CSBS","ECE","IT"],{message : "Select a Course"})

})

export default studentSchema