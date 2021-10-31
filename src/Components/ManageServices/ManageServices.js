import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    const handleDelete = id => {
        alert('Do You Want to Delete This Service?')
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining);
            }
        })
    }

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="row g-5 service-container">
            {
                services.map(service => <ManageService
                    key={service._id}
                    service={service}
                    handleDelete={handleDelete}
                ></ManageService>)
            }
            </div>
        </div>
    );
};

export default ManageServices;