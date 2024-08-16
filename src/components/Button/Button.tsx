
import './Button.css'
import React from 'react'
import Link from 'next/link'

interface Props {
   destination: string
   btnColor: string
   text: string
}

const Button: React.FC<Props> = ({ destination, text, btnColor }) => {
   return (
      <>
         <Link href={destination}>
            <button style={{ backgroundColor: `${btnColor}` }} className='flex jusitfy-center items-center text-'>
               {text}
            </button>
         </Link>
      </>
   )
}

export default Button