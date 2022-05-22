import React, {useState} from 'react';
import './team.css';
import TeamItem from "../teamItem/TeamItem";

const Team = () => {

    const [teamItems, setTeamItems] = useState([
        {
            id: 1,
            name: 'TOM JONES',
            position: 'Creative Director',
            body: 'Create with simplicity in mind!',
            img: './img/team-01.jpg',
        },
        {
            id: 2,
            name: 'MICHAEL FRAUP',
            position: 'Creative Director',
            body: 'Create with simplicity in mind!',
            img: './img/team-02.jpg',
        },
        {
            id: 3,
            name: 'TIM CAHILL',
            position: 'Web Design',
            body: 'Create with simplicity in mind!',
            img: './img/team-03.jpg',
        },
    ])

    return (
        <section id="about">
            <div className="container">
                <h3>
                    The Team
                    <div className="h3-line"></div>
                </h3>

                <div className="team-items">
                    {teamItems.map(teamItem =>
                        <TeamItem teamItem={teamItem} key={teamItem.id}/>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Team;