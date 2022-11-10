import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTittle from '../../hooks/useTittle';
import ReviewRow from '../ReviewRow/ReviewRow';

const MyReviews = () => {
    useTittle('MyReviews')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    // const url = `http://localhost:5000/reviews?email=${user.email}`
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);


    const handleDelete = id => {
        const procced = window.confirm('Are you sure want to delete');
        if (procced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining)
                    }
                })
        }

    }
    const handleUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'updated' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id);
                    const updateing = reviews.find(rev => rev._id !== id);
                    updateing.status = 'updated';
                    const newUpdate = [updateing, ...remaining];
                    setReviews(newUpdate);
                }
            })
    }




    return (

        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-1/2">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Reviews</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(reviewsdata => <ReviewRow
                                key={reviewsdata._id}
                                reviewsdata={reviewsdata}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}

                            ></ReviewRow>)
                        }

                    </tbody>



                </table>
            </div>
        </div>

    );
};

export default MyReviews;