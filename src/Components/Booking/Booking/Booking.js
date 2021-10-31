import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const history = useHistory();

 
    const {serviceKey} = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://creepy-phantom-09765.herokuapp.com/services/${serviceKey}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])

    const handleDelete = id => {
        alert('Do You Want to Delete This Service')
        const url = `https://creepy-phantom-09765.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Your Service Has been Deleted Successfully')
                history.push('/')
            }
        })
    }
    

    const handleOrder = (data) => {
        const order = {
            name : data.name,
            img : data.img,
            description: data.description,
            price: data.price
        }
        axios.post('https://creepy-phantom-09765.herokuapp.com/orders', order)
        .then(res => {
            if(res.data.insertedId){
              alert('Your Order Place SuccessFully');
            }
          })
    }
    const {name, img, description, price, _id} = service; 
    return (
        <div>
            <h2 className="my-5"><span className="text-danger">Your Booking Hotel is:</span> {serviceKey}<span className="text-info">({name})</span></h2>
            <div className="d-flex justify-content-center mb-4">
            <div>
            <Row xs={1} md={3} className="g-4">
            <Col className="serviceData-container">
            <Card style={{height: "700px", width: "600px"}}>
                <div className="cart-img">
                <Card.Img style={{width: "500px"}} variant="top" src={img} />
                </div>
                <Card.Body>
                <Card.Title>Name: <span className="text-primary">{name}</span></Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Title>Price: {price}</Card.Title>
                <div className="d-flex justify-content-around">
                <button onClick={() => handleDelete(service._id)} className="btn btn-danger">delete</button>
                <Link to={`/placeOrder/${_id}`}>
                <button onClick={() => handleOrder(service)} className="btn btn-success">Place Order</button>
                </Link>
                </div>
                </Card.Body>
                </Card>
        </Col>
            </Row>
            
            </div>
            </div>
        </div>
    );
};

export default Booking;