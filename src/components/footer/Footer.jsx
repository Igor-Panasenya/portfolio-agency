import React from 'react';
import './footer.css';
import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {FaPinterestP} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="hero-footer">
            <div className="container">
                <article> SQWD </article>
                <p> 3rd Floor, Santa Monica Beach, CA, San Francisco <br/> (359) 0 123 456 789 - info@yourmail.com</p>
                <div className="footer-links">
                    <a className="contact-link" href="#"><FaFacebookF /></a>
                    <a className="contact-link" href="#"><BsTwitter /></a>
                    <a className="contact-link" href="#"><FaPinterestP/></a>
                </div>
            </div>

            <div className="hero-text">
                Copyright 2016 - All Rights Reserved - Designed by JD
            </div>
        </footer>
    );
};

export default Footer;