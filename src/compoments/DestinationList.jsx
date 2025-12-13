import React from 'react';

import DestinationCard from './DestinationCard';
import { useLoaderData } from 'react-router';

const DestinationList = () => {
    const data = useLoaderData();

    return (
        <div className='w-full  mx-auto  flex flex-col justify-center items-center py-10'>

            <h2 className="text-center text-4xl pb-4">Choose Your Destination</h2>
            <p className="text-center max-w-xl pb-6">Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
            
        {
            data.map((item) => (<DestinationCard key={item.id} item= {item}></DestinationCard>))
        }
          

            </div>
        </div>
    );
};

export default DestinationList;