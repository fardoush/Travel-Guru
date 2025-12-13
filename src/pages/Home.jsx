import React from 'react';
import Banner from '../compoments/Banner';
import { useLoaderData } from 'react-router';
import DestinationCard from '../compoments/DestinationCard';
import About from '../compoments/About';
// import Destination from './Destination';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
           <Banner/>
           
           {/* Start About Section  */}
           <About/>
           {/* End About Section  */}
           {/* Start Destination Section  */}
           <section className="py-20">
             <div className='w-full  mx-auto  flex flex-col justify-center items-center'>

             <h2 className="text-center text-4xl pb-4">Choose Your Destination</h2>
            <p className="text-center max-w-xl pb-6">Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
            
        {
            data.map((item) => (<DestinationCard key={item.id} item= {item}></DestinationCard>))
        }
          

            </div>
        </div>
           </section>
        </div>
    );
};

export default Home;