import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, description, price, img, _id} = service;
    return (
        <div className="g-4 col-lg-4 col-md-6 col-sm-12 service pb-3">
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <h3>Price: {price}</h3>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn regester-btn">Booking for {name}</button>
            </Link>
        </div>
    );
};

export default Service;