
"use client"

import React from 'react'
import "./IndustryCards.css"


interface Props {
   heading?: string
   image?: string
   description?: string
}

const IndustryCards: React.FC<Props> = ({ heading, image, description }) => {

   const HandleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {

      const pElement = e.currentTarget.querySelector(".industry-image > p");
      if (pElement) {
         pElement.classList.remove("disabled");
      }
   }
   const HandleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      const elemetn = e.currentTarget.querySelector(".industry-image > p")
      if (elemetn) {
         elemetn.classList.add("disabled")
      }
   }

   return (
      <>
         <div id="IndustriesKeCard">
            <div className="text">
               {heading}
            </div>
            <div className="industry-image" onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} style={{ backgroundImage: `url(${image})` }}>
               <p className="industry-p disabled text-lg sm:text-3xl ">{description}</p>
            </div>
         </div>
      </>
   )
}

export default IndustryCards