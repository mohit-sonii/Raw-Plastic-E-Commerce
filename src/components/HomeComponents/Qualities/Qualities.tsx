

import "./Qualities.css"
import React from 'react'
import QualityIcon from "./QualityCard"

const Qualities: React.FC = () => {
   return (
      <>
         <div className="qualities-section">
            <QualityIcon icon={"/Gem.png"} h2={"Quality Assurance"} p={"We adhere to strict quality control measures to ensure that the polymer raw materials we supply meet the highest industry standards."} />
            <QualityIcon icon={"/star.png"} h2={"Reliability"} p={"Our consistent and timely deliveries ensure that your production processes remain seamless and efficient."} />
            <QualityIcon icon={"/sustain.png"} h2={"Sustainability"}
               p={"We are committed to promoting sustainable practices by offering eco-friendly and recyclable polymer raw materials."} />
         </div>
      </>
   )
}

export default Qualities