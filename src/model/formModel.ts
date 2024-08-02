
import mongoose, {  Schema } from "mongoose"
import { FormData } from "@/utils/types"

const formSchema = new Schema({
   name: String,
   email: String,
   contact: Number,
   message: String,
   Subject: String
})

const Form = mongoose.models.Form as mongoose.Model<FormData> || mongoose.model<FormData>('Form', formSchema)

export default Form