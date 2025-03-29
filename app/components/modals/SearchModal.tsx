'use client'

import Modal from "./Modal"
import { useState } from "react"
import useSearchModal, { SearchQuery } from '@/app/hooks/useSearchModal'
import SelectCountry,{SelectCoutryValue} from "../forms/SelectCountry"
import CustomButton from "../forms/CustomButton"
import {  DateRange, Range } from "react-date-range"

import DatePicker from "../forms/Calendar"


const initialDateRange={
    startDate:new Date(),
    endDate: new Date(),
    key:'selection'
}




const SearchModal =() =>{
    let content = (<></>)
    const searchModal= useSearchModal()
    const [numGuest, setNumGuest] = useState<string>('1')
    const [numBedrooms, setNumbedrooms] = useState<string>('0')
    const [country, setCountry] = useState<SelectCoutryValue>()
    const [numBathrooms, setNumbathrooms] = useState<string>('0')
    const [dateRange, setDateRange] = useState<Range>(initialDateRange)

//

const closeAndSearch = ()=> {
    const newSearchQuery: SearchQuery={
        country:country?.label,
        checkIn:dateRange.startDate,
        checkOut:dateRange.endDate,
        guests:parseInt(numGuest),
        bedrooms:parseInt(numBedrooms),
        bathrooms:parseInt(numBathrooms),
        category:''
    }

    searchModal.setQuery(newSearchQuery)
    searchModal.close()

}
    //
    // set date range
    
    const _setDateRange = (selection:Range) =>{
        if ( searchModal.step ==='checkin'){
            searchModal.open('checkout')

        } else if (searchModal.step === 'checkout') {
            searchModal.open('details')

        }
        setDateRange(selection);
    }



    const contentLocation = (
        <>
        <h2 className="mb-6 text-2xl">para onde vamos?</h2>
       <SelectCountry
        value={country}
        onChange={(value)=>setCountry(value as SelectCoutryValue)}
       ></SelectCountry>

        <div className="mt-6 flex flex-row gap-4">
            <CustomButton
            label='Cher in date'
            onClick={()=> searchModal.open('checkin')}
            >
            </CustomButton>
        </div>
        </>
    )

    const contentChekin =(
        <>
    <h2 className="mb-6 text-2xl">when do you want to check in?</h2>
      
      <DatePicker
      value={dateRange}
      onChange={(value)=> _setDateRange(value.selection )}
      ></DatePicker>

    <div className="mt-6 flex flex-row gap-4">
            <CustomButton
            label=' <- location '
            onClick={()=> searchModal.open('location')}
            >
            </CustomButton>
 
            <CustomButton
            label='Cher out date =>'
            onClick={()=> searchModal.open('checkout')}
            >
            </CustomButton>
        </div>

      
        </>
    )

    const contentChekout =(
        <>
    <h2 className="mb-6 text-2xl">when do you want to check out?</h2>
      
      
      <DatePicker
      value={dateRange}
      onChange={(value)=> _setDateRange(value.selection )}
      ></DatePicker>

    
    <div className="mt-6 flex flex-row gap-4">
            <CustomButton
            label=' <- Cher in date '
            onClick={()=> searchModal.open('checkin')}
            >
            </CustomButton>
 
            <CustomButton
            label='Details =>'
            onClick={()=> searchModal.open('details')}
            >
            </CustomButton>
        </div>

      
        </>
    )

    const contendtDetails =(
        <>
    <h2 className="mb-6 text-2xl">Details</h2>
      
      
     <div className="space-y-4">
        <div className="space-y-4">
            <label >number of guest:</label>
            <input 
            type="number"
            min='1'
            value={numGuest}
            placeholder="Number of guest"
             onChange={(e)=> setNumGuest(e.target.value)}
             className="w-full h-14 px-4 border border-gray-300 rounded-xl" />
             
            
        </div>
        <div className="space-y-4">
            <label >number of bedrooms:</label>
            <input 
            type="number"
            min='1'
            value={numBedrooms}
            placeholder="Number of bedrooms"
             onChange={(e)=> setNumbedrooms(e.target.value)}
             className="w-full h-14 px-4 border border-gray-300 rounded-xl" />
             
            
        </div>

        <div className="space-y-4">
            <label >number of bathrooms:</label>
            <input 
            type="number"
            min='1'
            value={numBathrooms}
            placeholder="Number of bathrooms"
             onChange={(e)=> setNumbathrooms(e.target.value)}
             className="w-full h-14 px-4 border border-gray-300 rounded-xl" />
             
            
        </div>

     </div>
    
    <div className="mt-6 flex flex-row gap-4">
            <CustomButton
            label=' <- Chech oiut date '
            onClick={()=> searchModal.open('checkout')}
            >
            </CustomButton>
 
            <CustomButton
            label='Search =>'
            onClick={closeAndSearch}
            >
            </CustomButton>
        </div>

      
        </>
    )

    if (searchModal.step =='location'){
        content = contentLocation
    } else if (searchModal.step=='checkin'){
        content = contentChekin
    }
     else if (searchModal.step=='checkout'){
        content = contentChekout
    } else if (searchModal.step =='details'){
        content = contendtDetails
    }
    return(
        <Modal
        label="Searcg"
        content={content}
            isOpen={searchModal.isOpen}
            close={searchModal.close}


        />
    )
}

export default SearchModal