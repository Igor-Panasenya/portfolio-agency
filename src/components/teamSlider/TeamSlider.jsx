import React, {useState} from 'react';
import './teamSlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import TeamSliderItem from "../teamSliderItem/TeamSliderItem";

const TeamSlider = () => {

    const [teamSliderItems, setTeamSliderItems] = useState([
        {
            id: 1,
            name: 'TIM CAHILL',
            position: ' / Creative Director',
            body: 'Sed do eiusmod tempor incididunt ut labore' +
                'et dolore magna aliqua. Ut enim ad minim veniam,' +
                'quis nostrud exercitation ullamco laboris nisi ut' +
                'aliquip ex ea commodo consequat.',
            status: './img/3.5.png',
        },
        {
            id: 2,
            name: 'DAVID JAMES',
            position: ' / Web Design',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna' +
                'aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            status: './img/5.5.png',
        },
        {
            id: 3,
            name: 'MICHAEL FRAUP',
            position: ' / Creative Director',
            body: 'Consectetur adipiscing elit, sed do eiusmod tempor' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad' +
                'minim veniam, quis nostrud exercitation ullamco laboris' +
                'nisi ut aliquip ex ea commodo consequat.',
            status: './img/4.5.png',
        },
    ])

    return (
        <div className="container" id="blog">
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                {teamSliderItems.map(teamSliderItem =>
                    <SwiperSlide>
                        <TeamSliderItem teamSliderItem={teamSliderItem} key={teamSliderItem.id}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default TeamSlider;