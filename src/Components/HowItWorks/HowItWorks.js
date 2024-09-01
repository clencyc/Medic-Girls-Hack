import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../Components/HowItWorks/HowItWorks.css';
import { MdOutlineWork } from "react-icons/md";
import { RiCoinsFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdSystemSecurityUpdate } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function HowItWorks() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Function to navigate to the login page when "Learn More" is clicked
    const handleLearnMore = () => {
        navigate('/login');
    }

    // Function to navigate to the community report page
    const handleReport = () => {
        navigate('/community-reports');
    }

    return (
        <div className='howitworks' id='howitworks'>
            <h1>{t('howItWorksTitle')}</h1>
            <div className="how-it-works">
                <div className="card">
                    <div className="container">
                        <h4 id='text'><MdOutlineWork />{t('healthFacilityLocator')}</h4>
                        <button className='learn'>{t('find')}</button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h4 id='text1'><RiCoinsFill />{t('healthInformation')}</h4>
                        <button className='learn' onClick={handleLearnMore}>{t('learnMore')}</button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h4 id='text2'><IoIosPeople />{t('communityReport')}</h4>
                        <button className='learn' onClick={handleReport}>{t('report')}</button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h4 id='text3'><MdSystemSecurityUpdate />{t('eventUpdates')}</h4>
                        <p>{t('eventUpdatesContent')}</p>
                        <button className='learn'>{t('subscribe')}</button>
                    </div>
                </div>
            </div>
            <button className='learn'>
                <Link className='sign-up' to="/signup">{t('joinUs')}</Link>
            </button>
        </div>
    );
}

export default HowItWorks;
