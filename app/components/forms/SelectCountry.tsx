'use client';

import Select from 'react-select';

import useCountries from '../useCountries';


export type SelectCoutryValue= {
    label:string
    value:string
}

interface SelectCountryProps{
    value?: SelectCoutryValue;
    onChange:(value:SelectCoutryValue)=> void

}

const SelectCountry: React.FC<SelectCountryProps> = ({
    value,
    onChange
})=>{
    const {getAll} = useCountries()
    return(

        <>
        <Select
        isClearable
        placeholder='Anywhere'
        options={getAll()}
        value={value}
        onChange={(value)=> onChange(value as SelectCoutryValue)}
        />

       
        </>
    )
}

export default SelectCountry