import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from '../ReviewRow/ReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    // const url = `http://localhost:5000/reviews?email=${user.email}`
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])



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

                            ></ReviewRow>)
                        }

                    </tbody>



                </table>
            </div>
        </div>

    );
};

export default MyReviews;