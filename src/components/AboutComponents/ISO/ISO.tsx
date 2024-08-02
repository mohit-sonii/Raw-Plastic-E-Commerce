
import React from "react"
import "./ISO.css"


interface ISOProps {
   backgroundImage: string,
   heading: string,
   subHeading: string,
   logo: string
}

const ISO: React.FC<ISOProps> = ({ backgroundImage, heading, subHeading, logo }) => {
   return (
      <>
         <div id="iso" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="innerISO">
               <div className="innerHeading">
                  <h1>{heading}</h1>
                  <p>{subHeading}</p>
               </div>
               <img src={logo} alt="" />
            </div>
         </div>
      </>
   )
}

export default ISO