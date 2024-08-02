
import './Logo.css';
import React from 'react'

interface Props {
   textCol?: string
}

const Logo: React.FC<Props> = ({ textCol }) => {
   return (
      <>
         <div className="main-container">
            <div className="logo-image">
               <img src="/Logo.png" alt="Logo Image"/>
            </div>
            <div className="logo-content">
               <h1 id='logo-content-heading' style={{ color: `${textCol}` }}>Commerce Harbor FZE</h1>
               <p id="logo-sub-heading" style={{ color: `${textCol}` }}>...to shape the future</p>
            </div>
         </div>
      </>
   )
}

export default Logo