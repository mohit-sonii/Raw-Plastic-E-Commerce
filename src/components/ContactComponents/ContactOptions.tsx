import './ContactOptions.css'
import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const ContactOptions: React.FC = () => {
   return (
      <div className="contact-section">
         <div className="call">
            <div className="call-icon">
               <BsTelephone size={20} color='white' />
            </div>
            <div className="call-text">
               <div className="call-heading">
                  <p className='Phone'>Phone</p>
               </div>
               <div className="call-number">
                  <p className='phone-numbers'>+971 111 222 333 (UAE)</p>
                  <p className='phone-numbers'>+91 111 2222 333 (INDIA)</p>
               </div>
            </div>
         </div>
         <div className="mail">
            <div className="mail-icon">
               <CiMail size={20} color='white' />
            </div>
            <div className="mail-text">
               <div className="mail-heading">
                  <p className='Mail'>Mail</p>
               </div>
               <div className="mail-text">
                  <p className='tradeMail'>trade@commharbor.com</p>
               </div>
            </div>
         </div>
         <div className="address">
            <div className="add-icon">
               <IoLocationOutline size={20} color='white' />
            </div>
            <div className="add-text">
               <div className="add-heading">
                  <p className='Address'>Address</p>
               </div>
               <div className="call-number">
                  <p className='UAEadd'>Address Office- E1-218 E ,
                     Ajman Free Zone, Shk - Sheikh Rashid Bin Saeed Al Maktoum St - Ajman - United Arab Emirates (UAE)</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactOptions