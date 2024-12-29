import {z} from 'zod'

export  const FormValidation = z.object({
   name: z.string().min(3, { message: "Name must be above 3 letters" }).trim(),
   email: z.string().email({ message: 'Please enter correct mail address' }),
   contact: z.string().min(10, { message: "Contact Number must be 10 Digits" }).max(10, { message: "Contact must be 10 Digits" }).trim(),
   message: z.string().min(10, { message: "Message must be above 10 characters" }).max(200, { message: "Message should not more than 200 Characters" }),
   subject:z.string()
})
