

import React from 'react'
import "./Extra.css"
import { FaCheck } from "react-icons/fa";

interface ExtraProps {
   quality: string,
   description: string
}

const Extra: React.FC<ExtraProps> = ({ quality, description }) => {
   return (
      <div id="adv">
         <div className="icon">
            <FaCheck color='white' size={20} />
         </div>
         <div className="text">
            <p className='quality'>{quality}</p>
            <p className='desc'>{description}</p>
         </div>
      </div>
   )
}

export default Extra