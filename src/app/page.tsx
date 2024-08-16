import React from 'react'
import "./page.css"
import LandingPage from '@/components/HomeComponents/LandingPage/LandingPage'
import Info from '@/components/HomeComponents/Info/Info'
import Products from '@/components/HomeComponents/Products/Products'
import OurMission from '@/components/HomeComponents/OurMission/OurMission'
import Qualities from '@/components/HomeComponents/Qualities/Qualities'
import Excellence from '@/components/HomeComponents/Excellence/Excellence'
import CTA from '@/components/HomeComponents/CTA/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
   title: "Commerce Harbor FZE",
   description: "website landing page",
};

const Home: React.FC = () => {
   return (
      <div id="main">
         <LandingPage />
         <div id="Info">
            <Info heading={'OUR SERVICES'} heading2={'What We Do?'} p1={'At Commerce Harbor FZE, we pride ourselves on being a leading supplier of high-quality polymers to a wide range of industries. With a strong commitment to customer satisfaction and decades of cumulative experience in the industry, we strive to offer the best polymer solutions for your specific needs'} p2={'To ensure a seamless experience for our customers, we maintain a robust supply chain and efficient logistics network. We have partnered with reliable shipping and freight companies to ensure timely delivery of your polymer orders, no matter where you are located.'} />
         </div>
         <div id="products">
            <Products />
         </div>
         <OurMission />
         <div id="qualities">
            <Qualities />
         </div>
         <Excellence />
         <div id="cta">
            <CTA />
         </div>
      </div>
   )
}

export default Home
