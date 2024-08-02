import React from 'react'
import './LandingPage.css'
import Button from '@/components/Button/Button'


const LandingPage: React.FC = () => {
   return (
      <>
         <div id="container">
            <div className="image-container h-[60vh] sm:h-[90vh]">
               <div className="image-headings">
                  <p className='heading  font-bold text-6xl sm:text-7xl w-4/5 sm:w-3/4  '>Your Trusted Partner for all Your Polymer Needs</p>
                  <p className='subheading font-extralight text-2xl sm:text-3xl xl:text-4xl w-3/4 sm:w-4/5 '>we are dedicated to providing the highest quality polymer solutions to meet the needs of a wide range of industries</p>
                  <div className="button">
                     <Button destination={'contact'} text="Get a Free Quote" btnColor={"red"} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default LandingPage