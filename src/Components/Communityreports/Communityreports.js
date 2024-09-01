import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../configs/firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Communityreports.css';
import { useTranslation } from 'react-i18next';

function Communityreports() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: ''
    });

    const navigate = useNavigate();
    const reportsCollection = collection(db, 'communityReports');

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
            await addDoc(reportsCollection, formData);
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', experience: '' });
            navigate('/thank-you');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="community-report">
            <h1>{t('communityReport')}</h1>
            <p>{t('weValueYourFeedback')}</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">{t('name')}:</label>
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
                    <label htmlFor="email">{t('email')}:</label>
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
                    <label htmlFor="experience">{t('yourExperience')}:</label>
                    <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">{t('submitReport')}</button>
            </form>
        </div>
    );
}

export default Communityreports;
