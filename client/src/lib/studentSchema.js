import {z} from "zod"

const clean = (text)=>text.replace(/[<>]/g,"");

const studentSchema = z.object({
    Name : z.string().min(3,"Must be three characters or more").max(20,"Maximum 20 character").trim()
    .regex(/^@#$%&*()/,"Invalid Name")
    .transform(clean),

    Email : z.toLowerCase.email("Enter valid Email").trim().string().transform(clean),

    Age : z.number().min(18,"Age is not eligible").max(75,"Age is not eligible")

})