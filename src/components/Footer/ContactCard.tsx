import "./ContactCard.css"
import Logo from "../Header/Logo"
import { CiMail } from "react-icons/ci";
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import TelMessage from "../Header/TelMessage";

const ContactCard: React.FC = () => {
   return (
      <>
         <div id="contactCard">
            <div className="inner-contactCard">
               <div className="logo">
                  <Logo textCol="white" />
               </div>
               <div className="contactInformation">
                  <div className="phoneInfo">
                     <TelMessage icon={<BsTelephone size={15} color="red" />} textCol="white" />
                     <div className="numbers">
                        <p className='contact-p'>+971 111 222 333 (UAE)</p>
                        <p className='contact-p'>+91 111 2222 333 (INDIA)</p>
                     </div>
                  </div>
                  <div className="mailInfo">
                     <TelMessage textCol="white" icon={<CiMail size={20} color="red" />} />
                     <p className="mail-p">
                        trade@Comharbor.com
                     </p>
                  </div>
                  <div className="location">
                     <TelMessage textCol="white" icon={<IoLocationOutline size={18} color='red' />} />
                     <p className="footer-p">
                        Address Office- E1-218 E ,
                        Ajman Free Zone, Shk - Sheikh Rashid Bin Saeed Al Maktoum St - Ajman - United Arab Emirates (UAE)
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default ContactCard