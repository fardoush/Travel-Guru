import React from "react";

const DestinationLeft = ({ items }) => {
  const {image,title,guests,bedrooms,beds,baths,amenities,cancellation,rating,reviews } = items;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header  */}
      <p class="text-sm text-gray-500 mb-1">252 stays · Apr 13–17 · 3 guests</p>
      <h1 class="text-2xl md:text-3xl font-bold mb-6">Stay in Cox's Bazar</h1>
      {/* <!-- Listing Wrapper --> */}
      <div class="space-y-6">
        {/* <!-- Card --> */}
        <div class="card card-side bg-base-100 shadow-md flex-col md:flex-row">
          <figure class="md:w-1/3">
            <img
              src={image}
              class="h-56 w-full object-cover rounded-2xl"
            />
          </figure>
          <div class="card-body md:w-2/3">
            <h2 class="card-title">
              {title}
            </h2>
            <p class="text-sm text-gray-500">
              {guests} guests · {bedrooms} bedrooms · {beds} beds · {baths} baths
            </p>
            <p class="text-sm">{amenities }</p>
            <p class="text-sm text-green-600">
              {cancellation }
            </p>

            <div class="flex justify-between items-end mt-4">
              <span class="flex items-center gap-1 text-sm">
                <span class="text-orange-500">★</span>{rating} ({reviews})
              </span>
              <div class="text-right">
                <p class="font-bold text-lg">
                  $34 <span class="text-sm font-normal">/night</span>
                </p>
                <p class="text-xs text-gray-400 line-through">$167 total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationLeft;
