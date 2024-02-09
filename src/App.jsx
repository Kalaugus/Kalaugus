import React, { useState } from 'react';

const HomePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const csvData = `${formData.name},${formData.email},${formData.message}`;
        // Here you can do something with the CSV data, like sending it to a server or saving it locally
        console.log(csvData);
    };

    return (
        <div>
            <nav>
                {/* Navigation bar */}
            </nav>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HomePage;