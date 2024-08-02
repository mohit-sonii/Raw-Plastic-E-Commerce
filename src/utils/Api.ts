
class ApiError extends Error {
   public code: number
   public message: string

   constructor(code: number, message: string, stack: string = "") {
      super(message)
      this.code = code
      this.message = message
   }
}

interface ResponseType  {
   code: number,
   message: string,
   success: boolean,
}

const ApiResponse = (
   code: number,
   message: string,
) => {
   const success: boolean = code < 400 ? true : false
   const response: ResponseType = { code, success, message }
   return Response.json({ ...response })
}

export default ApiResponse