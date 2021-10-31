import React from 'react';
import './Facilities.css'

const Facilities = () => {
    return (
        <div className="container my-5">
            <h1 className="text-info">Our Facilities</h1>
            <div className="row mt-5">
          <div className="col-md-4">
          <div style={{width: '18rem'}}>
                <div className="card-header header">
                <i className="fas fa-campground"></i> <b>Outdoors</b>
                </div>
                <ul className="li-container">
                    <li><i className="fas fa-check"></i> Outdoor furniture</li>
                    <li><i className="fas fa-check"></i> Beachfront</li>
                    <li><i className="fas fa-check"></i> Terrace</li>
                    <li><i className="fas fa-check"></i> Sun deck</li>
                    <li><i className="fas fa-check"></i> Private beach area</li>
                </ul>
            </div>
            </div> 
          <div className="col-md-4">
          <div style={{width: '18rem'}}>
                <div className="card-header header">
                <i className="fas fa-lock"></i> <b>Safety & security</b>
                </div>
                <ul className="li-container">
                    <li><i className="fas fa-check"></i> Fire extinguishers</li>
                    <li><i className="fas fa-check"></i> CCTV outside property</li>
                    <li><i className="fas fa-check"></i> CCTV in common areas</li>
                    <li><i className="fas fa-check"></i> Smoke alarms</li>
                    <li><i className="fas fa-check"></i> Safe Additional charge</li>
                </ul>
            </div>
            </div> 
          <div className="col-md-4">
          <div style={{width: '18rem'}}>
                <div className="card-header header">
                <i className="fas fa-language"></i> <b>Languages Spoken</b>
                </div>
                <ul className="li-container">
                    <li><i className="fas fa-check"></i> German</li>
                    <li><i className="fas fa-check"></i> English</li>
                    <li><i className="fas fa-check"></i> French</li>
                    <li><i className="fas fa-check"></i> Russian</li>
                    <li><i className="fas fa-check"></i> Turkish</li>
                </ul>
            </div>
            </div> 
          <div className="col-md-4">
          <div style={{width: '18rem'}}>
                <div className="card-header header">
                <i className="fas fa-utensils"></i> <b>Food & Drink</b>
                </div>
                <ul className="li-container">
                    <li><i className="fas fa-check"></i> Fruit Additional charge</li>
                    <li><i className="fas fa-check"></i> Bottle of water Additional charge</li>
                    <li><i className="fas fa-check"></i> Kid-friendly buffet</li>
                    <li><i className="fas fa-check"></i> Bar</li>
                    <li><i className="fas fa-check"></i> Restaurant</li>
                </ul>
            </div>
            </div> 
          <div className="col-md-4">
          <div style={{width: '18rem'}}>
                <div className="card-header header">
                <i className="fas fa-desktop"></i> <b>Front Desk Services</b>
                </div>
                <ul className="li-container">
                    <li><i className="fas fa-check"></i> Invoice provided</li>
                    <li><i className="fas fa-check"></i> Baggage storage</li>
                    <li><i className="fas fa-check"></i> Tour desk</li>
                    <li><i className="fas fa-check"></i> Express check-in/out</li>
                    <li><i className="fas fa-check"></i> 24-hour front desk</li>
                </ul>
            </div>
            </div> 
          <div className="col-md-4">
          <div style={{width: '18rem'}}>
                <div className="card-header header">
                <i className="fas fa-swimming-pool"></i> <b>swimming pool</b>
                </div>
                <ul className="li-container">
                    <li><i className="fas fa-check"></i> Seasonal</li>
                    <li><i className="fas fa-check"></i> Opening times</li>
                    <li><i className="fas fa-check"></i> All ages welcome</li>
                    <li><i className="fas fa-check"></i> Beach umbrella</li>
                    <li><i className="fas fa-check"></i> Pool with view</li>
                </ul>
            </div>
            </div> 
        </div>
        </div>
    );
};

export default Facilities;