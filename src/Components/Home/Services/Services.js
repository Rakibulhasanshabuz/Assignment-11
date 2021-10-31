import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect (() => {
        fetch('https://creepy-phantom-09765.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="m-5 p-5">
            <h1 className="text-warning my-5">Our Services</h1>
            <div className="row g-5 service-container">
            {
                services.map(service => <Service
                key={service._id}
                service={service} 
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;