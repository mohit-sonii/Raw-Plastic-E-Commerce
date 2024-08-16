import React from 'react'
import "./page.css"
import LandingPage from '@/components/productsComponents/landingPage/LandingPage'
import Info from '@/components/HomeComponents/Info/Info'
import IndustryCards from '@/components/IndustryComponents/IndustryCards'
import { Metadata } from 'next'

export const metadata:Metadata={
   title:'| Industries',
   description:'Industries page'
}

const Industries: React.FC = () => {

   return (
      <>
         <LandingPage title={"INDUSTRIES"} image={"/Industries.png"} />
         <div id="Info">
            <Info p1={`At Commerce Harbor FZE ,we understand that different industries have distinct requirements when it comes to polymers. With a commitment to excellence and a passion for innovation, we've built strong relationships with manufacturers and clients alike. Whether you're in the automotive, agriculture, packaging, medical, or any other industry, we have the polymer solutions you need.`} />
         </div>
         <div id="IndustryCards">
            <IndustryCards heading={"ELECTICAL"} image={"/Electrical.png"} description={`The impact of polymers in electrical engineering cannot be overstated. From ensuring safety and efficiency in power transmission to enabling miniaturized electronics and sustainable energy solutions, polymers are the unsung heroes of our electrified world. As technology continues to advance, we can expect polymers to play an even more critical role in shaping the future of electrical engineering, powering progress, and driving innovation to new heights. Embrace the polymer-driven transformation and electrify the future today.`} />

            <IndustryCards heading={"AGRICULTURE"} image={"/Agriculture.png"} description={`The integration of polymers into agriculture has propelled farming into a new era of efficiency, sustainability, and productivity. From optimizing water usage to protecting crops and enhancing soil health, polymers are the unsung heroes of modern agriculture. As research and innovation in polymer technology continue, we can expect even more groundbreaking applications, further revolutionizing the way we feed the world. Embrace the polymer-driven transformation and cultivate a more sustainable future in agriculture.`} />

            <IndustryCards heading={"AUTOMOBILE"} image={"/Automobile.png"} description={`The use of polymers in the automotive industry continues to evolve as manufacturers seek to reduce weight, improve fuel efficiency, enhance safety, and meet environmental regulations. Advanced materials and manufacturing processes are continually being developed to optimize the performance of polymer components in automobiles.polymers are a fundamental component of modern automobile design ,Their versatility continues to drive innovation in the automotive industry.`} />

            <IndustryCards heading={"CONSTRUCTION"} image={"/Construction.png"} description={`As construction continues to evolve, polymers have proven to be essential in advancing structural integrity, energy efficiency, and sustainability in the industry. From reinforcing structures to improving insulation and aesthetics, polymers are shaping the buildings of the future. As research and innovation in polymer technology continue, we can expect even more groundbreaking applications in construction, ensuring safer, more efficient, and eco-friendly buildings for generations to come. Embrace the polymer-driven transformation and build a better future today.`} />

            <IndustryCards heading={"HOUSEHOLD"} image={"/HouseHold.png"} description={`Polymers have quietly but significantly shaped the way we experience and interact with our homes. From the kitchen to the bathroom, and in our furnishings, polymers have brought about innovations that enhance comfort, style, and sustainability. As technology advances and materials become even more sophisticated, we can expect polymers to continue to play a central role in shaping the homes of the future. Embrace the polymer revolution and experience a more convenient, safe, and sustainable household.`} />

            <IndustryCards heading={"PACKAGING"} image={"/Packaging.png"} description={`Enabling the creation of solutions that protect, preserve, and present products to consumers worldwide, Polymers have become the driving force behind packaging innovation.Versatile, lightweight, and durable, polymers have transformed the way products are stored, transported, and presented. The influence of polymers in packaging is profound, driving sustainability, safety, and innovation in an industry essential to modern life. From extending the shelf life of products to reducing environmental impact, polymers are revolutionizing packaging solutions.   `} />

            <IndustryCards heading={"MEDICAL"} image={"/Medical.png"} description={`The integration of polymers into the field of medicine represents a monumental leap forward in patient care and treatment options. From medical devices to drug delivery systems, tissue engineering, and diagnostics, the impact of polymers is felt across every facet of modern healthcare. As research continues to push boundaries, we anticipate even more groundbreaking innovations in the future, ultimately improving outcomes and quality of life for patients worldwide. Embrace the future of healthcare with polymers at its core.`} />
         </div>

      </>
   )
}

export default Industries