import React from 'react';
import { useLoaderData } from 'react-router';
import DestinationLeft from '../compoments/DestinationLeft';
import DestinationRight from '../compoments/DestinationRight';


const Destination = () => {
    const data = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className='flex flex-col lg:flex-row gap-8'>
            
            <aside className='w-full lg:w-[55%]'>
                <div className="">
                    {
                        data.map((items) => (
                            <DestinationLeft items = {items} key={items.id}></DestinationLeft>
                        ))
                    }
                </div>
            </aside>

            <aside className='w-full lg:w-[40%]'>
                <div className="lg:sticky lg:top-24 h-[400px] lg:h-[calc(100vh-120px)]">
                    <DestinationRight/>
                </div>
                
            </aside>
            
        </div>
        </div>
    );
};

export default Destination;