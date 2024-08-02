

"use client"

import { useState } from 'react'
import "./Form.css"
import toast from 'react-hot-toast';
import axios from 'axios'
import React from 'react'


interface FormData {
   name: string,
   email: string,
   contact: string
   message: string
   subject: string
}

const Form: React.FC = () => {
   const [data, setData] = useState<FormData>({
      name: '',
      email: '',
      contact: '',
      message: '',
      subject: ''
   })
   const [loading, setLoading] = useState<boolean>(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      try {
         const response = axios.post('/api/form', JSON.stringify(data))
         console.log(response)
         toast.promise(
            response,
            {
               loading: 'Saving...',
               success: <b>Thanks for the Submission!!!</b>,
               error: (error: any) => <b>{error.message}</b>
            }
         );
         await response

         setData({
            name: '',
            email: '',
            contact: '',
            message: '',
            subject: ''
         })

      } catch (err: any) {
         console.log(err)
      } finally {
         setLoading(false);
      }
   }


   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { name, value } = e.currentTarget
      setData({ ...data, [name]: value })
   }

   return (
      <div id="FormDetail">
         <div className="contact-headings-form ">
            <h1 className="font-semibold">Let&apos;s Talk !</h1>
            <p>Get in touch with us using the enquiry form or contact details below</p>
         </div>

         <div id="FormDesign" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
            <form onSubmit={handleSubmit}>

               <input name='name' value={data.name} onChange={handleChange} type="text" placeholder='Your Name ' required className='w-full' />

               <input name='contact' value={data.contact} onChange={handleChange} type="tel" placeholder='Contact No. ' required className='w-full' />

               <input name='email' value={data.email} onChange={handleChange} type="email" placeholder='Your Email ' required className='w-full' />

               <input name='subject' value={data.subject} onChange={handleChange} type="text" placeholder='Subject ' required className='w-full' />

               <input name='message' value={data.message} onChange={handleChange} type="text" placeholder='Your Message ' className='textarea w-full' required />

               <div className="formButton" >
                  <button type="submit" style={{ backgroundColor: 'red' }}>{loading ? 'Loading...' : 'Submit'}
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Form