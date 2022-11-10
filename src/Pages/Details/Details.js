import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTittle from '../../hooks/useTittle';

const Details = () => {
    useTittle('Details')
    const { _id, review, name, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handelReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unauthorized';
        const name = form.name.value;
        const message = form.message.value;
        console.log(email, name, message);

        const reviewdata = {
            serviceId: _id,
            text: review.text,
            review,
            serviceName: review.name,
            email,
            message

        }

        fetch('https://service-review-server-side-orcin.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('added review');
                    form.reset();
                }

                console.log(data)
            })
            .catch(error => console.error(error));



    }
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

            <section className='text-center mx-auto my-4'>
                <form onSubmit={handelReview}>
                    <section className='card card-compact w-96 bg-base-100 shadow-xl my-8 mx-auto '>
                        <h1 className='text-2xl'>Review</h1>

                        <input type="text" placeholder='your email ' defaultValue={user?.email} readOnly />
                        <h2>{review.name}</h2>
                        <figure><img src={review.picture} className="rounded-lg" alt="Foods" /></figure>

                        <p>{review.text}</p>
                    </section>

                    <input type="email" name="email" placeholder="your email" className="input input-bordered my-2 w-1/2 max-w-xs" defaultValue={user?.email} readOnly />
                    <br />
                    <input type="text" name="name" placeholder="your name" className="input input-bordered w-1/2 max-w-xs" />
                    <br />
                    <textarea className="textarea textarea-bordered my-2" placeholder="your review" name="message"></textarea>
                    <br />
                    <input type="submit" value="place your review" />
                </form>
            </section>
        </div>
    );
};

export default Details;