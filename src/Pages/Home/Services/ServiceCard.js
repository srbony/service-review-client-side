import React from 'react';

const ServiceCard = ({ service }) => {

    const { name, img } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Foods" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>


            </div>
          
        </div>
    );
};

export default ServiceCard;