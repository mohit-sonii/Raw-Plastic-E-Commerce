

import "./Sourcing.css"
import React from 'react'


interface SourcingProps {
   image: string
}

const Sourcing: React.FC<SourcingProps> = ({ image }) => {
   return (
      <div className="sourcing" style={{ backgroundImage: `url(${image})` }}>
         <p className="sourcing-p">
            At Commerce Harbor FZE, our sourcing philosophy is rooted in a deep commitment to excellence, reliability, and sustainability. We understand that the foundation of our business lies in the materials we provide, and that&apos;s why we approach sourcing with utmost diligence and integrity.
         </p>

      </div>
   )
}

export default Sourcing