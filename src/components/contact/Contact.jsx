import React from 'react';
import './contact.css';
import {BsBriefcase} from "react-icons/bs";
import {FaRegEnvelope} from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="boxes">
            <a href="#" className="together">
                <div className="box-content">
                    <BsBriefcase size={30}/>
                        <div className="box-title">Want to work together?</div>
                        <div className="box-text">Amazing. Tell us about your project!</div>
                </div>
            </a>
            <a href="#" className="contacts">
                <div className="box-content">
                    <FaRegEnvelope size={30}/>
                        <div className="box-title">Contact us</div>
                        <div className="box-text">Get in touch</div>
                </div>
            </a>
        </section>
    );
};

export default Contact;