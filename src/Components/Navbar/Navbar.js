import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import '../Navbar/Navbar.css'

// import logo from "../Assets/logo1.png";
import "./Navbar.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
          
            <Link to="/home" id="logo">
            Code Queens
            </Link>
            <div className="desktopMenu">
                <ScrollLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Home
                </ScrollLink>


                <ScrollLink
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    About Us
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="howitworks"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    How We Work
                </ScrollLink>
                
                



                <ScrollLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Contact Us
                </ScrollLink>
              
            </div>

            <Link to="/Signup" className="desktoplistItem customLink">
                <button className="desktopMenuBtn"> <AccountCircleIcon /> Get Started</button>
            </Link>

            <div className="mobMenu">
                <Menu onClick={() => setShowMenu(!showMenu)} />
            </div>
            <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
                <Link activeClass="active" to="/home" className="listItem customLink">Home</Link>
               

                <ScrollLink
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    About Us
                </ScrollLink>
              



                <ScrollLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Contact Us
                </ScrollLink>
                <Link activeClass="active" to="/Signup" className="listItem customLink"> Get Started </Link>
            </div>
        </nav>
    );
}

export default Navbar;