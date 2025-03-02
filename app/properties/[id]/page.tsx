import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
    return (

<main className="max-w-[1500px] mx-auto px-6 pb-7">
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative ">
        <Image fill
            src='/beach1.jpg'
            className="object-cover w-full h-full"
            alt= "beach sou"
            />
            </div>
            

    <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className=" py-6 pr-6 col-span-3">
             <h1 className="mb-4 text-4xl" >prorty name</h1>
        
            <span className="mb-6 block text-lg text-gray-600"> 
            4 guest - 2 bedrooms - 1 bathroom
             </span>

             <hr />

             <div className=" py-6 flex items-center space-x-4">
                <Image 
                src="/perfil1.jpg"
                alt="perfil"
                width={150}
                height={150}
                className="rounded-full"
               />

                <p> <strong>
                    Pousmouche
                     </strong> is your host</p>

             </div>
             <hr />

            <p className="mt-6 text-lg"> 
                
Vosmet vetat res coelica
Iam premet letum vastum te
Vae gnari sunt suimet estis vestris quis in oculis
ごやのすゑなぞながされ
Sapientes feroces vetitum per currunt pelliciuntur in nefas
Tarda leti et necessitas semota
Mors necessitudinis corripiet gradum
Iugis solum ipsius nihil debet
Credas in nullum qua sunt edicta inutile cave vide qua sunt edicta inutile
Dominatus
Dominatus
Dominatus
ごやのすゑなぞながされ
Vae eis cui simulacrum conlaudent in solio inanis
Mirent augeant fixere sapientes conlaudent
Necessitas semota et necessitudinis corripiet gradum
Nunquam genitus desiderem
            </p>
        </div>

        <ReservationSidebar></ReservationSidebar>

    </div>

    
</main>

    )
}
export default PropertyDetailPage;