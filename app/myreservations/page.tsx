import Image from "next/image"
const MyreservationsPage = () => {
    return (

    <main className="max-w-[1500px] mx-auto px-6 pb-6">


    <h1 className=" my-6 text-2xl">my reservarions</h1>

    <div className="space-y-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                    fill
                    src="/inzuma1.jpg"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="beachjouse"
                    ></Image>
                </div>
            </div>
            <div className="col-span-1 md:col-span-3 ">
                <h2 className="mb-4 text-xl">propertu ane</h2>

                <p className="mb-2"><strong>Check in date:</strong>12/12/23</p>
                <p className="mb-2"><strong>Check out date:</strong>12/12/26</p>

                <p className="mb-2"><strong>number of nigth:</strong>2</p>
                <p className="mb-2"><strong>total proce:</strong>$800</p>

                <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                    Go to property
                </div>
            </div>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                    fill
                    src="/inzuma1.jpg"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="beachjouse"
                    ></Image>
                </div>
            </div>
            <div className="col-span-1 md:col-span-3 ">
                <h2 className="mb-4 text-xl">propertu ane</h2>

                <p className="mb-2"><strong>Check in date:</strong>12/12/23</p>
                <p className="mb-2"><strong>Check out date:</strong>12/12/26</p>

                <p className="mb-2"><strong>number of nigth:</strong>2</p>
                <p className="mb-2"><strong>total proce:</strong>$800</p>

                <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                    Go to property
                </div>
            </div>
        </div>
    </div>

    
    </main>
    ) 
}


export default MyreservationsPage;

