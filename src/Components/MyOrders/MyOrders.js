import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://creepy-phantom-09765.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1 className="text-success">My all Orders</h1>
            <div className='row'>
            {
                orders.map(order => <Service
                service = {order}
                key = {order._id}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default MyOrders;