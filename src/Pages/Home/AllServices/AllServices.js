import React, { useState } from 'react';
import { useEffect } from 'react';

import AllServiceCard from '../AllServiceCard/AllServiceCard';
import image from '../../../assets/banner/FoodServices.jpg';


const AllServices = () => {
    const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-side-orcin.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])
    return (
        <div>
            <div>
                <div>
                    <p className="text-3xl font-bold text-blue-500 text-center">
                        All Services
                    </p>
                </div>
                <div className='grid gap-4 mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {
                        allService.map(services => <AllServiceCard
                            key={services.id}
                            services={services}

                        ></AllServiceCard>)
                    }



                </div>


            </div>
            <div className='text-center mb-4'>
                <section className='my-8'>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Food services News!</h1>
                                <p className="py-6">The food service industry encompasses all of the activities, services, and business functions involved in preparing and serving food to people eating away from home.This includes all types of restaurants from fine dining to fast food. It also includes institutional food operations at locations such as schools and hospitals, as well as other specialty vendors such as food truck operators and catering businesses.</p>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AllServices;