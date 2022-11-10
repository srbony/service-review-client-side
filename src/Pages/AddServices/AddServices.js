import React from 'react';

const AddServices = () => {

    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        const serviceName = form.serviceName.value;
        const email = form.email.value;
        const message = form.message.value;
        const addServices = {
            name,
            serviceName,
            email,
            message
        }

        fetch('https://service-review-server-side-orcin.vercel.app/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addServices)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    alert('service added successfully')
                }
                form.reset()
            })
            .catch(error => console.error(error))
    }



    return (
        <form onSubmit={handleAddServices}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input type="text" name="serviceName" placeholder="serviceName" className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />

                <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Type Your review"></textarea>
                <br />
                <input className='btn my-2' type="submit" value="Add Services" />
            </div>
        </form>
    );
};

export default AddServices;