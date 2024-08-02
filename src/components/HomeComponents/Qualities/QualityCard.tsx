import "./QualityCard.css"
import React from 'react'

interface Props {
   icon: string
   h2: string
   p: string
}

const QualityIcon: React.FC<Props> = ({ icon, h2, p }) => {
   return (
      <div className="qualityBoxes">
         <div className="first-box">
            <div className="second-box">
               <img src={icon} alt="" />
            </div>
         </div>
         <div className="content-box">
            <h2 className="content-box-h2">{h2}</h2>
            <p className="content-box-p">{p}</p>
         </div>
      </div>
   )
}

export default QualityIcon