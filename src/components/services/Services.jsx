import React from 'react';
import './services.css';
import { useState } from 'react'
import ServiceItem from "../serviceItem/ServiceItem";

const Services = () => {

    const [services, setServices] = useState([
        {
            id: '1',
            title: 'Branding',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            img: '../img/icon-01.png',
        },
        {
            id: '2',
            title: 'DESIGN',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            img: '../img/icon-02.png',
        },
        {
            id: '3',
            title: 'DEVELOPMENT',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            img: '../img/icon-03.png',
        },
    ])

    return (
        <section id="services" className="container">
            <h3>
                Our Services
                <div className="h3-line"></div>
            </h3>

            <div className="services-items">

                {services.map(serviceItem =>
                    <ServiceItem serviceItem={serviceItem} key={serviceItem.id} />
                )}

            </div>
        </section>
    );
};

export default Services;