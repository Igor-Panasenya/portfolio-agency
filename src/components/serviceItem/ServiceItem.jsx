import React from 'react';
import './serviceItem.css';

const ServiceItem = ({serviceItem}) => {
    return (
        <a href="#" className="services-item">
            <div className="services-item-title">
                <h4>{serviceItem.title}
                    <div className="h4-line"></div>
                </h4>
                <div className="services-item-circle" style={{backgroundImage: `url(${serviceItem.img})`}}></div>
            </div>
            <div className="services-item-content">{serviceItem.body}</div>
            <div className="btn-reed-more">reed more</div>
        </a>
    );
};

export default ServiceItem;