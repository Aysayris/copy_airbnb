import AppartmentCard from "./AppartmentCard.tsx";
import React, { useState, useEffect } from 'react';

const AppartmentList = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/apartments')
            .then((response) => {
                return response.json()
            })
            .then(data => {
                setApartments(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="appartment_list">
            {apartments.map(apartment => (
                <AppartmentCard key={apartment.id} apartment={apartment} />
            ))}
        </div>
    );
};

export default AppartmentList;