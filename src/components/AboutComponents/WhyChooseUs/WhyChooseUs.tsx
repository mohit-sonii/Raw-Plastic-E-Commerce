
import "./WhyChooseUs.css"
import React from 'react'


interface WhyChoose {
   title: string
}

const WhyChooseUs: React.FC<WhyChoose> = ({ title }) => {
   return (
      <div id="whyContainer">
         <div id="WhyHeading">
            <h1>{title}</h1>
            <div className="redlines">
               <img className='redline1' src={"/redLine.png"} alt="" />
               <img className='redline2' src={"/redLine.png"} alt="" />
               <img className='redline3' src={"/redLine.png"} alt="" />
               <img className='redline4' src={"/redLine.png"} alt="" />
            </div>
         </div>
      </div>
   )
}

export default WhyChooseUs