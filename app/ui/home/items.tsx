"use client"

import Link from 'next/link';
import { fetchItems } from '@/app/lib/data';
import { Items } from '@/app/lib/definitions';

export async function ListItems({items, }:{items: Items[]}){
    return(
        <div className='flex justify-center'>
            <div className='container max-w-[1200px] py-8'>
                <div className='flex justify-center gap-10 flex-wrap'>
                    {items.map((item, i) =>(
                        <Link href={'#'}> <Item data={{name: item.name, price: `Price ${item.price} EUR`, url: item.url}}></Item> </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Item({data}){
    return(
        <div className='grid justify-center border-spacing-4 text-center'>
            <div className=' overflow-hidden w-[260px] h-[220px]'>
                <img className='hover:scale-110 overflow-hidden' src={data.url} alt="" />
            </div>
            <div>
                <h2 className='text-xl font-semibold mt-3 mb-[10px]'>{ data.name }</h2>
            </div>
            <div>
                <span className='text-base m-0 p-0'>{ data.price }</span>
            </div>
        </div>
    )
}