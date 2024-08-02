
import "./OurMission.css"
import React from "react"
import Image from "next/image"
import Button from "@/components/Button/Button"
import Link from "next/link"


const OurMission: React.FC = () => {
   return (
      <div id="ourMission">
         <div className="ourMissionContext">
            <Image src="/DiamondIcon.png" alt="" width={20} height={20}/>
            <p className='our'>Our Mission</p>
            <h2>COMMERCE HARBOR FZE</h2>
            <p className='desc1  text-2xl sm:text-3xl'>We are committed to being a leading polymer distributor, providing exceptional value to our customers through the reliable supply of high-quality polymer materials. Our mission is to be a trusted partner in your success, delivering innovative solutions and personalized service that exceed your expectations.</p>
            <div className="ourMissionButton">
               <Button destination={`/contact`} text={"GET A QUOTE"} btnColor={"red"} />
               <Link href={`/products`}>
                  <button className="transparent">OUR PRODUCTS</button>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default OurMission