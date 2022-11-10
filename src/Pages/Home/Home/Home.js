import React from 'react';
import useTittle from '../../../hooks/useTittle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useTittle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;