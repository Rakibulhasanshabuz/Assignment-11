import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Services from '../Services/Services';
import Visited from '../Visited/Visited';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Visited></Visited>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;