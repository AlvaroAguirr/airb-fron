'use client' 

import { useState } from "react";
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";

import Image from "next/image";

const Categories = () =>  {

    const searchModal=useSearchModal()
    const [category,setCategory]= useState('')

    const _setCategory= (_category:string) =>{
        setCategory(_category);

        const query: SearchQuery = {

            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
    }
    searchModal.setQuery(query)
}
    return (
        <div className=" p-3 cursor-pointer pb-6 flex items-center space-x-12 ">
            <div
                  onClick={()=>_setCategory('')}      
                  className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='' ? 'border-black': 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn-category.jpg"
                    alt="Categoru - beach"
                    width={20}
                    height={20}
                    />
                    <span className="text-xs ">all</span>
            </div>
            <div
                  onClick={()=>_setCategory('Beach')}      
                  className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='Beach' ? 'border-black': 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn-category.jpg"
                    alt="Categoru - beach"
                    width={20}
                    height={20}
                    />
                    <span className="text-xs ">Beach</span>
            </div>
            
            <div 
               onClick={()=>_setCategory('Village')}   
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='Village' ? 'border-black': 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn-category.jpg"
                    alt="Categoru - beach"
                    width={20}
                    height={20}
                    />
                    <span className="text-xs ">Vilas</span>
            </div>
            
            <div 
               onClick={()=>_setCategory('Cabins')}   
               className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='Cabins' ? 'border-black': 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn-category.jpg"
                    alt="Categoru - beach"
                    width={20}
                    height={20}
                    />
                    <span className="text-xs ">cabains</span>
            </div>
            
            <div
               onClick={()=>_setCategory('Tiny homes')}   
               className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category=='Tiny homes' ? 'border-black': 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image src="/icn-category.jpg"
                    alt="Categoru - beach"
                    width={20}
                    height={20}
                    />
                    <span className="text-xs ">Tiny homes</span>
            </div>
            
        </div>
    )
}

export default Categories;