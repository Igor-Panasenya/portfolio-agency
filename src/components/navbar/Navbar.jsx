import React, {useState} from 'react';
import './navbar.css';

const Navbar = () => {

    const [isActiveNavbar, setIsActiveNavbar] = useState(false)

    return (
        <div className="container">
            <nav className="navbar">
                <ul
                    onClick={() => setIsActiveNavbar(!isActiveNavbar)}
                    className={isActiveNavbar ? "nav-menu active" : "nav-menu"}
                >
                    <li className="nav-item">
                        <a href="#work" className="nav-link">WORK
                            <div className="nav-link-line"></div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">ABOUT
                            <div className="nav-link-line"></div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">SERVICES
                            <div className="nav-link-line"></div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#blog" className="nav-link">BLOG
                            <div className="nav-link-line"></div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">CONTACT
                            <div className="nav-link-line"></div>
                        </a>
                    </li>
                </ul>

                <div
                    onClick={() => setIsActiveNavbar(!isActiveNavbar)}
                    className={isActiveNavbar ? "hamburger active" : "hamburger"}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;