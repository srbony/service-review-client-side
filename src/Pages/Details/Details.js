import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Details = () => {
    const { _id, review, name, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div>
            <section>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">

                    <div className="card-body">
                        <figure><img src={img} className="rounded-lg" alt="Foods" /></figure>
                        <h2 className="card-title text-center">{name}</h2>
                        <p className='text-2xl text-blue-600'>${price}</p>
                        <p>{description}</p>



                    </div>

                </div>
            </section>
        </div>
    );
};

export default Details;