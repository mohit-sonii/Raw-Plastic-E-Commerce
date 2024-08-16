import './Info.css'
import React from 'react'

interface Props {
   heading?: string
   heading2?: string
   p1?: string
   p2?: string
}

const Info: React.FC<Props> = ({ heading, heading2, p1, p2 }) => {
   return (
      <div id='section'>
         <img src="/DiamondIcon.png" alt="" />
         <p className='our'>{heading}</p>
         <h2>{heading2}</h2>
         <p className='desc1 font-thin text-2xl sm:text-3xl'>{p1}</p>
         <p className='desc2 font-thin text-2xl sm:text-3xl'>{p2}</p>
      </div>
   )
}

export default Info