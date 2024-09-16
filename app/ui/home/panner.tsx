"use client"
import 'tailwindcss/tailwind.css'
import { useState, useEffect } from 'react';

export default function Panner(){
    const [isFirtSlide, setIsFirtSlide] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if(isFirtSlide)
                setIsFirtSlide(false)
            else
                setIsFirtSlide(true)
            // console.log(isFirtSlide)
        }, 4000); 
      }, [isFirtSlide])
    return(
        <div className='bg-[#F2F2F2] flex justify-center'>
            <div className='relative container max-w-[1200px] max-h-[513px]'>
                <div className='sm:hidden block'>
                    <div className='h-[50px] p-3'>
                        <h1 className='text-4xl text-center'>New Collection</h1>
                    </div>
                </div>
                <div className=''>
                    <img className={`${isFirtSlide ? 'block' : 'hidden'}`} src="/images/bags001.jpg" alt="" />
                    <img className={`${isFirtSlide ? 'hidden' : 'block'}`} src="/images/bags002.jpg" alt="" />
                </div>
                <div className='sm:absolute lg:top-24 lg:left-16 md:top-6 md:left-6'>
                    <div className='w-[347px] h-[154px] sm:block hidden'>
                        <h1 className='text-6xl'>New Collection</h1>
                    </div>
                    <div className='sm:w-[402px] sm:h-[58px] sm:text-start text-center mb-4'>
                        <span className='text-[#3d3d3d]'>The highest quality products, sewn in Ireland from Irish materials. Quality and Durability for years</span><br />
                        <button className='text-white bg-[#038F26] py-4 px-10 hover:bg-lime-800 mt-12'>New Collection</button>
                    </div>
                </div>
            </div>
        </div>
    )
}