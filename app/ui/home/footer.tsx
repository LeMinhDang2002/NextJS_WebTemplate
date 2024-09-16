"use client"
import { useState, useEffect } from 'react';

export default function Footer(){
    const [isMobile, setIsMobile] = useState(false)
    return (
        <div className='mt-9 pb-10 pt-5 shadow-[0_10px_15px_20px_rgba(0,0,0,0.1)] space-y-3'>
            <div className='flex justify-center space-x-2'>
                <div><img className='w-6 h-6' src="/images/icons8-facebook.svg" alt="" /></div>
                <div><img className='w-6 h-6' src="/images/icons8-instagram.svg" alt="" /></div>
                <div><img className='w-6 h-6' src="/images/tiktok-svgrepo-com.svg" alt="" /></div>
            </div>
            {/* <div className={`${isMobile ? 'hidden' : 'flex justify-center space-x-4'}`}> */}
            <div className='sm:flex sm:justify-center sm:space-x-4 hidden'>
                <a className='hover:text-green-500' href=""><span>Shipping Costs</span></a>
                <a className='hover:text-green-500' href=""><span>Privary Policy</span></a>
                <a className='hover:text-green-500' href=""><span>Terms and Conditions</span></a>
                <a className='hover:text-green-500' href=""><span>Contact</span></a>
            </div>
        </div>
    )
}