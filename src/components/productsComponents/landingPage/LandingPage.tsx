
import "./LandingPage.css"
import React from 'react'

interface Props {
   title: string
   image: string
}

const LandingPage: React.FC<Props> = ({ title, image }) => {
   return (
      <>
         <div id="container">
            <div className="image-container-product h-[40vh] sm:h-[70vh]" style={{ backgroundImage: `url(${image})` }} >
               <p className='heading-product text-7xl sm:text-8xl'>{title}</p>
            </div>
         </div>
      </>
   )
}

export default LandingPage