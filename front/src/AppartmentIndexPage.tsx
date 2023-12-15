import React, { useState, useEffect } from 'react';
import appImage from './assets/appartments/1.png'
import { useParams } from 'react-router-dom';

const AppartmentIndexPage = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/apartments/${id}`)
            .then(response => response.json())
            .then(data => {
                setApartment(data);
            })
            .catch(error => {
                console.error('Error fetching apartment:', error);
            });
    }, [id]);

    if (!apartment) {
        return <div>Loading...</div>;
    }

    const { location, distance, dates, price, image_url, rating } = apartment;

    return (
        <div className="appartment-details">
            <img src={appImage} alt={location} />
            <div>
                <b>{location}</b>
                <nav>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="black"/>
                    </svg>
                    {rating}
                </nav>
            </div>
            <div>{distance}</div>
            <div>{dates}</div>
            <div><b>{price} <span>ночь</span></b></div>
        </div>
    );
};

export default AppartmentIndexPage;
