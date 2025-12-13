import React from 'react';



const DestinationCard = ({item}) => {
    const {image,destinationTitle} = item;

    return (
        <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                    <img src={image} alt="" className="w-full h-56  object-cover transition-transform duration-500 group-hover:scale-110 " />
                    {/* Hover Text  */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-white text-2xl font-semibold">
                        {destinationTitle}
                    </div>
                    </div>
                    
                </div>
    );
};

export default DestinationCard;