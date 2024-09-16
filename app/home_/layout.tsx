"use client"

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isDisplayMenu, setIsDisplayMenu] = useState(false)
    const handleDisplayMenu = () =>{
        if(isDisplayMenu == true)
            setIsDisplayMenu(false)
        else
            setIsDisplayMenu(true)
        }

    return (
      <main>
        <div>
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] h-[100px] relative'>
                    <div className=' absolute top-[23px] left-0'>
                        <a href="#"><img className='w-64' src="/images/logo.svg" alt="" /></a>
                    </div>
                    <div className=' absolute top-7 right-0 space-x-3 flex items-center pr-2'>
                        <div className='float-left'>
                            <ul className='lg:flex space-x-4 md:hidden sm:hidden hidden'>
                                <li><Link href={'/home_'} className={clsx('text-lg hover:text-green-500', {'text-green-500': pathname === '/home_'})}>Home</Link></li>
                                <li><Link href={'#'} className='text-lg hover:text-green-500'>New</Link></li>
                                <li><Link href={'#'} className='text-lg hover:text-green-500'>Shopping Bags</Link></li>
                                <li><Link href={'#'} className='text-lg hover:text-green-500'>Backpack Bags</Link></li>
                                <li><Link href={'#'} className='text-lg hover:text-green-500'>Cosmetic Bags</Link></li>
                                <li><Link href={'#'} className='text-lg hover:text-green-500'>About Us</Link></li>
                                <li><Link href={'#'} className='text-lg hover:text-green-500'>Contact</Link></li>
                            </ul>
                            <div className='lg:hidden md:block sm:block block'>
                                <img onClick={handleDisplayMenu} className='w-[40px] h-[40px] cursor-pointer' src="/images/icons8-menu-50.svg" alt="" />
                            </div>
                        </div>
                        <div className=' float-right '>
                            <Link href={'#'} > <img className='w-[40px] h-[40px]' src="/images/cart.svg" alt="" /> </Link>
                        </div>
                    </div>
                </div>
                <div className={`absolute z-10 left-0 bg-white h-full p-8 ${isDisplayMenu ? 'block' : 'hidden'}`}>
                    <ol className='space-y-2'>
                    <li><Link href={'/home_'} className={clsx('text-lg hover:text-green-500', {'text-green-500': pathname === '/home_'})}>Home</Link></li>
                        <li><Link href={'#'} className='text-lg hover:text-green-500'>New</Link></li>
                        <li><Link href={'#'} className='text-lg hover:text-green-500'>Shopping Bags</Link></li>
                        <li><Link href={'#'} className='text-lg hover:text-green-500'>Backpack Bags</Link></li>
                        <li><Link href={'#'} className='text-lg hover:text-green-500'>Cosmetic Bags</Link></li>
                        <li><Link href={'#'} className='text-lg hover:text-green-500'>About Us</Link></li>
                        <li><Link href={'#'} className='text-lg hover:text-green-500'>Contact</Link></li>
                    </ol>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
      </main>
    );
}