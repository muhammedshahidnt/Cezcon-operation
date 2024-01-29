import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (

        <div className='flex justify-between  '>
            <div className=''>
                2024 © 
               
               <Link href='https://www.cezcon.com/' className='hover:text-blue-600'>
               
                 Cezcon Solutions Asia/Kolkata
               </Link>
            </div>
            <Link href='https://www.cezcon.com/'  className='hover:text-blue-600'>
            
            <div className='text-right '>
                Cezcon Solutions
                
            </div>
            </Link>
        </div>
  
    )
}

export default Footer