
import './NavBar.css'
import React from 'react'
import Link from 'next/link';

const NavBar: React.FC = () => {
   return (
      <nav className='flex w-full justify-end m-auto'>
         <ul className='gap-6 sm:gap-12 text-base sm:text-2xl flex p-6 md:p-8 font-bold'>
            <li>
               <Link href="/" className="nav-links">
                  Home
               </Link>
            </li>
            <li>
               <Link href="/products" className="nav-links">
                  Products
               </Link>
            </li>
            <li>
               <Link href="/industries" className="nav-links">
                  Industries
               </Link>
            </li>
            <li>
               <Link href="/contact" className="nav-links">
                  Contact Us
               </Link>
            </li>
            <li>
               <Link href="/about" className="nav-links">
                  About Us
               </Link>
            </li>
         </ul>
      </nav>
   )
}

export default NavBar