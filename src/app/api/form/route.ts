
import dbConnect from "@/lib/dbConnect";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest } from "next/server";
import { FormData } from "@/utils/types";
import Form from "@/model/formModel";
import ApiResponse from "@/utils/Api";

export async function POST(req: NextRequest){
   try {
      await dbConnect()
      const formData: FormData = await req.json();
      for (const i in formData) {
         const value = formData[i as keyof FormData]
         if (typeof value === 'string' && value.trim().length === 0) throw new ApiError(400, 'Required fields are missing')
      }
      const alreadySubmitted = await Form.findOne({ email: formData.email })
      if (alreadySubmitted) throw new ApiError(400, 'User already submitted the form')
      const data = new Form({
         name: formData.name,
         email: formData.email,
         message: formData.message,
         subject: formData.subject,
         contact: formData.contact,
      })
      await data.save();
      return ApiResponse(200, 'Thank you for your submission')
   } catch (error: any) {
      throw new ApiError(error.statusCode || 500, error.message || 'Failed to Send')
   }
}