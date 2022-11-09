import React from 'react';

const AllServiceCard = ({ services }) => {
    const { _id, name, img, price, description } = services;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="foods" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{description.slice(0, 100) + '...'}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;