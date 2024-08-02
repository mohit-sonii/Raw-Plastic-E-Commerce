import './TelMessage.css'
import React from 'react'

interface Props {
   textCol?: string
   icon: React.ReactNode
   value?: string
}

const TelMessage: React.FC<Props> = ({ textCol, icon, value }) => {
   return (
      <>
         <div className="telephone-message">
            <div className="icon-text" style={{ color: `${textCol}` }}>
               {icon}
               <p style={{ color: `${textCol}` }}>{value}</p>
            </div>
         </div>
      </>
   )
}

export default TelMessage