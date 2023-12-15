import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppartmentAddPage = () => {
    const [formData, setFormData] = useState({
        location: '',
        distance: '',
        dates: '',
        price: '',
        image_url: '',
        rating: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('http://localhost:5000/apartments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('New apartment added:', data);
            navigate('/');
        })
        .catch(error => {
            console.error('Error adding new apartment:', error);
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="block">
            <h2>Add new apartment</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="location" placeholder="Location" onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="distance" placeholder="Distance" onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="dates" placeholder="Dates" onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="price" placeholder="Price" onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="image_url" placeholder="Image URL" onChange={handleChange} />
                <br/>
                <br/>
                <input type="text" name="rating" placeholder="Rating" onChange={handleChange} />
                <br/>
                <br/>
                <button type="submit">Add Apartment</button>
            </form>
        </div>
    );
};

export default AppartmentAddPage;
