import "./page.css"
import React from 'react'
import Sourcing from "@/components/AboutComponents/Sourcing/Sourcing"
import Extra from "@/components/AboutComponents/Extra/Extra"
import ISO from "@/components/AboutComponents/ISO/ISO"
import WhyChooseUs from "@/components/AboutComponents/WhyChooseUs/WhyChooseUs"
import LandingPage from "@/components/productsComponents/landingPage/LandingPage"
import Info from "@/components/HomeComponents/Info/Info"


const AboutUs: React.FC = () => {
   return (
      <>
         <LandingPage image={"/about.png"} title={"ABOUT US"} />
         <div id="Info">
            <Info p1={"With Head office in Ajman, United Arab Emirates, our extensive range of polymers caters to a wide variety of applications, such as packaging, automotive, construction, electronics, and consumer goods. Whether you need polymers for injection moulding, extrusion, blow moulding, or any other manufacturing process, we have the right product for you."} p2={"We source our polymers from reputable producers, ensuring that they meet stringent quality standards. Our team of experts performs thorough testing and quality control checks to ensure that every batch of polymer we supply meets or exceeds industry standards"} />
         </div>
         <div id="ChooseUs">
            <WhyChooseUs title={'WHY CHOOSE US ?'} />
            <ISO backgroundImage={"/Materials.png"} logo={"/ISO.png"} heading={'An ISO 9001 : 2015 Certified Company '} subHeading={'(Quality Management System)'} />
         </div>
         <div id="extra">
            <div className="icon-des">
               <Extra quality={'Quality Assurance'} description={'We adhere to strict quality control measures to ensure that the polymer raw materials we supply meet the highest industry standards.'} />

               <Extra quality={'Reliability'} description={'Our consistent and timely deliveries ensure that your production processes remain seamless and efficient.'} />

               <Extra quality={'Sustainability'} description={'We are committed to promoting sustainable practices by offering eco-friendly and recyclable polymer raw materials.'} />
            </div>
            <div className="image">
               <img src={"/extraimage.png"} alt="" />
            </div>
         </div>
         <div id="Sourcing">
            <WhyChooseUs title={'OUR SOURCING PHILOSOPHY'} />
            <Sourcing image={"/source.png"} />
         </div>

         <div id="philosophy">
            <Info heading2={'Partnerships with Reputable Suppliers'} p1={'We forge strong partnerships with established and reputable plastic manufacturers and suppliers worldwide. These relationships are built on trust, quality, and consistency, ensuring a reliable supply chain for our clients'} />

            <Info heading2={'Stringent Quality Control'} p1={'Our sourcing process involves rigorous quality control measures. We conduct thorough assessments of potential suppliers, evaluating their manufacturing processes, quality management systems, and compliance with industry regulations.'} />

            <Info heading2={'Responsibility and Sustainability'} p1={'We are committed to responsible sourcing practices. We work with suppliers who share our values regarding sustainability, ethical labor practices, and environmental responsibility. Our aim is to contribute to a more sustainable and eco-friendly industry.'} />

            <Info heading2={'Continuous Improvement'} p1={'We continually evaluate and improve our sourcing processes. We invest in technology, training, and best practices to ensure that our sourcing methods are always on the cutting edge. This commitment to improvement extends to all aspects of our business.'} />
         </div>
      </>
   )
}

export default AboutUs