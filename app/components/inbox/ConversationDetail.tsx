'use client';


import CustomButton from "../forms/CustomButton"

const ConversationDetail = () => {

    return( 

            <>
        <div className="max-h[400px] overflow-auto flex  flex-col space-y-4"> 
            <div className="w-[80] py-4 px-6 rounded-xl bg-gray-200">
                <p className="font-bold text-gray-500">JOen joas </p>
               
                <p> aksdjkasjd</p>
           
            </div>
            <div className="w-[80] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                <p className="font-bold text-gray-500">Alvaro </p>
               
                <p> aksdjkasasdajd</p>
           
            </div>

            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-3 rounded-xl">
        <input type="text"
            placeholder="Type your mesasae"
            className="w-full p-2 bg-gray-200 rounded-xl"
        />

        <CustomButton
         label ="send"
         onClick={()=> console.log('clicked')}
         className="w-[100px]"

        />

       
            </div>

            </>
    )
}

export default ConversationDetail