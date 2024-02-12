import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Workshops.css';

function UpdateWorkshop() {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3502/workshops')
            .then(response => response.json())
            .then(data => setWorkshops(data.workshops))
            .catch(error => console.error("Failed to load workshops", error));
    }, []);

    const handleUpdateWorkshop = (workshopId) => {
        console.log(`Update workshop with ID: ${workshopId}`);
    };

    return (
        <>
            <Navbar />
            <div className="workshop-container">
                {workshops.map(workshop => (
                    <div key={workshop.id}>
                        <h3>{workshop.name}</h3>
                        <p>Speaker: {workshop.speaker}</p>
                        <p>Description: {workshop.description}</p>
                        <p>Date: {workshop.date}</p>
                        <p>Time: {workshop.time}</p>
                        <p>Venue: {workshop.venue}</p>
                        <button type="button" onClick={() => handleUpdateWorkshop(workshop.id)}>UPDATE WORKSHOP</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UpdateWorkshop;