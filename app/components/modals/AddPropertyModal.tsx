'use client';
import Image from "next/image";


import { ChangeEvent, useState } from "react";
import Modal from './Modal'
import CustomButton from "../forms/CustomButton";
import Categories from "../addProperty/Categories";


import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import SelectCountry, { SelectCoutryValue } from "../forms/SelectCountry";

import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
import { error } from "console";
const AddPropertyModal = () => {
    
    
    //
    //states
    const [currentStep, setCurrentStep] =useState(1);
    const [errors, setErrors]= useState<string[]>([])
    const [dataCategory, setDataCategory]=useState('')
    const [dataTitle, setDataTitle] =useState('')
    const [dataDescription, setDataDescription] = useState('')
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setBedRooms]= useState('')
    const [dataBathrooms, setBathrooms]= useState('')
    const [dataGuest, setdataGuest]= useState('')
    const [dataCountry, setDataCountry]= useState<SelectCoutryValue>();
    const [dataImage,setDataImagen]= useState<File| null>(null)



    //
    //

    const addPropertyModal = useAddPropertyModal();
    const router= useRouter()

    //
    // set Datas
    const setCategory= (categories:string)=>{
        setDataCategory(categories)
    }

    const setImage= (event:ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files && event.target.files.length>0){
            const tmbImage=event.target.files[0];

            setDataImagen(tmbImage);
        }
    }
    //
    //submit

    const submitForm= async () => {
   

        if(
            dataCategory&&
            dataTitle &&
            dataDescription&&
            dataPrice&&
            dataCountry&&
            dataImage
        ){
        const formData= new FormData();
        formData.append('category',dataCategory);     
        formData.append('title',dataTitle);     
        formData.append('description',dataDescription);     
        formData.append('price_per_night',dataPrice);     
        formData.append('bedrooms',dataBedrooms);     
        formData.append('bathrooms',dataBathrooms);
        formData.append('guest',dataGuest);     
        formData.append('country',dataCountry.label);     
        formData.append('country_code',dataCountry.value);     
        formData.append('image',dataImage);   
        
        const response = await apiService.post('/api/properties/create/',formData)

        console.log('')

            if (response.success){
                console.log('Succes Siiu')
                addPropertyModal.close()
                router.push('/')
            } else {
                console.log('Error');

                const tmpError:string[] = Object.values(response).map((error:any)=>{
                    return error
                })
                setErrors(tmpError)
            }
        }
    }


    const content =(
        <>
        {currentStep==1? (
            <>
            <h2 className="mb-6 text-2xl"> choose category </h2>

          
            
            <Categories
            dataCategory={dataCategory}
            setCategory={(category) =>setCategory(category)

            }
            />
            
            <CustomButton
                label='Next'
                onClick={() => setCurrentStep(2)}
            />
        
        </>
    ):currentStep==2? (
        <>
            <h2 className="mb-6 text-2xl"> DEscribe YOUR PLACE</h2>

            <div className="pt-3 pb-6 space-y-4">
                <div className="flex flex-col space-y-2">
                    <label>Title</label>
                    <input type="text"
                    value={dataTitle}
                    onChange={(e)=> setDataTitle(e.target.value)} 
                    className="w-full p-4 border border-gray-600 rounded-xl" />

                </div>
            </div>

            <div className="pt-3 pb-6 space-y-4">
                <div className="flex flex-col space-y-2">
                    <label>Description</label>
                    <textarea
                 
                    value={dataDescription}
                    onChange={(e)=> setDataDescription(e.target.value)} 
                    className="w-full h-[200px] p-4 border border-gray-600 rounded-xl" >
                    </textarea>

                </div>
            </div>

            <CustomButton
                label='Previus'
                className='mb-2 bg-black hover:bg-gray-800'
                onClick={() => setCurrentStep(1)}
            />
        
            <CustomButton
                label='Next'
                onClick={() => setCurrentStep(3)}
            />
        
        </>
       
    ): currentStep==3?(
      <>
            <h2 className="mb-6 text-2xl"> DETAIls</h2>

            <div className="pt-3 pb-6 space-y-4">
                <div className="flex flex-col space-y-2">
                    <label>Prie  per night</label>
                    <input type="number"
                    value={dataPrice}
                    onChange={(e)=> setDataPrice(e.target.value)} 
                    className="w-full p-4 border border-gray-600 rounded-xl" 
                    />

                </div>
                <div className="flex flex-col space-y-2">
                    <label>BedRooms</label>
                    <input type="number"
                    value={dataBedrooms}
                    onChange={(e)=> setBedRooms(e.target.value)} 
                    className="w-full p-4 border border-gray-600 rounded-xl" 
                    />

                </div>

                <div className="flex flex-col space-y-2">
                    <label>Bathrooms</label>
                    <input type="number"
                    value={dataBathrooms}
                    onChange={(e)=> setBathrooms(e.target.value)} 
                    className="w-full p-4 border border-gray-600 rounded-xl" 
                    />

                </div>
                <div className="flex flex-col space-y-2">
                    <label>Maximun number of Guest</label>
                    <input type="number"
                    value={dataGuest}
                    onChange={(e)=> setdataGuest(e.target.value)} 
                    className="w-full p-4 border border-gray-600 rounded-xl" 
                    />

                </div>

            </div>

             <CustomButton
                label='Previus'
                className='mb-2 bg-black hover:bg-gray-800'
                onClick={() => setCurrentStep(2)}
            />
        
            <CustomButton
                label='Next'
                onClick={() => setCurrentStep(4)}
            />
      </>
    ): currentStep==4?(
        <>
            <h2 className="mb-6 text-2xl"> Location</h2>

            <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
            value={dataCountry}
            onChange={(value)=> setDataCountry(value as SelectCoutryValue)}
            />
            </div>

            <CustomButton
                label='Previus'
                className='mb-2 bg-black hover:bg-gray-800'
                onClick={() => setCurrentStep(3)}
            />
        
            <CustomButton
                label='Next'
                onClick={() => setCurrentStep(5)}
            />

            </>
     ): (
        <>
              <h2 className="mb-6 text-2xl"> Image</h2>
  
              <div className="pt-3 pb-6 space-y-4">
                <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                    <input
                    
                    type="file" 
                    accept="image/*"
                    onChange={setImage}
                    />
                </div>
                {dataImage &&(
                    <div className="w-[200px] h-[150px] relative">
                        <Image
                            fill
                            alt="Uploaded image"
                            src={URL.createObjectURL(dataImage)}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                )}
            </div>

                    {errors.map((error, index)=>{
                        return (
                        <div
                        key={index}
                        className="p-5 mb-4 bg-airbnb text-white rounded-xl opacity-80">

                            {error}

                        </div>
                        )
                    })}
                <CustomButton
                label='Previus'
                className='mb-2 bg-black hover:bg-gray-800'
                onClick={() => setCurrentStep(4)}
            />
        
            <CustomButton
                label='Next'
                onClick={submitForm}
            />

                </>
    )}
    </>
    )
    return ( 
        <>
        <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label="add Property"
        content={content}
        />
        </>
    )
}
export default AddPropertyModal;