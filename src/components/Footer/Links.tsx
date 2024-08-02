
import "./Links.css"
import React from 'react'
import Link from "next/link"

const Links: React.FC = () => {
   return (
      <div className='footer-links'>
         <div className="useful-links">
            <div className="link-redline">
               <p>
                  USEFUL LINKS
               </p>
               <img src="/redLine.png" alt=""  />
            </div>
            <div className="all-links">
               <ul>
                  <li><Link href="/about" className="foot-nav">About Us</Link></li>
                  <li><Link href="/products" className="foot-nav">Products</Link></li>
                  <li><Link href="/industries" className="foot-nav">Industries</Link></li>
               </ul>
            </div>
         </div>
         <div className="contact-us">
            <div className="link-redline">
               <p>
                  CONTACT US
               </p>
               <img src="/redLine.png" alt="" />
            </div>
            <div className="contact-link">
               <ul>
                  <li><Link href="contact" className="foot-nav">Contact</Link></li>
                  <li>Sitemap</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Links