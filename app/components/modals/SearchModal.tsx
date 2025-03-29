'use client'

import Modal from "./Modal"
import { useState } from "react"
import useSearchModal from '@/app/hooks/useSearchModal'
import SelectCountry,{SelectCoutryValue} from "../forms/SelectCountry"
import CustomButton from "../forms/CustomButton"
import {  Range } from "react-date-range"

import DatePicker from "../forms/Calendar"


const initialDateRange={
    startDate:new Date(),
    endDate: new Date(),
    key:'selection'
}




const SearchModal =() =>{
    let content = (<></>)
    const searchModal= useSearchModal()
    const [country, setCountry] = useState<SelectCoutryValue>()
    const [dateRange, setDateRange] = useState<Range>(initialDateRange)


    //
    // set date range
    
    const _setDateRange = (selection:Range) =>{
        if ( searchModal.step ==='checkin'){
            searchModal.open('checkout')

        } else if (searchModal.step === 'checkout') {
            searchModal.open('detail')

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

    if (searchModal.step =='location'){
        content = contentLocation
    } else if (searchModal.step=='checkin'){
        content = contentChekin
    }
     else if (searchModal.step=='checkout'){
        content = contentChekout
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