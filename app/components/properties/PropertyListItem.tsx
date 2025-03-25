import Image from "next/image";

import { PropertyType } from './PropertyList';
import { useRouter } from "next/navigation";

interface Propertyprops {
    property:PropertyType

}

const PropertyListItem: React.FC<Propertyprops> = ({
property
}) => {
    const router = useRouter()
    return ( 
        <div className="cursor-pointer"
        onClick={() => router.push(`/properties/${property.id}`)}>
            <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image
            fill 
            src={property.image_url}
            sizes="(max-width:768px) 768px, (max-width: 1200px):768px, 768px"
            className="hover:scale-110 object-cover transition h-full w-full"
            alt="beach house"
            />
            </div>

            <div className="mt-2">   
                <p className="text-lg font-bold">{property.title}</p>
                </div>
            <div className="mt-2">   
                <p className="text-sm text-gray-500">${property.price_per_night}</p>
                </div>
             
        </div>
    )
}

export default PropertyListItem;