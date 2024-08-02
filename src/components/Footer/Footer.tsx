import ContactCard from './ContactCard'
import "./Footer.css"
import Links from './Links'
import React from 'react'


const Footer: React.FC = () => {
   return (
      <>
         <div id="links">
            <div className="contact-links">
               <div className="contacts">
                  <ContactCard />
               </div>
               <div className="links">
                  <Links />
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer