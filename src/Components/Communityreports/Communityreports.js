import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../configs/firebase'; // Adjust the import path as needed
import { collection, addDoc } from 'firebase/firestore';
import './Communityreports.css';

function Communityreports() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: ''
    });

    const navigate = useNavigate();
    const reportsCollection = collection(db, 'communityReports'); // Reference to the Firestore collection

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add form data to Firestore
            await addDoc(reportsCollection, formData);
            console.log('Form submitted:', formData);

            // Reset form fields after submission
            setFormData({
                name: '',
                email: '',
                experience: ''
            });

            // Optionally, navigate to a thank you page or display a success message
            navigate('/thank-you'); // Adjust the route as necessary
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="community-report">
            <h1>Community Report</h1>
            <p>We value your feedback. Please share your experience after using our Health Facility Locator app.</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="experience">Your Experience:</label>
                    <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Submit Report</button>
            </form>
        </div>
    );
}

export default Communityreports;
