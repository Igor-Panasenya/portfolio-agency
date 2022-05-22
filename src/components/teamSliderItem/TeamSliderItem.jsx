import React from 'react';
import './teamSliderItem.css';

const TeamSliderItem = ({teamSliderItem}) => {
    return (
        <div className="team-slider-item">
            <p>{teamSliderItem.body}</p>
            <div className="team-slider-item-name">{teamSliderItem.name} <span>{teamSliderItem.position} </span></div>
            <img className="stars" src={teamSliderItem.status} alt="stars"/>
            <div className="team-slider-item-line"></div>
        </div>
    );
};

export default TeamSliderItem;