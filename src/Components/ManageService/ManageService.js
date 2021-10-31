import React from 'react';
import { Link } from 'react-router-dom';
import './ManageService.css'

const ManageService = ({service, handleDelete}) => {
    const {name, description, price, img, _id} = service;

    
    return (
        <div className="col-lg-4 col-sm-6 col-12 service pb-3">
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <h3>Price: {price}</h3>
            <p>{description}</p>
                <button onClick={() => handleDelete(service._id)} className="btn regester-btn">Delete {name}</button>
        </div>
    );
};

export default ManageService;