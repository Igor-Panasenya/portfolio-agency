import React from 'react';
import './workItem.css';

const WorkItem = ({workItem}) => {
    return (
        <a className="link-work" href="#">
            <div className="work-item">
                <div className="item-column">

                    <img src={workItem.img} alt="photo"/>
                    <div className="work-item-content">
                        <h5>{workItem.category}</h5>
                        <p className="work-item-info">{workItem.body}</p>
                        <div className="btn-reed-more">reed more</div>
                    </div>
                </div>
                <h6><span>{workItem.title}</span></h6>
            </div>
        </a>
    );
};

export default WorkItem;