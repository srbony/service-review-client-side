import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useTittle from '../../../hooks/useTittle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTittle('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div>
                <div>
                    <p className="text-3xl font-bold text-blue-500 text-center">
                        Services
                    </p>
                </div>
                <div className='grid gap-4 mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.slice(0, 3).map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>


            </div>
            <div className='text-center mb-4'>
                <Link to='/allservices'>
                    <button className="btn btn-outline btn-primary w-1/2 text-2xl">Sea All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;
