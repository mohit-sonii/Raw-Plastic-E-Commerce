
import Button from '@/components/Button/Button'
import React from 'react'
import "./CTA.css"

const CTA: React.FC = () => {
   return (
      <div id='cta-section' className='flex-col gap-4 sm:flex-row sm:gap-0'>
         <div className="text-section w-full p-8 sm:w-[70%]">
            <p className='for-CTA text-sm sm:text-xl'>WE ARE THE ONE WHO NEVER COMPROMISE ON THE QUALITY OF THE PRODUCTS</p>
         </div>
         <div className="button-section w-full sm:w-[30%]">
            <Button destination={'contact'} text={"Get a Free Quote"} btnColor={"red"} />
         </div>
      </div>
   )
}

export default CTA