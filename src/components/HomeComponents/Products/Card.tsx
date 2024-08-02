
import "./Card.css"
import React from 'react'
import Image from "next/image"

interface Props {
   image: string
   title: string
}

const Card: React.FC<Props> = ({ image, title }) => {
   return (
      <div className="image w-64 sm:w-[32rem]">
         <div className="image-title">
            <Image
               src={image}
               layout="responsive"
               alt="Product Image"
               className="h-48 sm:h-[28rem] img"
               width={1920}
               height={1920} />
            <div className="white-box w-40 m-auto -mt-[1rem] sm:w-80 sm:-mt-[3rem]">
               <p className="card-p text-base sm:text-2xl">{title}</p>
            </div>
         </div>
      </div>
   )
}

export default Card