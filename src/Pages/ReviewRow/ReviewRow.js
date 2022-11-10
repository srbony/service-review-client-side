import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ReviewRow = ({ reviewsdata, handleDelete, handleUpdate }) => {
    const { _id, review, status, serviceName } = reviewsdata;
    const [serviceReview, setServiceReview] = useState({});


    useEffect(() => {
        fetch(`https://service-review-server-side-orcin.vercel.app/reviews/${review}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
    }, [review]);







    return (
        <tr>
            <th>
                <label>
                    {/* <input type="checkbox" className="checkbox" /> */}
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">


                    <div>
                        <div className="font-bold">{serviceName}</div>

                    </div>
                </div>
            </td>
            <td>
                {review.text}
                <br />

            </td>

            <th>
                <button
                    onClick={() => handleUpdate(_id)}

                    className="btn btn-ghost btn-xs">{status ? status : 'Details'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;