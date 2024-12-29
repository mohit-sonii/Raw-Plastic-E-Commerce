import './page.css'
import React from 'react'
import LandingPage from '@/components/productsComponents/landingPage/LandingPage'
import ContactOptions from '@/components/ContactComponents/ContactOptions'
import Form from '@/components/ContactComponents/Form'
import { Metadata } from 'next'

export const metadata: Metadata={
   title:'Contact Us',
   description:'Contact us'
}

const ContactUs: React.FC = () => {
   return (
      <>
         <LandingPage
            title={"CONTACT US"}
            image={"/Contact.png"}
         />
         <div id="ContactOptions">
            <ContactOptions />
         </div>
         <div id="form">
            <Form />
         </div>
      </>
   )
}

export default ContactUs