import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AllServiceCard from '../AllServiceCard/AllServiceCard';
import ServiceCard from '../Services/ServiceCard';

const AllServices = () => {
    const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
                       allService.map(services=> <AllServiceCard
                       key={services.id}
                       services={services}
                       
                       ></AllServiceCard>)
                    }
                    
                    
                    {/* {
                        allService.map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>)
                    } */}
                </div>


            </div>
            <div className='text-center mb-4'>
                
            </div>
        </div>
    );
};

export default AllServices;