"use client"
import { useState, useEffect } from 'react';

export default function Slider(){
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
        <div className='flex justify-center'>
            <div className='relative container max-w-[1200px] max-h-[650px] overflow-hidden object-center'>
                <div className=''>
                    <img className={`${isFirtSlide ? 'block w-full' : 'hidden'}`} src="/images/slide_1.jpg" alt="" />
                    <img className={`${isFirtSlide ? 'hidden' : 'block w-full'}`} src="/images/slide_2.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}