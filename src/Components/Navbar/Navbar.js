import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import Menu from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../Navbar/Navbar.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const { t, i18n } = useTranslation();


    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setShowMenu(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/home" id="logo" className="navbar-logo">
                    Medic-Locate
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-menu desktopMenu">
                    <ScrollLink
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="navbar-item"
                    >
                        {t('home')}
                    </ScrollLink>

                    <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="navbar-item"
                    >
                        {t('about')}
                    </ScrollLink>

                    <ScrollLink
                        to="howitworks"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="navbar-item"
                    >
                        {t('howWeWork')}
                    </ScrollLink>

                    <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="navbar-item"
                    >
                        {t('contact')}
                    </ScrollLink>

                    <div className="dropdown navbar-item">
                        <button className="dropdown-toggle">
                            {t('language')}
                        </button>
                        <div className="dropdown-menu">
                            <button onClick={() => changeLanguage('en')}>English</button>
                            <button onClick={() => changeLanguage('sw')}>Swahili</button>
                        </div>
                    </div>

                    <Link to="/signup" className="navbar-item navbar-signup">
                        <button className="navbar-signup-btn">
                            <AccountCircleIcon /> {t('getStarted')}
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="navbar-menu-icon" onClick={() => setShowMenu(!showMenu)}>
                    <Menu />
                </div>

                {/* Mobile Menu */}
                <div className={`navbar-mobile-menu ${showMenu ? 'active' : ''}`}>
                    <Link to="/home" className="mobile-item" onClick={() => setShowMenu(false)}>
                        {t('home')}
                    </Link>

                    <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="mobile-item"
                        onClick={() => setShowMenu(false)}
                    >
                        {t('about')}
                    </ScrollLink>

                    <ScrollLink
                        to="howitworks"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="mobile-item"
                        onClick={() => setShowMenu(false)}
                    >
                        {t('howWeWork')}
                    </ScrollLink>

                    <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="mobile-item"
                        onClick={() => setShowMenu(false)}
                    >
                        {t('contact')}
                    </ScrollLink>

                    <Link to="/signup" className="mobile-item" onClick={() => setShowMenu(false)}>
                        {t('getStarted')}
                    </Link>

                    <div className="mobile-dropdown">
                        <button onClick={() => changeLanguage('en')}>English</button>
                        <button onClick={() => changeLanguage('sw')}>Swahili</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
