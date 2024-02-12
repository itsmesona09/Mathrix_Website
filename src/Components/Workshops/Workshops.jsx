import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaPen } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Workshops.css';

function Workshops() {
    const [workshops, setWorkshops] = useState([]);

    const USERS_URL = 'http://localhost:3501/workshops';

    const navigate = useNavigate();

    useEffect(() => {
        const fetchWorkshops = async () => {
            try {
                const response = await fetch(USERS_URL);
                const existingWorkshops = await response.json();
                setWorkshops(existingWorkshops);
            } catch (error) {
                console.error("Failed to load", error);
            }
        };

        fetchWorkshops();
    }, []);

    return (
        <div>
            <Navbar />
            <h1>WORKSHOPS</h1>
            <div className="workshop-container">
                {workshops.map(workshop => (
                    <div key={workshop.id} className="workshop-item">
                        <h3>{workshop.title}</h3>
                    </div>
                ))}
            </div>
            <div className="workshop-actions">
                <li>
                    <button onClick={() => navigate('/addworkshop')}>
                        <FaPlus />
                    </button>
                </li>
                <button onClick={() => navigate('/updateworkshop')}>
                    <FaPen />
                </button>
                <button onClick={() => navigate('/deleteworkshop')}>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}

export default Workshops;