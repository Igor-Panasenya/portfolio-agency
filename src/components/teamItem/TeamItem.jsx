import React from 'react';
import './teamItem.css';

const TeamItem = ({teamItem}) => {
    return (
        <div className="team-item" style={{backgroundImage: `url(${teamItem.img})`}}>
            <div className="team-item-content">
                <div className="team-item-name">{teamItem.name}</div>
                <div className="team-line"></div>
                <div className="team-item-position">{teamItem.position}</div>
                <div className="team-item-text">{teamItem.body}</div>
            </div>
        </div>
    );
};

export default TeamItem;