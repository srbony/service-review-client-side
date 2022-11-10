import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ReviewRow = ({ reviewsdata }) => {
    const { _id, review, serviceName } = reviewsdata;
    const [serviceReview, setServiceReview] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${review}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
    }, [review]);


    const handleDelete = id => {
        const procced = window.confirm('Are you sure want to delete');
        if (procced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }




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
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>

            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
        </tr>
    );
};

export default ReviewRow;