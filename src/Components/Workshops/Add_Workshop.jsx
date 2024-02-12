import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Workshops.css';

function AddWorkshop() {
    const [workshopData, setWorkshopData] = useState({
        name: '',
        speaker: '',
        description: '',
        date: '',
        time: '',
        venue: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkshopData(prevState => ({ ...prevState, [name]: value })
        );
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', workshopData.name);
        formData.append('speaker', workshopData.speaker);
        formData.append('description', workshopData.description);
        formData.append('date', workshopData.date);
        formData.append('time', workshopData.time);
        formData.append('venue', workshopData.venue);
        formData.append('image', image);

        alert('Workshop Added Successfully!');
        setWorkshopData({
            name: '',
            speaker: '',
            description: '',
            date: '',
            time: '',
            venue: ''
        });
        setImage(null);
    };

    return (
        <>
            <Navbar />
            <div className='addworkshop-field'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" name="name" value={workshopData.name} onChange={handleChange} placeholder='Workshop Name' />
                    </label>
                    <label>
                        <input type="text" name="speaker" value={workshopData.speaker} onChange={handleChange} placeholder='Speaker' />
                    </label>
                    <label>
                        <textarea type="text" name="description" value={workshopData.description} onChange={handleChange} placeholder='Description' />
                    </label>
                    <label>
                        <input type="date" name="date" value={workshopData.date} onChange={handleChange} placeholder='Date' />
                    </label>
                    <label>
                        <input type="time" name="time" value={workshopData.time} onChange={handleChange} placeholder='Time' />
                    </label>
                    <label>
                        <input type="text" name="venue" value={workshopData.venue} onChange={handleChange} placeholder='Venue' />
                    </label>
                    <label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </label>
                    <button type="submit">ADD WORKSHOP</button>
                </form>
            </div>
        </>
    );
}

export default AddWorkshop;
