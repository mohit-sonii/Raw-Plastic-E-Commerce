
import './NavBar.css'
import React from 'react'
import Link from 'next/link';

const NavBar: React.FC = () => {
   return (
      <nav>
         <ul className='gap-6 sm:gap-12'>
            <li><Link href="/" className="nav-links text-lg sm:text-2xl">Home</Link></li>
            <li><Link href="/products" className="nav-links text-lg sm:text-2xl">Products</Link></li>
            <li><Link href="/industries" className="nav-links text-lg sm:text-2xl">Industries</Link></li>
            <li><Link href="/contact" className="nav-links text-lg sm:text-2xl">Contact Us</Link></li>
            <li><Link href="/about" className="nav-links text-lg sm:text-2xl">About Us</Link></li>
         </ul>
      </nav>
   )
}

export default NavBar