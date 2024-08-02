
"use client"

import React from 'react'
import "./Card.css"
import { useState, useEffect } from 'react'

interface Props {
   image?: string
   description?: string
   dir?: string
}

const Card: React.FC<Props> = ({ image, description, dir }) => {
   const [direction, setDirection] = useState<Boolean>()

   useEffect(() => {
      if (dir === 'right') {
         setDirection(true);
      }
   }, [dir])

   const imgCre = "w-[40%] sm:w-[35%] h-72 sm:h-[30rem]"

   return (
      <>
         <div id="product-card">
            {direction
               ? <>
                  <div className={`img ${imgCre} `}>
                     <img src={image} alt="" />
                  </div>
                  <div className={`description text-base sm:text-3xl`}>
                     {description}
                  </div>
               </>
               : <>
                  <div className={`description text-base sm:text-3xl`}>
                     {description}
                  </div>
                  <div className={`img ${imgCre} `}>
                     <img src={image} alt="" />
                  </div>
               </>
            }
         </div >
      </>
   )
}

export default Card