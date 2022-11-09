import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h2>my reviews</h2>
        </div>
    );
};

export default MyReviews;